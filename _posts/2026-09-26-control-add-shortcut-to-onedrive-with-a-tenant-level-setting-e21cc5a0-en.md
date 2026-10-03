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
faq:
  - question: "Which setting turns off Add shortcut to OneDrive for the whole SharePoint tenant?"
    answer: "The setting is called DisableAddToOneDrive and is set to True. It applies at tenant level rather than per site and is set with a PnP PowerShell script. That lets you control, organisation-wide, the feature that places shortcuts of SharePoint folders into a user's OneDrive when you want to restrict it for governance or support reasons."
  - question: "Why use a script instead of manual administration for this SharePoint setting?"
    answer: "The author did not want to manage the setting manually or site by site, because the requirement was a tenant-level change. The Microsoft 365 interface was also not ideal for something repeatable that could become part of an administrative process, and the script had to sign in without an interactive administrator login. A script covers all of this."
  - question: "How does the script sign in to the tenant without an interactive login?"
    answer: "It uses non-interactive certificate-based authentication through an Azure AD app registration. For that you need the client ID, the certificate thumbprint and the tenant identifier. The approach fits environments where Microsoft 365 administration already relies on certificates and makes the script suitable for automation."
  - question: "Which steps does the script take to apply the DisableAddToOneDrive setting?"
    answer: "It connects to the SharePoint Online tenant administration site, authenticates with the certificate, records when the script started and who executed it, disables the feature at tenant level, reports success or failure and disconnects. In the try, catch and finally structure, the finally block attempts to disconnect regardless of the outcome. The configuration values sit at the top of the script."
  - question: "Which improvements does the author suggest for the Add shortcut to OneDrive script?"
    answer: "He lists possible enhancements: more detailed logging, validation of configuration values, structured output for automation platforms and reporting the current tenant setting before any change is made. The complete script is available on GitHub in the PnP Script Samples repository, under the sample for disabling the SharePoint Online Add shortcut to OneDrive feature."
---

## TL;DR

Set DisableAddToOneDrive = True to disable SharePoint Online Add Shortcut to OneDrive at tenant level. The described PnP PowerShell workflow connects to the SharePoint Online administration site with an Azure AD app registration and certificate, logs execution, reports success or failure, and disconnects cleanly.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Apply DisableAddToOneDrive at tenant level with a focused PnP PowerShell script when site-by-site or manual administration is unsuitable.
- Security/Compliance: Use the described non-interactive app registration and certificate authentication, while retaining configuration and execution logging for a repeatable administrative process.
- Leadership/Business: Decide whether the convenience of SharePoint shortcuts outweighs governance and support concerns, since the setting removes the feature across the tenant.
