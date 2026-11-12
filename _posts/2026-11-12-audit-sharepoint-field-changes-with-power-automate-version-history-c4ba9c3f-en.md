---
title: Audit SharePoint Field Changes with Power Automate Version History
description: Use the SharePoint REST versions endpoint to compare the two newest item
  versions and record field-level before and after changes.
date: '2026-11-12T10:41:06Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- compliance
- power-automate
content_type: curated_summary
curation_id: c4ba9c3f9a7ebd12ade35b6f
image:
  path: "/assets/img/curated/c4ba9c3f9a7ebd12ade35b6f.png"
  alt: 'Governance card: SharePoint versions reveal the old value. Compare them before
    your flow writes the audit trail.'
permalink: "/en/posts/audit-sharepoint-field-changes-with-power-automate-version-history-c4ba9c3f/"
translation_url: "/de/posts/audit-sharepoint-field-changes-with-power-automate-version-history-c4ba9c3f/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-177-sharepoint-version-changes-power-automate/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 177: See What Actually Changed Between SharePoint
  Versions with Power Automate"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-11-12'
source_type: article
faq:
- question: How does Send an HTTP request to SharePoint retrieve previous field values?
  answer: A GET request to the item's /versions endpoint returns the field values
    stored in each retained SharePoint version. The flow compares those entries.
- question: How can Power Automate compare the two newest SharePoint versions?
  answer: Sort the returned versions by VersionId in descending order, assign the
    first two entries to variables, and compare selected internal column names.
- question: Why does a SharePoint version comparison need versioning enabled?
  answer: Versioning must be enabled on the list or library because the /versions
    collection supplies the historical entries required for a before and after comparison.
publisher_disclosure: Both publications are edited by Marcel Lehmann.
---

## TL;DR

Use Power Automate Send an HTTP request to SharePoint with a GET request to the item&\#39;s /versions endpoint. Sort versions by VersionId, compare the two newest entries for selected internal column names, and record old and new values. Versioning must be enabled, and the flow should require at least two versions.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Compare selected internal column names between the two newest versions to produce clear before and after values for each audited field.
- Admins/CoE: Enable versioning on relevant SharePoint lists and libraries, then guard flows against items with fewer than two versions.
- Security/Compliance: Store or distribute the generated field-level deltas as an audit trail, because the standard trigger exposes only the new state.
