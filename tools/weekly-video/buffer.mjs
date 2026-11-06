// Legt die Wochenvideos als Buffer-IDEEN an (Entwurf ohne Datum, kein Posting, keine Warteschlange).
// Eine Idee je Video: Zielkanal-Vorschlag, YouTube-Titel und -Beschreibung, LinkedIn-Text, Dateinamen. Marcel gibt frei und laedt das Video hoch.
//
// Aufruf (im Ordner tools/weekly-video):
//   node buffer.mjs --dir out/2026-W45 --org <Organisations-ID>            Trockenlauf: zeigt, was angelegt wuerde
//   node buffer.mjs --dir out/2026-W45 --org <Organisations-ID> --apply    legt die Ideen an
// Key: Umgebungsvariable BUFFER_API_KEY (nie in Dateien). Vor dem Anlegen auf Dubletten achten (gleicher Titel).
// Es gibt bewusst keinen Code, der Posts anlegt oder veroeffentlicht: das erste Video jeder Art gibt Marcel von Hand frei.
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (n, d = null) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const dir = path.resolve(opt('--dir', 'out'));
const org = opt('--org');
const apply = args.includes('--apply');
const key = process.env.BUFFER_API_KEY;
if (!org) { console.error('--org <Organisations-ID> fehlt'); process.exit(1); }

const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
const site = manifest.site;
const kw = manifest.window.week;
const hints = {
  governance: { de: 'LinkedIn-Seite "Power Platform Governance Daily" (Buffer-Kanal powerplatformgovernance), YouTube: PowerPlatformAcademy.online', en: 'LinkedIn-Seite "Power Platform Governance Daily", YouTube: PowerPlatformTip' },
  daily: { de: 'Keine eigene Daily-Seite vorhanden: Marcel entscheidet (zum Beispiel LinkedIn "Powerplatform Academy Online"), YouTube: PowerPlatformAcademy.online', en: 'Keine eigene Daily-Seite vorhanden: Marcel entscheidet, YouTube: PowerPlatformTip' },
}[site];

const ideas = [];
for (const lang of ['de', 'en']) {
  const base = `${site}_${manifest.window.year}-KW${kw}_${lang}`;
  const yt = path.join(dir, `${base}_youtube.md`);
  if (!fs.existsSync(yt)) continue;
  const li = fs.readFileSync(path.join(dir, `${base}_linkedin.md`), 'utf8');
  const text = [
    `Wochenvideo ${site} ${lang.toUpperCase()} KW${kw} (Entwurf, nichts veröffentlichen, bis Marcel das erste Video freigibt)`,
    `Zielkanäle (nur vorhandene): ${hints[lang]}`,
    `Dateien: ${base}_16x9.mp4 (YouTube), ${base}_4x5.mp4 (LinkedIn), ${base}.srt (Untertitel)`,
    '', fs.readFileSync(yt, 'utf8'), '', li,
  ].join('\n');
  ideas.push({ title: `Wochenvideo ${site} ${lang.toUpperCase()} KW${kw}`, text });
}

const gql = async (query, variables) => {
  const r = await fetch('https://api.buffer.com', { method: 'POST', headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', 'User-Agent': 'weekly-video/1.0' }, body: JSON.stringify({ query, variables }) });
  const j = await r.json();
  if (j.errors) throw new Error(JSON.stringify(j.errors).slice(0, 500));
  return j.data;
};
const CREATE = 'mutation($i: CreateIdeaInput!){ createIdea(input: $i){ __typename ... on Idea { id } ... on MutationError { message } } }';

for (const idea of ideas) {
  console.log(`${apply ? 'LEGE AN' : 'Trockenlauf'}: ${idea.title} (${idea.text.length} Zeichen)`);
  if (!apply) continue;
  if (!key) throw new Error('BUFFER_API_KEY fehlt');
  const d = await gql(CREATE, { i: { organizationId: org, content: { title: idea.title, text: idea.text, aiAssisted: true } } });
  console.log(JSON.stringify(d.createIdea));
}
