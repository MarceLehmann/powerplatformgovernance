// Auto-GIF: findet neue Beitraege (und optional Abschnitte der Seite /flows/), laesst die KI entscheiden, ob ein
// Ablauf-GIF Sinn macht, rendert es (Remotion) und traegt es ins Front Matter ein. Committen macht der Workflow.
//
//   node tools/animation/run.mjs --root <Repo> --site-url powerplatformdaily.com [--days 3] [--max 5] [--flows]
//                                [--decisions <datei.json>] [--dry-run] [--only <key,key>] [--report <datei.json>]
//                                [--social] [--weekly-cap 2]   LinkedIn-Beilage (MP4 4:5) vormerken, max. N Beitraege pro Kalenderwoche
//
// --decisions: statt der KI eine Datei { "<key>": <KI-Antwort> } verwenden (Test/Rueckwirkend). Die Antworten laufen
//              durch dieselbe Validierung wie echte KI-Antworten.
// --dry-run:   entscheiden und validieren, aber nichts rendern oder schreiben.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { SYSTEM_PROMPT, buildUserPrompt } from "./prompt.mjs";
import { validateDecision, toRemotionProps } from "./validate.mjs";
import { askJson } from "./llm.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

export const unescapeBody = (t) =>
  t.replace(/\\([\\`*_\[\]#])/g, "$1").replace(/&#123;/g, "{").replace(/&#125;/g, "}").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");

export function parsePost(raw) {
  const m = raw.match(FM);
  if (!m) return null;
  const fm = YAML.parse(m[1]) || {};
  const body = raw.slice(m[0].length).replace(/\{%[^%]*%\}/g, "");
  return { fm, body };
}

export function postText(fm, body) {
  const faq = Array.isArray(fm.faq) ? fm.faq.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n") : "";
  return [`Title: ${fm.title}`, `Description: ${fm.description}`, unescapeBody(body).trim(), faq && `FAQ\n${faq}`].filter(Boolean).join("\n\n");
}

/** Beitraege der letzten N Tage (en + de) ohne Eintrag im Ledger und ohne animation-Feld. */
export function findPostCandidates(root, ledger, days, now = new Date()) {
  const dir = path.join(root, "_posts");
  const since = new Date(now.getTime() - days * 86400000);
  const out = [];
  for (const name of fs.readdirSync(dir).filter((n) => n.endsWith("-en.md")).sort()) {
    const en = parsePost(fs.readFileSync(path.join(dir, name), "utf8"));
    if (!en || en.fm.content_type !== "curated_summary" || !en.fm.curation_id) continue;
    const date = new Date(en.fm.date);
    if (!(date >= since) || en.fm.animation || ledger[en.fm.curation_id]) continue;
    const deName = name.replace(/-en\.md$/, "-de.md");
    const dePath = path.join(dir, deName);
    const de = fs.existsSync(dePath) ? parsePost(fs.readFileSync(dePath, "utf8")) : null;
    out.push({
      key: en.fm.curation_id, kind: "post", langs: de ? ["en", "de"] : ["en"], tags: en.fm.tags || [], title: en.fm.title,
      date: String(en.fm.date).slice(0, 10), source: en.fm.source_name, meta: { description: en.fm.description, permalink: en.fm.permalink },
      files: { en: path.join(dir, name), ...(de ? { de: dePath } : {}) },
      text: { en: postText(en.fm, en.body), ...(de ? { de: postText(de.fm, de.body) } : {}) },
    });
  }
  return out;
}

/** Abschnitte "### Starter flow N: Name" der Seite /flows/ (nur Governance). */
export function findFlowCandidates(root, ledger) {
  const file = path.join(root, "_tabs", "flows.md");
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split(/\r?\n/);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const h = lines[i].match(/^### Starter flow (\d+): (.+)$/);
    if (!h) continue;
    let j = i + 1;
    while (j < lines.length && !/^#{2,3} /.test(lines[j])) j++;
    const section = lines.slice(i + 1, j).join("\n");
    const key = `flows-${h[1]}`;
    if (ledger[key] || section.includes("autogif:" + key)) continue;
    out.push({ key, kind: "section", langs: ["en"], tags: ["admin-flow"], title: h[2], file, heading: lines[i],
      text: { en: `Title: ${h[2]}\n\n${section.trim()}` } });
  }
  return out;
}

const q = (s) => JSON.stringify(s);

/** ISO-Kalenderwoche als "2026-W43" (UTC). */
export function isoWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return `${d.getUTCFullYear()}-W${String(Math.ceil(((d - yearStart) / 86400000 + 1) / 7)).padStart(2, "0")}`;
}

/** LinkedIn-Text: Beschreibung des Beitrags, Link, Hashtag. Keine Gedankenstriche. */
export function linkedinText(meta, siteBase, hashtag) {
  const clean = (t) => String(t).replace(/[–—]/g, ",").replace(/\s+/g, " ").trim();
  return `${clean(meta.description)}\n\nRead the summary \u{1F447}\n${siteBase}${meta.permalink}\n\n${hashtag}`;
}

function addFrontMatter(file, block) {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(FM);
  if (!m) throw new Error(`Kein Front Matter: ${file}`);
  const eol = m[0].includes("\r\n") ? "\r\n" : "\n";
  const head = m[1] + eol + block.split("\n").join(eol);
  fs.writeFileSync(file, `---${eol}${head}${eol}---${eol}` + raw.slice(m[0].length), "utf8");
}

function addFlowInclude(file, heading, key, a) {
  const raw = fs.readFileSync(file, "utf8");
  const alt = a.alt.replace(/"/g, "'");
  const include = `<!-- autogif:${key} -->\n{% include animation.html src="${a.src}" poster="${a.poster}" width=${a.width} height=${a.height} alt="${alt}" %}`;
  const idx = raw.indexOf(heading);
  if (idx < 0) throw new Error(`Ueberschrift nicht gefunden: ${heading}`);
  const end = idx + heading.length;
  fs.writeFileSync(file, `${raw.slice(0, end)}\n\n${include}${raw.slice(end)}`, "utf8");
}

function render(jobs) {
  if (!jobs.length) return [];
  const args = jobs.flatMap((j) => [j.json, j.gif]);
  const res = spawnSync(process.execPath, ["render-gif.mjs", ...args], { cwd: HERE, encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] });
  if (res.status !== 0) throw new Error(`Render fehlgeschlagen (Exit ${res.status})`);
  return res.stdout.split(/\r?\n/).filter((l) => l.startsWith("RESULT\t")).map((l) => JSON.parse(l.slice(7)));
}

export async function main(argv) {
  const opt = { days: 3, max: 5 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--flows") opt.flows = true;
    else if (a === "--dry-run") opt.dry = true;
    else if (a === "--social") opt.social = true;
    else if (a.startsWith("--")) opt[a.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = argv[++i];
  }
  const root = path.resolve(opt.root || ".");
  const days = Number(opt.days);
  const max = Number(opt.max);
  const ledgerPath = path.join(root, "tools", "animation", "ledger.json");
  const ledger = fs.existsSync(ledgerPath) ? JSON.parse(fs.readFileSync(ledgerPath, "utf8")) : {};
  const preset = opt.decisions ? JSON.parse(fs.readFileSync(path.resolve(opt.decisions), "utf8")) : null;
  const socialPath = path.join(root, "tools", "animation", "social.json");
  const social = fs.existsSync(socialPath) ? JSON.parse(fs.readFileSync(socialPath, "utf8")) : {};
  const cap = Number(opt.weeklyCap ?? 2);
  const week = isoWeek(new Date());
  let weekCount = Object.values(social).filter((s) => s.week === week).length;
  const only = opt.only ? new Set(opt.only.split(",")) : null;
  const endUrl = opt.siteUrl || "powerplatformdaily.com";

  let candidates = [...findPostCandidates(root, ledger, days), ...(opt.flows ? findFlowCandidates(root, ledger) : [])];
  if (only) candidates = candidates.filter((c) => only.has(c.key));
  if (preset) candidates = candidates.filter((c) => c.key in preset);
  console.log(`Kandidaten: ${candidates.length}`);

  const report = [];
  const jobs = [];
  let yes = 0;
  for (const c of candidates) {
    let decision;
    try {
      const raw = preset ? preset[c.key] : await askJson(SYSTEM_PROMPT, buildUserPrompt(c));
      decision = validateDecision(raw, c);
    } catch (e) {
      decision = { gif: false, reason: `KI-Aufruf fehlgeschlagen: ${e.message}`, errors: [e.message] };
    }
    // Fehler und verworfene Antworten werden im naechsten Lauf erneut versucht (innerhalb des Zeitfensters), nur ein sauberes "nein" kommt ins Ledger
    if (decision.errors.length) decision.transient = true;
    if (decision.gif && yes >= max) decision = { gif: false, reason: "Tageslimit erreicht, naechster Lauf", errors: [], transient: true };
    report.push({ key: c.key, title: c.title, gif: decision.gif, reason: decision.reason, errors: decision.errors });
    console.log(`${decision.gif ? "JA  " : "nein"} ${c.key} ${c.title} | ${decision.reason}${decision.errors.length ? " | " + decision.errors.join("; ") : ""}`);
    if (decision.gif) {
      yes++;
      c.decision = decision;
      jobs.push(c);
    } else if (!decision.transient && !opt.dry) ledger[c.key] = { gif: false, reason: decision.reason, at: new Date().toISOString().slice(0, 10) };
  }

  if (!opt.dry && jobs.length) {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "autogif-"));
    const outDir = path.join(root, "assets", "img", "animations");
    const renderJobs = [];
    for (const c of jobs) for (const lang of c.langs) {
      const json = path.join(tmp, `${c.key}-${lang}.json`);
      const endLine = lang === "de" ? "Kuratiert von KMUpower" : "Curated by KMUpower";
      fs.writeFileSync(json, JSON.stringify(toRemotionProps(c.decision.video[lang], { endUrl, endLine })));
      renderJobs.push({ json, gif: path.join(outDir, `${c.key}-${lang}.gif`), key: c.key, lang });
      // LinkedIn: nur Beitraege (nicht /flows/), nur englische Fassung, hoechstens `cap` pro Kalenderwoche
      if (opt.social && c.kind === "post" && lang === "en" && weekCount < cap) {
        weekCount++;
        c.social = true;
        renderJobs.push({ json, gif: path.join(outDir, `${c.key}-4x5.mp4`), key: c.key, lang: "en", mp4: true });
      }
    }
    const results = render(renderJobs);
    renderJobs.forEach((j, i) => { j.result = results[i]; });
    for (const c of jobs) {
      const evidence = c.decision.video.en.steps.map((s) => s.evidence);
      for (const lang of c.langs) {
        const j = renderJobs.find((x) => x.key === c.key && x.lang === lang && !x.mp4);
        const a = { src: `/assets/img/animations/${c.key}-${lang}.gif`, poster: `/assets/img/animations/${c.key}-${lang}.poster.png`, width: j.result.width, height: j.result.height, alt: c.decision.alt[lang] };
        if (c.kind === "post") addFrontMatter(c.files[lang], `animation:\n  src: ${a.src}\n  poster: ${a.poster}\n  width: ${a.width}\n  height: ${a.height}\n  alt: ${q(a.alt)}`);
        else addFlowInclude(c.file, c.heading, c.key, a);
      }
      if (c.social) {
        const siteBase = `https://${endUrl}`;
        social[c.key] = { week, status: "pending", title: c.title, mp4: `/assets/img/animations/${c.key}-4x5.mp4`, text: linkedinText(c.meta, siteBase, opt.hashtag || "#PowerPlatformGovernanceDaily"), aiAssisted: true, createdAt: new Date().toISOString().slice(0, 10) };
      }
      ledger[c.key] = { gif: true, reason: c.decision.reason, at: new Date().toISOString().slice(0, 10), evidence };
    }
    fs.rmSync(tmp, { recursive: true, force: true });
  }
  if (!opt.dry) {
    fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });
    fs.writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + "\n");
  }
  if (!opt.dry && Object.keys(social).length) fs.writeFileSync(socialPath, JSON.stringify(social, null, 2) + "\n");
  if (opt.report) fs.writeFileSync(path.resolve(opt.report), JSON.stringify(report, null, 2));
  console.log(`Ergebnis: ${yes} GIF(s) von ${candidates.length} Kandidaten${opt.dry ? " (Trockenlauf)" : ""}`);
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((e) => { console.error(e.message); process.exit(1); });
}
