// Nachruestung fuer den Altbestand: wandelt jedes GIF unter assets/img/animations in ein MP4 (H.264, yuv420p, ohne Ton,
// faststart) plus Poster (WebP) um, ersetzt im Front Matter der Beitraege bzw. in den Include-Aufrufen von _tabs/flows.md
// das GIF-Feld (src) durch video und poster und loescht mit --delete anschliessend GIF und altes PNG-Poster.
// Aufruf: node tools/animation/gif-to-mp4.mjs [--root <Repo>] [--force] [--delete]
// Braucht ffmpeg und ffprobe. Idempotent: vorhandene MP4 werden ohne --force nicht neu codiert.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const rootIdx = args.indexOf("--root");
const ROOT = path.resolve(rootIdx >= 0 ? args[rootIdx + 1] : path.join(path.dirname(new URL(import.meta.url).pathname), "..", ".."));
const FORCE = args.includes("--force");
const DELETE = args.includes("--delete");
const DIR = path.join(ROOT, "assets", "img", "animations");
const END_CARD_SECONDS = 4; // wie endCardSeconds in render-gif.mjs: Poster ist das letzte Bild vor der Abschlusskarte

export function encodeMp4(gif, mp4) {
  // Gerade Masse sind Pflicht fuer yuv420p; GIF-Timing wird uebernommen
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", gif, "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "23",
    "-profile:v", "high", "-pix_fmt", "yuv420p", "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2", "-movflags", "+faststart", mp4]);
}

export function duration(file) {
  return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file], { encoding: "utf8" }).trim()) || 0;
}

export function makePoster(mp4, poster, seconds) {
  const t = Math.max(0, seconds - END_CARD_SECONDS - 0.4);
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-ss", t.toFixed(2), "-i", mp4, "-frames:v", "1", "-c:v", "libwebp", "-quality", "82", poster]);
}

/** Ersetzt im animation-Block eines Beitrags src (GIF) durch video und poster (WebP). */
export function patchPost(file, gifRel, mp4Rel, posterRel) {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return false;
  const eol = m[0].includes("\r\n") ? "\r\n" : "\n";
  const lines = m[1].split(/\r?\n/);
  const at = lines.findIndex((l) => /^animation:\s*$/.test(l));
  if (at < 0) return false;
  let end = at + 1;
  while (end < lines.length && /^\s+\S/.test(lines[end])) end++;
  const block = lines.slice(at + 1, end);
  const srcLine = block.find((l) => /^\s+src:\s*/.test(l) && l.replace(/^\s+src:\s*/, "").trim() === gifRel)
    || block.find((l) => /^\s+video:\s*/.test(l) && l.replace(/^\s+video:\s*/, "").trim() === mp4Rel);
  if (!srcLine) return false;
  if (/^\s+video:/.test(srcLine)) {
    // schon umgestellt: nur poster nachziehen
    const next = block.map((l) => (/^\s+poster:/.test(l) ? l.replace(/:\s*.*$/, `: ${posterRel}`) : l));
    lines.splice(at + 1, end - at - 1, ...next);
    fs.writeFileSync(file, `---${eol}${lines.join(eol)}${eol}---${eol}` + raw.slice(m[0].length), "utf8");
    return true;
  }
  const indent = srcLine.match(/^\s+/)[0];
  const next = block.filter((l) => !/^\s+(video|poster):/.test(l));
  const srcAt = next.findIndex((l) => /^\s+src:/.test(l));
  next.splice(srcAt, 1, `${indent}video: ${mp4Rel}`, `${indent}poster: ${posterRel}`);
  lines.splice(at + 1, end - at - 1, ...next);
  fs.writeFileSync(file, `---${eol}${lines.join(eol)}${eol}---${eol}` + raw.slice(m[0].length), "utf8");
  return true;
}

/** Ersetzt in _tabs/flows.md im Include-Aufruf src= (GIF) durch video= und setzt poster= auf das WebP. */
export function patchFlows(file, gifRel, mp4Rel, posterRel) {
  if (!fs.existsSync(file)) return false;
  const raw = fs.readFileSync(file, "utf8");
  const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(\\{% include animation\\.html )([^%]*(?:src="${esc(gifRel)}"|video="${esc(mp4Rel)}")[^%]*)(%\\})`);
  const m = raw.match(re);
  if (!m) return false;
  let inner = m[2].replace(/poster="[^"]*"/, `poster="${posterRel}"`);
  if (/src="/.test(inner)) inner = inner.replace(/\s*video="[^"]*"/, "").replace(/src="[^"]*"/, `video="${mp4Rel}"`);
  fs.writeFileSync(file, raw.replace(m[0], `${m[1]}${inner}${m[3]}`), "utf8");
  return true;
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const gifs = fs.readdirSync(DIR).filter((f) => f.endsWith(".gif")).sort();
  const posts = fs.readdirSync(path.join(ROOT, "_posts")).filter((f) => f.endsWith(".md")).map((f) => path.join(ROOT, "_posts", f));
  const flows = path.join(ROOT, "_tabs", "flows.md");
  const rows = [];
  for (const gif of gifs) {
    const base = gif.replace(/\.gif$/, "");
    const gifPath = path.join(DIR, gif);
    const mp4 = path.join(DIR, `${base}.mp4`);
    const poster = path.join(DIR, `${base}.poster.webp`);
    if (FORCE || !fs.existsSync(mp4)) encodeMp4(gifPath, mp4);
    if (FORCE || !fs.existsSync(poster)) makePoster(mp4, poster, duration(mp4));
    const rel = (f) => `/assets/img/animations/${path.basename(f)}`;
    let patched = 0;
    for (const p of posts) if (patchPost(p, rel(gifPath), rel(mp4), rel(poster))) patched++;
    if (patchFlows(flows, rel(gifPath), rel(mp4), rel(poster))) patched++;
    const oldPng = path.join(DIR, `${base}.poster.png`);
    const gifBytes = fs.statSync(gifPath).size;
    const pngBytes = fs.existsSync(oldPng) ? fs.statSync(oldPng).size : 0;
    if (DELETE && patched) { fs.rmSync(gifPath, { force: true }); fs.rmSync(oldPng, { force: true }); }
    rows.push({ base, gif: gifBytes, png: pngBytes, mp4: fs.statSync(mp4).size, poster: fs.statSync(poster).size, patched });
    console.log(`${base}: GIF ${(rows.at(-1).gif / 1024).toFixed(0)} KB -> MP4 ${(rows.at(-1).mp4 / 1024).toFixed(0)} KB + Poster ${(rows.at(-1).poster / 1024).toFixed(0)} KB, ${patched} Eintrag/Eintraege`);
  }
  const sum = (k) => rows.reduce((a, r) => a + r[k], 0);
  console.log(`SUMME\t${JSON.stringify({ files: rows.length, gif: sum("gif"), png: sum("png"), mp4: sum("mp4"), poster: sum("poster"), deleted: DELETE })}`);
}
