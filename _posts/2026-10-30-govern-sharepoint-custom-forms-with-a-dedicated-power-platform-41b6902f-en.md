---
title: Govern SharePoint Custom Forms with a Dedicated Power Platform Environment
description: Custom SharePoint forms are canvas apps in disguise. A dedicated production
  environment and the SharePoint Custom Form Maker role improve discovery and control.
date: '2026-10-30T16:57:06Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- ownership
- security
- power-apps
content_type: curated_summary
curation_id: 41b6902fe7ccee545be2b2c6
image:
  path: "/assets/img/curated/41b6902fe7ccee545be2b2c6.png"
  alt: 'Governance card: Custom forms are apps in disguise. Govern their environment
    before they become invisible risks.'
permalink: "/en/posts/govern-sharepoint-custom-forms-with-a-dedicated-power-platform-41b6902f/"
translation_url: "/de/posts/govern-sharepoint-custom-forms-with-a-dedicated-power-platform-41b6902f/"
source_url: https://www.michaelroth42.com/post/2025-09-10-custom-sharepoint-forms-an-admins-survival-guide/
source_site_url: https://www.michaelroth42.com/
source_title: SharePoint Custom Forms - An Admin’s Survival Guide
source_name: MichaelRoth42 Blog
source_language: en
source_language_name: English
source_author: Michael Roth
source_published_at: '2025-09-10'
source_type: article
faq:
- question: Where are Power Apps custom SharePoint forms stored by default?
  answer: Custom SharePoint forms are stored in the default environment unless an
    administrator assigns another environment for future forms.
- question: What does the SharePoint Custom Form Maker security role allow?
  answer: The role lets users create, edit and use custom SharePoint forms without
    granting rights to create other apps or flows.
- question: How can administrators move existing custom SharePoint forms out of the
    Default environment?
  answer: Administrators can use the open source FlowPowerAppsMigrator tool to move
    existing custom forms and flows between environments.
---

## TL;DR

Power Apps custom SharePoint forms are stored in the default environment unless admins assign a dedicated environment with Set-AdminPowerAppSharePointFormEnvironment. The environment must be production, have Dataverse storage enabled, and enable Dynamics 365 apps so admins can install the SharePoint Custom Form Maker role.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Treat a customized SharePoint form as a governed canvas app because it can contain Power Fx, lookups, validation and flows.
- Admins/CoE: Assign a dedicated production environment and set it as the default for future custom forms so they are easier to find and manage.
- Security/Compliance: Grant the SharePoint Custom Form Maker role and review permissions because SharePoint and Power Apps permissions can differ.
