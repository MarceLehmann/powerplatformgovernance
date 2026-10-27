---
title: Attended vs unattended Power Automate Desktop automation
description: Power Automate Desktop attended flows need human supervision, while unattended
  flows require paid capacity, clean machines, stable resolution and standard permissions.
date: '2026-10-27T04:50:05Z'
author: governance_editorial
lang: en
toc: false
tags:
- power-automate
- security
- environments
- compliance
content_type: curated_summary
curation_id: fd71fdc6371e2566227b9bc8
image:
  path: "/assets/img/curated/fd71fdc6371e2566227b9bc8.png"
  alt: 'Governance card: Unattended bots need clean machines and controlled permissions.
    Small setup gaps can stop automation.'
permalink: "/en/posts/attended-vs-unattended-power-automate-desktop-automation-fd71fdc6/"
translation_url: "/de/posts/attended-vs-unattended-power-automate-desktop-automation-fd71fdc6/"
source_url: https://www.m365.fm/blog/attended-vs-unattended-power-automate-desktop-modes/
source_site_url: https://www.m365.fm/
source_title: 'Attended vs Unattended RPA: Which Power Automate Desktop Mode Do You
  Need?'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Can an unattended Power Automate Desktop flow run while someone is logged
    into the target computer?
  answer: No. The target machine must have no active user session, even a locked one,
    because the flow creates its own remote desktop session.
- question: Does the free Power Automate Desktop app support attended desktop flows?
  answer: Yes. The free Windows app supports local attended execution, allowing users
    to run desktop flows on their own machines without a premium license.
- question: Why can a Power Automate Desktop unattended flow lose buttons or fields?
  answer: A remote unattended session can use a different screen resolution from the
    design environment, moving interface elements off-screen and causing the flow
    to fail.
---

## TL;DR

Power Automate Desktop attended flows run with a person and are supported by the free Windows app. Unattended flows run on dedicated machines without user sessions, require paid capacity, and can fail when remote resolution differs or tasks need administrator privileges.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose attended flows when a person must supervise or trigger the work, because unattended execution cannot run alongside an active user session.
- Admins/CoE: Prepare dedicated machines, consistent display resolution and standard user permissions before scheduling unattended desktop flows.
- Leadership/Business: Separate attended and unattended licensing and infrastructure needs when estimating automation costs and operational scale.
