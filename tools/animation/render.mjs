// Aufruf: node render.mjs <tip.json> <Ausgabe-Praefix> [--gif]
// Rendert <Praefix>_16x9.mp4, _9x16.mp4, _4x5.mp4. Mit --gif zusaetzlich GIFs (16x9 und 4x5, 15 fps, 800 px, Ziel < 5 MB).
import path from "node:path";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";

const args = process.argv.slice(2);
const gif = args.includes("--gif");
const [jsonArg = "tip.json", outArg = "out/tip"] = args.filter((a) => !a.startsWith("--"));
const props = JSON.parse(fs.readFileSync(path.resolve(jsonArg), "utf8"));
fs.mkdirSync(path.dirname(path.resolve(outArg)), { recursive: true });
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), publicDir: path.resolve("public") });

const MAX_GIF = 5 * 1024 * 1024;
function makeGif(mp4, out) {
  // Stufen: Breite/fps reduzieren, bis das GIF unter ca. 5 MB liegt
  for (const [w, fps] of [[800, 15], [800, 12], [720, 12], [640, 10], [560, 10]]) {
    const vf = `fps=${fps},scale=${w}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle`;
    execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", mp4, "-vf", vf, "-loop", "0", out]);
    const size = fs.statSync(out).size;
    console.log(`   GIF ${w}px ${fps}fps: ${(size / 1048576).toFixed(2)} MB`);
    if (size <= MAX_GIF) return;
  }
}

for (const [id, suffix] of [["Tip16x9", "16x9"], ["Tip9x16", "9x16"], ["Tip4x5", "4x5"]]) {
  const composition = await selectComposition({ serveUrl, id, inputProps: props });
  const outputLocation = path.resolve(`${outArg}_${suffix}.mp4`);
  await renderMedia({
    composition, serveUrl, codec: "h264", outputLocation, inputProps: props, crf: 16, pixelFormat: "yuv420p",
    onProgress: ({ progress }) => process.stdout.write(`\r${id} ${(progress * 100).toFixed(0)}%   `),
  });
  console.log(`\n-> ${outputLocation}`);
  if (gif && suffix !== "9x16") makeGif(outputLocation, path.resolve(`${outArg}_${suffix}.gif`));
}
