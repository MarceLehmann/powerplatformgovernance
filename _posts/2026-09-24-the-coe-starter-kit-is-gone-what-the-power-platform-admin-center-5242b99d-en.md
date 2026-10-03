---
title: 'The CoE Starter Kit Is Gone: What the Power Platform Admin Center Doesn''t
  Cover'
description: A timeline of the CoE Starter Kit's end of life and nine governance gaps
  the Power Platform Admin Center doesn't fill.
date: '2026-09-24T00:10:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- coe
- dlp
content_type: curated_summary
curation_id: 5242b99dafd48d185cbd0480
permalink: "/en/posts/the-coe-starter-kit-is-gone-what-the-power-platform-admin-center-5242b99d/"
translation_url: "/de/posts/the-coe-starter-kit-is-gone-what-the-power-platform-admin-center-5242b99d/"
source_url: https://rencore.com/en/blog/power-platform-coe-starter-kit-end-of-life/
source_site_url: https://rencore.com/
source_title: 'Power Platform CoE Starter Kit: End of Life'
source_name: Rencore
source_author: Maximilian Götz
source_language: en
source_language_name: English
source_published_at: '2026-06-03'
faq:
  - question: "Is the CoE Starter Kit officially deprecated with a migration deadline?"
    answer: "No formal deprecation notice or deadline exists. The kit was never an official Microsoft product but a community-driven accelerator maintained outside standard product support. Monthly releases stopped in February 2026, and in May 2026 Microsoft confirmed that it gets no new features and no maintenance. Existing installations keep running until something breaks."
  - question: "Which governance gaps remain in the admin center compared with the CoE Starter Kit?"
    answer: "The article names five high-risk gaps: shadow IT detection without risk scoring, lifecycle management without ownership transfer workflows, no cross-tenant visibility, DLP enforcement without violation alerts, and no governance of customization quality or connector misuse. Of nine capabilities, only environment management is fully covered natively."
  - question: "What does the Power Platform admin center already cover well?"
    answer: "It offers a tenant-wide inventory of apps, flows, connectors and environments without a separate Dataverse environment, environment management including DLP and capacity, usage monitoring such as app launches and flow runs, and admin actions like reassigning owners, deleting orphaned apps and managing sharing. It shows what exists, but not whether it is a risk."
  - question: "What do organizations really have to rebuild when leaving the CoE Starter Kit?"
    answer: "The contextual layer, because the raw object list now comes from Microsoft. That means a named owner per resource, a lifecycle state, a compliance classification and a risk ranking that shows which resources need attention first. The article advises planning the move around that layer instead of around the object list."
  - question: "Why can keeping the unmaintained CoE Starter Kit become expensive?"
    answer: "The kit needed its own Dataverse environment with licensing and maintenance overhead, its flows ran through service accounts on premium connectors, and admins had to spend time keeping it compatible with platform changes. The article says the running cost of a frozen accelerator rises while its coverage falls. With more than 50 environments, several tenants or many ungoverned apps built over three years, the gap is likely material."
---
## TL;DR

The CoE Starter Kit's monthly releases stopped in February 2026 and Microsoft confirmed in May it won't get new features — it was always a community accelerator maintained outside normal support, not an official product, and there's no formal deprecation notice or migration deadline. Microsoft points to the Power Platform Admin Center instead, but PPAC tells you what exists, not whether it's a risk: shadow IT detection, ownership-transfer workflows, cross-tenant visibility and DLP-violation alerting are gaps it doesn't cover.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: list which of the Starter Kit's now-unfilled gaps — shadow IT detection, ownership-transfer workflows, cross-tenant visibility, DLP-violation alerting — governance actually depends on today, since that list is the real migration plan, not a single replacement tool.
- Security/Compliance: flag the DLP-violation alerting gap specifically, since PPAC shows policy state, not who has actually broken a policy.
- Leadership/Business: treat the missing formal deprecation notice or deadline as no reason to wait, since Microsoft has already confirmed no new features are coming.
