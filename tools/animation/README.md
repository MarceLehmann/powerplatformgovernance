# Auto-GIF

Entscheidet per KI, ob zu einem neuen Beitrag ein animiertes Ablauf-GIF Sinn macht (sichtbarer Ablauf mit 3 bis 5 Schritten, Einstellungsweg, Pipeline), rendert es mit Remotion und traegt es im Front Matter ein (`animation:`). Das GIF ist eine Beilage oberhalb der Zusammenfassung, nie ein Screenshot.

| Datei | Aufgabe |
|---|---|
| `prompt.mjs` | Kriterien und Ausgabeformat fuer die KI |
| `validate.mjs` | strenge Pruefung der KI-Antwort, Belege muessen woertlich im Beitragstext stehen |
| `llm.mjs` | Azure AI Foundry (Standard) oder Anthropic, Schluessel nur aus Umgebungsvariablen |
| `run.mjs` | Kandidaten finden, entscheiden, rendern, Front Matter schreiben, `ledger.json` fuehren |
| `render-gif.mjs`, `src/`, `public/` | Remotion-Vorlage (Blog-GIF 16:9, MP4 4:5) |
| `social.mjs`, `social.json`, `social.test.mjs` | nur Governance: alle neuen Beitraege (Video vor Bild, hoechstens 3 pro Tag in Europe/Zurich) ueber Buffer nach LinkedIn, Zustand je Beitrag in `social.json` (Standard Trockenlauf; BUFFER_SEND, BUFFER_MODE, BUFFER_SLOTS, BUFFER_DAILY_CAP) |
| `animation.test.mjs` | Tests ohne KI-Aufruf und ohne Rendern |

Workflow: `.github/workflows/auto-gif.yml` (nach "Publish Curated Articles", taeglicher Nachlauf, manuell mit `dry_run` und `decisions_file`).
Lokal: `cd tools/animation && npm install && node --test`, dann `node run.mjs --root ../.. --site-url <domain> --dry-run` (braucht `AZURE_FOUNDRY_ENDPOINT` und `AZURE_FOUNDRY_API_KEY`) oder mit `--decisions <datei.json>` ohne KI.
Doku fuer Betrieb und Livegang: `OUTPUT/2026-10-19_Auto-GIF_Daily_Governance.md` im Arbeitsordner von Marcel.

KI-Modell: Standard ist das Azure-Deployment `gpt-54-ab` (gpt-5.4, Repo-Variable `AZURE_FOUNDRY_DEPLOYMENT`). gpt-5.x nimmt kein `temperature` und kein `max_tokens`, der Aufruf nutzt `max_completion_tokens` mit api-version `2025-04-01-preview`. `temperature` geht nur an ein Deployment `model-router`, das nicht mehr Standard ist (hat in Tests ein Fremdmodell gewaehlt).
Sprachen: pro Beitrag ein GIF je Sprachfassung (`-en.gif`, `-de.gif`). Im deutschen Video muss der gesamte Text deutsch sein (nur Produkt- und Befehlsnamen bleiben englisch), `validate.mjs` verwirft englische Woerter.

Robustheit: Limits (`LIMITS`) und Icon-Aliase (`ICON_ALIASES`, z. B. tool wird gear) stehen nur in `prompt.mjs`; Prompt und `validate.mjs` lesen daraus. Verwirft die Validierung eine Ja-Antwort, macht `decideWithRepair` (`run.mjs`) genau einen zweiten Modellaufruf mit Antwort und Fehlerliste. Original-UI-Namen in Anfuehrungszeichen ("Add Trigger") duerfen im deutschen Text englisch bleiben.
