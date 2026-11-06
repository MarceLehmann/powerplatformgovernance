// Plant die Wochen-Shorts (9:16) ueber Buffer auf YouTube ein: DE auf "Marcel Lehmann", EN auf "PowerPlatformTip".
// Ablauf je Sprache: Video als Release-Datei im oeffentlichen Repo ablegen (Buffer braucht eine oeffentliche URL), Post mit festem Slot
// (Europe/Zurich) anlegen, "Veraenderte oder synthetische Inhalte" per isAiGenerated setzen. Doppelte Posts (gleicher Titel) werden uebersprungen.
//
// Aufruf (im Ordner tools/weekly-video, nach run.mjs):
//   node publish.mjs --dir out/2026-W45                 Trockenlauf: zeigt Titel, Slot, Kanal (kein Upload, kein Post)
//   node publish.mjs --dir out/2026-W45 --apply         laedt hoch und plant ein
// Umgebung: BUFFER_API_KEY_PPTIP (Buffer-Konto mit den drei YouTube-Kanaelen), GH_TOKEN (Schreibrecht auf das Host-Repo, nur mit --apply).
// Einstellungen: publish.json (Kanaele, Slots, Host-Repo). Keys werden nie ausgegeben.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (n, d = null) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const apply = args.includes('--apply');
const dir = path.resolve(opt('--dir', 'out'));
const cfg = JSON.parse(fs.readFileSync(path.join(here, 'publish.json'), 'utf8'));
const key = process.env.BUFFER_API_KEY_PPTIP;
const only = opt('--lang');

const manifestFile = path.join(dir, 'manifest.json');
if (!fs.existsSync(manifestFile)) { console.log('Kein manifest.json (diese Woche kein Video), nichts zu planen.'); process.exit(0); }
const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
const siteId = manifest.site;
const kw = manifest.window.week;
const year = manifest.window.year;
const slot = cfg.slots[siteId];
if (!slot) throw new Error(`Kein Slot fuer ${siteId} in publish.json`);

// ---------- Zeit (Europe/Zurich, mit Sommer-/Winterzeit) ----------
const TZ = cfg.timezone;
const offsetMin = ms => {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).formatToParts(new Date(ms)).map(x => [x.type, x.value]));
  return (Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - ms) / 60000;
};
function zurichIso(ymd, hhmm) {
  const [y, m, d] = ymd.split('-').map(Number); const [h, mi] = hhmm.split(':').map(Number);
  const wall = Date.UTC(y, m - 1, d, h, mi);
  let off = offsetMin(wall); let utc = wall - off * 60000;
  off = offsetMin(utc); utc = wall - off * 60000;
  const sign = off >= 0 ? '+' : '-'; const a = Math.abs(off);
  return { iso: `${ymd}T${hhmm}:00${sign}${String(Math.floor(a / 60)).padStart(2, '0')}:${String(a % 60).padStart(2, '0')}`, utc };
}
function slotFor() {
  // Wochenfenster endet am Sonntag (manifest.window.to). slot.weekday: 0 = Sonntag derselben Woche, 1 = Montag danach.
  const sunday = new Date(manifest.window.to + 'T00:00:00Z');
  const base = new Date(sunday.getTime() + ((slot.weekday + 7) % 7) * 86400000);
  let s = zurichIso(base.toISOString().slice(0, 10), slot.time);
  const minUtc = Date.now() + 15 * 60000;
  while (s.utc < minUtc) { base.setUTCDate(base.getUTCDate() + 1); s = zurichIso(base.toISOString().slice(0, 10), slot.time); } // verpasst: naechster Tag, gleiche Uhrzeit
  return s;
}

