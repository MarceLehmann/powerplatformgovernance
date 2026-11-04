---
title: Reclaim Dataverse File Capacity Without Deleting Email History
description: Use a date-filtered FetchXML query and scheduled Power Automate flow
  to delete old activitymimeattachment rows while keeping emails intact.
date: '2026-11-04T16:46:52Z'
author: governance_editorial
lang: en
toc: false
tags:
- dataverse
- power-automate
- environments
- compliance
- governance
content_type: curated_summary
curation_id: 5b684a191e24d06c05bfe137
image:
  path: "/assets/img/curated/5b684a191e24d06c05bfe137.png"
  alt: 'Governance card: Delete attachment rows, not email history. Storage comes
    back without losing the record.'
permalink: "/en/posts/reclaim-dataverse-file-capacity-without-deleting-email-history-5b684a19/"
translation_url: "/de/posts/reclaim-dataverse-file-capacity-without-deleting-email-history-5b684a19/"
source_url: https://shaheer365.blogspot.com/2026/11/free-up-dataverse-file-capacity-delete.html
source_site_url: https://shaheer365.blogspot.com/
source_title: 'Free Up Dataverse File Capacity: Delete Old Email Attachments, Keep
  the Emails'
source_name: Shaheer365
source_language: en
source_language_name: English
source_author: Shaheer Ahmad
source_published_at: '2026-11-04'
source_updated_at: '2026-11-04'
source_type: article
faq:
- question: Which Dataverse table should a Power Automate cleanup flow delete for
    old email attachments?
  answer: Delete rows from activitymimeattachment, exposed as the Dataverse Attachments
    table. The email records remain intact, while the underlying attachment relationship
    is removed.
- question: How can FetchXML exclude email drafts when selecting Dataverse attachments?
  answer: Filter the parent email with actualend olderthan-x-days. Drafts lack actualend,
    so the query excludes them automatically.
- question: Why might Dataverse file capacity stay unchanged after deleting attachment
    rows?
  answer: Capacity may remain unchanged when another activitymimeattachment row still
    references the same underlying attachment file. Shared files release bytes only
    after the last reference disappears.
---

## TL;DR

Delete old Dataverse activitymimeattachment rows through a scheduled Power Automate flow, filtering parent emails with FetchXML. The example targets emails older than 90 days, processes up to 5,000 rows per run, excludes drafts, and warns that shared files may not release capacity until their final reference is removed.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Keep the cleanup query limited to the intended email attachments, exclude the body column, and validate filenames and row counts before enabling deletes.
- Admins/CoE: Check the Power Platform admin center File breakdown, test in a development or sandbox environment, and schedule recurring batches with appropriate delete permissions.
- Security/Compliance: Obtain approval for the actual retention period because 90 days is only an example, and remember that deleted Dataverse attachments cannot be restored.
- Leadership/Business: Communicate that Outlook mailbox copies remain untouched and that capacity reports can take up to 72 hours to reflect deletions.
