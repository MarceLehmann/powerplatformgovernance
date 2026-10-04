---
title: Free Microsoft-managed SSL/TLS certificates for Power Pages
description: Power Pages can provision, configure and renew a free Microsoft-managed
  certificate for custom domains, while admins retain DNS and outage planning responsibilities.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
content_type: curated_summary
curation_id: ce6c38440f497fe733db8e14
image:
  path: "/assets/img/curated/ce6c38440f497fe733db8e14.png"
  alt: 'Governance card: Microsoft-managed certificates remove renewal work. DNS and
    a planned outage still remain.'
permalink: "/en/posts/free-microsoft-managed-ssl-tls-certificates-for-power-pages-ce6c3844/"
translation_url: "/de/posts/free-microsoft-managed-ssl-tls-certificates-for-power-pages-ce6c3844/"
source_url: https://readyxrm.blog/2026/09/18/free-ssl-tls-certificates-for-power-pages/
source_site_url: https://readyxrm.blog/
source_title: Free SSL/TLS certificates for Power Pages
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-09-18'
source_type: article
faq:
  - question: "What do I need to switch off before using the Microsoft managed certificate for Power Pages?"
    answer: "CDN and the web application firewall must be turned off first. When they are enabled, the Microsoft managed certificate option is not greyed out, it does not appear at all."
  - question: "Will my Power Pages site stay reachable while I switch to the managed certificate?"
    answer: "No. During the switch the site is unreachable on its custom URL until the new binding is complete, and Microsoft warns that finishing takes several minutes."
  - question: "Is the Microsoft managed certificate for Power Pages free, and can I still use my own?"
    answer: "It costs nothing extra, and Microsoft provisions, configures and renews it automatically. You can still upload your own certificate or use an existing one."
---

## TL;DR

Power Pages can now provision, configure and renew a Microsoft-managed SSL/TLS certificate for a custom domain at no extra cost. Admins must disable CDN and Web Application Firewall, remove the existing binding, certificate and hostname in that order, then reconnect the domain and retain DNS CNAME management.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Disable CDN and Web Application Firewall, then remove the binding, certificate and hostname in order before selecting the managed certificate.
- Admins/CoE: Schedule the change during a quiet window because the custom domain can be unreachable for several minutes.
- Security/Compliance: Keep using uploaded certificates where policy requires internal certificate management, because the managed option supplements rather than replaces that capability.
