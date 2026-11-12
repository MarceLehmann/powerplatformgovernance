---
title: 'Govern Power BI workspaces: owners, external sharing, quarterly cleanup'
description: 'A five-step routine for Power BI governance: inventory workspaces, assign
  two business admins, confirm external sharing, retire unused reports and keep audit
  evidence.'
date: '2026-11-12T16:51:39Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- ownership
- security
- compliance
content_type: curated_summary
curation_id: 4bdfa89ca609bb24cf037f07
image:
  path: "/assets/img/curated/4bdfa89ca609bb24cf037f07.png"
  alt: 'Governance card: No owner, no fix. Name an owner for every Power BI workspace
    before you touch sharing.'
permalink: "/en/posts/govern-power-bi-workspaces-owners-external-sharing-quarterly-cleanup-4bdfa89c/"
translation_url: "/de/posts/govern-power-bi-workspaces-owners-external-sharing-quarterly-cleanup-4bdfa89c/"
source_url: https://rencore.com/en/blog/govern-power-bi/
source_site_url: https://rencore.com/
source_title: How to govern Power BI workspaces and sharing
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: Who should own a Power BI workspace and why two admins?
  answer: A named person in the business team that relies on the reports, plus a second
    admin so the workspace survives a departure. Orphaned workspaces cannot be fixed
    or retired.
- question: How do I spot Power BI workspaces that include external users?
  answer: List workspaces whose members or viewers include external users, ask each
    owner to confirm the access, and restrict who may share outside the organization
    in the tenant settings.
- question: When should unused Power BI reports be retired?
  answer: Reports, dashboards and datasets that nobody has opened in 90 days should
    be flagged to their owner for retirement, and quarterly cleanups also catch unused
    Pro or Premium Per User licenses.
---

## TL;DR

Power BI self-service grows faster than oversight. Five steps fix it: list every workspace with admins, members, reports and datasets; assign two admins from the business team per workspace; find workspaces shared with external users, confirm access and restrict external sharing in tenant settings; retire reports, dashboards and datasets unused for 90 days; repeat quarterly and record every confirmation for audits.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: run the five-step cycle quarterly, inventory workspaces and artifacts, name two admins per workspace and chase owners whose confirmations are missing.
- Security/Compliance: review external user access on a shorter cycle than internal access and keep records of who confirmed or removed what as audit evidence.
- Leadership/Business: unused reports, datasets and licenses are cost, and duplicate reports without ownership mean no single source of truth, so back the cleanup.
- Makers: expect to be named owner or second admin for workspaces you publish and to confirm or retire external sharing when asked.
