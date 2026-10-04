---
title: "The Governance Report You Don't Have to Build Yourself"
description: "The built-in weekly digest already answers most of what a CoE dashboard project sets out to build: usage, inactive resources, and top apps, flows and makers. Turning it on is a checkbox, not a project."
date: "2026-09-24T08:40:00Z"
author: marcel_lehmann
lang: en
toc: true
tags:
  - governance
  - coe
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-45.png"
  alt: "Governance card: The Scoreboard — two numbers beat any governance deck."
permalink: "/en/posts/gov-weekly-coe-rhythm/"
translation_url: "/de/posts/gov-weekly-coe-rhythm/"
faq:
  - question: "What does the Managed Environments weekly digest contain?"
    answer: "It has three parts: a usage summary of how many apps were used and how many active users there were across managed environments in the past month, a list of apps and flows that have not been launched in a while, and the most popular apps and flows by session and run count, plus top makers ranked by total sessions. No Power BI report or data export is needed."
  - question: "How do I turn on the weekly digest for an environment?"
    answer: "Enable tenant-level analytics first, because usage insights depend on it. Then in the Power Platform admin center go to Manage, Environments, select the environment, choose Edit Managed Environments and under Usage insights select Include insights for this environment in the weekly email digest. It is set per environment, so a forgotten environment has no weekly visibility."
  - question: "Who receives the weekly digest by default?"
    answer: "Everyone holding the Power Platform administrator or Dynamics 365 service administrator role, not environment owners or makers. You can add recipients in the Usage insights settings, or with PowerShell by setting additionalAdminDigestEmailRecipients in the tenant settings with semicolon separated addresses. The digest does not work in sovereign clouds."
  - question: "What does None under Last launch mean in the digest?"
    answer: "The app or flow has never been launched at all, which is as direct a signal as governance data gets. An app that shows None for three digests running is a decision waiting to be made: archive it, reassign it or confirm that it is intentionally dormant."
  - question: "Do I still need the CoE Starter Kit if I use the weekly digest?"
    answer: "The digest does not require a CoE Starter Kit, which is why it is worth turning on regardless. If one is already deployed, its Power BI dashboard and inactivity notification process cover more ground, such as bulk permission updates, maker surveys and ROI tracking. For most tenants the digest replaces a genuine chunk of a reporting project."
---

## TL;DR

Before building a custom reporting dashboard, check what's already there: the **weekly digest** in Managed Environments emails usage numbers, inactive apps and flows, and the most-used resources and top makers, every week, with no dashboard project required. It's off by default per environment, only goes to Power Platform and Dynamics 365 administrators unless you add more recipients, and doesn't work in sovereign clouds — but for most tenants, turning it on is a five-minute settings change that replaces a genuine chunk of what a governance reporting project sets out to build.

## What's actually in it

The digest has three parts. First, a usage summary: how many apps were used and how many active users there were across managed environments in the past month. Second, a list of apps and flows that **haven't been launched in a while** — if one has never been launched at all, the "Last launch" column simply reads "None," which is as direct a signal as governance data gets. Third, the most popular apps and flows by session and run count, plus the top makers ranked by total sessions across everything they own. None of this requires a Power BI report, a data export, or a CoE Starter Kit deployment — it's generated and delivered automatically once the setting is on.

## Turning it on

Enable **tenant-level analytics** first — usage insights depend on it and won't populate without it. Then, per managed environment: **Power Platform admin center → Manage → Environments** → select the environment → **Edit Managed Environments** → under **Usage insights**, select **Include insights for this environment in the weekly email digest**. This is set **per environment**, not once for the whole tenant — an environment you forget to include is an environment with no weekly visibility at all, silently.

## Who actually gets it, and how to widen that

By default, the digest goes to everyone holding the **Power Platform administrator** or **Dynamics 365 service administrator** role — not to environment owners, not to makers, not to whoever actually cares about a specific app's adoption. Add more recipients through the same Usage insights settings, or via PowerShell:

```powershell
$tenantSettings = Get-TenantSettings
($tenantSettings.powerPlatform.governance) | Add-Member -MemberType NoteProperty -Name additionalAdminDigestEmailRecipients -Value 'name@contoso.com;other@contoso.com'
Set-TenantSettings -RequestBody $tenantSettings
```

## The mailbox isn't the habit

Getting the digest delivered is the easy part — the actual governance habit is what happens after it lands. An app that's shown "None" under Last launch for three digests running isn't a data point, it's a decision waiting to be made: archive it, reassign it, or confirm it's intentionally dormant. If a CoE Starter Kit is already deployed, its Power BI dashboard and inactivity notification process cover more ground (bulk permission updates, maker surveys, ROI tracking) — but the weekly digest doesn't require any of that to already exist, which is exactly why it's worth turning on regardless.

## Who this matters to

- Admins/CoE: turn on the weekly digest for every managed environment individually rather than assuming a tenant-wide default — it's opt-in per environment, so a partial rollout creates exactly the blind spot in whichever environment nobody remembered.
- Leadership/Business: two of this digest's own numbers — active users and inactive resources — already are the honest, recurring report a governance dashboard project sets out to build; that project doesn't have to happen before measurement starts, since this already measures it.
- Makers: an app the digest shows with "None" under Last launch is doing the same job, reputationally, as no app at all, just less visibly — review your own resources before someone else's report does it for you.
