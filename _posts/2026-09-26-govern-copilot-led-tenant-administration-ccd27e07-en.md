---
title: Govern Copilot-led tenant administration
description: PnP PowerShell with Copilot turns natural-language requests into tenant
  operations, making authentication, permissions and review essential safeguards.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: ccd27e07a80dd677b450b7fe
image:
  path: "/assets/img/curated/ccd27e07a80dd677b450b7fe.png"
  alt: 'Governance card: Natural language can change tenant configuration. Govern
    it like administration.'
permalink: "/en/posts/govern-copilot-led-tenant-administration-ccd27e07/"
translation_url: "/de/posts/govern-copilot-led-tenant-administration-ccd27e07/"
source_url: https://pnp.github.io/blog/post/copilot-pnp-powershell-and-the-new-shape-of-microsoft-365-administration/
source_site_url: https://pnp.github.io/
source_title: Copilot, PnP PowerShell, and the New Shape of Microsoft 365 Administration
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Josiah Opiyo
source_published_at: '2026-09-10'
source_type: article
faq:
  - question: "What does the PnP PowerShell agent for Copilot do for tenant administrators?"
    answer: "It turns a request written in plain language into proper PnP PowerShell commands, so administrators describe the outcome instead of remembering syntax."
  - question: "Does natural language make Copilot-driven tenant administration safe by default?"
    answer: "No. The article states that natural language does not make administrative actions safe by itself."
  - question: "Is the PnP PowerShell Copilot agent finished tooling?"
    answer: "No. Parts of it are still works in progress. Skills for creating, evaluating and updating scripts are announced but not finished, so treat the script features as not yet available."
---

## TL;DR

The PnP PowerShell Copilot agent supports setup, authentication and Microsoft 365 management tasks such as creating sites, configuring content, updating pages and handling permissions. Interactive login or app registration can be used. Planned script creation and evaluation skills remain works in progress, so organisations should test the approach before operational use.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Restrict who can use the agent, review generated actions and preserve maintainability because natural-language requests can execute multi-step tenant changes.
- Security/Compliance: Assess interactive login, certificate and secret-based authentication choices and required permissions because each option affects the automation security posture.
