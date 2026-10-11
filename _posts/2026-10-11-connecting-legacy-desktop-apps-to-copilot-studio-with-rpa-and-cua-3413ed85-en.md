---
title: Connecting legacy desktop apps to Copilot Studio with RPA and CUA
description: Compare deterministic Power Automate RPA with Computer Use Agents, including
  Dataverse retrieval, machine setup, environment requirements and preview risks.
date: '2026-10-11T16:55:45Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- power-automate
- environments
- security
- dataverse
content_type: curated_summary
curation_id: 3413ed85bc9da811e13ca849
image:
  path: "/assets/img/curated/3413ed85bc9da811e13ca849.png"
  alt: 'Governance card: Computer Use changes the machine pool. Check every desktop
    flow before enabling it.'
permalink: "/en/posts/connecting-legacy-desktop-apps-to-copilot-studio-with-rpa-and-cua-3413ed85/"
translation_url: "/de/posts/connecting-legacy-desktop-apps-to-copilot-studio-with-rpa-and-cua-3413ed85/"
source_url: https://microsoft.github.io/mcscatblog/posts/connecting-legacy-desktop-apps-to-copilot-studio/
source_site_url: https://microsoft.github.io/
source_title: 'Bridging the Gap: Connecting Legacy Desktop Applications to Copilot
  Studio Agents'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: James Papadimitriou
source_published_at: '2026-04-15'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What happens when a Power Automate machine is enabled for Computer Use?
  answer: Enabling Computer Use removes the machine from standard desktop flow connections
    and breaks existing connections tied to that machine.
- question: Which Power Platform environment is required for Copilot Studio Computer
    Use?
  answer: Computer Use currently requires a US-based Power Platform environment. The
    target machine also needs Power Automate Machine Runtime installed and registered.
- question: Is Copilot Studio Computer Use suitable for mission-critical production
    workloads?
  answer: No. Computer Use is in preview, has no SLA guarantees and is not recommended
    for mission-critical production workloads.
---

## TL;DR

Copilot Studio can access legacy desktop data through a scheduled cloud flow, a Power Automate desktop flow and a custom Dataverse table. Computer Use Agents offer direct, vision-based interaction, but require a US-based environment, a configured machine and a dedicated account. Enabling Computer Use removes that machine from standard desktop flow connections.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose deterministic RPA for stable, high-volume or mission-critical interfaces, and use Computer Use when screens change or decisions require visual reasoning.
- Admins/CoE: Verify the environment is US-based, register the machine, enable Computer Use in Power Automate settings and check existing connections first.
- Security/Compliance: Use a dedicated Computer Use account and treat the preview status, lack of SLA and machine connection breakage as deployment risks.
