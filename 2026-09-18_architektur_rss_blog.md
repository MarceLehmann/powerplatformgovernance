# Architektur: RSS-gestützter Governance-Blog mit Power Automate und GitHub

**Aktueller Umsetzungsstand:** Der neue [Betriebsleitfaden](2026-09-18_architektur_automation_betrieb.md) ersetzt die nachstehende Erstplanung. Der Auftrag vom 18.09.2026 erlaubt automatische Kurzfassungen relevanter Artikel aus freigegebenen, aktiven RSS-Quellen. Dataverse-Tabelle und ausgeschalteter Flow sind angelegt; die GitHub-Anmeldung steht noch aus.

## Ziel

Geplant ist ein Power Automate-Flow, der alle 5 Minuten RSS-Feeds eingetragener Websites prüft. Relevante Fundstellen werden als kurze eigene Zusammenfassungen mit sichtbarer Quelle und direktem Original-Link in GitHub abgelegt, nicht als Volltextkopien. Es gibt keine separate `FeedArticles`-Liste. Bis zur ausdrücklichen Freigabe einer automatischen Veröffentlichung wird vor der Veröffentlichung manuell geprüft.

Die Website ist eine kuratierte Link- und Zusammenfassungssammlung. Die [Kurations- und Quellenregeln](2026-09-18_architektur_kuration_und_quellen.md) ergänzen und präzisieren diese technische Planung. Themen sind:

- Power Platform Governance
- Security & Compliance
- DLP, Environments, ALM
- Dataverse, Power Apps, Power Automate, Copilot Studio
- Architektur- und Operations-Patterns

## Gesamtarchitektur

```mermaid
flowchart LR
    A[Website / Input Form] --> B[SharePoint List oder Dataverse]
    B --> C[Power Automate: Every 5 minutes]
    C --> D[HTTP GET RSS Feed]
    D --> E[Parse XML / items]
  E --> F[Filter new items by link/guid/hash]
  F --> G[Extract title, excerpt, summary, date, tags, link]
  G --> H[Create attributed summary draft in GitHub]
  H --> R[Manual review]
  R --> I[GitHub API: publish approved summary]
    I --> J[GitHub Repo]
    J --> K[Chirpy build / GitHub Pages]
    K --> L[Governance Blog]
    G --> M[Existing custom connector: short summary]
```

## Datenmodell

### 1) Liste: WebsiteSources

| Feld | Typ | Zweck |
|---|---|---|
| Name | Text | Bezeichnung der Quelle |
| WebsiteUrl | URL | Hauptseite der Quelle |
| RssUrl | URL | RSS-Feed URL |
| IsActive | Ja/Nein | Aktiv / inaktiv |
| LastChecked | Datum | Letzte Abfrage |
| LastStatus | Text | Letzter Status |
| Tags | Text | Kategorien / Stichworte |

### 2) Direkt-Import ohne Zwischenlagerung

Es gibt keine separate `FeedArticles`-Tabelle. Relevante Feed-Einträge werden als Zusammenfassungsentwürfe direkt in GitHub abgelegt und erst nach Freigabe als Posts veröffentlicht. Der Originalartikel bleibt auf der Website seines Autors.

Nur noch relevant:

- Quelle in `WebsiteSources`
- Hash / Link / GUID für Deduplizierung
- `LastStatus` für Fehler- und Laufzeit-Log

Das heißt konkret: Der Flow prüft ein RSS-Item, entscheidet ob es neu ist, und schreibt dann sofort ein neues Post-File nach `_posts/` auf GitHub.

## Power Automate-Flow

### Trigger

- Recurrence
  - Interval: 5 minutes
  - Time zone: Europe/Zurich

### Schritte

1. Liste aller aktiven `WebsiteSources` abrufen
2. Für jede RSS-URL:
   - HTTP GET auf `RssUrl`
   - XML als Antwort verarbeiten
