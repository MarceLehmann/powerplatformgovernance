// Tests ohne API-Aufruf und ohne Rendern: node --test weekly-video.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { weekWindow, isoWeekOf, selectPosts, buildScript, wordsFromAlignment, toSrt, sourceLabel } from './lib.mjs';

const site = {
  name: 'Test Site', domain: 'example.com', tagWeights: { security: 3, dataverse: 2 }, tagCap: 4,
  text: {
    de: { intro: '{name}, Woche {kw}.', ordinals: ['Eins', 'Zwei', 'Drei', 'Vier', 'Fünf'], source: 'Quelle', outro: 'Mehr auf {domain}.' },
    en: { intro: '{name}, week {kw}.', ordinals: ['One', 'Two', 'Three', 'Four', 'Five'], source: 'Source', outro: 'More at {domain}.' },
  },
};
const mk = (id, day, lang, o = {}) => ({
  id, day, lang, title: `Titel ${id} ${lang}`, description: 'Beschreibung.', tags: ['dataverse'], source: 'Quelle A', sourceUrl: 'https://a.example/x',
  sourceSite: 'https://a.example', sourceUpdated: day, permalink: `/${lang}/posts/${id}/`, animation: false,
  body: '## TL;DR\n\nErster Satz hier. Zweiter Satz folgt.\n\n## Weiter', ...o,
});
const both = (id, day, o) => [mk(id, day, 'de', o), mk(id, day, 'en', o)];

test('Woche 2026-W45 ist Montag 2. bis Sonntag 8. November', () => {
  const w = weekWindow('2026-W45');
  assert.equal(w.from, '2026-11-02');
  assert.equal(w.to, '2026-11-08');
  assert.deepEqual(isoWeekOf(new Date('2026-11-06T10:00:00Z')), { year: 2026, week: 45 });
  assert.deepEqual(isoWeekOf(new Date('2026-01-01T10:00:00Z')), { year: 2026, week: 1 });
  assert.equal(weekWindow('2026-W01').from, '2025-12-29');
});

test('Auswahl: nur Beitraege mit DE und EN im Fenster, hoechstens 5', () => {
  const posts = [
    ...both('a1', '2026-11-02'), ...both('a2', '2026-11-03'), ...both('a3', '2026-11-04'), ...both('a4', '2026-11-05'),
    ...both('a5', '2026-11-06'), ...both('a6', '2026-11-07'), mk('solo', '2026-11-03', 'en'), ...both('alt', '2026-10-20'),
  ];
  const r = selectPosts(posts, { from: '2026-11-02', to: '2026-11-08', site });
  assert.equal(r.poolSize, 6);
  assert.equal(r.picked.length, 5);
  assert.ok(!r.picked.some((x) => x.id === 'solo' || x.id === 'alt'));
});

test('Auswahl: gleiche Quelle wird abgewertet, Anzeige chronologisch', () => {
  const posts = [
    ...both('s1', '2026-11-02', { source: 'Eins', tags: ['security'] }),
    ...both('s2', '2026-11-03', { source: 'Eins', tags: ['security'] }),
    ...both('s3', '2026-11-04', { source: 'Zwei', tags: ['dataverse'] }),
  ];
  const r = selectPosts(posts, { from: '2026-11-02', to: '2026-11-08', site, max: 2 });
  assert.ok(r.picked.some((x) => x.id === 's3'), 'andere Quelle gewinnt gegen zweiten Beitrag derselben Quelle');
  assert.ok(r.picked[0].en.day <= r.picked[1].en.day);
});

test('Sprechtext: nur Titel, erster TL;DR-Satz, Quelle; Budget streicht Saetze', () => {
  const posts = [...both('b1', '2026-11-02'), ...both('b2', '2026-11-03'), ...both('b3', '2026-11-04')];
  const { picked } = selectPosts(posts, { from: '2026-11-02', to: '2026-11-08', site });
  const full = buildScript({ picked, lang: 'de', site, week: '45', maxChars: 5000 });
  assert.match(full.text, /Erster Satz hier\./);
  assert.doesNotMatch(full.text, /Zweiter Satz/);
  assert.match(full.text, /Quelle: Quelle A\./);
  const short = buildScript({ picked, lang: 'de', site, week: '45', maxChars: full.chars - 5 });
  assert.ok(short.chars <= full.chars - 5);
  assert.throws(() => buildScript({ picked, lang: 'de', site, week: '45', maxChars: 40 }), /Budget/);
  full.segs.forEach((s) => assert.equal(full.text.substr(s.charStart, s.text.length), s.text));
});

test('Quellenname mit nicht-lateinischer Schrift wird zur Domain', () => {
  assert.equal(sourceLabel({ source: 'ふらりのメモ書き', sourceSite: 'https://flali.hatenablog.com/', sourceUrl: '' }), 'flali.hatenablog.com');
  assert.equal(sourceLabel({ source: 'Softchief Technologies', sourceSite: '', sourceUrl: '' }), 'Softchief Technologies');
});

test('Zeichenzeiten werden zu Woertern und SRT', () => {
  const text = 'Hallo Welt. Zweiter Satz';
  const a = { characters: [...text], character_start_times_seconds: [...text].map((_, i) => i * 0.1), character_end_times_seconds: [...text].map((_, i) => i * 0.1 + 0.1) };
  const w = wordsFromAlignment(a);
  assert.deepEqual(w.map((x) => x.t), ['Hallo', 'Welt.', 'Zweiter', 'Satz']);
  assert.equal(w[1].i0, 6);
  assert.match(toSrt(w), /1\n00:00:00,000 --> 00:00:01,100\nHallo Welt\./);
});
