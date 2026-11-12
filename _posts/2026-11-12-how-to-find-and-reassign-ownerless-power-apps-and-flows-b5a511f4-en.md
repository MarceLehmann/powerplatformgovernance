---
title: How to find and reassign ownerless Power Apps and flows
description: A five-step process to identify ownerless Power Apps and Power Automate
  flows, assign accountable owners, retire unwanted automation and add ownership checks
  to offboarding.
date: '2026-11-12T16:51:42Z'
author: governance_editorial
lang: en
toc: false
tags:
- ownership
- power-apps
- power-automate
- environments
- security
content_type: curated_summary
curation_id: b5a511f4078aa109eb2e7a91
image:
  path: "/assets/img/curated/b5a511f4078aa109eb2e7a91.png"
  alt: 'Governance card: Every app and flow needs an accountable owner. Unowned automation
    becomes operational and security risk.'
permalink: "/en/posts/how-to-find-and-reassign-ownerless-power-apps-and-flows-b5a511f4/"
translation_url: "/de/posts/how-to-find-and-reassign-ownerless-power-apps-and-flows-b5a511f4/"
source_url: https://rencore.com/en/blog/find-ownerless-power-apps-flows/
source_site_url: https://rencore.com/
source_title: How to find and reassign ownerless Power Apps and flows
source_name: Rencore
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: How can I identify ownerless Power Apps across all environments?
  answer: Export each environment’s apps with owners and compare them against active
    and disabled Entra ID users. Flag missing, disabled or deleted owners.
- question: What should happen to a Power Automate flow when its owner leaves?
  answer: Assign two new owners who understand the flow and its data. Without reassignment,
    it may continue using the departed user’s connections and permissions.
- question: How should I retire a Power App nobody will own?
  answer: Turn off the flow, set the app aside for 30 days, delete it if nobody objects,
    and notify people who had access.
---

## TL;DR

Export Power Apps and Power Automate flows from every environment with owners, co-owners, creators and last modified dates. Compare owners with active and disabled Entra ID users, assign two new owners to important items, retire anything nobody will own, and repeat the check during offboarding and on a schedule.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Add a co-owner to every business-critical app or flow so a departure does not leave it without someone who can edit, fix or retire it.
- Admins/CoE: Export assets across environments, compare owners with Entra ID status, prioritise high-impact items, and schedule recurring checks.
- Security/Compliance: Review flows that continue using departed users credentials, because unsupervised connections and permissions create a security finding and outage risk.
- Leadership/Business: Have the heaviest user or leavers manager take ownership, and retire assets nobody will accept responsibility for.
