---
title: Build a controlled HR agent in the new Copilot Studio
description: Disable default web search, require source-based answers, test with credits
  in Preview, and roll out a Teams agent gradually.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- security
- environments
content_type: curated_summary
curation_id: 7203d8188b84342719e7a4be
image:
  path: "/assets/img/curated/7203d8188b84342719e7a4be.png"
  alt: 'Governance card: Turn off web search when policy answers must stay inside
    approved knowledge.'
permalink: "/en/posts/build-a-controlled-hr-agent-in-the-new-copilot-studio-7203d818/"
translation_url: "/de/posts/build-a-controlled-hr-agent-in-the-new-copilot-studio-7203d818/"
source_url: https://www.andersjensen.org/en/articles/build-your-first-agent-new-copilot-studio/
source_site_url: https://www.andersjensen.org/
source_title: Build Your First Agent in the New Copilot Studio
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-13'
source_type: article
faq:
  - question: "Which setting should I switch off first when building a document-based agent in the new Copilot Studio?"
    answer: "Search all websites. It is enabled by default, and the author calls turning it off the most important single click of the guide. Otherwise the agent searches the web when internal sources have no answer, which is a problem for policy agents. With it off, the agent has to admit knowledge gaps."
  - question: "How did the author write the instructions for the Nordfalk HR agent?"
    answer: "In five lines: the role as HR assistant, answering only from the employee handbook while naming the chapter, a brief and friendly tone, escalation to the contacts in chapter 16 when the handbook has no answer, and a ban on guessing. Naming the chapter makes each answer verifiable."
  - question: "What does a skill contain and how does it differ from a topic?"
    answer: "A skill has a name, a description of when it applies and plain-language instructions, and it replaces topics and dialog trees. The example skill drafts leave request emails, follows the eight mandatory fields of chapter 8 and forbids invented values, so the agent asks for missing data such as the employee ID."
  - question: "Do tests in Preview cost credits before an agent is published?"
    answer: "Yes. Every test chat consumes credits even before publication, while manual configuration is free. The author therefore suggests building in an environment with limited credit allocation and noting the credit balance before and after building, since real-time consumption tracking was not available at the time of writing."
  - question: "Should an internal HR agent go live company-wide on day one?"
    answer: "The author advises against it: publishing to everyone on day one is the fastest way for a typo in your instructions to become the whole company's problem. Keep the agent to yourself first, test it in Teams, then share it with the organization. The recommended pattern is instructions, knowledge, one skill, publish. In the tests the agent declined to guess an unknown bonus structure."
---

## TL;DR

For an HR agent in the new Copilot Studio, upload the approved handbook under Knowledge and remove the default Search all websites source. Set instructions to cite handbook chapters, never guess, and route gaps to the correct contact. Preview test chats consume credits before publication, so use a development environment with a small credit allocation and publish privately in Teams before sharing broadly.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Remove Search all websites and instruct the agent to cite the handbook, never guess, and ask for missing values so policy responses stay verifiable.
- Admins/CoE: Use a development environment with a small credit allocation because Preview test chats consume credits before publication.
- Leadership/Business: Keep the Teams agent private initially, test it in the user channel, then share it with the organisation to limit the impact of instruction errors.
