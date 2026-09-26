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
---
## TL;DR

The Power Platform API exposes Copilot Credit entitlement and per-resource consumption data, including agent, environment, date, billed status and available dimensions. A scheduled Power Automate flow can retrieve one day at a time, follow continuation tokens, and store up to 180 days initially plus seven refreshed days in Dataverse for dashboards and exports.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: build the scheduled flow to retrieve one day at a time via continuation tokens, but reach for PPAC first and persist this into Dataverse only when custom history or analysis genuinely requires it.
- Security/Compliance: apply read-only access to the stored Dataverse records and set retention under policy, since this is ongoing consumption data accumulating for up to 180 days at a stretch.
- Leadership/Business: a tenant-wide credit dashboard is achievable here, but budget for upkeep — environment IDs need separate resolution and optional response fields may change, so this isn't a one-time build.
