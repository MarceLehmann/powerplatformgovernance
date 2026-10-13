---
title: MCP and A2A governance starts with blocking custom connectors
description: Copilot Studio MCP and A2A connections create custom connectors, so Power
  Platform admins should block them by default and allow only approved URL patterns.
date: '2026-10-13T04:37:58Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dlp
- governance
- copilot-studio
- environments
content_type: curated_summary
curation_id: '08d8f5e66da14fc1dcb6d064'
image:
  path: "/assets/img/curated/08d8f5e66da14fc1dcb6d064.png"
  alt: 'Governance card: Ignore means open by default. Block custom connectors before
    agents reach unknown servers.'
permalink: "/en/posts/mcp-and-a2a-governance-starts-with-blocking-custom-connectors-08d8f5e6/"
translation_url: "/de/posts/mcp-and-a2a-governance-starts-with-blocking-custom-connectors-08d8f5e6/"
source_url: https://www.karlex.fi/mcp-vs-a2a-the-only-control-you-have-is-the-one-most-admins-leave-on-ignore/
source_site_url: https://www.karlex.fi/
source_title: 'MCP vs A2A: the only control you have is the one most admins leave
  on Ignore'
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-13'
source_type: article
faq:
- question: What does Ignore mean for custom connectors in a Power Platform data policy?
  answer: Ignore allows custom connectors by default. Set the default rule to Blocked
    and add only the URL patterns that are needed.
- question: How can Power Platform admins identify the real server behind a custom
    MCP connection?
  answer: Open the custom connector in the solution and inspect its OpenAPI definition.
    The actual MCP server host appears there, regardless of the connection name.
- question: How quickly does disabling a dangerous MCP or A2A connection take effect?
  answer: Disabling can take up to 48 hours to stop use. In an emergency, stop the
    agent for at least one hour.
---

## TL;DR

Copilot Studio MCP and A2A connections create custom connectors in the Power Platform environment. In data policies, setting custom connectors to Ignore allows them by default. Admins should set the default rule to Blocked, permit only required URL patterns, inspect each connector’s OpenAPI definition, and maintain an emergency way to stop agents.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Treat every MCP or A2A URL as an external dependency and expect admin approval, because each connection creates a custom connector.
- Admins/CoE: Set custom connector policy defaults to Blocked and allow only required URL patterns, then inspect OpenAPI definitions to identify the real host.
- Security/Compliance: Review returned payloads, permissions, credentials and external data handling, because MCP servers can be black boxes and sensitivity labels do not travel externally.
- Leadership/Business: Require documented stop procedures for every agent, because disabling a connection can take up to 48 hours to take effect.
