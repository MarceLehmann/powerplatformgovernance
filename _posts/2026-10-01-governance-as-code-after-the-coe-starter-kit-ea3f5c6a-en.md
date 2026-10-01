---
title: Governance as code after the CoE Starter Kit
description: Use PAC CLI inventory APIs, versioned governance rules and repeatable
  capture to track Power Platform tenant risks.
date: '2026-10-01T05:02:30Z'
author: governance_editorial
lang: en
toc: false
tags:
- governance
- coe
- environments
- alm
- power-apps
content_type: curated_summary
curation_id: ea3f5c6a5b9fcea34ee7e4b0
image:
  path: "/assets/img/curated/ea3f5c6a5b9fcea34ee7e4b0.png"
  alt: 'Governance card: AI can query governance, but deterministic capture must run
    every time.'
permalink: "/en/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
translation_url: "/de/posts/governance-as-code-after-the-coe-starter-kit-ea3f5c6a/"
source_url: https://www.karlex.fi/governance-as-code-life-after-the-coe-starter-kit/
source_site_url: https://www.karlex.fi/
source_title: 'Governance as code: life after the CoE Starter Kit'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-01'
source_type: article
---

## TL;DR

PAC CLI inventory APIs can show apps, flows and agents by environment within minutes, without the CoE Starter Kit database and nightly sync flows. Keep PAC CLI updated, verify the active authentication profile, and validate community code in a sandbox before any production use. Store environment zones, governance rules and captured tenant state in versioned, repeatable controls.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Use PAC CLI inventory data to identify environment sprawl and keep the active authentication profile under review.
- Admins/CoE: Turn on Managed Environments, but do not rely on weekly digests as a complete operations tool.
- Security/Compliance: Validate third-party packages and community dashboards in a sandbox before connecting them to production.
- Leadership/Business: Define clear, non-contradictory governance rules and retain human decisions for actions affecting tenant solutions.
