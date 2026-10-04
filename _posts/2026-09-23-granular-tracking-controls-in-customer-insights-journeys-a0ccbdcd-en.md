---
title: Granular Tracking Controls in Customer Insights – Journeys
description: Why bundling five tracking mechanisms behind one toggle forces regulated
  organisations into an all-or-nothing compliance choice.
date: '2026-09-23T22:00:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- compliance
- governance
content_type: curated_summary
curation_id: a0ccbdcdeeb8ead763b43829
permalink: "/en/posts/granular-tracking-controls-in-customer-insights-journeys-a0ccbdcd/"
translation_url: "/de/posts/granular-tracking-controls-in-customer-insights-journeys-a0ccbdcd/"
source_url: https://powerplatform.se/granular-tracking-controls-in-customer-insights-journeys-a-privacy-first-must-for-regulated-organizations/
source_site_url: https://powerplatform.se/
source_title: 'Granular Tracking Controls in Customer Insights – Journeys: A Privacy-First
  Must for Regulated Organizations'
source_name: powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2026-02-14'
faq:
  - question: "Which five behaviors does the single tracking toggle in Customer Insights bundle?"
    answer: "One global setting switches five things together: the email open pixel, link click tracking, web tracking, form prefill and automatic UTM parameter appending. Turning it off for privacy reasons therefore also disables features a team may want to keep. The article proposes splitting it into separate switches so each behavior can be governed on its own."
  - question: "How could a privacy team keep click tracking but disable the open pixel?"
    answer: "Today it cannot, because the single toggle covers both. The author proposes separate switches so administrators can enable or disable each mechanism individually, with less frequently used or advanced settings managed through OrgDBOrgSettings. Link click tracking could then stay on while the open pixel is off. The idea is submitted as a feature request on the Dynamics 365 Ideas portal."
  - question: "Why are email open rates from the tracking pixel unreliable?"
    answer: "Mail clients distort the signal. Outlook only downloads images when the user approves them, so a message can be read without the pixel firing. Apple iCloud always downloads all images, so the pixel can fire without a person reading the message. According to the article, both clients skew the open statistics."
  - question: "What does web tracking in Customer Insights Journeys govern besides emails?"
    answer: "The same single switch controls website tracking, form prefill and the appending of UTM parameters to links, so it reaches beyond email analytics. If email pixel tracking alone conflicts with a jurisdiction's consent rules, the only current option is to switch off all five behaviors, which also removes legitimate analytics."
  - question: "How can I support finer tracking controls in Customer Insights Journeys?"
    answer: "The author submitted the proposal as a feature request on the Dynamics 365 Ideas portal and links to it, so readers can vote for it. Until separate switches exist, the global toggle remains all or nothing for the whole tenant. A conflict with consent rules in a single jurisdiction currently means switching all five behaviors off together."
---
## TL;DR

Customer Insights – Journeys currently bundles five tracking mechanisms — email open pixels, link clicks, web tracking, form prefill and UTM tagging — behind one global toggle. If email-pixel tracking alone conflicts with a jurisdiction's consent rules, the only current option is switching off all five, killing legitimate analytics along with it.

{% include curated-attribution.html %}

## Governance takeaway

- Security/Compliance: audit today which of the five bundled mechanisms — email pixels, link clicks, web tracking, form prefill, UTM tagging — the organization actually relies on, since a legal review flagging just one forces the other four off with it.
- Admins/CoE: document that trade-off now, before it turns into an emergency decision made under a compliance deadline.
- Leadership/Business: know no separate switches exist yet, so a consent-rule conflict in a single jurisdiction currently means an all-or-nothing call for the whole tenant.
