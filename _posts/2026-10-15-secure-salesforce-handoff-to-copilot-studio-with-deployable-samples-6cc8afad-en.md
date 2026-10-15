---
title: Secure Salesforce handoff to Copilot Studio with deployable samples
description: Updated integration guidance adds Apex samples, Named Credentials, permission
  setup and scripts for connecting Salesforce Einstein Bot with Copilot Studio.
date: '2026-10-15T17:01:23Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- alm
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 6cc8afadb5444c8783e63d89
image:
  path: "/assets/img/curated/6cc8afadb5444c8783e63d89.png"
  alt: 'Governance card: Keep secrets out of Apex code. Use Named Credentials.'
permalink: "/en/posts/secure-salesforce-handoff-to-copilot-studio-with-deployable-samples-6cc8afad/"
translation_url: "/de/posts/secure-salesforce-handoff-to-copilot-studio-with-deployable-samples-6cc8afad/"
source_url: https://microsoft.github.io/mcscatblog/posts/salesforce-copilot-studio-handoff/
source_site_url: https://microsoft.github.io/
source_title: 'Salesforce Handoff to Copilot Studio: From Bare Docs to One-Click Deploy'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-03-13'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does the Salesforce Einstein Bot Confused dialog hand off messages
    to Copilot Studio?
  answer: The Confused dialog forwards an unmatched customer message through the Direct
    Line API, then displays Copilot Studio’s response in Einstein Bot.
- question: What does the Salesforce Copilot Studio deployment script configure?
  answer: It deploys three Apex classes, creates callout and credential settings,
    grants the classes to the Chatbot permission set, and adds principal access.
- question: Why should Salesforce Named Credentials store the Direct Line secret?
  answer: Named Credentials keep the secret out of Apex source, centralize rotation,
    and limit credential-principal access to the Chatbot permission set.
---

## TL;DR

Salesforce Einstein Bot forwards unmatched messages to Copilot Studio through Direct Line. Deployment scripts create three Apex classes, credential settings and permission grants, while Named Credentials keep Direct Line secrets out of code. The integration supports unauthenticated agents and uses configurable polling with a default five-second delay and five retries.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Configure Einstein Bot Welcome and Confused dialogs so unmatched messages reach Copilot Studio and responses return to customers.
- Admins/CoE: Run the deployment script, then add the Direct Line secret manually to the External Credential because secrets are intentionally excluded from scripts.
- Security/Compliance: Use Named Credentials and Chatbot permission-set access to centralize secret rotation and restrict credential-principal access.
