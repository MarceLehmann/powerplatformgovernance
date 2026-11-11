---
title: Do not trust outdated Power Apps licensing details in the Microsoft 365 admin
  center
description: The Microsoft 365 admin center shows obsolete Power Apps names, categories
  and feature comparisons that can mislead licensing decisions.
date: '2026-11-11T16:39:31Z'
author: governance_editorial
lang: en
toc: false
tags:
- power-apps
- dataverse
- environments
- governance
content_type: curated_summary
curation_id: 8a1916d785d4e1ad43ce6e79
image:
  path: "/assets/img/curated/8a1916d785d4e1ad43ce6e79.png"
  alt: 'Governance card: Do not trust stale licensing details. Verify Power Apps rights
    before you buy.'
permalink: "/en/posts/do-not-trust-outdated-power-apps-licensing-details-in-the-microsoft-8a1916d7/"
translation_url: "/de/posts/do-not-trust-outdated-power-apps-licensing-details-in-the-microsoft-8a1916d7/"
source_url: https://jukkaniiranen.com/2023/07/dont-trust-the-microsoft-365-admin-center-product-information/
source_site_url: https://jukkaniiranen.com/
source_title: Don’t trust the Microsoft 365 admin center product information
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2023-07-10'
source_type: article
faq:
- question: What is wrong with the Power Apps comparison table in the Microsoft 365
    admin center?
  answer: It uses obsolete Plan 1 and Plan 2 names and incorrectly presents different
    capabilities for the current per app and per user plans.
- question: Why is the Power Apps per app plan listed under Power BI?
  answer: The per app plan is miscategorized under Power BI in the Microsoft 365 admin
    center, while text search still finds it.
- question: How many Dataverse environments can Power Apps customers create according
    to the described licensing model?
  answer: Customers can create environments according to available storage capacity,
    and anyone can create up to three Developer environments without a premium Power
    Apps license.
---

## TL;DR

The Microsoft 365 admin center presents outdated Power Apps Plan 1 and Plan 2 names, miscategorizes the per app plan under Power BI, and incorrectly shows different rights for per app and per user licenses. Its claim that the per user plan permits only two Dataverse databases is also described as invalid.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Do not use the Microsoft 365 admin center purchase services details as the sole licensing reference, because product names, categories and feature comparisons can be outdated.
- Leadership/Business: Validate Power Apps licensing before purchasing or comparing vendors, because inaccurate portal information can create misleading cost and capability assumptions.
