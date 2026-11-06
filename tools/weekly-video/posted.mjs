// Prueft, ob die Wochen-Shorts dieser Seite fuer die Woche schon bei Buffer stehen (geplant oder gesendet). Verhindert doppelte Posts
// und unnoetigen ElevenLabs-Verbrauch bei einem zweiten Lauf. Ausgabe: "posted=true" oder "posted=false" (fuer $GITHUB_OUTPUT).
//   node posted.mjs [--week 2026-W45]
// Umgebung: BUFFER_API_KEY_PPTIP. Ohne Key oder bei Fehler: "posted=false" (der Lauf geht dann weiter, publish.mjs prueft noch einmal).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isoWeekOf } from './lib.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (n, d = null) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const site = JSON.parse(fs.readFileSync(path.join(here, 'site.json'), 'utf8'));
const cfg = JSON.parse(fs.readFileSync(path.join(here, 'publish.json'), 'utf8'));
const key = process.env.BUFFER_API_KEY_PPTIP;
let year, week;
if (opt('--week')) [year, week] = opt('--week').split('-W').map(Number); else ({ year, week } = isoWeekOf(new Date()));

const gql = async (query, variables) => {
  const r = await fetch('https://api.buffer.com', { method: 'POST', headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', 'User-Agent': 'weekly-video/2.0' }, body: JSON.stringify({ query, variables }) });
  const j = await r.json();
  if (j.errors) throw new Error(JSON.stringify(j.errors).slice(0, 300));
  return j.data;
};
const KNOWN = 'query($o: OrganizationId!, $c: [ChannelId!], $after: String){ posts(first: 50, after: $after, input: {organizationId: $o, filter: {status: [draft, needs_approval, scheduled, sending, sent], channelIds: $c}}){ edges { node { metadata { __typename ... on YoutubePostMetadata { title } } } } pageInfo { hasNextPage endCursor } } }';

try {
  if (!key) throw new Error('kein Key');
  const org = (await gql('{ account { organizations { id } } }')).account.organizations[0].id;
  const chans = (await gql('query($o: OrganizationId!){ channels(input:{organizationId:$o}){ id name service } }', { o: org })).channels;
  const de = chans.find(c => c.service === 'youtube' && c.name.startsWith(cfg.channels.de.nameStartsWith));
  const marker = `KW ${week}/${year}`;
  let found = false, after = null;
  for (;;) {
    const d = (await gql(KNOWN, { o: org, c: [de.id], after })).posts;
    for (const e of d.edges) { const t = e.node.metadata && e.node.metadata.title; if (t && t.includes(marker) && t.endsWith(site.name)) found = true; }
    if (found || !d.pageInfo.hasNextPage) break;
    after = d.pageInfo.endCursor;
  }
  console.log(`posted=${found}`);
} catch (e) {
  console.error('Pruefung nicht moeglich:', e.message);
  console.log('posted=false');
}
