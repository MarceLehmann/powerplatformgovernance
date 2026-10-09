---
title: Bulk File Testing for Copilot Studio Agents
description: A Dataverse, SharePoint, Power Automate, Copilot Studio, and Power BI
  architecture validates document-processing agents across large real-world file sets.
date: '2026-10-09T17:02:53Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- dataverse
- power-automate
- alm
content_type: curated_summary
curation_id: 7c6e881ebab576723f104afe
image:
  path: "/assets/img/curated/7c6e881ebab576723f104afe.png"
  alt: 'Governance card: Standard evals miss failures at file-processing scale. Test
    real document variation before production.'
permalink: "/en/posts/bulk-file-testing-for-copilot-studio-agents-7c6e881e/"
translation_url: "/de/posts/bulk-file-testing-for-copilot-studio-agents-7c6e881e/"
source_url: https://microsoft.github.io/mcscatblog/posts/bulk-file-testing-copilot-evals/
source_site_url: https://microsoft.github.io/
source_title: 'Bulk File-Based Testing for Copilot Studio: Beyond Standard Evals'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Ashwin Raju Krishnamurthi
source_published_at: '2026-05-12'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: What does Dataverse store in bulk file testing for Copilot Studio?
  answer: Dataverse stores test definitions, file references, expected outputs, prompt
    versions, metadata, execution history, comparisons, and pass or fail outcomes.
- question: How does Power Automate run bulk file tests for Copilot Studio agents?
  answer: Power Automate retrieves eligible tests and SharePoint assets, invokes the
    agent, compares extracted fields with expected outputs, and records results in
    Dataverse.
- question: What does Power BI show for Copilot Studio bulk file testing?
  answer: Power BI shows pass and fail rates, vendor-template error concentration,
    prompt-version mismatch trends, and regression patterns over time.
---

## TL;DR

Copilot Studio evaluations test prompt responses and conversations, but bulk file testing validates document processing at scale. Dataverse tracks test cases and outcomes, SharePoint stores inputs and gold standards, Power Automate runs and compares cases, and Power BI reports pass rates, failure patterns, and regressions across prompt versions.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Build a configuration-driven test process with Dataverse for definitions and execution history, SharePoint for files and expected outputs, and Power Automate for orchestration and comparison.
- Leadership/Business: Use standard evals together with bulk file testing, because prompt quality does not establish reliable processing across large, varied document volumes.
