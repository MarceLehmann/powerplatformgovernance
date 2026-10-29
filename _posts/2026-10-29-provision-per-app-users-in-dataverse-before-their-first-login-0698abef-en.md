---
title: Provision Per-App Users in Dataverse Before Their First Login
description: Use a security-group trigger and the Power Platform for Admins Force
  Sync user action to provision per-app users before access errors occur.
date: '2026-10-29T10:34:38Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- environments
- dataverse
- power-automate
content_type: curated_summary
curation_id: '0698abef7fa3372fde475a2a'
image:
  path: "/assets/img/curated/0698abef7fa3372fde475a2a.png"
  alt: 'Governance card: Per-app users are not synced automatically. Provision them
    before first login.'
permalink: "/en/posts/provision-per-app-users-in-dataverse-before-their-first-login-0698abef/"
translation_url: "/de/posts/provision-per-app-users-in-dataverse-before-their-first-login-0698abef/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-175-force-sync-per-app-users-dataverse-power-automate/
source_site_url: https://www.powerplatformtip.com/
source_title: Force-Sync Per-App-Licensed Users into Dataverse with Power Automate
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-10-29'
source_updated_at: '2026-10-28'
source_type: article
faq:
- question: How do I use Power Automate Force Sync user for per-app Dataverse users?
  answer: Trigger a flow when a user joins the environment security group, then call
    Force Sync user with the environment ID and Entra object ID.
- question: Why are per-app licensed users missing from the Dataverse SystemUser table?
  answer: Per-app users in a Dataverse environment are added on demand, unlike Premium
    users picked up by periodic background synchronization.
- question: Does Dataverse Force Sync user assign security roles automatically?
  answer: No. Force Sync user creates or updates the SystemUser record, while privileges
    still require a team-based or direct security-role assignment.
publisher_disclosure: Both publications are edited by Marcel Lehmann.
---

## TL;DR

In managed production environments using per-app licensing, users are added to Dataverse on demand rather than through background sync. Trigger Power Automate when a user joins the environment security group, then call Force Sync user with the environment ID and Entra object ID before first sign-in.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Check that new per-app users appear in Dataverse before they launch the app, because missing SystemUser records can cause organization membership errors.
- Admins/CoE: Trigger Force Sync user from environment security-group membership and govern target environments with Environment Groups for consistent onboarding.
- Security/Compliance: Use the environment security group as the authoritative membership signal, and avoid role-assignable groups because the documented trigger does not support them.
- Leadership/Business: Expect faster onboarding without manual refreshes, while remembering that synchronization alone does not grant security-role privileges.
