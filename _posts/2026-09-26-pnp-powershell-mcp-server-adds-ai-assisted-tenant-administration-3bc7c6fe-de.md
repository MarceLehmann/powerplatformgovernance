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
faq:
  - question: "Meldet sich der PnP PowerShell MCP Server selbst bei Microsoft 365 an?"
    answer: "Nein. Der Server meldet dich nie von sich aus an, sondern nutzt die Verbindung, die du bereits mit Connect-PnPOnline aufgebaut hast. Er läuft lokal als stdio-Server auf deinem Rechner und schickt laut Artikel keine Tenant-Daten nach aussen. Die Befehle laufen in einer dauerhaften PowerShell-Sitzung, du verbindest dich also nur einmal."
  - question: "Wie installiere ich den PnP PowerShell MCP Server?"
    answer: "Dafür gibt es zwei Wege. Entweder installierst du ihn mit dotnet tool install als globales .NET-Tool, dann liegt die Datei pnp-powershell-mcp-server im Pfad, oder du startest ihn bei Bedarf über dnx, sofern das .NET 10 SDK vorhanden ist. Die Beispiele nutzen Version 0.1.5-beta. Als Clients nennt der Beitrag unter anderem GitHub Copilot, Claude Code, Claude Desktop und Cursor."
  - question: "Was passiert, wenn der PnP PowerShell MCP Server einen zerstörenden Befehl ausführen will?"
    answer: "Dann fragt er zuerst bei dir nach. Jeder Befehl trägt Hinweise, ob er nur liest, wiederholbar ist oder Daten zerstören kann. Harmlose Befehle lassen sich so automatisch freigeben, riskante brauchen weiterhin deine Bestätigung. Der Artikel zeigt dazu eine Beispielabfrage. Das ist wichtig, weil das Werkzeug direkt auf Ressourcen im Tenant arbeitet."
  - question: "Wie lange lebt eine Sitzung im PnP PowerShell MCP Server und kann ich zwei Tenants parallel bedienen?"
    answer: "Eine Sitzung läuft nach 30 Minuten ohne Aktivität ab, ein noch laufender Befehl hält sie aber am Leben. Pro Sitzung wird immer nur ein Befehl bearbeitet, weitere Aufrufe warten in der Schlange. Für zwei Tenants gleichzeitig vergibst du jeder Verbindung einen eigenen Sitzungsnamen. Ein eigener Befehl verwirft eine Sitzung samt Verbindung und Variablen."
  - question: "Ist der PnP PowerShell MCP Server schon für den Produktivbetrieb geeignet?"
    answer: "Nein. Es handelt sich ausdrücklich um eine frühe Beta, die sich noch verändert, und die Autoren schreiben selbst, dass sie noch nicht produktionsreif ist. Sie laden die Community ein, sie auszuprobieren, an ihre Grenzen zu bringen und mitzugestalten: Meldet, was kaputtgeht, berichtet Fehler, teilt Ideen für Funktionen und zeigt, was ihr damit baut."
---

## TL;DR

Der PnP PowerShell MCP Server in der Vorschau läuft lokal über eine dauerhafte pwsh-Sitzung und verwendet eine bestehende Connect-PnPOnline-Verbindung. KI-Clients können Mandantenbefehle ausführen, Beispiele suchen und Power-Automate-Flows prüfen. Destruktive oder zustandsändernde Vorgänge erfordern eine Bestätigung. Sitzungen enden nach 30 Minuten Inaktivität.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt natürliche Sprache, um PnP-PowerShell-Skripte oder angepasste Community-Beispiele zu erstellen, und beachtet, dass das Tool verbundene Mandantenressourcen ändern kann.
- Admins/CoE: Behandelt Version 0.1.5-beta als experimentelle Vorschau, verwaltet benannte Sitzungen sorgfältig und prüft Bestätigungsdialoge vor Zustandsänderungen.
- Security/Compliance: Prüft die verwendete Connect-PnPOnline-Identität und destruktive Vorgänge, da der KI-Client Befehle im verbundenen Mandanten steuern kann.
- Leadership/Business: Setzt die Vorschau nicht produktiv ein; ihr Nutzen liegt in schnellerer Verwaltung mit weiterhin erforderlichen Bestätigungen.
