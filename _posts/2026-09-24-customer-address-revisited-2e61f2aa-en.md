---
title: Customer Address revisited
description: Explains Dataverse customeraddress and leadaddress storage, two new address-management
  features, storage implications and backup precautions.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: en
toc: false
tags:
- dataverse
content_type: curated_summary
curation_id: 2e61f2aabcce18c9a32c42bc
permalink: "/en/posts/customer-address-revisited-2e61f2aa/"
translation_url: "/de/posts/customer-address-revisited-2e61f2aa/"
source_url: https://powerplatform.se/customer-address-revisited/
source_site_url: https://powerplatform.se/
source_title: Customer Address revisited
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-03-16'
faq:
  - question: "Where does Dataverse store the addresses of accounts, contacts and leads?"
    answer: "Addresses of accounts and contacts do not live in the main tables but in a separate table called customeraddress. Leads use the separate table leadaddress for this. The data is hidden from typical user operations, yet it still counts in the storage calculations of the Power Platform admin center."
  - question: "How many address records does Dataverse create by default?"
    answer: "With the default settings, each account gets two address records, each contact three and each lead two, even when no address data is entered. Fields such as createdon, modifiedon and modifiedby are always created, so even these empty records take up storage in Dataverse."
  - question: "Why does this become a problem in marketing with many leads?"
    answer: "Because the empty addresses grow with the number of leads. One million leads generate two million empty lead addresses. They consume storage although they hold no information. The post describes the scenario for organizations using Dataverse in marketing with millions of leads."
  - question: "Which new features improve the handling of address records?"
    answer: "There are two new options. First, Dataverse creates customeraddress and leadaddress records only when they actually contain data. Second, customeraddress records can be removed without deleting the related contact, account or lead. Both address the storage taken up by empty address records, which show up in the storage calculations of the Power Platform admin center."
  - question: "How do you clean up existing empty addresses, and what should you watch for?"
    answer: "The first feature does not remove existing empty records. The second feature removes customeraddress records without deleting the contact, account or lead, which the author calls much easier. As a workaround, create new records with the first feature on, merge them with the old ones and remove the old deactivated records. He demands a forced backup of the instance before running anything like this."
---
## TL;DR

Dataverse stores account and contact addresses in customeraddress and lead addresses in leadaddress. Default creation produces two customeraddress records per account, three per contact, and two leadaddress records per lead. A new setting delays address-record creation until data exists, while another removes existing address records without deleting the parent record.

{% include curated-attribution.html %}

## Governance takeaway

Admins/CoE should evaluate the deferred address-record setting for new Dataverse records, especially in marketing environments with millions of sparse leads, because default supporting rows consume storage. Admins/CoE should take a forced instance backup before removing existing customeraddress or leadaddress rows, and validate the result carefully during testing and production change; the source warns that missing address records can be very unusual in on-premises systems.
