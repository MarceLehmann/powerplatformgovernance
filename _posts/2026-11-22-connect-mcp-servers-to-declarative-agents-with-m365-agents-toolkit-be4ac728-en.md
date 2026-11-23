---
title: Connect MCP Servers To Declarative Agents With M365 Agents Toolkit
description: 'Matthew Devaney walks through connecting three MCP servers to declarative
  agents: Microsoft Learn with no authentication, Atlassian with dynamic OAuth and
  GitHub with static OAuth registration.'
date: '2026-11-22T22:40:22Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- copilot-studio
content_type: curated_summary
curation_id: be4ac728b4535c1aea1aa253
image:
  path: "/assets/img/curated/be4ac728b4535c1aea1aa253.png"
  alt: 'Governance card: An MCP server is only as safe as its sign-in. Pick the auth
    type before the agent ships.'
permalink: "/en/posts/connect-mcp-servers-to-declarative-agents-with-m365-agents-toolkit-be4ac728/"
translation_url: "/de/posts/connect-mcp-servers-to-declarative-agents-with-m365-agents-toolkit-be4ac728/"
source_url: https://www.matthewdevaney.com/m365-agents-toolkit-connect-mcp-server-to-declarative-agent/
source_site_url: https://www.matthewdevaney.com/
source_title: 'M365 Agents Toolkit: Connect MCP Server To Declarative Agent'
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-11-22'
source_type: article
faq:
- question: Which MCP servers can a declarative agent use without any authentication?
  answer: The Microsoft Learn MCP server works with no authentication. Its endpoint
    at learn.microsoft.com/api/mcp gives agents access to trusted Microsoft documentation
    and code samples.
- question: What is the difference between dynamic and static OAuth registration for
    MCP servers?
  answer: With dynamic registration, Atlassian handles the OAuth setup during sign-in.
    With static registration, as for GitHub, you register an OAuth app yourself and
    supply client ID, secret and scopes.
- question: Which OAuth scopes do I need for the GitHub MCP server?
  answer: The walkthrough uses the scopes repo, read:org and read:user. They tell
    the GitHub MCP server what access the OAuth app has, such as reading repositories.
animation:
  video: /assets/img/animations/be4ac728b4535c1aea1aa253-en.mp4
  poster: /assets/img/animations/be4ac728b4535c1aea1aa253-en.poster.webp
  width: 800
  height: 450
  alt: "A declarative agent connects to Microsoft Learn with no authentication, to Atlassian with dynamic OAuth sign in, to GitHub with a registered OAuth app and scopes, then is provisioned from VS Code and tested in M365 Copilot."
---

## TL;DR

Declarative agents built with M365 Agents Toolkit can call MCP servers to reach external systems. Microsoft Learn&\#39;s MCP server needs no authentication; Atlassian&\#39;s uses OAuth with dynamic registration and prompts the user to sign in; GitHub&\#39;s requires a registered OAuth app with client ID, secret and scopes such as repo and read:org. Each agent is provisioned from VS Code and tested in M365 Copilot.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Match the MCP server authentication type to the target service when building a declarative agent: none for Microsoft Learn, dynamic OAuth for Atlassian, static OAuth with client ID, secret and scopes for GitHub.
- Admins/CoE: Track which MCP endpoints and permission scopes makers are wiring into agents, since provisioned agents can read and write external systems like JIRA and GitHub.
- Security/Compliance: OAuth scopes such as repo and read:org define what an agent may access, so review each OAuth app registration and keep client secrets controlled.
