// Kurzfassung als Tonspur (Deutsch, 20 bis 30 s) mit Marcels ElevenLabs-Stimme.
// Text kommt ausschliesslich aus dem vorhandenen Beitrag: Titel + TL;DR (Fallback: description) + "Quelle: <Name>".
// Nichts wird umformuliert oder bewertet (kuratierte Inhalte bleiben unveraendert).
//
// Aufruf (im Repo-Root):
//   node tools/audio/make-audio.mjs --since 2026-10-29 --top tools/audio/top-articles.json [--dry-run] [--force]
//   node tools/audio/make-audio.mjs --ids e835b13d,0d70251a
// Key: Umgebungsvariable ELEVENLABS_API_KEY (nie in Dateien). Stimme: ELEVENLABS_VOICE_ID (Default Marcels geklonte Stimme).
// Ausgabe: assets/audio/<curation_id>-de.mp3 und Eintrag in _data/audio.yml (id -> file, seconds, chars).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const opt = (n, d = null) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const flag = n => args.includes(n);
const VOICE = process.env.ELEVENLABS_VOICE_ID || '3wglDJufK4dcFGrgeITn';
const KEY = process.env.ELEVENLABS_API_KEY;
const MAX_CHARS = +opt('--max-chars', 420);
const BUDGET = +opt('--budget', 30000);
const dry = flag('--dry-run');

const postsDir = '_posts';
const posts = fs.readdirSync(postsDir).filter(f => f.endsWith('-de.md')).map(f => {
  const raw = fs.readFileSync(path.join(postsDir, f), 'utf8').split('\r\n').join('\n');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fm) return null;
  const get = k => {
    const m = fm[1].match(new RegExp('^' + k + ':\\s*(.*(?:\\n  .*)*)', 'm'));
    return m ? m[1].replace(/\n\s+/g, ' ').replace(/^["']|["']$/g, '').trim() : '';
  };
  return { file: f, date: f.slice(0, 10), id: get('curation_id'), title: get('title'), description: get('description'),
    source: get('source_name'), type: get('content_type'), permalink: get('permalink'), body: fm[2] };
}).filter(p => p && p.id && p.type === 'curated_summary');

const clean = s => s.replace(/\{%.*?%\}/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\s*&gt;\s*/g, ', ').replace(/&amp;/g, 'und').replace(/&[a-z]+;/g, ' ').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
// Satzende nur nach Buchstabe, Jahreszahl oder Prozent und vor Grossbuchstabe (nicht bei "15. November", "10.000", ".NET")
const sentences = s => s.split(/(?<=(?:[^\d.\s]|\d{4}|%)[.!?])\s+(?=[A-ZÄÖÜ„"])/).map(x => x.trim()).filter(Boolean);

export function buildText(p) {
  const tl = p.body.match(/##\s*TL;DR\s*\n+([\s\S]*?)(?:\n##\s|\n\{%|$)/);
  const src = clean(tl ? tl[1] : '') || clean(p.description);
  const head = clean(p.title).replace(/[.!?]+$/, '') + '.';
  const tail = p.source ? ' Quelle: ' + p.source + '.' : '';
  const budget = MAX_CHARS - head.length - tail.length;
  const take = text => {
    let used = '';
    for (const s of sentences(text)) { if ((used + ' ' + s).trim().length > budget) break; used = (used + ' ' + s).trim(); }
    return used;
  };
  let used = take(src);
  if (!used) used = take(clean(p.description)); // erster Satz zu lang: description aus dem Front Matter
  return (head + (used ? ' ' + used : '') + tail).trim();
}

// Auswahl
const sel = new Map();
const since = opt('--since');
if (since) posts.filter(p => p.date >= since).forEach(p => sel.set(p.id, { p, why: 'neu' }));
const topFile = opt('--top');
if (topFile) {
  const top = JSON.parse(fs.readFileSync(topFile, 'utf8')).ranking.slice(0, +opt('--top-n', 20));
  top.forEach((t, i) => {
    const p = posts.find(x => x.id.startsWith(t.id));
    if (p && !sel.has(p.id)) sel.set(p.id, { p, why: 'top' + (i + 1) });
    else if (!p) console.warn('Top-Eintrag ohne Beitrag:', t.id);
  });
}
const ids = opt('--ids');
if (ids) ids.split(',').forEach(i => { const p = posts.find(x => x.id.startsWith(i)); if (p) sel.set(p.id, { p, why: 'id' }); });

fs.mkdirSync('assets/audio', { recursive: true });
const dataFile = '_data/audio.yml';
const existing = fs.existsSync(dataFile) ? fs.readFileSync(dataFile, 'utf8') : '';
const map = {};
for (const m of existing.matchAll(/^"?(\w+)"?:\n  file: (.*)\n  seconds: (\d+)\n  chars: (\d+)\n/gm)) map[m[1]] = { file: m[2], seconds: +m[3], chars: +m[4] };
const plan = [...sel.values()].map(({ p, why }) => ({ p, why, text: buildText(p),
  skip: !!map[p.id] && !flag('--force') && fs.existsSync('assets/audio/' + p.id + '-de.mp3') }));
const todo = plan.filter(x => !x.skip);
const chars = todo.reduce((a, x) => a + x.text.length, 0);
console.log('Ausgewaehlt ' + plan.length + ', neu zu erzeugen ' + todo.length + ', Zeichen ' + chars + ' (Budget ' + BUDGET + ')');
if (dry || chars > BUDGET) {
  plan.forEach(x => console.log((x.skip ? '[da]' : '[neu]') + ' ' + x.why + ' ' + x.p.id.slice(0, 8) + ' (' + x.text.length + ') ' + x.text + '\n'));
  if (chars > BUDGET) console.error('Budget ueberschritten, nichts erzeugt.');
  process.exit(dry ? 0 : 2);
}
if (!KEY) { console.error('ELEVENLABS_API_KEY fehlt'); process.exit(1); }

const out = [];
for (const x of todo) {
  const r = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + VOICE + '?output_format=mp3_44100_128', {
    method: 'POST', headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: x.text, model_id: 'eleven_multilingual_v2', language_code: 'de', voice_settings: { stability: 0.5, similarity_boost: 0.8 } }) });
  if (!r.ok) { console.error(x.p.id.slice(0, 8), 'HTTP', r.status, (await r.text()).slice(0, 200)); continue; }
  const file = 'assets/audio/' + x.p.id + '-de.mp3';
  fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
  const d = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
  const sec = Math.round(parseFloat(d.stdout) || 0);
  out.push({ id: x.p.id, sec, chars: x.text.length });
  map[x.p.id] = { file: '/assets/audio/' + x.p.id + '-de.mp3', seconds: sec, chars: x.text.length };
  console.log('ok ' + x.p.id.slice(0, 8) + ' ' + sec + 's ' + x.text.length + ' Zeichen');
}
fs.writeFileSync(dataFile, '# Von tools/audio/make-audio.mjs erzeugt. Tonspur-Kurzfassungen (nur Deutsch), Quelle der Texte ist der Beitrag selbst.\n' +
  Object.entries(map).map(([id, v]) => '"' + id + '":\n  file: ' + v.file + '\n  seconds: ' + v.seconds + '\n  chars: ' + v.chars + '\n').join(''));
console.log('Zeichen verbraucht: ' + out.reduce((a, o) => a + o.chars, 0));
