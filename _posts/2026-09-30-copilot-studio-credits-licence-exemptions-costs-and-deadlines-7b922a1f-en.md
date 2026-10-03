---
title: 'Copilot Studio credits: licence exemptions, costs and deadlines'
description: Copilot Studio moved to usage-based Copilot Credits on 3 August 2026,
  with legacy agents moving by 1 September.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- copilot-studio
content_type: curated_summary
curation_id: 7b922a1f74a4194071720757
image:
  path: "/assets/img/curated/7b922a1f74a4194071720757.png"
  alt: 'Governance card: Copilot licenses do not always exempt agent usage. Building
    and testing can consume credits too.'
permalink: "/en/posts/copilot-studio-credits-licence-exemptions-costs-and-deadlines-7b922a1f/"
translation_url: "/de/posts/copilot-studio-credits-licence-exemptions-costs-and-deadlines-7b922a1f/"
source_url: https://www.andersjensen.org/en/articles/copilot-studio-pricing/
source_site_url: https://www.andersjensen.org/
source_title: 'Copilot Studio Pricing 2026: Credits Explained + Calculator'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-12'
source_type: article
faq:
  - question: "What does a Copilot Credit cost and how can I buy it?"
    answer: "One credit costs one cent by default and sits in one shared tenant pool. There are three models: pay-as-you-go at one cent per credit, billed monthly; a capacity pack with 25,000 credits for $200 per month; and a Pre-Purchase Plan with annual prepayment, a 5 to 20 percent volume discount and a minimum of 300,000 credits."
  - question: "When is the capacity pack cheaper than pay-as-you-go?"
    answer: "Above about 20,000 credits per month. The $200 pack corresponds to 20,000 credits at one cent each, so below that volume pay-as-you-go wins. Unused pack credits are gone when the pack resets each month, with no carry-over, which raises the effective price per credit if you under-use it."
  - question: "How many credits do typical Copilot Studio actions consume?"
    answer: "Tenant graph grounding costs 12 credits per response, other knowledge sources such as files, websites and Dataverse cost 2 credits per response, a tool call costs 5 credits, and agent flows cost 13 credits per 100 standalone actions. AI prompts add surcharges by tier: Basic, Standard or Premium. The rates come from the Credits Guide of August 2026."
  - question: "Does a Microsoft 365 Copilot license exempt agents from credits?"
    answer: "Only on the classic harnesses. Internal users with such a license get the B2E exemption on Standard and Copilot Chat agents. On the GitHub Copilot harness the exemption does not apply, and you pay credits during building and runtime. Microsoft has not published concrete rates for that harness, and rates for natural language authoring are missing too."
  - question: "Who shares the credit budget with Copilot Studio agents?"
    answer: "Copilot Cowork, Dynamics 365 and Work IQ draw from the same tenant pool, so agents compete with Cowork users for one budget. The author notes that nobody tells you this up front. Agents created before August 3, 2026 keep their old pricing until September 1, 2026 and then move to credit billing."
---

## TL;DR

Copilot Studio uses tenant-level Copilot Credits. Tenant graph grounding costs 12 credits per response, other knowledge costs 2, and tool calls cost 5. Microsoft 365 Copilot licences exempt licensed internal users only on classic harnesses. The GitHub Copilot harness bills building, testing and runtime usage, with no published new-harness rates.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Model agent, test and evaluation consumption before deployment because credits are shared across the tenant and GitHub Copilot harness usage is billed during building and runtime.
- Leadership/Business: Compare pay-as-you-go against 25,000-credit capacity packs based on actual monthly demand, since unused pack credits reset each month.
- Security/Compliance: Identify classic versus GitHub Copilot harness agents when reviewing licence assumptions, because the internal-user exemption does not apply to the new harness.
