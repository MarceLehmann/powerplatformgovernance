// Bulk-creates new_governancesource RSS records for Power Platform MVP blogs and YouTube
// channels whose feed was verified to actually respond with feed content (see
// tools/mvp-blog-sources.json, tools/mvp-youtube-channels.json and the verification notes
// in the commits that added this script).
//
// The YouTube channel feeds list individual video uploads as feed items - those get proper
// transcript handling (not an HTML scrape) because automation.mjs's Content_kind_router now
// detects a YouTube URL from the item's own link, not just the source's declared kind.
//
// These are curated by Marcel directly, not public submissions, so they're created already
// approved and enabled - they bypass the AI Foundry submission gate (that gate expects a
// single article page, not a feed URL, and would reject a feed root incorrectly).
//
// Usage (needs an active `az login` against the KMUpower tenant that owns the
// PowerPlatformGovernance Dataverse environment - see tools/automation.mjs `config`):
//   node tools/seed-mvp-sources.mjs            # creates missing records
//   node tools/seed-mvp-sources.mjs --dry-run  # prints what would be created, writes nothing

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { config, kind, approval, processing } from './automation.mjs';

const dryRun = process.argv.includes('--dry-run');
const blogs = JSON.parse(readFileSync(new URL('./mvp-blog-sources.json', import.meta.url), 'utf8'))
  .map(entry => ({ label: `${entry.name} - ${entry.tech}`, xmlUrl: entry.xmlUrl }));
const youtubeChannels = JSON.parse(readFileSync(new URL('./mvp-youtube-channels.json', import.meta.url), 'utf8'))
  .map(entry => ({ label: `${entry.name} - YouTube channel`, xmlUrl: entry.feedUrl }));
const sources = [...blogs, ...youtubeChannels];

function getToken() {
  const token = execFileSync('az', ['account', 'get-access-token', '--resource', config.organization, '--query', 'accessToken', '-o', 'tsv'], { shell: true }).toString().trim();
  if (!token) throw new Error('Could not acquire a Dataverse token - run `az login` against the tenant that owns ' + config.organization);
  return token;
}

async function dataverse(token, method, path, body) {
  const response = await fetch(`${config.organization}/api/data/v9.2/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'OData-MaxVersion': '4.0',
      'OData-Version': '4.0',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error(`${method} ${path} failed: ${response.status} ${await response.text()}`);
  return response.status === 204 ? null : response.json();
}

async function main() {
  const token = getToken();
  const existing = await dataverse(token, 'GET', `${config.entitySet}?$select=new_contenturl&$top=5000`);
  const existingUrls = new Set(existing.value.map(row => row.new_contenturl));

  let created = 0;
  let skipped = 0;
  for (const source of sources) {
    if (existingUrls.has(source.xmlUrl)) {
      skipped += 1;
      continue;
    }
    const record = {
      new_name: source.label.slice(0, 100),
      new_contenturl: source.xmlUrl,
      new_kind: kind.rss,
      new_approval: approval.approved,
      new_enabled: true,
      new_processing: processing.ready,
    };
    if (dryRun) {
      console.log('[dry-run] would create:', record.new_name, record.new_contenturl);
    } else {
      await dataverse(token, 'POST', config.entitySet, record);
      console.log('created:', record.new_name);
    }
    created += 1;
  }
  console.log(`\n${dryRun ? 'Would create' : 'Created'} ${created} record(s), skipped ${skipped} already present.`);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
