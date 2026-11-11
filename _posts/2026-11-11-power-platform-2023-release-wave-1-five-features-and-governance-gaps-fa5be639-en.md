---
title: 'Power Platform 2023 Release Wave 1: Five Features and Governance Gaps'
description: Jukka Niiranen reviews five 2023 Release Wave 1 items, including manual
  administrator role assignment and governed personal Dataverse environments.
date: '2026-11-11T16:39:42Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- dataverse
- power-apps
content_type: curated_summary
curation_id: fa5be6390a75c180da653873
image:
  path: "/assets/img/curated/fa5be6390a75c180da653873.png"
  alt: 'Governance card: Admin power should not mean automatic access to every Dataverse
    record.'
permalink: "/en/posts/power-platform-2023-release-wave-1-five-features-and-governance-gaps-fa5be639/"
translation_url: "/de/posts/power-platform-2023-release-wave-1-five-features-and-governance-gaps-fa5be639/"
source_url: https://jukkaniiranen.com/2023/01/something-to-look-forward-to-in-2023-release-wave-1/
source_site_url: https://jukkaniiranen.com/
source_title: Something to look forward to in 2023 Release Wave 1
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2023-01-25'
source_type: article
faq:
- question: How does manual System Administrator role assignment change Dataverse
    access for tenant administrators?
  answer: It lets customers assign the System Administrator role to selected users
    instead of relying entirely on automatic assignment. This can reduce unnecessary
    business data access.
- question: Can Power Apps personal environments use Dataverse without administrator
    provisioning?
  answer: Yes, personal environments let makers access premium capabilities such as
    Dataverse without tenant administrator provisioning. Administrators can disable
    the feature if governance requires it.
- question: Why should organizations monitor the Power Platform Release Planner instead
    of reviewing release waves twice a year?
  answer: Release plans can change during the wave, with items added, delayed, postponed
    or cancelled. Regular monitoring gives a more current view of planned features.
---

## TL;DR

The 2023 Release Wave 1 plan introduces manual assignment of the System Administrator role and personal environments with Dataverse. Personal environments do not expire, do not require tenant administrator provisioning, and can be disabled by admins. Because makers can use premium capabilities independently, organizations should apply governance and DLP policies.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Assess manual System Administrator assignment so tenant admin roles do not automatically expose all Dataverse business data.
- Admins/CoE: Decide whether personal environments should be enabled and apply DLP policies, because makers can provision them without administrator help.
- Makers: Test the new model-driven controls and responsive canvas layouts carefully, because the model-driven visual update initially uses an opt-in switch and may cause breakage.
- Leadership/Business: Treat release plans as changeable, since features may be added, delayed, postponed or cancelled before the wave ends.
