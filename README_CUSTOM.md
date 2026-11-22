# Power Platform Governance

Dieses Repository ist die technische Basis für einen Governance-Blog rund um Microsoft Power Platform: Security, Standards, ALM, DLP, Environment-Strategy, Dataverse, Power Apps, Power Automate, Copilot Studio und Betriebspraxis.

Die Idee ist ein Blog, der nicht manuell gepflegt wird, sondern durch einen Power Automate-Flow mit RSS-Feeds aus einer Community-Liste von Websites automatisch aktualisiert wird. Neue Inhalte werden als Markdown-Artikel formatiert, in das Repository geschrieben und per GitHub veröffentlicht.

## Zielbild

- Chirpy-basierte Website mit Governance-Content
- Eingabeformular / Web-Formular für Websites mit RSS-Feed
- Power Automate läuft alle 5 Minuten
- RSS-Feeds werden geprüft, neue Einträge erkannt
- Titel, Kurzbeschreibung, Link, Datum, Tags und Summary / TL;DR extrahiert
- Neue Artikel als Markdown in `_posts/` geschrieben
- Commit in GitHub, damit der Blog automatisch neu gebaut wird
- Optional: Copilot Studio Agent für Suche und Zusammenfassungen

## Architektur

1. Website-Submission
   - Besucher oder Community-Mitglieder tragen Website + RSS-URL ein
   - Daten landen in SharePoint-Liste oder Dataverse-Tabelle

2. RSS-Scanner
   - Flow läuft alle 5 Minuten
   - Liest alle aktiven Quellen
   - Prüft neue Einträge anhand GUID / Link / PubDate

3. Content-Transformation
   - Titel, Excerpt, Summary, Tags, Datum
   - Falls der Feed nur wenig Inhalt liefert: AI-Summary aus dem Artikeltext

4. Blog Publishing
   - Markdown-Datei im `_posts/`-Ordner erstellen
   - Frontmatter mit Kategorie, Tags und Source URL
   - Commit an GitHub
   - Chirpy rendert die Seite neu

## Technischer Stack

- Frontend: Jekyll + Chirpy
- Feed-Input: SharePoint List oder Dataverse
- Orchestrierung: Power Automate
- Feed-Parsing: HTTP + XML-Parsing
- GitHub-Publishing: GitHub REST API oder GitHub Action
- AI: optional Copilot bzw. Azure OpenAI für TL;DR / Summary

## Nächste Schritte

1. SharePoint- oder Dataverse-Struktur aufsetzen
2. RSS-Feed-Parsing mit 2–3 Live-Feeds testen
3. Markdown-Datei-Generierung und GitHub-Commit bauen
4. Copilot-Studio-Integration ergänzen

## Status

Das Repository ist als Chirpy-Blog bereits funktionsfähig und wurde mit einem lokalen Jekyll-Build verifiziert.

## Performance, Barrierefreiheit, HTML (22.11.2026, Runde 10von10)

Overrides von Chirpy 7.6.0 (alle in `_includes/` und `_layouts/`, am Dateikopf als Override markiert):

- `_includes/datetime.html`: `datetime`-Attribut am `<time>` (W3C).
- `_includes/notification.html`: `role="alert"` am `<aside>` entfernt (W3C), `aria-live` bleibt.
- `_includes/post-nav.html`: kein `aria-label` am deaktivierten `<div>`; der Link-Name beginnt mit "Older/Newer:" und enthält den sichtbaren Titel.
- `_includes/head.html`: viewport ohne `user-scalable=no`; kurze Seitentitel (unter 30 Zeichen) bekommen `seo_title_pad` aus `_config.yml`; Vorladen des Kopfbilds.
- `_includes/refactor-content.html`: Kopfbild ohne `shimmer`, Code-Blöcke per Tastatur erreichbar (`tabindex`), leere Tabellenkopfzelle mit unsichtbarem Namen, `code`-Element um die Zeilennummern-Tabelle durch `div.code-block` ersetzt.
- `_includes/search-loader.html`: der Suchindex (`search.json`) wird erst beim ersten Zugriff auf die Suche geladen.
- `_includes/hero-image.html`, `_layouts/post.html`, `_layouts/home.html`: WebP-Varianten (`srcset`) für Kopfbild und Karten, wenn die Dateien existieren.
- `_includes/metadata-hook.html`: `Organization.logo` und absolute `image.url`.
- `_config.yml`: `compress_html` behält `</head>`.

Bilder: `tools/hero_webp.py` schreibt zu jeder Karte `assets/img/curated/<id>.png` zwei verlustfreie WebP-Dateien: `<id>-hero.webp` (der Ausschnitt 40:21, den das Theme im Beitrag zeigt) und `<id>-card.webp` (die ganze Karte für die Startseite). Gleiche Pixel wie das PNG, rund die Hälfte der Bytes oder weniger. `tools/render_card.py` ruft das für jede neue Karte auf. Fehlen die WebP-Dateien, zeigt das Template das PNG wie vorher; `tools/check-site.rb` prüft, dass jede im `srcset` genannte Datei im Build liegt. Nachziehen für ältere Karten: `python tools/hero_webp.py`.

Schriften: `assets/lib/fonts/main.css` enthält Ersatzschriften mit angepassten Massen (Source Sans Pro und Lato gegen Arial), damit der Schrifttausch keinen Layoutsprung auslöst. Font Awesome ist auf die benutzten Symbole gekürzt (`python tools/subset-fontawesome.py`, braucht `pip install fonttools brotli`; die vollen Schriften liegen unter `tools/fontawesome-full/`). Wird ein neues Symbol gebraucht: Name in `EXTRA` im Skript oder als `fa-<name>` in den Quelltext schreiben und das Skript neu ausführen.
