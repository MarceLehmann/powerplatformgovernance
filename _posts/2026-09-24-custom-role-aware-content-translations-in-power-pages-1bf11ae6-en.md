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
    answer: "Content snippets are the usual way to translate Power Pages. For a custom site without entity forms or lists, rendered with JavaScript and Liquid, the author says snippets might need customization, a custom management application or hardcoded text. He also finds snippets difficult for translators and stakeholders to manage, whereas a custom table can be maintained in the main model-driven app with other configuration data."
  - question: "How is the text table structured?"
    answer: "The table holds a name used as the key, an English label and a French label, and the query reads only active records. Alternatively it could hold one label plus a lookup to a language table. The example comes from a custom site built on the Government of Canada GC Web theme. The page code finds each text by its key."
  - question: "How do the texts get onto the page?"
    answer: "In the header area, a FetchXML query with Liquid reads the records and fills a JavaScript object with the labels. The current language comes from the variable for the selected website language. In the footer area, a script replaces the content of every element carrying an attribute called content-key with the matching label."
  - question: "How do role-aware texts work?"
    answer: "The text table gets a field for the role. For more complex matching, an additional table with declarative filters is added. This allows labels to depend on properties of the page or the signed-in person. As an example, the author mentions labels that depend on the vehicle type."
  - question: "What is the downside of this solution?"
    answer: "Because the texts are replaced after the page has loaded, occasional flickering can occur while the original content is still visible. The author suggests covering the content with a semi-transparent div at first and hiding it afterwards, though he says this does not seem a big issue. He also warns that the header script is cached when header caching is enabled, and names substitution as the way out."
---
## TL;DR

A custom Power Pages site can store English and French labels in a Dataverse custom table, load active records with Liquid FetchXML into a JavaScript object, and replace elements marked with content-key using the selected language. The pattern supports role- and page/user-property-specific labels, but header caching can return stale or inappropriate content; substitution may be needed.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: define the content-key and language-selection logic carefully, especially when labels vary by user role or page properties.
- Admins/CoE: govern the custom content table, its associations and deployment approach because business users manage the translation data.
- Security/Compliance: test role matching and header caching, since cached content can interfere with labels selected for signed-in users.
