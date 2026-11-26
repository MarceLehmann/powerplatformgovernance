---
title: 'EU AI Act: every AI agent needs an owner'
description: Under the EU AI Act, organisations deploying AI must inventory every
  agent, assign an owner to each, and produce evidence of control; building your own
  high-risk agent makes you the provider.
date: '2026-11-26T16:36:32Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- ownership
- compliance
- copilot-studio
content_type: curated_summary
curation_id: 05dd912fc354fb13922d27df
image:
  path: "/assets/img/curated/05dd912fc354fb13922d27df.png"
  alt: 'Governance card: Every AI agent needs an owner. If nobody can explain what
    it does, the EU AI Act sees a risk, not a tool.'
permalink: "/en/posts/eu-ai-act-every-ai-agent-needs-an-owner-05dd912f/"
translation_url: "/de/posts/eu-ai-act-every-ai-agent-needs-an-owner-05dd912f/"
source_url: https://rencore.com/en/blog/every-ai-agent-needs-an-owner-eu-ai-act/
source_site_url: https://rencore.com/
source_title: 'Every AI agent needs an owner: what the EU AI Act asks of IT teams'
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Maximilian Götz
source_published_at: '2026-11-26'
source_updated_at: '2026-11-26'
source_type: article
faq:
- question: Does building an agent in Copilot Studio make us a provider under the
    EU AI Act?
  answer: It can. Once your organisation names an agent and scopes it to a high-risk
    task such as applicant screening, you carry provider duties on top of deployer
    duties.
- question: What happens to an AI agent when its creator leaves the company?
  answer: Depending on the platform it can keep running and reading its data sources,
    with nobody able to explain what it is for. Reassign each orphan to an owner,
    or retire it.
- question: Did the Digital Omnibus delay the EU AI Act high-risk deadlines?
  answer: Only partly. Duties for high-risk stand-alone systems such as hiring and
    credit scoring moved to 2 December 2027, and AI inside regulated products to 2
    August 2028. The bans stay in force.
---

## TL;DR

The EU AI Act boils down to three habits for teams deploying AI: know every agent you run, give each one an owner, and prove it is under control. An agent built for an ended project can still run after its builder is gone, and the Act reads that as missing oversight. Use-case classification sits with risk or compliance; IT keeps the inventory.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Inventory every agent and AI tool now, surface the ones with no owner, and reassign or retire them so you are not classifying two years of sprawl in 2027.
- Security/Compliance: Decide each agent&\#39;s risk class and record the reasoning, including why something is not high risk; this classification work sits with you, not with system administrators.
- Makers: The risk class follows the use case, not the tool, so check whether a new agent touches screening, promotion ranking or credit scoring before you ship it.
- Leadership/Business: Give every shared agent at least one person with the skills and authority to step in, stop it and override it.
