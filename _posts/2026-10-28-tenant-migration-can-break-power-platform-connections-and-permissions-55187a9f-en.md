---
title: Tenant Migration Can Break Power Platform Connections and Permissions
description: Tenant-to-tenant moves can sever Teams chat history, permissions, Power
  Automate connections and Power Apps dependencies unless they are rebuilt deliberately.
date: '2026-10-28T16:43:13Z'
author: governance_editorial
lang: en
toc: false
tags:
- environments
- alm
- power-apps
- power-automate
content_type: curated_summary
curation_id: 55187a9f2f752480b9465ebe
image:
  path: "/assets/img/curated/55187a9f2f752480b9465ebe.png"
  alt: 'Governance card: Tenant moves break the wiring. Reconnect every dependency
    before cutover.'
permalink: "/en/posts/tenant-migration-can-break-power-platform-connections-and-permissions-55187a9f/"
translation_url: "/de/posts/tenant-migration-can-break-power-platform-connections-and-permissions-55187a9f/"
source_url: https://www.m365.fm/blog/m365-tenant-to-tenant-migration-teams-chat-history/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft 365 Tenant-to-Tenant Migration Chat History: What Survives
  and What Breaks'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-28'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: What happens to Power Automate connection references after a tenant migration?
  answer: Power Automate connection references point to the old tenant and break after
    migration. Developers must sign in again and reconnect each trigger and action.
- question: Why do Teams channel permissions need rebuilding after a tenant move?
  answer: Teams channel permissions do not automatically copy across tenant boundaries.
    Administrators must deliberately map and rebuild access in the destination environment.
- question: Do native Microsoft tools migrate complete Teams chat histories?
  answer: Native tools handle core workloads such as mailboxes and basic OneDrive
    content, but complex Teams chat histories generally require specialized third-party
    migration solutions.
---

## TL;DR

Power Automate flows and Power Apps are tied to originating user accounts and SharePoint site IDs. After a tenant move, connection references break, so developers must re-authenticate every trigger and action against the destination tenant. Permissions for Teams channels, SharePoint sites and collaborative documents also require deliberate remapping.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Reconnect every Power Automate trigger and action after migration because transported flow definitions can still fail when their connection references point to the old tenant.
- Admins/CoE: Map destination permissions and rebuild access for Teams channels, SharePoint sites and collaborative documents because tenant boundaries do not copy the surrounding wiring automatically.
- Security/Compliance: Treat chat history, shared links and permissions as migration risks because tenant isolation can sever historical context and restrict access to corporate assets.
- Leadership/Business: Require a planned freeze and cutover process because data drift and broken automations can disrupt business continuity after a merger or divestiture.
