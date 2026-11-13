---
title: Power Pages record access for external users across multiple customer accounts
description: Account scope follows only one contact-to-account relationship. Design,
  assign and test Power Pages table permissions so external users reach just the records
  they are approved to use.
date: '2026-11-13T16:53:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- governance
content_type: curated_summary
curation_id: 67f00ca4591eb4657393f2a5
image:
  path: "/assets/img/curated/67f00ca4591eb4657393f2a5.png"
  alt: 'Governance card: Account scope follows one relationship. Extra account memberships
    are never covered by default.'
permalink: "/en/posts/power-pages-record-access-for-external-users-across-multiple-customer-67f00ca4/"
translation_url: "/de/posts/power-pages-record-access-for-external-users-across-multiple-customer-67f00ca4/"
source_url: https://softchief.com/power-pages-record-access-for-external-users-across-multiple-customer-accounts/
source_site_url: https://softchief.com/
source_title: Power Pages Record Access for External Users Across Multiple Customer
  Accounts
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-11-13'
source_type: article
faq:
- question: Does Power Pages account scope cover all accounts a contact belongs to?
  answer: No. Account scope follows only the single account relationship selected
    on the table permission, so separate memberships need their own supported design.
- question: Do Power Pages page permissions secure Dataverse records from direct Web
    API calls?
  answer: No. Page permissions only control who can view page content, while table
    permissions protect records across lists, forms, Liquid and the Web API.
- question: How do I test Power Pages access for a user with multiple account memberships?
  answer: Use test contacts with one account, several memberships and none, then verify
    allowed tasks and attempt to open an unrelated record by direct URL.
animation:
  video: /assets/img/animations/67f00ca4591eb4657393f2a5-en.mp4
  poster: /assets/img/animations/67f00ca4591eb4657393f2a5-en.poster.webp
  width: 800
  height: 450
  alt: "A 4 step flow shows how to secure Power Pages record access: write the access rule, map contact to account paths, assign focused web roles, and test allowed and denied access including direct URLs and Web API."
---

## TL;DR

Power Pages grants external users access to Dataverse records only through the relationship selected on each table permission. Account scope covers the account linked to the signed-in contact, not every separate membership. Write the access rule first, map contact-to-account paths, assign focused web roles with only needed operations, and test allowed and denied access, including direct URLs and Web API requests, before launch.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Map the relationship path from contact to every protected table before assigning permissions, because hiding a page or list does not secure the underlying records.
- Admins/CoE: Confirm each test sign-in resolves to the correct Dataverse contact, check for duplicates, and keep sensitive table permissions off the broad Authenticated Users web role.
- Security/Compliance: Require negative tests that try to reach records from unrelated accounts through direct URLs and the Web API, since a hidden list does not prove the record is protected.
