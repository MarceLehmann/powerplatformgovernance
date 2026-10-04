---
title: Preventing orphan Customer Profile lookups in Dataverse
description: Customer Insights Data and Dataverse integrations can leave invalid Customer
  Profile lookups on Contact, Opportunity, Lead or Account records.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: en
toc: false
tags:
- dataverse
- power-automate
content_type: curated_summary
curation_id: 236c489949220f866ac8bcb1
permalink: "/en/posts/preventing-orphan-customer-profile-lookups-in-dataverse-236c4899/"
translation_url: "/de/posts/preventing-orphan-customer-profile-lookups-in-dataverse-236c4899/"
source_url: https://powerplatform.se/orphan-customer-profile-lookups/
source_site_url: https://powerplatform.se/
source_title: Orphan Customer Profile lookups
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-06-10'
faq:
  - question: "What are orphan customer profile lookups in Dataverse?"
    answer: "They are lookup fields pointing to a customer profile that no longer exists. They arise when Customer Insights Data works together with Dataverse."
  - question: "Why do such orphan lookups appear?"
    answer: "The trigger is often an effort to reduce licensing costs, since every 100,000 unified profiles in Customer Insights Data bring significant monthly costs."
  - question: "How can the problem be fixed in the author's view?"
    answer: "He names two ways: a Power Automate flow that checks whether the customer profile ID is still valid, or an integration rebuilt to write only changed fields."
---
## TL;DR

Customer Insights Data can leave an invalid Customer Profile lookup on a Dataverse Contact, Opportunity, Lead or Account when filtering removes a previously synchronized unified profile. The source recommends a Power Automate flow to verify lookup targets, while integrations should update only changed fields to avoid save failures caused by orphan links.

{% include curated-attribution.html %}

## Governance takeaway

Admins/CoE should scan COLA records for non-null Customer Profile lookups whose target no longer exists, using a Power Automate flow to remove or correct orphaned links. Admins/CoE should also ensure integrations write only changed fields, because broad read-and-write operations can fail when an invalid lookup is submitted. Leadership/Business should weigh customer filtering against coverage, since the source says each 100,000 unified profiles creates a non-trivial monthly licensing cost. The described filtering functionality was presented as upcoming in June 2025, so its current availability should be verified.
