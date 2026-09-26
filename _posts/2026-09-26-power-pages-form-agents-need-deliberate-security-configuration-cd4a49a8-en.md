---
title: Power Pages form agents need deliberate security configuration
description: A preview feature converts a Power Pages basic form into an agent, with
  web roles, authentication and Web API field exposure requiring careful review.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- environments
- copilot-studio
content_type: curated_summary
curation_id: cd4a49a86933c4c3c13243f3
image:
  path: "/assets/img/curated/cd4a49a86933c4c3c13243f3.png"
  alt: 'Governance card: A form agent can expose every table column. Restrict Web
    API fields before you publish.'
permalink: "/en/posts/power-pages-form-agents-need-deliberate-security-configuration-cd4a49a8/"
translation_url: "/de/posts/power-pages-form-agents-need-deliberate-security-configuration-cd4a49a8/"
source_url: https://readyxrm.blog/2025/08/21/power-pages-tired-of-filling-forms-use-an-agent/
source_site_url: https://readyxrm.blog/
source_title: 'Power Pages: Tired of filling forms? Use an agent!'
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-08-21'
source_type: article
---

## TL;DR

Power Pages can convert a basic form into a Copilot Studio agent, but the preview setup enables all table columns for the Power Pages Web API. Assign permitted web roles, review authentication, and replace the WebAPI fields site setting wildcard with a comma-separated list of only the form columns before publishing.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Treat the form agent as a data-entry surface, test the preview behavior, and confirm only required fields are exposed so the agent does not collect or update unintended data.
- Admins/CoE: Enable the site copilot and native-control setting, assign web roles, review authentication, and replace the WebAPI fields wildcard with a comma-separated allowlist before publishing; developer environments cannot use public mode.
- Security/Compliance: Be cautious with unauthenticated access and verify table permissions, web roles, authentication, and exposed columns because the conversion process initially enables every table column.
