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

## Doku

- Architektur-Detail: [2026-09-18_architektur_rss_blog.md](2026-09-18_architektur_rss_blog.md)

## Nächste Schritte

1. SharePoint- oder Dataverse-Struktur aufsetzen
2. RSS-Feed-Parsing mit 2–3 Live-Feeds testen
3. Markdown-Datei-Generierung und GitHub-Commit bauen
4. Copilot-Studio-Integration ergänzen

## Status

Das Repository ist als Chirpy-Blog bereits funktionsfähig und wurde mit einem lokalen Jekyll-Build verifiziert.
