---
title: MCP-Server oder Connectoren in Copilot Studio? Ein Leitfaden
description: Ein Vergleich integrierter und eigener MCP-Server und Power Platform-Connectoren
  mit Blick auf Kontrolle, DLP, ACP, Wiederverwendung, Komplexität und ALM.
date: '2026-10-17T17:03:19Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- dlp
- alm
- copilot-studio
- ownership
content_type: curated_summary
curation_id: 2a02adf9043caf18b7a07a1b
image:
  path: "/assets/img/curated/2a02adf9043caf18b7a07a1b.png"
  alt: 'Governance-Karte: Connectors give you control. MCP servers give you a moving
    tool surface.'
permalink: "/de/posts/mcp-servers-or-connectors-in-copilot-studio-a-maker-s-guide-2a02adf9/"
translation_url: "/en/posts/mcp-servers-or-connectors-in-copilot-studio-a-maker-s-guide-2a02adf9/"
source_url: https://microsoft.github.io/mcscatblog/posts/compare-mcp-servers-pp-connectors/
source_site_url: https://microsoft.github.io/
source_title: MCP Servers or Connectors in Copilot Studio? A Maker's Guide
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Jay Padimiti
source_published_at: '2026-02-13'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie unterscheidet sich die DLP-Kontrolle einzelner Tools bei MCP-Servern
    und Connectoren in Copilot Studio?
  answer: Bei Connectoren können Admins einzelne Aktionen blockieren und Standardwerte
    für neue Tools setzen; erlaubte MCP-Server stellen grundsätzlich ihre gesamte
    dynamisch entdeckte Oberfläche bereit.
- question: Kann ich Toolbeschreibungen und Eingaben von MCP-Servern in Copilot Studio
    bearbeiten?
  answer: Nein. Bei Connector-Tools können Makers Beschreibungen, Eingaben und Standardwerte
    bearbeiten, während der Serverbesitzer MCP-Definitionen kontrolliert.
- question: Wann sollte ich in Copilot Studio einen eigenen MCP-Server statt eines
    eigenen Connectors wählen?
  answer: Wählt einen eigenen MCP-Server für komplexe Logik, plattformübergreifende
    Wiederverwendung oder MCP-Ressourcen; für einfachere Integrationen innerhalb der
    Power Platform genügt ein Connector.
---

## TL;DR

In Copilot Studio können Makers bei Connectoren Toolbeschreibungen, Eingaben und Standardwerte bearbeiten. MCP-Server stellen dagegen dynamisch die vom Besitzer definierten Tools bereit. Connectoren erlauben eine Kontrolle einzelner Aktionen durch DLP und ACP. Eigene MCP-Server eignen sich für komplexe Logik und plattformübergreifende Nutzung, Connectoren für einfachere Power Platform-Integrationen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Wählt Connectoren, wenn ihr Toolbeschreibungen, Eingaben oder Standardwerte anpassen müsst, da MCP-Definitionen beim Serverbesitzer bleiben.
- Admins/CoE: Nutzt Connector-Aktionen für fein abgestufte DLP- und ACP-Kontrollen, weil ein erlaubter MCP-Server grundsätzlich seine dynamisch entdeckte Tool-Oberfläche bereitstellt.
- Security/Compliance: Prüft, ob eine Sperre des gesamten Servers für MCP-Integrationen ausreicht, und bewertet den konkreten Server, da manche Tool-Kontrollen serverseitig statt plattformseitig erfolgen.
- Leadership/Business: Entscheidet vor einer eigenen Implementierung, ob Portabilität, komplexe Logik oder die Integration in die Power Platform am wichtigsten ist.
