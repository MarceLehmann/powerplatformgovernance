---
title: Copilot Studio credits, billing models and capacity limits
description: Copilot Studio usage is pooled across the organization, with costs varying
  by operation and custom agents potentially being disabled after capacity limits
  are exceeded.
date: '2026-10-29T04:34:07Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- copilot-studio
- compliance
content_type: curated_summary
curation_id: 9de367f18963c3486b5ecef4
image:
  path: "/assets/img/curated/9de367f18963c3486b5ecef4.png"
  alt: 'Governance card: Copilot Studio costs stack. Capacity limits can stop custom
    agents.'
permalink: "/en/posts/copilot-studio-credits-billing-models-and-capacity-limits-9de367f1/"
translation_url: "/de/posts/copilot-studio-credits-billing-models-and-capacity-limits-9de367f1/"
source_url: https://www.m365.fm/blog/copilot-studio-pricing-guide-credits/
source_site_url: https://www.m365.fm/
source_title: 'Copilot Studio Pricing Guide: Calculating Credits & Avoiding Bill Shocks'
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
- question: How many Copilot Studio credits does a grounded AI-generated response
    use?
  answer: A grounded AI-generated response uses 12 credits, combining 10 credits for
    internal-data grounding with 2 credits for generation.
- question: What happens when Copilot Studio usage reaches 125 percent of prepaid
    capacity?
  answer: Custom agents are disabled after reaching 125 percent of prepaid capacity.
    Active conversations finish, but later interactions are rejected with billing
    or availability errors.
- question: When do internal Copilot Studio agents avoid consuming extra credits?
  answer: Internal agents avoid extra Copilot Studio credits when they are used exclusively
    by employees who already have Microsoft 365 Copilot seats.
---

## TL;DR

Copilot Studio uses pooled organizational credits: scripted answers cost 1, AI-generated responses 2, actions 5, and internal-data grounding 10. A grounded generated response costs 12 credits. Capacity packs provide 25,000 credits for $200 monthly, while pay-as-you-go costs 1 cent per credit. Custom agents are disabled after usage reaches 125% of prepaid capacity.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Design agents with stacked operations in mind because generation, actions and data grounding can increase the cost of one user turn.
- Admins/CoE: Configure billing alerts in the Power Platform admin center, review consumption weekly and keep capacity in reserve to reduce outage risk.
- Leadership/Business: Match capacity packs to predictable workloads and use pay-as-you-go for volatile traffic, while separating internal and external deployments for clearer cost control.
