// node --test tools/animation/animation.test.mjs  (ohne Rendern, ohne KI-Aufruf)
import test from "node:test";
import assert from "node:assert/strict";
import { validateDecision, toRemotionProps } from "./validate.mjs";
import { SYSTEM_PROMPT, LIMITS, ICON_LIST } from "./prompt.mjs";
import { decideWithRepair, unescapeBody, parsePost } from "./run.mjs";

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
test("Icon-Aliase werden auf vorhandene Icons abgebildet", () => {
  const g = good();
  for (const l of ["en", "de"]) { g.video[l].steps[0].icon = "tool"; g.video[l].steps[1].icon = "flag"; g.video[l].steps[2].icon = "flow"; }
  const r = validateDecision(g, candidate);
  assert.equal(r.gif, true, r.errors.join("; "));
  assert.deepEqual(r.video.en.steps.map((s) => s.icon), ["gear", "bell", "arrow"]);
  g.video.en.steps[0].icon = "unicorn";
  assert.match(validateDecision(g, candidate).errors.join(), /icon: unbekannt/);
});
test("Original-UI-Namen in Anfuehrungszeichen sind im deutschen Text erlaubt", () => {
  const g = good();
  g.video.de.steps[0].actions = ['"Add Trigger" waehlen'];
  assert.equal(validateDecision(g, candidate).gif, true);
  g.video.de.steps[0].actions = ["Add Trigger waehlen"];
  assert.equal(validateDecision(g, candidate).gif, false);
  g.video.de.steps[0].actions = ['"Add Trigger" and waehlen'];
  assert.equal(validateDecision(g, candidate).gif, false);
});
test("Prompt nennt Limits und Icons aus der Validierung", () => {
  assert.ok(SYSTEM_PROMPT.includes(`max ${LIMITS.action} characters`) && SYSTEM_PROMPT.includes(ICON_LIST.join(", ")));
  assert.ok(!/max (22|26|38|110) characters/.test(SYSTEM_PROMPT));
});
test("Reparaturrunde: zu lange Antwort wird einmal nachgebessert", async () => {
  const bad = good();
  bad.video.en.steps[0].actions = ["x".repeat(LIMITS.action + 5)];
  const prompts = [];
  const ask = async (p) => { prompts.push(p); return prompts.length === 1 ? bad : good(); };
  const r = await decideWithRepair(candidate, ask);
  assert.equal(r.gif, true);
  assert.equal(prompts.length, 2);
  assert.match(prompts[1], /ERRORS:[\s\S]*actions\[0\]/);
});
test("Reparaturrunde: genau ein Versuch, danach kein GIF mit Begruendung", async () => {
  const bad = good();
  bad.video.en.steps[0].actions = ["x".repeat(99)];
  let calls = 0;
  const r = await decideWithRepair(candidate, async () => { calls++; return bad; });
  assert.equal(calls, 2);
  assert.equal(r.gif, false);
  assert.match(r.reason, /Reparaturrunde verworfen/);
  assert.ok(r.errors.length);
});
test("Reparaturrunde: kein Aufruf bei sauberem Nein, gueltigem Ja oder vorgegebener Antwort", async () => {
  let calls = 0;
  await decideWithRepair(candidate, async () => { calls++; return { gif: false, reason: "news" }; });
  await decideWithRepair(candidate, async () => { calls++; return good(); });
  const bad = good(); bad.video.en.title = "x".repeat(99);
  await decideWithRepair(candidate, null, bad);
  assert.equal(calls, 2);
});
test("Reparaturrunde: scheitert der zweite Aufruf, bleibt die erste Pruefung", async () => {
  const bad = good(); bad.video.en.title = "x".repeat(99);
  let n = 0;
  const r = await decideWithRepair(candidate, async () => { if (n++) throw new Error("HTTP 500"); return bad; });
  assert.equal(r.gif, false);
  assert.ok(r.errors.length);
});
test("Remotion-Props enthalten keine Belege und setzen den Abschluss", () => {
  const r = validateDecision(good(), candidate);
  const props = toRemotionProps(r.video.en, { endUrl: "example.com", endLine: "Curated by Marcel Lehmann" });
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
