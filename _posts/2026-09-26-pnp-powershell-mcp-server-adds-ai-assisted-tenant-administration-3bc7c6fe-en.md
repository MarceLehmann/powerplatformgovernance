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
faq:
  - question: "Does the PnP PowerShell MCP Server sign in to Microsoft 365 for me?"
    answer: "No. The server never signs in on its own and reuses the connection you already created with Connect-PnPOnline. It runs locally as a stdio server on your machine and, according to the article, does not send tenant data to external services. Commands run in a persistent PowerShell session, so you connect once and keep working."
  - question: "How do I install the PnP PowerShell MCP Server?"
    answer: "There are two routes. You can install it as a .NET global tool with dotnet tool install, which puts the pnp-powershell-mcp-server executable on your PATH, or you can start it on demand through dnx if the .NET 10 SDK is present. Both examples use version 0.1.5-beta, and clients such as GitHub Copilot, Claude Code, Claude Desktop and Cursor can use it."
  - question: "What happens when the PnP PowerShell MCP Server wants to run a destructive command?"
    answer: "It asks for your confirmation before anything runs. Every command carries hints that mark it as read-only, idempotent or destructive, so safe operations can be approved automatically while risky ones still need your decision. The article shows an example of such a confirmation prompt, which matters because the tool acts directly on tenant resources."
  - question: "How long does a PnP PowerShell MCP Server session last, and can I work on two tenants at once?"
    answer: "A session expires after 30 minutes without activity, although a command that is still running keeps it alive. Each session handles one command at a time and queues further calls. To work on two tenants in parallel, give every connection its own session name. A dedicated reset command discards a session together with its connection and variables."
  - question: "Is the PnP PowerShell MCP Server ready for production use?"
    answer: "No. The release is an explicit early beta that is still evolving, and the authors state that it is not production-ready yet. They invite the community to try it out, push it to its limits and help shape it: tell them what breaks, report bugs, share feature ideas and show what you build with it."
---

## TL;DR

The preview PnP PowerShell MCP Server runs locally through a persistent pwsh session and reuses an existing Connect-PnPOnline connection. AI clients can execute tenant commands, search samples and inspect Power Automate flows, while destructive or state-changing operations require confirmation. Sessions expire after 30 minutes of inactivity.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use the server to turn natural-language requests into PnP PowerShell scripts or community-sample adaptations, while recognising that the tool can act on connected tenant resources.
- Admins/CoE: Treat version 0.1.5-beta as an experimental preview, manage named sessions carefully and use the confirmation prompts before allowing state changes.
- Security/Compliance: Verify the existing Connect-PnPOnline identity and review destructive operations because the AI client can drive commands against the connected tenant.
- Leadership/Business: Do not treat the preview as production-ready; its value is faster administration with confirmation controls still in place.
