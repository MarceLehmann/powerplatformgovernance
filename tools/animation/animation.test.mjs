// node --test tools/animation/animation.test.mjs  (ohne Rendern, ohne KI-Aufruf)
import test from "node:test";
import assert from "node:assert/strict";
import { validateDecision, toRemotionProps } from "./validate.mjs";
import { unescapeBody, isoWeek, linkedinText, parsePost } from "./run.mjs";
import { buildInput } from "./social.mjs";

const candidate = {
  langs: ["en", "de"],
  text: { en: "Title: X\n\nOpen Settings, then enable OpenAI and save the setting. Then the models appear in Cowork and users can pick them." },
};
const step = (over = {}) => ({ product: "admin", icon: "gear", title: "Open settings", actions: ["Settings"], evidence: "Open Settings, then enable OpenAI", ...over });
const video = (steps) => ({ title: "Models in Cowork", subtitle: "Three steps.", steps });
const good = () => ({
  gif: true, reason: "ordered steps", alt: { en: "Three steps.", de: "Drei Schritte." },
  video: {
    en: video([step(), step({ title: "Enable OpenAI", evidence: "enable OpenAI and save the setting" }), step({ title: "Pick the model", evidence: "the models appear in Cowork" })]),
    de: video([step({ title: "Einstellungen öffnen", actions: ["Einstellung"] }), step({ title: "OpenAI aktivieren", actions: ["OpenAI"] }), step({ title: "Modell wählen", actions: ["Cowork"] })]),
  },
});

test("gueltige Antwort wird akzeptiert", () => {
  const r = validateDecision(good(), candidate);
  assert.equal(r.gif, true, r.errors.join("; "));
});
test("kein GIF bleibt kein GIF", () => {
  assert.deepEqual(validateDecision({ gif: false, reason: "news" }, candidate), { gif: false, reason: "news", errors: [] });
});
test("erfundener Beleg wird verworfen", () => {
  const g = good();
  g.video.en.steps[1].evidence = "this sentence is not in the post at all";
  const r = validateDecision(g, candidate);
  assert.equal(r.gif, false);
  assert.match(r.errors.join(), /nicht woertlich/);
});
test("Gedankenstrich, Emoji, Ausrufezeichen und Eszett werden verworfen", () => {
  for (const [path, value] of [["title", "A — B"], ["subtitle", "Fertig \u{1F680}"], ["subtitle", "Los!"]]) {
    const g = good();
    g.video.en[path] = value;
    assert.equal(validateDecision(g, candidate).gif, false, value);
  }
  const g = good();
  g.video.de.title = "Grüße";
  assert.equal(validateDecision(g, candidate).gif, false);
});
test("Schrittzahl 3 bis 5 und gleiche Struktur in en und de", () => {
  const g = good();
  g.video.en.steps.pop();
  assert.equal(validateDecision(g, candidate).gif, false);
  const h = good();
  h.video.de.steps[0].icon = "bolt";
  assert.match(validateDecision(h, candidate).errors.join(), /unterscheiden/);
});
test("englische Woerter im deutschen Video werden verworfen", () => {
  const g = good();
  g.video.de.steps[0].actions = ["Add and configure"];
  const r = validateDecision(g, candidate);
  assert.equal(r.gif, false);
  assert.match(r.errors.join(), /englisches Wort/);
});
test("Remotion-Props enthalten keine Belege und setzen den Abschluss", () => {
  const r = validateDecision(good(), candidate);
  const props = toRemotionProps(r.video.en, { endUrl: "example.com", endLine: "Curated by KMUpower" });
  assert.equal(props.kicker, "");
  assert.ok(props.steps.every((s) => !("evidence" in s)));
  assert.equal(props.endUrl, "example.com");
});
test("Markdown-Escapes aus dem Publisher werden zurueckgenommen", () => {
  assert.equal(unescapeBody("Use \\_gblIsError\\_ &amp; &#123;x&#125;"), "Use _gblIsError_ & {x}");
});
test("Front Matter wird gelesen", () => {
  const p = parsePost("---\ntitle: A\nlang: en\n---\n\n## TL;DR\n\n{% include x.html %}\nText\n");
  assert.equal(p.fm.title, "A");
  assert.ok(!p.body.includes("{%"));
});
test("ISO-Kalenderwoche", () => {
  assert.equal(isoWeek(new Date("2026-10-19T12:00:00Z")), "2026-W43");
  assert.equal(isoWeek(new Date("2026-10-25T23:00:00Z")), "2026-W43");
  assert.equal(isoWeek(new Date("2026-10-26T01:00:00Z")), "2026-W44");
});
test("LinkedIn-Text ohne Gedankenstriche", () => {
  const t = linkedinText({ description: "Do A — then B.", permalink: "/en/posts/x/" }, "https://example.com", "#Tag");
  assert.ok(!/[–—]/.test(t));
  assert.ok(t.includes("https://example.com/en/posts/x/") && t.endsWith("#Tag"));
});
test("Buffer: Standard ist Entwurf, KI-Kennzeichnung gesetzt, Video als Asset", () => {
  const entry = { text: "t", mp4: "/assets/img/animations/k-4x5.mp4", title: "T", aiAssisted: true };
  const draft = buildInput(entry, "https://example.com", "chan", undefined);
  assert.equal(draft.saveToDraft, true);
  assert.equal(draft.aiAssisted, true);
  assert.equal(draft.assets[0].video.url, "https://example.com/assets/img/animations/k-4x5.mp4");
  assert.equal(buildInput(entry, "https://example.com", "chan", "queue").saveToDraft, undefined);
});
