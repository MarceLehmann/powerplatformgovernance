---
title: PnP PowerShell MCP Server ermöglicht KI-gestützte Mandantenverwaltung
description: Der MCP-Server in der Vorschau lässt KI-Clients PnP PowerShell für Microsoft
  365 und Power Platform ausführen und verlangt Bestätigungen für destruktive Befehle.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- power-automate
- environments
content_type: curated_summary
curation_id: 3bc7c6fe37fd417b3ee585e7
image:
  path: "/assets/img/curated/3bc7c6fe37fd417b3ee585e7.png"
  alt: 'Governance-Karte: AI can operate your tenant. Keep confirmation between prompts
    and changes.'
permalink: "/de/posts/pnp-powershell-mcp-server-adds-ai-assisted-tenant-administration-3bc7c6fe/"
translation_url: "/en/posts/pnp-powershell-mcp-server-adds-ai-assisted-tenant-administration-3bc7c6fe/"
source_url: https://pnp.github.io/blog/pnp-powershell/pnp-powershell-mcp-server/
source_site_url: https://pnp.github.io/
source_title: Introducing the PnP PowerShell MCP Server
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Nishkalank Bezawada
source_published_at: '2026-08-24'
source_type: article
---

## TL;DR

Der PnP PowerShell MCP Server in der Vorschau läuft lokal über eine dauerhafte pwsh-Sitzung und verwendet eine bestehende Connect-PnPOnline-Verbindung. KI-Clients können Mandantenbefehle ausführen, Beispiele suchen und Power-Automate-Flows prüfen. Destruktive oder zustandsändernde Vorgänge erfordern eine Bestätigung. Sitzungen enden nach 30 Minuten Inaktivität.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt natürliche Sprache, um PnP-PowerShell-Skripte oder angepasste Community-Beispiele zu erstellen, und beachtet, dass das Tool verbundene Mandantenressourcen ändern kann.
- Admins/CoE: Behandelt Version 0.1.5-beta als experimentelle Vorschau, verwaltet benannte Sitzungen sorgfältig und prüft Bestätigungsdialoge vor Zustandsänderungen.
- Security/Compliance: Prüft die verwendete Connect-PnPOnline-Identität und destruktive Vorgänge, da der KI-Client Befehle im verbundenen Mandanten steuern kann.
- Leadership/Business: Setzt die Vorschau nicht produktiv ein; ihr Nutzen liegt in schnellerer Verwaltung mit weiterhin erforderlichen Bestätigungen.
