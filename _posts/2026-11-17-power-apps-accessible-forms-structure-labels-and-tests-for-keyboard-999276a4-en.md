---
title: 'Power Apps accessible forms: structure, labels and tests for keyboard and
  screen-reader users'
description: 'How to structure Power Apps canvas forms for keyboard and screen-reader
  users: logical tab order, clear AccessibleLabel values, visible focus, specific
  errors and real testing.'
date: '2026-11-17T04:49:49Z'
author: governance_editorial
lang: en
toc: false
tags:
- compliance
- power-apps
content_type: curated_summary
curation_id: 999276a45db80a375ecf37f1
image:
  path: "/assets/img/curated/999276a45db80a375ecf37f1.png"
  alt: 'Governance card: A form that only a mouse can finish is a locked door for
    keyboard and screen reader users.'
permalink: "/en/posts/power-apps-accessible-forms-structure-labels-and-tests-for-keyboard-999276a4/"
translation_url: "/de/posts/power-apps-accessible-forms-structure-labels-and-tests-for-keyboard-999276a4/"
source_url: https://softchief.com/power-apps-accessible-forms-build-a-clear-path-for-keyboard-and-screen-reader-users/
source_site_url: https://softchief.com/
source_title: 'Power Apps Accessible Forms: Build a Clear Path for Keyboard and Screen-Reader
  Users'
source_name: Softchief Blog
source_language: en
source_language_name: English
source_author: Softchief
source_published_at: '2026-11-17'
source_type: article
faq:
- question: How do I set the AccessibleLabel property in Power Apps canvas apps?
  answer: Describe each input's purpose in the AccessibleLabel property, for example
    work email address instead of enter here, then check what the screen reader announces
    in the running app.
- question: Which screen readers does Microsoft verify for canvas apps?
  answer: Narrator with Microsoft Edge and NVDA with Chrome or Firefox are among the
    verified combinations for canvas apps; test with the tools your audience uses.
- question: What does the Power Apps Accessibility checker flag in canvas forms?
  answer: It flags missing labels, hidden or zero-thickness focus borders and screen
    names that need more meaning; treat the results as a starting point, not a guarantee.
---

## TL;DR

Accessible Power Apps canvas forms need a logical field order, a clear AccessibleLabel on every input and a visible focus indicator. Keep decorative controls out of the tab sequence, pair color cues with text, make validation errors specific, and verify with the Accessibility checker, keyboard-only testing and screen readers such as Narrator with Edge or NVDA.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Set a meaningful AccessibleLabel on every input, keep decorative controls out of the tab sequence and run the Accessibility checker before treating the form as done.
- Admins/CoE: Add keyboard-only runs and screen-reader tests, such as Narrator with Edge or NVDA with Chrome, to your app review checklist so gaps surface before release.
- Security/Compliance: Require text cues for required fields, visible focus and specific error messages, because color or icons alone exclude keyboard and screen-reader users.
