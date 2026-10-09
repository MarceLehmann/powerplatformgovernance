---
title: Strukturierte Abfragen mit dynamischen Eingaben in Copilot Studio
description: Ein Copilot Studio-Connector-Tool kann SharePoint-Listen und andere strukturierte
  Daten mit dynamischen OData-Filtern aus natürlichsprachigen Anfragen abfragen.
date: '2026-10-09T17:02:55Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- dataverse
- power-automate
content_type: curated_summary
curation_id: e0ad3c3f522dac3e64838e49
image:
  path: "/assets/img/curated/e0ad3c3f522dac3e64838e49.png"
  alt: 'Governance-Karte: Dynamic inputs turn natural language into precise structured
    queries.'
permalink: "/de/posts/use-dynamic-inputs-for-structured-queries-in-copilot-studio-e0ad3c3f/"
translation_url: "/en/posts/use-dynamic-inputs-for-structured-queries-in-copilot-studio-e0ad3c3f/"
source_url: https://microsoft.github.io/mcscatblog/posts/tool-inputs-sharepoint-list/
source_site_url: https://microsoft.github.io/
source_title: Get Answers Over SharePoint Lists and Other Structured Data, Turning
  Natural Language into Dynamic Queries in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Karima Kanji-Tajdin
source_published_at: '2026-04-30'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie erzeugt Copilot Studio OData-Filter für eine SharePoint-Liste?
  answer: Der Parameter $filter von SharePoint Get Items wird als dynamische Eingabe
    konfiguriert und mit Spalten, Datentypen, Werten und Beispielen beschrieben.
- question: Welche Einstellungen von SharePoint Get Items sollten in Copilot Studio
    fest bleiben?
  answer: Websiteadresse, Listenname, Ansicht und $top bleiben fest, damit das Tool
    die richtige Liste abfragt und die Anzahl der Ergebnisse begrenzt.
- question: Wann braucht ein Copilot Studio-Agent ein dynamisches Schema oder einen
    eigenen NL2Query-Prompt?
  answer: Ein dynamisches Schema passt sich wachsenden oder geänderten Spalten an.
    Ein eigener Prompt isoliert die Abfrageerstellung bei umfangreichen Regeln und
    Schemaerklärungen.
---

## TL;DR

In Copilot Studio werden Website, Liste, Ansicht und $top für SharePoint Get Items festgelegt, während $filter dynamisch bleibt. Eine genaue Eingabebeschreibung ermöglicht dem Orchestrator, natürlichsprachige Anfragen in OData-Filter umzuwandeln, gezielte Ergebnisse abzurufen und Antworten ohne Power Automate-Flows oder benutzerdefinierten Code zu erstellen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Beschreibt Spaltennamen, Datentypen, gültige Werte und OData-Beispiele in der dynamischen Eingabe, damit der Orchestrator bessere Filter erstellt.
- Admins/CoE: Haltet $top sinnvoll und verlangt bei unklaren Anfragen eine Rückfrage, weil breite Ergebnismengen gekürzt, übergangen oder unzuverlässig zusammengefasst werden können.
- Security/Compliance: Prüft, ob Connector-Tools, Knowledge und Work IQ zur erforderlichen Abrufkontrolle passen, da konfigurierte Tools mehr Kontrolle über Spalten und Zeilen bieten.
- Leadership/Business: Wählt die Architektur nach Komplexität, von statischen Schemata bis zu dynamischen Schemadateien oder einem eigenen Prompt, wenn sich Listen verändern.
