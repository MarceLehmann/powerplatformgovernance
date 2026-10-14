---
title: SharePoint Hero Links Can Distort Sharing and Permission Reports
description: Hero links may exist without unique permissions, so SharePoint inventories
  must check permission inheritance before treating every link as deliberate sharing.
date: '2026-10-14T10:39:45Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
content_type: curated_summary
curation_id: 8c457fc386f032ccdb0406fe
image:
  path: "/assets/img/curated/8c457fc386f032ccdb0406fe.png"
  alt: 'Governance card: A sharing link is not proof of a permission break. Check
    inheritance before acting.'
permalink: "/en/posts/sharepoint-hero-links-can-distort-sharing-and-permission-reports-8c457fc3/"
translation_url: "/de/posts/sharepoint-hero-links-can-distort-sharing-and-permission-reports-8c457fc3/"
source_url: https://reshmeeauckloo.com/posts/sharepoint-herolink-inventory-powershell/
source_site_url: https://reshmeeauckloo.com/
source_title: SharePoint Sharing/Hero Link inventory
source_name: Blog about anything related to my learnings
source_language: en
source_language_name: English
source_published_at: '2026-10-13'
source_type: article
faq:
- question: How does SharePoint Copy link behave when hero links are enabled?
  answer: Copy link returns the hero link instead of the underlying path, even when
    the default setting is OnlyPeopleAdded.
- question: What does HasUniqueRoleAssignments add to a SharePoint sharing-link inventory?
  answer: It shows whether the linked file or folder has unique permissions, helping
    separate permission exceptions from hero-link noise.
- question: Why can a SharePoint hero link appear as Anonymous with blank users?
  answer: Hero links may report Anonymous scope, no expiry date and blank users even
    when additional users were added.
---

## TL;DR

A PnP PowerShell inventory can enumerate SharePoint file and folder sharing links, then compare each item with HasUniqueRoleAssignments. Hero links may exist without unique permissions and can appear as Anonymous, without an expiry date, with blank users and a View type, so exported links need interpretation before cleanup.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Run the inventory and compare each link with HasUniqueRoleAssignments, because a hero link does not prove broken inheritance.
- Security/Compliance: Treat Anonymous scope, blank users and missing expiry as possible hero-link indicators, not conclusive evidence of deliberate exposure.
- Leadership/Business: Expect migration and cleanup work to be harder when Copy link returns opaque hero-link IDs instead of understandable paths.
