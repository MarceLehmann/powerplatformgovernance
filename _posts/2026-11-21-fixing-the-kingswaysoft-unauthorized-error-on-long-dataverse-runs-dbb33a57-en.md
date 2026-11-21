---
title: Fixing the KingswaySoft unauthorized error on long Dataverse runs
description: Authentication tokens expire during long KingswaySoft pagination against
  Dataverse. Renewing the IOrganizationService and retrying keeps the run alive.
date: '2026-11-21T16:38:14Z'
author: governance_editorial
lang: en
toc: false
tags:
- security
- dataverse
content_type: curated_summary
curation_id: dbb33a57195cdb71e9db17de
image:
  path: "/assets/img/curated/dbb33a57195cdb71e9db17de.png"
  alt: 'Governance card: Tokens expire before long Dataverse jobs finish. Renew the
    service and retry, or the run fails.'
permalink: "/en/posts/fixing-the-kingswaysoft-unauthorized-error-on-long-dataverse-runs-dbb33a57/"
translation_url: "/de/posts/fixing-the-kingswaysoft-unauthorized-error-on-long-dataverse-runs-dbb33a57/"
source_url: https://temmyraharjo.com/posts/dataverse-kingswaysoft-the-http-request-is-unauthorized-with-client-authentication-scheme-anonymous
source_site_url: https://temmyraharjo.com/
source_title: Dataverse KingswaySoft - The HTTP request is unauthorized with client
  authentication scheme 'Anonymous'
source_name: Temmy Raharjo's Blog
source_language: en
source_language_name: English
source_author: Temmy Raharjo
source_published_at: '2026-11-21'
source_type: article
faq:
- question: Why does KingswaySoft return HTTP request is unauthorized with client
    authentication scheme Anonymous against Dataverse?
  answer: The authentication token expires while pagination runs for a long time,
    and the custom code never renews the service instance, so later requests fail.
- question: How do I fix the unauthorized error in a KingswaySoft Script Component?
  answer: Renew the IOrganizationService instance inside a catch block, wait three
    seconds and retry the request, so the expired token gets replaced.
- question: Does KingswaySoft support reading unmasked data with the UnMaskedData
    parameter in Dataverse?
  answer: No, KingswaySoft did not support UnMaskedData reads, so custom code in a
    Script Component or Script Task was needed to retrieve unmasked data.
---

## TL;DR

KingswaySoft custom code using IOrganizationService can fail with an HTTP unauthorized Anonymous error when Dataverse pagination runs long, because the authentication token expires and is never refreshed. The fix renews the CRM service inside a catch block, waits three seconds and retries the request. Test custom scripts with large data volumes so long-running pagination stays reliable.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: when a KingswaySoft Script Component paginates through large Dataverse volumes, wrap service calls in a retry that renews the IOrganizationService, because tokens expire mid-run.
- Admins/CoE: treat the unauthorized Anonymous error in long integration runs as token expiry rather than a permissions failure, and expect long pagination to need re-authentication.
- Security/Compliance: check that custom Dataverse integration code renews its service instance on failure instead of holding one connection for the whole run.
