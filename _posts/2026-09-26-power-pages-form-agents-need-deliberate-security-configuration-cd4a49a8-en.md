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
faq:
  - question: "What must be in place before a Power Pages form agent shows up on the site?"
    answer: "Copilot must be enabled in the Power Platform admin center, the site copilot must be switched on, and you add the site setting SiteCopilot/EnableNativeControlPVABots set to true. The author notes that this part is not in the documentation. The feature is in preview, so its behavior may be unpredictable."
  - question: "How do I stop a Power Pages form agent from exposing every column of a table?"
    answer: "In the Power Pages management app, find the Web API fields site setting and change it from the wildcard to a comma-separated list of the columns on your form. The preview setup enables all table columns for the Web API when the form is converted, so the default exposes every column of the table."
  - question: "Who should be allowed to use a Power Pages form agent?"
    answer: "Only the web roles you select on the security tab of the agent. The author warns to be careful exposing the agent to non-authenticated users. He also says to configure appropriate table permissions and web roles to access the form. The conversion process initially enables every table column for the Web API."
  - question: "Why can't I use public mode for a form agent in a developer environment?"
    answer: "The author notes that a site built on a developer environment cannot be made into public mode. In that case you need Entra ID and the Copilot authentication settings so that records are actually saved to Dataverse. The article does not walk through that configuration step by step."
  - question: "How does a Power Pages form agent differ from a normal form?"
    answer: "The agent converses with the visitor to gather the information, displays a summary at the end and allows submission, which creates the same Dataverse records as a traditional form. For now it does not do much beyond collecting information, like a form. The author expects it to be able to take other actions or engage other agents eventually."
---

## TL;DR

Power Pages can convert a basic form into a Copilot Studio agent, but the preview setup enables all table columns for the Power Pages Web API. Assign permitted web roles, review authentication, and replace the WebAPI fields site setting wildcard with a comma-separated list of only the form columns before publishing.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Treat the form agent as a data-entry surface, test the preview behavior, and confirm only required fields are exposed so the agent does not collect or update unintended data.
- Admins/CoE: Enable the site copilot and native-control setting, assign web roles, review authentication, and replace the WebAPI fields wildcard with a comma-separated allowlist before publishing; developer environments cannot use public mode.
- Security/Compliance: Be cautious with unauthenticated access and verify table permissions, web roles, authentication, and exposed columns because the conversion process initially enables every table column.
