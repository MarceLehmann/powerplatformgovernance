---
title: 'Power Pages BYOC: Secure React sites with Dataverse access controls'
description: A tutorial for hosting React code in Power Pages while configuring Web
  API exposure, CSRF protection, authentication and Dataverse permissions.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- environments
- dataverse
- power-apps
- ownership
content_type: curated_summary
curation_id: c1329ce18ed5992ab5d172ac
image:
  path: "/assets/img/curated/c1329ce18ed5992ab5d172ac.png"
  alt: 'Governance card: Power Pages security follows the data path. Lock down Web
    API fields, table permissions, and user access.'
permalink: "/en/posts/power-pages-byoc-secure-react-sites-with-dataverse-access-controls-c1329ce1/"
translation_url: "/de/posts/power-pages-byoc-secure-react-sites-with-dataverse-access-controls-c1329ce1/"
source_url: https://readyxrm.blog/2026/01/02/power-pages-bring-your-own-code/
source_site_url: https://readyxrm.blog/
source_title: 'Power Pages: Bring your own code! (Tutorial)'
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-01-02'
source_updated_at: '2026-01-02'
source_type: article
---

## TL;DR

Power Pages single-page applications can host a React site while retaining Power Pages authentication and Dataverse security. The tutorial enables selected Web API tables and fields, uses a CSRF token helper, configures table permissions and web roles, adds Entra External ID sign-in, and limits records to the signed-in user.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Build and test React sites in a non-production Power Platform environment, then verify the generated code and Web API behavior before deployment.
- Admins/CoE: Enable only required Dataverse tables and columns, avoid using an asterisk for fields, and configure table permissions and web roles explicitly.
- Security/Compliance: Require CSRF tokens for Web API calls and test unauthenticated, authenticated and signed-out access so users cannot retrieve records belonging to others.
- Leadership/Business: Treat the coded front end as an extension of Power Pages controls, not a replacement for its hosting, authentication and data security model.
