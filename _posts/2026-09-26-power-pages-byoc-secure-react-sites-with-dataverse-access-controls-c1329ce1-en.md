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
faq:
  - question: "What do I need installed before building a Power Pages code site with React?"
    answer: "Visual Studio Code, Node.js and the Power Platform Tools extension, plus a non-production Power Platform environment. The article scaffolds the project with Vite and its React template. It names 31 January as the date when bring your own code reaches general availability. Locally, the project is built with npm run build and viewed with npm run preview."
  - question: "Which commands upload a compiled React site to Power Pages?"
    answer: "First authenticate with pac auth create and the environment ID. Then run pac powerpages upload-code-site with the root path, the compiled path, which is the dist folder, and the site name. Before that, the article builds the React project locally with npm run build."
  - question: "How do I allow a React single page app to read Dataverse data?"
    answer: "Enable each table through the site setting Webapi/tablename/enabled set to true, and list the columns by name in Webapi/tablename/fields. The article notes that wildcards are not supported, so you must specify which fields to expose. For calls, it builds a CSRF token helper that puts the token in the __RequestVerificationToken header."
  - question: "How does the tutorial limit which records a signed-in user sees?"
    answer: "The tutorial configures table permissions and web roles so that only authenticated users can see their own session records. Sign-in is added through Microsoft Entra External ID, with the authority URL stored as a Vite environment variable. The app reads the user state from window.Microsoft.Dynamic365.Portal.User."
  - question: "What limits does the article mention for BYOC code sites?"
    answer: "Local preview cannot reach Dataverse, so you test the integration after uploading the site to Power Pages. The design studio disables the pages and style workspaces for code sites. The article also says to verify AI-generated authentication code carefully, particularly the CSRF token handling and permissions logic."
---

## TL;DR

Power Pages single-page applications can host a React site while retaining Power Pages authentication and Dataverse security. The tutorial enables selected Web API tables and fields, uses a CSRF token helper, configures table permissions and web roles, adds Entra External ID sign-in, and limits records to the signed-in user.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Build and test React sites in a non-production Power Platform environment, then verify the generated code and Web API behavior before deployment.
- Admins/CoE: Enable only required Dataverse tables and columns, avoid using an asterisk for fields, and configure table permissions and web roles explicitly.
- Security/Compliance: Require CSRF tokens for Web API calls and test unauthenticated, authenticated and signed-out access so users cannot retrieve records belonging to others.
- Leadership/Business: Treat the coded front end as an extension of Power Pages controls, not a replacement for its hosting, authentication and data security model.
