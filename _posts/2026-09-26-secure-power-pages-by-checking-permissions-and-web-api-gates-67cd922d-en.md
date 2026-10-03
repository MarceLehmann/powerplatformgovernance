---
title: Secure Power Pages by checking permissions and Web API gates
description: Review anonymous table permissions, Web API settings and custom web roles
  to prevent accidental Dataverse exposure through Power Pages.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
- governance
content_type: curated_summary
curation_id: 67cd922d02144165bc88be66
image:
  path: "/assets/img/curated/67cd922d02144165bc88be66.png"
  alt: 'Governance card: Two open gates can publish your Dataverse data. Check permissions
    and Web API settings together.'
permalink: "/en/posts/secure-power-pages-by-checking-permissions-and-web-api-gates-67cd922d/"
translation_url: "/de/posts/secure-power-pages-by-checking-permissions-and-web-api-gates-67cd922d/"
source_url: https://readyxrm.blog/2026/08/13/is-your-power-pages-site-secure/
source_site_url: https://readyxrm.blog/
source_title: Is your Power Pages site secure?
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-08-13'
source_type: article
faq:
  - question: "Which two gates must a Power Pages Web API request pass?"
    answer: "The first gate is the site settings per table: Webapi/contact/enabled must be true, since the default is False, and the matching fields setting needs an explicit column list. The second gate is a table permission with the right access level: Read for GET, Create for POST, Write for PATCH and Delete for DELETE. Both gates must be open."
  - question: "Why is a wildcard in the Web API fields setting dangerous in Power Pages?"
    answer: "An asterisk in the fields setting publishes every column of that table. Combined with the Anonymous Users role and a Global Read table permission, unauthenticated requests can retrieve full names, email addresses and record IDs without any sign-in. Microsoft has deprecated the wildcard, and requests for such tables fail until explicit column names are set."
  - question: "What does anonymous access mean for table permissions in Power Pages?"
    answer: "Anonymous means Global. Only the Global access type works for unsigned visitors, because Contact, Account, Self and Parent need an authenticated contact to resolve against. Permissions also add up: nothing subtracts a grant, so the widest permission wins and a contact inherits what every assigned role allows."
  - question: "What is risky about the Authenticated Users Role flag on custom web roles?"
    answer: "When it is set to Yes, the custom role becomes the default role for every authenticated user, whether you assigned the user to it or not. The article says to keep the flag at No on all custom roles. Only the built-in Anonymous Users and Authenticated Users roles should carry these flags."
  - question: "Which tools help check a Power Pages site for exposed data?"
    answer: "The quick scan in the Power Platform admin center flags that anonymous Dataverse access exists but does not name the tables. The Power Pages Security Agent in the Security workspace gives configuration-specific results and is in preview. You can also download the site with pac powerpages download and analyze it in VS Code. None of them replaces reading the table permissions yourself."
---

## TL;DR

Power Pages data access depends on web roles and table permissions, while the Web API also requires enabled table settings and an explicit fields list. A Global Read permission for Anonymous Users combined with Webapi/contact/enabled set to true and Webapi/contact/fields set to \* can expose contact records without sign-in.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Review every table permission assigned to Anonymous Users, every Global access grant, and each Web API enabled table; remove unjustified public access because permissions combine and the broadest grant wins.
- Security/Compliance: Replace Web API fields wildcards with explicit columns, disable unused tables, and treat every listed column as published data; this limits accidental exposure of personal or commercially sensitive information.
- Makers: Keep Authenticated Users Role set to No on custom web roles and use assigned contact membership; setting Yes grants the role to every signed-in user.
