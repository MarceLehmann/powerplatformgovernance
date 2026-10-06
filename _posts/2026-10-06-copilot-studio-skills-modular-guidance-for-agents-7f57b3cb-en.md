---
title: 'Copilot Studio Skills: Modular Guidance for Agents'
description: Copilot Studio Skills load scenario-specific instructions and resources
  on demand, improving manageability while requiring precise routing descriptions
  and trust review.
date: '2026-10-06T16:58:56Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- alm
- security
- governance
content_type: curated_summary
curation_id: 7f57b3cbe68b609e605dbf3a
image:
  path: "/assets/img/curated/7f57b3cbe68b609e605dbf3a.png"
  alt: 'Governance card: Put situational guidance in Skills. Keep always-on rules
    in instructions.'
permalink: "/en/posts/copilot-studio-skills-modular-guidance-for-agents-7f57b3cb/"
translation_url: "/de/posts/copilot-studio-skills-modular-guidance-for-agents-7f57b3cb/"
source_url: https://microsoft.github.io/mcscatblog/posts/modern-mcs-agent-skills/
source_site_url: https://microsoft.github.io/
source_title: Agents Have Skills Now — Here's How They Work in Copilot Studio
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Roel Schenk
source_published_at: '2026-06-15'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does Copilot Studio decide when to load a Skill?
  answer: Copilot Studio evaluates the Skill name and description against the conversation,
    then loads the full instructions when the scenario matches.
- question: What files can a Copilot Studio Skill include?
  answer: A Skill can contain SKILL.md plus optional references, assets, templates,
    examples, and executable scripts bundled in its folder or upload.
- question: Why should I review a Copilot Studio Skill before adding it?
  answer: Skills shape agent behavior and may bundle scripts, so review them for prompt
    injection, tool misuse, and content inconsistent with their stated purpose.
---

## TL;DR

Copilot Studio Skills package scenario-specific instructions and optional resources such as scripts, references, templates, and examples. The agent uses each Skill&\#39;s name and description to select it, then loads the full content on demand. Keep always-on guidance in agent instructions, and use Skills for situational procedures.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Write precise Skill descriptions that state when to use and avoid them, because descriptions route agent selection.
- Admins/CoE: Add Skills to Power Platform solutions so they travel with the agent through ALM, while tracking their per-agent scope.
- Security/Compliance: Review externally sourced, AI-generated, or reused Skills for prompt injection, tool misuse, and behavior that conflicts with their stated purpose.