// ---------- Buffer ----------
const gql = async (query, variables) => {
  const r = await fetch('https://api.buffer.com', { method: 'POST', headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', 'User-Agent': 'weekly-video/2.0' }, body: JSON.stringify({ query, variables }) });
  const text = await r.text();
  let j; try { j = JSON.parse(text); } catch { throw new Error(`Buffer HTTP ${r.status}: ${text.slice(0, 200)}`); }
  if (j.errors) throw new Error('Buffer: ' + JSON.stringify(j.errors).slice(0, 600));
  return j.data;
};
const CREATE = 'mutation($i: CreatePostInput!){ createPost(input: $i){ __typename ... on PostActionSuccess { post { id status dueAt } } ... on MutationError { message } } }';
const KNOWN = 'query($o: OrganizationId!, $c: [ChannelId!], $after: String){ posts(first: 50, after: $after, input: {organizationId: $o, filter: {status: [draft, needs_approval, scheduled, sending, sent], channelIds: $c}}){ edges { node { id status dueAt metadata { __typename ... on YoutubePostMetadata { title } } } } pageInfo { hasNextPage endCursor } } }';

async function resolveChannels() {
  const org = (await gql('{ account { organizations { id name } } }')).account.organizations[0];
  const chans = (await gql('query($o: OrganizationId!){ channels(input:{organizationId:$o}){ id name service isDisconnected isLocked } }', { o: org.id })).channels;
  const out = {};
  for (const [lang, want] of Object.entries(cfg.channels)) {
    const hits = chans.filter(c => c.service === 'youtube' && !c.isDisconnected && !c.isLocked && (want.name ? c.name === want.name : c.name.startsWith(want.nameStartsWith)));
    if (hits.length !== 1) throw new Error(`Kanal fuer ${lang} nicht eindeutig (${hits.length} Treffer fuer ${JSON.stringify(want)})`);
    out[lang] = hits[0];
  }
  return { org, channels: out };
}
async function knownTitles(org, channelId) {
  const titles = new Map(); let after = null;
  for (;;) {
    const d = (await gql(KNOWN, { o: org, c: [channelId], after })).posts;
    for (const e of d.edges) { const t = e.node.metadata && e.node.metadata.title; if (t) titles.set(t, e.node); }
    if (!d.pageInfo.hasNextPage) return titles;
    after = d.pageInfo.endCursor;
  }
}

// ---------- Hosting (oeffentliche URL fuer Buffer) ----------
// Buffer holt das Video von einer oeffentlichen URL und folgt keinen Release-Weiterleitungen. Darum: Datei per GitHub-API in das
// Repo mit GitHub Pages legen (gleiche Ablage wie die Tipp-Videos) und warten, bis die Seite sie ausliefert.
async function hostVideo(file) {
  const rel = `${cfg.hostPath}/${siteId}/${year}-W${String(kw).padStart(2, '0')}/${path.basename(file)}`;
  const api = `repos/${cfg.hostRepo}/contents/${rel}`;
  const gh = (a, input) => spawnSync('gh', a, { encoding: 'utf8', env: process.env, input, maxBuffer: 64 * 1024 * 1024 });
  const cur = gh(['api', api, '-q', '.sha']);
  const body = { message: `Wochenvideo ${siteId} KW${kw}/${year}: ${path.basename(file)}`, content: fs.readFileSync(file).toString('base64'), branch: cfg.hostBranch };
  if (cur.status === 0 && cur.stdout.trim()) body.sha = cur.stdout.trim();
  const put = gh(['api', '-X', 'PUT', api, '--input', '-'], JSON.stringify(body));
  if (put.status !== 0) throw new Error('GitHub-Ablage fehlgeschlagen: ' + (put.stderr || '').slice(0, 300));
  const url = `${cfg.hostPagesBase}/${rel.split('/').map(encodeURIComponent).join('/')}`;
  for (let i = 0; i < 40; i++) { // bis zu 10 Minuten auf Pages warten
    const r = await fetch(url, { method: 'HEAD' });
    if (r.ok && +(r.headers.get('content-length') || 0) > 100000) return url;
    await new Promise(res => setTimeout(res, 15000));
  }
  throw new Error('Pages liefert die Datei nicht aus: ' + url);
}

// ---------- Texte ----------
function readMeta(lang) {
  const base = `${siteId}_${year}-KW${kw}_${lang}`;
  const md = fs.readFileSync(path.join(dir, `${base}_short_youtube.md`), 'utf8');
  const title = md.match(/Titel \(\d+ Zeichen\):\n(.+)\n/)[1].trim();
  const description = md.split('Beschreibung:\n')[1].trim();
  if (title.length > 100) throw new Error('Titel zu lang: ' + title);
  return { title, description, file: path.join(dir, `${base}_9x16.mp4`) };
}

// ---------- Lauf ----------
const when = slotFor();
console.log(`${siteId} KW${kw}/${year}, Slot ${when.iso} (${apply ? 'APPLY' : 'Trockenlauf'})`);
if (!key) { if (apply) throw new Error('BUFFER_API_KEY_PPTIP fehlt'); }
const resolved = key ? await resolveChannels() : null;
const results = [];
for (const lang of ['de', 'en']) {
  if (only && only !== lang) continue;
  const m = readMeta(lang);
  const ch = resolved ? resolved.channels[lang] : { name: '(Key fehlt, nicht geprueft)', id: '' };
  console.log(`[${lang}] Kanal "${ch.name}" | ${m.title} | ${fs.existsSync(m.file) ? 'Video da' : 'VIDEO FEHLT'}`);
  if (!fs.existsSync(m.file)) throw new Error('Video fehlt: ' + m.file);
  if (!apply) continue;
  const known = await knownTitles(resolved.org.id, ch.id);
  if (known.has(m.title)) { const k = known.get(m.title); console.log(`  schon in Buffer (${k.id}, ${k.status}), uebersprungen`); results.push({ lang, id: k.id, status: k.status, dueAt: k.dueAt, skipped: true }); continue; }
  const url = await hostVideo(m.file);
  console.log('  Video-URL:', url);
  const input = {
    channelId: ch.id, schedulingType: 'automatic', mode: 'customScheduled', dueAt: when.iso, text: m.description, aiAssisted: true,
    assets: [{ video: { url } }],
    metadata: { youtube: { title: m.title, categoryId: '28', privacy: 'public', madeForKids: false, isAiGenerated: true, embeddable: true, notifySubscribers: true } },
  };
  const res = (await gql(CREATE, { i: input })).createPost;
  if (res.__typename !== 'PostActionSuccess') throw new Error(`Buffer ${lang}: ${JSON.stringify(res)}`);
  console.log(`  Post ${res.post.id} ${res.post.status} ${res.post.dueAt}`);
  results.push({ lang, id: res.post.id, status: res.post.status, dueAt: res.post.dueAt, title: m.title, url });
}
if (apply) fs.writeFileSync(path.join(dir, 'buffer-posts.json'), JSON.stringify(results, null, 2));
