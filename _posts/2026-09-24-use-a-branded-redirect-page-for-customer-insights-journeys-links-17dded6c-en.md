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
    answer: "Because Customer Insights Journeys offers no links on your own brand domain. The matching feature was deprioritized and removed from Release Wave 2 2024. For banks, insurers and other trust-focused organizations that is awkward, since recipients expect links ending in the company domain, for example forms.contoso.com."
  - question: "How does the self-built redirect page work technically?"
    answer: "It is a simple HTML page with a little JavaScript, hosted on the company domain, for example at contoso.com/redirect.html. It reads the url query parameter, validates it with the JavaScript URL constructor and redirects to the target when the page loads. If the value is missing or invalid, it shows the message No URL Provided or Invalid URL."
  - question: "Are UTM parameters preserved during the redirect?"
    answer: "Yes. The page appends all other query parameters except url to the target address, so UTM tags and custom values reach the destination. A call consists of the redirect page address, then url with the target, then further parameters such as param1 with a value. The author provides a working example on his own website."
  - question: "What has to be considered for click tracking in Customer Insights Journeys?"
    answer: "The built-in link tracking has to stay disabled, otherwise recipients land on a Microsoft redirect page again. As a replacement the author names two routes. Web tracking was still a preview feature when the post was written. Custom triggers are established and can forward parameters from the link to the relevant journeys."
  - question: "Who is this approach for, and what does it replace?"
    answer: "It suits organizations that need links under their own domain and get no product feature for it. The post explicitly describes a do-it-yourself solution with a simple web page and a little JavaScript. At the time of writing there was no way to create branded links in Customer Insights Journeys, which is why the author proposes this workaround."
---
## TL;DR

Customer Insights - Journeys has no branded-link feature in the described release context, so a company-hosted redirect page can validate a target URL, forward other query parameters such as UTM tags, and redirect visitors. Built-in Tracking must be switched off because Microsoft redirect pages can violate a no-external-domain policy.

{% include curated-attribution.html %}

## Governance takeaway

Makers should assemble the company-hosted redirect URL with the encoded target and relevant tracking parameters, because the workaround requires manual or custom generation. Admins/CoE should review the JavaScript validation and destination handling before deployment, since the page redirects to a URL supplied in the query string. Security/Compliance should assess whether the redirect pattern satisfies the organisation’s trusted-domain policy. Webtracking was described as preview functionality at publication, so its current status should be verified.
