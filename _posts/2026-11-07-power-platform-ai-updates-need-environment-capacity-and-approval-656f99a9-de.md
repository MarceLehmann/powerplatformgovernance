---
title: Power Platform KI-Updates erfordern Prüfungen von Umgebung, Kapazität und Freigaben
description: Die Übersicht behandelt Copilot Studio, Workflow-Kapazität, AI Builder-Credits,
  Dokumentgenerierung und wichtige Prüfungen für die Power Platform.
date: '2026-11-07T04:41:51Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- copilot-studio
- compliance
- power-automate
content_type: curated_summary
curation_id: 656f99a948f9738eafa5b744
image:
  path: "/assets/img/curated/656f99a948f9738eafa5b744.png"
  alt: 'Governance-Karte: Check the environment, capacity and approval path before
    you automate.'
permalink: "/de/posts/power-platform-ai-updates-need-environment-capacity-and-approval-656f99a9/"
translation_url: "/en/posts/power-platform-ai-updates-need-environment-capacity-and-approval-656f99a9/"
source_url: https://flowaltdelete.ca/2026/11/06/ai-weekly-cowork-meets-planner-copilot-studio-mcp-and-images-2-6/
source_site_url: https://flowaltdelete.ca/
source_title: 'AI Weekly: Cowork Meets Planner, Copilot Studio MCP, and Images 2.6'
source_name: Flow Alt Delete
source_language: en
source_language_name: English
source_author: Josh Cook
source_published_at: '2026-11-06'
source_updated_at: '2026-11-06'
source_type: article
faq:
- question: Was passiert bei erschöpfter Copilot Studio-Workflowkapazität?
  answer: Neue Workflowausführungen können blockiert werden, wenn die relevante vorausbezahlte
    Kapazität erschöpft ist. Laufende Ausführungen werden abgeschlossen.
- question: Übernimmt Power Automate die bedingte Feldsichtbarkeit eines SharePoint-Formulars?
  answer: Nein. Power Automate übernimmt diese Regeln nicht in das generierte Dokument.
    Vergleichen Sie deshalb die Formularausgabe mit dem Flow-Ergebnis.
- question: Wie prüfen Administratoren verfügbare AI Builder-Credits?
  answer: Prüfen Sie das tatsächliche Vertragsenddatum und die jeder Umgebung zugewiesene
    Kapazität. Ohne verfügbare AI Builder- oder Copilot-Credits kann die Nutzung blockiert
    werden.
---

## TL;DR

Copilot Studio-Workflows können Copilot Chat oder Cowork aufrufen, strukturierte Daten extrahieren und mehrere Autoren unterstützen. Ist die Kapazität erschöpft, können neue Ausführungen blockiert werden. Prüfen Sie die Kapazität je Umgebung und die Vertragsdaten von AI Builder. Bedingte Feldsichtbarkeit aus SharePoint-Formularen wird nicht in Flow-generierte Dokumente übernommen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Testen Sie einen begrenzten Workflow, prüfen Sie extrahierte Werte und behalten Sie bei geschäftlichen Regeln einen Freigabeschritt bei.
- Admins/CoE: Prüfen Sie Umgebungskapazität, AI Builder-Vertragsdaten und tatsächliche Berechtigungen, bevor unbeaufsichtigte Ausführungen eingeplant werden.
- Security/Compliance: Behandeln Sie die geplante Verarbeitung von Claude innerhalb der EU Data Boundary als zukünftige Änderung und prüfen Sie den Berichtsumfang vor der Interpretation von Nullnutzung.
- Leadership/Business: Verlangen Sie eine Prüfung und Freigabe des Ergebnisses, weil das Fertigstellen einer Datei die Planner-Aufgabe nicht automatisch abschliesst.
