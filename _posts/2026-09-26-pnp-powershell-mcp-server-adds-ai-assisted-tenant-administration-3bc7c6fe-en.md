---
title: PnP PowerShell MCP Server adds AI-assisted tenant administration
description: The preview MCP server lets AI clients run PnP PowerShell across Microsoft
  365 and Power Platform while requiring confirmation for destructive commands.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: en
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
  alt: 'Governance card: AI can operate your tenant. Keep confirmation between prompts
    and changes.'
permalink: "/en/posts/pnp-powershell-mcp-server-adds-ai-assisted-tenant-administration-3bc7c6fe/"
translation_url: "/de/posts/pnp-powershell-mcp-server-adds-ai-assisted-tenant-administration-3bc7c6fe/"
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

The preview PnP PowerShell MCP Server runs locally through a persistent pwsh session and reuses an existing Connect-PnPOnline connection. AI clients can execute tenant commands, search samples and inspect Power Automate flows, while destructive or state-changing operations require confirmation. Sessions expire after 30 minutes of inactivity.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use the server to turn natural-language requests into PnP PowerShell scripts or community-sample adaptations, while recognising that the tool can act on connected tenant resources.
- Admins/CoE: Treat version 0.1.5-beta as an experimental preview, manage named sessions carefully and use the confirmation prompts before allowing state changes.
- Security/Compliance: Verify the existing Connect-PnPOnline identity and review destructive operations because the AI client can drive commands against the connected tenant.
- Leadership/Business: Do not treat the preview as production-ready; its value is faster administration with confirmation controls still in place.