3. Jede `<item>` / `<entry>` prüfen
4. Titel, Link, Description, Summary, PubDate oder Guid extrahieren
5. Prüfen, ob der Artikel schon verarbeitet wurde
  - anhand `Guid`, `Link`, `HashKey`
6. Wenn neu und relevant: einen kurzen, zugeordneten Zusammenfassungsentwurf direkt in GitHub erzeugen
7. Nach manueller Freigabe über GitHub API in `_posts/` veröffentlichen
8. Optional:
   - AI-Aktion für Summary / TL;DR
   - Text aus Artikel-URL abrufen, sofern RSS ungenau ist

Wichtig: Es gibt kein `FeedArticles`-Write in einer separaten Tabelle. Der relevante Commit auf GitHub ist der eigentliche Import.

## RSS-Parsing-Logik

Wichtig ist, dass man robust mit unterschiedlichen Feed-Typen umgeht:

- RSS 2.0
- Atom
- ggf. JSON Feed

Typische Felder:

- `title`
- `link`
- `description` oder `summary`
- `published` oder `pubDate`
- `guid` oder `id`

### Beispiel-Logik

```text
For each item
  title = item.title ?? item['title']
  link = item.link ?? item['link']
  excerpt = item.description ?? item.summary ?? item.contentSnippet ?? first 180 chars
  publishedDate = item.pubDate ?? item.published ?? now
  guid = item.guid ?? item.id ?? link
  hashKey = SHA256(title + link)
```

## Zweisprachige Veröffentlichung

Jeder importierte Artikel wird in zwei eigenständigen Sprachversionen veröffentlicht:

```text
/de/2026/09/18/dlp-policies/
/en/2026/09/18/dlp-policies/
```

Beide URLs sind indexierbar. Die Sprachversionen werden über `hreflang` miteinander verknüpft und enthalten jeweils einen sichtbaren Link zur anderen Sprache.

Regeln:

- Der Originalinhalt bleibt bei der Quelle. Beide Fassungen sind kurze eigene Zusammenfassungen mit klarer Quellenangabe.
- Der vorhandene Custom Connector formuliert die Kurzfassung in DE und EN, keine vollständige Übersetzung des Originalartikels.
- Titel, Excerpt, TL;DR, Kategorien und Tags werden pro Sprache erzeugt.
- `source_url` verweist in beiden Versionen auf den Originalartikel.
- Die URLs erhalten denselben stabilen Artikel-Identifier und nur unterschiedliche Sprachpräfixe.
- Es gibt keinen `#de`- oder `#en`-Anker als Sprachidentifikation für Google.

Beispielhafte Dateien:

```text
_posts/2026-09-18-dlp-policies-de.md
_posts/2026-09-18-dlp-policies-en.md
```

Das Frontmatter muss mindestens `lang`, `original_language`, `translation_url`, `source_url` und einen sprachspezifischen `permalink` enthalten.

## Markdown-Format für Chirpy

Jeder neue Beitrag wird als `.md`-Datei im Ordner `_posts/` erzeugt.

Beispiel:

```yaml
---
title: "Power Platform Governance – DLP und Environment Strategy"
categories:
  - Governance
tags:
  - power-platform
  - governance
  - dlp
  - security
  - environment-strategy
image:
  path: /assets/img/cover-governance.jpg
  alt: "Power Platform Governance"
author: Marcel Lehmann
date: 2026-09-18 09:00:00 +0100
excerpt: "Praktische Leitlinien für sichere und skalierbare Power Platform-Umgebungen."
source_url: "https://example.com/article"
source_name: "Example Blog"
lang: de
original_language: en
translation_url: "https://powerplatformgovernance.com/en/2026/09/18/dlp-policies/"
permalink: /de/2026/09/18/dlp-policies/
---

## Kurzfassung

...

## TL;DR

- ...
- ...
- ...

## Warum für Governance relevant

...
```

## GitHub-Commit-Pfad

### Option A: GitHub REST API direkt

