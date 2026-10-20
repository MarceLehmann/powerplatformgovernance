---
title: Copilot Studio Agentenleistung mit Response Analysis messen
description: Das M365 Agents SDK, Python DataFrames und Gradio messen Latenz, zeigen
  Planner-Aktivitäten und visualisieren die Ausführung von Copilot Studio Agenten.
date: '2026-10-19T16:55:57Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- copilot-studio
content_type: curated_summary
curation_id: cf92c4fc56714df93d079ba6
image:
  path: "/assets/img/curated/cf92c4fc56714df93d079ba6.png"
  alt: 'Governance-Karte: Never commit access tokens or credentials to source control.
    Store them securely instead.'
permalink: "/de/posts/measure-copilot-studio-agent-performance-with-response-analysis-cf92c4fc/"
translation_url: "/en/posts/measure-copilot-studio-agent-performance-with-response-analysis-cf92c4fc/"
source_url: https://microsoft.github.io/mcscatblog/posts/response-analysis-copilot-tool/
source_site_url: https://microsoft.github.io/
source_title: 'Agentic Tooling: Making Agent Performance Transparent and Measurable'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Vineet Kaul
source_published_at: '2026-01-16'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie misst das M365 Agents SDK die Antwortlatenz eines Copilot Studio Agenten?
  answer: Es erfasst Zeitstempel von Nachrichtenaktivitäten und berechnet daraus Dauer,
    Mittelwert, Median, Standardabweichung, Maximum sowie die Korrelation.
- question: Welche Planner-Daten erfasst das Response Analysis Tool aus Copilot Studio
    Ereignissen?
  answer: Es zeichnet Planner-Schritte, Tool-Aufrufe und Ausführungsdetails aus Ereignisaktivitäten
    auf, während Nachrichtenaktivitäten den finalen Antworttext liefern.
- question: Wie müssen Zugriffstoken für das Copilot Studio Analysewerkzeug gespeichert
    werden?
  answer: Zugriffstoken gehören in Umgebungsvariablen oder sichere Speicher, niemals
    in die Quellcodeverwaltung; ausserdem ist eine Token-Erneuerung erforderlich.
animation:
  src: /assets/img/animations/cf92c4fc56714df93d079ba6-de.gif
  poster: /assets/img/animations/cf92c4fc56714df93d079ba6-de.poster.png
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt, wie das Response Analysis Tool Testeingaben an einen Copilot Studio Agenten sendet, Activities erfasst, Latenzstatistiken berechnet und Metriken sowie Planner-Daten an Gradio streamt."
---

## TL;DR

Das Response Analysis Tool sendet mit dem M365 Agents SDK Testeingaben an einen Copilot Studio Agenten, erfasst Nachrichten- und Ereignisaktivitäten, berechnet Latenzstatistiken mit Python DataFrames und streamt Metriken sowie Planner-Daten in ein Gradio-Dashboard. Die Implementierung ist auf Einzel-Session-Analysen beschränkt und erfordert sicheren Umgang mit Zugriffstoken.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Führt Einzel-Session-Tests mit dem Response Analysis Tool aus, um Telemetrie zu isolieren und Agentenanweisungen anhand gemessenen Verhaltens zu verbessern.
- Admins/CoE: Prüft die Umgebungsanforderungen vor der Einrichtung und berücksichtigt die Beschränkung auf eine Session bei Testabläufen.
- Security/Compliance: Hält Zugriffstoken aus der Quellcodeverwaltung heraus, verwendet Umgebungsvariablen oder sichere Speicher und implementiert die Token-Erneuerung.
