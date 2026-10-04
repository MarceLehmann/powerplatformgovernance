---
title: How to remove Managed Environment status with PowerShell
description: A PowerShell method changes the governance configuration to Basic and
  effectively removes Managed Environment status.
date: '2026-09-26T16:34:03Z'
author: governance_editorial
lang: en
toc: false
tags:
- environments
- governance
- security
content_type: curated_summary
curation_id: 307adb54b2cd3621294616e6
image:
  path: "/assets/img/curated/307adb54b2cd3621294616e6.png"
  alt: 'Governance card: Managed status can be removed with PowerShell. Use the environment
    ID and the right admin permissions.'
permalink: "/en/posts/how-to-remove-managed-environment-status-with-powershell-307adb54/"
translation_url: "/de/posts/how-to-remove-managed-environment-status-with-powershell-307adb54/"
source_url: https://www.michaelroth42.com/post/2025-04-30-how-to-unmanage-an-environment/
source_site_url: https://www.michaelroth42.com/
source_title: How to unmanage an environment?
source_name: MichaelRoth42 Blog
source_language: en
source_language_name: English
source_author: Michael Roth
source_published_at: '2025-04-30'
source_type: article
submitted_by:
  publish_credit: true
  name: Michael Roth
  linkedin: https://www.linkedin.com/in/michaelroth42/
faq:
  - question: "Why would you want to remove the Managed Environment status again?"
    answer: "The post names licensing as the background. Managed Environments require a premium license for every user, which the author calls a tough sell in many organizations. A customer had asked how to turn a managed environment into an unmanaged one. The author shows a short PowerShell route that removes the managed status of the environment."
  - question: "What do you need before running the command?"
    answer: "The PowerShell module Microsoft.PowerApps.Administration.PowerShell must be installed. You also need rights as environment admin or tenant admin. Sign-in works with the cmdlet Add-PowerAppsAccount, which opens a login prompt. Only after that can the governance configuration of the environment be changed."
  - question: "Which object is needed for the reset?"
    answer: "First you create a custom object with a single property: the protection level protectionlevel set to Basic. The author stores it in a variable he calls IWantOut and notes that you can name it whatever you like. In the next step this object is passed in as the new governance configuration."
  - question: "Which cmdlet removes the managed status, and with which parameters?"
    answer: "The cmdlet Set-AdminPowerAppEnvironmentGovernanceConfiguration. It needs two parameters: EnvironmentName with the identifier of the environment and UpdatedGovernanceConfiguration with the object created before. After it runs, the Managed Environment status is removed. For further details the author points to the official Microsoft documentation."
  - question: "Which mix-up does the author warn about with EnvironmentName?"
    answer: "In the documentation the parameter is called EnvironmentName, but the author says that by name he means the Environment ID. He remarks how often name and ID get confused in the documentation. The placeholder in the cmdlet example is therefore to be replaced with the ID of the managed environment."
---

## TL;DR

The Microsoft.PowerApps.Administration.PowerShell module can change a Managed Environment to unmanaged by setting protectionlevel to Basic. An environment or tenant administrator creates a custom object, signs in with Add-PowerAppsAccount, and runs Set-AdminPowerAppEnvironmentGovernanceConfiguration with the Environment ID. The change removes the managed status, but also requires weighing premium licensing against lost guardrails and visibility.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: Install the Microsoft.PowerApps.Administration.PowerShell module and use environment or tenant admin permissions before running the configuration cmdlet.
- Admins/CoE: Pass the Environment ID, not a display name, and set protectionlevel to Basic to remove the managed status.
- Leadership/Business: Weigh the premium license requirement for every user against the structure, guardrails, visibility, and ALM benefits that Managed Environments provide.
