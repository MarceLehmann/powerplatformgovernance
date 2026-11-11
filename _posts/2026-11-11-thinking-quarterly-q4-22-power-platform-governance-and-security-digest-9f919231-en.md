---
title: 'Thinking Quarterly Q4/22: Power Platform governance and security digest'
description: A quarterly digest covering the CoE Starter Kit Setup Wizard, environment
  deletion policies, shared connection risks, Azure AD groups and other Power Platform
  governance topics.
date: '2026-11-11T16:39:37Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- environments
- coe
- dataverse
content_type: curated_summary
curation_id: 9f919231402d464edbc53ecd
image:
  path: "/assets/img/curated/9f919231402d464edbc53ecd.png"
  alt: 'Governance card: Make governance easier to deploy, update and clean up.'
permalink: "/en/posts/thinking-quarterly-q4-22-power-platform-governance-and-security-digest-9f919231/"
translation_url: "/de/posts/thinking-quarterly-q4-22-power-platform-governance-and-security-digest-9f919231/"
source_url: https://jukkaniiranen.com/2023/01/thinking-quarterly-q4-22/
source_site_url: https://jukkaniiranen.com/
source_title: Thinking Quarterly, Q4/22
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2023-01-08'
source_type: article
faq:
- question: How does the CoE Starter Kit Setup Wizard help with deployment?
  answer: The Setup Wizard lowers the barrier to deploying and updating CoE Starter
    Kit components. The digest presents it as a major update.
- question: What do Dataverse for Teams deletion policies help administrators manage?
  answer: They help clean up unnecessary Dataverse for Teams environments. The policies
    address the lifecycle challenge created by fast environment creation.
- question: What is the security risk of implicitly shared Power Apps connections?
  answer: Implicitly shared connections can use shared credentials for every app user.
    Makers and customers may be unaware of the resulting security risk.
---

## TL;DR

The CoE Starter Kit Setup Wizard lowers the barrier to deploying and updating CoE components. Dataverse for Teams deletion policies help remove unnecessary environments, while implicitly shared Power Apps connections can expose shared credentials to all app users.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Use the CoE Starter Kit Setup Wizard to reduce deployment and update effort, and review its documentation before implementation.
- Admins/CoE: Apply Dataverse for Teams deletion policies to clean up unnecessary environments and improve lifecycle management.
- Security/Compliance: Assess implicitly shared Power Apps connections because shared credentials may be used by every connector user.
- Leadership/Business: Treat Power Platform licensing as a governance concern, especially for CoE service accounts and anonymous Power Pages visitors.
