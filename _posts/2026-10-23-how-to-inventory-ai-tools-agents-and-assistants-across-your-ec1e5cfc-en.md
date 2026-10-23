---
title: How to inventory AI tools, agents and assistants across your organization
description: Build a current AI inventory from tenant and identity signals, recording
  ownership, users, data reach and risk for every tool or agent.
date: '2026-10-23T16:43:28Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: ec1e5cfc0d42dc9c9d725b7b
image:
  path: "/assets/img/curated/ec1e5cfc0d42dc9c9d725b7b.png"
  alt: 'Governance card: AI governance starts with signals, not surveys. Name the
    owner, data reach and risk for every tool.'
permalink: "/en/posts/how-to-inventory-ai-tools-agents-and-assistants-across-your-ec1e5cfc/"
translation_url: "/de/posts/how-to-inventory-ai-tools-agents-and-assistants-across-your-ec1e5cfc/"
source_url: https://rencore.com/en/blog/inventory-ai-tools/
source_site_url: https://rencore.com/
source_title: How to inventory the AI tools in use across your organization
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: How should an organization discover AI services beyond Microsoft 365 Copilot?
  answer: Review consented enterprise applications in Entra ID and add AI services
    licensed outside Microsoft, including their member lists. Surveys can fill gaps
    but should not be the foundation.
- question: Which fields belong in an inventory record for a Copilot Studio agent?
  answer: Record the owner, users, data reach, capabilities, risk rating and review
    date. For agents, also capture the environment, knowledge sources and sign in
    requirement.
- question: Why should Entra ID applications without owners be reviewed first?
  answer: Ownerless applications with Microsoft Graph permissions can read company
    data without anyone accountable for them. They are the first entries to investigate.
animation:
  src: /assets/img/animations/ec1e5cfc0d42dc9c9d725b7b-en.gif
  poster: /assets/img/animations/ec1e5cfc0d42dc9c9d725b7b-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows how to build an AI inventory by starting with Microsoft 365 Copilot, Copilot Studio and SharePoint agents, adding Entra ID apps and external AI services, recording key fields, and refreshing on a fixed cycle."
---

## TL;DR

Start with Microsoft 365 Copilot licences and usage, Copilot Studio and SharePoint agents, then add Entra ID enterprise applications and licensed services such as Claude Enterprise and ChatGPT Enterprise. Record owners, users, data reach and risk, and refresh the inventory on a fixed cycle because new tools appear monthly.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Discover Copilot Studio and SharePoint agents, tenant licences, Entra ID applications and licensed external services, then refresh entries on a fixed cycle.
- Security/Compliance: Prioritize ownerless applications with Microsoft Graph permissions and assess each entry by data sensitivity, action breadth and user count.
- Makers: Provide an accountable owner, users, knowledge sources and data reach for every agent so it can be reviewed and governed.
