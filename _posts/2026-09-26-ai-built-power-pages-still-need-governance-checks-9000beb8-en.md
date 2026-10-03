---
title: AI-built Power Pages still need governance checks
description: A Claude Code Power Pages preview built and deployed a site, but missed
  table permissions, a WebAPI setting and non-Entra authentication steps.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- environments
- dataverse
- alm
- power-apps
content_type: curated_summary
curation_id: 9000beb8409355095e4ca2f6
image:
  path: "/assets/img/curated/9000beb8409355095e4ca2f6.png"
  alt: 'Governance card: AI can deploy Power Pages, but it can miss permissions.'
permalink: "/en/posts/ai-built-power-pages-still-need-governance-checks-9000beb8/"
translation_url: "/de/posts/ai-built-power-pages-still-need-governance-checks-9000beb8/"
source_url: https://readyxrm.blog/2026/02/26/the-end-of-power-pages-as-we-know-it/
source_site_url: https://readyxrm.blog/
source_title: The end of Power Pages? (As we know it?)
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-02-26'
source_type: article
faq:
  - question: "What can the Power Pages plugin for Claude Code build without manual setup?"
    answer: "In the author test it produced a complete Power Pages site from a prompt: data model, Dataverse tables, relationships and authentication, followed by deployment and activation. The author mostly approved plans and gave direction. The plugin is in public preview, works with approval checkpoints so a human stays in the loop, and recognised existing tables such as Contact."
  - question: "Which configuration gaps did the author find in the AI-built Power Pages site?"
    answer: "The plugin was not solution aware; the author's reaction in the article is 'Not solution aware! Arg! What?!?'. It also missed critical parts of the table permissions setup, forgetting to add a table, and missed a Web API site setting. Authentication needs to be configured manually when anything other than Microsoft Entra ID is used."
  - question: "Is building a Power Pages site with AI faster than using the design studio?"
    answer: "Not necessarily. The author found that the design studio and the management app would have been a bit quicker. The AI result looked more polished and was more flexible, but the process was resource hungry: it used up his daily allocation three times before he upgraded from the Pro to the Max plan."
  - question: "Does AI-assisted building make the traditional Power Pages tools obsolete?"
    answer: "No. The author concludes that there still is a place for the traditional Power Pages tools to build and configure sites. He says it will be interesting to see how the technology evolves and is adopted over the next few months. Power Pages single-page apps keep the benefits of Dataverse integration, hosting and security."
  - question: "What should a reviewer verify before an AI-generated Power Pages site goes live?"
    answer: "Check the points where the test fell short: whether the site is solution aware, whether table permissions exist and are complete, whether the Web API site setting is present, and whether any authentication other than Microsoft Entra ID was configured manually. The plugin creates action plans and asks for approval, so a human stays in the loop."
---

## TL;DR

Microsoft&\#39;s Claude Code Power Pages plugin preview built and deployed a site, including Dataverse tables, relationships, authentication, and environment activation. The test used human approval, but consumed three daily allocations before a Pro to Max upgrade; it also missed table permissions, a WebAPI site setting, and non-Entra ID authentication setup.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep human approval in the build process because the preview can produce a working site while missing important configuration.
- Admins/CoE: Validate table permissions, WebAPI site settings and authentication before activating a generated site in an environment.
- Security/Compliance: Treat non-Entra ID authentication as a manual control and review permissions before deployment.
