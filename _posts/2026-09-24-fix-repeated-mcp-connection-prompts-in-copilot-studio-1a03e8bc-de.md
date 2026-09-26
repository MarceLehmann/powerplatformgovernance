---
title: Wiederholte MCP-Verbindungsaufforderungen in Copilot Studio beheben
description: Ein MCP-Tool in Copilot Studio kann trotz bestehender Verbindung wiederholt
  Anmeldedaten anfordern, wenn die Einstellung für Endbenutzer-Anmeldedaten verwendet
  wird.
date: '2026-09-24T02:53:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
content_type: curated_summary
curation_id: 1a03e8bcc33052bfb9777a7b
permalink: "/de/posts/fix-repeated-mcp-connection-prompts-in-copilot-studio-1a03e8bc/"
translation_url: "/en/posts/fix-repeated-mcp-connection-prompts-in-copilot-studio-1a03e8bc/"
source_url: https://www.itaintboring.com/copilot-studio/copilot-studio-agent-keeps-asking-you-to-connect-to-an-mcp-server-even-though-you-are-apparently-connected-check-this-setting/
source_site_url: https://www.itaintboring.com/
source_title: Copilot Studio agent keeps asking you to connect to an MCP server? Check
  this setting
source_name: It Ain't Boring
source_language: en
source_language_name: English
source_author: Alex Shlega
source_published_at: '2025-11-08'
---
## TL;DR

In Copilot Studio zeigte ein MCP-Tool trotz aktiver Verbindung weiterhin „Let’s get you connected first“, weil „Credentials to use“ auf „End user credentials“ stand. Der Wechsel zu „Maker-provided credentials“ beseitigte die Aufforderung und brachte den Test-Agenten zum Laufen. Zusätzliche Verbindungen und API-Key-Authentifizierung lösten das Problem nicht.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: bei wiederholten Verbindungsaufforderungen des MCP-Tools die Einstellung „Credentials to use" prüfen, auch wenn im Verbindungsmanager bereits eine aktive Verbindung angezeigt wird.
- Security/Compliance: bewerten, ob vom Maker bereitgestellte Anmeldedaten für den jeweiligen Connector und Anwendungsfall geeignet sind, da der Agent dann keine Verbindung jedes einzelnen Benutzers mehr verlangt; Zugriffsgrenzen werden in der Quelle nicht erläutert.
