# Auto-GIF

Entscheidet per KI, ob zu einem neuen Beitrag ein animiertes Ablauf-GIF Sinn macht (sichtbarer Ablauf mit 3 bis 5 Schritten, Einstellungsweg, Pipeline), rendert es mit Remotion und traegt es im Front Matter ein (`animation:`). Das GIF ist eine Beilage oberhalb der Zusammenfassung, nie ein Screenshot.

| Datei | Aufgabe |
|---|---|
| `prompt.mjs` | Kriterien und Ausgabeformat fuer die KI |
| `validate.mjs` | strenge Pruefung der KI-Antwort, Belege muessen woertlich im Beitragstext stehen |
| `llm.mjs` | Azure AI Foundry (Standard) oder Anthropic, Schluessel nur aus Umgebungsvariablen |
| `run.mjs` | Kandidaten finden, entscheiden, rendern, Front Matter schreiben, `ledger.json` fuehren |
| `render-gif.mjs`, `src/`, `public/` | Remotion-Vorlage (Blog-GIF 16:9, MP4 4:5) |
| `social.mjs`, `social.json` | nur Governance: LinkedIn-Beilage ueber Buffer (Standard Trockenlauf) |
| `animation.test.mjs` | Tests ohne KI-Aufruf und ohne Rendern |

Workflow: `.github/workflows/auto-gif.yml` (nach "Publish Curated Articles", taeglicher Nachlauf, manuell mit `dry_run` und `decisions_file`).
Lokal: `cd tools/animation && npm install && node --test animation.test.mjs`, dann `node run.mjs --root ../.. --site-url <domain> --dry-run` (braucht `AZURE_FOUNDRY_ENDPOINT` und `AZURE_FOUNDRY_API_KEY`) oder mit `--decisions <datei.json>` ohne KI.
Doku fuer Betrieb und Livegang: `OUTPUT/2026-10-19_Auto-GIF_Daily_Governance.md` im Arbeitsordner von Marcel.
