---
title: Dataverse-Statuslisten für dauerhafte Copilot-Studio-Prozesse nutzen
description: Lang laufende Arbeit in Dataverse speichern, Zustandswechsel mit Agent-Flows
  absichern und unsichere Fälle an Menschen statt an Chat-Speicher übergeben.
date: '2026-09-30T23:42:24Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- dataverse
- copilot-studio
- alm
- ownership
content_type: curated_summary
curation_id: 8ea278de479cfe2e67a1e0ca
image:
  path: "/assets/img/curated/8ea278de479cfe2e67a1e0ca.png"
  alt: 'Governance-Karte: The agent is not the process. Dataverse must remember every
    state.'
permalink: "/de/posts/use-dataverse-state-tables-for-durable-copilot-studio-processes-8ea278de/"
translation_url: "/en/posts/use-dataverse-state-tables-for-durable-copilot-studio-processes-8ea278de/"
source_url: https://holgerimbery.blog/statetable-multi-agent-orchestration
source_site_url: https://holgerimbery.blog/
source_title: 'Long-Running Business Processes in Copilot Studio: State Tables, Agent
  Flows and Multi-Agent Orchestration'
source_name: Holger Imbery - fieldnotes and insights
source_language: en
source_language_name: English
source_author: Holger Imbery
source_published_at: '2026-09-13'
source_type: article
---

## TL;DR

Lang laufende Copilot-Studio-Prozesse sollen über eine Dataverse-Falltabelle statt über eine Unterhaltung laufen. Ein einzelner geschützter TransitionCase-Agent-Flow validiert Zustandswechsel, schreibt vor Seiteneffekten und bestätigt danach. Versuche, NextActionAt, Konfidenz und ein unveränderbares Auditprotokoll werden gespeichert; fällige Fälle werden regelmässig abgearbeitet und unsichere Fälle gehen an NeedsHuman.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Spezialagenten klein halten, deterministische Prüfungen in Agent-Flows legen und Konfidenz speichern, damit unsichere Extraktionen zur menschlichen Prüfung gelangen.
- Admins/CoE: Einen einzigen geschützten Flow als einzigen Schreiber von State festlegen, erlaubte Übergänge validieren und Versuche, Fehler sowie Auditdaten für die Wiederherstellung speichern.
- Leadership/Business: Fachliche Zustände vor dem Bau definieren und die Dataverse-Tabelle sowie Power BI nutzen, um Warteschlangen, Liegezeiten und wiederkehrende Ausnahmen zu prüfen.
