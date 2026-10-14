---
title: Copilot Studio Agents mit Konversationstranskripten debuggen
description: Testbereich-Snapshots, Application Insights und Dataverse-Transkripte
  zeigen Routing, Tool-Aufrufe, Wissensquellen, Latenz und Ergebnisse.
date: '2026-10-14T17:00:04Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- dataverse
- power-apps
- governance
content_type: curated_summary
curation_id: 3e6bf07757d12cef165b0e63
image:
  path: "/assets/img/curated/3e6bf07757d12cef165b0e63.png"
  alt: 'Governance-Karte: Copilot Studio transcripts reveal the path, not the full
    prompt.'
permalink: "/de/posts/debug-copilot-studio-agents-with-conversation-transcripts-3e6bf077/"
translation_url: "/en/posts/debug-copilot-studio-agents-with-conversation-transcripts-3e6bf077/"
source_url: https://microsoft.github.io/mcscatblog/posts/open-the-hood-copilot-studio-transcripts/
source_site_url: https://microsoft.github.io/
source_title: 'Open the Hood: What Your Copilot Studio Agent Is Really Doing'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Roel Schenk
source_published_at: '2026-03-19'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie speichere ich im Copilot Studio-Testbereich einen botcontent-Transkript-Snapshot?
  answer: Wähle die drei Punkte neben Test your agent, klicke auf Save snapshot und
    öffne danach dialog.json im heruntergeladenen botcontent-ZIP.
- question: Wann nutze ich Application Insights und wann die Dataverse ConversationTranscript-Tabelle
    für Copilot Studio?
  answer: Application Insights zeigt nahezu in Echtzeit Fehler, Latenz und Abhängigkeiten.
    Dataverse-Transkripte liefern zusätzlichen Kontext zu Orchestrierung, Wissensquellen
    und Sitzungen.
- question: Warum können System-Prompts und SharePoint-Antworten in Copilot Studio-Transkripten
    fehlen?
  answer: Vollständige System-Prompts werden aus Sicherheitsgründen verborgen. Antworten
    mit sensiblen SharePoint-Daten können aus Datenschutzgründen ebenfalls ausgeschlossen
    werden.
---

## TL;DR

Copilot Studio-Transkripte zeigen Themenrouting, Tool-Aufrufe, Wissenssuchen, Orchestrierungspläne, Zeitstempel und Sitzungsergebnisse. Maker speichern einen botcontent-Snapshot im Testbereich. Support-Teams kombinieren Application Insights mit Dataverse-Transkripten, während Analysten integrierte Analytics, das Copilot Studio Kit oder Fabric für Trends nutzen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Speichert im Testbereich einen botcontent-Snapshot und prüft dialog.json, damit Routing-, Tool-, Wissensquellen- und Latenzprobleme anhand von Daten behoben werden.
- Admins/CoE: Verbindet Produktiv-Agenten mit Application Insights, sucht über die Konversations-ID nach Fehlern und verwendet bei Bedarf das Dataverse-Transkript für zusätzlichen Kontext.
- Security/Compliance: Berücksichtigt, dass vollständige System-Prompts und manche SharePoint-Antworten mit sensiblen Daten fehlen können. Transkripte zeigen daher nicht jede Modell-Eingabe oder Ausgabe.
