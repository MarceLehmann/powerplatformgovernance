---
title: Build a Tenant-Wide Copilot Credit View with the Power Platform API
description: Retrieve daily Copilot Credit consumption, store it in Dataverse, and
  create governed tenant-wide dashboards for agents and environments.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- dataverse
- environments
content_type: curated_summary
curation_id: 0a5d2a46aab0efa61b9bb25e
permalink: "/en/posts/build-a-tenant-wide-copilot-credit-view-with-the-power-platform-api-0a5d2a46/"
translation_url: "/de/posts/build-a-tenant-wide-copilot-credit-view-with-the-power-platform-api-0a5d2a46/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-credit-consumption-api/
source_site_url: https://microsoft.github.io/
source_title: Where Are Your Copilot Credits Going? Build a Tenant-Wide View with
  the Power Platform API
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Petros Feleskouras
source_published_at: '2026-08-25'
source_updated_at: '2026-08-26'
faq:
  - question: "Which Power Platform API route returns the tenant's Copilot Credit capacity?"
    answer: "The MCSMessages route under licensing and entitlements returns entitled, allocated, consumed, available and status values. The response also includes the latest completed usage date, which shows how current the detailed consumption data is. For per-agent detail there is a second resources route that takes a date range, a page size and a continuation token."
  - question: "How do you build a clean daily consumption history from the resources route?"
    answer: "Request single dates so each day produces its own clean set of records. The page size can be set to 5000, and larger results are fetched with a continuation token. Environment names are not part of the consumption rows, so they are resolved through a separate environment management route. Because the same agent can appear several times per day, rows must be aggregated later."
  - question: "Why can the admin center reports fall short for Copilot Credit consumption?"
    answer: "The standard reports under Licensing and Copilot Studio do not let you reshape the data, own the records or keep trends beyond the standard window. On top of that, the GitHub Copilot harness charges credits while makers build, preview and evaluate agents, not only in production. The source advises starting with the admin center reports and building your own only for specific needs."
  - question: "What components make up the community solution for Copilot Credit tracking in Dataverse?"
    answer: "Version 2.0.0 contains one daily Power Automate flow, three Dataverse tables for consumption history, capacity snapshots and sync status, a read-only security role and a Power Apps Code App as dashboard. The first run imports up to 180 days of history, and later runs refresh the previous seven days. Everything can be imported as a single solution package."
  - question: "What limitations apply to the data from the Copilot Credit consumption API?"
    answer: "The API can return several rows for one agent on the same day when channel, feature, model or environment differ. GitHub Copilot harness agents report the feature as Process Agent and give no tool, model or knowledge source values. Some optional metadata is not fully described in the public reference, so you should test the fields your reporting depends on."
---
## TL;DR

The Power Platform API exposes Copilot Credit entitlement and per-resource consumption data, including agent, environment, date, billed status and available dimensions. A scheduled Power Automate flow can retrieve one day at a time, follow continuation tokens, and store up to 180 days initially plus seven refreshed days in Dataverse for dashboards and exports.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: build the scheduled flow to retrieve one day at a time via continuation tokens, but reach for PPAC first and persist this into Dataverse only when custom history or analysis genuinely requires it.
- Security/Compliance: apply read-only access to the stored Dataverse records and set retention under policy, since this is ongoing consumption data accumulating for up to 180 days at a stretch.
- Leadership/Business: a tenant-wide credit dashboard is achievable here, but budget for upkeep — environment IDs need separate resolution and optional response fields may change, so this isn't a one-time build.
