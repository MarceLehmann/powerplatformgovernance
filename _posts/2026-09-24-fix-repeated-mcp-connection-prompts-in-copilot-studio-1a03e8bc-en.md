---
title: Fix repeated MCP connection prompts in Copilot Studio
description: A Copilot Studio MCP tool may repeatedly request a connection when its
  credential setting uses end-user credentials; switching to maker-provided credentials
  resolved the reported issue.
date: '2026-09-24T02:53:09Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
content_type: curated_summary
curation_id: 1a03e8bcc33052bfb9777a7b
permalink: "/en/posts/fix-repeated-mcp-connection-prompts-in-copilot-studio-1a03e8bc/"
translation_url: "/de/posts/fix-repeated-mcp-connection-prompts-in-copilot-studio-1a03e8bc/"
source_url: https://www.itaintboring.com/copilot-studio/copilot-studio-agent-keeps-asking-you-to-connect-to-an-mcp-server-even-though-you-are-apparently-connected-check-this-setting/
source_site_url: https://www.itaintboring.com/
source_title: Copilot Studio agent keeps asking you to connect to an MCP server? Check
  this setting
source_name: It Ain't Boring
source_language: en
source_language_name: English
source_author: Alex Shlega
source_published_at: '2025-11-08'
faq:
  - question: "Why does a Copilot Studio MCP tool keep asking users to connect?"
    answer: "In the reported case, Credentials to use was set to End user credentials, so the tool kept showing the connection prompt despite an active connection."
  - question: "What fixed the problem?"
    answer: "Switching the tool to Maker-provided credentials stopped the prompt and made the test agent work. Extra connections and API key authentication did not help."
  - question: "What should security teams check before using maker-provided credentials?"
    answer: "Whether maker-provided credentials suit the connector and usage scenario, because the agent then no longer requires each user to connect. The source does not define the resulting access boundaries."
---
## TL;DR

In Copilot Studio, an MCP tool continued showing “Let’s get you connected first” despite an active connection because “Credentials to use” was set to “End user credentials.” Switching the tool to “Maker-provided credentials” stopped the connection prompt and made the test agent work, while API key authentication and additional connections did not resolve it.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: test the MCP tool's "Credentials to use" setting when an agent repeatedly sends users to Connection Manager despite an active connection.
- Security/Compliance: review whether maker-provided credentials are appropriate for the connector and usage scenario, because that setting means the agent no longer requires each user to connect; the source does not define the resulting access boundaries.
