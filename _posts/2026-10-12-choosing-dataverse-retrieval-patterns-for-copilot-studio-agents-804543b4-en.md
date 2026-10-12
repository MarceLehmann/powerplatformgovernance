---
title: Choosing Dataverse retrieval patterns for Copilot Studio agents
description: A decision guide compares Knowledge, MCP Server, List Rows, Search Query,
  and Prompt Tool for structured Dataverse data.
date: '2026-10-12T16:57:15Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- copilot-studio
- environments
- governance
content_type: curated_summary
curation_id: 804543b42e339a03acf88084
image:
  path: "/assets/img/curated/804543b42e339a03acf88084.png"
  alt: 'Governance card: Choose retrieval by need. Fast access can still expose too
    much.'
permalink: "/en/posts/choosing-dataverse-retrieval-patterns-for-copilot-studio-agents-804543b4/"
translation_url: "/de/posts/choosing-dataverse-retrieval-patterns-for-copilot-studio-agents-804543b4/"
source_url: https://microsoft.github.io/mcscatblog/posts/dataverse-retrieval-patterns-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: Dataverse Retrieval Patterns for Structured Data in Copilot Studio Agents
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Karima Kanji-Tajdin, Roel Schenk
source_published_at: '2026-04-10'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does Copilot Studio Knowledge handle Dataverse table results?
  answer: Knowledge rewrites questions into structured queries and returns relevant
    top-N matches, rather than every row matching a filter.
- question: Can Dataverse MCP Server access every table in a Copilot Studio environment?
  answer: Yes, Dataverse MCP connects the agent to every table in its environment
    through bundled operations. Unneeded operations should be disabled in configuration.
- question: When should I combine Search Query and List Rows in Copilot Studio?
  answer: Combine them when users need fuzzy discovery first and complete record details
    afterward. Search Query finds candidates, then List Rows retrieves the full row.
---

## TL;DR

Copilot Studio offers five Dataverse retrieval patterns: Knowledge for quick top-N answers, List Rows for exhaustive OData or FetchXML results, MCP Server for broad tool access, Search Query for indexed fuzzy discovery, and Prompt Tool for reasoning over up to 1000 rows.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose List Rows for exact, exhaustive filters and Search Query for typo-tolerant discovery, then combine them when users need both.
- Admins/CoE: Review MCP tool operations and disable create, update, and delete actions when the agent only reads Dataverse.
- Security/Compliance: Treat MCP as one DLP connector, because DLP cannot separately allow or block individual MCP operations.
- Leadership/Business: Match the retrieval pattern to the business risk, dataset size, authentication mode, and need for complete results.
