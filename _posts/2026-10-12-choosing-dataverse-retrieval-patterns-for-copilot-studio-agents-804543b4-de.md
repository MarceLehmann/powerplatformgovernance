---
title: Dataverse-Daten in Copilot Studio passend abrufen
description: Der Leitfaden vergleicht Knowledge, MCP Server, List Rows, Search Query
  und Prompt Tool für strukturierte Dataverse-Daten.
date: '2026-10-12T16:57:15Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- copilot-studio
- environments
- governance
content_type: curated_summary
curation_id: 804543b42e339a03acf88084
image:
  path: "/assets/img/curated/804543b42e339a03acf88084.png"
  alt: 'Governance-Karte: Choose retrieval by need. Fast access can still expose too
    much.'
permalink: "/de/posts/choosing-dataverse-retrieval-patterns-for-copilot-studio-agents-804543b4/"
translation_url: "/en/posts/choosing-dataverse-retrieval-patterns-for-copilot-studio-agents-804543b4/"
source_url: https://microsoft.github.io/mcscatblog/posts/dataverse-retrieval-patterns-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Dataverse Retrieval Patterns for Structured Data in Copilot Studio Agents
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Karima Kanji-Tajdin, Roel Schenk
source_published_at: '2026-04-10'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie verarbeitet Copilot Studio Knowledge Dataverse-Tabellenergebnisse?
  answer: Knowledge wandelt Fragen in strukturierte Abfragen um und liefert relevante
    Top-N-Treffer statt aller Zeilen, die einen Filter erfüllen.
- question: Kann der Dataverse MCP Server auf alle Tabellen einer Copilot Studio-Umgebung
    zugreifen?
  answer: Ja, Dataverse MCP verbindet den Agenten über gebündelte Operationen mit
    allen Tabellen der Umgebung. Nicht benötigte Operationen sollten deaktiviert werden.
- question: Wann sollten Search Query und List Rows in Copilot Studio kombiniert werden?
  answer: Die Kombination eignet sich für fehlertolerante Suche mit anschliessender
    vollständiger Datensatzabfrage. Search Query findet Kandidaten, List Rows lädt
    danach die vollständige Zeile.
---

## TL;DR

Copilot Studio bietet fünf Muster für Dataverse-Abrufe: Knowledge für schnelle Top-N-Antworten, List Rows für vollständige OData- oder FetchXML-Ergebnisse, MCP Server für breiten Zugriff, Search Query für fehlertolerante Suche und Prompt Tool für Analysen von bis zu 1000 Zeilen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: List Rows eignet sich für exakte, vollständige Filter. Search Query hilft bei Tippfehlern und kann für vollständige Datensätze mit List Rows kombiniert werden.
- Admins/CoE: Prüft MCP-Toolaktionen und deaktiviert Erstellen, Ändern und Löschen, wenn der Agent nur lesen soll.
- Security/Compliance: Behandelt MCP als einen DLP-Connector, da einzelne MCP-Operationen auf DLP-Ebene nicht separat erlaubt oder blockiert werden können.
- Leadership/Business: Richtet das Abrufmuster an Risiko, Datenmenge, Authentifizierung und dem Bedarf an vollständigen Ergebnissen aus.
