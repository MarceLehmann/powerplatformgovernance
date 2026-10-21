// Strikte Pruefung der KI-Antwort. Alles, was nicht eindeutig gueltig ist, wird zu "kein GIF" (Ablehnung mit Grund).
// Die Belege (evidence) muessen woertlich im englischen Beitragstext stehen: das verhindert erfundene Schritte.
import { ICON_LIST, ICON_ALIASES, LIMITS, PRODUCT_LIST } from "./prompt.mjs";

const EMOJI = /\p{Extended_Pictographic}/u;
const FORBIDDEN = /[–—<>{}`\\]/; // Gedankenstriche, HTML, Template- und Escape-Zeichen
// Typische englische Woerter, die in deutschen Texten nichts verloren haben (Produkt- und Befehlsnamen sind davon nicht betroffen)
const ENGLISH_IN_DE = /\b(the|and|with|from|then|your|into|view|add|choose|configure|discovery|dynamic|settings|create|enable|when|file|content|get|open|select|save)\b/i;
// Original-UI-Namen in Anfuehrungszeichen ("Add Trigger") duerfen im deutschen Text englisch bleiben
const QUOTED = /"[^"]+"|«[^»]+»|„[^“”"]+[“”"]|“[^”]+”/g;
const withoutQuoted = (t) => t.replace(QUOTED, " ");
const normIcon = (i) => { const k = String(i ?? "").toLowerCase().trim(); return ICON_LIST.includes(k) ? k : ICON_ALIASES[k] || i; };
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
    title: plain(raw.title, LIMITS.title, `${where}.title`, errors),
    subtitle: plain(raw.subtitle, LIMITS.subtitle, `${where}.subtitle`, errors),
    steps: [],
  };
  if (!Array.isArray(raw.steps) || raw.steps.length < 3 || raw.steps.length > 5) { errors.push(`${where}.steps: 3 bis 5 erwartet`); return out; }
  const source = norm(sourceText);
  raw.steps.forEach((s, i) => {
    const w = `${where}.steps[${i}]`;
    if (!s || typeof s !== "object") { errors.push(`${w}: kein Objekt`); return; }
    const step = { product: PRODUCT_LIST.includes(s.product) ? s.product : "generic", icon: normIcon(s.icon) };
    if (!PRODUCT_LIST.includes(s.product)) errors.push(`${w}.product: unbekannt (${s.product})`);
    if (!ICON_LIST.includes(step.icon)) errors.push(`${w}.icon: unbekannt (${s.icon})`);
    if (s.productLabel) step.productLabel = plain(s.productLabel, LIMITS.productLabel, `${w}.productLabel`, errors);
    step.title = plain(s.title, LIMITS.stepTitle, `${w}.title`, errors);
    if (!Array.isArray(s.actions) || s.actions.length < 1 || s.actions.length > 3) errors.push(`${w}.actions: 1 bis 3 erwartet`);
    else step.actions = s.actions.map((a, j) => plain(a, LIMITS.action, `${w}.actions[${j}]`, errors));
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
    else out.punchline = raw.punchline.map((l, i) => plain(l, LIMITS.punchline, `${where}.punchline[${i}]`, errors));
  }
  if (lang === "de") {
    const texts = [out.title, out.subtitle, ...out.steps.flatMap((s) => [s.title, s.productLabel, ...(s.actions || [])]), ...(out.punchline || [])].filter(Boolean);
    const hit = texts.find((t) => ENGLISH_IN_DE.test(withoutQuoted(t)));
    if (hit) errors.push(`${where}: englisches Wort im deutschen Text (${hit})`);
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
    alt[lang] = plain(raw.alt?.[lang], LIMITS.alt, `alt.${lang}`, errors);
  }
  if (langs.length === 2 && video.en?.steps && video.de?.steps) {
    const sig = (v) => v.steps.map((s) => `${s.product}/${s.icon}`).join("|");
    if (sig(video.en) !== sig(video.de)) errors.push("en und de unterscheiden sich in Schrittzahl, Produkt oder Icon");
  }
  if (errors.length) return { gif: false, reason: `Antwort verworfen: ${reason}`, errors };
  return { gif: true, reason, errors: [], alt, video };
}

/** Video-JSON fuer Remotion: Belege entfernen, Marken-Abschluss und Zeitplan automatisch. */
export function toRemotionProps(video, { endUrl, endLine, qrUrl }) {
  const steps = video.steps.map(({ evidence, ...rest }) => rest);
  return { endCardSeconds: 2, scale: 1.18, kicker: "", title: video.title, subtitle: video.subtitle, steps, ...(video.punchline ? { punchline: video.punchline } : {}), endUrl, endLine, ...(qrUrl ? { qrUrl } : {}) };
}
