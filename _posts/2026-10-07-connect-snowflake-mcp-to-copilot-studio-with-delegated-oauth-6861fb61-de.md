---
title: Snowflake MCP mit delegiertem OAuth an Copilot Studio anbinden
description: Ein praxisnaher Ablauf für Snowflake-MCP in Copilot Studio mit Cortex
  Agent, Entra-OAuth, Connector-Weiterleitungen, Rollen und Endbenutzertests.
date: '2026-10-07T17:10:13Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- environments
- copilot-studio
- power-automate
- ownership
content_type: curated_summary
curation_id: 6861fb61631e88be31003eff
image:
  path: "/assets/img/curated/6861fb61631e88be31003eff.png"
  alt: 'Governance-Karte: Manual OAuth is mandatory for Snowflake MCP. Validate every
    connection before trusting a tool call.'
permalink: "/de/posts/connect-snowflake-mcp-to-copilot-studio-with-delegated-oauth-6861fb61/"
translation_url: "/en/posts/connect-snowflake-mcp-to-copilot-studio-with-delegated-oauth-6861fb61/"
source_url: https://microsoft.github.io/mcscatblog/posts/snowflake-mcp-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Wiring up a Snowflake-managed MCP server in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Hazim SharafelDin, Betty Le
source_published_at: '2026-05-22'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Warum funktioniert die Tool-Erkennung von Snowflake MCP in Copilot Studio,
    aber der Aufruf nicht?
  answer: Jeder Snowflake-MCP-Aufruf läuft über Cortex Agent. Ist Cortex Agent gesperrt,
    kann die Erkennung funktionieren, während die eigentlichen Aufrufe fehlschlagen.
- question: Woher kommt die Weiterleitungs-URI für den Snowflake-MCP-Connector in
    Copilot Studio?
  answer: Copilot Studio erzeugt sie beim Erstellen des benutzerdefinierten Connectors.
    Die URI steht auf dessen Security-Registerkarte und wird in der Entra-Clientanwendung
    eingetragen.
- question: Warum benötigen Maker und Testbereich in Copilot Studio getrennte Snowflake-Verbindungen?
  answer: Die Maker-Verbindung richtet den Agenten ein, der Testbereich läuft jedoch
    als Endbenutzer. Für echte Toolaufrufe müssen beide Verbindungen erfolgreich sein.
animation:
  video: /assets/img/animations/6861fb61631e88be31003eff-de.mp4
  poster: /assets/img/animations/6861fb61631e88be31003eff-de.poster.webp
  width: 800
  height: 450
  alt: "Vier Schritte zeigen die Einrichtung von Snowflake MCP in Copilot Studio: Manual OAuth verwenden, die Connector-Weiterleitungs-URI nach Entra uebernehmen, DEFAULT_SECONDARY_ROLES konfigurieren und dann Maker- und Endbenutzerverbindungen testen."
---

## TL;DR

Snowflake-verwaltetes MCP leitet jeden Aufruf über Cortex Agent. Bei Testkonten mit gesperrtem Cortex werden Tools zwar entdeckt, Aufrufe schlagen jedoch fehl. Copilot Studio benötigt Manual OAuth, da Snowflake keine dynamische Clientregistrierung unterstützt. Die erzeugte Connector-Weiterleitungs-URI muss in Entra hinterlegt werden; Maker- und Endbenutzerverbindungen sind getrennt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Manual OAuth verwenden und die vom benutzerdefinierten Connector erzeugte Weiterleitungs-URI in Entra hinterlegen, weil Snowflake keine dynamische Clientregistrierung unterstützt.
- Admins/CoE: Cortex Agent, die richtige Power-Platform-Umgebung sowie Maker- und Testbereich-Verbindung prüfen, bevor die Integration freigegeben wird.
- Security/Compliance: Entra-UPN und Snowflake-LOGIN\_NAME abgleichen, delegierte Berechtigungen möglichst einschränken, nur erforderliche USAGE-Rechte vergeben und Laufzeitaktivität unter dem delegierten Benutzer prüfen.
