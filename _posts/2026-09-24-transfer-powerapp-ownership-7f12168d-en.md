---
title: Transfer PowerApp Ownership
description: 'Two ways to reassign a Power App''s owner: the CoE Starter Kit admin
  app, or Set-AdminPowerAppOwner via PowerShell for scripted bulk transfers.'
date: '2026-09-24T00:00:00Z'
author: governance_editorial
lang: en
toc: false
tags:
- ownership
- governance
content_type: curated_summary
curation_id: 7f12168d413440b2b647752a
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-49.png
  alt: 'Governance card: The Relay Race — the owner leaves, the solution stays.'
permalink: "/en/posts/transfer-powerapp-ownership-7f12168d/"
translation_url: "/de/posts/transfer-powerapp-ownership-7f12168d/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-2-transfer-powerapp-ownership/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 2: Transfer PowerApp Ownership"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
publisher_disclosure: Both publications are edited by Marcel Lehmann.
faq:
  - question: "How do I reassign a Power App when its maker has left?"
    answer: "Use either the CoE Starter Kit admin apps, which give a graphical interface for the inventory and for ownership transfers, or the Set-AdminPowerAppOwner cmdlet from the Microsoft.PowerApps.Administration.PowerShell module. The cmdlet takes the app ID, the environment name and the object ID of the new owner."
  - question: "What happens to the previous owner after Set-AdminPowerAppOwner runs?"
    answer: "The previous owner becomes Can View, which keeps read access but removes ownership privileges. Data and connections of the app stay intact during the transfer. You can confirm the change afterwards in the Power Platform admin center or in the maker portal."
  - question: "Which permissions do I need to change the owner of an app I do not own?"
    answer: "You need Power Platform admin, environment admin or Global admin credentials. Standard maker permissions are not enough. Only administrators can perform these transfers, and the article states that this admin role is what allows ownership changes for apps you do not own."
  - question: "Can I transfer many apps to a new owner at once?"
    answer: "Yes. PowerShell suits bulk reassignments: put the Set-AdminPowerAppOwner command into a loop and reassign numerous apps to the new owner programmatically. Doing it one by one in the maker interface is described as inefficient and prone to omissions, which is why administrators look for an alternative when many apps are affected."
  - question: "Why do apps become a problem when their creator leaves the company?"
    answer: "They can become orphaned. Manual reassignment through the maker interface is slow and easy to get wrong. The article therefore ties the transfer to Center of Excellence frameworks and formal governance processes for departing staff, and points to related tips on changing flow owners and sharing flows and apps."
---
## TL;DR

Reassign a Power App's owner two ways: run the CoE Starter Kit admin app for a UI-driven bulk transfer, or use `Set-AdminPowerAppOwner -AppName <AppId> -EnvironmentName <EnvId> -AppOwner <UserObjectId>` per app via PowerShell. Either way you need Power Platform, environment, or Global admin rights — the previous owner keeps read access but loses ownership, with data and connections intact.

{% include curated-attribution.html %}

## Governance takeaway

- Admins/CoE: for a single offboarding, run the CoE Starter Kit app without touching PowerShell; for a whole departed team, use `Set-AdminPowerAppOwner` in a loop instead, since the admin app isn't built for bulk transfers — a two-tier process, the app for occasional one-off changes and the script kept ready for when a team leaves all at once.