- GitHub PAT oder GitHub App
- Repository `MarceLehmann/powerplatformgovernance`
- Endpoint: `PUT https://api.github.com/repos/{owner}/{repo}/contents/{path}`
- Inhalt als Base64 encodieren
- Commit Message: `Add post: {title}`

### Option B: GitHub Action

- Power Automate schreibt neue Markdown-Dateien in ein Branch-Artifact / vorbereitete Datei
- GitHub Action prüft Einträge, baut Site neu und deployed
- Für produktive Nutzung oft besser als direkte Commit-API

Empfehlung: Einstieg mit direct API, später mit Action-Workflow skalieren.

## AI / Copilot Erweiterung

Die Übersetzung und Zusammenfassung läuft nicht über den AI Builder. Power Automate ruft dafür den eigenen Custom Connector auf, der mit Foundry verbunden ist.

- Power Automate übergibt relevante Inhalte an den vorhandenen Custom Connector; kein zusätzlicher Copilot Studio Agent
- Foundry erkennt die Originalsprache
- Foundry erzeugt zwei Fassungen unserer Kurzfassung
- Foundry erzeugt sprachspezifischen Excerpt und TL;DR
- Power Automate schreibt beide Markdown-Dateien direkt nach GitHub

### Beispiel-Fluss

```text
RSS item -> extract title + description
Custom Connector -> Foundry: detect language + translate + summarize
Create German markdown -> commit to GitHub
Create English markdown -> commit to GitHub
Add hreflang links -> Chirpy build
```

## Sicherheits- und Qualitätsregeln

- Keine fremden Volltexte, vollständigen Übersetzungen oder unberechtigt übernommenen Medien veröffentlichen
- `source_url` immer mit speichern
- Duplikate vermeiden
- Originalautoren korrekt nennen; Einreicherdaten nur mit expliziter Freigabe veröffentlichen; keine privaten Kontakt- oder internen Informationen in GitHub speichern
- Tags sauber normalisieren
- nur aktive Feed-URLs verarbeiten
- Fehlergrenzen sauber protokollieren in `LastStatus`
- Kein Zwischenspeichern in einer eigenen Feed-Tabelle, wenn der Post direkt auf GitHub landen kann

## Empfohlener Rollout

### Phase 1 – MVP

- Liste mit 10–20 RSS-Feeds
- Prüfen alle 5 Minuten
- nur neue Artikel importieren
- Markdown-Dateien schreiben
- GitHub-Commit

### Phase 2 – Quality

- Foundry-Übersetzung über den Custom Connector
- sprachspezifische AI-Summary / TL;DR
- Titel- und Excerpt-Normalisierung
- Deduplizierung über HashKey / GUID
- Feeds kategorisieren

### Phase 3 – Produktiv

- Eingabeformular für neue Websites
- Moderations-Workflow
- Standard-Tag-Liste
- Suche / Filter / Copilot Studio Agent

## Empfehlung

Die robusteste Lösung ist:

1. SharePoint-Liste oder Dataverse als Source of Truth
2. Power Automate als Cron-Worker alle 5 Minuten
3. XML-Parsing der RSS-Feeds
4. Frontmatter-gesteuerte Markdown-Dateien
5. GitHub API als Commit-Layer
6. Chirpy für Rendering und Publication

Die entscheidenden Regeln sind: Feed-Artikel werden nicht zwischengespeichert, sondern direkt als zwei sprachspezifische GitHub-Post-Dateien geschrieben. Beide Sprachversionen sind über eigene URLs erreichbar und für Google indexierbar. Die Übersetzung und Zusammenfassung übernimmt der eigene Foundry-Custom-Connector.

## Nächster konkreter Umsetzungsschritt

Als erster Schritt sollte die Datenstruktur in SharePoint oder Dataverse definiert werden und ein erster Test-Flow mit 2–3 bekannten Governance-Feeds gebaut werden.

Dann folgt:

- RSS-Feed parsing
- Deduplikation
- Markdown-Datei-Generierung
- GitHub Commit
- anschließend AI Summary / TL;DR
