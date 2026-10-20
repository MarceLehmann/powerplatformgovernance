// node --test  (gemockte Buffer-API, kein Netz)
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { main, buildPostText, validateText, extractSummary, zurichDay, zurichToUtc, nextFreeSlot, parseSlots, rank, MAX_LEN } from "./social.mjs";
import { parsePost } from "./run.mjs";

const SITE = "https://powerplatformgovernance.com";
const NOW = new Date("2026-10-20T10:00:00Z"); // 12:00 Zurich
const D = "2026-10-20T";

function post({ id, date, type = "curated_summary", title = "Title " + id, tldr }) {
  const fm = [`title: ${title}`, `description: Short description of ${id} for the post.`, `date: '${date}'`, "lang: en", "tags:", "- governance", "- copilot-studio", `content_type: ${type}`,
    type === "curated_summary" ? `curation_id: ${id}` : "", `image:\n  path: "/assets/img/curated/${id}.png"\n  alt: 'Card ${id}'`, `permalink: "/en/posts/post-${id}/"`,
    type === "curated_summary" ? "source_name: Example Source Oy" : ""].filter(Boolean).join("\n");
  return `---\n${fm}\n---\n\n## TL;DR\n\n${tldr ?? `Copilot Studio ${id} now lets admins block unauthenticated access. Microsoft shipped the control on 2026-10-20 for all environments. Admins set it per environment.`}\n\n{% include curated-attribution.html %}\n\n## More\n\nBody.\n`;
}

function repo(posts, { mp4 = [], state = {}, ledger = {} } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "social-"));
  for (const d of ["_posts", "assets/img/animations", "tools/animation"]) fs.mkdirSync(path.join(root, d), { recursive: true });
  for (const p of posts) fs.writeFileSync(path.join(root, "_posts", `${p.date.slice(0, 10)}-${p.id}-en.md`), post(p));
  for (const id of mp4) fs.writeFileSync(path.join(root, `assets/img/animations/${id}-4x5.mp4`), "x");
  fs.writeFileSync(path.join(root, "tools/animation/social.json"), JSON.stringify(state));
  fs.writeFileSync(path.join(root, "tools/animation/ledger.json"), JSON.stringify(ledger));
  return root;
}
const stateOf = (root) => JSON.parse(fs.readFileSync(path.join(root, "tools/animation/social.json"), "utf8"));
const decided = (posts) => Object.fromEntries(posts.map((p) => [p.id, { gif: false }]));
function mockFetch() {
  const calls = [];
  const f = async (url, opt = {}) => {
    if (opt.method === "POST") {
      calls.push(JSON.parse(opt.body).variables.input);
      return { ok: true, json: async () => ({ data: { createPost: { __typename: "PostActionSuccess", post: { id: "b" + calls.length, status: "draft" } } } }) };
    }
    return { ok: true, json: async () => ({}) };
  };
  f.calls = calls;
  return f;
}
const ENV = { BUFFER_SEND: "true", BUFFER_API_KEY: "k", BUFFER_CHANNEL_ID: "chan" };
const run = async (root, env = {}, f = mockFetch(), now = NOW) => {
  const r = await main(["--root", root, "--site-url", "powerplatformgovernance.com"], { ...ENV, ...env }, { fetch: f, now: () => now });
  return { ...r, f };
};

test("Tageslimit 3, Video vor Bild, dann neueste zuerst; Rest verfaellt", async () => {
  const posts = [1, 2, 3, 4, 5].map((n) => ({ id: "aaaa000" + n, date: D + `0${n}:00:00Z` }));
  const root = repo(posts, { mp4: ["aaaa0001", "aaaa0002"], ledger: decided(posts) });
  const r = await run(root);
  assert.equal(r.f.calls.length, 3);
  assert.deepEqual(r.f.calls.map((c) => (c.assets[0].video ? "video" : "image")), ["video", "video", "image"]);
  assert.match(r.f.calls[0].assets[0].video.url, /aaaa0002-4x5\.mp4$/);
  assert.match(r.f.calls[2].assets[0].image.url, /aaaa0005\.png$/);
  assert.ok(r.f.calls.every((c) => c.aiAssisted === true && c.saveToDraft === true));
  assert.match(r.log.join("\n"), /kein Platz heute: aaaa0003/);
});

test("kein Doppelpost: zweiter Lauf sendet nichts", async () => {
  const posts = [{ id: "bbbb0001", date: D + "01:00:00Z" }, { id: "bbbb0002", date: D + "02:00:00Z" }];
  const root = repo(posts, { ledger: decided(posts) });
  assert.equal((await run(root)).f.calls.length, 2);
  assert.equal((await run(root)).f.calls.length, 0);
  assert.equal(Object.values(stateOf(root)).filter((s) => s.status === "drafted").length, 2);
});

