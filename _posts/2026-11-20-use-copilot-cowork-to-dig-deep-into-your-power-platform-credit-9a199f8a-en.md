---
title: Use Copilot Cowork to dig deep into your Power Platform credit consumption
  data
description: Enable the Power Platform Admin preview plugin in Copilot Cowork, ask
  plain-language questions, and chart Copilot Credit consumption per environment on
  a weekly schedule.
date: '2026-11-20T22:37:05Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- copilot-studio
- coe
content_type: curated_summary
curation_id: 9a199f8a57482fd819979652
image:
  path: "/assets/img/curated/9a199f8a57482fd819979652.png"
  alt: 'Governance card: Copilot Credit spend hides per environment. Ask for the breakdown
    before the bill asks you.'
permalink: "/en/posts/use-copilot-cowork-to-dig-deep-into-your-power-platform-credit-9a199f8a/"
translation_url: "/de/posts/use-copilot-cowork-to-dig-deep-into-your-power-platform-credit-9a199f8a/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-cowork-credit-analysis/
source_site_url: https://microsoft.github.io/
source_title: Use Copilot Cowork to dig deep into your Power Platform credit consumption
  data
source_name: The Custom Engine (Microsoft Copilot Studio CAT team)
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2026-11-20'
source_updated_at: '2026-11-20'
source_type: article
faq:
- question: How do I enable the Power Platform Admin plugin in Copilot Cowork?
  answer: Open the plugin area under Customize in Cowork, enable Power Platform Admin
    (Preview), then connect through the Power Platform for Admins V2 connection using
    OAuth.
- question: Which admin role is required to connect the Power Platform Admin plugin
    in Cowork?
  answer: You need Cowork access and a connected account holding the Power Platform
    Administrator, Dynamics 365 Administrator, or Global Administrator role.
- question: Can I schedule a weekly Copilot Credit report by environment in Cowork?
  answer: Yes, Cowork scheduled prompts can prepare a recurring per-environment report
    with a chart; approve the schedule, time zone and delivery settings, and email
    delivery depends on your setup.
animation:
  video: /assets/img/animations/9a199f8a57482fd819979652-en.mp4
  poster: /assets/img/animations/9a199f8a57482fd819979652-en.poster.webp
  width: 800
  height: 450
  alt: "Four steps show how to use Copilot Cowork for credit reporting: enable the Power Platform Admin preview plugin, connect with Power Platform for Admins V2 OAuth, ask for per environment charts, and schedule a weekly report."
---

## TL;DR

The Power Platform Admin preview plugin in Copilot Cowork turns plain-language questions into per-environment Copilot Credit reports. Enable it under Customize, connect via Power Platform for Admins V2 OAuth with an admin role, and it returns consumption, allocated credits and snapshot dates. Ask for charts, confirm the reporting period, and schedule weekly reports; the plugin stays read-only.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Enable the Power Platform Admin preview plugin in Cowork with a Power Platform Administrator, Dynamics 365 Administrator or Global Administrator account, then ask for per-environment credit tables and charts instead of manual reporting.
- Security/Compliance: The plugin is read-only and requests data-access approval before answering; review the proposed schedule and delivery settings before activating any recurring report.
- Leadership/Business: A scheduled weekly chart of consumption and allocated credits per environment shows where Copilot Credit spend concentrates and needs no reporting project.
