---
title: Design Industrial IoT Data Contracts Before Power BI Ingestion
description: Define stable identities, units, quality codes, timestamps and failure
  rules before industrial IoT signals reach Power BI.
date: '2026-10-27T04:50:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- compliance
content_type: curated_summary
curation_id: a78069ad0761a52048c4e2c3
image:
  path: "/assets/img/curated/a78069ad0761a52048c4e2c3.png"
  alt: 'Governance card: Power BI cannot correct flawed machine data. Define signal
    rules before ingestion.'
permalink: "/en/posts/design-industrial-iot-data-contracts-before-power-bi-ingestion-a78069ad/"
translation_url: "/de/posts/design-industrial-iot-data-contracts-before-power-bi-ingestion-a78069ad/"
source_url: https://www.m365.fm/blog/designing-data-contracts-industrial-iot-signals-power-bi/
source_site_url: https://www.m365.fm/
source_title: Designing Data Contracts for Industrial IoT Signals Before Power BI
  Ingestion
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: What should an industrial IoT data contract define before Power BI ingestion?
  answer: It should define asset identity, measurement points, data types, engineering
    units, quality statuses, delivery patterns and timestamp meanings before ingestion.
- question: How should Power BI pipelines handle stale cached sensor values?
  answer: Pipelines should evaluate whether machine state changed, trigger a stale
    status alert when appropriate, and avoid presenting cached readings as steady-state
    data.
- question: Why should industrial IoT data contracts use versions and effective dates?
  answer: Versioning preserves the definitions and handling rules that applied to
    historical records when machine programs or signal meanings change.
---

## TL;DR

Industrial IoT data contracts should define stable asset references, measurement points, data types, engineering units, quality statuses, delivery patterns and timestamp meanings before Power BI ingestion. They must also distinguish nulls from failed reads, detect stale cached values, label bounded estimates, and version changes so historical production analysis remains consistent.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Preserve source quality statuses, distinguish true zeroes from nulls and failed reads, and avoid treating cached values as current measurements.
- Admins/CoE: Require versioned signal contracts before data reaches Power BI, including stable asset references, units, delivery patterns and timestamp semantics.
- Security/Compliance: Watch for unverified readings created when uncertainty or degraded status codes are stripped during ingestion.
- Leadership/Business: Treat dashboard discrepancies as data governance risks, because flawed machine events can create an inaccurate picture of production performance.
