---
title: Adding Custom Headers to MCP Connectors in Copilot Studio
description: Configure server-level context for Copilot Studio MCP connectors by editing
  OpenAPI YAML, refreshing each agent, and adding the header as an input.
date: '2026-10-27T17:01:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- governance
- environments
- copilot-studio
content_type: curated_summary
curation_id: 29eb3741046c9b9a3c69bb93
image:
  path: "/assets/img/curated/29eb3741046c9b9a3c69bb93.png"
  alt: 'Governance card: Custom headers carry context. Define them in OpenAPI, then
    refresh every agent.'
permalink: "/en/posts/adding-custom-headers-to-mcp-connectors-in-copilot-studio-29eb3741/"
translation_url: "/de/posts/adding-custom-headers-to-mcp-connectors-in-copilot-studio-29eb3741/"
source_url: https://microsoft.github.io/mcscatblog/posts/mcp-custom-headers/
source_site_url: https://microsoft.github.io/
source_title: Adding Custom Headers to MCP Connectors in Copilot Studio
source_name: Microsoft Copilot Studio CAT
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2025-10-22'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I add a user-level header to an MCP connector in Copilot Studio?
  answer: Edit the connector OpenAPI YAML under the /mcp POST endpoint, update it,
    then expose the header through the connector Inputs section.
- question: Why must I remove and re-add an MCP connector after editing its OpenAPI
    YAML?
  answer: Copilot Studio recognizes the changed custom header only after the connector
    is removed and added again in each agent that uses it.
- question: Are X-prefixed custom headers supported by MCP connectors in October 2025?
  answer: The documented October 2025 issue says X-prefixed headers are not working,
    so use names without the X-prefix until the issue is resolved.
animation:
  video: /assets/img/animations/29eb3741046c9b9a3c69bb93-en.mp4
  poster: /assets/img/animations/29eb3741046c9b9a3c69bb93-en.poster.webp
  width: 800
  height: 450
  alt: "A four step sequence shows editing the OpenAPI YAML under the /mcp POST endpoint, updating the connector, removing and re adding it in each agent, and then setting the header input value."
---

## TL;DR

Copilot Studio MCP connectors have no UI for custom headers, so define them in the OpenAPI YAML under the /mcp POST endpoint, update the connector, remove and re-add it in each agent, then configure the header input with a value or PowerFX expression. Avoid X-prefixed names while the documented issue remains.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Add server-level context such as a verified user rank as a custom header instead of a tool input, so the MCP server can apply consistent filtering across calls.
- Admins/CoE: Edit the custom connector OpenAPI YAML, update it, then remove and re-add the connector in every affected agent because an update alone is insufficient.
- Security/Compliance: Review custom headers used for authentication, roles, permissions, or feature flags, and avoid X-prefixed names while the documented connector issue remains.
