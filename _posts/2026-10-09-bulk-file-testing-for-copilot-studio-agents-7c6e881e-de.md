---
title: Bulk-Dateitests für Copilot Studio über Standard-Evals hinaus
description: Eine Architektur mit Dataverse, SharePoint, Power Automate, Copilot Studio
  und Power BI prüft dokumentenverarbeitende Agents mit vielen realen Dateien.
date: '2026-10-09T17:02:53Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- dataverse
- power-automate
- alm
content_type: curated_summary
curation_id: 7c6e881ebab576723f104afe
image:
  path: "/assets/img/curated/7c6e881ebab576723f104afe.png"
  alt: 'Governance-Karte: Standard evals miss failures at file-processing scale. Test
    real document variation before production.'
permalink: "/de/posts/bulk-file-testing-for-copilot-studio-agents-7c6e881e/"
translation_url: "/en/posts/bulk-file-testing-for-copilot-studio-agents-7c6e881e/"
source_url: https://microsoft.github.io/mcscatblog/posts/bulk-file-testing-copilot-evals/
source_site_url: https://microsoft.github.io/
source_title: 'Bulk File-Based Testing for Copilot Studio: Beyond Standard Evals'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Ashwin Raju Krishnamurthi
source_published_at: '2026-05-12'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Welche Daten speichert Dataverse bei Bulk-Dateitests für Copilot Studio?
  answer: Dataverse speichert Testdefinitionen, Dateiverweise, Sollwerte, Prompt-Versionen,
    Metadaten, Ausführungsverläufe, Vergleiche und Ergebnisse.
- question: Wie führt Power Automate Bulk-Dateitests für Copilot Studio Agents aus?
  answer: Power Automate lädt geeignete Tests und SharePoint-Dateien, ruft den Agent
    auf, vergleicht extrahierte Felder mit Sollwerten und schreibt Ergebnisse nach
    Dataverse.
- question: Welche Auswertungen zeigt Power BI bei Bulk-Dateitests für Copilot Studio?
  answer: Power BI zeigt Bestehens- und Fehlerquoten, Fehlerschwerpunkte nach Lieferantenvorlage,
    Abweichungstrends zwischen Prompt-Versionen und Regressionen über die Zeit.
---

## TL;DR

Copilot Studio Evals prüfen Prompt-Antworten und Gespräche, während Bulk-Dateitests die Dokumentverarbeitung im grossen Umfang validieren. Dataverse speichert Testfälle und Ergebnisse, SharePoint Eingaben und Sollwerte, Power Automate führt Tests aus und vergleicht Felder, und Power BI zeigt Quoten, Fehlermuster sowie Regressionen über Prompt-Versionen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Erstellt einen konfigurationsgesteuerten Testprozess mit Dataverse für Definitionen und Ausführungsverlauf, SharePoint für Dateien und Sollwerte sowie Power Automate für Ablauf und Vergleich.
- Leadership/Business: Nutzt Standard-Evals zusammen mit Bulk-Dateitests, weil gute Prompt-Qualität keine zuverlässige Verarbeitung vieler unterschiedlicher Dokumente sicherstellt.
