// LinkedIn-Beilage ueber Buffer: nimmt die in tools/animation/social.json vorgemerkten Beitraege (Status "pending"),
// prueft, dass das MP4 oeffentlich abrufbar ist (nach dem Pages-Deploy) und legt in Buffer einen Beitrag an.
//
// Sicherheitsstufen (Standard: es wird NICHTS gesendet):
//   BUFFER_SEND nicht "true"          -> Trockenlauf, nur Ausgabe der Nutzlast
//   BUFFER_SEND=true, BUFFER_MODE leer -> Buffer-ENTWURF (saveToDraft), Marcel gibt in Buffer frei und setzt das KI-Label
//   BUFFER_SEND=true, BUFFER_MODE=queue -> addToQueue (geht mit dem naechsten freien Slot raus)
// Benoetigt (nur als GitHub-Secrets/-Variablen): BUFFER_API_KEY, BUFFER_CHANNEL_ID (Variable), BUFFER_API_URL (optional, Standard https://api.buffer.com)
// Die Wochengrenze (max. 2 Beitraege pro Kalenderwoche) wird beim Vormerken in run.mjs durchgesetzt (--weekly-cap).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MUTATION = `mutation Create($input: CreatePostInput!) {
  createPost(input: $input) {
    __typename
    ... on PostActionSuccess { post { id status } }
    ... on MutationError { message }
  }
}`;

export function buildInput(entry, siteBase, channelId, mode) {
  const input = {
    channelId,
    text: entry.text,
    assets: [{ video: { url: `${siteBase}${entry.mp4}`, metadata: { title: entry.title.slice(0, 100) } } }],
    aiAssisted: entry.aiAssisted !== false, // KI-Label-Regel: Beitrag und Video entstehen mit KI
    schedulingType: "automatic",
    mode: "addToQueue",
  };
  if (mode !== "queue") input.saveToDraft = true;
  return input;
}

export async function main(argv, env = process.env) {
  const root = path.resolve(argv[argv.indexOf("--root") + 1] || ".");
  const siteBase = `https://${argv[argv.indexOf("--site-url") + 1]}`;
  const file = path.join(root, "tools", "animation", "social.json");
  if (!fs.existsSync(file)) { console.log("Keine social.json, nichts zu tun."); return; }
  const social = JSON.parse(fs.readFileSync(file, "utf8"));
  const send = env.BUFFER_SEND === "true";
  const apiUrl = env.BUFFER_API_URL || "https://api.buffer.com";
  let changed = false;
  for (const [key, entry] of Object.entries(social)) {
    if (entry.status !== "pending") continue;
    const mp4Url = `${siteBase}${entry.mp4}`;
    const head = await fetch(mp4Url, { method: "HEAD" }).catch(() => null);
    if (!head || !head.ok) { console.log(`wartet: ${key} (MP4 noch nicht online: ${head ? head.status : "keine Antwort"})`); continue; }
    const input = buildInput(entry, siteBase, env.BUFFER_CHANNEL_ID || "<BUFFER_CHANNEL_ID>", env.BUFFER_MODE);
    if (!send) {
      console.log(`Trockenlauf ${key}:\n${JSON.stringify(input, null, 2)}`);
      continue;
    }
    if (!env.BUFFER_API_KEY || !env.BUFFER_CHANNEL_ID) throw new Error("BUFFER_API_KEY und BUFFER_CHANNEL_ID fehlen");
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${env.BUFFER_API_KEY}` },
      body: JSON.stringify({ query: MUTATION, variables: { input } }),
    });
    const body = await res.json().catch(() => ({}));
    const result = body?.data?.createPost;
    if (!res.ok || !result || result.__typename !== "PostActionSuccess") {
      console.error(`Fehler ${key}: ${result?.message || body?.errors?.[0]?.message || res.status}`);
      entry.status = "error";
    } else {
      entry.status = env.BUFFER_MODE === "queue" ? "queued" : "drafted";
      entry.bufferPostId = result.post.id;
      console.log(`${entry.status}: ${key}`);
    }
    changed = true;
  }
  if (changed) fs.writeFileSync(file, JSON.stringify(social, null, 2) + "\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((e) => { console.error(e.message); process.exit(1); });
}
