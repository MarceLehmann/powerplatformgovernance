---
title: Govern Microsoft 365 Copilot agents with pilots and ownership rules
description: Use agent settings to limit users, publishers, sharing and individual
  agents while checking oversharing before rollout.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- compliance
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 75b0438b21c9779a1704a56b
image:
  path: "/assets/img/curated/75b0438b21c9779a1704a56b.png"
  alt: 'Governance card: Enable agents gradually. Fix oversharing before agents make
    it visible.'
permalink: "/en/posts/govern-microsoft-365-copilot-agents-with-pilots-and-ownership-rules-75b0438b/"
translation_url: "/de/posts/govern-microsoft-365-copilot-agents-with-pilots-and-ownership-rules-75b0438b/"
source_url: https://www.andersjensen.org/en/articles/should-you-enable-agents-in-microsoft-365-copilot/
source_site_url: https://www.andersjensen.org/
source_title: Should You Enable Agents in Microsoft 365 Copilot?
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-12'
source_type: article
faq:
  - question: "What access do declarative agents have in Microsoft 365 Copilot?"
    answer: "The same as the user and nothing more. Agents cannot open SharePoint sites, mailboxes or Teams channels that the user cannot open."
  - question: "What is the main risk when enabling agents in Microsoft 365 Copilot?"
    answer: "Oversharing. Agents do not leak data, but they activate existing permissions quickly, so overly broad access on old SharePoint sites becomes visible."
  - question: "What happens to agents when their builder leaves the company?"
    answer: "Agents built with Agent Builder can become ownerless when employees change jobs. The admin center offers management rules for ownerless agents, which transfer them to the manager of the previous owner."
---

## TL;DR

Microsoft 365 Copilot declarative agents use the requesting user&\#39;s permissions and do not receive an independent Entra ID identity. Before enabling them, run Purview and SharePoint Advanced Management oversharing checks, pilot selected users, review external publishers individually, and use Agent Management Rules to address ownerless agents.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Limit User access to a pilot group, then expand only after observing usage and reviewing each agent&\#39;s data sources.
- Security/Compliance: Use Purview and SharePoint Advanced Management to identify broad legacy access before agents surface it faster.
- Admins/CoE: Allow Microsoft and organisational agents first, assess external publishers individually, and define sharing and owner-transfer rules.
- Leadership/Business: Document the enablement decision, rationale and metered-consumption exposure so future reviews do not depend on institutional memory.
