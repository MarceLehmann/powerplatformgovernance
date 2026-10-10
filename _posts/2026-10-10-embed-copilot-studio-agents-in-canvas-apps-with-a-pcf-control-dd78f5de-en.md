---
title: Embed Copilot Studio agents in Canvas Apps with a PCF control
description: The ChatControl PCF component replaces the deprecated Canvas Apps Copilot
  control and adds SSO, custom styling and two-way agent communication.
date: '2026-10-10T16:54:18Z'
author: governance_editorial
lang: en
toc: false
tags:
- power-apps
- copilot-studio
- environments
- security
content_type: curated_summary
curation_id: dd78f5deac83abbb251911ae
image:
  path: "/assets/img/curated/dd78f5deac83abbb251911ae.png"
  alt: 'Governance card: A PCF control needs environment approval before it can embed
    an agent. Secure the connection before scaling the experience.'
permalink: "/en/posts/embed-copilot-studio-agents-in-canvas-apps-with-a-pcf-control-dd78f5de/"
translation_url: "/de/posts/embed-copilot-studio-agents-in-canvas-apps-with-a-pcf-control-dd78f5de/"
source_url: https://microsoft.github.io/mcscatblog/posts/embed-copilot-studio-agents-canvas-apps/
source_site_url: https://microsoft.github.io/
source_title: Embed Copilot Studio Agents in Canvas Apps with a PCF Control
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Dieter De Cock
source_published_at: '2026-04-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How do I embed a Copilot Studio agent in a Canvas App after the built-in
    Copilot control was deprecated?
  answer: Use the ChatControl PCF component from the Copilot Studio Samples repository
    and import its Power Platform solution into the environment.
- question: What must be enabled in Power Platform before adding the ChatControl PCF
    control to a Canvas App?
  answer: PCF components must be enabled in the target Power Platform environment,
    and the setup requires System Administrator rights there.
- question: How does SSO work for a Copilot Studio agent embedded through ChatControl?
  answer: ChatControl uses the Microsoft 365 Agents SDK for SSO, with an Azure app
    registration and configuration in Azure and Copilot Studio.
---

## TL;DR

The built-in Copilot control cannot be added to new Canvas Apps from February 2, 2026. The ChatControl PCF component embeds a published Copilot Studio agent using WebChat and the Microsoft 365 Agents SDK, but requires PCF enablement, System Administrator rights, Microsoft authentication and an Azure app registration for SSO.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Use the ChatControl PCF component when a Canvas App needs an embedded Copilot Studio agent, custom styling or app-to-agent context.
- Admins/CoE: Enable PCF components in the target environment and confirm System Administrator access before importing the solution.
- Security/Compliance: Configure Microsoft authentication and the Azure app registration required for SSO in both Azure and Copilot Studio.
- Leadership/Business: Account for the deprecated built-in control and assess whether the recommended Microsoft 365 Copilot replacement is available in your environment.
