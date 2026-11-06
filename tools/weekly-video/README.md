# Wochenvideo (Deutsch und Englisch)

Ein Video je Woche und Sprache: die fünf Beiträge der Woche, gesprochen mit Marcels geklonter ElevenLabs-Stimme, mit Untertiteln, Quellenangabe, QR-Code und dem Hinweis "KI-Stimme". Es entstehen 16:9 (YouTube) und 4:5 (LinkedIn-Seite).

Status: Die Automatik (`.github/workflows/weekly-video.yml`) ist AUS, nur manuell startbar. Nichts wird automatisch veröffentlicht, auch nicht in Buffer.

## Ablauf
1. **Auswahl** (`lib.mjs`, `selectPosts`): kuratierte Beiträge (`content_type: curated_summary`), die in der Woche (Montag bis Sonntag) erschienen sind und in Deutsch und Englisch vorliegen.
2. **Sprechtext** (`buildScript`): nur Titel, erster Satz der TL;DR (nur wenn er ins Zeichenbudget passt) und Quellenname. Nichts wird umformuliert, bewertet oder ergänzt (kuratierte Inhalte bleiben unverändert). Quellen mit nicht-lateinischem Namen werden mit der Domain genannt, `ß` wird `ss`.
3. **Ton** (`speak`): ElevenLabs `with-timestamps`, Stimme `3wglDJufK4dcFGrgeITn`, Modell `eleven_multilingual_v2`. Die Zeichen-Zeitstempel liefern Szenenwechsel und Untertitel, es braucht kein Whisper. Gleicher Text und gleiche Stimme kommen aus dem Cache (`out/_audio-cache`), ein erneuter Render kostet keine Zeichen.
4. **Video** (`run.mjs`, `src/Week.tsx`, Remotion): Intro, fünf Beitragsszenen, Schlussbild mit QR. Untertitel Wort für Wort, Badge "KI-Stimme" in jeder Szene.
5. **Texte**: `_youtube.md` (Titel mit Suchbegriffen, Beschreibung mit Kapiteln und Quellen, Hinweis auf synthetische Stimme), `_linkedin.md` (Posttext mit persönlichem Satz von Marcel, Links im ersten Kommentar), `.srt`, `_sprechtext.txt`, `auswahl.md`, `manifest.json`.

## Auswahlkriterien (formal, keine inhaltliche Wertung)
Je Beitrag ein Wert aus:
- Thema: Summe der Gewichte seiner Tags aus `site.json` (`tagWeights`), gedeckelt auf `tagCap` (Daily 4, Governance 6).
- Animation vorhanden: +2 (der Beitrag hat Bildmaterial).
- Quelle aktuell: +2, wenn die Quelle in den 14 Tagen vor Wochenende erschienen oder aktualisiert wurde.
- Top-Ranking: +2, wenn der Beitrag in `tools/audio/top-articles.json` steht (GoatCounter plus Search Console).

Dann wird gierig gewählt: beste Wertung zuerst, danach Vielfalt (gleiche Quelle: -2 je bereits gewähltem Beitrag, gleiches Hauptthema: -1). Bei Gleichstand gewinnt der neuere Beitrag. Höchstens 5, mindestens 3, sonst kein Video. Angezeigt wird chronologisch, nicht als Rangliste.

## Zeichenbudget
Ziel: unter 4'000 Zeichen pro Woche für alle vier Videos. Je Video höchstens `maxCharsPerVideo` (1'000): zu lange TL;DR-Sätze werden gestrichen, bis es passt (erst die längsten). Der Lauf bricht ab, wenn `--budget` (Standard 2'000 je Seite) überschritten wäre. Der API-Key liest keine Kontostände (`user_read` fehlt), das Budget führt deshalb dieses Skript: `manifest.json` nennt die verbrauchten Zeichen.

## Betrieb
```
cd tools/weekly-video && npm install && node --test weekly-video.test.mjs
node run.mjs --week 2026-W45 --dry-run        # Auswahl und Texte prüfen, kein Verbrauch
node run.mjs --week 2026-W45                  # erzeugen (ELEVENLABS_API_KEY als Umgebungsvariable)
node buffer.mjs --dir out/2026-W45 --org <ID> # Buffer-Ideen, Trockenlauf; mit --apply anlegen
```
Der Key steht nie in Dateien. Der Ordner `out/` ist nicht im Git.

## Einschalten der Automatik (erst nach Marcels Freigabe des ersten Videos)
1. Repo-Secret `ELEVENLABS_API_KEY` setzen (für Buffer-Ideen zusätzlich Secret `BUFFER_API_KEY`, Variable `BUFFER_ORG_ID`).
2. In `weekly-video.yml` die zwei Zeilen unter `schedule` einkommentieren (Sonntag 17:00 UTC).
3. Der Lauf legt die Dateien als Download (Artifact, 14 Tage) ab. Veröffentlichung bleibt Handarbeit oder ein späterer, getrennter Schritt.

## YouTube
- Titel enthält Suchbegriffe (Themen der Woche), höchstens 100 Zeichen.
- Studio: "Veränderte oder synthetische Inhalte" = Ja (geklonte Stimme eines echten Menschen). Über Buffer setzt `isAiGenerated: true` dasselbe.
- Die Beschreibung nennt jede Quelle mit Link und sagt, dass Stimme und Untertitel KI-generiert sind.
- Buffer lehnte bisher 16:9-Uploads auf dem PowerPlatformTip-Kanal ab (nur Shorts). Vor dem ersten Upload prüfen, sonst im Studio hochladen.

## Messung (4 Wochen)
Aufrufe, Wiedergabedauer und Klicks aus der Beschreibung (YouTube); Impressions, Kommentare und Klicks (LinkedIn-Seite); Klicks aus dem QR/UTM `utm_source=wochenvideo` (GoatCounter). Entscheid nach vier Wochen laut `konzept.md`.
