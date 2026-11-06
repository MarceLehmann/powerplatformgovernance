// Gemeinsame Funktionen: Woche, Beitraege lesen, Auswahl, Sprechtext, ElevenLabs, Untertitel.
// Regel: Der Sprechtext besteht NUR aus Titel, erstem TL;DR-Satz (falls er ins Zeichenbudget passt) und Quellenname.
// Nichts wird umformuliert, bewertet oder ergaenzt (kuratierte Inhalte bleiben unveraendert).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import YAML from 'yaml';

// ---------- Woche ----------
export function isoWeekStart(year, week) {
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const dow = (jan4.getUTCDay() + 6) % 7; // Montag = 0
  const mon = new Date(jan4); mon.setUTCDate(jan4.getUTCDate() - dow + (week - 1) * 7);
  return mon;
}
export function isoWeekOf(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  d.setUTCDate(d.getUTCDate() + 3 - ((d.getUTCDay() + 6) % 7)); // Donnerstag der Woche
  const year = d.getUTCFullYear();
  return { year, week: Math.floor((d - Date.UTC(year, 0, 1)) / 86400000 / 7) + 1 };
}
export const ymd = d => d.toISOString().slice(0, 10);
export function weekWindow(weekStr) {
  const m = /^(\d{4})-W(\d{1,2})$/.exec(weekStr);
  if (!m) throw new Error('Woche im Format 2026-W45 angeben');
  const year = +m[1], week = +m[2];
  const from = isoWeekStart(year, week);
  const to = new Date(from); to.setUTCDate(from.getUTCDate() + 6);
  return { year, week, from: ymd(from), to: ymd(to) };
}
export function dateLabel(isoDay, lang, months) {
  const [y, m, d] = isoDay.split('-').map(Number);
  return lang === 'de' ? `${d}. ${months[m - 1]} ${y}` : `${months[m - 1]} ${d}, ${y}`;
}
export function rangeLabel(from, to, lang, months) {
  const [fy, fm, fd] = from.split('-').map(Number), [ty, tm, td] = to.split('-').map(Number);
  if (lang === 'de') return fm === tm ? `${fd}. bis ${td}. ${months[tm - 1]} ${ty}` : `${fd}. ${months[fm - 1]} bis ${td}. ${months[tm - 1]} ${ty}`;
  return fm === tm ? `${months[fm - 1]} ${fd} to ${td}, ${ty}` : `${months[fm - 1]} ${fd} to ${months[tm - 1]} ${td}, ${ty}`;
}

// ---------- Beitraege ----------
const norm = s => s.split('\r\n').join('\n');
export function readPosts(root) {
  const dir = path.join(root, '_posts');
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const m = /^(\d{4}-\d{2}-\d{2})-.*-(de|en)\.md$/.exec(f);
    if (!m) continue;
    const raw = norm(fs.readFileSync(path.join(dir, f), 'utf8'));
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fm) continue;
    let y; try { y = YAML.parse(fm[1]); } catch { continue; }
    if (!y || y.content_type !== 'curated_summary' || !y.curation_id) continue;
    out.push({
      file: f, day: m[1], lang: m[2], id: String(y.curation_id), title: String(y.title || ''), description: String(y.description || ''),
      tags: Array.isArray(y.tags) ? y.tags.map(String) : [], source: String(y.source_name || ''), sourceUrl: String(y.source_url || ''),
      sourceSite: String(y.source_site_url || ''), sourceUpdated: String(y.source_updated_at || y.source_published_at || ''),
      permalink: String(y.permalink || ''), animation: !!y.animation, body: fm[2],
    });
  }
  return out;
}

