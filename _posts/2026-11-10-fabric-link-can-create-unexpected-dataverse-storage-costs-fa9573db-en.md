---
title: Fabric Link can create unexpected Dataverse storage costs
description: Enabling Fabric Link for the Dataverse annotation table created an annotation-analytics
  table using 180 GB of database storage, despite the source table being 3 GB.
date: '2026-11-10T16:37:54Z'
author: governance_editorial
lang: en
toc: false
tags:
- dataverse
- governance
content_type: curated_summary
curation_id: fa9573dbdeff8b472b9c2826
image:
  path: "/assets/img/curated/fa9573dbdeff8b472b9c2826.png"
  alt: 'Governance card: Fabric Link can turn a small Notes table into a huge storage
    bill.'
permalink: "/en/posts/fabric-link-can-create-unexpected-dataverse-storage-costs-fa9573db/"
translation_url: "/de/posts/fabric-link-can-create-unexpected-dataverse-storage-costs-fa9573db/"
source_url: https://powerplatform.se/be-careful-when-enabling-fabric-link/
source_site_url: https://powerplatform.se/
source_title: Be careful when enabling Fabric Link
source_name: powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2026-11-10'
source_type: article
faq:
- question: What happened when Fabric Link was enabled for the Dataverse annotation
    table?
  answer: Fabric Link created an annotation-analytics table using 180 GB of database
    storage, although the annotation table itself was 3 GB.
- question: Where can I check storage created by Dataverse Fabric Link?
  answer: Check storage consumption in the Power Platform Admin Center under Licensing,
    Dataverse. The page reports analytics tables in storage consumption.
- question: How can I remove the annotation table from a Dataverse Fabric Link?
  answer: The annotation table could not be removed individually, so the entire Fabric
    Link was deleted and recreated without annotation.
---

## TL;DR

Enabling Fabric Link for the Dataverse annotation table, displayed as Notes, created an annotation-analytics table using 180 GB of database storage. The source table was 3 GB, while the reported database list price was $40 per GB monthly. Removing the table was impossible, so the entire Fabric Link had to be recreated.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Check Licensing to Dataverse storage after enabling Fabric Link, because annotation can create a much larger annotation-analytics table in database storage.
- Leadership/Business: Challenge enabling tables for possible future use, because the reported database storage pricing made the observed 180 GB increase financially significant.
