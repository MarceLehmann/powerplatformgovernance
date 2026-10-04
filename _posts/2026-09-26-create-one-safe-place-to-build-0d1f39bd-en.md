---
title: Create One Safe Place to Build
description: Design a governed Maker Environment with aligned DLP, intentional access,
  Dataverse controls, solutions, monitoring and a clear path to production.
date: '2026-09-26T16:34:03Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- dlp
- environments
- dataverse
- alm
content_type: curated_summary
curation_id: 0d1f39bd2335ec69749c07f5
image:
  path: "/assets/img/curated/0d1f39bd2335ec69749c07f5.png"
  alt: 'Governance card: Restriction without an alternative creates workarounds. Give
    makers a governed place to build.'
permalink: "/en/posts/create-one-safe-place-to-build-0d1f39bd/"
translation_url: "/de/posts/create-one-safe-place-to-build-0d1f39bd/"
source_url: https://www.michaelroth42.com/post/2026-02-23-a-safe-place-to-build/
source_site_url: https://www.michaelroth42.com/
source_title: Create One Safe Place to Build
source_name: MichaelRoth42 Blog
source_language: en
source_language_name: English
source_author: Michael Roth
source_published_at: '2026-03-16'
source_type: article
submitted_by:
  publish_credit: true
  name: Michael Roth
  linkedin: https://www.linkedin.com/in/michaelroth42/
faq:
  - question: "Why should the DLP policy of a maker environment resemble production?"
    answer: "Because makers would otherwise build with capabilities that do not exist in production and be disappointed later."
  - question: "How should access to a maker environment be granted?"
    answer: "Through competence, not automatically for everyone in the directory. A learning module of about 30 minutes comes first, then access through a security group managed by the governance team or IT."
  - question: "When does it make sense to split a maker lab into several environments?"
    answer: "One general maker lab is the default. Splitting is justified when advanced cases need risky connectors, a business unit has consistently high maker volume, or makers build model-driven apps with real business logic."
---

## TL;DR

A Maker Environment should offer a governed alternative to a restricted Default Environment. Align its DLP with production, grant access through a Security Group after basic training, enable 30-day Dataverse Audit retention, create apps and flows in solutions by default, monitor capacity, and migrate mature solutions to production.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Complete the basic learning module and build in the Maker Environment, using solutions from the start so experiments can become portable and migration-ready.
- Admins/CoE: Align Maker Lab DLP with production, control entry through a Security Group, monitor usage and capacity, and split environments only when advanced connectors, high volume or serious Dataverse use justifies the overhead.
- Security/Compliance: Enable Dataverse Audit with 30-day retention to trace data changes, while recognizing that audit is retrospective evidence and does not prevent mistakes, restore data or replace backups.
- Leadership/Business: Provide a clear migration path for solutions that become important, because restricting the Default Environment without an alternative drives workarounds and frustration.
