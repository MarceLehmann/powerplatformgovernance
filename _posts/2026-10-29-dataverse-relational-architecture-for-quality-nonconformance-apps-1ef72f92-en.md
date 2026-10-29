---
title: Dataverse relational architecture for quality nonconformance apps
description: Use related Dataverse tables for cases, defects, measurements, affected
  material, decisions and containment actions.
date: '2026-10-29T16:45:08Z'
author: governance_editorial
lang: en
toc: false
tags:
- dataverse
- power-apps
- governance
- compliance
content_type: curated_summary
curation_id: 1ef72f92d4eb41917157a9d7
image:
  path: "/assets/img/curated/1ef72f92d4eb41917157a9d7.png"
  alt: 'Governance card: A case is not a defect. Model both in related Dataverse tables.'
permalink: "/en/posts/dataverse-relational-architecture-for-quality-nonconformance-apps-1ef72f92/"
translation_url: "/de/posts/dataverse-relational-architecture-for-quality-nonconformance-apps-1ef72f92/"
source_url: https://www.m365.fm/blog/dataverse-relational-architecture-quality-apps/
source_site_url: https://www.m365.fm/
source_title: Dataverse Relational Architecture for Quality Nonconformance Apps
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
- question: How should Dataverse represent several defects from one inspection?
  answer: Use a parent quality case with a child Defect table, allowing each observation
    to have its own record and controlled defect code.
- question: Why should measurement limits be stored with inspection results in Dataverse?
  answer: Store numeric values, units and requirement limits with each measurement.
    This preserves the inspection context when engineering drawings change later.
- question: How do Dataverse linking tables control affected material?
  answer: Linking tables connect decisions and containment actions to specific batches,
    containers or material groups, preventing unrelated production lines from being
    restricted.
---

## TL;DR

A Dataverse quality app should separate case headers, defects, measurements and affected material into related tables. Use one-to-many relationships for multiple defects, capture numeric values and units with historical requirement limits, and use linking tables for many-to-many decisions, actions and material groups.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Create separate case, Defect, Measurement and Affected Material tables so multiple issues, readings and material subsets remain analyzable without duplicated data.
- Admins/CoE: Preserve explicit relationships and distinct status values for materials, investigations and corrective actions to avoid ambiguous workflow bottlenecks.
- Security/Compliance: Store requirement limits with each inspection result because later drawing or specification changes can make live references unreliable for historical audits.
