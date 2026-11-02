// Aufruf: node render-gif.mjs <video.json> <ausgabe.mp4> [<video2.json> <ausgabe2.mp4> ...]
// Rendert pro Paar genau einmal (Remotion) das 16:9-Blogvideo als <ausgabe>.mp4 (H.264, yuv420p, ohne Ton, faststart, 800 px breit)
// und leitet daraus mit ffmpeg <ausgabe>.poster.webp ab (letztes Bild vor der Abschlusskarte: Poster des Videos und Standbild fuer
// prefers-reduced-motion). Endet die Ausgabe auf -4x5.mp4, entsteht stattdessen das MP4 im Format 4:5 (LinkedIn).
// Es entsteht kein GIF mehr: die Website spielt das MP4, Social Media nutzt das 4:5-MP4 (Dateiname bleibt aus Kompatibilitaet).
// REMOTION_BROWSER=<Pfad> nutzt ein vorhandenes Chromium statt des von Remotion geladenen. Ein Bundle fuer alle Paare.
import path from "node:path";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";

const args = process.argv.slice(2);
if (args.length < 2 || args.length % 2) {
  console.error("Usage: node render-gif.mjs <video.json> <out.mp4> [...]");
  process.exit(2);
}
const BLOG_WIDTH = 800; // Breite des Blog-Videos (wie das bisherige GIF)
const browserExecutable = process.env.REMOTION_BROWSER || undefined;

// MP4 als Web-Original: Container mit faststart neu schreiben (Remotion legt den moov-Atom ans Ende), ohne Tonspur
function finishMp4(tmp, out) {
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", tmp, "-c:v", "copy", "-an", "-movflags", "+faststart", out]);
  fs.rmSync(tmp, { force: true });
  return fs.statSync(out).size;
}

// Poster als WebP aus dem MP4 (Bild bei <seconds>)
function makePoster(mp4, out, seconds) {
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-ss", seconds.toFixed(3), "-i", mp4, "-frames:v", "1", "-c:v", "libwebp", "-quality", "82", out]);
  return fs.statSync(out).size;
}
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), publicDir: path.resolve("public") });

for (let i = 0; i < args.length; i += 2) {
  const jsonPath = path.resolve(args[i]);
  const outPath = path.resolve(args[i + 1]);
  const props = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  if (/-4x5\.mp4$/i.test(outPath)) {
    // LinkedIn-Beilage: MP4 4:5 (1080x1350, ohne Ton), das gleiche Video wie das Blog-GIF
    const portrait = await selectComposition({ serveUrl, id: "Tip4x5", inputProps: props, browserExecutable });
    await renderMedia({ composition: portrait, serveUrl, codec: "h264", outputLocation: outPath, inputProps: props, crf: 20, pixelFormat: "yuv420p", browserExecutable });
    const bytes = fs.statSync(gifPath).size;
    console.log("RESULT	" + JSON.stringify({ file: gifPath, width: 1080, height: 1350, bytes, seconds: portrait.durationInFrames / portrait.fps }));
    console.log(`-> ${gifPath} ${(bytes / 1024).toFixed(0)} KB (MP4 4:5)`);
    continue;
  }
  const composition = await selectComposition({ serveUrl, id: "Tip16x9", inputProps: props, browserExecutable });
  const tmp = outPath.replace(/\.mp4$/i, ".tmp.mp4");
  const poster = outPath.replace(/\.mp4$/i, ".poster.webp");
  // Ein Render: das MP4 ist das Original (800 px breit), das Poster entsteht daraus mit ffmpeg
  await renderMedia({ composition, serveUrl, codec: "h264", outputLocation: tmp, inputProps: props, crf: 23, pixelFormat: "yuv420p", scale: BLOG_WIDTH / composition.width, browserExecutable });
  const bytes = finishMp4(tmp, outPath);
  const seconds = composition.durationInFrames / composition.fps;
  const posterFrame = Math.max(0, composition.durationInFrames - Math.round((props.endCardSeconds ?? 4) * composition.fps) - 5);
  const posterBytes = makePoster(outPath, poster, posterFrame / composition.fps);
  const width = BLOG_WIDTH;
  const height = Math.round(composition.height * (BLOG_WIDTH / composition.width));
  console.log("RESULT\t" + JSON.stringify({ file: outPath, poster, width, height, bytes, posterBytes, seconds }));
  console.log(`-> ${outPath} ${(bytes / 1024).toFixed(0)} KB (MP4 ${width}x${height}), Poster ${(posterBytes / 1024).toFixed(0)} KB, ${seconds.toFixed(1)} s`);
}
