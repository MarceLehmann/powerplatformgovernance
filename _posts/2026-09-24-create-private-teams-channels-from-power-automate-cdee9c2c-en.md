---
title: Create Private Teams Channels from Power Automate
description: Use Microsoft Graph through HTTP with Microsoft Entra ID to create private
  Teams channels with an owner and defined members.
date: '2026-09-24T15:05:09Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- ownership
- power-automate
content_type: curated_summary
curation_id: cdee9c2cedb6381cb78dff72
image:
  path: "/assets/img/curated/cdee9c2cedb6381cb78dff72.png"
  alt: 'Governance card: A private channel needs an owner at creation.'
permalink: "/en/posts/create-private-teams-channels-from-power-automate-cdee9c2c/"
translation_url: "/de/posts/create-private-teams-channels-from-power-automate-cdee9c2c/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-162-create-private-teams-channel-from-flow/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 162: Create a Private Teams Channel from a Flow"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-07-09'
publisher_disclosure: Both publications are edited by Marcel Lehmann.
faq:
  - question: "Why can't the Teams connector in Power Automate create a private channel?"
    answer: "The native Teams connector only creates standard channels and offers no option to set the membership type or assign an owner."
  - question: "Why does Graph return a 400 error when I create a private Teams channel?"
    answer: "Most likely because no owner was included. A private channel cannot be created empty, so the request needs a members array with at least one person holding the owner role."
  - question: "Do I need an app registration for the Graph call in Power Automate?"
    answer: "No. The HTTP with Microsoft Entra ID action uses the preauthorized identity of the connection, so app registration and secret management are not needed."
---
## TL;DR

Power Automate&\#39;s standard Teams connector cannot create private channels. Use the HTTP with Microsoft Entra ID action to POST to Microsoft Graph with membershipType set to private and a members array containing at least one owner. The flow can add up to 200 members, while permissions and Teams policy can still block the request.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Call Microsoft Graph through HTTP with Microsoft Entra ID, set membershipType to private, and include at least one owner so creation does not fail with HTTP 400.
- Admins/CoE: Check that the acting identity has Channel.Create or Group.ReadWrite.All and that Teams policy allows Create private channels; otherwise valid flows can receive 403 Forbidden.
- Security/Compliance: Treat the members array as the access boundary, because private channels are visible only to listed members; keep the returned channel ID for controlled follow-up automation.
