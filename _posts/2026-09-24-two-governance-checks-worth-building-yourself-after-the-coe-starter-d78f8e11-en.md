---
title: Two Governance Checks Worth Building Yourself After the CoE Starter Kit
description: Dependency checks before decommissioning and automatic inactive-owner
  detection for flows - two concrete ideas, regardless of which tool you use.
date: '2026-09-24T00:11:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- ownership
- coe
content_type: curated_summary
curation_id: d78f8e117156bc1885dcdd38
permalink: "/en/posts/two-governance-checks-worth-building-yourself-after-the-coe-starter-d78f8e11/"
translation_url: "/de/posts/two-governance-checks-worth-building-yourself-after-the-coe-starter-d78f8e11/"
source_url: https://rencore.com/en/blog/power-platform-governance-coe-starter-kit-questions/
source_site_url: https://rencore.com/
source_title: Power Platform Governance After CoE Starter Kit Retirement
source_name: Rencore
source_author: Matthias Einig
source_language: en
source_language_name: English
source_published_at: '2026-06-23'
faq:
  - question: "How current is a governance inventory for Microsoft 365 and Power Platform?"
    answer: "It is not real time. Graph API endpoints are throttled, so for larger tenants live data across many services is, according to Rencore, not technically possible for any vendor apart from Microsoft. Rencore reads audit logs and change events continuously, so data is usually up to 24 hours old, even in tenants with more than 100,000 users. The update frequency can be configured in detail."
  - question: "Can governance tooling intercept an app or flow before it is created?"
    answer: "Not at the moment it happens inside Power Apps or Power Automate, because Microsoft does not expose that event to third-party tools. What works is detecting new apps and flows afterwards, notifying the creator and routing approvals through policies. Provisioning through the tool with approval up front is on the roadmap but not yet available in production."
  - question: "Why does Rencore not build its automation on Power Automate?"
    answer: "Because the platform being governed should not also be the enforcement tool. The vendor cites reliability and licensing complications and the risk of a disconnect between identifying a policy violation and resolving it. The engine runs independently and needs no Power Platform licences. It can still trigger Power Automate flows through a webhook if you want that."
  - question: "How long is the run history of Power Automate flows kept?"
    answer: "Native Power Automate run history is cleared after 30 days, while Rencore says it retains the run history of Power Automate flows indefinitely. According to the vendor, this distinction matters considerably for organisations that need to satisfy audit requests covering periods longer than a month."
  - question: "What data does a governance tool like Rencore collect and where is it hosted?"
    answer: "It collects metadata only, with no file content, message bodies or user-generated content. The data goes into a dedicated Azure resource group per customer, encrypted with a customer-specific key. The vendor lists hosting regions in the US, Germany, Switzerland, the Netherlands and Australia. For organisations with strict requirements, an isolated Azure environment is available as an add-on."
---
## TL;DR

With the CoE Starter Kit gone, two concrete governance gaps are worth plugging yourself: before removing a SharePoint site or environment, check what flows, reports or agents actually depend on it; and for departed employees, auto-detect flows whose owners are no longer active and route reassignment to a designated admin instead of letting them fail silently.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: build both checks with Power Automate and the admin connectors alone, no separate governance product required, starting with a dependency lookup before decommissioning anything.
- Makers: benefit directly from the inactive-owner scan — a departed colleague's flow gets rerouted to a designated admin instead of failing silently the next time it runs.
- Security/Compliance: push for the decommissioning check specifically, since removing a site or environment without checking dependent flows, reports, or agents is exactly the kind of gap that turns into an unplanned outage.
