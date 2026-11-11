---
title: Your Power Apps user settings are probably wrong
description: Dataverse time zone, date, number and currency settings are personal
  and environment specific, creating confusing or incorrect values across Power Apps.
date: '2026-11-11T16:39:33Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- dataverse
- power-apps
content_type: curated_summary
curation_id: f2171c26660543bd965b38ee
image:
  path: "/assets/img/curated/f2171c26660543bd965b38ee.png"
  alt: 'Governance card: Dataverse user settings are per environment, not global.
    Check time zone and formats where each app runs.'
permalink: "/en/posts/your-power-apps-user-settings-are-probably-wrong-f2171c26/"
translation_url: "/de/posts/your-power-apps-user-settings-are-probably-wrong-f2171c26/"
source_url: https://jukkaniiranen.com/2023/03/your-power-apps-user-settings-are-probably-wrong/
source_site_url: https://jukkaniiranen.com/
source_title: Your Power Apps user settings are probably wrong
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2023-03-16'
source_type: article
faq:
- question: How do I change the time zone and current format in a model-driven Power
    App?
  answer: Open Personalization settings in a model-driven app, then change Time Zone
    on General and Current Format on Formats. The settings are environment specific.
- question: Can XrmToolBox User Settings Utility update Dataverse settings for multiple
    users?
  answer: Yes. XrmToolBox User Settings Utility can load users, inspect their values,
    and modify time zone, format, and other settings for selected users in bulk.
- question: When should I use Date Only or Time-Zone Independent Dataverse columns?
  answer: Use these column behaviors to avoid certain date and time conversion problems.
    They do not let end users configure their own personal settings.
---

## TL;DR

Dataverse user settings control time zones and number, currency, date and time formats for each user in each environment. Model-driven Power Apps expose these settings through Personalization settings, while the Power Platform Admin Center cannot change them for another user. XrmToolBox can inspect and update settings, including in bulk.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Document that Dataverse time zone and format settings are environment specific, because users can encounter different values after apps move between environments.
- Makers: Check whether date and time columns need Date Only or Time-Zone Independent behavior, because user time zones can change displayed and stored values.
- Admins/CoE: Use XrmToolBox User Settings Utility when individual or bulk corrections are needed, but plan for repeated work as users and environments are added.
