---
title: Connect Atlassian Jira Remote MCP to Copilot Studio
description: Use Dynamic discovery, enable Atlassian prerequisites, create the environment
  connection, verify with JQL, and publish the agent.
date: '2026-10-08T16:51:35Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- environments
- copilot-studio
- ownership
content_type: curated_summary
curation_id: dbb229e11322afc7aa5b89e9
image:
  path: "/assets/img/curated/dbb229e11322afc7aa5b89e9.png"
  alt: 'Governance card: Dynamic discovery prevents a fragile Atlassian OAuth setup.
    Use the server''s registration model.'
permalink: "/en/posts/connect-atlassian-jira-remote-mcp-to-copilot-studio-dbb229e1/"
translation_url: "/de/posts/connect-atlassian-jira-remote-mcp-to-copilot-studio-dbb229e1/"
source_url: https://microsoft.github.io/mcscatblog/posts/atlassian-jira-remote-mcp-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Wiring up the Jira (Atlassian) Remote MCP server in Copilot Studio in
  5 mins
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Hazim SharafelDin
source_published_at: '2026-05-15'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I authenticate Atlassian Remote MCP in Copilot Studio?
  answer: Use Dynamic discovery because Atlassian uses RFC 7591 Dynamic Client Registration
    instead of a pre-registered OAuth client.
- question: Which Atlassian settings must be enabled before adding Jira to Copilot
    Studio?
  answer: Enable Atlassian Cloud, Rovo, Remote MCP, external app access, and the user's
    Jira or Confluence product access before connecting.
- question: Why does an Atlassian MCP connection in Copilot Studio return 401 errors
    later?
  answer: Manual OAuth can pass consent but fail during refresh because Atlassian
    has no static client. Dynamic discovery handles the runtime registration.
animation:
  video: /assets/img/animations/dbb229e11322afc7aa5b89e9-en.mp4
  poster: /assets/img/animations/dbb229e11322afc7aa5b89e9-en.poster.webp
  width: 800
  height: 450
  alt: "Four stages: enable the Atlassian prerequisites, create the MCP tool with Dynamic discovery, activate the connection and select Add and configure, then verify with JQL and publish."
---

## TL;DR

Atlassian Remote MCP uses RFC 7591 Dynamic Client Registration, so Copilot Studio must use Dynamic discovery rather than Manual OAuth. Enable Atlassian Cloud, Rovo, Remote MCP, external app access, and product access first. Then create the MCP tool, consent, activate the connection, select Add and configure, verify with JQL, and publish.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: select Dynamic discovery for the Atlassian MCP tool and complete Add and configure, because creating the connection alone does not attach it to the agent.
- Admins/CoE: keep the Atlassian prerequisites enabled and protect the environment connection, because deleting it can silently break every agent using it.
- Security/Compliance: review external app policies and user consent requirements, because strict enterprise policies may block the Atlassian MCP client.
