---
title: Upgrade Classic Copilot Studio Agents Around Capabilities
description: The Copilot Studio plugin migrates classic agents to modern orchestration
  by analyzing capabilities, proposing architecture, and generating Skills and tools
  for review.
date: '2026-10-05T16:57:59Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
content_type: curated_summary
curation_id: cdff7c4f4014d05893f741eb
image:
  path: "/assets/img/curated/cdff7c4f4014d05893f741eb.png"
  alt: 'Governance card: Upgrade capabilities, not components. Review every generated
    Skill and tool before trusting the result.'
permalink: "/en/posts/upgrade-classic-copilot-studio-agents-around-capabilities-cdff7c4f/"
translation_url: "/de/posts/upgrade-classic-copilot-studio-agents-around-capabilities-cdff7c4f/"
source_url: https://microsoft.github.io/mcscatblog/posts/migration-plugin-video-demo/
source_site_url: https://microsoft.github.io/
source_title: 'Video Demo: Upgrading a Classic Agent to Modern Orchestration'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2026-07-14'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What does the Copilot Studio migration plugin do with a classic agent?
  answer: It retrieves the classic agent, analyzes its capabilities, proposes a modern
    design, and generates an upgraded agent.
- question: Should every classic Copilot Studio child agent become a Skill?
  answer: No. The plugin selected a Skill for the travel advice child agent, but another
    child agent may need a different design.
- question: How should I validate an agent upgraded with the Copilot Studio plugin?
  answer: Compare behavior with the classic agent, review each generated Skill and
    tool, test expected and unexpected inputs, and confirm action safeguards.
---

## TL;DR

The Copilot Studio plugin migration command retrieves a classic agent, analyzes its capabilities, proposes a modern architecture, and generates an upgraded agent. In the demo, a travel advice child agent becomes a Skill. The plugin is experimental, so teams must compare behavior, inspect Skills and tools, test inputs, and verify action safeguards.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use the migration command as a starting point, then redesign around capabilities and outcomes rather than copying components one for one.
- Admins/CoE: Install Power Platform CLI newer than version 2.9.3, add the current plugin, and use the required environment, agent, and tenant IDs when invoking migration.
- Security/Compliance: Treat output as a strong first draft, review every Skill and tool, test expected and unexpected inputs, and confirm action safeguards because the plugin is experimental and unsupported.
