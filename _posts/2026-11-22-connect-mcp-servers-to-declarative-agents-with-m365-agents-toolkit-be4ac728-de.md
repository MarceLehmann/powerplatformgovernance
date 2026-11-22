---
title: MCP-Server mit dem M365 Agents Toolkit an deklarative Agents anbinden
description: 'Matthew Devaney zeigt, wie drei MCP-Server an deklarative Agents angebunden
  werden: Microsoft Learn ohne Anmeldung, Atlassian mit dynamischem OAuth, GitHub
  mit statischer Registrierung.'
date: '2026-11-22T22:40:22Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- copilot-studio
content_type: curated_summary
curation_id: be4ac728b4535c1aea1aa253
image:
  path: "/assets/img/curated/be4ac728b4535c1aea1aa253.png"
  alt: 'Governance-Karte: An MCP server is only as safe as its sign-in. Pick the auth
    type before the agent ships.'
permalink: "/de/posts/connect-mcp-servers-to-declarative-agents-with-m365-agents-toolkit-be4ac728/"
translation_url: "/en/posts/connect-mcp-servers-to-declarative-agents-with-m365-agents-toolkit-be4ac728/"
source_url: https://www.matthewdevaney.com/m365-agents-toolkit-connect-mcp-server-to-declarative-agent/
source_site_url: https://www.matthewdevaney.com/
source_title: 'M365 Agents Toolkit: Connect MCP Server To Declarative Agent'
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-11-22'
source_type: article
faq:
- question: Welcher MCP-Server funktioniert ohne Authentifizierung für deklarative
    Agents?
  answer: Der Microsoft Learn MCP-Server braucht keine Anmeldung. Sein Endpunkt learn.microsoft.com/api/mcp
    liefert Agents aktuelle Microsoft-Dokumentation und Codebeispiele.
- question: Was ist der Unterschied zwischen dynamischer und statischer OAuth-Registrierung
    bei MCP-Servern?
  answer: Bei dynamischer Registrierung richtet Atlassian OAuth während der Anmeldung
    ein. Bei statischer Registrierung, etwa für GitHub, legen Sie selbst eine OAuth-App
    an und hinterlegen Client-ID, Geheimnis und Scopes.
- question: Welche OAuth-Scopes braucht die GitHub-App für den GitHub MCP-Server?
  answer: Verwendet werden die Scopes repo, read:org und read:user. Sie bestimmen,
    worauf die OAuth-App beim GitHub MCP-Server zugreifen darf, etwa Repositorys lesen.
---

## TL;DR

Mit dem M365 Agents Toolkit lassen sich deklarative Agents an MCP-Server anbinden und aus VS Code provisionieren. Der Microsoft Learn MCP-Server kommt ohne Authentifizierung aus, Atlassian verlangt OAuth mit dynamischer Registrierung und eine Benutzeranmeldung, GitHub eine registrierte OAuth-App mit Client-ID, Client-Geheimnis und Scopes wie repo und read:org. Getestet werden die Agents in M365 Copilot.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Beim Erstellen deklarativer Agents den Authentifizierungstyp passend zum Dienst wählen: keine Anmeldung für Microsoft Learn, dynamisches OAuth für Atlassian, statisches OAuth mit Client-ID, Geheimnis und Scopes für GitHub.
- Admins/CoE: Nachvollziehen, welche MCP-Endpunkte und Scopes Maker in Agents einbinden, denn provisionierte Agents können externe Systeme wie JIRA und GitHub lesen und beschreiben.
- Security/Compliance: OAuth-Scopes wie repo und read:org legen fest, worauf ein Agent zugreifen darf; OAuth-App-Registrierungen prüfen und Client-Geheimnisse kontrolliert behandeln.
