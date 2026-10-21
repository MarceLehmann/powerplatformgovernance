---
title: What Purview DLP Really Controls in Copilot
description: Purview DLP can restrict Copilot web searches, prompts, labeled files
  and external emails, but it does not fix permissions or inspect uploaded files by
  content.
date: '2026-10-21T10:58:42Z'
author: governance_editorial
lang: en
toc: false
tags:
- dlp
- security
- compliance
content_type: curated_summary
curation_id: b4c5acf47a3089a3d862cd8a
image:
  path: "/assets/img/curated/b4c5acf47a3089a3d862cd8a.png"
  alt: 'Governance card: DLP is not a universal AI switch. Match each control to the
    processing step it must restrict.'
permalink: "/en/posts/what-purview-dlp-really-controls-in-copilot-b4c5acf4/"
translation_url: "/de/posts/what-purview-dlp-really-controls-in-copilot-b4c5acf4/"
source_url: https://www.mvptreff.de/2026/10/21/purview-dlp-copilot-was-wirklich-kontrolliert/
source_site_url: https://www.mvptreff.de/
source_title: 'PURVIEW & COPILOT: WAS DLP WIRKLICH KONTROLLIERT – UND WAS NICHT'
source_name: MVPTreff
source_language: de
source_language_name: Deutsch
source_author: Julian Kusenberg
source_published_at: '2026-10-21'
source_type: article
faq:
- question: How does Purview DLP prevent Microsoft 365 Copilot from using external
    web search?
  answer: Purview checks the prompt for defined Sensitive Information Types and prevents
    external web search when one is detected. Internal responses can still continue.
- question: What happens when a Microsoft 365 Copilot prompt contains a Sensitive
    Information Type?
  answer: A matching Sensitive Information Type can prevent Copilot from answering
    the prompt at all. Another prompt without the sensitive information may still
    work.
- question: Can Copilot DLP inspect a file uploaded directly to a Copilot prompt?
  answer: No. This Copilot DLP location checks the user-entered prompt text, not the
    uploaded file contents for Sensitive Information Types.
---

## TL;DR

Microsoft Purview DLP uses separate controls for Microsoft 365 Copilot: it can stop external web search, block sensitive prompts, exclude labeled files or emails, and reject external email sources. It does not repair permissions or inspect directly uploaded files for Sensitive Information Types through this policy location.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Map each DLP rule to the processing step it should restrict, because web search, prompt handling, labeled items and external email sources have different effects.
- Security/Compliance: Keep permissions as the first control and add DLP for Copilot processing, since DLP does not correct excessive SharePoint access.
- Makers: Do not assume a sensitive direct upload will be detected by the Copilot DLP location, because its file content is not checked for Sensitive Information Types.
