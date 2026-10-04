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
faq:
  - question: "Why check dependencies before replacing a Power Query datasource in Customer Insights Data?"
    answer: "Measures and segments may still depend on the datasource, and the article warns that dependencies from things externally using the table can remain. Checking first with the API tool shows which measures and segments reference the old datasource, so you can decide whether to remove them or redirect them to the replacement Delta datasource."
  - question: "How do I open the API list that exposes datasource dependencies?"
    answer: "In Customer Insights Data go to Permissions and open the API tab, then choose the only available API, Customer insights v1. Search for ListAll and select ListAllMeasuresMetadata, later ListAllSegments. Click the green Try it button to run the call from the API testing tool."
  - question: "What inputs does the Try it call need to list measures?"
    answer: "Select implicit in the Authorization drop down and enter your instance ID, which you can grab from the URL when you use Customer Insights Data in the normal UI. Then scroll down and press Send. Afterwards use the browser search on the JSON response to find all occurrences of the datasource."
  - question: "What are the options for a measure that still uses the old datasource?"
    answer: "You can either remove the measure, or change all its dependencies to another datasource, a Delta one in the article, and refresh it. Then rerun the query by resending it to check that the old datasource no longer appears. The article cautions that dependencies from things externally using the table may still be left."
  - question: "Which measures and segments does this method cover?"
    answer: "The article uses two API calls, ListAllMeasuresMetadata for measures and ListAllSegments for segments. In the JSON output of both calls you search for the datasource. The article warns that there might still be dependencies left on the datasource, for instance from things externally using the table, so check for external consumers as well."
---
## TL;DR

In Customer Insights – Data, use Permissions &gt; API, choose Customer insights – v1, and call ListAllMeasuresMetadata with implicit authorization and the instance ID. Search the JSON by display or schema name, reroute measures to a replacement Delta datasource, refresh, then repeat with ListAllSegments. External API consumers can still break after removal.

{% include curated-attribution.html %}

## Governance takeaway

Admins/CoE should inventory dependencies with ListAllMeasuresMetadata and ListAllSegments before deleting a datasource, then refresh the datasource and rerun the queries to confirm removal. Makers should review measures and segments that reference the datasource, choosing whether to remove unused items or redirect active dependencies to the replacement. Admins/CoE should also identify external consumers of the table because the API may not block deletion even though those integrations will stop working.
