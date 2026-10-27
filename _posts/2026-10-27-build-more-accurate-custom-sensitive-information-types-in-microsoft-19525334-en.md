---
title: Build More Accurate Custom Sensitive Information Types in Microsoft Purview
description: Combine regex, supporting keywords, proximity settings and real sample
  testing to reduce false positives in custom Microsoft Purview sensitive information
  types.
date: '2026-10-27T16:41:09Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- compliance
- dlp
content_type: curated_summary
curation_id: 195253340c60e0768f39116e
image:
  path: "/assets/img/curated/195253340c60e0768f39116e.png"
  alt: 'Governance card: Shape alone does not equal meaning. Context makes detection
    precise.'
permalink: "/en/posts/build-more-accurate-custom-sensitive-information-types-in-microsoft-19525334/"
translation_url: "/de/posts/build-more-accurate-custom-sensitive-information-types-in-microsoft-19525334/"
source_url: https://www.m365.fm/blog/microsoft-purview-custom-sensitive-information-types/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Purview Custom Sensitive Information Types: Building Regex
  and Supporting Evidence That Actually Work'
source_name: M365 FM
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How do custom sensitive information types detect internal employee IDs
    in Microsoft Purview?
  answer: They combine a regex pattern describing the identifier structure with supporting
    evidence such as staff number or HR record. This adds business context to the
    match.
- question: What does proximity control change in a Microsoft Purview sensitive information
    type?
  answer: Proximity controls how close supporting keywords must be to the regex match.
    Tight proximity helps prevent distant document text from creating unrelated detections.
- question: How should Microsoft Purview custom sensitive information types be tested
    before enforcement?
  answer: Upload real business documents and emails containing positive, negative
    and borderline examples. Review false matches and misses, then refine the regex,
    keywords or proximity settings.
---

## TL;DR

Microsoft Purview custom sensitive information types use structured regex patterns, nearby supporting keywords and proximity settings to detect proprietary identifiers. Keyword dictionaries group related terms for reuse, while positive, negative and borderline sample files help validate accuracy before enforcement. Loose patterns and generic terms can create noisy alerts.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use structurally precise regex patterns for proprietary identifiers, because loose numeric matches can flag phone numbers, invoices and routine spreadsheets.
- Admins/CoE: Maintain specific keyword dictionaries and define tight proximity windows, because unrelated terms or distant context can create false positives.
- Security/Compliance: Test custom types with real positive, negative and borderline documents before enforcement, then refine patterns based on observed misses and false matches.
