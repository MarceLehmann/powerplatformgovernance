// Duenner LLM-Client. Standard: Azure AI Foundry / Azure OpenAI (gleiche Ressource wie die Kuratierung, Modell "model-router").
// Secrets kommen nur aus Umgebungsvariablen (GitHub-Secrets), nie aus dem Code und nie ins Log.
//   azure     (Standard): AZURE_FOUNDRY_ENDPOINT, AZURE_FOUNDRY_API_KEY, optional AZURE_FOUNDRY_DEPLOYMENT (Standard model-router)
//   anthropic (Alternative): ANTHROPIC_API_KEY und AUTOGIF_MODEL
// Die Antwort wird als JSON geparst; bei Fehlern gibt es einen zweiten Versuch, danach eine Ausnahme.

async function post(url, headers, body) {
  const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`LLM HTTP ${res.status}`); // Antworttext bewusst nicht ausgeben
  return res.json();
}

function extractJson(text) {
  const t = String(text).trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start < 0 || end < start) throw new Error("Keine JSON-Antwort");
  return JSON.parse(t.slice(start, end + 1));
}

export async function askJson(system, user, env = process.env) {
  const provider = (env.AUTOGIF_PROVIDER || "azure").toLowerCase();
  let call;
  if (provider === "azure") {
    const endpoint = env.AZURE_FOUNDRY_ENDPOINT?.replace(/\/+$/, "");
    const key = env.AZURE_FOUNDRY_API_KEY;
    if (!endpoint || !key) throw new Error("AZURE_FOUNDRY_ENDPOINT und AZURE_FOUNDRY_API_KEY fehlen");
    const deployment = env.AZURE_FOUNDRY_DEPLOYMENT || "model-router";
    call = async () => {
      const data = await post(`${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=2024-10-21`, { "api-key": key }, {
        messages: [{ role: "system", content: system }, { role: "user", content: user }],
        response_format: { type: "json_object" }, temperature: 0.2, max_tokens: 2500,
      });
      return data.choices?.[0]?.message?.content;
    };
  } else if (provider === "anthropic") {
    if (!env.ANTHROPIC_API_KEY || !env.AUTOGIF_MODEL) throw new Error("ANTHROPIC_API_KEY und AUTOGIF_MODEL fehlen");
    call = async () => {
      const data = await post("https://api.anthropic.com/v1/messages", { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" }, {
        model: env.AUTOGIF_MODEL, max_tokens: 2500, temperature: 0.2, system, messages: [{ role: "user", content: user }],
      });
      return data.content?.map((c) => c.text).join("");
    };
  } else throw new Error(`Unbekannter AUTOGIF_PROVIDER: ${provider}`);

  let lastError;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try { return extractJson(await call()); } catch (e) { lastError = e; }
  }
  throw lastError;
}
