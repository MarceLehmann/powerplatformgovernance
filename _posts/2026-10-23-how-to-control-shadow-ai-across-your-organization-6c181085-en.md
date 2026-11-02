---
title: How to control shadow AI across your organization
description: Discover unapproved AI tools, assess their data access, assign ownership,
  and govern or retire them.
date: '2026-10-23T16:43:24Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- compliance
- copilot-studio
content_type: curated_summary
curation_id: 6c181085e1c0e4c85a028bad
image:
  path: "/assets/img/curated/6c181085e1c0e4c85a028bad.png"
  alt: 'Governance card: Unapproved AI is a governance blind spot. Inventory it before
    it reaches company data.'
permalink: "/en/posts/how-to-control-shadow-ai-across-your-organization-6c181085/"
translation_url: "/de/posts/how-to-control-shadow-ai-across-your-organization-6c181085/"
source_url: https://rencore.com/en/blog/control-shadow-ai/
source_site_url: https://rencore.com/
source_title: How to control shadow AI
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: How can Entra ID reveal unapproved AI tools with Microsoft Graph permissions?
  answer: Entra ID lists enterprise applications that received consent, including
    their Microsoft Graph permissions, making ownerless access to company data visible.
- question: What should happen to an unapproved Copilot Studio or SharePoint agent?
  answer: Assess its data reach and value, then approve it under governance or have
    its owner unpublish it and explain the decision to users.
- question: Why can blocking every shadow AI tool increase governance risk?
  answer: A blanket ban can move usage to personal devices and accounts, reducing
    visibility; useful tools should instead be approved under controlled conditions.
animation:
  video: /assets/img/animations/6c181085e1c0e4c85a028bad-en.mp4
  poster: /assets/img/animations/6c181085e1c0e4c85a028bad-en.poster.webp
  width: 800
  height: 450
  alt: "A four step flow shows how to control shadow AI: discover tools across Entra ID, Copilot Studio, SharePoint and licensed services, assess data reach and users, approve or retire them, then repeat on a fixed cycle."
---

## TL;DR

Review Entra ID enterprise applications, Copilot Studio and SharePoint agents, and licensed AI service members to find unapproved tools. Assess each tool&\#39;s data reach, users and autonomy, then approve valuable tools under inventory, ownership and access review, or revoke consent and retire them. Repeat discovery on a fixed cycle.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Check whether agents built in Copilot Studio or SharePoint have approval and an owner before using company data.
- Admins/CoE: Inventory Entra ID applications with Microsoft Graph or SharePoint permissions, tenant agents and licensed AI service members, then route findings to owners.
- Security/Compliance: Assess what each tool can read or change, especially ownerless applications with Graph permissions, because unmanaged access creates security and compliance exposure.
- Leadership/Business: Prefer approved enterprise routes over blanket bans, since blocking everything can push use to personal devices and accounts where visibility is lower.
