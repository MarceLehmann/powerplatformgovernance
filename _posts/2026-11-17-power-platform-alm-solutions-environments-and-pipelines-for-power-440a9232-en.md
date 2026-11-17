---
title: 'Power Platform ALM: solutions, environments and pipelines for Power Automate
  flows'
description: Step-by-step guide to moving Power Automate flows from dev to test and
  production with solutions, connection references, environment variables and Pipelines.
date: '2026-11-17T16:40:29Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- environments
- power-automate
- ownership
content_type: curated_summary
curation_id: 440a923230331d6fb1ff91d0
image:
  path: "/assets/img/curated/440a923230331d6fb1ff91d0.png"
  alt: 'Governance card: A solution moves the recipe. Connections and values stay
    behind in every environment.'
permalink: "/en/posts/power-platform-alm-solutions-environments-and-pipelines-for-power-440a9232/"
translation_url: "/de/posts/power-platform-alm-solutions-environments-and-pipelines-for-power-440a9232/"
source_url: https://www.andersjensen.org/en/articles/power-platform-alm-solutions-environments-pipelines/
source_site_url: https://www.andersjensen.org/
source_title: 'Power Platform ALM: Solutions, environments and pipelines'
source_name: andersjensen.org
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-11-17'
source_type: article
faq:
- question: How do I move a Power Automate flow from dev to production using a solution?
  answer: Build the flow in a solution in dev, export it as managed, and import it
    into test and production via Pipelines. Connections and environment values must
    already exist in each target.
- question: Why does a Power Platform solution ask for connections again after import?
  answer: Because a connection is a personal sign-in and is never part of the solution.
    The connection reference points to it, and you choose a connection for each environment
    at import.
- question: Do Power Platform Pipelines require Managed Environments as targets?
  answer: Yes, Pipelines deploy managed solutions and require the target environments
    to be Managed Environments. Enable managed on test and production before deploying.
animation:
  video: /assets/img/animations/440a923230331d6fb1ff91d0-en.mp4
  poster: /assets/img/animations/440a923230331d6fb1ff91d0-en.poster.webp
  width: 800
  height: 450
  alt: "A four step sequence shows building a flow in a solution in dev, preparing per environment connections and variables, exporting as managed, and deploying to test and production via Pipelines."
---

## TL;DR

Flows should be built in a solution with a dedicated publisher and moved through separate dev, test and production environments. Connections never travel; connection references get a connection per environment, and environment-specific values like SharePoint sites belong in environment variables. Test and production receive managed solutions via Pipelines, which require Managed Environments.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Build flows in a solution with your own publisher and use connection references plus environment variables, because the Default Solution cannot be exported and hardcoded values break on import.
- Admins/CoE: Provide dev, test and production environments with Dataverse, enable Managed Environments for Pipelines, and plan for unmanaged developer environments being retired from November 2026.
- Security/Compliance: Remove current dev values from solutions before export and use Secret variables backed by Azure Key Vault for credentials.
- Leadership/Business: Support separate dev and test environments, since fixing live flows where colleagues work puts operations at risk.