test("Tageslimit gilt ueber mehrere Laeufe (2 + spaeter 3. + 4. Beitrag)", async () => {
  const first = [{ id: "llll0001", date: D + "01:00:00Z" }, { id: "llll0002", date: D + "02:00:00Z" }];
  const all = [...first, { id: "llll0003", date: D + "03:00:00Z" }, { id: "llll0004", date: D + "04:00:00Z" }];
  const root = repo(first, { ledger: decided(all) });
  assert.equal((await run(root)).f.calls.length, 2);
  for (const p of all.slice(2)) fs.writeFileSync(path.join(root, "_posts", `2026-10-20-${p.id}-en.md`), post(p));
  assert.equal((await run(root)).f.calls.length, 1);
});

test("Verfall: Beitrag von gestern ohne Platz wird nie gepostet", async () => {
  const posts = [{ id: "cccc0001", date: "2026-10-19T08:00:00Z" }, { id: "cccc0002", date: D + "05:00:00Z" }];
  const root = repo(posts, { ledger: decided(posts) });
  const r = await run(root);
  assert.equal(r.f.calls.length, 1);
  assert.match(r.f.calls[0].assets[0].image.url, /cccc0002/);
  assert.equal(stateOf(root).cccc0001.status, "expired");
  assert.equal((await run(root)).f.calls.length, 0);
});

test("Status demo (und error) wird nie gesendet", async () => {
  const posts = [{ id: "dddd0001", date: D + "05:00:00Z" }, { id: "dddd0002", date: D + "06:00:00Z" }];
  const root = repo(posts, { state: { dddd0001: { status: "demo" }, dddd0002: { status: "error" } }, ledger: decided(posts) });
  assert.equal((await run(root)).f.calls.length, 0);
});

test("Beitrag ohne Auto-GIF-Entscheidung wartet, nach 12 Stunden geht er mit Bild raus", async () => {
  const root = repo([{ id: "eeee0001", date: D + "08:00:00Z" }]);
  assert.equal((await run(root)).f.calls.length, 0);
  assert.equal((await run(root, {}, mockFetch(), new Date("2026-10-20T21:00:00Z"))).f.calls.length, 1);
});

test("original_article ist Kandidat (Schluessel orig-<slug>), ohne Quelle-Zeile", async () => {
  const root = repo([{ id: "ffff0001", date: D + "05:00:00Z", type: "original_article" }]);
  const r = await run(root);
  assert.equal(r.f.calls.length, 1);
  assert.ok(stateOf(root)["orig-post-ffff0001"]);
  assert.ok(!r.f.calls[0].text.includes("Source:"));
});

test("Trockenlauf (BUFFER_SEND nicht true) sendet nichts und aendert den Zustand nicht", async () => {
  const posts = [{ id: "gggg0001", date: D + "05:00:00Z" }];
  const root = repo(posts, { ledger: decided(posts) });
  const f = mockFetch();
  await main(["--root", root], {}, { fetch: f, now: () => NOW });
  assert.equal(f.calls.length, 0);
  assert.deepEqual(stateOf(root), {});
});

test("Queue mit BUFFER_SLOTS setzt dueAt auf freie Slots (Zurich), ohne Slots addToQueue", async () => {
  const posts = [1, 2, 3].map((n) => ({ id: "hhhh000" + n, date: D + `0${n}:00:00Z` }));
  const early = new Date("2026-10-20T05:00:00Z"); // 07:00 Zurich
  const root = repo(posts, { ledger: decided(posts) });
  const r = await run(root, { BUFFER_MODE: "queue", BUFFER_SLOTS: "09:00,12:00,15:00" }, mockFetch(), early);
  assert.deepEqual(r.f.calls.map((c) => c.dueAt), ["2026-10-20T07:00:00.000Z", "2026-10-20T10:00:00.000Z", "2026-10-20T13:00:00.000Z"]);
  assert.ok(r.f.calls.every((c) => c.mode === "customScheduled" && c.saveToDraft === undefined));
  assert.equal(stateOf(root).hhhh0001.status, "queued");
  const q = await run(repo(posts.slice(0, 1), { ledger: decided(posts) }), { BUFFER_MODE: "queue" }, mockFetch(), early);
  assert.equal(q.f.calls[0].mode, "addToQueue");
  assert.equal(q.f.calls[0].dueAt, undefined);
  assert.equal(q.f.calls[0].saveToDraft, undefined);
});

