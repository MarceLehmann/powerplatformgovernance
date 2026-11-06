// Wochenvideo: Auswahl, Sprechtext, Ton (ElevenLabs), Video (Remotion 16:9 und 4:5), Untertitel, Texte fuer YouTube und LinkedIn.
//
// Aufruf (im Ordner tools/weekly-video, nach npm install):
//   node run.mjs --week 2026-W45 --lang de,en --dry-run     Auswahl, Texte und Zeichen pruefen (kein API-Aufruf)
//   node run.mjs --week 2026-W45 --lang de,en               erzeugen (braucht ELEVENLABS_API_KEY als Umgebungsvariable)
// Optionen: --root <Repo-Root> (Standard ../..), --out <Ordner> (Standard out), --budget <Zeichen gesamt> (Standard 2000 je Seite),
//           --max-chars <Zeichen je Video> (Standard aus site.json), --formats 16x9,4x5, --no-render, --week-to <YYYY-MM-DD> (Fenster kuerzen)
// Ergebnis in <out>/<Jahr>-W<KW>/: <site>_<Jahr>-KW<KW>_<lang>_<format>.mp4, .srt, _youtube.md, _linkedin.md, manifest.json, auswahl.md
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  weekWindow, isoWeekOf, planShort, buildShortAudio, readPosts, selectPosts, buildScript, speak, wordsFromAlignment, toSrt, topicLabels, dateLabel, rangeLabel, ss,
} from './lib.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (n, d = null) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const flag = n => args.includes(n);

const site = JSON.parse(fs.readFileSync(path.join(here, 'site.json'), 'utf8'));
const root = path.resolve(here, opt('--root', '../..'));
const now = new Date();
const wk = opt('--week') || (() => { const w = isoWeekOf(now); return `${w.year}-W${String(w.week).padStart(2, '0')}`; })();
const win = weekWindow(wk);
if (opt('--week-to')) win.to = opt('--week-to');
const langs = opt('--lang', 'de,en').split(',');
const maxChars = +opt('--max-chars', site.maxCharsPerVideo);
const budget = +opt('--budget', 2000);
const formats = opt('--formats', '16x9,4x5,9x16').split(',');
const shortMax = +opt('--short-max', 59.5);
const dry = flag('--dry-run');
const outDir = path.resolve(here, opt('--out', 'out'), `${win.year}-W${String(win.week).padStart(2, '0')}`);
const kw = String(win.week);

// ---------- Auswahl ----------
let topIds = [];
const topFile = path.join(root, 'tools/audio/top-articles.json');
if (fs.existsSync(topFile)) { try { topIds = JSON.parse(fs.readFileSync(topFile, 'utf8')).ranking.slice(0, 20).map(x => x.id); } catch { /* optional */ } }
const posts = readPosts(root);
const sel = selectPosts(posts, { from: win.from, to: win.to, site, topIds, max: 5 });
console.log(`${site.name} ${wk} (${win.from} bis ${win.to}): Kandidaten ${sel.poolSize}, gewaehlt ${sel.picked.length}`);
if (sel.picked.length < 3) { console.log('Weniger als 3 Beitraege mit DE und EN in dieser Woche, kein Video.'); process.exit(0); }
sel.picked.forEach((x, i) => console.log(`  ${i + 1}. ${x.en.day} ${x.id.slice(0, 8)} Wert ${x.score} (${x.why.join(', ')}) | ${x.en.source} | ${x.en.title}`));

// ---------- Sprechtexte ----------
const scripts = {};
let total = 0;
for (const lang of langs) {
  scripts[lang] = buildScript({ picked: sel.picked, lang, site, week: kw, maxChars });
  total += scripts[lang].chars;
  console.log(`\n[${lang}] ${scripts[lang].chars} Zeichen\n${scripts[lang].text}`);
}
console.log(`\nZeichen gesamt: ${total} (Budget ${budget})`);
if (total > budget) { console.error('Budget ueberschritten, nichts erzeugt.'); process.exit(2); }
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'auswahl.md'), selectionDoc(sel, win, site));
if (dry) process.exit(0);

// ---------- Ton ----------
const key = process.env.ELEVENLABS_API_KEY;
const cache = path.join(here, 'out', '_audio-cache');
const pub = path.join(outDir, '_public');
fs.mkdirSync(pub, { recursive: true });
const results = {};
let used = 0;
for (const lang of langs) {
  const sp = await speak({ text: scripts[lang].text, lang, site, cacheDir: cache, key });
  used += sp.chars;
  console.log(`Ton ${lang}: ${sp.cached ? 'aus Cache (0 Zeichen)' : sp.chars + ' Zeichen verbraucht'}`);
  const words = wordsFromAlignment(sp.alignment);
  const dur = sp.alignment.character_end_times_seconds.at(-1);
  const audioName = `${site.id}_${win.year}-KW${kw}_${lang}.mp3`;
  fs.copyFileSync(sp.mp3, path.join(pub, audioName));
  fs.copyFileSync(sp.mp3, path.join(outDir, audioName));
  results[lang] = { sp, words, dur, audioName };
}
console.log(`ElevenLabs-Zeichen in diesem Lauf: ${used}`);

