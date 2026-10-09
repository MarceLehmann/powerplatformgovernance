---
title: Use Dynamic Inputs for Structured Queries in Copilot Studio
description: Configure a Copilot Studio connector tool with dynamic OData filters
  to query SharePoint lists and other structured data from natural-language requests.
date: '2026-10-09T17:02:55Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- dataverse
- power-automate
content_type: curated_summary
curation_id: e0ad3c3f522dac3e64838e49
image:
  path: "/assets/img/curated/e0ad3c3f522dac3e64838e49.png"
  alt: 'Governance card: Dynamic inputs turn natural language into precise structured
    queries.'
permalink: "/en/posts/use-dynamic-inputs-for-structured-queries-in-copilot-studio-e0ad3c3f/"
translation_url: "/de/posts/use-dynamic-inputs-for-structured-queries-in-copilot-studio-e0ad3c3f/"
source_url: https://microsoft.github.io/mcscatblog/posts/tool-inputs-sharepoint-list/
source_site_url: https://microsoft.github.io/
source_title: Get Answers Over SharePoint Lists and Other Structured Data, Turning
  Natural Language into Dynamic Queries in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Karima Kanji-Tajdin
source_published_at: '2026-04-30'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How can Copilot Studio generate OData filters for a SharePoint list?
  answer: Make the SharePoint Get Items $filter parameter a dynamic input and describe
    columns, data types, valid values and example queries.
- question: Which SharePoint Get Items settings should remain fixed in Copilot Studio?
  answer: Keep the site address, list name, view and $top fixed so the tool targets
    the intended list and limits returned items.
- question: When should a Copilot Studio agent use a dynamic schema or custom NL2Query
    prompt?
  answer: Use a dynamic schema when columns change or expand, and a custom prompt
    when schema explanations and business rules overwhelm orchestration instructions.
---

## TL;DR

In Copilot Studio, configure SharePoint Get Items with fixed site, list, view and $top inputs, then make $filter dynamic. A detailed input description lets the orchestrator turn natural-language requests into OData filters, retrieve narrower results, and generate conversational answers without Power Automate flows or custom code.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Describe column names, data types, valid values and example OData queries in the dynamic input so the orchestrator can generate better filters.
- Admins/CoE: Keep $top sensible and require clarification for vague requests, because broad result sets can be truncated, glossed over or hallucinated.
- Security/Compliance: Review whether connector tools, Knowledge and Work IQ match the required retrieval control, because configured tools provide more control over columns and returned rows.
- Leadership/Business: Match the architecture to complexity, from static schemas to dynamic schema files or a dedicated custom prompt as lists evolve.
