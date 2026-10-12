---
title: Design Copilot Studio agents for reliable Teams deployment
description: Eight Copilot Studio patterns address Teams reinstalls, persistent conversations,
  stale context, resets, errors, diagnostics, and suggested prompts.
date: '2026-10-12T16:57:20Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- environments
- alm
content_type: curated_summary
curation_id: d797cc5f2b191718f0c9ccd8
image:
  path: "/assets/img/curated/d797cc5f2b191718f0c9ccd8.png"
  alt: 'Governance card: Teams agents need reset paths. Persistent context and stale
    sessions become production risks.'
permalink: "/en/posts/design-copilot-studio-agents-for-reliable-teams-deployment-d797cc5f/"
translation_url: "/de/posts/design-copilot-studio-agents-for-reliable-teams-deployment-d797cc5f/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-teams-agent-patterns/
source_site_url: https://microsoft.github.io/
source_title: Design Copilot Studio Agents for Teams (Because Test Chat Was Too Easy)
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Henry Jammes
source_published_at: '2026-04-07'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does Copilot Studio handle a Teams app reinstall?
  answer: An InstallationUpdate trigger can redirect the agent to Conversation Start,
    because Conversation Start does not run automatically after reinstalls.
- question: What inactivity duration does the Copilot Studio Teams example use?
  answer: The example uses durationInSeconds 43200, equal to 12 hours, then clears
    conversation history and variables before marking the conversation inactive.
- question: Which diagnostics can a Copilot Studio Start Over card display?
  answer: The Adaptive Card can display environment, tenant, agent, user, and conversation
    identifiers, along with the current UTC timestamp.
---

## TL;DR

Copilot Studio agents deployed to Teams should handle InstallationUpdate events, clear stale conversations after inactivity, re-establish global context, and customize Reset Conversation and Start Over topics. The examples use a 12-hour inactivity period, Adaptive Cards for user guidance and diagnostics, and latest-published-content behavior for persistent sessions.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Add InstallationUpdate and inactivity topics, then test reset behavior in Teams because Test Chat does not expose persistent sessions and reinstall conditions.
- Admins/CoE: Apply the published-content behavior to relevant topics and provide diagnostic details through Start Over only when support needs them, so users can recover from stale state and teams can troubleshoot consistently.
