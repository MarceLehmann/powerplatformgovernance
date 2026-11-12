---
title: 'Copilot Studio: Harness Agents über MCP und A2A aufrufen'
description: 'Einrichtung von MCP- und A2A-Aufrufen zwischen Copilot Studio Agenten:
  App-Registrierung, manuelles OAuth, On-behalf-of Anmeldung, Freigaben und Sicherheitsrollen,
  alles im Preview Status.'
date: '2026-11-12T10:41:04Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- environments
- ownership
content_type: curated_summary
curation_id: b585c5eff365704bda9d9fbf
image:
  path: "/assets/img/curated/b585c5eff365704bda9d9fbf.png"
  alt: 'Governance-Karte: Every agent call runs as the signed-in user. The connector
    secret only swaps the token.'
permalink: "/de/posts/call-microsoft-copilot-harness-agents-from-copilot-studio-via-mcp-and-b585c5ef/"
translation_url: "/en/posts/call-microsoft-copilot-harness-agents-from-copilot-studio-via-mcp-and-b585c5ef/"
source_url: https://microsoft.github.io/mcscatblog/posts/call-ghcp-harness-agents-mcp-a2a/
source_site_url: https://microsoft.github.io/
source_title: Call Microsoft Copilot Harness Agents from Other Copilot Studio Agents
  with MCP and A2A
source_name: The Custom Engine (Microsoft Copilot Studio CAT team blog)
source_language: en
source_language_name: English
source_author: Shaji Sivaraman
source_published_at: '2026-11-12'
source_updated_at: '2026-11-12'
source_type: article
faq:
- question: Wie rufe ich einen Microsoft Copilot Harness Agent aus einem Standard
    Copilot Studio Agent auf?
  answer: Füge ihn als Model Context Protocol Werkzeug mit manuellem OAuth, der Berechtigung
    MCS.InvokeAsMCP, einem Client Secret und einer Redirect URI hinzu. Nur der aufgerufene
    Agent braucht eine Early Release Umgebung.
- question: Warum können andere Nutzer keine Verbindung zu meinem MCP Werkzeug in
    Copilot Studio aufbauen?
  answer: Meist fehlen Freigaben. Teile den Custom Connector mit Can view, gib den
    aufgerufenen Agenten frei und weise in einer Nicht Standard Umgebung eine Sicherheitsrolle
    wie Basic User zu.
- question: Deckt die Zustimmung für MCP auch A2A bei Copilot Studio Agenten ab?
  answer: Nein. Jedes Protokoll braucht eigene Zustimmungen, also MCS.InvokeAsMCP
    und MCS.InvokeAsA2A getrennt, und für den On-behalf-of Tokenaustausch ist Admin
    Zustimmung nötig.
animation:
  video: /assets/img/animations/b585c5eff365704bda9d9fbf-de.mp4
  poster: /assets/img/animations/b585c5eff365704bda9d9fbf-de.poster.webp
  width: 800
  height: 450
  alt: "Abfolge, wie ein Copilot Studio Agent einen veroeffentlichten Harness Agent aufruft: MCP oder A2A mit manuellem OAuth hinzufuegen, App Details setzen, mit On-behalf-of Zustimmung anmelden, dann Connector und Agent freigeben."
---

## TL;DR

Veröffentlichte Microsoft Copilot Harness Agents in einer Early Release Umgebung stellen MCP- und A2A-Endpunkte bereit, die Copilot Studio Agenten aufrufen können. Die Einrichtung braucht eine App-Registrierung mit der delegierten Berechtigung MCS.InvokeAsMCP oder MCS.InvokeAsA2A, ein Client Secret, eine Redirect URI und manuelles OAuth. On-behalf-of Anmeldung erlaubt Nutzern, einmal im Chat zuzustimmen; Freigaben und eine Sicherheitsrolle entscheiden, ob andere Nutzer Antworten erhalten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Schreibe beim Hinzufügen des MCP Tools oder A2A Agents eine konkrete Beschreibung, denn Copilot Studio routet über Name und Beschreibung; eine spätere Änderung am Connector greift nicht, das Werkzeug muss neu angelegt werden.
- Admins/CoE: Die Kanäle sind im Preview Status; plane den aufgerufenen Agenten in einer Early Release Umgebung, Admin Zustimmung für den On-behalf-of Tokenaustausch sowie Freigaben von Agent, Connector und Sicherheitsrolle ein.
- Security/Compliance: Jeder Aufruf läuft über Microsoft Entra als angemeldeter Nutzer, und MCP und A2A brauchen jeweils eigene Zustimmungen, prüfe beide delegierten Berechtigungen getrennt.
- Leadership/Business: Bestehende Standard Agenten können neue Harness Agents ohne Neubau nutzen, Credits werden in der Umgebung des aufgerufenen Agenten verbraucht.
