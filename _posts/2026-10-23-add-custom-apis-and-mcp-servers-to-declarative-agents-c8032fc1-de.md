---
title: Benutzerdefinierte APIs und MCP-Server zu deklarativen Agents hinzufügen
description: Ein Videotutorial zeigt, wie deklarative Agents in Microsoft 365 Copilot
  trotz aktueller Grenzen des Agent Builder mit HTTP-APIs und MCP-Servern verbunden
  werden.
date: '2026-10-23T17:13:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
content_type: curated_summary
curation_id: c8032fc1c431471c03c28877
image:
  path: "/assets/img/curated/c8032fc1c431471c03c28877.png"
  alt: 'Governance-Karte: Declarative agents can reach custom APIs and MCP servers
    beyond the Agent builder UI.'
permalink: "/de/posts/add-custom-apis-and-mcp-servers-to-declarative-agents-c8032fc1/"
translation_url: "/en/posts/add-custom-apis-and-mcp-servers-to-declarative-agents-c8032fc1/"
source_url: https://microsoft.github.io/mcscatblog/posts/custom-api-and-mcp-in-declarative-agents/
source_site_url: https://microsoft.github.io/
source_title: 'VIDEO TUTORIAL: Add Custom APIs and MCP Servers to Declarative Agents'
source_name: Microsoft Copilot Studio CAT
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2025-12-10'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie kann ein deklarativer Agent in Microsoft 365 Copilot eine benutzerdefinierte
    HTTP-API aufrufen?
  answer: Den deklarativen Agent erstellen, die benutzerdefinierte HTTP-API einführen
    und den vollständigen Ablauf testen, damit der Agent die Backend-Logik aufruft.
- question: Kann der Agent Builder MCP-Server direkt zu deklarativen Agents hinzufügen?
  answer: Nein. Die Oberfläche des Agent Builders kann MCP-Server nicht direkt hinzufügen.
    Das Tutorial zeigt deshalb einen alternativen Verbindungsaufbau.
- question: Unterstützt das Tutorial für deklarative Agents PAYG mit Copilot Credits?
  answer: Ja. Der Ablauf zeigt, dass die Erstellung des einfachen deklarativen Agents
    mit PAYG und Copilot Credits möglich ist.
animation:
  video: /assets/img/animations/c8032fc1c431471c03c28877-de.mp4
  poster: /assets/img/animations/c8032fc1c431471c03c28877-de.poster.webp
  width: 800
  height: 450
  alt: "Drei Schritte zeigen den Aufbau: einfachen deklarativen Agent erstellen, HTTP-API oder MCP-Server verbinden und den Ablauf testen, um Backend-Logik aufzurufen."
---

## TL;DR

Das Tutorial erstellt einen deklarativen Agent für Microsoft 365 Copilot, bindet eine benutzerdefinierte HTTP-API ein und testet den Aufruf der Backend-Logik. Es behandelt auch MCP-Server. PAYG mit Copilot Credits ist möglich, obwohl der Agent Builder APIs und MCP-Server nicht direkt hinzufügen kann.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Einen einfachen deklarativen Agent erstellen, die benutzerdefinierte HTTP-API oder den MCP-Server verbinden und den vollständigen Ablauf live testen.
- Admins/CoE: Die aktuelle Grenze des Agent Builders berücksichtigen, weil benutzerdefinierte HTTP-APIs und MCP-Server nicht direkt über die Oberfläche hinzugefügt werden können.
- Leadership/Business: Den wiederholbaren Aufbau nutzen, wenn Agents Backend-Logik erreichen müssen, und beachten, dass die Quelle ein praktisches Tutorial statt einer Theorieübersicht ist.
