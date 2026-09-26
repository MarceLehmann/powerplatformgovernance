---
title: Move Power Platform deployments from unmanaged to managed solutions
description: Instructions for converting downstream Power Platform solutions to managed
  mode through the UI, PAC, Azure DevOps or GitHub Actions.
date: '2026-09-24T01:48:20Z'
author: governance_editorial
lang: en
toc: false
tags:
- alm
- environments
- ownership
content_type: curated_summary
curation_id: d19b662df10e48dd16a2d871
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-48.png
  alt: Governance card about converting unmanaged solutions to managed.
permalink: "/en/posts/move-power-platform-deployments-from-unmanaged-to-managed-solutions-d19b662d/"
translation_url: "/de/posts/move-power-platform-deployments-from-unmanaged-to-managed-solutions-d19b662d/"
source_url: https://benediktbergmann.eu/2025/02/04/move-to-managed-solutions/
source_site_url: https://benediktbergmann.eu/
source_title: Move to managed solutions
source_name: Benedikt's Power Platform Blog
source_language: en
source_language_name: English
source_author: Benedikt Bergmann
source_published_at: '2025-02-04'
source_updated_at: '2025-02-04'
---
## TL;DR

Use managed solutions in every Power Platform environment except development. To convert an existing unmanaged deployment, uninstall the same solution first and reimport it as managed, or import equivalent components as managed. The UI converts automatically; PAC uses --convert-to-managed, while GitHub Actions and Azure DevOps use convert-to-managed and ConvertToManaged. Solution layering and publisher consistency affect the result.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: standardize managed solutions across every downstream environment, verify publisher consistency, and test component layering before trusting any conversion tool. If you run GitHub Actions or Azure DevOps pipelines, confirm whether convert-to-managed is already the default in your current tool version, since relying on a flag that's now redundant, or missing one that's now required, can silently change what a pipeline does.
- Makers: keep your unmanaged development environment exactly as is — this conversion never touches where active customization happens.
