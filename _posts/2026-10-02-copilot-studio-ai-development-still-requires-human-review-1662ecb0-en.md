---
title: Copilot Studio AI development still requires human review
description: AI coding agents can generate and test Copilot Studio changes, but humans
  must retain control of requirements, architecture, security review and deployment.
date: '2026-10-02T04:59:52Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- alm
- dataverse
- copilot-studio
content_type: curated_summary
curation_id: 1662ecb06a7785e9c8e1329b
image:
  path: "/assets/img/curated/1662ecb06a7785e9c8e1329b.png"
  alt: 'Governance card: AI can generate and test. Humans must own the requirement,
    review and deployment.'
permalink: "/en/posts/copilot-studio-ai-development-still-requires-human-review-1662ecb0/"
translation_url: "/de/posts/copilot-studio-ai-development-still-requires-human-review-1662ecb0/"
source_url: https://www.karlex.fi/ai-driven-does-not-mean-ai-autonomous-what-copilot-studio-development-looks-like-now/
source_site_url: https://www.karlex.fi/
source_title: 'AI-driven does not mean AI-autonomous: what Copilot Studio development
  looks like now'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-02'
source_type: article
faq:
  - question: "How does the coding-agent workflow differ from traditional Copilot Studio development?"
    answer: "Koskinen's comparison shows that the steps did not disappear, they moved. Low-code runs requirement, open designer, find component, modify, test. The coding-agent flow runs requirement, inspect generated solution, describe change, agent modifies, validate. The second model does not eliminate the first: it changes where the manual work happens, and validation and platform knowledge still matter."
  - question: "What does Koskinen leave to AI and what stays with people?"
    answer: "AI can drive context, generation and testing, plus documentation lookup and schema inspection. Humans keep the requirement, challenge, review and deploy, and need to validate architecture, business logic, security, authentication and edge cases. As a warning he cites last year's Replit incident, where an agent deleted a live production database despite an explicit freeze. For committing to production, the room raised one or two hands."
  - question: "Which tool combination does Koskinen use for Copilot Studio?"
    answer: "His setup consists of the maker portal, Visual Studio Code with the Copilot Studio extension, GitHub Copilot and Claude Code. Skills and MCP servers add a layer of knowledge and access. The first demo topic took about 12 minutes to build with the coding agent. In a second demo the agent inferred a client's industry from the client history by itself."
  - question: "What limits do coding agents currently have in Copilot Studio?"
    answer: "Coding agents cannot yet create tool references inside topics. Power Automate flows created by agents can create their connections, whereas topics cannot, so the connection has to be created manually in the UI. In the keynote example the agent wrote to Dataverse through a Power Automate flow rather than the Dataverse MCP, and Koskinen calls such a choice a human decision."
  - question: "How did Koskinen handle the stubborn filtering bug in the demo?"
    answer: "The returned project history consistently showed six projects, although no error appeared. He consulted GitHub Copilot three times about the filtering, but each reported fix did not work. Claude Code, used as a second agent, did not find the root cause either, but suggested tests that eventually did: the API accepted wrong filter combinations without raising an error."
---

## TL;DR

Copilot Studio coding agents can inspect Dataverse schemas, generate topics and test changes, but they cannot replace technical controls or human accountability. Keep humans responsible for requirements, challenge, review and deployment. Create required Copilot Studio tool connections manually, validate AI-generated logic, and review architecture between development and test.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Validate generated topics and business logic, especially where an agent infers values instead of asking users.
- Admins/CoE: Add an architecture review point between development and test when coding agents select integrations or implementation patterns.
- Security/Compliance: Do not rely on agent instructions as controls; retain human validation for security, authentication and platform limitations.
- Leadership/Business: Keep use-case owners involved because developers still need to test whether AI-generated choices are actually right.
