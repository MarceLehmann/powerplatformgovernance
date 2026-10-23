---
title: Add Custom APIs and MCP Servers to Declarative Agents
description: A video tutorial shows how to connect Microsoft 365 Copilot declarative
  agents to custom HTTP APIs and MCP servers despite current Agent builder UI limits.
date: '2026-10-23T17:13:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
content_type: curated_summary
curation_id: c8032fc1c431471c03c28877
image:
  path: "/assets/img/curated/c8032fc1c431471c03c28877.png"
  alt: 'Governance card: Declarative agents can reach custom APIs and MCP servers
    beyond the Agent builder UI.'
permalink: "/en/posts/add-custom-apis-and-mcp-servers-to-declarative-agents-c8032fc1/"
translation_url: "/de/posts/add-custom-apis-and-mcp-servers-to-declarative-agents-c8032fc1/"
source_url: https://microsoft.github.io/mcscatblog/posts/custom-api-and-mcp-in-declarative-agents/
source_site_url: https://microsoft.github.io/
source_title: 'VIDEO TUTORIAL: Add Custom APIs and MCP Servers to Declarative Agents'
source_name: Microsoft Copilot Studio CAT
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2025-12-10'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How can a Microsoft 365 Copilot declarative agent call a custom HTTP API?
  answer: Create the declarative agent, introduce the custom HTTP API, and test the
    complete flow so the agent calls the backend logic.
- question: Can Agent builder directly add MCP servers to declarative agents?
  answer: No. The Agent builder UI cannot directly add MCP servers, so the tutorial
    shows an alternative wiring approach.
- question: Does the declarative agent tutorial support PAYG with Copilot Credits?
  answer: Yes. The walkthrough says creating the plain declarative agent is possible
    with PAYG and Copilot Credits.
animation:
  src: /assets/img/animations/c8032fc1c431471c03c28877-en.gif
  poster: /assets/img/animations/c8032fc1c431471c03c28877-en.poster.png
  width: 800
  height: 450
  alt: "Three steps show a declarative agent setup: create a plain Microsoft 365 Copilot declarative agent, connect a custom HTTP API or MCP server, then test the live flow to call backend logic."
---

## TL;DR

The tutorial shows how to create a declarative agent for Microsoft 365 Copilot, introduce a custom HTTP API, and test the agent calling backend logic. It also covers MCP servers, with PAYG and Copilot Credits possible, although Agent builder cannot add custom APIs or MCP servers directly.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Build a plain declarative agent, connect the custom HTTP API or MCP server, and test the complete flow live before relying on it.
- Admins/CoE: Account for the current Agent builder limitation, because custom HTTP APIs and MCP servers cannot be added directly through its UI.
- Leadership/Business: Use the repeatable setup when agents need to reach backend logic, while recognising that the source presents this as a practical tutorial rather than theory.
