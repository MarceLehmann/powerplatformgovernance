---
title: 'Microsoft Fabric Capacity Governance: F SKUs, Bursting and Debt'
description: Fabric capacity units form a shared compute pool. F SKUs, burst limits,
  smoothing and the Capacity Metrics app shape performance and cost governance.
date: '2026-10-29T16:45:04Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
content_type: curated_summary
curation_id: 7b957908fa26a7ebcd3c9011
image:
  path: "/assets/img/curated/7b957908fa26a7ebcd3c9011.png"
  alt: 'Governance card: Shared capacity creates shared risk. Watch the debt before
    performance drops.'
permalink: "/en/posts/microsoft-fabric-capacity-governance-f-skus-bursting-and-debt-7b957908/"
translation_url: "/de/posts/microsoft-fabric-capacity-governance-f-skus-bursting-and-debt-7b957908/"
source_url: https://www.m365.fm/blog/microsoft-fabric-capacity-units-f-skus-guide/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Fabric Capacity Units Explained: A Guide to F SKUs and Carry
  Forward Debt'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-29'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How does Microsoft Fabric shared capacity affect different workspaces?
  answer: All workspaces draw from the same capacity pool, so an intensive notebook
    job in one department can affect reports in another.
- question: What does the Microsoft Fabric Capacity Metrics app monitor?
  answer: The app shows utilization trends, carry forward debt and top-consuming semantic
    models, pipelines or notebooks, helping capacity admins investigate performance.
- question: How does carry forward debt affect Fabric report performance?
  answer: Bursting beyond the purchased capacity creates debt that future compute
    cycles must repay, potentially throttling interactive reports after the original
    workload runs.
---

## TL;DR

Microsoft Fabric capacity units form a shared compute pool across workspaces. F SKUs can be paused and resumed, while bursting creates carry forward debt. Interactive work is smoothed over a few minutes, background workloads over 24 hours. The Capacity Metrics app helps admins track utilization, debt and top consumers, with alerts at roughly 80 percent.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Monitor shared capacity with the Microsoft Fabric Capacity Metrics app, including utilization, carry forward debt and top-consuming models, pipelines or notebooks.
- Admins/CoE: Review F SKU sizing and inherited P SKUs, because shared workloads and legacy capacity arrangements affect performance and migration planning.
- Leadership/Business: Treat capacity as a cross-department resource, because intensive work in one workspace can affect unrelated reports and cloud cost control.