const clean = s => s.replace(/\{%.*?%\}/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\s*&gt;\s*/g, ', ').replace(/&amp;/g, 'und').replace(/&[a-z]+;/g, ' ').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
// Satzende nur nach Buchstabe, Jahreszahl oder Prozent und vor Grossbuchstabe (nicht bei "15. November", "10.000", ".NET")
const sentences = s => s.split(/(?<=(?:[^\d.\s]|\d{4}|%)[.!?])\s+(?=[A-ZÄÖÜ„"])/).map(x => x.trim()).filter(Boolean);
export const ss = s => s.replace(/ß/g, 'ss');

export function tldrSentences(p) {
  const tl = p.body.match(/##\s*TL;DR\s*\n+([\s\S]*?)(?:\n##\s|\n\{%|$)/);
  const src = clean(tl ? tl[1] : '') || clean(p.description);
  return sentences(src).map(ss);
}
// Quellenname: bei nicht-lateinischer Schrift (Japanisch etc.) liest die Stimme ihn falsch, dann nehmen wir die Domain
export function sourceLabel(p) {
  if (p.source && !/[^\u0000-ɏ‐-‧]/.test(p.source)) return p.source;
  try { return new URL(p.sourceSite || p.sourceUrl).hostname.replace(/^www\./, ''); } catch { return p.source || ''; }
}

// ---------- Auswahl ----------
// Formale Kriterien, keine inhaltliche Wertung. Jeder Schritt steht in README.md.
export function selectPosts(posts, { from, to, site, topIds = [], max = 5 }) {
  const byId = new Map();
  for (const p of posts) {
    if (p.day < from || p.day > to) continue;
    const e = byId.get(p.id) || {};
    e[p.lang] = p;
    byId.set(p.id, e);
  }
  const pool = [...byId.values()].filter(e => e.de && e.en); // beide Sprachen vorhanden
  const score = e => {
    const p = e.en; const why = [];
    let s = 0;
    const tw = Math.min(site.tagCap || 4, p.tags.reduce((a, t) => a + (site.tagWeights[t] || 0), 0)); s += tw; why.push(`Thema ${tw}`);
    if (p.animation) { s += 2; why.push('Animation 2'); }
    const upd = Date.parse(p.sourceUpdated || ''); const end = Date.parse(to);
    if (upd && end - upd <= 14 * 86400000 && upd <= end + 86400000) { s += 2; why.push('Quelle aktuell 2'); }
    if (topIds.some(t => p.id.startsWith(t))) { s += 2; why.push('Top-Ranking 2'); }
    return { s, why };
  };
  let rest = pool.map(e => ({ e, ...score(e) }));
  const picked = []; const srcCount = {}, tagCount = {};
  while (picked.length < max && rest.length) {
    for (const r of rest) {
      r.adj = r.s - 2 * (srcCount[r.e.en.source] || 0) - (tagCount[r.e.en.tags[0]] || 0); // Vielfalt: gleiche Quelle -2, gleiches Hauptthema -1
    }
    rest.sort((a, b) => b.adj - a.adj || b.e.en.day.localeCompare(a.e.en.day) || a.e.en.id.localeCompare(b.e.en.id));
    const r = rest.shift();
    picked.push(r);
    srcCount[r.e.en.source] = (srcCount[r.e.en.source] || 0) + 1;
    tagCount[r.e.en.tags[0]] = (tagCount[r.e.en.tags[0]] || 0) + 1;
  }
  // Anzeigereihenfolge chronologisch (keine Rangfolge-Aussage)
  picked.sort((a, b) => a.e.en.day.localeCompare(b.e.en.day) || a.e.en.id.localeCompare(b.e.en.id));
  return { poolSize: pool.length, picked: picked.map(r => ({ id: r.e.en.id, de: r.e.de, en: r.e.en, score: r.s, adj: r.adj, why: r.why })) };
}

// ---------- Sprechtext ----------
const fill = (t, v) => t.replace(/\{(\w+)\}/g, (_, k) => v[k]);
export function buildScript({ picked, lang, site, week, maxChars }) {
  const T = site.text[lang];
  const intro = fill(T.intro, { name: site.name, kw: week });
  const outro = fill(T.outro, { domain: site.domain });
  const items = picked.map((x, i) => {
    const p = x[lang]; const sents = tldrSentences(p);
    return { id: x.id, post: p, ordinal: T.ordinals[i] || String(i + 1), title: ss(clean(p.title)).replace(/[.!?]+$/, ''), source: sourceLabel(p), sents, keep: sents.length ? 1 : 0 };
  });
  const itemText = it => `${it.ordinal}. ${it.title}.${it.keep ? ' ' + it.sents[0] : ''} ${T.source}: ${it.source}.`;
  const total = () => intro.length + outro.length + items.reduce((a, it) => a + itemText(it).length, 0) + items.length + 1;
  // erst nur Beitraege mit kurzem TL;DR-Satz behalten: so lange den laengsten Satz streichen, bis das Budget passt
  while (total() > maxChars) {
    const cand = items.filter(it => it.keep).sort((a, b) => itemText(b).length - itemText(a).length)[0];
    if (!cand) throw new Error(`Sprechtext ${lang} hat ${total()} Zeichen (Budget ${maxChars}), auch ohne TL;DR-Saetze`);
    cand.keep = 0;
  }
  const segs = [{ kind: 'intro', text: intro }, ...items.map(it => ({ kind: 'item', id: it.id, text: itemText(it), title: it.title, source: it.source, hasSentence: !!it.keep, post: it.post })), { kind: 'outro', text: outro }];
  let text = '';
  for (const s of segs) { if (text) text += ' '; s.charStart = text.length; text += s.text; }
  return { text, segs, chars: text.length };
}

// ---------- ElevenLabs (mit Zeitstempeln) ----------
export async function speak({ text, lang, site, cacheDir, key }) {
  const hash = crypto.createHash('sha1').update(JSON.stringify([text, lang, site.voiceId, site.model])).digest('hex').slice(0, 12);
  const mp3 = path.join(cacheDir, `${hash}.mp3`), al = path.join(cacheDir, `${hash}.json`);
  if (fs.existsSync(mp3) && fs.existsSync(al)) return { mp3, alignment: JSON.parse(fs.readFileSync(al, 'utf8')), cached: true, chars: 0 };
  if (!key) throw new Error('ELEVENLABS_API_KEY fehlt');
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${site.voiceId}/with-timestamps?output_format=mp3_44100_128`, {
    method: 'POST', headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: site.model, language_code: lang, voice_settings: { stability: 0.5, similarity_boost: 0.8 } }),
  });
  if (!r.ok) throw new Error(`ElevenLabs HTTP ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const j = await r.json();
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.writeFileSync(mp3, Buffer.from(j.audio_base64, 'base64'));
  fs.writeFileSync(al, JSON.stringify(j.alignment));
  return { mp3, alignment: j.alignment, cached: false, chars: text.length };
}

// Zeichen-Zeitstempel zu Woertern
export function wordsFromAlignment(a) {
  const ch = a.characters, st = a.character_start_times_seconds, en = a.character_end_times_seconds;
  const words = []; let cur = null;
  ch.forEach((c, i) => {
    if (/\s/.test(c)) { if (cur) { words.push(cur); cur = null; } return; }
    if (!cur) cur = { t: '', s: st[i], e: en[i], i0: i };
    cur.t += c; cur.e = en[i];
  });
  if (cur) words.push(cur);
  return words;
}

export function toSrt(words) {
  const t = s => { const ms = Math.round(s * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, sec = Math.floor(ms / 1000) % 60; return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };
  const cues = []; let g = [];
  for (const w of words) { g.push(w); if (g.length >= 7 || /[.!?]$/.test(w.t) || (g.length >= 4 && /[,;:]$/.test(w.t))) { cues.push(g); g = []; } }
  if (g.length) cues.push(g);
  return cues.map((c, i) => `${i + 1}\n${t(c[0].s)} --> ${t(c[c.length - 1].e)}\n${c.map(w => w.t).join(' ')}\n`).join('\n');
}

// ---------- Texte fuer YouTube und LinkedIn ----------
export function topicLabels(picked, site, n = 3) {
  const cnt = {};
  picked.forEach(x => x.en.tags.forEach(t => { cnt[t] = (cnt[t] || 0) + 1; }));
  return Object.entries(cnt).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n).map(([t]) => site.tagLabels[t] || t.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
}

// ---------- Short (9:16, hoechstens 60 Sekunden) ----------
// Gleiche Tonspur wie das lange Video (kein neuer ElevenLabs-Aufruf). Reihenfolge der Mittel:
// 1. Zweiten Satz der Einleitung weglassen  2. Pausen auf 0,2 s kuerzen  3. Tempo bis maxTempo
// 4. Reicht das nicht, letzte Beitraege weglassen (mindestens minItems bleiben). Wortzeiten werden mitgerechnet.
export function planShort({ words, segs, maxSec = 60, tail = 0.9, maxTempo = 1.12, gapKeep = 0.1, minItems = 3 }) {
  const introSeg = segs.find(s => s.kind === 'intro');
  const itemSegs = segs.filter(s => s.kind === 'item');
  const outroSeg = segs.find(s => s.kind === 'outro');
  const dot = introSeg.text.search(/[.!?]\s/);
  const introCut = dot >= 0 ? [introSeg.charStart + dot + 1, itemSegs[0].charStart] : null;
  const all = words.map((w, idx) => ({ ...w, idx }));
  let keep = itemSegs.length;
  for (;;) {
    const removed = [introCut, keep < itemSegs.length ? [itemSegs[keep].charStart, outroSeg.charStart] : null].filter(Boolean);
    const kept = all.filter(w => !removed.some(([a, b]) => w.i0 >= a && w.i0 < b));
    const gapAfter = w => (all[w.idx + 1] ? all[w.idx + 1].s - w.e : 0.3);
    const gapBefore = w => (all[w.idx - 1] ? w.s - all[w.idx - 1].e : 0.3);
    const pieces = [];
    let a = Math.max(0, kept[0].s - Math.min(0.1, gapBefore(kept[0]) / 2));
    for (let i = 1; i < kept.length; i++) {
      const p = kept[i - 1], n = kept[i];
      if (n.idx === p.idx + 1 && n.s - p.e <= 0.3) continue;
      pieces.push([a, p.e + Math.min(gapKeep, gapAfter(p) / 2)]);
      a = n.s - Math.min(gapKeep, gapBefore(n) / 2);
    }
    const last = kept[kept.length - 1];
    pieces.push([a, last.e + Math.min(0.15, gapAfter(last) / 2)]);
    const raw = pieces.reduce((s, [x, y]) => s + (y - x), 0);
    const tempo = Math.max(1, raw / (maxSec - tail));
    if (tempo <= maxTempo || keep <= minItems) {
      const offs = []; let o = 0;
      for (const [x, y] of pieces) { offs.push(o); o += y - x; }
      const map = t => { const k = pieces.findIndex(([x, y]) => t >= x - 1e-6 && t <= y + 1e-6); return (offs[k] + t - pieces[k][0]) / tempo; };
      const mapped = kept.map(w => ({ t: w.t, i0: w.i0, s: map(w.s), e: map(w.e) }));
      const duration = raw / tempo;
      return { pieces, tempo, duration, words: mapped, keep, dropped: itemSegs.length - keep, introCut: !!introCut, over: duration + tail > maxSec + 0.05 };
    }
    keep--;
  }
}

export function buildShortAudio({ src, plan, out }) {
  const parts = plan.pieces.map(([a, b], i) => `[0:a]atrim=start=${a.toFixed(3)}:end=${b.toFixed(3)},asetpts=PTS-STARTPTS[a${i}]`);
  const cat = plan.pieces.map((_, i) => `[a${i}]`).join('') + `concat=n=${plan.pieces.length}:v=0:a=1` + (plan.tempo > 1.001 ? `,atempo=${plan.tempo.toFixed(4)}` : '') + '[o]';
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', '-i', src, '-filter_complex', [...parts, cat].join(';'), '-map', '[o]', '-c:a', 'libmp3lame', '-b:a', '192k', out], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error('ffmpeg: ' + (r.stderr || r.error));
}
