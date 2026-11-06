// Tests ohne API-Aufruf: node --test rewrite.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { validateRewrite, rewriteRelevance, providerRequest, ANTHROPIC_MODEL } from './rewrite.mjs';
import { buildScript } from './lib.mjs';

test('Pruefregeln: gueltig, zu lang, ß, Gedankenstrich, Sie-Form, mehrere Saetze', () => {
  assert.equal(validateRewrite('Für dich heisst das: Du legst die Galerie auf einen eigenen Screen und testest sie.', 'de'), null);
  assert.match(validateRewrite('Für dich heisst das: ' + 'wort '.repeat(30).trim() + '.', 'de'), /zu lang/);
  assert.match(validateRewrite('Für dich heisst das: Das ist groß für alle.', 'de'), /ß/);
  assert.match(validateRewrite('Für dich heisst das: Das ändert sich – sofort für alle.', 'de'), /Gedankenstrich/);
  assert.match(validateRewrite('Für dich heisst das: Platzieren Sie die Galerie jetzt.', 'de'), /Sie-Form/);
  assert.match(validateRewrite('Das ist ein Satz. Und noch einer hier.', 'de'), /mehr als ein Satz/);
  assert.equal(validateRewrite('For you, that means: you test the tenant consent before enabling it.', 'en'), null);
});

const items = [{ id: 'a', title: 'T1', why: 'Platzieren Sie die Galerie.' }, { id: 'b', title: 'T2', why: 'Zweiter Satz.' }];
const envGh = { ANTHROPIC_API_KEY: 'test-key' };
const mkAnth = content => ({ ok: true, status: 200, json: async () => ({ content: [{ type: 'text', text: content }] }), text: async () => '' });

test('Umschreiben: gueltige Saetze werden uebernommen, ungueltige fallen auf das Original zurueck', async () => {
  const logs = [];
  const good = 'Für dich heisst das: Du testest die Galerie auf einem eigenen Screen.';
  const m = await rewriteRelevance({ items, lang: 'de', env: envGh, log: x => logs.push(x), fetchFn: async () => mkAnth(JSON.stringify([good, 'Für dich heisst das: Das ist groß.'])) });
  assert.equal(m.get('a'), good.replace(/\.$/, ''));
  assert.equal(m.has('b'), false);
  assert.ok(logs.some(l => /verworfen/.test(l)));
});

test('Umschreiben: Netzwerk- oder Formatfehler wirft nie, Originale bleiben', async () => {
  const logs = [];
  const log = x => logs.push(x);
  assert.equal((await rewriteRelevance({ items, lang: 'de', env: envGh, log, fetchFn: async () => { throw new Error('offline'); } })).size, 0);
  assert.equal((await rewriteRelevance({ items, lang: 'de', env: envGh, log, fetchFn: async () => mkAnth('kein json') })).size, 0);
  assert.equal((await rewriteRelevance({ items, lang: 'de', env: envGh, log, fetchFn: async () => ({ ok: false, status: 403, text: async () => 'denied' }) })).size, 0);
  assert.equal((await rewriteRelevance({ items, lang: 'de', env: {}, log })).size, 0);
  assert.equal(logs.length, 4);
});

test('buildScript: umgeschriebener Satz ersetzt die Beschriftung, Original behaelt sie', () => {
  const site = { name: 'S', domain: 'example.com', text: { de: { intro: '{name}, Woche {kw}.', ordinals: ['Eins', 'Zwei'], source: 'Quelle', outro: 'Mehr auf {domain}.', why: 'Relevant:' } } };
  const mk = id => ({ de: { title: 'Titel ' + id, source: 'Q', sourceUrl: 'https://q.example/x', tags: [], body: '## Warum das wichtig ist\n\n- Admins: Platzieren Sie die Galerie.\n\n## TL;DR\n\nHallo Welt.' } });
  const picked = [{ id: 'p1', ...mk('p1') }, { id: 'p2', ...mk('p2') }];
  const s = buildScript({ picked, lang: 'de', site, week: '45', maxChars: 5000, whyMap: new Map([['p1', 'Für dich heisst das: Test']]) });
  const it = s.segs.filter(x => x.kind === 'item');
  assert.match(it[0].text, /Für dich heisst das: Test\./);
  assert.doesNotMatch(it[0].text, /Relevant:/);
  assert.match(it[1].text, /Relevant: Platzieren Sie die Galerie\./);
});

test('Anbieterwahl: Anthropic mit Schluessel, sonst Foundry, sonst keiner', () => {
  const m = [{ role: 'user', content: 'x' }];
  const a = providerRequest(m, { ANTHROPIC_API_KEY: 'k', REWRITE_FOUNDRY_ENDPOINT: 'https://f.example' }, () => 'tok');
  assert.equal(a.name, 'anthropic');
  assert.equal(a.url, 'https://api.anthropic.com/v1/messages');
  assert.equal(a.headers['x-api-key'], 'k');
  assert.equal(a.headers['anthropic-version'], '2023-06-01');
  assert.equal(a.body.model, ANTHROPIC_MODEL);
  assert.equal(providerRequest(m, { REWRITE_FOUNDRY_ENDPOINT: 'https://f.example' }, () => 'tok').name, 'foundry');
  assert.equal(providerRequest(m, { GITHUB_TOKEN: 'x' }), null);
  assert.equal(providerRequest(m, { ANTHROPIC_API_KEY: 'k', REWRITE_DISABLE: '1' }), null);
});

test('Anthropic-Antwort wird gelesen, Fehler fallen auf das Original zurueck ohne Schluessel im Log', async () => {
  const logs = [];
  const good = 'Für dich heisst das: Du testest die Galerie auf einem eigenen Screen.';
  const m = await rewriteRelevance({ items: [items[0]], lang: 'de', env: envGh, log: x => logs.push(x), fetchFn: async () => mkAnth(JSON.stringify([good])) });
  assert.equal(m.get('a'), good.replace(/\.$/, ''));
  const m2 = await rewriteRelevance({ items, lang: 'de', env: envGh, log: x => logs.push(x), fetchFn: async () => ({ ok: false, status: 401, text: async () => 'bad key test-key' }) });
  assert.equal(m2.size, 0);
  assert.ok(logs.length === 1 && !logs.join().includes('test-key'));
});
