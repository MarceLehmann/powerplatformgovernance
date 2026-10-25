---
title: Deploy Copilot Studio Agents in Teams Without Stale Sessions
description: Manage persistent Teams sessions, inactivity resets, connector authentication,
  query visibility, versioning and forced updates for more reliable Copilot Studio
  agents.
date: '2026-10-25T16:57:19Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
- alm
- governance
content_type: curated_summary
curation_id: e9673d7c084b125524396184
image:
  path: "/assets/img/curated/e9673d7c084b125524396184.png"
  alt: 'Governance card: Teams sessions persist. Reset stale state before it causes
    trouble.'
permalink: "/en/posts/deploy-copilot-studio-agents-in-teams-without-stale-sessions-e9673d7c/"
translation_url: "/de/posts/deploy-copilot-studio-agents-in-teams-without-stale-sessions-e9673d7c/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-teams-deployment-ux/
source_site_url: https://microsoft.github.io/
source_title: Best Practices for Deploying Copilot Studio Agents in Microsoft Teams
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Remi Dyon
source_published_at: '2025-11-14'
source_updated_at: '2026-08-05'
source_type: article
faq:
- question: How do I configure an inactivity reset for a Copilot Studio agent in Teams?
  answer: Use The user is inactive for awhile, set its timeout, clear variables and
    conversation history, then end and resolve the conversation.
- question: What does /debug clearstate do in a Copilot Studio Teams conversation?
  answer: It clears conversation state, removes cached connector information, reauthenticates
    connectors, and loads the latest agent version when a Teams conversation seems
    stuck.
- question: What happens when I enable Force newest version for a Copilot Studio Teams
    agent?
  answer: It makes the next user message use the latest published version, but forcing
    an update can interrupt an ongoing conversation.
animation:
  src: /assets/img/animations/e9673d7c084b125524396184-en.gif
  poster: /assets/img/animations/e9673d7c084b125524396184-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows configuring The user is inactive for awhile, setting a timeout, clearing variables and conversation history, then ending the conversation."
---

## TL;DR

Copilot Studio agents in Teams retain conversation state, so configure The user is inactive for awhile to clear variables and history, prompt users to say hello after a reset, document /debug clearstate, expose query rewrites with OnKnowledgeRequested, and publish with Force newest version when updates must take effect.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Configure inactivity resets to clear variables and conversation history, then explain the hello restart so stale context does not confuse the agent.
- Admins/CoE: Track agent versions, test persistent chats across Teams clients, and use Force newest version carefully because updates can interrupt active conversations.
- Security/Compliance: Test connector token expiry and document /debug clearstate because long sessions may require connector reauthentication.
