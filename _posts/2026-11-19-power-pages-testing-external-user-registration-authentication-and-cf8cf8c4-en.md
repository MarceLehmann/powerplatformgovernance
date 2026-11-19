---
title: 'Power Pages: Testing External User Registration, Authentication and Account
  Linking'
description: 'A testing guide for Power Pages external users: verify Contact association,
  unique emails, web roles and table permissions, plus negative tests that expose
  over-broad access.'
date: '2026-11-19T10:44:21Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- governance
content_type: curated_summary
curation_id: cf8cf8c434ede9b4accb9da8
image:
  path: "/assets/img/curated/cf8cf8c434ede9b4accb9da8.png"
  alt: 'Governance card: Successful login is not sufficient. Verify that the authenticated
    identity maps to the right contact with the least access.'
permalink: "/en/posts/power-pages-testing-external-user-registration-authentication-and-cf8cf8c4/"
translation_url: "/de/posts/power-pages-testing-external-user-registration-authentication-and-cf8cf8c4/"
source_url: https://softchief.com/power-pages-how-to-test-external-user-registration-authentication-and-account-linking/
source_site_url: https://softchief.com/
source_title: 'Power Pages: How to Test External User Registration, Authentication,
  and Account Linking'
source_name: Softchief Blog
source_language: en
source_language_name: English
source_author: Softchief
source_published_at: '2026-11-19'
source_type: article
faq:
- question: Why does Power Pages block sign-in when two contacts share the same email
    address?
  answer: Power Pages requires unique Contact email addresses, and duplicates, even
    on inactive records, can prevent authentication. Keep test and portal contact
    data free of duplicate emails.
- question: How do I associate an external identity with an existing Dataverse Contact
    in Power Pages?
  answer: Use the contact-mapping-with-email setting in Microsoft Entra External ID
    or an invitation flow, then verify the Contact ID after sign-in. Email matching
    alone is never sufficient proof of identity.
- question: How do I test that one Power Pages customer cannot see another customer's
    cases?
  answer: Sign in as both test customers and as an anonymous visitor, then confirm
    table permissions with Contact scope deny the other customer's records. Test the
    denied paths, not just the success path.
---

## TL;DR

A Power Pages site that signs in external users through Microsoft Entra External ID must be tested beyond login: confirm the identity links to the intended Dataverse Contact, no duplicate Contact is created, unique Contact emails are enforced, web roles and table permissions scope case access per Contact or Account, and denied-access scenarios are exercised.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Test registration, repeat sign-in and account linking in a dev environment with three identities, record Contact IDs and verify no duplicate Contact is created.
- Admins/CoE: Enforce unique Contact emails, since duplicates including inactive records can block authentication, and keep external user testing out of production.
- Security/Compliance: Treat email matching as insufficient proof of identity, prefer invitation-based registration and validate Account-scoped permissions to stop cross-organisation record exposure.
