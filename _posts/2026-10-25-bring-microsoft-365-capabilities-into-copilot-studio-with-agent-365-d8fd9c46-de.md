---
title: Microsoft 365 mit Agent 365 MCP-Servern in Copilot Studio nutzen
description: Agent 365 MCP-Server verbinden Copilot Studio-Agenten über deterministische,
  prüfbare Tools mit Microsoft 365-Daten und Aktionen unter bestehenden Sicherheits-
  und Compliance-Grenzen.
date: '2026-10-25T16:57:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- copilot-studio
- dataverse
content_type: curated_summary
curation_id: d8fd9c46ff1dd7146b320135
image:
  path: "/assets/img/curated/d8fd9c46ff1dd7146b320135.png"
  alt: 'Governance-Karte: Agent 365 tools stay within Microsoft 365 security and compliance
    boundaries. Govern every action through Copilot Studio.'
permalink: "/de/posts/bring-microsoft-365-capabilities-into-copilot-studio-with-agent-365-d8fd9c46/"
translation_url: "/en/posts/bring-microsoft-365-capabilities-into-copilot-studio-with-agent-365-d8fd9c46/"
source_url: https://microsoft.github.io/mcscatblog/posts/a365-mcp-servers-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Bringing Microsoft 365 Copilot into Copilot Studio with Agent 365 MCP
  Servers
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2025-11-19'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Welche Voraussetzungen gelten für Agent 365 MCP-Server in Copilot Studio?
  answer: Der Mandant muss bei Frontier registriert sein, und Nutzer benötigen eine
    vollständige Microsoft 365 Copilot-Lizenz. Admins müssen Frontier-Funktionen eventuell
    zusätzlich aktivieren.
- question: Wie steuern Agent 365 MCP-Server den Zugriff auf Microsoft 365-Daten?
  answer: Sie gewähren im Namen des angemeldeten Nutzers einen sicheren, nutzerbezogenen
    Zugriff und beachten die Sicherheits- und Compliance-Grenzen von Microsoft 365
    Copilot.
- question: Welche Copilot Studio-Tools erstellen mit Agent 365 eine Briefing-Aufgabe?
  answer: Copilot Search recherchiert Inhalte, Word erstellt das Briefing, Outlook
    Mail versendet es und Outlook Calendar plant die Besprechung zur Prüfung.
animation:
  src: /assets/img/animations/d8fd9c46ff1dd7146b320135-de.gif
  poster: /assets/img/animations/d8fd9c46ff1dd7146b320135-de.poster.png
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt, wie Copilot Search Inhalte recherchiert, Word ein Briefing erstellt, Outlook Mail es versendet und Outlook Calendar ein Review-Meeting plant."
---

## TL;DR

Copilot Studio-Agenten können Agent 365 MCP-Server für Copilot Search, SharePoint, OneDrive, Outlook, Word, Dataverse und weitere Microsoft 365-Dienste verwenden. Dafür muss der Mandant bei Frontier registriert sein und die Nutzer benötigen eine vollständige Microsoft 365 Copilot-Lizenz. Admins müssen Frontier-Funktionen eventuell im Microsoft Admin Center aktivieren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Aktiviert nur die für den Agenten benötigten Agent 365 MCP-Server und ergänzt Orchestrierungsanweisungen, die Nutzer über Dokumente, Empfänger und Besprechungen informieren.
- Admins/CoE: Registriert den Mandanten bei Frontier und aktiviert Frontier-Funktionen im Microsoft Admin Center, damit der Bereich Agents und die A365-Server erscheinen.
- Security/Compliance: Behandelt die Server als nutzerbezogene, deterministische und prüfbare Werkzeuge und beachtet weiterhin Microsoft 365-Sicherheits-, Lizenz- und Compliance-Grenzen.
