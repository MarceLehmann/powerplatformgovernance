// LinkedIn ueber Buffer fuer Governance: jeder neue Beitrag (curated_summary und original_article, englische Fassung)
// ist Kandidat. Hoechstens DAILY_CAP Beitraege pro Kalendertag (Europe/Zurich). Reihenfolge: zuerst Beitraege mit Video
// (MP4 4:5 aus Auto-GIF), dann Beitraege mit Bild (image.path), innerhalb der Gruppe die neuesten zuerst.
// Was an seinem Tag keinen Platz hat, verfaellt (Status "expired", kein Rueckstau).
//
// Sicherheitsstufen (Standard: es wird NICHTS gesendet):
//   BUFFER_SEND nicht "true"            -> Trockenlauf, nur Ausgabe der Nutzlast, Zustand bleibt unveraendert
//   BUFFER_SEND=true, BUFFER_MODE leer  -> Buffer-ENTWURF (saveToDraft)
//   BUFFER_SEND=true, BUFFER_MODE=queue -> Warteschlange nach den Slots des Kanals in Buffer; mit BUFFER_SLOTS="09:00,12:00,15:00"
//                                          wird stattdessen dueAt (customScheduled) auf den naechsten freien Slot gesetzt
// Benoetigt (GitHub-Secrets/-Variablen): BUFFER_API_KEY, BUFFER_CHANNEL_ID; optional BUFFER_API_URL, BUFFER_SLOTS, BUFFER_DAILY_CAP, BUFFER_HASHTAG.
// Zustand je Beitrag: tools/animation/social.json (Schluessel = curation_id bzw. "orig-<slug>"). Stati: pending, drafted, queued,
// expired, error, demo. "demo" und jeder andere Status ausser "pending" wird nie gesendet.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parsePost, unescapeBody } from "./run.mjs";

export const TZ = "Europe/Zurich";
export const DAILY_CAP = 3;
export const MAX_LEN = 750; // Gesamtlaenge des Posts (Titel, TL;DR, Quelle, Link, Hashtags)
const HOLD_HOURS = 12; // curated Beitrag ohne Auto-GIF-Entscheidung wartet so lange auf ein moegliches Video

const MUTATION = `mutation Create($input: CreatePostInput!) {
  createPost(input: $input) {
    __typename
    ... on PostActionSuccess { post { id status dueAt } }
    ... on MutationError { message }
  }
}`;

// ---------- Zeit (Europe/Zurich) ----------
const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" });
function parts(date) { return Object.fromEntries(fmt.formatToParts(date).map((p) => [p.type, p.value])); }
/** Kalendertag in Zurich als "YYYY-MM-DD". */
export function zurichDay(date) { const p = parts(date); return `${p.year}-${p.month}-${p.day}`; }
function tzOffsetMs(date) { const p = parts(date); return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - Math.floor(date.getTime() / 1000) * 1000; }
/** "2026-10-20" + "09:00" (Zurich-Ortszeit) -> Date (UTC), sommerzeitrichtig. */
export function zurichToUtc(day, hhmm) {
  const [y, m, d] = day.split("-").map(Number);
  const [hh, mm] = hhmm.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const first = guess - tzOffsetMs(new Date(guess));
  return new Date(guess - tzOffsetMs(new Date(first)));
}
export function parseSlots(s) {
  return String(s || "").split(",").map((x) => x.trim()).filter((x) => /^\d{1,2}:\d{2}$/.test(x)).map((x) => x.padStart(5, "0"));
}
/** Naechster freier Slot nach `now` (heute, sonst die Folgetage); `taken` = Menge schon belegter ISO-Zeiten. */
export function nextFreeSlot(now, slots, taken = new Set(), daysAhead = 4) {
  for (let i = 0; i < daysAhead; i++) {
    const day = zurichDay(new Date(now.getTime() + i * 86400000));
    for (const hhmm of slots) {
      const at = zurichToUtc(day, hhmm);
      if (at.getTime() > now.getTime() + 120000 && !taken.has(at.toISOString())) return at;
    }
  }
  return null;
}

