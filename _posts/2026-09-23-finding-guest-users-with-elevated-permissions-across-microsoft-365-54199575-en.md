---
title: Finding Guest Users with Elevated Permissions Across Microsoft 365
description: A PnP PowerShell script cross-checks guest accounts against Entra ID
  roles, Teams ownership and SharePoint site admin lists in one CSV report.
date: '2026-09-23T23:44:10Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- governance
- ownership
content_type: curated_summary
curation_id: 541995750816daffc85f530e
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-37.png
  alt: Governance card about finding guest users with elevated permissions.
permalink: "/en/posts/finding-guest-users-with-elevated-permissions-across-microsoft-365-54199575/"
translation_url: "/de/posts/finding-guest-users-with-elevated-permissions-across-microsoft-365-54199575/"
source_url: https://pnp.github.io/blog/post/finding-guest-users-with-elevated-permissions-across-microsoft-365/
source_site_url: https://pnp.github.io/
source_title: Finding Guest Users with Elevated Permissions Across Microsoft 365
source_name: Microsoft 365 & Power Platform Community Blog
source_author: Josiah Opiyo
source_language: en
source_language_name: English
source_published_at: '2026-08-03'
faq:
  - question: "Which permissions does the guest user script check in Microsoft 365?"
    answer: "It checks three areas: Microsoft Entra ID directory roles, Teams ownership and SharePoint site collection administrators."
  - question: "What does the CSV report from the guest permissions script contain?"
    answer: "The script exports a CSV with five columns: Display Name, User Principal Name, Permission Type, Assigned Role and Resource. The results from Entra ID, Teams and SharePoint end up in a single report."
  - question: "Why do guests keep elevated permissions after a project has ended?"
    answer: "Permissions are spread across different Microsoft 365 admin interfaces, so nobody sees them in one place. The author describes a guest consultant who was still a Teams owner months after the project ended."
---
## TL;DR

A PnP PowerShell script cross-checks guest accounts against Entra ID directory roles, Teams ownership, and SharePoint site collection administrator lists, then exports a CSV with display name, UPN, permission type and resource — closing a gap where no built-in Microsoft 365 report combines all three.

{% include curated-attribution.html %}

## Governance takeaway

- Security/Compliance: schedule this script as a recurring review, not a one-off audit — guest accounts routinely keep admin rights after a project ends simply because nobody re-checks three separate portals by hand.
- Admins/CoE: get a concrete tool out of it — run it against Entra ID roles, Teams ownership, and SharePoint site admin lists in one pass instead of stitching results together manually.
- Leadership/Business: treat a stale guest account with elevated rights as a live external-access risk, not a cleanup task that can wait for the next audit cycle.
