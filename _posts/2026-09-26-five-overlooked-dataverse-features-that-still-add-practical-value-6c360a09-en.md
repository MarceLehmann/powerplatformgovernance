---
title: Five overlooked Dataverse features that still add practical value
description: Dataverse includes useful capabilities beyond the maker portal, including
  Outlook integration, Exchange email, diagnostics, field mappings and multi-table
  lookups.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- dataverse
- power-apps
- power-automate
- environments
content_type: curated_summary
curation_id: 6c360a09bf8bc3204851efea
image:
  path: "/assets/img/curated/6c360a09bf8bc3204851efea.png"
  alt: 'Governance card: Dataverse features hide outside the maker portal. Know the
    limits before you design.'
permalink: "/en/posts/five-overlooked-dataverse-features-that-still-add-practical-value-6c360a09/"
translation_url: "/de/posts/five-overlooked-dataverse-features-that-still-add-practical-value-6c360a09/"
source_url: https://readyxrm.blog/2025/08/28/five-forgotten-features-of-dataverse/
source_site_url: https://readyxrm.blog/
source_title: Five forgotten features of Dataverse
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-08-28'
source_type: article
faq:
  - question: "Do I need a Dynamics 365 license to use the Dynamics 365 Outlook connector?"
    answer: "No. According to the author, anyone with a Power Apps license is fully entitled to use it."
  - question: "What is the advantage of native Exchange Online integration in Dataverse?"
    answer: "It lets you send and receive emails from Power Apps without a Power Automate flow, so flow run allocations are preserved, and it needs no special service account."
  - question: "How do Dataverse field mappings work and what are their limits?"
    answer: "Mapped values are copied to a new related record, but only at creation and only for matching field types of equal or smaller size. Later parent changes do not cascade."
---

## TL;DR

Dataverse supports Outlook record association, Exchange Online email without Power Automate flows, a diagnostics URL for model-driven app performance, classic-interface field mappings during record creation, and multi-table lookups. Field mappings require matching compatible types and do not propagate later parent updates; custom multi-table relationships require SDK or XrmToolBox configuration.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use field mappings when creating related records to populate compatible fields automatically, but do not expect later parent changes to update children.
- Makers: Run the model-driven app diagnostics URL regularly so performance changes can be compared over time.
- Admins/CoE: Review Exchange Online integration, mailboxes and queues before building email flows that consume flow runs or require specialized service accounts.
- Admins/CoE: Treat custom multi-table lookups as a controlled design choice because the source says their setup is limited to SDK or XrmToolBox rather than the maker interface.
