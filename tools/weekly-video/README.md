# Wochenvideo (Deutsch und Englisch)

Ein Video je Woche und Sprache: die Top 5 der Woche (Anzahl: `topCount` in `site.json`, Marcel entscheidet zwischen 5 und 10: dann `topCount` 10 setzen, `maxCharsPerVideo` 1200, `tldrSentence` false; gibt es weniger Beiträge, entsprechend weniger, mindestens 3), gesprochen mit Marcels Profi-Stimme Marcel_PRO (ElevenLabs), mit Untertiteln, Quellenangabe, QR-Code und dem Hinweis "KI-Stimme". Es entstehen 9:16 (YouTube Short, höchstens 59,5 Sekunden bei 5 Punkten (`shortMaxSec`), 88 bei mehr (`shortMaxSecTop10`), YouTube erlaubt bis 3 Minuten, geplant über Buffer), auf Wunsch zusätzlich 16:9 und 4:5.

Status: Die Automatik (`.github/workflows/weekly-video.yml`) läuft jeden Sonntag 08:00 UTC und plant die beiden Shorts (DE, EN) bei Buffer ein. Slots in `publish.json` (Europe/Zurich): Daily Sonntag 18:00, Governance Montag 07:00. DE geht auf den Kanal "Marcel Lehmann", EN auf "PowerPlatformTip".

## Ablauf
1. **Auswahl** (`lib.mjs`, `selectPosts`): kuratierte Beiträge (`content_type: curated_summary`), die in der Woche (Montag bis Sonntag) erschienen sind und in Deutsch und Englisch vorliegen.
2. **Sprechtext** (`buildScript`): je Beitrag drei Teile: Titel, ein Relevanz-Satz «Relevant für Admins» (`relevanceSentence`, aus dem Abschnitt «Warum das wichtig ist» bzw. «Bedeutung für Governance» des Beitrags: Punkt für Admins, sonst Leadership, Makers; bei Länge der Teil vor «weil»; höchstens 115 Zeichen, nichts erfunden) und Quellenname. Der Relevanz-Satz steht auch als Einblendung im Video. Optional erster TL;DR-Satz (`tldrSentence`, aus). Quellen mit nicht-lateinischem Namen werden mit der Domain genannt, `ß` wird `ss`.
3. **Ton** (`speak`): ElevenLabs `with-timestamps`, Stimme Marcel_PRO (`voiceId` in `site.json`, yuotdYn2QZ7nWTzLl3Tj), Modell `eleven_flash_v2_5` (Marcel 06.11.2026: immer diese Stimme und dieses Modell; beides nur in `site.json`). Die Zeichen-Zeitstempel liefern Szenenwechsel und Untertitel, es braucht kein Whisper. Gleicher Text und gleiche Stimme kommen aus dem Cache (`out/_audio-cache`), ein erneuter Render kostet keine Zeichen.
4. **Video** (`run.mjs`, `src/Week.tsx`, Remotion): Intro, Beitragsszenen (bis zu 10), Schlussbild mit QR. Untertitel Wort für Wort, Badge "KI-Stimme" in jeder Szene.
5. **Short 9:16** (`planShort`, `buildShortAudio`): gleiche Tonspur wie das lange Video, kein neuer ElevenLabs-Aufruf. Damit sie in die Höchstdauer passt: zweiten Einleitungssatz weglassen, Pausen auf 0,2 s kürzen, Tempo bis 1,12, sonst die letzten Beiträge weglassen (mindestens 3). Wortzeiten werden mitgerechnet, Untertitel und Szenen stimmen. Layout mit Abstand zu Rand und YouTube-Oberfläche.
6. **Plan bei Buffer** (`publish.mjs`): Video per GitHub-API nach `linkedin-assets/wochenvideo/<site>/<Jahr>-W<KW>/` (Pages-URL, Buffer holt von dort), Post mit festem Slot, `isAiGenerated: true`, Kanal per Name gefunden. Gleicher Titel schon in Buffer: übersprungen.
7. **Texte**: `_short_youtube.md` und `_youtube.md` (Titel mit Suchbegriffen, Beschreibung mit Kapiteln und Quellen, Hinweis auf synthetische Stimme), `_linkedin.md` (Posttext mit persönlichem Satz von Marcel, Links im ersten Kommentar), `.srt`, `_sprechtext.txt`, `auswahl.md`, `manifest.json`.

