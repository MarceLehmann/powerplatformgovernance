---
title: MCP- und A2A-Governance beginnt mit blockierten benutzerdefinierten Konnektoren
description: MCP- und A2A-Verbindungen in Copilot Studio erzeugen benutzerdefinierte
  Konnektoren. Diese sollten standardmässig blockiert und nur für genehmigte URL-Muster
  freigegeben werden.
date: '2026-10-13T04:37:58Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dlp
- governance
- copilot-studio
- environments
content_type: curated_summary
curation_id: '08d8f5e66da14fc1dcb6d064'
image:
  path: "/assets/img/curated/08d8f5e66da14fc1dcb6d064.png"
  alt: 'Governance-Karte: Ignore means open by default. Block custom connectors before
    agents reach unknown servers.'
permalink: "/de/posts/mcp-and-a2a-governance-starts-with-blocking-custom-connectors-08d8f5e6/"
translation_url: "/en/posts/mcp-and-a2a-governance-starts-with-blocking-custom-connectors-08d8f5e6/"
source_url: https://www.karlex.fi/mcp-vs-a2a-the-only-control-you-have-is-the-one-most-admins-leave-on-ignore/
source_site_url: https://www.karlex.fi/
source_title: 'MCP vs A2A: the only control you have is the one most admins leave
  on Ignore'
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-13'
source_type: article
faq:
- question: Was bedeutet Ignorieren bei benutzerdefinierten Konnektoren in einer Power
    Platform-Datenrichtlinie?
  answer: Ignorieren erlaubt benutzerdefinierte Konnektoren standardmässig. Setzt
    die Standardregel auf Blockiert und ergänzt nur benötigte URL-Muster.
- question: Wie finden Power Platform-Admins den tatsächlichen Server hinter einer
    benutzerdefinierten MCP-Verbindung?
  answer: Öffnet den benutzerdefinierten Konnektor in der Lösung und prüft seine OpenAPI-Definition.
    Dort steht der tatsächliche MCP-Serverhost, unabhängig vom Verbindungsnamen.
- question: Wie schnell wird eine gefährliche MCP- oder A2A-Verbindung deaktiviert?
  answer: Das Beenden der Nutzung kann bis zu 48 Stunden dauern. Im Notfall soll der
    Agent mindestens eine Stunde gestoppt werden.
---

## TL;DR

MCP- und A2A-Verbindungen in Copilot Studio erzeugen benutzerdefinierte Konnektoren in der Power Platform-Umgebung. Ignorieren erlaubt sie standardmässig. Admins sollten die Standardregel auf Blockiert setzen, nur erforderliche URL-Muster erlauben, die OpenAPI-Definition prüfen und einen dokumentierten Notstopp für Agents vorsehen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Behandelt jede MCP- oder A2A-URL als externe Abhängigkeit und rechnet mit einer Admin-Freigabe, weil jede Verbindung einen benutzerdefinierten Konnektor erzeugt.
- Admins/CoE: Setzt benutzerdefinierte Konnektoren standardmässig auf Blockiert, erlaubt nur benötigte URL-Muster und prüft OpenAPI-Definitionen auf den tatsächlichen Host.
- Security/Compliance: Prüft Ausgaben, Berechtigungen, Zugangsdaten und externe Datenverarbeitung, weil MCP-Server Blackboxes sein können und Sensitivitätsbezeichnungen extern nicht übertragen werden.
- Leadership/Business: Verlangt für jeden Agent einen dokumentierten Stoppprozess, weil das Deaktivieren einer Verbindung bis zu 48 Stunden benötigen kann.
