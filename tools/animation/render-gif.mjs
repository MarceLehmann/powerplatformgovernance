// Aufruf: node render-gif.mjs <video.json> <ausgabe.gif|ausgabe.mp4> [<video2.json> <ausgabe2.gif> ...]
// Endet die Ausgabe auf .mp4, entsteht stattdessen ein MP4 im Format 4:5 (LinkedIn).
// Rendert pro Paar ein 16:9-GIF fuer den Blog (Endlosschleife, max. GIF_MAX_KB, Standard 1500) plus <ausgabe>.poster.png
// (letztes Bild vor der Abschlusskarte, fuer prefers-reduced-motion). Ein Bundle fuer alle Paare.
import path from "node:path";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { bundle } from "@remotion/bundler";
import { renderMedia, renderStill, selectComposition } from "@remotion/renderer";

const args = process.argv.slice(2);
if (args.length < 2 || args.length % 2) {
  console.error("Usage: node render-gif.mjs <video.json> <out.gif> [...]");
  process.exit(2);
}
const MAX = (Number(process.env.GIF_MAX_KB) || 1500) * 1024;
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), publicDir: path.resolve("public") });

// Stufen: Breite/fps reduzieren, bis das GIF unter der Grenze liegt
const STAGES = [[800, 12], [720, 12], [720, 10], [640, 10], [560, 8]];
function makeGif(mp4, out) {
  let last = 0;
  for (const [w, fps] of STAGES) {
    const vf = `fps=${fps},scale=${w}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=none:diff_mode=rectangle`;
    execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", mp4, "-vf", vf, "-loop", "0", out]);
    last = fs.statSync(out).size;
    console.log(`   GIF ${w}px ${fps}fps: ${(last / 1024).toFixed(0)} KB`);
    if (last <= MAX) return { w, fps, bytes: last };
  }
  return { w: STAGES.at(-1)[0], fps: STAGES.at(-1)[1], bytes: last, overLimit: true };
}

for (let i = 0; i < args.length; i += 2) {
  const jsonPath = path.resolve(args[i]);
  const gifPath = path.resolve(args[i + 1]);
  const props = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  fs.mkdirSync(path.dirname(gifPath), { recursive: true });
  if (/\.mp4$/i.test(gifPath)) {
    // LinkedIn-Beilage: MP4 4:5 (1080x1350, ohne Ton), das gleiche Video wie das Blog-GIF
    const portrait = await selectComposition({ serveUrl, id: "Tip4x5", inputProps: props });
    await renderMedia({ composition: portrait, serveUrl, codec: "h264", outputLocation: gifPath, inputProps: props, crf: 20, pixelFormat: "yuv420p" });
    const bytes = fs.statSync(gifPath).size;
    console.log("RESULT	" + JSON.stringify({ file: gifPath, width: 1080, height: 1350, bytes, seconds: portrait.durationInFrames / portrait.fps }));
    console.log(`-> ${gifPath} ${(bytes / 1024).toFixed(0)} KB (MP4 4:5)`);
    continue;
  }
  const composition = await selectComposition({ serveUrl, id: "Tip16x9", inputProps: props });
  const mp4 = gifPath.replace(/\.gif$/i, ".tmp.mp4");
  await renderMedia({ composition, serveUrl, codec: "h264", outputLocation: mp4, inputProps: props, crf: 18, pixelFormat: "yuv420p", scale: 0.5 });
  const info = makeGif(mp4, gifPath);
  const seconds = composition.durationInFrames / composition.fps;
  const posterFrame = Math.max(0, composition.durationInFrames - Math.round((props.endCardSeconds ?? 4) * composition.fps) - 5);
  await renderStill({ composition, serveUrl, output: gifPath.replace(/\.gif$/i, ".poster.png"), inputProps: props, frame: posterFrame, scale: 0.5 });
  fs.rmSync(mp4, { force: true });
  console.log("RESULT	" + JSON.stringify({ file: gifPath, width: info.w, height: Math.round((info.w * 1080) / 1920), bytes: info.bytes, seconds, overLimit: !!info.overLimit }));
  console.log(`-> ${gifPath} ${(info.bytes / 1024).toFixed(0)} KB, ${seconds.toFixed(1)} s, ${info.w}px${info.overLimit ? " (UEBER GRENZE)" : ""}`);
}
