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
faq:
  - question: "Which frameworks does Power Pages support for single-page apps, and in what status?"
    answer: "React, Angular and Vue are supported. At the time of the post the feature was in preview, so the author says to expect some glitches. Nick Doelman, a Microsoft MVP, builds a hello world website with React. By his own account he had never built a React site until recently and used GitHub Copilot and ChatGPT for help."
  - question: "Which files make up the React app in the hello world example?"
    answer: "The app has three core files: index.html as the main HTML file, index.jsx as the JavaScript entry point and App.jsx as the main React component. The author describes React as a JavaScript library for building user interfaces from small, reusable components. A single-page app loads the page once and then updates parts with JavaScript, without full page reloads."
  - question: "What should you bring to rebuild the example?"
    answer: "You need good Power Pages knowledge plus basic HTML and JavaScript. The tooling is Visual Studio Code with the Power Platform Tools extension. The project is built with the command npm run build and started locally with npm start. The upload into the Power Pages environment follows through the PAC CLI."
  - question: "How do you upload the compiled React site to Power Pages?"
    answer: "First you sign in with pac auth create and the environment ID. That ID sits in the session details, which you open via the gear icon on the Power Pages home page. Then the command pac pages upload-code-site uploads the app, with the values rootpath, compiledPath and siteName. In the example the site is called HelloWorld."
  - question: "Which restrictions and advantages do code sites in Power Pages have?"
    answer: "With a single-page app you cannot add or edit pages, and the default styling templates are not available. In return you can set up the platform's authentication and table permissions. For later posts the author announces displaying Dataverse records through the Web API and showing CRUD operations."
---

## TL;DR

Power Pages preview supports React, Angular and Vue single-page applications uploaded with the PAC CLI. The tutorial connects to a Dataverse environment outside production, uploads compiled code, reactivates the inactive site, and notes that authentication and table permissions remain available even though page editing and default styling templates are unavailable.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Build and test the SPA with the Power Platform tools extension, then upload compiled code through the PAC CLI; the preview feature supports custom React, Angular or Vue interfaces.
- Admins/CoE: Require deployment to a non-production Dataverse environment and review the uploaded site before reactivation; the tutorial explicitly warns against connecting to production.
- Security/Compliance: Configure authentication and table permissions for the SPA because custom code does not replace Power Pages security controls.
