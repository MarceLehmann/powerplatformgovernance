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
---

## TL;DR

Microsoft&\#39;s Claude Code Power Pages plugin preview built and deployed a site, including Dataverse tables, relationships, authentication, and environment activation. The test used human approval, but consumed three daily allocations before a Pro to Max upgrade; it also missed table permissions, a WebAPI site setting, and non-Entra ID authentication setup.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep human approval in the build process because the preview can produce a working site while missing important configuration.
- Admins/CoE: Validate table permissions, WebAPI site settings and authentication before activating a generated site in an environment.
- Security/Compliance: Treat non-Entra ID authentication as a manual control and review permissions before deployment.
