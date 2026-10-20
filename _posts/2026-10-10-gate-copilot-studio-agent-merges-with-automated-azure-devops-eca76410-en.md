---
title: Gate Copilot Studio agent merges with automated Azure DevOps evaluations
description: Use the Copilot Studio Evaluation API and Azure DevOps to test draft
  agents from source and block pull requests when quality drops.
date: '2026-10-10T16:54:16Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- copilot-studio
- dataverse
- environments
content_type: curated_summary
curation_id: eca764107e31cbaa07a73d51
image:
  path: "/assets/img/curated/eca764107e31cbaa07a73d51.png"
  alt: 'Governance card: Test draft agents before merge. Block the PR when quality
    falls below threshold.'
permalink: "/en/posts/gate-copilot-studio-agent-merges-with-automated-azure-devops-eca76410/"
translation_url: "/de/posts/gate-copilot-studio-agent-merges-with-automated-azure-devops-eca76410/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-eval-gate-azure-devops/
source_site_url: https://microsoft.github.io/
source_title: 'Quality Gates for Copilot Studio: Automated Evaluations in Azure DevOps'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-04-19'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: How does the Copilot Studio Evaluation API test draft agents in Azure
    DevOps?
  answer: The Evaluation API triggers runs against draft Copilot Studio agents, polls
    completion, and returns metric-level results for each test case.
- question: What does EvalGateADO pack before testing a Copilot Studio agent?
  answer: EvalGateADO packs the PR branch's src folder into an unmanaged solution,
    then imports it into a dedicated CI Dev environment.
- question: How does Azure DevOps block a Copilot Studio pull request when evaluations
    fail?
  answer: The pipeline compares passed tests with a configurable pass threshold and
    exits unsuccessfully when the rate is lower, blocking the merge.
animation:
  src: /assets/img/animations/eca764107e31cbaa07a73d51-en.gif
  poster: /assets/img/animations/eca764107e31cbaa07a73d51-en.poster.png
  width: 800
  height: 450
  alt: "A four step flow shows EvalGateADO packing the PR source with pac, importing it into a dedicated CI environment, running Evaluation API tests on the draft agent, and blocking the Azure DevOps merge if the pass threshold is missed."
---

## TL;DR

The Copilot Studio Evaluation API runs test sets against draft agents and returns metric-level results. The EvalGateADO pipeline packs the PR source with pac, imports it into a dedicated CI environment, evaluates the draft, and blocks the Azure DevOps merge when the configurable pass-rate threshold is not met.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Commit the agent source and test sets with each change, because the pipeline evaluates the PR branch rather than uncommitted sandbox changes.
- Admins/CoE: Provide a dedicated CI environment and configure the pipeline import process, so automated tests run against a consistent runtime target.
- Security/Compliance: Protect the delegated authentication refresh token in Key Vault and monitor its inactivity-based expiry, because the Evaluation API has no app-only authentication path.
- Leadership/Business: Require the evaluation gate before merging agent changes, so quality failures are identified during review instead of after production release.
