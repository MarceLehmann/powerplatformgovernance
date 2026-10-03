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
faq:
  - question: "How do I convert an unmanaged solution in a downstream environment to managed?"
    answer: "You install the same components again as a managed solution, and the system switches them from unmanaged to managed. You can install the same solution again as managed or install a new solution containing the same components. If you reinstall the same solution, uninstall the old unmanaged one first, because the same solution cannot exist twice in one environment, once unmanaged and once managed."
  - question: "What error appears when the unmanaged solution is still installed?"
    answer: "The message says the solution is already installed as unmanaged and the supplied package is trying to install it in managed mode, and that import can only update solutions when the modes match. The cause is having both variants side by side. Uninstall the unmanaged solution first, then import the managed one."
  - question: "Which parameter forces the conversion to managed during import with PAC, GitHub or Azure DevOps?"
    answer: "With the Power Platform CLI you use the convert-to-managed flag with two hyphens on import. In GitHub Actions the parameter is convert-to-managed, and in Azure DevOps it is ConvertToManaged. The author notes that the Azure DevOps text Import as a Managed solution does not make the conversion obvious. A reader comment from February 2025 suggests the flag may now be true by default, which could affect import time."
  - question: "Why does the publisher matter when moving to managed solutions?"
    answer: "All solutions in an environment should share the same publisher so that components can be moved between solutions. A component must also stay in at least one solution of the publisher it was first installed with. With different publishers this makes it harder to restructure solutions, which the author often does when moving to managed solutions."
  - question: "What does solution layering mean after switching to managed?"
    answer: "Solutions layer chronologically by installation date and time, newer ones on top of older ones, and the unmanaged layer always stays on top. When you switch to managed, installation order therefore matters. Components inherited from Microsoft, third-party vendors and ISVs layer according to their deployment sequence. The author credits Felix Verduin for pointing this out."
---
## TL;DR

Use managed solutions in every Power Platform environment except development. To convert an existing unmanaged deployment, uninstall the same solution first and reimport it as managed, or import equivalent components as managed. The UI converts automatically; PAC uses --convert-to-managed, while GitHub Actions and Azure DevOps use convert-to-managed and ConvertToManaged. Solution layering and publisher consistency affect the result.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: standardize managed solutions across every downstream environment, verify publisher consistency, and test component layering before trusting any conversion tool. If you run GitHub Actions or Azure DevOps pipelines, confirm whether convert-to-managed is already the default in your current tool version, since relying on a flag that's now redundant, or missing one that's now required, can silently change what a pipeline does.
- Makers: keep your unmanaged development environment exactly as is — this conversion never touches where active customization happens.
