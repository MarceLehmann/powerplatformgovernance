---
title: 'SharePoint-Metadatenfilterung in Copilot Studio: Agentenentscheidungen'
description: GitHub-Copilot-Harness-Agenten filtern SharePoint-Dateien nach Metadaten,
  übergeben passende URLs an die Wissenssuche und behalten die SharePoint-Berechtigungsprüfung
  bei.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- security
- compliance
- ownership
content_type: curated_summary
curation_id: e78ae1599bc33374582a65d6
permalink: "/de/posts/sharepoint-metadata-filtering-in-copilot-studio-agent-decisions-e78ae159/"
translation_url: "/en/posts/sharepoint-metadata-filtering-in-copilot-studio-agent-decisions-e78ae159/"
source_url: https://microsoft.github.io/mcscatblog/posts/sharepoint-metadata-filtering/
source_site_url: https://microsoft.github.io/
source_title: 'SharePoint Metadata Filtering in Copilot Studio: From Topic Logic to
  Agent Decisions'
source_name: The Custom Engine (Microsoft Copilot Studio CAT)
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-09-01'
source_updated_at: '2026-09-02'
faq:
  - question: "Was leistet das SharePoint-Metadatenfilter-Werkzeug in Copilot Studio?"
    answer: "Es filtert Dokumente nach Autor, Bearbeiter, Datum, Dateityp, Ordner oder eigenen Spalten und liefert Dateinamen, URLs, Spaltenwerte, verfügbare Spalten, Trefferzahlen und gruppierte Summen."
  - question: "Wie kombiniert der Agent Metadatenfilter und Inhaltssuche, um Richtlinien für Kanada zu finden?"
    answer: "Er filtert zuerst die Bibliothek über die Spalte Country auf den Wert Canada und erhält die URLs der passenden Dateien."
  - question: "Hebelt das Metadatenfiltern in Copilot Studio die SharePoint-Berechtigungen aus?"
    answer: "Nein. Das Filtern grenzt nur den Inhaltsumfang ein und ersetzt keine Zugriffssteuerung."
---
## TL;DR

GitHub-Copilot-Harness-Agenten können SharePoint-Spalten wie Land, Genehmigungsstatus, Abteilung, Besitzer und Prüfdatum nutzen, um passende Dateien zu ermitteln. sharepoint\_metadata\_filter liefert URLs und Zählwerte; knowledge\_search\_sharepoint durchsucht anschliessend diese URLs. Metadatenfilterung ermöglicht Inventar- und gezielte Antworten, ersetzt aber keine Berechtigungen, und der interne Toolvertrag kann sich ändern.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: SharePoint-Metadaten wie Land, Genehmigungsstatus, Abteilung, Besitzer und Prüfdatum aktuell halten, da Agents damit Entwürfe, veraltete Inhalte oder falsche Zielgruppen schon vor der Suche ausschliessen.
- Security/Compliance: sicherstellen, dass die Berechtigungsprüfung die eigentliche Zugriffsschranke bleibt — Metadatenfilterung grenzt nur ein, was durchsucht wird, sie vergibt oder entzieht keinen Zugriff.
- Maker: die darauf aufbauen, sollten die dokumentierten Toolnamen sharepoint_metadata_filter und knowledge_search_sharepoint nicht als stabile öffentliche API behandeln, da Microsoft den internen Vertrag als änderbar kennzeichnet.
