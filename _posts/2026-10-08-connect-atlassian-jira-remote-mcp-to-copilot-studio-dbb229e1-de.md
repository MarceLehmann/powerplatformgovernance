---
title: Atlassian Jira Remote MCP mit Copilot Studio verbinden
description: Dynamic discovery auswählen, Atlassian-Voraussetzungen aktivieren, die
  Umgebungsverbindung erstellen, mit JQL prüfen und den Agent veröffentlichen.
date: '2026-10-08T16:51:35Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- environments
- copilot-studio
- ownership
content_type: curated_summary
curation_id: dbb229e11322afc7aa5b89e9
image:
  path: "/assets/img/curated/dbb229e11322afc7aa5b89e9.png"
  alt: 'Governance-Karte: Dynamic discovery prevents a fragile Atlassian OAuth setup.
    Use the server''s registration model.'
permalink: "/de/posts/connect-atlassian-jira-remote-mcp-to-copilot-studio-dbb229e1/"
translation_url: "/en/posts/connect-atlassian-jira-remote-mcp-to-copilot-studio-dbb229e1/"
source_url: https://microsoft.github.io/mcscatblog/posts/atlassian-jira-remote-mcp-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Wiring up the Jira (Atlassian) Remote MCP server in Copilot Studio in
  5 mins
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Hazim SharafelDin
source_published_at: '2026-05-15'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie authentifiziere ich Atlassian Remote MCP in Copilot Studio?
  answer: Verwende Dynamic discovery, weil Atlassian die dynamische Clientregistrierung
    nach RFC 7591 statt eines vorab registrierten OAuth-Clients nutzt.
- question: Welche Atlassian-Einstellungen brauche ich vor der Jira-Verbindung mit
    Copilot Studio?
  answer: Aktiviere Atlassian Cloud, Rovo, den Remote-MCP-Server, externen App-Zugriff
    und den Jira- oder Confluence-Produktzugriff des Benutzers.
- question: Warum liefert eine Atlassian-MCP-Verbindung in Copilot Studio später 401-Fehler?
  answer: Manuelle OAuth-Anmeldung kann die Zustimmung abschliessen, aber beim Erneuern
    scheitern, weil Atlassian keinen statischen Client besitzt. Dynamic discovery
    registriert ihn zur Laufzeit.
---

## TL;DR

Atlassian Remote MCP verwendet die dynamische Clientregistrierung nach RFC 7591. Deshalb muss Copilot Studio Dynamic discovery statt manueller OAuth-Anmeldung verwenden. Zuerst Atlassian Cloud, Rovo, Remote MCP, externen App-Zugriff und Produktzugriff aktivieren. Danach MCP-Tool erstellen, Zustimmung erteilen, Verbindung aktivieren, Add and configure auswählen, mit JQL prüfen und veröffentlichen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Für das Atlassian-MCP-Tool Dynamic discovery wählen und Add and configure ausführen, weil das Erstellen der Verbindung allein sie nicht am Agent befestigt.
- Admins/CoE: Atlassian-Voraussetzungen aktiv halten und die Umgebungsverbindung schützen, weil ihr Löschen alle darauf basierenden Agents unbemerkt beeinträchtigen kann.
- Security/Compliance: Richtlinien für externe Apps und Benutzerzustimmungen prüfen, weil strenge Unternehmensrichtlinien den Atlassian-MCP-Client blockieren können.
