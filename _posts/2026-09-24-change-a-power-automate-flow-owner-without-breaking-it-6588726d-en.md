---
title: Change a Power Automate Flow Owner Without Breaking It
description: Make the flow solution-aware and add a co-owner instead of exporting
  and re-importing — connections and run history stay untouched.
date: '2026-09-24T00:02:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- ownership
- alm
- governance
content_type: curated_summary
curation_id: 6588726d23899ef313976e15
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-49.png
  alt: 'Governance card: The Relay Race — the owner leaves, the solution stays.'
permalink: "/en/posts/change-a-power-automate-flow-owner-without-breaking-it-6588726d/"
translation_url: "/de/posts/change-a-power-automate-flow-owner-without-breaking-it-6588726d/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-20-change-flow-owner/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 20: Change Flow Owner"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
publisher_disclosure: Both publications are edited by Marcel Lehmann.
faq:
  - question: "Is it possible to hand a cloud flow to a new owner without export and import?"
    answer: "Yes, if the flow is solution-aware. Add it to a solution in a Dataverse-enabled environment, open the flow details, choose Edit and add the new owner. Connections and run history carry over. Non-solution flows cannot change owner in place because the owner is part of the flow identity."
  - question: "Do the old and the new flow owner both stay on the flow?"
    answer: "Yes. The original owner and the new owner become co-owners, so nothing breaks. Connections and run history carry over to the new setup. The article describes the change as an in place handover with no export and import round trip and no downtime."
  - question: "How long until the new owner license applies to a scheduled flow?"
    answer: "For scheduled or automated flows, the license of the new owner takes effect within about 7 days. Editing and saving the flow again applies it immediately. Without a premium license, the flow keeps running for a grace period before it is turned off, so the new owner needs the right license for the connectors used."
  - question: "Why is the usual export and import workaround a poor way to change a flow owner?"
    answer: "The article calls it slow and error-prone, because working around the ownership limit with export, permission changes and re-import takes effort. The solution-aware route avoids that effort. The change happens in place, with no export and import round trip and no downtime, and connections and run history carry over."
  - question: "Who can change a flow owner and in which portal does it happen?"
    answer: "Only current owners, co-owners or environment administrators can start an ownership change. You work in make.powerautomate.com, in an environment with Dataverse. Add the existing flow to a solution or create it inside one, select the flow, choose Edit in the Details section and add the person in the Owner section."
---
## TL;DR

Make the flow solution-aware, open its details, and add a new owner — the original and new owner become co-owners so nothing breaks, connection references and run history stay intact, and no export/import is needed. For scheduled flows the new owner's licence takes effect within about 7 days unless you edit and re-save to apply it immediately.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: replace the export/import runbook with this co-owner step during offboarding — it takes seconds and never touches connection references. Turn "does this flow have an active owner" into a field you check, not a chase you run after someone has already left.
- Makers: when you inherit a flow, you keep its full run history instead of starting trust in a fresh copy from zero.
