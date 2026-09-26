---
title: 'SharePoint Metadata Filtering in Copilot Studio: Agent Decisions'
description: GitHub Copilot harness agents filter SharePoint files by metadata, pass
  matching URLs to knowledge search, and preserve SharePoint permission trimming for
  scoped answers.
date: '2026-09-24T02:26:43Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- security
- compliance
- ownership
content_type: curated_summary
curation_id: e78ae1599bc33374582a65d6
permalink: "/en/posts/sharepoint-metadata-filtering-in-copilot-studio-agent-decisions-e78ae159/"
translation_url: "/de/posts/sharepoint-metadata-filtering-in-copilot-studio-agent-decisions-e78ae159/"
source_url: https://microsoft.github.io/mcscatblog/posts/sharepoint-metadata-filtering/
source_site_url: https://microsoft.github.io/
source_title: 'SharePoint Metadata Filtering in Copilot Studio: From Topic Logic to
  Agent Decisions'
source_name: The Custom Engine (Microsoft Copilot Studio CAT)
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-09-01'
source_updated_at: '2026-09-02'
---
## TL;DR

GitHub Copilot harness agents can use SharePoint columns such as Country, approval status, department, owner, and review date to identify applicable files. The sharepoint\_metadata\_filter tool returns matching URLs and counts; knowledge\_search\_sharepoint then searches those URLs. Metadata filtering supports inventory and scoped answers, but does not replace permissions, and the internal tool contract may change.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: keep SharePoint metadata like country, approval status, department, owner, and review date accurate, since agents use it to exclude drafts, retired content, or the wrong audience before retrieval even starts.
- Security/Compliance: confirm permission trimming stays the actual access boundary — metadata filtering narrows what gets searched, it doesn't grant or restrict access on its own.
- Makers: building on this should not treat the documented sharepoint_metadata_filter and knowledge_search_sharepoint tool names as a stable public API, since Microsoft flags the internal contract may change.
