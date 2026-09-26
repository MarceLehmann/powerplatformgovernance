---
title: Connect Copilot Studio to SMS with Dynamics 365 Contact Center
description: A practical setup for SMS agents using a Power Platform environment,
  Dynamics 365 Contact Center, Twilio and explicit privacy guardrails.
date: '2026-09-26T23:23:49Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- security
- environments
- ownership
content_type: curated_summary
curation_id: dbcfb68bc46722a27a5f6a26
image:
  path: "/assets/img/curated/dbcfb68bc46722a27a5f6a26.png"
  alt: 'Governance card: No authentication makes SMS public. Guardrails and identity
    checks still matter.'
permalink: "/en/posts/connect-copilot-studio-to-sms-with-dynamics-365-contact-center-dbcfb68b/"
translation_url: "/de/posts/connect-copilot-studio-to-sms-with-dynamics-365-contact-center-dbcfb68b/"
source_url: https://www.matthewdevaney.com/how-to-send-and-receive-sms-text-messages-in-copilot-studio/
source_site_url: https://www.matthewdevaney.com/
source_title: How To Send And Receive SMS Text Messages In Copilot Studio
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-08-30'
source_type: article
---

## TL;DR

Copilot Studio can send and receive SMS through Dynamics 365 Contact Center and a paid Twilio account. The setup uses a Dataverse-enabled sandbox or production environment, the SMS channel, a messaging account, a webhook, an inbound workstream and an AI agent. The tutorial selects no authentication, so privacy rules and escalation guardrails are essential.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Define knowledge boundaries, escalation rules and privacy instructions before connecting the agent to SMS, because the tutorial makes the agent publicly available through no authentication.
- Admins/CoE: Create a dedicated sandbox or production environment with Dataverse and Contact Center, then configure the SMS channel, messaging account and workstream.
- Security/Compliance: Review the public access model, identity verification, prohibited data handling and webhook credentials before launch.
- Leadership/Business: Fund a paid Twilio account and human escalation path, since SMS delivery and sensitive requests require operational support.
