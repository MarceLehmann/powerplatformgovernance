---
title: 'Offboard Microsoft 365 users: transfer ownership before disabling the account'
description: 'A five-step offboarding flow: trigger from the HR leaving date, hand
  over Teams, sites, apps and flows, move OneDrive data, reclaim licenses, then verify.'
date: '2026-11-12T16:51:49Z'
author: governance_editorial
lang: en
toc: false
tags:
- ownership
- governance
- security
- power-automate
content_type: curated_summary
curation_id: ba4d9bac29bbce8f2de9efa1
image:
  path: "/assets/img/curated/ba4d9bac29bbce8f2de9efa1.png"
  alt: 'Governance card: A disabled owner is the same as no owner. Hand over first,
    then disable.'
permalink: "/en/posts/offboard-microsoft-365-users-transfer-ownership-before-disabling-the-ba4d9bac/"
translation_url: "/de/posts/offboard-microsoft-365-users-transfer-ownership-before-disabling-the-ba4d9bac/"
source_url: https://rencore.com/en/blog/offboard-users-m365/
source_site_url: https://rencore.com/
source_title: How to offboard users in Microsoft 365 without losing data or control
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: Is disabling a user account in Entra ID enough to offboard someone?
  answer: No. Disabling stops sign-in, but everything the person owned stays in place,
    a disabled owner still counts as an owner, and sessions and tokens may stay valid
    for a while.
- question: What happens to a leaver's OneDrive files after the account is removed?
  answer: Microsoft deletes the OneDrive a set period after account removal unless
    a retention policy or hold applies, so move needed files to a team site first.
- question: What happens to Power Automate flows owned by a departed employee?
  answer: They keep running under the departed user's connections and go unmaintained,
    so add a new owner to each flow and app before disabling the account.
animation:
  video: /assets/img/animations/ba4d9bac29bbce8f2de9efa1-en.mp4
  poster: /assets/img/animations/ba4d9bac29bbce8f2de9efa1-en.poster.webp
  width: 800
  height: 450
  alt: "Five stages show offboarding from the HR leaving date, handing over Teams, sites, apps and flows, moving OneDrive content, reclaiming licenses, and verifying later."
---

## TL;DR

Disabling a leaver&\#39;s account stops sign-in, not the leftovers: Teams and sites with a disabled sole owner, OneDrive files deleted after retention, flows running under the departed user&\#39;s connections, licenses still billing. Trigger offboarding from the HR leaving date, add a new owner to every Team, site, group, app and flow, move needed OneDrive content, revoke sessions, reclaim licenses, then verify a week later.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Trigger offboarding from the HR leaving date, not memory, list every Team, site, group, app and flow the leaver owns, add a new owner to each before the account is disabled, and check a week later that nothing is left with a disabled owner.
- Security/Compliance: Revoke sessions and tokens in the same step as disabling, check retention policies and legal holds before deleting OneDrive content, and keep the record of what was handed over, to whom and when.
- Leadership/Business: A disabled account with a license still costs money every month, so reclaim licenses as part of the process and give managers the checklist before the last day.