test("Zeitzone: Zurich-Tag, Sommer- und Winterzeit, Slots", () => {
  assert.equal(zurichDay(new Date("2026-10-19T22:30:00Z")), "2026-10-20");
  assert.equal(zurichToUtc("2026-10-20", "09:00").toISOString(), "2026-10-20T07:00:00.000Z");
  assert.equal(zurichToUtc("2026-11-02", "09:00").toISOString(), "2026-11-02T08:00:00.000Z");
  const slots = parseSlots("09:00, 12:00,15:00");
  assert.equal(nextFreeSlot(new Date("2026-10-20T10:30:00Z"), slots).toISOString(), "2026-10-20T13:00:00.000Z");
  assert.equal(nextFreeSlot(new Date("2026-10-20T14:00:00Z"), slots).toISOString(), "2026-10-21T07:00:00.000Z");
  assert.equal(nextFreeSlot(new Date("2026-10-20T05:00:00Z"), slots, new Set(["2026-10-20T07:00:00.000Z"])).toISOString(), "2026-10-20T10:00:00.000Z");
});

test("Rangfolge: Video vor Bild, innerhalb neueste zuerst", () => {
  const r = rank([{ kind: "image", date: new Date(3) }, { kind: "video", date: new Date(1) }, { kind: "video", date: new Date(2) }, { kind: "image", date: new Date(4) }]);
  assert.deepEqual(r.map((x) => x.date.getTime()), [2, 1, 4, 3]);
});

test("Post-Text: Titel als Hook, TL;DR, Quelle, Link am Ende, hoechstens 3 Hashtags, keine Gedankenstriche", () => {
  const tldr = "Admins can **block** unauthenticated access — per environment. Direct Line stays off, the M365 Agents SDK path keeps working. See [docs](https://x.y).";
  const p = parsePost(post({ id: "iiii0001", date: D + "05:00:00Z", title: "Block unauthenticated access", tldr }));
  const t = buildPostText(p.fm, p.body, SITE);
  const blocks = t.split("\n\n");
  assert.equal(blocks[0], "Block unauthenticated access");
  assert.match(blocks[1], /^Admins can block unauthenticated access, per environment\./);
  assert.ok(blocks[1].includes("See docs."));
  assert.equal(blocks[2], "Source: Example Source Oy");
  assert.equal(blocks[3], `Full summary: ${SITE}/en/posts/post-iiii0001/`);
  assert.equal(blocks[4], "#PowerPlatformGovernanceDaily #CopilotStudio");
  assert.deepEqual(validateText(t, `${SITE}/en/posts/post-iiii0001/`), []);
  assert.ok(!/[–—]/.test(t));
});

test("Lange TL;DR wird satzweise gekuerzt, Gesamtlaenge bleibt im Rahmen", () => {
  const long = Array.from({ length: 20 }, (_, i) => `Sentence number ${i} explains one concrete fact about the feature.`).join(" ");
  const p = parsePost(post({ id: "jjjj0001", date: D + "05:00:00Z", tldr: long }));
  const t = buildPostText(p.fm, p.body, SITE);
  assert.ok(t.length <= MAX_LEN, String(t.length));
  assert.ok(t.split("\n\n")[1].endsWith("."));
  assert.deepEqual(validateText(t, `${SITE}/en/posts/post-jjjj0001/`), []);
});

test("Ohne TL;DR: erste zwei Saetze des ersten Absatzes; leere Texte werden abgelehnt", () => {
  const raw = "---\ntitle: T\ndescription: D long enough description here for the fallback case.\n---\n\nFirst sentence of the body is here and long enough. Second sentence follows right after it. Third one is dropped.\n\n## H\n";
  const p = parsePost(raw);
  assert.equal(extractSummary(p.fm, p.body).text, "First sentence of the body is here and long enough. Second sentence follows right after it.");
  assert.ok(validateText("", "x").length > 0);
  assert.ok(validateText("a\n\nb\n\nc\n\nd", "x").length > 0);
});

test("Fehlgeschlagener Versuch bleibt pending, nach 3 Versuchen error", async () => {
  const posts = [{ id: "kkkk0001", date: D + "05:00:00Z" }];
  const root = repo(posts, { ledger: decided(posts) });
  const bad = async (url, opt = {}) => (opt.method === "POST" ? { ok: false, json: async () => ({}) } : { ok: true, json: async () => ({}) });
  for (let i = 0; i < 3; i++) await run(root, {}, bad);
  assert.equal(stateOf(root).kkkk0001.status, "error");
  assert.equal((await run(root)).f.calls.length, 0);
});
