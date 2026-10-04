---
title: "The Only Manual That Ever Existed Walked Home at 5 PM"
description: "Why a solution's name, its data location, and one paragraph of description are the three things that make it survivable after its maker leaves, and why none of them cost more than a few minutes to get right at build time."
date: "2026-09-24T09:05:00Z"
author: marcel_lehmann
lang: en
toc: true
tags:
  - governance
  - documentation
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-21.png"
  alt: "Governance card: Documented — one paragraph per solution, written at ship."
permalink: "/en/posts/gov-documentation-debt/"
translation_url: "/de/posts/gov-documentation-debt/"
faq:
  - question: "What naming pattern does Microsoft recommend for Power Platform environments?"
    answer: "Names are limited to 100 characters, should stay short and meaningful and follow a fixed, predictable pattern. The recommended example combines lifecycle stage, region, business unit and purpose, giving names like Prod-US-Finance-Payroll."
  - question: "Why is storing app data in a personal OneDrive a risk?"
    answer: "The file is tied to one person's account. If that person goes on leave, changes roles or leaves, the team app built on it stops working."
  - question: "What should a maker write down on the day a solution ships?"
    answer: "Three sentences are enough: what the solution does and for whom, what data it touches, and why it was built this way instead of another way."
---

## TL;DR

Three small omissions compound into the same failure: a solution nobody can safely touch once its maker is gone. A file called `test_final_v2_NEW` is unfindable among hundreds of others. Data quietly stored in a personal OneDrive locks up the moment its owner goes on leave. And "I know how it works" is documentation that walks out the door at 5 PM. Microsoft's own guidance treats all three as build-time decisions, not later cleanup: a naming pattern fixed before creation, a shared data location decided before go-live, and a description written the day the solution ships — each one takes minutes, and each one is the difference between "we can hand this off" and "nobody knows what this does."

## A naming convention is documentation that writes itself

Microsoft's own tenant environment strategy guidance is specific about this: names are limited to 100 characters, should stay short and meaningful, and should follow a **fixed, predictable pattern** — the recommended example is *&lt;lifecycle stage&gt;-&lt;region&gt;-&lt;business unit&gt;-&lt;purpose&gt;*, producing names like `Prod-US-Finance-Payroll`. The reasoning given isn't aesthetic — consistent names let admins immediately know an environment's purpose without opening it, and they make automation and reporting against the fleet possible at all. The same logic scales down to individual apps and flows: `test_final_v2_NEW` tells the next person nothing about what it does, who owns it, or whether it's safe to delete, while a name built from a fixed pattern answers all three questions on sight, in a tenant that might have hundreds of similar-sounding solutions. One more detail worth flagging: names are visible to anyone with admin center access, so the convention itself should never encode anything confidential.

## Data location is a question to ask before the app, not after

A Power Apps or Power Automate solution can work perfectly for its maker while storing its actual data somewhere nobody else can reach — a personal OneDrive is the most common version of this, and it's especially deceptive because personal OneDrive is a fully compliant, tenant-resident Microsoft 365 service. The problem isn't where the bytes sit; it's **who the data's availability depends on**. A file in a personal OneDrive is tied to one person's account: if they go on leave, change roles, or leave the company, the team app built on top of it stops working for reasons that have nothing to do with the app itself. SharePoint and Dataverse don't have this failure mode because they're organizationally owned locations, not personal ones — access survives any single person's absence. The fix is a question asked at solution intake, not an audit finding months later: where does this app's data actually live, and does its availability depend on one specific person's account staying active?

## One paragraph, written at ship, beats a perfect memory

The most common form of documentation debt isn't a missing wiki page — it's a maker who genuinely, correctly knows exactly how their solution works, right up until they change teams or leave. Knowledge that exists only in one person's head has a hard expiration date that nobody can predict in advance. The fix doesn't require a documentation platform or a template review board: three sentences, written the day a solution ships, covering what it does and for whom, what data it touches, and — because this is the detail that actually gets lost — why it was built this way instead of some other way. Microsoft's own catalog submission flow builds this expectation into the platform directly: submitting a solution for others to reuse requires a description field and a business justification, read by other makers before they install it, precisely because "makers read your description to find out more about it" is treated as a load-bearing part of the workflow, not an optional afterthought.

## Who this matters to

- Admins/CoE: fix a naming pattern before environment and solution sprawl makes retrofitting one painful — a name built from a fixed convention answers "what is this and can I touch it" without anyone having to open it.
- Makers: write the one-paragraph description on the day you ship, not when someone asks for it later — by the time someone asks, the details you'd document have usually already faded from your own memory.
- Leadership/Business: ask where a solution's data actually lives before asking what the app does — a team tool built on one person's personal OneDrive has a single point of failure that has nothing to do with the app's code.
