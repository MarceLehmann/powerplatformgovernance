---
title: 'Power Pages SPAs: Custom React code with platform security'
description: A practical preview tutorial shows how to upload a React single-page
  application to Power Pages while retaining authentication and table permissions.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- environments
- dataverse
content_type: curated_summary
curation_id: 30dd5f724ac5c30cba3ecf50
image:
  path: "/assets/img/curated/30dd5f724ac5c30cba3ecf50.png"
  alt: 'Governance card: A Power Pages SPA still needs authentication and table permissions.
    Preview code belongs outside production.'
permalink: "/en/posts/power-pages-spas-custom-react-code-with-platform-security-30dd5f72/"
translation_url: "/de/posts/power-pages-spas-custom-react-code-with-platform-security-30dd5f72/"
source_url: https://readyxrm.blog/2025/09/04/power-pages-single-page-apps-create-a-hello-world-website/
source_site_url: https://readyxrm.blog/
source_title: 'Power Pages single-page apps: Create a Hello World website'
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-09-04'
source_type: article
---

## TL;DR

Power Pages preview supports React, Angular and Vue single-page applications uploaded with the PAC CLI. The tutorial connects to a Dataverse environment outside production, uploads compiled code, reactivates the inactive site, and notes that authentication and table permissions remain available even though page editing and default styling templates are unavailable.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Build and test the SPA with the Power Platform tools extension, then upload compiled code through the PAC CLI; the preview feature supports custom React, Angular or Vue interfaces.
- Admins/CoE: Require deployment to a non-production Dataverse environment and review the uploaded site before reactivation; the tutorial explicitly warns against connecting to production.
- Security/Compliance: Configure authentication and table permissions for the SPA because custom code does not replace Power Pages security controls.