// ---------- Szenenzeiten, Untertitel, Texte ----------
const props = {}, shortProps = {}, shortInfo = {};
for (const lang of langs) {
  const { words, dur, audioName } = results[lang];
  const T = site.text[lang];
  const s = scripts[lang];
  const startOf = seg => (words.find(w => w.i0 >= seg.charStart) || words[0]).s;
  const itemSegs = s.segs.filter(x => x.kind === 'item');
  const outroSeg = s.segs.find(x => x.kind === 'outro');
  const items = itemSegs.map((seg, i) => {
    const st = startOf(seg);
    const en = i + 1 < itemSegs.length ? startOf(itemSegs[i + 1]) : startOf(outroSeg);
    const x = sel.picked[i];
    return { nr: i + 1, start: st, end: en, title: seg.title, source: seg.source, tags: x.en.tags.map(t => site.tagLabels[t] || t), day: x.en.day };
  });
  const durationSec = Math.ceil((dur + 1.6) * 30) / 30;
  props[lang] = {
    audio: audioName, durationSec, accent: site.accent, siteName: site.name, domain: site.domain,
    qrUrl: `https://${site.domain}/?utm_source=wochenvideo&utm_medium=video`,
    labels: {
      kicker: T.kicker, week: T.week.replace('{kw}', kw), range: rangeLabel(win.from, win.to, lang, T.months), aiNotice: T.aiNotice,
      outroLine: T.outroLine, source: T.source,
      footer: lang === 'de' ? 'Stimme und Untertitel sind KI-generiert. Zusammenfassungen nach Quelle.' : 'Voice and subtitles are AI-generated. Summaries follow their sources.',
    },
    introEnd: items[0].start, outroStart: startOf(outroSeg), items, words: words.map(w => ({ t: w.t, s: w.s, e: w.e })),
  };
  const base = `${site.id}_${win.year}-KW${kw}_${lang}`;
  fs.writeFileSync(path.join(outDir, `${base}.srt`), toSrt(words));
  fs.writeFileSync(path.join(outDir, `${base}_youtube.md`), youtubeDoc({ lang, site, sel, win, kw, items, props: props[lang], T }));
  fs.writeFileSync(path.join(outDir, `${base}_linkedin.md`), linkedinDoc({ lang, site, sel, kw }));
  fs.writeFileSync(path.join(outDir, `${base}_sprechtext.txt`), s.text + '\n');

  // ---------- Short 9:16 (hoechstens shortMax Sekunden, gleiche Tonspur) ----------
  if (formats.includes('9x16')) {
    const plan = planShort({ words, segs: s.segs, maxSec: shortMax });
    const shortAudio = `${base}_short.mp3`;
    buildShortAudio({ src: results[lang].sp.mp3, plan, out: path.join(pub, shortAudio) });
    fs.copyFileSync(path.join(pub, shortAudio), path.join(outDir, shortAudio));
    const sw = plan.words;
    const sStart = seg => (sw.find(w => w.i0 >= seg.charStart) || sw[0]).s;
    const sItemSegs = itemSegs.slice(0, plan.keep);
    const sItems = sItemSegs.map((seg, i) => {
      const x = sel.picked[i];
      return { nr: i + 1, start: sStart(seg), end: i + 1 < sItemSegs.length ? sStart(sItemSegs[i + 1]) : sStart(outroSeg), title: seg.title, source: seg.source, tags: x.en.tags.map(t => site.tagLabels[t] || t), day: x.en.day };
    });
    const sDur = Math.ceil((plan.duration + 0.9) * 30) / 30;
    shortProps[lang] = { ...props[lang], audio: shortAudio, durationSec: sDur, introEnd: sItems[0].start, outroStart: sStart(outroSeg), items: sItems, words: sw.map(w => ({ t: w.t, s: w.s, e: w.e })) };
    shortInfo[lang] = { seconds: sDur, tempo: +plan.tempo.toFixed(3), items: plan.keep, dropped: plan.dropped, introShortened: plan.introCut, over: plan.over };
    console.log(`Short ${lang}: ${sDur.toFixed(1)} s, Tempo ${plan.tempo.toFixed(2)}, ${plan.keep} von ${itemSegs.length} Beitraegen${plan.over ? ', ACHTUNG: laenger als ' + shortMax + ' s' : ''}`);
    fs.writeFileSync(path.join(outDir, `${base}_short.srt`), toSrt(sw));
    fs.writeFileSync(path.join(outDir, `${base}_short_youtube.md`), shortDoc({ lang, site, sel, win, kw, plan, T }));
  }
}

