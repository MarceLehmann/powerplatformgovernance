---
title: Control Add Shortcut to OneDrive with a tenant-level setting
description: A focused PnP PowerShell script disables SharePoint Online Add Shortcut
  to OneDrive across the tenant using certificate-based authentication.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
content_type: curated_summary
curation_id: e21cc5a0f1ec41f0a51b1b10
image:
  path: "/assets/img/curated/e21cc5a0f1ec41f0a51b1b10.png"
  alt: 'Governance card: Tenant settings need control. Disable unwanted shortcuts
    consistently.'
permalink: "/en/posts/control-add-shortcut-to-onedrive-with-a-tenant-level-setting-e21cc5a0/"
translation_url: "/de/posts/control-add-shortcut-to-onedrive-with-a-tenant-level-setting-e21cc5a0/"
source_url: https://pnp.github.io/blog/post/taking-control-of-add-shortcut-to-onedrive-in-sharepoint-online/
source_site_url: https://pnp.github.io/
source_title: Taking Control of Add Shortcut to OneDrive in SharePoint Online
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Josiah Opiyo
source_published_at: '2026-09-04'
source_type: article
---

## TL;DR

Set DisableAddToOneDrive = True to disable SharePoint Online Add Shortcut to OneDrive at tenant level. The described PnP PowerShell workflow connects to the SharePoint Online administration site with an Azure AD app registration and certificate, logs execution, reports success or failure, and disconnects cleanly.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Apply DisableAddToOneDrive at tenant level with a focused PnP PowerShell script when site-by-site or manual administration is unsuitable.
- Security/Compliance: Use the described non-interactive app registration and certificate authentication, while retaining configuration and execution logging for a repeatable administrative process.
- Leadership/Business: Decide whether the convenience of SharePoint shortcuts outweighs governance and support concerns, since the setting removes the feature across the tenant.
