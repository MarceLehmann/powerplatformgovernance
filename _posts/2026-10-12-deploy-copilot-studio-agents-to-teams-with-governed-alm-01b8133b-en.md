---
title: Deploy Copilot Studio agents to Teams with governed ALM
description: Compare direct install, maker submission and admin-led deployment, including
  environment differentiation, manifest customization, Setup Policies and M365 Copilot
  distribution.
date: '2026-10-12T16:57:15Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- environments
- copilot-studio
- security
content_type: curated_summary
curation_id: 01b8133b73a48f4d63347975
image:
  path: "/assets/img/curated/01b8133b73a48f4d63347975.png"
  alt: 'Governance card: Production agents need admin control. Setup Policies make
    installation and pinning predictable.'
permalink: "/en/posts/deploy-copilot-studio-agents-to-teams-with-governed-alm-01b8133b/"
translation_url: "/de/posts/deploy-copilot-studio-agents-to-teams-with-governed-alm-01b8133b/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-teams-deployment/
source_site_url: https://microsoft.github.io/
source_title: 'From DEV to PROD: Deploying Copilot Studio Agents to Teams and Microsoft
  365 Copilot'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Henry Jammes
source_published_at: '2026-04-07'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: What do Installed apps and Pinned apps do in Teams Setup Policies for
    Copilot Studio agents?
  answer: Installed apps auto-install the agent for targeted users, while Pinned apps
    places it in the Teams sidebar at a chosen position.
- question: How can I distinguish DEV and TEST Copilot Studio agents in Teams?
  answer: Use the preview Channel display name suffix with an environment variable,
    or customize the Teams manifest with names, icons and colors.
- question: What happens when Teams setup policies conflict for Copilot Studio agents?
  answer: Setup policies are not cumulative. When group assignments conflict, the
    highest-ranked assignment takes precedence, so administrators should check for
    overlaps.
---

## TL;DR

Copilot Studio offers direct install for development, maker submission for admin-approved test rollouts, and admin-led deployment for production. Teams Admin Center Setup Policies can auto-install and pin agents for security groups, while the preview Channel display name suffix distinguishes environments without manifest editing.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use direct install for development or testing, and distinguish DEV and TEST agents with the display name suffix or customized manifests to reduce confusion.
- Admins/CoE: Use maker submission for controlled rollouts or admin-led deployment for production, then configure availability, auto-install and pinning through Teams Admin Center.
- Security/Compliance: Target access and distribution with security groups, and review conflicting setup policies because the highest-ranked group assignment wins.
- Leadership/Business: Validate agents independently in Teams and Microsoft 365 Copilot because the channels can behave differently.