// ---------- Rendern ----------
if (!flag('--no-render')) {
  const { bundle } = await import('@remotion/bundler');
  const { renderMedia, selectComposition } = await import('@remotion/renderer');
  const serveUrl = await bundle({ entryPoint: path.join(here, 'src/index.ts'), publicDir: pub });
  for (const lang of langs) {
    for (const f of formats) {
      const id = { '16x9': 'Week16x9', '4x5': 'Week4x5', '9x16': 'Short9x16' }[f];
      const pr = f === '9x16' ? shortProps[lang] : props[lang];
      const composition = await selectComposition({ serveUrl, id, inputProps: pr });
      const outputLocation = path.join(outDir, `${site.id}_${win.year}-KW${kw}_${lang}_${f}.mp4`);
      await renderMedia({ composition, serveUrl, codec: 'h264', audioCodec: 'aac', audioBitrate: '192k', outputLocation, inputProps: pr, crf: 20, pixelFormat: 'yuv420p',
        onProgress: ({ progress }) => process.stdout.write(`\r${lang} ${f} ${(progress * 100).toFixed(0)}%   `) });
      console.log(`\n-> ${outputLocation}`);
    }
  }
}
fs.rmSync(pub, { recursive: true, force: true });
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({
  site: site.id, week: wk, window: win, generatedAt: now.toISOString(), elevenlabsChars: used,
  short: shortInfo, chars: Object.fromEntries(langs.map(l => [l, scripts[l].chars])), seconds: Object.fromEntries(langs.map(l => [l, props[l].durationSec])),
  picked: sel.picked.map(x => ({ id: x.id, day: x.en.day, source: x.en.source, titleEn: x.en.title, titleDe: x.de.title, score: x.score, why: x.why, urlDe: `https://${site.domain}${x.de.permalink}`, urlEn: `https://${site.domain}${x.en.permalink}`, sourceUrl: x.en.sourceUrl })),
  files: fs.readdirSync(outDir).filter(f => f.endsWith('.mp4')),
}, null, 2));
console.log('Fertig:', outDir);

