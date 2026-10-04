---
title: Govern Copilot Studio agents that build Power Platform resources
description: A walkthrough for connecting a community Power Platform MCP server to
  Copilot Studio so an agent can inspect environments and create Power Automate flows
  or Power Apps after approval.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- environments
- copilot-studio
- power-automate
content_type: curated_summary
curation_id: feb7d4f4fc5543041ad1524a
image:
  path: "/assets/img/curated/feb7d4f4fc5543041ad1524a.png"
  alt: 'Governance card: AI can build real Power Platform resources. Inspect, plan,
    and get explicit approval before it acts.'
permalink: "/en/posts/govern-copilot-studio-agents-that-build-power-platform-resources-feb7d4f4/"
translation_url: "/de/posts/govern-copilot-studio-agents-that-build-power-platform-resources-feb7d4f4/"
source_url: https://pnp.github.io/blog/post/build_power_automate_flows__power_apps_using_natural_language_in_copilot_studio_with_power_platform_mcp/
source_site_url: https://pnp.github.io/
source_title: Build Power Automate Flows and Power Apps from Copilot Studio - Just
  by Asking
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Ranjith D
source_published_at: '2026-09-05'
source_type: article
faq:
  - question: "What does a Power Platform MCP server enable for a Copilot Studio agent?"
    answer: "It connects Copilot Studio to Power Platform resources through the Model Context Protocol. The agent can then handle requests in natural language for flows, canvas and model-driven apps, Dataverse operations, Power Pages, connectors and environment administration. The server translates the requests into real API calls and returns the results. For this multi-step work the author recommends the GitHub Copilot harness over the Standard one."
  - question: "Which steps set up the connection to Copilot Studio?"
    answer: "First install locally through npm, start the setup wizard and verify with the doctor command. Second, start the server in HTTP mode with a bearer token set, forward the port publicly through VS Code Dev Tunnels and append the path mcp to the tunnel address. Third, add the server in Copilot Studio as a tool with an API key in the Authorization header."
  - question: "Which permission levels does the server setup offer?"
    answer: "There are presets and a custom choice. Option 1, everyday automation, is the safe default for flows, connections and SharePoint and Excel helpers. Option 6 allows a yes or no per capability, such as connectors, Dataverse tables, tenant administration or Power Pages. Sign-in uses the device code flow, and the Azure CLI is needed for granting the permissions."
  - question: "Which controls apply to agents that create Power Platform resources themselves?"
    answer: "Without instructions to the contrary, the agent may create things without checking first. The sample instructions tell it to review the request, inspect the environment first, propose a short plan and wait for an explicit GO before creating, editing or deleting anything. After the build it re-checks what it actually created, not just what it configured. The author also recommends testing in a non-production environment."
  - question: "Which limits apply to tools and the tunnel in this setup?"
    answer: "An agent can hold at most 128 tools, but Microsoft advises roughly 25 to 30, so enable only the groups you need. The dev tunnel must be public, because private tunnels fail silently when called from Copilot Studio. The local server and tunnel end on sleep, reboot or closing VS Code. Restarting on the same port keeps the same address."
---

## TL;DR

Power Platform MCP connects Copilot Studio to Power Automate, Power Apps, Dataverse and other resources through Streamable HTTP. The walkthrough sets a token-protected endpoint, recommends a non-production environment, limits the agent to needed tools, and instructs it to inspect first, propose a plan, wait for an explicit GO, then verify what it created.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Test agents in a Developer or sandbox environment and require an explicit GO before creating, editing or deleting resources to reduce accidental production impact.
- Admins/CoE: Choose only necessary permissions and tools; Copilot Studio supports up to 128 tools, while the guidance recommends about 25-30 for better results.
- Security/Compliance: Protect the HTTP endpoint with a long token and review the permissions granted through the Entra app consent process.
