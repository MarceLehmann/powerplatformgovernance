---
title: SharePoint Hero Links need separate governance from legacy sharing links
description: Hero Links use secure defaults, but legacy links remain active and existing
  expiration policies do not govern the new primary link.
date: '2026-10-11T16:35:44Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- compliance
content_type: curated_summary
curation_id: 49260018275a34fae44750e8
image:
  path: "/assets/img/curated/49260018275a34fae44750e8.png"
  alt: 'Governance card: Hero Links do not inherit legacy expiration policies. Treat
    old and new links as separate controls.'
permalink: "/en/posts/sharepoint-hero-links-need-separate-governance-from-legacy-sharing-49260018/"
translation_url: "/de/posts/sharepoint-hero-links-need-separate-governance-from-legacy-sharing-49260018/"
source_url: https://reshmeeauckloo.com/posts/sharepoint-herolink-powershell/
source_site_url: https://reshmeeauckloo.com/
source_title: 'SharePoint Hero Links: What admins need to know'
source_name: reshmeeauckloo.com
source_language: en
source_language_name: English
source_published_at: '2026-10-11'
source_type: article
faq:
- question: How does DefaultMainLinkScope control SharePoint Hero Link access?
  answer: DefaultMainLinkScope selects the initial audience for a site’s main Hero
    Link. It is a default, not an enforced restriction where policy permits broader
    sharing.
- question: Do existing SharePoint sharing links migrate automatically to Hero Links?
  answer: Existing sharing links are not automatically replaced, and no documented
    automatic migration path is provided. They remain separately available under Other
    links.
- question: Do SharePoint link expiration policies apply to Hero Links?
  answer: Existing expiration policies continue to apply to legacy links but do not
    govern Hero Links. Administrators must assess Hero Link expiration separately.
---

## TL;DR

SharePoint Hero Links default to a selected audience through DefaultMainLinkScope, while existing sharing links remain under Other links and continue working separately. Legacy expiration policies do not govern Hero Links. Administrators should configure and verify the site-specific setting, and manage legacy links independently because automatic migration is not documented.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Set and verify DefaultMainLinkScope on each relevant site, because the setting is site-specific and establishes the initial Hero Link audience.
- Security/Compliance: Assess Hero Link expiration separately, because existing expiration policies govern legacy links but do not govern Hero Links.
- Leadership/Business: Account for both link experiences during rollout, because legacy links remain accessible under their existing arrangements and are not automatically replaced.
