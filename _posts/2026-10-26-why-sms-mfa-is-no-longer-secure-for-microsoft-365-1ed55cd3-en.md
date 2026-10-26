---
title: Why SMS MFA Is No Longer Secure for Microsoft 365
description: SMS MFA is vulnerable to SIM swapping and targeted phishing. Use Authenticator
  number matching, passkeys or security keys instead.
date: '2026-10-26T16:39:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
content_type: curated_summary
curation_id: 1ed55cd3fd10a3d4fd2aa6bb
image:
  path: "/assets/img/curated/1ed55cd3fd10a3d4fd2aa6bb.png"
  alt: 'Governance card: SMS MFA leaves sign-ins exposed to SIM swapping and targeted
    phishing. Move to phishing-resistant methods.'
permalink: "/en/posts/why-sms-mfa-is-no-longer-secure-for-microsoft-365-1ed55cd3/"
translation_url: "/de/posts/why-sms-mfa-is-no-longer-secure-for-microsoft-365-1ed55cd3/"
source_url: https://www.m365.fm/blog/sms-text-message-mfa-security-risks-microsoft-365/
source_site_url: https://www.m365.fm/
source_title: Why SMS Text Message MFA is No Longer Secure for Microsoft 365
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: How does SIM swapping compromise Microsoft 365 SMS MFA?
  answer: Attackers can persuade a mobile carrier to transfer a phone number to their
    SIM, redirecting Microsoft 365 authentication codes to themselves.
- question: Can Entra ID administrators disable SMS and voice authentication?
  answer: Yes, Entra ID authentication methods policies can restrict or disable SMS
    and voice options, directing users to Authenticator or FIDO2 keys.
- question: How does Microsoft Authenticator number matching reduce MFA phishing risk?
  answer: Number matching makes users enter the number shown on the sign-in screen,
    helping prevent blind approvals during prompt bombing or adversary-in-the-middle
    attacks.
---

## TL;DR

SMS MFA uses the public telecom network, exposing Microsoft 365 sign-ins to SIM swapping and adversary-in-the-middle phishing. The guidance recommends moving users to Microsoft Authenticator with number matching, passkeys or FIDO2 security keys, while keeping two valid verification methods and tested recovery paths during rollout.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Prioritize global administrators, finance personnel and critical infrastructure users when replacing SMS, because these accounts face higher consequences from compromise.
- Security/Compliance: Restrict SMS and voice verification through Entra ID authentication methods policies, because typed codes can be intercepted, redirected or captured through fake login portals.
- Leadership/Business: Fund a staged transition with two verification methods and tested recovery paths, because abrupt enforcement can create lockouts and helpdesk pressure.
