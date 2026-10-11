---
title: 'Copilot Studio Agent Flows: Fehler, Besitz und zuverlässige Muster'
description: Praxisnahe Kontrollen für Agent Flows, mit Sichtbarkeit, 100-Sekunden-Timeouts,
  Schemaaktualisierung, Maker-Anmeldeinformationen, Mitbesitz und Übergaben.
date: '2026-10-11T16:55:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- power-automate
- ownership
- security
- alm
content_type: curated_summary
curation_id: c10d15ef4876b33a3497f43b
image:
  path: "/assets/img/curated/c10d15ef4876b33a3497f43b.png"
  alt: 'Governance-Karte: Agent flows need guardrails. A hidden timeout or stale schema
    can break the handoff.'
permalink: "/de/posts/copilot-studio-agent-flows-errors-ownership-and-reliable-patterns-c10d15ef/"
translation_url: "/en/posts/copilot-studio-agent-flows-errors-ownership-and-reliable-patterns-c10d15ef/"
source_url: https://microsoft.github.io/mcscatblog/posts/combining-agent-flows-and-agents-gotchas-errors-and-patterns/
source_site_url: https://microsoft.github.io/
source_title: 'Combining Agent Flows with Agents: Gotchas, Errors, and Patterns'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Petros Feleskouras
source_published_at: '2026-04-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Warum wird mein Copilot Studio Agent Flow nicht als Tool angezeigt?
  answer: Der Flow benötigt den Trigger When an agent calls the flow, die Aktion Respond
    to the agent, den synchronen Modus, eine Solution und den Copilot Studio-Plan.
- question: Wie verhindere ich den 100-Sekunden-Fehler FlowActionTimedOut in Copilot
    Studio?
  answer: Antwortet innerhalb von 100 Sekunden, führt Genehmigungen oder menschliche
    Eingaben danach asynchron fort und ruft den Agent mit Execute Agent und Conversation
    ID erneut auf.
- question: Wo hinterlege ich Maker-Anmeldeinformationen für Aktionen in einem Copilot
    Studio Agent Flow?
  answer: Aktualisiert jede Connection Reference in Power Automate. Die Einstellung
    für Maker-Anmeldeinformationen am Agent-Tool ändert die Authentifizierung der
    Flow-Aktionen nicht.
---

## TL;DR

Copilot Studio Agent Flows benötigen den Trigger When an agent calls the flow, die Aktion Respond to the agent, deaktivierte asynchrone Antworten, eine Solution und den Copilot Studio-Plan. Synchrone Aufrufe sind auf 100 Sekunden begrenzt. Nach Parameteränderungen muss der Flow-Knoten aktualisiert werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Legt Agent Flows mit dem erforderlichen Trigger und der Antwortaktion in einer Solution ab und aktualisiert den Copilot Studio-Knoten nach Parameteränderungen, damit Tool und Schema übereinstimmen.
- Admins/CoE: Prüft Mitbesitzer und Connection References getrennt von den Anmeldeinformationen des Agent-Tools, weil Zugriff und Laufzeitidentität an verschiedenen Stellen konfiguriert werden.
- Security/Compliance: Verwendet gezielte Mitbesitzrechte und kontrollierte Speicherlinks für grössere Bilder, weil Flow-Zugriff ohne Agent-Zugriff möglich ist und Cloud-Speicher Zugriffskontrollen unterstützt.
