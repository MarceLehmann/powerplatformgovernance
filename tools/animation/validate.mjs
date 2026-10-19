// Strikte Pruefung der KI-Antwort. Alles, was nicht eindeutig gueltig ist, wird zu "kein GIF" (Ablehnung mit Grund).
// Die Belege (evidence) muessen woertlich im englischen Beitragstext stehen: das verhindert erfundene Schritte.
import { ICON_LIST, PRODUCT_LIST } from "./prompt.mjs";

const EMOJI = /\p{Extended_Pictographic}/u;
const FORBIDDEN = /[–—<>{}`\\]/; // Gedankenstriche, HTML, Template- und Escape-Zeichen
const norm = (t) => String(t).toLowerCase().replace(/[‘’“”]/g, "'").replace(/\s+/g, " ").trim();

function plain(value, max, where, errors, { optional = false } = {}) {
  if (value === undefined || value === null || value === "") {
    if (!optional) errors.push(`${where}: fehlt`);
    return undefined;
  }
  if (typeof value !== "string") { errors.push(`${where}: kein Text`); return undefined; }
  const v = value.replace(/\s+/g, " ").trim();
  if (!v || v.length > max) errors.push(`${where}: Laenge 1-${max} erwartet (${v.length})`);
  if (EMOJI.test(v)) errors.push(`${where}: Emoji nicht erlaubt`);
  if (FORBIDDEN.test(v)) errors.push(`${where}: unerlaubtes Zeichen (Gedankenstrich, HTML oder Klammer)`);
  if (v.includes("!")) errors.push(`${where}: Ausrufezeichen nicht erlaubt`);
  return v;
}

function cleanVideo(raw, lang, sourceText, errors) {
  const where = `video.${lang}`;
  if (!raw || typeof raw !== "object") { errors.push(`${where}: fehlt`); return null; }
  const out = {
    title: plain(raw.title, 52, `${where}.title`, errors),
    subtitle: plain(raw.subtitle, 110, `${where}.subtitle`, errors),
    steps: [],
  };
  if (!Array.isArray(raw.steps) || raw.steps.length < 3 || raw.steps.length > 5) { errors.push(`${where}.steps: 3 bis 5 erwartet`); return out; }
  const source = norm(sourceText);
  raw.steps.forEach((s, i) => {
    const w = `${where}.steps[${i}]`;
    if (!s || typeof s !== "object") { errors.push(`${w}: kein Objekt`); return; }
    const step = { product: PRODUCT_LIST.includes(s.product) ? s.product : "generic", icon: s.icon };
    if (!PRODUCT_LIST.includes(s.product)) errors.push(`${w}.product: unbekannt (${s.product})`);
    if (!ICON_LIST.includes(s.icon)) errors.push(`${w}.icon: unbekannt (${s.icon})`);
    if (s.productLabel) step.productLabel = plain(s.productLabel, 22, `${w}.productLabel`, errors);
    step.title = plain(s.title, 38, `${w}.title`, errors);
    if (!Array.isArray(s.actions) || s.actions.length < 1 || s.actions.length > 3) errors.push(`${w}.actions: 1 bis 3 erwartet`);
    else step.actions = s.actions.map((a, j) => plain(a, 26, `${w}.actions[${j}]`, errors));
    // Beleg: nur Pflicht auf der englischen Fassung, die Quote muss im Beitragstext vorkommen
    const ev = typeof s.evidence === "string" ? norm(s.evidence) : "";
    if (lang === "en") {
      if (ev.length < 12) errors.push(`${w}.evidence: fehlt oder zu kurz`);
      else if (!source.includes(ev)) errors.push(`${w}.evidence: nicht woertlich im Beitragstext (${s.evidence.slice(0, 50)})`);
      step.evidence = s.evidence;
    }
    out.steps.push(step);
  });
  if (raw.punchline !== undefined) {
    if (!Array.isArray(raw.punchline) || raw.punchline.length < 1 || raw.punchline.length > 2) errors.push(`${where}.punchline: 1 bis 2 Zeilen erwartet`);
    else out.punchline = raw.punchline.map((l, i) => plain(l, 26, `${where}.punchline[${i}]`, errors));
  }
  if (lang === "de" && JSON.stringify(out).includes("ß")) errors.push(`${where}: "ss" statt Eszett verwenden`);
  return out;
}

/**
 * @param raw     geparstes JSON der KI
 * @param candidate { text: {en, de?}, langs: ["en","de"] }
 * @returns { gif: boolean, reason: string, errors: string[], alt?, video? }
 */
export function validateDecision(raw, candidate) {
  const errors = [];
  if (!raw || typeof raw !== "object" || typeof raw.gif !== "boolean") return { gif: false, reason: "Antwort ungueltig", errors: ["gif-Feld fehlt"] };
  const reason = typeof raw.reason === "string" ? raw.reason.replace(/\s+/g, " ").trim().slice(0, 300) : "";
  if (!raw.gif) return { gif: false, reason: reason || "kein Ablauf", errors: [] };
  const langs = candidate.langs || ["en", "de"];
  const video = {};
  const alt = {};
  for (const lang of langs) {
    video[lang] = cleanVideo(raw.video?.[lang], lang, candidate.text.en, errors);
    alt[lang] = plain(raw.alt?.[lang], 200, `alt.${lang}`, errors);
  }
  if (langs.length === 2 && video.en?.steps && video.de?.steps) {
    const sig = (v) => v.steps.map((s) => `${s.product}/${s.icon}`).join("|");
    if (sig(video.en) !== sig(video.de)) errors.push("en und de unterscheiden sich in Schrittzahl, Produkt oder Icon");
  }
  if (errors.length) return { gif: false, reason: `Antwort verworfen: ${reason}`, errors };
  return { gif: true, reason, errors: [], alt, video };
}

/** Video-JSON fuer Remotion: Belege entfernen, Marken-Abschluss und Zeitplan automatisch. */
export function toRemotionProps(video, { endUrl, endLine }) {
  const steps = video.steps.map(({ evidence, ...rest }) => rest);
  return { endCardSeconds: 2, scale: 1.18, kicker: "", title: video.title, subtitle: video.subtitle, steps, ...(video.punchline ? { punchline: video.punchline } : {}), endUrl, endLine };
}
