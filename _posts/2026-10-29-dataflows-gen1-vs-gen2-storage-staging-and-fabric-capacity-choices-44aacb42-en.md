---
title: 'Dataflows Gen1 vs Gen2: Storage, staging and Fabric capacity choices'
description: Dataflows Gen2 writes to OneLake and Fabric Lakehouse tables, but staging
  and compute choices can consume shared capacity and affect Power BI reports.
date: '2026-10-29T04:34:06Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
content_type: curated_summary
curation_id: 44aacb42189acb815db4576e
image:
  path: "/assets/img/curated/44aacb42189acb815db4576e.png"
  alt: 'Governance card: Gen2 staging shapes capacity use. Misconfiguration can throttle
    shared workloads.'
permalink: "/en/posts/dataflows-gen1-vs-gen2-storage-staging-and-fabric-capacity-choices-44aacb42/"
translation_url: "/de/posts/dataflows-gen1-vs-gen2-storage-staging-and-fabric-capacity-choices-44aacb42/"
source_url: https://www.m365.fm/blog/dataflows-gen1-vs-gen2-fabric-architecture/
source_site_url: https://www.m365.fm/
source_title: 'Dataflows Gen1 vs Gen2 in Microsoft Fabric: Choosing the Right Staging
  and Compute Architecture'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-28'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How does Dataflows Gen2 store cleaned data in Microsoft Fabric?
  answer: Dataflows Gen2 writes cleaned data to Delta Parquet tables in a Fabric Lakehouse
    through OneLake, making it available to downstream Fabric workloads.
- question: What can misconfigured Dataflows Gen2 staging do to Fabric capacity?
  answer: Misconfigured staging can repeatedly pull large datasets into memory, increasing
    compute overhead and consuming Fabric capacity faster than expected.
- question: How should teams schedule heavy Dataflows Gen2 refreshes?
  answer: Teams should isolate heavy ETL in dedicated workspaces with suitable capacity
    or schedule refreshes outside peak business hours to reduce workload impact.
---

## TL;DR

Dataflows Gen1 stores transformed data within internal Power BI storage, while Dataflows Gen2 writes Delta Parquet tables to a Fabric Lakehouse through OneLake. Gen2 staging and transformation work consumes Fabric Capacity Units, so repeated processing or peak-hour refreshes can throttle other workloads and affect report rendering.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Configure staging and transformations carefully because repeated processing can create unnecessary compute overhead.
- Admins/CoE: Monitor Fabric Capacity Units and isolate heavy ETL in suitable workspaces or off-peak schedules to protect shared workloads.
- Leadership/Business: Standardize cleaned data in Lakehouse tables to reduce conflicting numbers and improve trust in dashboards.