// ---------- Text ----------
const DASH = /[–—−]/g;
const EMOJI = /[\p{Extended_Pictographic}‍️⃣]/gu;
const HASHTAGS = { "copilot-studio": "#CopilotStudio", "power-automate": "#PowerAutomate", "power-apps": "#PowerApps", dataverse: "#Dataverse", "power-pages": "#PowerPages" };

export function plain(t) {
  return unescapeBody(String(t ?? ""))
    .replace(/\{%[^%]*%\}/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`+/g, "").replace(/\*\*?/g, "").replace(/(^|[\s(])_([^_\n]+)_(?=[\s).,;:]|$)/g, "$1$2")
    .replace(EMOJI, "")
    .replace(/\s[–—−]\s/g, ", ").replace(DASH, "-").replace(/\s-\s/g, ", ")
    .replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ").replace(/\s+,/g, ",").trim();
}

const sentences = (t) => t.split(/(?<=[.!?])\s+(?=[A-Z0-9"'(])/).filter(Boolean);

/** TL;DR-Abschnitt ("## TL;DR") als reiner Text; sonst die ersten zwei Saetze des ersten Absatzes; sonst description. */
export function extractSummary(fm, body) {
  const m = body.match(/^##\s+TL;DR\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im);
  const tldr = m ? plain(m[1]) : "";
  if (tldr.length >= 40) return { text: tldr, from: "tldr" };
  const para = body.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !/^#/.test(p) && !/^\{%/.test(p) && plain(p).length >= 40);
  if (para) return { text: sentences(plain(para)).slice(0, 2).join(" "), from: "paragraph" };
  return { text: plain(fm.description), from: "description" };
}

function trimToBudget(text, budget) {
  if (text.length <= budget) return text;
  let out = "";
  for (const s of sentences(text)) { if ((out ? out + " " + s : s).length > budget) break; out = out ? out + " " + s : s; }
  if (out) return out;
  const cut = text.slice(0, budget).replace(/\s+\S*$/, "").replace(/[,;:\s]+$/, "");
  return cut + ".";
}

export function hashtagsFor(fm, base = "#PowerPlatformGovernanceDaily") {
  const extra = (fm.tags || []).map((t) => HASHTAGS[t]).filter(Boolean);
  return [base, ...extra].slice(0, 3).join(" ");
}

/** Post-Text: Hook (Titel), TL;DR, Quelle, Link zum Beitrag (am Ende), hoechstens 3 Hashtags. */
export function buildPostText(fm, body, siteBase, hashtag) {
  const link = `${siteBase}${fm.permalink}`;
  const hook = plain(fm.title);
  const source = fm.content_type === "curated_summary" && fm.source_name ? `Source: ${plain(fm.source_name)}` : "";
  const lead = fm.content_type === "curated_summary" ? "Full summary: " : "Read the article: ";
  const tail = [source, `${lead}${link}`, hashtagsFor(fm, hashtag)].filter(Boolean).join("\n\n");
  const summary = extractSummary(fm, body);
  const budget = MAX_LEN - hook.length - tail.length - 4;
  return `${hook}\n\n${trimToBudget(summary.text, Math.max(budget, 80))}\n\n${tail}`;
}

/** Fehlerliste; leer = gueltig. */
export function validateText(text, link) {
  const e = [];
  if (!text || text.trim().length < 80) e.push("Text leer oder zu kurz");
  if (text.length > MAX_LEN + 150) e.push(`Text zu lang (${text.length})`);
  if (DASH.test(text)) e.push("Gedankenstrich"); DASH.lastIndex = 0;
  if (EMOJI.test(text)) e.push("Emoji"); EMOJI.lastIndex = 0;
  if ((text.match(/#\w+/g) || []).length > 3) e.push("mehr als 3 Hashtags");
  if (!text.includes(link)) e.push("Link fehlt");
  if (/\{%|&#\d+;|\*\*|\]\(|&amp;|&lt;/.test(text)) e.push("Markup im Text");
  if (text.split("\n\n").length < 4) e.push("Aufbau unvollstaendig");
  return e;
}

// ---------- Kandidaten ----------
const slugOf = (permalink) => String(permalink).replace(/\/$/, "").split("/").pop();

export function readPosts(root) {
  const dir = path.join(root, "_posts");
  const out = [];
  for (const name of fs.readdirSync(dir).filter((n) => n.endsWith("-en.md"))) {
    const p = parsePost(fs.readFileSync(path.join(dir, name), "utf8"));
    if (!p || !["curated_summary", "original_article"].includes(p.fm.content_type) || !p.fm.permalink || !p.fm.date) continue;
    out.push({ ...p, key: p.fm.curation_id || `orig-${slugOf(p.fm.permalink)}`, date: new Date(p.fm.date) });
  }
  return out;
}

/** Priorisierung: Video vor Bild, dann neueste zuerst. */
export function rank(list) {
  return [...list].sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "video" ? -1 : 1) || b.date - a.date);
}

export function buildInput(c, siteBase, channelId, { mode, dueAt } = {}) {
  const asset = c.kind === "video"
    ? { video: { url: `${siteBase}${c.mp4}`, metadata: { title: c.title.slice(0, 100) } } }
    : { image: { url: c.imageUrl, metadata: { altText: (c.imageAlt || c.title).slice(0, 400) } } };
  const input = { channelId, text: c.text, assets: [asset], aiAssisted: true, schedulingType: "automatic", mode: "addToQueue" };
  if (mode === "queue" && dueAt) { input.mode = "customScheduled"; input.dueAt = dueAt.toISOString(); }
  else if (mode !== "queue") input.saveToDraft = true;
  return input;
}

const isOnline = async (f, url) => { const r = await f(url, { method: "HEAD" }).catch(() => null); return !!(r && r.ok); };

export async function main(argv, env = process.env, deps = {}) {
  const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d; };
  const root = path.resolve(arg("--root", "."));
  const siteBase = `https://${arg("--site-url", "powerplatformgovernance.com")}`;
  const cap = Number(arg("--daily-cap", env.BUFFER_DAILY_CAP || DAILY_CAP));
  const lookback = Number(arg("--lookback-days", 3));
  const f = deps.fetch || globalThis.fetch;
  const now = deps.now ? deps.now() : new Date();
  const today = zurichDay(now);
  const file = path.join(root, "tools", "animation", "social.json");
  const state = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
  const ledgerFile = path.join(root, "tools", "animation", "ledger.json");
  const ledger = fs.existsSync(ledgerFile) ? JSON.parse(fs.readFileSync(ledgerFile, "utf8")) : {};
  const send = env.BUFFER_SEND === "true";
  const mode = env.BUFFER_MODE === "queue" ? "queue" : "draft";
  const slots = parseSlots(env.BUFFER_SLOTS);
  const apiUrl = env.BUFFER_API_URL || "https://api.buffer.com";
  const save = () => { if (send) fs.writeFileSync(file, JSON.stringify(state, null, 2) + "\n"); };
  const log = [];
  const say = (m) => { log.push(m); console.log(m); };

  // Posts, die heute schon verbraucht wurden
  let used = Object.values(state).filter((s) => ["drafted", "queued"].includes(s.status) && s.day === today).length;
  const pool = [];
  for (const p of readPosts(root)) {
    if (p.date > now) continue; // noch nicht veroeffentlicht
    const day = zurichDay(p.date);
    const known = state[p.key];
    if (known && known.status !== "pending") continue; // gesendet, verfallen, demo, error: nie wieder
    if (day < today) {
      if (new Date(today) - new Date(day) <= lookback * 86400000) {
        say(`verfallen: ${p.key} (${day}, kein Platz am Beitragstag)`);
        if (send) state[p.key] = { status: "expired", day, title: p.fm.title, expiredAt: today };
      }
      continue;
    }
    const mp4Rel = `/assets/img/animations/${p.key}-4x5.mp4`;
    const hasMp4 = fs.existsSync(path.join(root, mp4Rel));
    const undecided = p.fm.content_type === "curated_summary" && !p.fm.animation && !ledger[p.key] && now - p.date < HOLD_HOURS * 3600000;
    if (undecided) { say(`wartet: ${p.key} (Auto-GIF-Entscheidung steht aus)`); continue; }
    const img = p.fm.image?.path;
    const c = { key: p.key, date: p.date, title: plain(p.fm.title), fm: p.fm, kind: hasMp4 ? "video" : img ? "image" : null, mp4: hasMp4 ? mp4Rel : null,
      imageUrl: img ? (/^https?:/.test(img) ? img : `${siteBase}${img}`) : null, imageAlt: plain(p.fm.image?.alt || ""), link: `${siteBase}${p.fm.permalink}` };
    if (!c.kind) { say(`uebersprungen: ${p.key} (weder Video noch Bild)`); continue; }
    c.text = buildPostText(p.fm, p.body, siteBase, env.BUFFER_HASHTAG);
    const errs = validateText(c.text, c.link);
    if (errs.length) { say(`uebersprungen: ${p.key} (Text ungueltig: ${errs.join(", ")})`); continue; }
    pool.push(c);
  }

  const ranked = rank(pool);
  let sent = 0;
  const taken = new Set(Object.values(state).map((s) => s.dueAt).filter(Boolean));
  for (const c of ranked) {
    if (used >= cap) { say(`kein Platz heute: ${c.key} verfaellt (Tageslimit ${cap})`); continue; }
    const url = c.kind === "video" ? `${siteBase}${c.mp4}` : c.imageUrl;
    if (!(await isOnline(f, url))) { say(`wartet: ${c.key} (${c.kind} noch nicht online)`); continue; }
    const dueAt = send && mode === "queue" && slots.length ? nextFreeSlot(now, slots, taken) : null;
    const input = buildInput(c, siteBase, env.BUFFER_CHANNEL_ID || "<BUFFER_CHANNEL_ID>", { mode, dueAt });
    if (!send) { say(`Trockenlauf ${c.key} (${c.kind}):\n${JSON.stringify(input, null, 2)}`); used++; continue; }
    if (!env.BUFFER_API_KEY || !env.BUFFER_CHANNEL_ID) throw new Error("BUFFER_API_KEY und BUFFER_CHANNEL_ID fehlen");
    const entry = state[c.key] = state[c.key] || { status: "pending" };
    Object.assign(entry, { day: today, kind: c.kind, title: c.title, text: c.text });
    let result, body;
    try {
      const res = await f(apiUrl, { method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${env.BUFFER_API_KEY}` }, body: JSON.stringify({ query: MUTATION, variables: { input } }) });
      body = await res.json().catch(() => ({}));
      result = res.ok ? body?.data?.createPost : null;
    } catch { result = null; }
    if (!result || result.__typename !== "PostActionSuccess") {
      entry.attempts = (entry.attempts || 0) + 1;
      entry.lastError = result?.message || body?.errors?.[0]?.message || "keine Antwort";
      if (entry.attempts >= 3) entry.status = "error";
      say(`Fehler ${c.key} (Versuch ${entry.attempts}): ${entry.lastError}`);
      save();
      continue;
    }
    entry.status = mode === "queue" ? "queued" : "drafted";
    entry.bufferPostId = result.post.id;
    if (dueAt) { entry.dueAt = dueAt.toISOString(); taken.add(entry.dueAt); }
    used++; sent++;
    say(`${entry.status}: ${c.key} (${c.kind})${dueAt ? " " + entry.dueAt : ""}`);
    save();
  }
  save();
  say(`Heute (${today}): ${used} von ${cap} Beitraegen belegt, ${sent} neu gesendet.`);
  return { log, state, sent, used };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((e) => { console.error(e.message); process.exit(1); });
}
