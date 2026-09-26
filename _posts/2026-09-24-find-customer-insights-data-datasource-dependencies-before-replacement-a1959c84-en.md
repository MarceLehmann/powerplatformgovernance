---
title: Find Customer Insights – Data datasource dependencies before replacement
description: Use the Customer Insights – Data API testing tool to locate measure and
  segment dependencies before replacing or removing a datasource.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- dataverse
content_type: curated_summary
curation_id: a1959c84a8dc9afdd70a8d03
permalink: "/en/posts/find-customer-insights-data-datasource-dependencies-before-replacement-a1959c84/"
translation_url: "/de/posts/find-customer-insights-data-datasource-dependencies-before-replacement-a1959c84/"
source_url: https://powerplatform.se/find-datasource-dependencies-in-ci-d/
source_site_url: https://powerplatform.se/
source_title: Find datasource dependencies in CI-D
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-05-06'
---
## TL;DR

In Customer Insights – Data, use Permissions &gt; API, choose Customer insights – v1, and call ListAllMeasuresMetadata with implicit authorization and the instance ID. Search the JSON by display or schema name, reroute measures to a replacement Delta datasource, refresh, then repeat with ListAllSegments. External API consumers can still break after removal.

{% include curated-attribution.html %}

## Governance takeaway

Admins/CoE should inventory dependencies with ListAllMeasuresMetadata and ListAllSegments before deleting a datasource, then refresh the datasource and rerun the queries to confirm removal. Makers should review measures and segments that reference the datasource, choosing whether to remove unused items or redirect active dependencies to the replacement. Admins/CoE should also identify external consumers of the table because the API may not block deletion even though those integrations will stop working.
