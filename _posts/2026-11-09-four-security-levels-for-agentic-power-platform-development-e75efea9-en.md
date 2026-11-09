---
title: Four security levels for agentic Power Platform development
description: A practical model for controlling what Claude Code can reach across Power
  Platform environments, pipelines, local files and separate tenants.
date: '2026-11-09T04:35:25Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- alm
- environments
- governance
- copilot-studio
content_type: curated_summary
curation_id: e75efea9297c84fb95bfc650
image:
  path: "/assets/img/curated/e75efea9297c84fb95bfc650.png"
  alt: 'Governance card: Open the smallest door the agent needs. Keep the customer
    key with a person.'
permalink: "/en/posts/four-security-levels-for-agentic-power-platform-development-e75efea9/"
translation_url: "/de/posts/four-security-levels-for-agentic-power-platform-development-e75efea9/"
source_url: https://www.karlex.fi/is-it-ok-if-i-build-this-agentically-four-levels-of-security-for-agentic-power-platform-development/
source_site_url: https://www.karlex.fi/
source_title: "“Is it ok if I build this agentically?” Four levels of security for
  agentic Power Platform development"
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-11-09'
source_type: article
faq:
- question: How does delegated deployment change Power Platform pipeline security
    for an agent?
  answer: Delegated deployment uses the pipeline identity instead of the developer
    account, and each deployment waits for approval before moving forward.
- question: What happens when a Copilot Studio agent is cloned to local YAML files?
  answer: The agent edits local YAML without holding an environment token. A human
    pulls and pushes the changes, after checking for conflicts.
- question: When do customer logins expire on the agent server?
  answer: Customer logins are signed out after 30 minutes without activity and at
    17:00, with a separate sweep for stuck sessions.
---

## TL;DR

Claude Code can work through four access levels for Power Platform development: a service principal, a developer account limited to dev, local Copilot Studio YAML files, or a separate tenant. Levels 3 and 4 keep customer connections with a human, while customer logins expire after 30 minutes of inactivity and at 17:00.

{% include curated-attribution.html %}

## Governance takeaway

- Security/Compliance: choose the access level per customer and keep the blast radius explicit, because service principals and developer accounts can reach the customer tenant.
- Admins/CoE: use delegated Power Platform pipelines with approval for dev to test to production, because the pipeline identity deploys the same managed artifact.
- Makers: review cloned YAML files before pushing and test changes yourself, because a pull can report success after a conflict and the agent does not replace human responsibility.
