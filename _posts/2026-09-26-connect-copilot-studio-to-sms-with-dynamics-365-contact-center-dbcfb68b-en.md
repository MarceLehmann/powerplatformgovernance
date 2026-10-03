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
faq:
  - question: "What do I need so a Copilot Studio agent can send and receive SMS?"
    answer: "You need three building blocks: a Copilot Studio agent with instructions and a knowledge source, a standalone installation of Dynamics 365 Contact Center and a paid Twilio account with a purchased phone number. The example is a hotel concierge agent that texts guests after check-in and answers questions about their stay. The agent's authentication is set to no authentication."
  - question: "Does a free Twilio trial account work with Dynamics 365 Contact Center?"
    answer: "No. The author states that a free trial account cannot be connected to Contact Center successfully. You need a paid Twilio account. The Account SID and Auth Token come from the API Keys and Tokens section of the Twilio console, and Contact Center uses these credentials to establish a secure connection with the Twilio account."
  - question: "How do I connect a Twilio number to Contact Center so incoming SMS arrive?"
    answer: "You create a messaging account for the SMS channel powered by Twilio in Contact Center and add your Twilio number there with the type Geo. Then you copy the callback URL from the account settings into the messaging configuration of the number at Twilio and select HTTP POST as the method. Twilio then forwards incoming messages to Contact Center."
  - question: "How do I attach the Copilot Studio agent to the SMS workstream?"
    answer: "Create an inbound workstream of type messaging with the SMS channel and the push work distribution mode, and add an SMS channel with your Twilio number. Then open the AI agent menu in Contact Center, select your agent and wait until the chat status shows connected. Afterwards add the agent to the workstream with the button for adding an AI agent."
  - question: "Which rules should the instructions of an SMS agent contain?"
    answer: "The example asks to keep replies under 320 characters where possible, to answer only from the knowledge base and not to guess. The agent must never ask for or repeat sensitive data such as card numbers, banking details, passwords or government ID numbers. It hands over to staff when a guest asks for a human, raises safety concerns, disputes charges, needs payment processing or wants to change a reservation."
---

## TL;DR

Copilot Studio can send and receive SMS through Dynamics 365 Contact Center and a paid Twilio account. The setup uses a Dataverse-enabled sandbox or production environment, the SMS channel, a messaging account, a webhook, an inbound workstream and an AI agent. The tutorial selects no authentication, so privacy rules and escalation guardrails are essential.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Define knowledge boundaries, escalation rules and privacy instructions before connecting the agent to SMS, because the tutorial makes the agent publicly available through no authentication.
- Admins/CoE: Create a dedicated sandbox or production environment with Dataverse and Contact Center, then configure the SMS channel, messaging account and workstream.
- Security/Compliance: Review the public access model, identity verification, prohibited data handling and webhook credentials before launch.
- Leadership/Business: Fund a paid Twilio account and human escalation path, since SMS delivery and sensitive requests require operational support.
