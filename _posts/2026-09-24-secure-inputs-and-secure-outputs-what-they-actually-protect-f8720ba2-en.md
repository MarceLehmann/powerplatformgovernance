---
title: 'Secure Inputs and Secure Outputs: What They Actually Protect'
description: A per-action toggle in Power Automate that masks credentials and personal
  data in run history and logs, without changing how the action executes.
date: '2026-09-24T00:04:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- compliance
content_type: curated_summary
curation_id: f8720ba2865bc3009c9fb0a4
permalink: "/en/posts/secure-inputs-and-secure-outputs-what-they-actually-protect-f8720ba2/"
translation_url: "/de/posts/secure-inputs-and-secure-outputs-what-they-actually-protect-f8720ba2/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-98-secure-inputs-secure-outputs/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 98: Secure Inputs, Secure Outputs"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
publisher_disclosure: Both publications are edited by Marcel Lehmann.
faq:
  - question: "What do secure inputs and secure outputs hide in the flow run history?"
    answer: "They mask sensitive values such as passwords, tokens and personal details in a flow's run history. Anyone opening the history sees only a note at that spot saying the content is hidden due to the security configuration. That keeps confidential information in logs away from unauthorised viewers and supports data-protection compliance."
  - question: "What do secure inputs and outputs not protect in Power Automate?"
    answer: "They change nothing about processing. Data is still processed normally, and the masking only affects what is displayed in the log. The post therefore classes the setting as one part of a broader data-security strategy and advises considering the full context of your data processing. Related tips treat masking trigger outputs and securing service-account credentials as separate points."
  - question: "How do I turn on secure inputs or outputs for an action?"
    answer: "Open the affected action in your flow, go to its settings, toggle secure inputs, secure outputs or both, and save the change. The two options are independent and are set per action. That lets you mask only where truly sensitive values pass through."
  - question: "Do secure inputs and outputs slow down a flow run?"
    answer: "Hardly. According to the post, enabling them has minimal impact on execution speed, because it only changes how data is logged, not how it is processed. So performance is no reason to avoid the setting. Both options can be toggled individually for each action."
  - question: "Which actions benefit most from secure inputs or outputs?"
    answer: "Actions that process sensitive data such as passwords, tokens or personal details. The post's example masks a bearer token in an action's run history, where both inputs and outputs then show only a note that the content is hidden. You can enable inputs, outputs or both for each action, based on your security needs."
---
## TL;DR

Toggle Secure Inputs and Secure Outputs independently per action in a flow's settings to mask passwords, tokens and personal data in run history and logs, showing "content hidden" instead of plain text — the toggle only changes what gets logged, not how the action executes, so there's no meaningful performance cost.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: flip the toggle on for every action that touches a password, token, or personal data — it costs one setting change and nothing in performance.
- Security/Compliance: treat it as a logging control only — it hides values from run history, not from how the flow actually handles that data, so it never replaces DLP policies or access reviews.
- Admins/CoE: add it as a one-line item in flow review checklists, since there's no tradeoff to weigh before requiring it.
