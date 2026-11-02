---
title: Connect Snowflake MCP to Copilot Studio with delegated OAuth
description: A practical setup for Snowflake-managed MCP in Copilot Studio, covering
  Cortex Agent, Entra delegated OAuth, custom connector redirects, roles and end-user
  testing.
date: '2026-10-07T17:10:13Z'
author: governance_editorial
lang: en
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
  alt: 'Governance card: Manual OAuth is mandatory for Snowflake MCP. Validate every
    connection before trusting a tool call.'
permalink: "/en/posts/connect-snowflake-mcp-to-copilot-studio-with-delegated-oauth-6861fb61/"
translation_url: "/de/posts/connect-snowflake-mcp-to-copilot-studio-with-delegated-oauth-6861fb61/"
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
- question: Why does Snowflake MCP discovery work but tool execution fail in Copilot
    Studio?
  answer: Snowflake-managed MCP routes every invocation through Cortex Agent. If Cortex
    Agent is blocked, especially on standard trials, discovery can succeed while calls
    fail.
- question: Where does the Copilot Studio Snowflake MCP redirect URI come from?
  answer: Copilot Studio generates the redirect URI when it creates the custom connector.
    Copy it from the connector Security tab and add it to the Entra client app.
- question: Why are Copilot Studio maker and test-pane Snowflake connections separate?
  answer: The maker connection configures the agent, while the test pane runs as the
    end user. Both connections must succeed for end-to-end tool calls.
animation:
  video: /assets/img/animations/6861fb61631e88be31003eff-en.mp4
  poster: /assets/img/animations/6861fb61631e88be31003eff-en.poster.webp
  width: 800
  height: 450
  alt: "Four stages show the setup for Snowflake MCP in Copilot Studio: use Manual OAuth, copy the custom connector redirect URI to Entra, configure DEFAULT_SECONDARY_ROLES, then test maker and end-user connections."
---

## TL;DR

Snowflake-managed MCP calls always pass through Cortex Agent, so trial accounts blocked from Cortex can discover tools but cannot invoke them. Copilot Studio must use Manual OAuth because Snowflake lacks Dynamic Client Registration. Add the generated custom connector redirect URI to Entra, configure DEFAULT\_SECONDARY\_ROLES, and test both maker and end-user connections.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use Manual OAuth and verify the generated custom connector redirect URI in Entra, because Snowflake does not support Dynamic Client Registration and the URI exists only after connector creation.
- Admins/CoE: Confirm Cortex Agent is enabled, the correct Power Platform environment is used, and both maker and test-pane connections succeed before approving the integration.
- Security/Compliance: Match the Entra UPN to Snowflake LOGIN\_NAME, restrict delegated scopes where possible, grant only required USAGE permissions, and verify runtime activity under the delegated user.
