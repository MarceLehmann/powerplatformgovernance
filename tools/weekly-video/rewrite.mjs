// Relevanz-Saetze vor dem Vertonen umschreiben (ein LLM-Schritt, mit zwingendem Rueckfall auf den Originalsatz).
// Quellen der Saetze sind oeffentliche News-Zusammenfassungen, keine Kundendaten.
// Anbieter (Reihenfolge):
//   1. Azure AI Foundry per az-Token (nur lokal): REWRITE_FOUNDRY_ENDPOINT (+ optional REWRITE_FOUNDRY_SUBSCRIPTION), nie mit Schluessel
//   2. GitHub Models mit GITHUB_TOKEN (GitHub Action: Workflow-Permission "models: read", kein neues Secret)
// REWRITE_DISABLE=1 schaltet den Schritt aus, dann bleibt der Originalsatz.
import { spawnSync } from 'node:child_process';

export const GH_MODELS_URL = 'https://models.github.ai/inference/chat/completions';
export const GH_MODEL = 'openai/gpt-4.1-mini';
export const MAX_WORDS = 24; // ca. 18 Woerter Inhalt plus Einleitung "Fuer dich heisst das:"
export const LEAD = { de: 'Für dich heisst das:', en: 'For you, that means:' };

// Pruefregeln: gueltig ist nur ein einzelner, kurzer Satz in Du-Form ohne Gedankenstrich und ohne ß.
export function validateRewrite(text, lang, maxWords = MAX_WORDS) {
  if (typeof text !== 'string') return 'kein Text';
  const t = text.trim();
  if (!t) return 'leer';
  if (/[\r\n]/.test(t)) return 'Zeilenumbruch';
  if (/ß/.test(t)) return 'enthaelt ß';
  if (/[–—―]|\s-\s|\s--\s/.test(t)) return 'Gedankenstrich';
  if (/[*_`#]|https?:\/\//.test(t)) return 'Markdown oder Link';
  if (lang === 'de' && /(^|[^\p{L}])(Sie|Ihnen|Ihre[mnrs]?|Ihr)(?![\p{L}])/u.test(t)) return 'Sie-Form';
  if (lang === 'en' && /\b(one should|we recommend)\b/i.test(t)) return 'Anweisungston';
  if (lang === 'de' && /(fuer|Fuer|ueber|Ueber|koennen|moeglich|pruefen|Pruefung|Loesung)/.test(t)) return 'Umlaut als ae/oe/ue';
  if ((t.match(/[.!?](\s|$)/g) || []).length > 1) return 'mehr als ein Satz';
  const words = t.split(/\s+/).length;
  if (words > maxWords) return `zu lang (${words} Woerter)`;
  if (words < 4) return 'zu kurz';
  return null;
}

function prompt(items, lang) {
  const rules = lang === 'de'
    ? `Schreibe zu jedem Beitrag EINEN Relevanz-Satz auf Deutsch (Schweizer Schreibweise: "ss" statt "ß"). Regeln: Du-Form, nie "Sie". Beginne mit "${LEAD.de}" und sage dann in höchstens 18 Wörtern, was das für KMU, Admins oder Maker bedeutet. Sachlich, ohne Hype, keine Gedankenstriche (Bindestriche in Wörtern wie Power-Automate-Flow bleiben), echte Umlaute (ä, ö, ü), nie ae/oe/ue. Keine Aufforderung und keine Pflicht: Beschreibe die Folge oder den Nutzen (z. B. "Du kannst ...", "Bei dir ändert sich ..."), vermeide "du musst" und "du solltest". Nach dem Doppelpunkt beginnt der Satz mit grossem Anfangsbuchstaben. Verwende nur Fakten aus dem Titel und dem Originalsatz, erfinde nichts dazu. Genau ein Satz, Punkt am Ende.`
    : `Write ONE relevance sentence in English for each post. Rules: speak to the reader as "you". Start with "${LEAD.en}" and then say in at most 18 words what this means for SMEs, admins or makers. Factual, no hype, no dashes (hyphens inside words like Power-Automate-Flow are fine), no imperative instructions (turn "Place the gallery ..." into a statement). Use only facts from the title and the original sentence, add nothing new. Exactly one sentence, ending with a period.`;
  const list = items.map((x, i) => `${i + 1}. Titel: ${x.title}\n   Originalsatz: ${x.why}`).join('\n');
  return `${rules}\n\nAntworte nur mit einem JSON-Array von Strings, ein String je Beitrag, gleiche Reihenfolge, ohne weiteren Text.\n\n${list}`;
}

function azToken(subscription) {
  const args = ['account', 'get-access-token', '--resource', 'https://cognitiveservices.azure.com', '--query', 'accessToken', '-o', 'tsv'];
  if (subscription) args.push("--subscription", process.platform === "win32" ? `"${subscription}"` : subscription);
  const r = spawnSync('az', args, { encoding: 'utf8', shell: process.platform === 'win32' });
  if (r.status !== 0 || !r.stdout.trim()) throw new Error('az-Token nicht verfuegbar');
  return r.stdout.trim();
}

// Liefert { name, url, headers, body } je nach Anbieter oder null, wenn keiner konfiguriert ist
export function providerRequest(messages, env = process.env, getToken = azToken) {
  if (env.REWRITE_DISABLE === '1') return null;
  if (env.REWRITE_FOUNDRY_ENDPOINT) {
    const tok = getToken(env.REWRITE_FOUNDRY_SUBSCRIPTION);
    return { name: 'foundry', url: env.REWRITE_FOUNDRY_ENDPOINT, headers: { Authorization: `Bearer ${tok}`, 'Content-Type': 'application/json' }, body: { messages, max_completion_tokens: 1200 } };
  }
  const gh = env.GITHUB_MODELS_TOKEN || env.GITHUB_TOKEN;
  if (gh) return { name: 'github-models', url: GH_MODELS_URL, headers: { Authorization: `Bearer ${gh}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' }, body: { model: env.REWRITE_MODEL || GH_MODEL, messages, temperature: 0.3, max_tokens: 1200 } };
  return null;
}

export function parseArray(content) {
  const m = /\[[\s\S]*\]/.exec(String(content || ''));
  if (!m) throw new Error('keine JSON-Liste in der Antwort');
  const a = JSON.parse(m[0]);
  if (!Array.isArray(a)) throw new Error('keine Liste');
  return a;
}

// items: [{ id, title, why }] (why = Originalsatz). Rueckgabe: Map id -> umgeschriebener Satz (nur gueltige). Wirft nie.
export async function rewriteRelevance({ items, lang, env = process.env, fetchFn = globalThis.fetch, log = console.warn, getToken }) {
  const out = new Map();
  const todo = items.filter(x => x.why);
  if (!todo.length) return out;
  try {
    const req = providerRequest([{ role: 'user', content: prompt(todo, lang) }], env, getToken);
    if (!req) { log(`[rewrite ${lang}] kein LLM konfiguriert, Originalsaetze bleiben`); return out; }
    const r = await fetchFn(req.url, { method: 'POST', headers: req.headers, body: JSON.stringify(req.body), signal: AbortSignal.timeout(60000) });
    if (!r.ok) throw new Error(`${req.name} HTTP ${r.status}: ${(await r.text()).slice(0, 160)}`);
    const j = await r.json();
    const arr = parseArray(j.choices?.[0]?.message?.content);
    todo.forEach((x, i) => {
      const t = typeof arr[i] === 'string' ? arr[i].trim() : arr[i];
      const bad = arr.length === todo.length ? validateRewrite(t, lang) : 'Anzahl passt nicht';
      if (bad) log(`[rewrite ${lang}] Beitrag ${i + 1} verworfen (${bad}), Originalsatz bleibt`);
      else out.set(x.id, t.replace(/[.!?]+$/, ''));
    });
    console.log(`[rewrite ${lang}] ${out.size} von ${todo.length} Saetzen umgeschrieben (${req.name})`);
  } catch (e) {
    log(`[rewrite ${lang}] Fehler, Originalsaetze bleiben: ${e.message}`);
  }
  return out;
}
