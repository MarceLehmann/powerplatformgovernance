---
title: Business Skills geben Agents wiederverwendbare Regeln und klare Grenzen
description: Copilot Studio und Power Apps bündeln Geschäftsprozesse, Ressourcen und
  Grenzen in Business Skills, damit Agents bestimmte Aufgaben zuverlässig ausführen.
date: '2026-10-12T04:36:26Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- ownership
- dataverse
- power-apps
content_type: curated_summary
curation_id: b89b9ecd08b750bfdefd9f59
image:
  path: "/assets/img/curated/b89b9ecd08b750bfdefd9f59.png"
  alt: 'Governance-Karte: A skill carries the business logic. Clear boundaries keep
    the agent on track.'
permalink: "/de/posts/business-skills-give-agents-reusable-rules-and-clear-boundaries-b89b9ecd/"
translation_url: "/en/posts/business-skills-give-agents-reusable-rules-and-clear-boundaries-b89b9ecd/"
source_url: https://www.karlex.fi/english-is-all-you-need-business-skills-for-agents-in-twenty-minutes/
source_site_url: https://www.karlex.fi/
source_title: 'English is all you need: business skills for agents in twenty minutes'
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-12'
source_type: article
faq:
- question: Wie entscheidet Copilot Studio, wann eine Business Skill geladen wird?
  answer: Copilot Studio bewertet Name und Beschreibung der Skill auf Relevanz. Ein
    klarer Auslöser hilft dem Agent, die passende Skill auszuwählen.
- question: Was braucht Copilot Studio für Business Skills mit Dataverse?
  answer: Copilot Studio benötigt Dataverse MCP, um Business Skills gegen Dataverse
    einzusetzen. Die Quelle weist zudem auf derzeit unzureichende Leistung hin.
- question: Wer verantwortet Ergebnis, Entwicklung und Datenabgrenzung einer Agent
    Skill?
  answer: Der Fachverantwortliche besitzt das Ergebnis, der Maker oder Entwickler
    gestaltet die Skill, und das Plattformteam verantwortet Datenabgrenzung und Verteilung.
---

## TL;DR

Copilot Studio Business Skills bündeln Anweisungen, Ressourcen, Eingaben, Ausgaben und Richtlinien für eine Aufgabe und werden nur bei Relevanz geladen. Empfohlen werden klare Auslöser, Beschreibungen, Grenzen und Eskalationswege. Fachverantwortliche tragen die Ergebnisverantwortung, Maker die Entwicklung und Plattformteams die Datenabgrenzung und Verteilung. Für Dataverse ist Dataverse MCP erforderlich.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Eine fokussierte Skill mit klarem Auslöser, Eingaben, Ausgaben und Grenzen definieren, damit der Agent den vorgesehenen Geschäftsprozess ausführt.
- Admins/CoE: Speicherort, Verteilung und Nutzen der Skills steuern, weil ungenutzte Skills technische Schulden erzeugen.
- Leadership/Business: Für den Prozess und die Regeln jeder Skill Verantwortung übernehmen, da der Fachverantwortliche das Ergebnis besitzt.
- Security/Compliance: Datenabgrenzungen und Eskalationswege prüfen, besonders wenn Copilot Studio Skills mit Dataverse arbeiten.
