---
title: Use a branded redirect page for Customer Insights - Journeys links
description: A JavaScript redirect page can preserve trusted company domains and UTM
  parameters while replacing Customer Insights - Journeys built-in link tracking.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- compliance
- ownership
content_type: curated_summary
curation_id: 17dded6c0894109c6690a156
permalink: "/en/posts/use-a-branded-redirect-page-for-customer-insights-journeys-links-17dded6c/"
translation_url: "/de/posts/use-a-branded-redirect-page-for-customer-insights-journeys-links-17dded6c/"
source_url: https://powerplatform.se/diy-redirect-landing-page-for-ci-j/
source_site_url: https://powerplatform.se/
source_title: DIY Redirect landing page for CI-J
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-02-04'
faq:
  - question: "Why does a custom redirect page make sense for links from journeys?"
    answer: "Because Customer Insights Journeys offers no links on your own brand domain. The matching feature was deprioritized and removed from Release Wave 2 2024."
  - question: "How does the self-built redirect page work technically?"
    answer: "It is a simple HTML page with a little JavaScript, hosted on the company domain, for example at contoso.com/redirect.html."
  - question: "What has to be considered for click tracking in Customer Insights Journeys?"
    answer: "The built-in link tracking has to stay disabled, otherwise recipients land on a Microsoft redirect page again. As a replacement the author names two routes."
---
## TL;DR

Customer Insights - Journeys has no branded-link feature in the described release context, so a company-hosted redirect page can validate a target URL, forward other query parameters such as UTM tags, and redirect visitors. Built-in Tracking must be switched off because Microsoft redirect pages can violate a no-external-domain policy.

{% include curated-attribution.html %}

## Governance takeaway

Makers should assemble the company-hosted redirect URL with the encoded target and relevant tracking parameters, because the workaround requires manual or custom generation. Admins/CoE should review the JavaScript validation and destination handling before deployment, since the page redirects to a URL supplied in the query string. Security/Compliance should assess whether the redirect pattern satisfies the organisation’s trusted-domain policy. Webtracking was described as preview functionality at publication, so its current status should be verified.
