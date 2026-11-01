---
title: 'Power BI Gateways: Why Sleeping Machines Stop Reports Updating'
description: Power BI gateways connect cloud reports to data sources and must remain
  available to keep refreshes working.
date: '2026-11-01T23:01:16Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
content_type: curated_summary
curation_id: 10c3874618a3a5a0453de162
image:
  path: "/assets/img/curated/10c3874618a3a5a0453de162.png"
  alt: 'Governance card: A sleeping gateway can stop reports from updating.'
permalink: "/en/posts/power-bi-gateways-why-sleeping-machines-stop-reports-updating-10c38746/"
translation_url: "/de/posts/power-bi-gateways-why-sleeping-machines-stop-reports-updating-10c38746/"
source_url: https://www.spreaker.com/episode/power-bi-gateways-simply-explained--75938689
source_site_url: https://www.spreaker.com/
source_title: Power BI Gateways - Simply Explained
source_name: M365.FM
source_language: en
source_language_name: English
source_author: Mirko Peters
source_published_at: '2026-11-01'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Why does a Power BI report stop updating when the gateway machine sleeps?
  answer: The report can stop receiving refreshed data because the gateway machine
    holds the connection and is no longer available.
- question: What does a Power BI gateway do between local data and the cloud?
  answer: A gateway carries the data connection between a source that cannot send
    data directly and the cloud report.
- question: How many Power BI gateway kinds does this episode cover?
  answer: The episode covers three kinds of Power BI gateway and explains where gateways
    fit in Microsoft 365 and Azure.
---

## TL;DR

Power BI gateways connect cloud reports to data sources that cannot send data directly to the cloud. A gateway machine must remain available: if it sleeps, reports can stop updating. The episode covers the data round trip, three gateway kinds, placement in Microsoft 365 and Azure, planning limits, and common troubleshooting mistakes.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Keep the gateway machine available, because sleep or other availability problems can leave Power BI reports showing outdated data.
- Leadership/Business: Treat gateway availability as part of reporting reliability, because a finance dashboard can show data from a previous day when the connection stops working.
- Security/Compliance: Include gateway placement and operating limits in planning, because the episode identifies them as factors to understand before scaling.
