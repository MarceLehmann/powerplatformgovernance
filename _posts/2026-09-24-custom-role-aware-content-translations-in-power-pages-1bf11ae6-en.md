---
title: Custom, role-aware content translations in Power Pages
description: A Dataverse table, Liquid FetchXML and JavaScript provide custom multilingual
  labels with role- and page-aware selection in Power Pages.
date: '2026-09-24T02:53:09Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- ownership
content_type: curated_summary
curation_id: 1bf11ae60f6a42ddf14c4917
permalink: "/en/posts/custom-role-aware-content-translations-in-power-pages-1bf11ae6/"
translation_url: "/de/posts/custom-role-aware-content-translations-in-power-pages-1bf11ae6/"
source_url: https://www.itaintboring.com/power-platform/content-translations-in-power-pages/
source_site_url: https://www.itaintboring.com/
source_title: Content translations in Power Pages – the custom way
source_name: It Ain't Boring
source_language: en
source_language_name: English
source_author: Alex Shlega
source_published_at: '2025-09-22'
faq:
  - question: "Why does the author use a custom table for texts instead of content snippets?"
    answer: "Snippets may need customization on a custom site rendered with JavaScript and Liquid, and the author finds them hard for translators to manage. A custom table can be maintained in the main model-driven app."
  - question: "How is the text table structured?"
    answer: "The table holds a name used as the key, an English label and a French label, and the query reads only active records."
  - question: "What is the downside of this solution?"
    answer: "Because the texts are replaced after the page has loaded, occasional flickering can occur while the original content is still visible."
---
## TL;DR

A custom Power Pages site can store English and French labels in a Dataverse custom table, load active records with Liquid FetchXML into a JavaScript object, and replace elements marked with content-key using the selected language. The pattern supports role- and page/user-property-specific labels, but header caching can return stale or inappropriate content; substitution may be needed.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: define the content-key and language-selection logic carefully, especially when labels vary by user role or page properties.
- Admins/CoE: govern the custom content table, its associations and deployment approach because business users manage the translation data.
- Security/Compliance: test role matching and header caching, since cached content can interfere with labels selected for signed-in users.
