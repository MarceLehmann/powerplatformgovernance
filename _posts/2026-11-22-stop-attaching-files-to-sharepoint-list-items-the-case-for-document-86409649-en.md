---
title: 'Stop attaching files to SharePoint list items: the case for document libraries'
description: List attachments hide files in system folders, escape versioning, Purview
  retention and Copilot agents. Document libraries with a lookup column keep working
  files automatable, compliant and findable.
date: '2026-11-22T16:49:51Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- compliance
- security
- power-automate
- copilot-studio
content_type: curated_summary
curation_id: 8640964915902fecaede98af
image:
  path: "/assets/img/curated/8640964915902fecaede98af.png"
  alt: 'Governance card: Attachments hide files from flows, versioning and Purview.
    Working files belong in a library.'
permalink: "/en/posts/stop-attaching-files-to-sharepoint-list-items-the-case-for-document-86409649/"
translation_url: "/de/posts/stop-attaching-files-to-sharepoint-list-items-the-case-for-document-86409649/"
source_url: https://www.mvptreff.de/2026/11/22/finger-weg-von-der-bueroklammer-warum-dateien-nicht-an-sharepoint-listeneintraege-gehoeren/
source_site_url: https://www.mvptreff.de/
source_title: 'Finger weg von der Büroklammer: Warum Dateien nicht an SharePoint-Listeneinträge
  gehören'
source_name: MVPTreff
source_language: de
source_language_name: Deutsch
source_author: Ferdi Lethen-Oellers
source_published_at: '2026-11-22'
source_type: article
faq:
- question: How do I get attachments from a SharePoint list item in Power Automate?
  answer: Fetch the attachment list, loop over each attachment and get its content
    in a separate action. A document library with a lookup column avoids the loop.
- question: Can Copilot agents read SharePoint list attachments as a knowledge source?
  answer: No, Agent Builder support for SharePoint lists excludes attachments and
    lookup columns. Files in document libraries can be added as a knowledge source
    instead.
- question: Does a Purview retention policy cover files attached to a SharePoint list
    item?
  answer: No, retention policies do not support list items. Only a retention label
    marking the entry as a record carries the attachment along.
---

## TL;DR

SharePoint list attachments live in hidden folders, inherit the item&\#39;s permissions and are never versioned; a single attachment is capped at 250 MB. Power Automate needs two actions plus a loop, Graph only reports whether attachments exist, Purview retention policies skip list items, and Copilot agents cannot see attachments. Document libraries with a lookup column deliver versioning, metadata, retention and agent access.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Power Automate needs two actions and a loop to reach one attachment, and Graph cannot upload, list or download them. A document library with a lookup column hands your flow the file and its metadata directly.
- Admins/CoE: Inventory lists with attachments using PnP PowerShell, which requires its own Entra app registration since September 2024. Decide per list whether it becomes a library or links to one, and disable attachments only after a tested migration.
- Security/Compliance: Retention policies do not support list items, default sensitivity labels exist only per library, and attachments inherit the item&\#39;s permissions with no per-file control. Files in libraries close these gaps.
