---
title: Call Microsoft Copilot Harness Agents from Copilot Studio via MCP and A2A
description: Configure Copilot Studio agents to call harness agents over MCP or A2A
  with Entra sign-in, on-behalf-of authentication, sharing and security roles. Both
  channels are in preview.
date: '2026-11-12T10:41:04Z'
author: governance_editorial
lang: en
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
  alt: 'Governance card: Every agent call runs as the signed-in user. The connector
    secret only swaps the token.'
permalink: "/en/posts/call-microsoft-copilot-harness-agents-from-copilot-studio-via-mcp-and-b585c5ef/"
translation_url: "/de/posts/call-microsoft-copilot-harness-agents-from-copilot-studio-via-mcp-and-b585c5ef/"
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
- question: How do I call a Microsoft Copilot harness agent from a standard Copilot
    Studio agent?
  answer: Add it as a Model Context Protocol tool with Manual OAuth, the delegated
    permission MCS.InvokeAsMCP, a client secret and a redirect URI. Only the called
    agent needs an Early release environment.
- question: Why do other users fail to connect to my Copilot Studio MCP tool?
  answer: Usually sharing is missing. Share the custom connector with Can view, share
    the called agent with the user, and assign a security role such as Basic User
    in a non-default environment.
- question: Does MCP consent cover A2A for Copilot Studio agents?
  answer: No. User or admin consent is granted per protocol, so MCS.InvokeAsMCP and
    MCS.InvokeAsA2A each need their own consent, and admin consent is required for
    the on-behalf-of token swap.
---

## TL;DR

Published Microsoft Copilot harness agents in an Early release environment expose MCP and A2A endpoints that Copilot Studio agents can call. The setup needs an app registration with the delegated permission MCS.InvokeAsMCP or MCS.InvokeAsA2A, a client secret, a redirect URI and Manual OAuth. On-behalf-of sign-in lets users consent once in the conversation; sharing the agent, connector and a security role decides whether they get answers.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Write a specific server description when adding the MCP tool or A2A agent, since Copilot Studio routes on name and description; editing the connector later does not update it, so remove and re-add the tool to change it.
- Admins/CoE: The channels are in preview; plan the called agent in an Early release environment, admin consent for on-behalf-of token swaps, and sharing of agent, connector and a security role before other users can connect.
- Security/Compliance: Every call passes through Microsoft Entra as the signed-in user, and MCP and A2A each need their own consent, so review both delegated permissions separately.
- Leadership/Business: Existing standard agents can use new harness agents without being rebuilt, and credits are consumed in the called agent&\#39;s environment.
