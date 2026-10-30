---
title: Reset compromised SharePoint Hero Links before they remain overshared
description: SharePoint Hero Links cannot be deleted directly. Resetting an Anyone
  link invalidates the old URL, creates a restricted replacement and can remove access.
date: '2026-10-30T16:47:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- governance
content_type: curated_summary
curation_id: f29ccc06144994bfb3b724fb
image:
  path: "/assets/img/curated/f29ccc06144994bfb3b724fb.png"
  alt: 'Governance card: Reset compromised Hero Links before oversharing spreads.'
permalink: "/en/posts/reset-compromised-sharepoint-hero-links-before-they-remain-overshared-f29ccc06/"
translation_url: "/de/posts/reset-compromised-sharepoint-hero-links-before-they-remain-overshared-f29ccc06/"
source_url: https://reshmeeauckloo.com/posts/sharepoint-herolink-reset/
source_site_url: https://reshmeeauckloo.com/
source_title: SharePoint Hero Link reset
source_name: Blog about anything related to my learnings
source_language: en
source_language_name: English
source_published_at: '2026-10-30'
source_type: article
faq:
- question: How do I revoke an overshared SharePoint Hero Link?
  answer: Use SharePoint's Reset link option for the file or folder. It invalidates
    the current Hero Link and creates a replacement with Only people added access.
- question: What happens to users after resetting a SharePoint Hero Link?
  answer: People who had access only through the old URL lose access. Resetting does
    not restore their access to the item.
- question: How can PnP.PowerShell reset SharePoint Hero Links across a site?
  answer: The script checks items with unique permissions, identifies main links whose
    audience is Anyone, resets them, and exports old and new details to CSV.
animation:
  src: /assets/img/animations/f29ccc06144994bfb3b724fb-en.gif
  poster: /assets/img/animations/f29ccc06144994bfb3b724fb-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows a script checking items with unique permissions, finding Anyone main links, resetting the link, and exporting old and new details to CSV."
---

## TL;DR

SharePoint Hero Links cannot be deleted like traditional sharing links. The Reset link option invalidates the current URL, creates a new link for Only people added, and removes access for people who relied only on the old link. A PnP.PowerShell script finds unique-permission items with Anyone links and exports old and new details to CSV.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Review the target site and expected access impact before resetting an Anyone Hero Link, because the old URL is invalidated and link-only users lose access.
- Security/Compliance: Treat an overshared Hero Link as a revocation case, and retain the script CSV containing old and new link details for review.
