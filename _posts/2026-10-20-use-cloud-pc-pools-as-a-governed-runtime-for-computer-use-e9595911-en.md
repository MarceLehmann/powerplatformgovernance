---
title: Use Cloud PC pools as a governed runtime for Computer Use
description: Cloud PC pools give Copilot Studio Computer Use agents Entra ID joined,
  Intune enrolled Windows 11 environments for enterprise automation.
date: '2026-10-20T17:08:27Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- compliance
- environments
- copilot-studio
content_type: curated_summary
curation_id: e9595911a09f620889303ada
image:
  path: "/assets/img/curated/e9595911a09f620889303ada.png"
  alt: 'Governance card: Enterprise automation needs a governed runtime. Use Cloud
    PC pools for identity, security and compliance controls.'
permalink: "/en/posts/use-cloud-pc-pools-as-a-governed-runtime-for-computer-use-e9595911/"
translation_url: "/de/posts/use-cloud-pc-pools-as-a-governed-runtime-for-computer-use-e9595911/"
source_url: https://microsoft.github.io/mcscatblog/posts/cua-cloudpcpool-in-copilotstudio/
source_site_url: https://microsoft.github.io/
source_title: 'Video Demo: Implement Cloud PC Pool for Computer Use in Microsoft Copilot
  Studio'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Jay Padimiti
source_published_at: '2026-01-09'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What does a Cloud PC pool provide for Computer Use in Copilot Studio?
  answer: A Cloud PC pool provides Microsoft hosted Windows 11 Cloud PCs as the Computer
    Use runtime, with Entra ID joining and Intune enrollment.
- question: Why is a hosted browser unsuitable for internal Copilot Studio automation?
  answer: A hosted browser is not Entra ID joined or Intune managed, so it cannot
    access internal systems or receive centralized governance controls.
- question: What can administrators monitor in a Copilot Studio Cloud PC pool?
  answer: Administrators can monitor Cloud PC instances, view run status, track queued
    sessions, use admin controls and review audit logs.
---

## TL;DR

Microsoft Copilot Studio Computer Use can run on Cloud PC pools, Microsoft hosted Windows 11 Cloud PCs that are Entra ID joined and Intune enrolled. This enables single sign on to internal systems, policy enforcement, security configuration and compliance controls, unlike the unmanaged hosted browser runtime.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose Cloud PC pools when Computer Use must reach internal systems, because hosted browsers are not Entra ID joined or Intune managed.
- Admins/CoE: Manage the pool, monitor Cloud PC instances, review run status and queued sessions, and use admin controls and audit logs.
- Security/Compliance: Apply existing identity, security and compliance policies through Entra ID and Intune enrollment.
- Leadership/Business: Treat Cloud PC pools as a scalable, Microsoft managed runtime for production automation with less infrastructure maintenance.
