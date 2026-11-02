---
title: 'Shadow AI Governance: Control Unauthorized Copilot Pilots'
description: Unmanaged Copilots, agents and workflows can create permission, ownership
  and data leakage risks. Use discovery, risk ranking, CoE intake and least privilege
  to govern them.
date: '2026-10-23T22:43:53Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- coe
- copilot-studio
content_type: curated_summary
curation_id: f85378f2141cc17158b099a0
image:
  path: "/assets/img/curated/f85378f2141cc17158b099a0.png"
  alt: 'Governance card: Unowned AI becomes a security blind spot. Every agent needs
    boundaries and accountability.'
permalink: "/en/posts/shadow-ai-governance-control-unauthorized-copilot-pilots-f85378f2/"
translation_url: "/de/posts/shadow-ai-governance-control-unauthorized-copilot-pilots-f85378f2/"
source_url: https://www.m365.fm/blog/shadow-ai-governance-copilot-pilots/
source_site_url: https://www.m365.fm/
source_title: 'Shadow AI Governance: How to Stop Unauthorized Copilot Pilots'
source_name: M365.fm
source_language: en
source_language_name: English
source_published_at: '2026-10-23'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How should an organization inventory Power Platform agents and Copilot
    pilots?
  answer: Record each solution's data source, business owner, intended users and ability
    to trigger automated actions, including Power Automate flows and Azure AI applications.
- question: What should a CoE intake form ask about an AI agent?
  answer: The intake should capture the problem, target users, consumed data, write
    actions and external API calls, while assigning a designated business owner.
- question: How does Microsoft 365 Copilot reveal SharePoint oversharing?
  answer: Copilot follows existing user permissions and can surface content from broadly
    accessible SharePoint locations faster than people typically discover it manually.
animation:
  video: /assets/img/animations/f85378f2141cc17158b099a0-en.mp4
  poster: /assets/img/animations/f85378f2141cc17158b099a0-en.poster.webp
  width: 800
  height: 450
  alt: "Sequence shows governing unauthorized Copilot pilots by inventorying solutions, routing them through CoE intake, applying deeper review and least privilege, and auditing SharePoint permissions."
---

## TL;DR

Microsoft 365 Copilot, Power Platform agents, Power Automate flows and Azure AI applications should be inventoried with their data sources, business owners, users and action capabilities. A CoE intake process can route low-risk ideas quickly while requiring deeper reviews for agents handling regulated data or autonomous actions. Existing Microsoft 365 permissions must also be audited.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Record the data sources, intended users and action capabilities of every Copilot, agent or flow so useful experiments do not become unsupported technical debt.
- Admins/CoE: Create an inventory and lightweight intake process, assigning a business owner and routing high-impact agents to deeper review.
- Security/Compliance: Apply least privilege to agent identities and audit existing SharePoint permissions because Copilot surfaces content users are already allowed to access.
