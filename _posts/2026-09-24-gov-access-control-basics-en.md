---
title: "Three Access-Control Habits That Quietly Undo Everything Else"
description: "Least-privilege security roles, sharing with groups instead of individuals, and treating every open HTTP endpoint as a decision someone has to actually make."
date: "2026-09-24T08:25:00Z"
author: governance_editorial
lang: en
toc: true
tags:
  - governance
  - security
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-01.png"
  alt: "Governance card: The Shadow Admin — grant the least, log the rest."
permalink: "/en/posts/gov-access-control-basics/"
translation_url: "/de/posts/gov-access-control-basics/"
---

## TL;DR

None of the three habits here need a new tool: assign the least-privileged predefined security role a task actually requires instead of defaulting to System Administrator, share apps and flows with security groups instead of naming individuals one at a time, and treat every unauthenticated HTTP trigger as a policy decision made on purpose — not a default nobody looked at. Each one is a five-minute change that prevents a much larger cleanup later.

## Least privilege isn't a slogan, it's a specific predefined role

Dataverse ships predefined security roles built around actual tasks rather than blanket access, and the temptation to copy System Administrator "to be safe" undermines the entire model. For environments without a Dataverse database, the two roles that matter are narrow by design: **Environment Admin** can manage the environment and provision a database, while **Environment Maker** can create apps, connections, and flows but has no privileges over the data inside them. Once Dataverse exists, System Administrator becomes the actual full-access role — which is exactly why it shouldn't be someone's everyday assignment.

Two practical guardrails worth adopting directly: don't copy the System Administrator role to make a new one, since copied roles don't automatically pick up new privileges from product updates and quietly become outdated; and if you need to let a set of admins assign security roles to others without making them full System Administrators, build that as its own custom role scoped narrowly to the Security Role table, not as a shortcut through a broader role.

## Sharing with groups isn't a nice-to-have, it's the difference between one change and forty

Sharing an app or flow with individual people one at a time creates exactly as many access grants as there are people — and each one has to be found and revoked individually when access needs to change. Sharing with a security group instead means access is controlled in one place: add someone to the group and they're in, remove them and they're out, with no per-resource cleanup required anywhere the group was used.

This compounds specifically at offboarding. An individually-shared app is invisible to any process built around directory group membership — nothing about removing someone from a security group touches an app share added by name. If your access review process checks group membership, individual shares are exactly what it misses.

## Every open HTTP endpoint is a decision, whether or not anyone made it

An HTTP-triggered flow with no authentication is a public endpoint the moment it's saved — reachable by anyone who has or guesses the URL, indefinitely, until someone notices. The risk isn't that HTTP triggers exist; they're a legitimate integration pattern. The risk is that "no auth configured" is the default state, not a decision, so it happens by omission rather than by choice.

The fix isn't complicated: require an explicit authentication method — Microsoft Entra ID authentication on the request, an API key check inside the flow, or routing the call through an API Management layer that handles auth before the flow ever sees the request — and make that a review checklist item for any HTTP trigger, the same way a code review would flag an unauthenticated API route.

## Who this matters to

- Admins/CoE: audit who currently holds System Administrator and ask, for each one, which predefined role would actually cover what they do — most of the list won't need the role they were given by default.
- Makers: default to sharing with a security group when you publish an app or flow, even a small one — it costs the same effort now and saves someone else finding your name buried in forty individual shares during the next access review.
- Security/Compliance: add "does this HTTP trigger require authentication" to whatever review already exists for new flows — it's a one-line check that catches a real, quietly-created public endpoint before it's been live for a year.
