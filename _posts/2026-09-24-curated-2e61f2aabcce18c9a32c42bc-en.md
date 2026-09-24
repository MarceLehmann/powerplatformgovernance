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
permalink: "/en/posts/2e61f2aabcce18c9a32c42bc/"
translation_url: "/de/posts/2e61f2aabcce18c9a32c42bc/"
source_url: https://powerplatform.se/customer-address-revisited/
source_site_url: https://powerplatform.se/
source_title: Customer Address revisited
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-03-16'
---

## TL;DR

Dataverse stores account and contact addresses in customeraddress and lead addresses in leadaddress. Default creation produces two customeraddress records per account, three per contact, and two leadaddress records per lead. A new setting delays address-record creation until data exists, while another removes existing address records without deleting the parent record.

{% include curated-attribution.html %}

## Governance takeaway

Admins/CoE should evaluate the deferred address-record setting for new Dataverse records, especially in marketing environments with millions of sparse leads, because default supporting rows consume storage. Admins/CoE should take a forced instance backup before removing existing customeraddress or leadaddress rows, and validate the result carefully during testing and production change; the source warns that missing address records can be very unusual in on-premises systems.