## Auswahlkriterien (formal, keine inhaltliche Wertung)
Je Beitrag ein Wert aus:
- Thema: Summe der Gewichte seiner Tags aus `site.json` (`tagWeights`), gedeckelt auf `tagCap` (Daily 4, Governance 6).
- Animation vorhanden: +2 (der Beitrag hat Bildmaterial).
- Quelle aktuell: +2, wenn die Quelle in den 14 Tagen vor Wochenende erschienen oder aktualisiert wurde.
- Top-Ranking: +2, wenn der Beitrag in `tools/audio/top-articles.json` steht (GoatCounter plus Search Console).

Dann wird gierig gewählt: beste Wertung zuerst, danach Vielfalt (gleiche Quelle: -2 je bereits gewähltem Beitrag, gleiches Hauptthema: -1). Bei Gleichstand gewinnt der neuere Beitrag. Höchstens `topCount` (10), mindestens 3, sonst kein Video. Angezeigt wird chronologisch, nicht als Rangliste.

## Zeichenbudget
Ziel: rund 5'200 Zeichen pro Woche für alle vier Videos. Je Video höchstens `maxCharsPerVideo` (1'400): zu lange TL;DR-Sätze werden gestrichen, bis es passt (erst die längsten). Der Lauf bricht ab, wenn `--budget` (Standard 2'800 je Seite) überschritten wäre. Der API-Key liest keine Kontostände (`user_read` fehlt), das Budget führt deshalb dieses Skript: `manifest.json` nennt die verbrauchten Zeichen.

## Betrieb
```
cd tools/weekly-video && npm install && node --test
node run.mjs --week 2026-W45 --dry-run            # Auswahl und Texte prüfen, kein Verbrauch
node run.mjs --week 2026-W45 --formats 9x16       # erzeugen (ELEVENLABS_API_KEY als Umgebungsvariable)
node publish.mjs --dir out/2026-W45               # Trockenlauf: Kanal, Titel, Slot
node publish.mjs --dir out/2026-W45 --apply       # bei Buffer einplanen (BUFFER_API_KEY_PPTIP, GH_TOKEN)
```
Keys stehen nie in Dateien. Der Ordner `out/` ist nicht im Git.

## Secrets der Action (Repo, Settings, Secrets and variables, Actions)
- `ELEVENLABS_API_KEY`: Stimme.
- `BUFFER_API_KEY_PPTIP`: Buffer-Konto mit den drei YouTube-Kanälen. `BUFFER_API_KEY_KMUPOWER` wird nicht gebraucht (dort hängt nur LinkedIn).
- `LINKEDIN_ASSETS_TOKEN`: fine-grained Token, Zugriff nur auf `MarceLehmann/linkedin-assets`, Berechtigung Contents: Read and write. Buffer nimmt nur öffentliche URLs, ein Release im privaten Repo geht nicht (getestet).
- Hinweis: Jede Woche kommen rund 15 MB in `linkedin-assets` dazu (vier Shorts). Bei Bedarf alte `wochenvideo/`-Ordner löschen.

## YouTube
- Titel enthält Suchbegriffe (Themen der Woche), höchstens 100 Zeichen.
- Studio: "Veränderte oder synthetische Inhalte" = Ja (geklonte Stimme eines echten Menschen). Über Buffer setzt `isAiGenerated: true` dasselbe.
- Die Beschreibung nennt jede Quelle mit Link und sagt, dass Stimme und Untertitel KI-generiert sind.
- Buffer nimmt nur Shorts (9:16). Darum geht nur die 9:16-Fassung automatisch auf YouTube.

## Messung (4 Wochen)
Aufrufe, Wiedergabedauer und Klicks aus der Beschreibung (YouTube); Impressions, Kommentare und Klicks (LinkedIn-Seite); Klicks aus dem QR/UTM `utm_source=wochenvideo` (GoatCounter). Entscheid nach vier Wochen laut `konzept.md`.
