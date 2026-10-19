// Entscheidungsschritt: soll zu diesem Beitrag ein animiertes Ablauf-GIF entstehen? Wenn ja, liefert die KI die Video-JSON.
// Das GIF ist eine Beilage. Es darf nichts enthalten, was nicht im Beitragstext steht (Beleg-Pflicht, siehe validate.mjs).

export const PRODUCT_LIST = ["outlook", "sharepoint", "planner", "teams", "copilotstudio", "powerapps", "powerautomate", "dataverse", "powerbi", "fabric", "admin", "generic"];
export const ICON_LIST = ["mail", "clip", "file", "planner", "gear", "bolt", "db", "chat", "shield", "user", "play", "doc", "link", "phone", "bell", "calendar", "code", "table", "search", "cloud", "key", "check", "arrow", "filter", "mic"];

export const SYSTEM_PROMPT = `You decide whether a short animated GIF (a step-by-step flow diagram) adds value to a blog post, and if yes you write its content.
The blog summarises Power Platform and Microsoft 365 articles. A GIF is an optional extra above the TL;DR. It is never a screenshot and never invents anything.

DECIDE "gif": true ONLY IF the post text itself states a concrete sequence of 3 to 5 distinct stages, for example:
- a setup or build path (do A, then B, then C),
- a settings path (menu, then page, then option),
- a before/after change that can be told in 3 to 5 stages,
- an automation pipeline (trigger, read, transform, post/store).
DECIDE "gif": false when:
- the post is news: release, preview, general availability, roadmap, announcement, licensing, pricing, event, opinion, comparison or a list of features without an order,
- it is a concept, definition, best-practice list or governance advice without a procedure,
- it is one single setting, one formula or one command,
- the stages would have to be guessed or invented because the text does not name them,
- it needs more than 5 stages to be correct.
When in doubt: false. Expect fewer than one in four posts to qualify.

If true, produce video content for BOTH languages (en and de) when a German post text is given (otherwise only en), with the same number of steps, the same icons and the same products in the same order:
- title: the task or problem as a short phrase (max 52 characters). subtitle: one sentence (max 110 characters).
- steps: 3 to 5 objects with product (one of ${PRODUCT_LIST.join(", ")}; use "generic" plus productLabel for anything else, max 22 characters), icon (one of ${ICON_LIST.join(", ")}), title (max 38 characters, what happens in this stage), actions (1 to 3 short chips, max 26 characters each, real names of actions, settings, commands or tools that appear in the post), evidence (an exact, contiguous quote of at most 160 characters copied from the English post text that supports this step; copy it character by character from the text I give you).
- punchline: optional, only if the post states a clear result. Array of 1 or 2 lines, max 26 characters each.
- Texts are plain text. No emojis, no dashes used as punctuation (no em dash, no en dash), no marketing words, no exclamation marks. German texts use Swiss spelling: "ss" instead of "ß". Keep product names, tool names, commands and identifiers (Power Apps, Dataverse, Copilot Studio, JQL, pac, OpenAI) unchanged in both languages. Everything else in the German object must be German, including the action chips, the productLabel and the punchline: translate descriptive phrases and UI paths (for example "Add and configure" becomes "Hinzufügen und konfigurieren", "View all" becomes "Alle anzeigen"). Never leave English phrases in German text.
- alt: one factual sentence per language (max 200 characters) that describes the sequence for a screen reader.
Do not add steps, tools, numbers, limits or claims that are not in the post text. Do not mention licences or prices unless the post does.

Answer with one JSON object and nothing else.
No GIF: {"gif": false, "reason": "<one sentence>"}
GIF: {"gif": true, "reason": "<one sentence>", "alt": {"en": "...", "de": "..."}, "video": {"en": {"title": "...", "subtitle": "...", "steps": [{"product": "...", "productLabel": "...", "icon": "...", "title": "...", "actions": ["..."], "evidence": "..."}], "punchline": ["..."]}, "de": {same structure, evidence stays the English quote}}}`;

/** Baut den Benutzer-Prompt aus dem Beitrag (en und de) bzw. einem Seitenabschnitt (nur en). */
export function buildUserPrompt(candidate) {
  const parts = [`Post key: ${candidate.key}`, `Tags: ${(candidate.tags || []).join(", ")}`, "", "ENGLISH POST TEXT (quote evidence from this text only):", candidate.text.en];
  if (candidate.text.de) parts.push("", "GERMAN POST TEXT (for terminology):", candidate.text.de);
  else parts.push("", "This page exists in English only: return only the en object and the en alt text, omit de.");
  return parts.join("\n");
}
