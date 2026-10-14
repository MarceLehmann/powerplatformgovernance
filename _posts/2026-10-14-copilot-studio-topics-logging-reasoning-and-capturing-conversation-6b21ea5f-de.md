---
title: 'Copilot Studio Themen: Denkmuster protokollieren und Verläufe erfassen'
description: Copilot Studio Themen können Orchestrator-Schritte und Gesprächsverläufe
  erfassen. Dabei müssen Credits, Datenschutz, Aufbewahrung und Zugriffsrechte kontrolliert
  werden.
date: '2026-10-14T17:00:06Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- compliance
- copilot-studio
- dataverse
- governance
content_type: curated_summary
curation_id: 6b21ea5feb67814ca2e65e4a
image:
  path: "/assets/img/curated/6b21ea5feb67814ca2e65e4a.png"
  alt: 'Governance-Karte: Conversation history is best effort, not a compliance record.
    Protect transcripts as sensitive data.'
permalink: "/de/posts/copilot-studio-topics-logging-reasoning-and-capturing-conversation-6b21ea5f/"
translation_url: "/en/posts/copilot-studio-topics-logging-reasoning-and-capturing-conversation-6b21ea5f/"
source_url: https://microsoft.github.io/mcscatblog/posts/power-of-topics-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'The Orchestrator’s Secrets: Chain-of-Thought & Transcript on Demand'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Remi Dyon
source_published_at: '2026-03-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie kann ein Copilot Studio Thema die Orchestrator-Begründung nach jedem
    Tool-Aufruf anzeigen?
  answer: Erstellt ein Thema ohne Benutzereingabe mit Eingabevariable und Nachrichtenknoten
    und weist den Agenten an, es nach jedem Schritt aufzurufen.
- question: Ist conversationHistory in Copilot Studio ein wortgetreues Protokoll für
    Compliance?
  answer: Nein. Die Variable enthält eine bestmögliche Rekonstruktion. Für einen verlässlichen
    Compliance-Nachweis ist dedizierte Protokollierung erforderlich.
- question: Wie sollten Copilot Studio Gesprächsverläufe vor der Übergabe an Dataverse
    oder E-Mail geschützt werden?
  answer: Behandelt sie als sensible Daten, holt Einwilligung ein, übermittelt nur
    notwendige Inhalte, setzt Aufbewahrungsregeln und beschränkt den Zugriff.
---

## TL;DR

In Copilot Studio kann ein Thema ohne Benutzereingabe nach jedem Tool oder Schritt die Orchestrator-Begründung anzeigen, was zusätzliche Copilot-Credits kostet. Ein weiteres Thema speichert den Gesprächsverlauf nach Bedarf in einer Variable, jedoch nur als bestmögliche Rekonstruktion. Für Compliance-Nachweise sind dedizierte Protokollierung sowie Einwilligung, Minimierung, Aufbewahrung und Zugriffsschutz erforderlich.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erstellt Themen ohne Benutzereingabe und beschreibt die Eingabevariablen klar, damit Schritte oder Verläufe erfasst werden, ohne Rekursion auszulösen.
- Admins/CoE: Begrenzt die Begründungsprotokollierung auf Debug-Modi, ausgewählte Kanäle oder lange Abläufe, da jeder zusätzliche Aufruf Copilot-Credits kostet.
- Security/Compliance: Behandelt Gesprächsverläufe als sensible Daten, holt Einwilligung ein, minimiert Inhalte, setzt Aufbewahrungsregeln und beschränkt Zugriffe.
- Leadership/Business: Verwendet dedizierte Protokollierung für Compliance-Nachweise, weil der Laufzeitverlauf nur eine bestmögliche Rekonstruktion ist.