// ---------- Textbausteine ----------
function selectionDoc(sel, win, site) {
  const rows = sel.picked.map((x, i) => `${i + 1}. ${x.en.day} | ${x.en.source} | ${x.en.title}\n   Wert ${x.score} (${x.why.join(', ')}), nach Vielfaltsabzug ${x.adj}`).join('\n');
  return `# Wochenauswahl ${site.name}, ${win.from} bis ${win.to}\n\nKandidaten (kuratierte Beitraege mit DE und EN in der Woche): ${sel.poolSize}\n\n${rows}\n\nKriterien: siehe tools/weekly-video/README.md. Die Auswahl ist formal (Thema, Aktualitaet der Quelle, Animation, Ranking, Vielfalt), nicht inhaltlich wertend.\n`;
}
function youtubeDoc({ lang, site, sel, win, kw, items, props, T }) {
  const tags = topicLabels(sel.picked, site, 3);
  let title = site.youtube[lang].title.replace('{kw}', kw).replace('{year}', win.year).replace('{name}', site.name).replace('{tags}', tags.join(', '));
  if (title.length > 100) title = title.replace(', ' + tags[2], '');
  const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const marks = [0, ...items.map(i => i.start), props.outroStart, props.durationSec];
  const chaptersOk = marks.slice(1).every((m, k) => m - marks[k] >= 10); // YouTube verlangt je Kapitel mindestens 10 Sekunden
  const chapters = chaptersOk ? [`0:00 ${lang === 'de' ? 'Überblick' : 'Overview'}`, ...items.map(i => `${mmss(i.start)} ${i.nr}. ${i.title.length > 70 ? i.title.slice(0, 67) + '...' : i.title}`), `${mmss(props.outroStart)} ${lang === 'de' ? 'Alle Beiträge' : 'All posts'}`].join('\n') : '';
  const srcs = sel.picked.map((x, i) => {
    const p = x[lang];
    return `${i + 1}. ${ss(p.title)}\n   ${lang === 'de' ? 'Zusammenfassung' : 'Summary'}: https://${site.domain}${p.permalink}\n   ${T.source}: ${p.source} ${p.sourceUrl}`;
  }).join('\n');
  const intro = lang === 'de'
    ? `Fünf Beiträge der Kalenderwoche ${kw} von ${site.name}: ${tags.join(', ')}. Jeder Beitrag ist eine Kurzfassung mit Quelle.`
    : `Five posts from week ${kw} on ${site.name}: ${tags.join(', ')}. Each post is a short summary with its source.`;
  const notice = lang === 'de'
    ? 'Hinweis: Stimme (KI-Klon der Stimme von Marcel Lehmann) und Untertitel sind KI-generiert. Die Beiträge fassen fremde Artikel zusammen, die Originale stehen oben bei jeder Quelle.'
    : 'Note: The voice (an AI clone of Marcel Lehmann\'s voice) and the subtitles are AI-generated. The posts summarise third-party articles; the originals are linked above with each source.';
  return `# YouTube ${site.name} ${lang.toUpperCase()} KW${kw}\n\nTitel (${title.length} Zeichen):\n${title}\n\nBeschreibung:\n${intro}\n\n${chapters ? (lang === 'de' ? 'Kapitel' : 'Chapters') + '\n' + chapters + '\n\n' : ''}${lang === 'de' ? 'Beiträge und Quellen' : 'Posts and sources'}\n${srcs}\n\n${notice}\n${lang === 'de' ? 'Mehr' : 'More'}: https://${site.domain}\n\nStudio-Einstellung (von Hand oder per Buffer isAiGenerated): "Veränderte oder synthetische Inhalte" = Ja.\n`;
}
function linkedinDoc({ lang, site, sel, kw }) {
  const lead = lang === 'de'
    ? `Fünf Beiträge, die ich diese Woche auf ${site.name} gesammelt habe (Kalenderwoche ${kw}).`
    : `Five posts I collected on ${site.name} this week (week ${kw}).`;
  const list = sel.picked.map(x => `→ ${ss(x[lang].title)} (${lang === 'de' ? 'Quelle' : 'Source'}: ${x[lang].source})`).join('\n');
  const tail = lang === 'de' ? 'Stimme und Untertitel im Video sind KI-generiert. Alle Links im ersten Kommentar.' : 'The voice and subtitles in the video are AI-generated. All links in the first comment.';
  const links = sel.picked.map(x => `${ss(x[lang].title)}: https://${site.domain}${x[lang].permalink}`).join('\n');
  return `# LinkedIn ${site.name} ${lang.toUpperCase()} KW${kw}\n\nPosttext (erster Satz = persönlicher Satz von Marcel, vor Freigabe prüfen oder ersetzen):\n${lead}\n\n${list}\n\n${tail}\n\nErster Kommentar:\n${site.domain}: https://${site.domain}/?utm_source=linkedin&utm_medium=wochenvideo\n${links}\n`;
}

function shortDoc({ lang, site, sel, win, kw, plan, T }) {
  const shown = sel.picked.slice(0, plan.keep);
  const tags = topicLabels(shown, site, 3);
  let title = site.youtube[lang].title.replace('{kw}', kw).replace('{year}', win.year).replace('{name}', site.name).replace('{tags}', tags.join(', '));
  if (title.length > 100) title = title.replace(', ' + tags[2], '');
  const intro = lang === 'de'
    ? `Die wichtigsten Power-Platform-News der Kalenderwoche ${kw} in unter einer Minute: ${tags.join(', ')}. ${shown.length} Beiträge, jeder mit Quelle.`
    : `The key Power Platform news of week ${kw} in under a minute: ${tags.join(', ')}. ${shown.length} posts, each with its source.`;
  const srcs = shown.map((x, i) => {
    const p = x[lang];
    return `${i + 1}. ${ss(p.title)}\n   ${lang === 'de' ? 'Zusammenfassung' : 'Summary'}: https://${site.domain}${p.permalink}\n   ${T.source}: ${p.source} ${p.sourceUrl}`;
  }).join('\n');
  const notice = lang === 'de'
    ? 'Hinweis: Stimme (KI-Klon der Stimme von Marcel Lehmann) und Untertitel sind KI-generiert. Die Beiträge fassen fremde Artikel zusammen, die Originale stehen bei jeder Quelle.'
    : "Note: The voice (an AI clone of Marcel Lehmann's voice) and the subtitles are AI-generated. The posts summarise third-party articles; the originals are linked with each source.";
  const hash = ['#Shorts', '#PowerPlatform', ...tags.map(t => '#' + t.replace(/[^A-Za-z0-9]/g, ''))].join(' ');
  const description = `${intro}\n\n${srcs}\n\n${notice}\n${lang === 'de' ? 'Alle Beiträge' : 'All posts'}: https://${site.domain}\n\n${hash}`;
  return `# YouTube Short ${site.name} ${lang.toUpperCase()} KW${kw}\n\nTitel (${title.length} Zeichen):\n${title}\n\nBeschreibung:\n${description}\n`;
}
