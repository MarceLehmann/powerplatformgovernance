// Entscheidungsschritt: soll zu diesem Beitrag ein animiertes Ablauf-GIF entstehen? Wenn ja, liefert die KI die Video-JSON.
// Das GIF ist eine Beilage. Es darf nichts enthalten, was nicht im Beitragstext steht (Beleg-Pflicht, siehe validate.mjs).

export const PRODUCT_LIST = ["outlook", "sharepoint", "planner", "teams", "copilotstudio", "powerapps", "powerautomate", "dataverse", "powerbi", "fabric", "admin", "generic"];
export const ICON_LIST = ["mail", "clip", "file", "planner", "gear", "bolt", "db", "chat", "shield", "user", "play", "doc", "link", "phone", "bell", "calendar", "code", "table", "search", "cloud", "key", "check", "arrow", "filter", "mic"];

// Einzige Quelle fuer Laengenlimits und Icon-Aliase: validate.mjs prueft dagegen, der Prompt wird daraus erzeugt.
// Layout-Pruefung (src/Tip.tsx): Zeilen umbrechen, Schritt-Spalte 920 bis 930 px; Schritttitel (33 px) bis 42 Zeichen und Chips (21 px) bis 30 Zeichen passen,
// Untertitel und Punchline brechen ohnehin um. Der alt-Text wird nicht gerendert.
export const LIMITS = { title: 52, subtitle: 120, productLabel: 24, stepTitle: 42, action: 30, punchline: 30, alt: 250, evidence: 160 };
export const ICON_ALIASES = {
  tool: "gear", tools: "gear", wrench: "gear", settings: "gear", setting: "gear", config: "gear", cog: "gear",
  flag: "bell", notification: "bell", alert: "bell", camera: "doc", image: "doc", screenshot: "doc", report: "doc", edit: "doc",
  flow: "arrow", next: "arrow", route: "arrow", pipeline: "arrow", trigger: "bolt", lightning: "bolt", automation: "bolt",
  lock: "key", secret: "key", password: "key", folder: "file", document: "file", files: "file", upload: "cloud", download: "cloud",
  email: "mail", envelope: "mail", database: "db", data: "db", storage: "db", message: "chat", comment: "chat", people: "user", person: "user", team: "user",
  run: "play", start: "play", list: "table", grid: "table", security: "shield", protect: "shield", event: "calendar", date: "calendar",
  approval: "check", approve: "check", done: "check", find: "search", magnifier: "search", script: "code", terminal: "code", attachment: "clip", url: "link",
};

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
- title: the task or problem as a short phrase (max ${LIMITS.title} characters). subtitle: one sentence (max ${LIMITS.subtitle} characters).
- steps: 3 to 5 objects with product (one of ${PRODUCT_LIST.join(", ")}; use "generic" plus productLabel for anything else, max ${LIMITS.productLabel} characters), icon (one of ${ICON_LIST.join(", ")}), title (max ${LIMITS.stepTitle} characters, what happens in this stage), actions (1 to 3 short chips, max ${LIMITS.action} characters each, real names of actions, settings, commands or tools that appear in the post), evidence (an exact, contiguous quote of at most ${LIMITS.evidence} characters copied from the English post text that supports this step; copy it character by character from the text I give you).
- punchline: optional, only if the post states a clear result. Array of 1 or 2 lines, max ${LIMITS.punchline} characters each.
- Texts are plain text. No emojis, no dashes used as punctuation (no em dash, no en dash), no marketing words, no exclamation marks. German texts use Swiss spelling: "ss" instead of "ß". Keep product names, tool names, commands and identifiers (Power Apps, Dataverse, Copilot Studio, JQL, pac, OpenAI) unchanged in both languages. Everything else in the German object must be German, including the action chips, the productLabel and the punchline: translate descriptive phrases and UI paths (for example "Add and configure" becomes "Hinzufügen und konfigurieren", "View all" becomes "Alle anzeigen"). Never leave English phrases in German text. Exception: the original English name of a user interface element may stay in the German text if it is written in double quotes, for example \"Add Trigger\" (Microsoft interfaces are often English); everything outside the quotes must be German.
- LIMITS ARE HARD: count characters and shorten before answering; an answer with any text over its limit is rejected. Use only these icon names, never others (tool, flag, camera, flow do not exist): ${ICON_LIST.join(", ")}.
- alt: one factual sentence per language (max ${LIMITS.alt} characters) that describes the sequence for a screen reader.
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

/** Prompt fuer die einmalige Reparaturrunde: urspruengliche Antwort plus Fehlerliste. */
export function buildRepairPrompt(candidate, raw, errors) {
  return [
    buildUserPrompt(candidate), "",
    "YOUR PREVIOUS ANSWER (decision gif: true) was rejected by the validator:", JSON.stringify(raw), "",
    "ERRORS:", ...errors.map((e) => `- ${e}`), "",
    "Return the complete corrected JSON object. Fix ONLY these errors and keep everything else unchanged:",
    "- too long: shorten the text to the limit (keep the meaning, drop filler words),",
    `- unknown icon: choose one of: ${ICON_LIST.join(", ")},`,
    "- English words in a German text: translate them to German, or keep the original UI name unchanged inside double quotes,",
    "- evidence not verbatim: copy an exact, contiguous quote from the English post text,",
    "- en and de must keep the same number of steps, products and icons.",
    "Do not add new content. If the errors cannot be fixed without inventing content, answer with gif false and a reason.",
  ].join("\n");
}
