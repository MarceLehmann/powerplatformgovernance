# Ton an: Kurzfassung als Tonspur (nur Deutsch)

Jeder deutsche Beitrag mit Tonspur zeigt den Knopf "Ton an" (`_includes/audio-button.html`, eingebunden in `_layouts/post.html`).
Browser blockieren Autoplay mit Ton, deshalb startet der Ton erst nach Klick. Die stumme Animation (falls vorhanden) startet dabei von vorn.
Die Tonspur ist eine eigene MP3-Datei (`assets/audio/<curation_id>-de.mp3`), nicht im MP4 gemischt: Die Animationen sind kurze Schleifen (rund 10 s), die Kurzfassung dauert 20 bis 30 s, und nicht jeder Beitrag hat eine Animation.

## Text
`make-audio.mjs` nimmt nur vorhandenen Text: Titel, TL;DR (Fallback: description), "Quelle: <Quellname>". Es wird nichts umformuliert, bewertet oder ergaenzt (kuratierte Inhalte bleiben unveraendert). Laenge hoechstens 420 Zeichen, nur ganze Saetze.

## Auswahl
- Neue Beitraege: `--since YYYY-MM-DD` (Erstlauf 2026-10-29, also die letzten 7 Tage).
- Top 20: `--top tools/audio/top-articles.json` (Rangliste, nur `/de/posts/`).
- Methode Rangliste: GoatCounter-Aufrufe (API `/stats/hits`, ab 2026-08-01, `top-articles.mjs`, Token aus `GOATCOUNTER_API_TOKEN`) plus Google-Search-Console-Klicks (90 Tage, Dimension page), bei Gleichstand nach GSC-Impressionen. Stand 2026-11-05. Die Datenbasis ist duenn (wenige Aufrufe je Beitrag), die Rangfolge ist ein Anhaltspunkt, keine Statistik.

## Betrieb
```
node tools/audio/make-audio.mjs --since 2026-11-06 --dry-run   # Texte und Zeichen pruefen
node tools/audio/make-audio.mjs --since 2026-11-06             # erzeugen
```
Key `ELEVENLABS_API_KEY` als Umgebungsvariable (nie in Dateien), Stimme `ELEVENLABS_VOICE_ID` (Default: Marcels geklonte Stimme). Bereits vorhandene Tonspuren werden uebersprungen (`--force` erzeugt neu). Zeichenbudget pro Lauf 30'000 (`--budget`). Danach `_data/audio.yml` und `assets/audio/` committen.
