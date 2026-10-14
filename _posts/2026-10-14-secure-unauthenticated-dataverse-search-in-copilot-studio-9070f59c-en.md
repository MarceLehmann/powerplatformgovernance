---
title: Secure unauthenticated Dataverse search in Copilot Studio
description: Use Dataverse searchQuery with maker credentials, tightly scoped tables
  and columns, and a read-only application user for public-facing agents.
date: '2026-10-14T17:00:04Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- copilot-studio
- power-apps
- environments
content_type: curated_summary
curation_id: 9070f59cbcc4d13d157ec145
image:
  path: "/assets/img/curated/9070f59cbcc4d13d157ec145.png"
  alt: 'Governance card: Unauthenticated search exposes everything the service principal
    can read.'
permalink: "/en/posts/secure-unauthenticated-dataverse-search-in-copilot-studio-9070f59c/"
translation_url: "/de/posts/secure-unauthenticated-dataverse-search-in-copilot-studio-9070f59c/"
source_url: https://microsoft.github.io/mcscatblog/posts/dataverse-search-in-copilot-studio-unauthenticated-structured-data/
source_site_url: https://microsoft.github.io/
source_title: 'Structured Data with Zero User Auth: Dataverse searchQuery in Copilot
  Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Karima Kanji-Tajdin
source_published_at: '2026-03-20'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does Copilot Studio searchQuery work without a user sign-in?
  answer: It uses maker-provided Dataverse connector credentials backed by a service
    principal. The agent calls searchQuery under that identity rather than the end
    user's identity.
- question: Which Dataverse permissions control unauthenticated searchQuery results?
  answer: The application user's Dataverse security role controls accessible data.
    It should have read permissions only for tables and columns that are safe to expose
    publicly.
- question: Why does a Copilot Studio searchQuery tool return zero Dataverse results?
  answer: Dataverse Search or table indexing may be missing, or the entities JSON
    can contain wrong logical names. These configuration failures can produce no results
    without an error message.
---

## TL;DR

Copilot Studio can call the Dataverse searchQuery unbound action with maker-provided service principal credentials, so users need no sign-in. The application user&\#39;s Dataverse security role defines every result visible to all users. Enable Dataverse Search, index the table, configure Quick Find, and expose only selected searchable and returned columns.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Configure searchQuery with maker-provided credentials, explicit SearchColumns and SelectColumns, because omitted or incorrect logical names can return no results silently.
- Admins/CoE: Enable Dataverse Search, add tables to the environment search index, and publish Quick Find settings before testing agent results.
- Security/Compliance: Assign the service principal only read permissions to tables and columns safe for public exposure, because every unauthenticated user receives the same view.
