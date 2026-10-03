---
title: 'PCF Controls or JavaScript: Choose the Supported Fit'
description: Choose PCF controls or JavaScript by matching the user experience, app
  context, maintainability and security needs.
date: '2026-09-29T11:14:41Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- security
- ownership
- power-apps
content_type: curated_summary
curation_id: d28b756205bcef8a79a30efd
image:
  path: "/assets/img/curated/d28b756205bcef8a79a30efd.png"
  alt: 'Governance card: Use the smallest supported tool. Client-side checks do not
    secure critical data.'
permalink: "/en/posts/pcf-controls-or-javascript-choose-the-supported-fit-d28b7562/"
translation_url: "/de/posts/pcf-controls-or-javascript-choose-the-supported-fit-d28b7562/"
source_url: https://softchief.com/pcf-controls-vs-javascript-in-dynamics-365-which-customization-approach-should-you-use/
source_site_url: https://softchief.com/
source_title: 'PCF Controls vs JavaScript in Dynamics 365: Which Customization Approach
  Should You Use?'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-09-29'
source_type: article
faq:
  - question: "When should I choose a PCF control and when JavaScript in Dynamics 365?"
    answer: "PCF builds custom interface components, while JavaScript usually adds client-side behaviour to model-driven app forms. Choose PCF when you want to change how data is displayed or edited, such as a slider for numbers, a calendar view or a map view. Choose JavaScript to respond to form events like load, field change or save, set values or toggle field visibility."
  - question: "Is hiding a field with JavaScript enough to protect the data?"
    answer: "No. Hiding a field or checking its value in the browser does not secure the data. Client-side checks help guide users, but important data rules have to be enforced on the server. Access is controlled by platform security roles and permissions. This holds for PCF controls and form scripts alike."
  - question: "Is Xrm.Page still recommended for new form code in Dynamics 365?"
    answer: "No. Microsoft marks the older Xrm.Page approach as deprecated and recommends formContext for new code where applicable. Form scripts should use the supported client API and pass the execution context. The article also advises against direct DOM manipulation, because internal markup is not a stable contract and such work can break when the app changes."
  - question: "Which apps can run PCF controls and form scripts?"
    answer: "Form scripts apply to model-driven app forms. PCF components support both model-driven and canvas apps, although support varies by component type, target surface and configuration. Before development, confirm that your field and app are supported for the planned component, and always test in the target app with real data."
  - question: "What should I clarify before building a PCF control or form script?"
    answer: "Clarify the requirement and supported platform surface, the skills in your team and who owns long-term maintenance. PCF typically needs TypeScript and framework knowledge, form scripts need JavaScript and client API knowledge. Prototype the riskiest assumptions, such as mobile use or complex forms, and test accessibility, since custom controls do not get keyboard support or screen reader support automatically."
---

## TL;DR

Use PCF for reusable custom interfaces such as sliders, dials, calendars, maps or specialized data views. Use JavaScript for supported model-driven form events such as load, change and save. Check app and field support, package and test releases, and enforce critical rules server-side because client-side behavior does not secure data.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Choose PCF for a reusable custom interface and JavaScript for focused model-driven form behavior; use supported APIs and avoid direct DOM changes.
- Admins/CoE: Define packaging, environment settings, release approval and long-term ownership before implementation, then test imported customizations in the target app.
- Security/Compliance: Treat field hiding and browser validation as user guidance only; use platform permissions and server-side enforcement for critical data rules.
