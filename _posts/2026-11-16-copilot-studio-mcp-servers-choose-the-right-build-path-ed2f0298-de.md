---
title: 'Copilot Studio MCP-Server: Den richtigen Weg wählen'
description: Prüfe zuerst Connectoren, Dataverse Custom APIs oder vorhandene MCP-Server.
  Eigene Server brauchen klare Regeln für Tools, Identität und Besitz.
date: '2026-11-16T10:48:27Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- governance
- security
- dlp
- ownership
content_type: curated_summary
curation_id: ed2f02982b925e9eecaf2f98
image:
  path: "/assets/img/curated/ed2f02982b925e9eecaf2f98.png"
  alt: 'Governance-Karte: Build a custom MCP server only when existing options fall
    short. Centralized tools still need strong ownership and security.'
permalink: "/de/posts/copilot-studio-mcp-servers-choose-the-right-build-path-ed2f0298/"
translation_url: "/en/posts/copilot-studio-mcp-servers-choose-the-right-build-path-ed2f0298/"
source_url: https://aidevme.com/copilot-studio-custom-mcp-servers-when-you-need-one/
source_site_url: https://aidevme.com/
source_title: 'Copilot Studio Custom MCP Servers: When to Build One and How'
source_name: Practical AI, Copilot & Modern Development Insights
source_language: en
source_language_name: English
source_author: Zsolt Zombik
source_published_at: '2026-11-16'
source_updated_at: '2026-11-16'
source_type: article
faq:
- question: Wann braucht ein Copilot-Studio-Agent einen eigenen MCP-Server statt eines
    Connectors?
  answer: Ein eigener Server passt bei komplexer Logik, mehreren nutzenden Clients
    oder MCP-Ressourcen. Ein Connector genügt meist für eine dünne API-Hülle oder
    einen Agenten.
- question: Wie viele MCP-Tools kann ein Copilot-Studio-Agent verwenden?
  answer: Copilot Studio unterstützt bis zu 128 Tools pro Agent, empfohlen werden
    25 bis 30. Jeder MCP-Server zählt ebenfalls zum Tool-Gesamtumfang des Agents.
- question: Wie gelten DLP-Richtlinien für MCP-Server in Copilot Studio?
  answer: Der MCP-Zugriff läuft über Power-Platform-Connectoren, daher gelten Datenrichtlinien.
    Ein erlaubter MCP-Server stellt seine gesamte Tool-Oberfläche bereit, nicht einzelne
    Aktionen.
animation:
  video: /assets/img/animations/ed2f02982b925e9eecaf2f98-de.mp4
  poster: /assets/img/animations/ed2f02982b925e9eecaf2f98-de.poster.webp
  width: 800
  height: 450
  alt: "Die Animation zeigt den MCP-Baupfad in Copilot Studio: zuerst Connector, dann vorhandener Server, dann Dataverse Custom API, danach eigener Server mit Governance."
---

## TL;DR

Copilot Studio unterstützt MCP über Streamable HTTP, mit bis zu 128 Tools pro Agent und einer Empfehlung von 25 bis 30. Nutze zuerst Connectoren, vorhandene Server oder Dataverse Custom APIs. Ein eigener Server lohnt sich bei komplexer Logik, mehreren Clients oder MCP-Ressourcen. Identität und Besitz müssen serverseitig geschützt werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt einen Connector für einen einfachen API-Zugriff oder agentenspezifische Beschreibungen, weil kein eigener Hosting-Aufwand entsteht.
- Admins/CoE: Wendet Power-Platform-Datenrichtlinien an, da MCP über Connectoren läuft, und dokumentiert die verantwortlichen Besitzer.
- Security/Compliance: Übergebt die Kundenidentität nicht als vom Modell gesetztes Tool-Argument, prüft Besitz serverseitig und verlangt Bestätigung vor Schreibvorgängen.
- Leadership/Business: Genehmigt eigenes Hosting nur, wenn gemeinsame Tools, komplexe Logik oder Ressourcen den zusätzlichen Betrieb rechtfertigen.
