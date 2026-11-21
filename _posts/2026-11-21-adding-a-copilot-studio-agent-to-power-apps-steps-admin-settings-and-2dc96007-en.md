---
title: 'Adding a Copilot Studio Agent to Power Apps: Steps, Admin Settings and Limits'
description: 'Step-by-step: publish a Copilot Studio agent to Microsoft Copilot, enable
  Microsoft 365 Copilot per environment and app, and know the current limits.'
date: '2026-11-21T16:38:04Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- power-apps
- copilot-studio
content_type: curated_summary
curation_id: 2dc960073f29719dc46b39ac
image:
  path: "/assets/img/curated/2dc960073f29719dc46b39ac.png"
  alt: 'Governance card: Old controls are gone. Environment settings now decide how
    agents reach your apps.'
permalink: "/en/posts/adding-a-copilot-studio-agent-to-power-apps-steps-admin-settings-and-2dc96007/"
translation_url: "/de/posts/adding-a-copilot-studio-agent-to-power-apps-steps-admin-settings-and-2dc96007/"
source_url: https://www.spguides.com/add-copilot-studio-agent-to-power-apps/
source_site_url: https://www.spguides.com/
source_title: How to Add a Copilot Studio Agent to Power Apps (2026)
source_name: SPGuides
source_language: en
source_language_name: English
source_author: Bijay Kumar
source_published_at: '2026-11-21'
source_type: article
faq:
- question: Is the Chatbot control still available in Power Apps Studio's Insert pane?
  answer: No. It is gone from the Insert pane, and since 2 February 2026 the Copilot
    control cannot be added to new canvas apps either.
- question: Which Power Platform admin center setting turns on Microsoft 365 Copilot
    for canvas apps?
  answer: In the Power Platform admin center, open Copilot, then Microsoft 365 Copilot,
    and set canvas apps to On for the chosen environment.
- question: Can a Copilot Studio agent update SharePoint list data from a canvas app?
  answer: Not through Copilot alone, because Copilot in apps is read-only; the agent
    needs its own tools such as an agent flow to change records.
animation:
  video: /assets/img/animations/2dc960073f29719dc46b39ac-en.mp4
  poster: /assets/img/animations/2dc960073f29719dc46b39ac-en.poster.webp
  width: 800
  height: 450
  alt: "Four steps: publish the agent to Teams and Microsoft 365, enable Microsoft 365 Copilot for the environment in admin settings, turn it on in the app, then publish the app."
---

## TL;DR

The Chatbot control is gone from Power Apps Studio, and since 2 February 2026 the Copilot control cannot be added to new canvas apps. The supported path: publish the agent to Teams and Microsoft 365, have an admin enable Microsoft 365 Copilot for the environment, switch it on in the app, then publish. Regional rollout, per-user licensing and read-only answers still apply.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Retire the Chatbot control guidance, publish agents to the Teams and Microsoft 365 channels, and set M365 Copilot in the app on make.preview.powerapps.com before publishing.
- Admins/CoE: Turn on Microsoft 365 Copilot per environment in the Power Platform admin center, confirm the tenant allows Dataverse data in Microsoft Copilot with Dataverse Search on, and check per-user licenses.
- Security/Compliance: Copilot in apps only reads data, so record changes require the agent&\#39;s own tools such as agent flows, which changes your review scope.
- Leadership/Business: The preview rolls out by region and needs Microsoft 365 Copilot licenses, so plan availability before promising agents in apps.
