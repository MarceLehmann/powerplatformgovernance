// Tests fuer die 9:16-Planung (ohne ffmpeg, ohne API): node --test short.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { planShort } from './lib.mjs';

// Baut Woerter und Segmente: Einleitung (2 Saetze), n Beitraege je 10 Woerter, Schluss.
function fake(nItems, secPerWord = 0.3, gap = 0.5) {
  const words = []; const segs = []; let t = 0; let chars = 0; let text = '';
  const add = (kind, wordsList) => {
    const seg = { kind, charStart: chars, text: wordsList.join(' ') };
    for (const w of wordsList) { words.push({ t: w, s: t, e: t + secPerWord, i0: chars }); chars += w.length + 1; t += secPerWord + (w.endsWith('.') ? gap : 0.05); }
    segs.push(seg); text += seg.text + ' ';
  };
  add('intro', ['Daily,', 'Woche', '45.', 'Fuenf', 'Beitraege', 'der', 'Woche.']);
  for (let i = 0; i < nItems; i++) add('item', ['Eins', 'zwei', 'drei', 'vier', 'fuenf', 'sechs', 'sieben', 'acht', 'neun', 'zehn.']);
  add('outro', ['Alle', 'Beitraege', 'auf', 'Seite.']);
  return { words, segs };
}

test('kurzes Video bleibt unveraendert im Umfang, Einleitung wird auf den ersten Satz gekuerzt', () => {
  const { words, segs } = fake(3, 0.2);
  const p = planShort({ words, segs, maxSec: 59.5 });
  assert.equal(p.keep, 3);
  assert.equal(p.dropped, 0);
  assert.equal(p.introCut, true);
  assert.equal(p.tempo, 1);
  assert.ok(!p.words.some(w => w.t === 'Fuenf'), 'zweiter Einleitungssatz fehlt');
});

test('Tempo bleibt hoechstens 1,12, danach fallen die letzten Beitraege weg', () => {
  const { words, segs } = fake(5, 0.3);
  const p = planShort({ words, segs, maxSec: 59.5 });
  assert.ok(p.tempo <= 1.12 + 1e-9);
  assert.ok(p.duration + 0.9 <= 59.5 + 0.05);
  assert.ok(p.keep >= 3 && p.keep <= 5);
});

test('Wortzeiten sind aufsteigend und innerhalb der Dauer', () => {
  const { words, segs } = fake(5, 0.3);
  const p = planShort({ words, segs, maxSec: 59.5 });
  for (let i = 1; i < p.words.length; i++) assert.ok(p.words[i].s >= p.words[i - 1].s);
  assert.ok(p.words.at(-1).e <= p.duration + 0.2);
});
