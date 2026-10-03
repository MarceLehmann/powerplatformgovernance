---
title: Control Copilot Cowork access with pilot groups and credit limits
description: Enable Copilot Cowork through usage-based billing, then limit access
  to a security-group pilot with monthly credit caps and alerts.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- security
- compliance
- ownership
content_type: curated_summary
curation_id: af997403a85f6d95bea431d9
image:
  path: "/assets/img/curated/af997403a85f6d95bea431d9.png"
  alt: 'Governance card: Set limits before access. Pilot groups prevent a surprise
    Copilot bill.'
permalink: "/en/posts/control-copilot-cowork-access-with-pilot-groups-and-credit-limits-af997403/"
translation_url: "/de/posts/control-copilot-cowork-access-with-pilot-groups-and-credit-limits-af997403/"
source_url: https://www.andersjensen.org/en/articles/copilot-cowork-access-pilot-group/
source_site_url: https://www.andersjensen.org/
source_title: 'Copilot Cowork: How to give access with a pilot group'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-12'
source_type: article
faq:
  - question: "How long does it take to set up Copilot Cowork spending controls?"
    answer: "The article puts setup at about 15 minutes, followed by 20 to 30 minutes until activation takes effect. The path in the Microsoft 365 admin center is Copilot, then Cost management, then Get started. A Microsoft 365 Copilot license is required, and Cowork usage is billed separately in Copilot Credits."
  - question: "Which admin roles are needed for Cowork billing and spending policies?"
    answer: "A Global Administrator or Billing Administrator chooses the billing method, while an AI Administrator can create spending policies and set limits. Splitting the duties this way lets finance decide how costs are paid and lets the AI owner manage allowances, so plan which person holds which role before starting the setup."
  - question: "Can the billing method of a Cowork spending policy be changed later?"
    answer: "No, not directly. The choice between prepaid capacity packs and Azure pay-as-you-go cannot be changed without deleting and recreating the policy. Decide on the billing model before the pilot starts, because switching means rebuilding the policy and its limits from scratch."
  - question: "How do I limit Cowork to a pilot group instead of the whole organization?"
    answer: "The default scope is organization-wide. Choose Customize setup configuration, open User and group access and select Specific groups. Policies work on security groups only, since individual user assignment is announced as coming soon. Create the pilot security group first so it appears for selection."
  - question: "What happens when someone reaches the credit limit?"
    answer: "Access is lost until the first day of the next month. The article gives an example with 20,000 monthly credits, 16,000 per user and an alert at 15,000, which sends an email immediately and weekly until the first. Consumption appears under Cost management, refreshed about every 2 hours, and requests show under Credit requests."
---

## TL;DR

Copilot Cowork requires usage-based billing in the Microsoft 365 admin center, even for licensed Microsoft 365 Copilot users. Create a security-group pilot, configure a spending policy with monthly and per-user Copilot Credit limits plus alerts, restrict access to that group, and review Consumption data before wider rollout.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Create a security group for the pilot and select Specific groups rather than All users, so Cowork access is limited from the start.
- Security/Compliance: Set monthly policy and per-user credit limits with an alert before activation; limits are enforced and users lose access after reaching their cap.
- Leadership/Business: Review Cost management Consumption data after the pilot and adjust limits before broader rollout to avoid consumption-based billing surprises.
