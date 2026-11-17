---
layout: page
title: "Storage exceeded: what happens to your environments"
description: "The three stages of Dataverse storage validation: blocked operations from 100%, administration mode for sandbox environments after 30 days, disablement after 90 days. With a plan for the first 30 days."
lang: en
toc: true
permalink: "/knowledge/storage-overage/"
translation_url: "/de/knowledge/storage-overage/"
last_reviewed: "2026-11-15"
---

In the Dataverse capacity documentation Microsoft describes a three-stage lifecycle for tenants that exceed their storage. This page explains what happens at each stage, what is excluded and what to do in the first 30 days.

[Diese Seite auf Deutsch lesen](/de/knowledge/storage-overage/) | [Back to the knowledge overview](/knowledge/)

## TL;DR

When a tenant exceeds 100% of its storage, six operations are blocked at once, including creating, copying and restoring environments. If the overage lasts 30 days, affected sandbox environments go into administration mode. After 90 days they are disabled, for admins too. Production environments do not go through stages two and three, but they depend on the blocked operations. Sandbox environments with active pay-as-you-go are excluded. The clock starts on the first day above 100% and only stops when the overage is resolved.

Microsoft labels the lifecycle as the upcoming "Dataverse Storage Validation". It applies after the rollout. The Message center communication tells you the timing for your tenant.

The scope is narrower than the name suggests. According to Microsoft the validation applies only to Dataverse-only tenants without Dynamics 365 Finance and Operations environments or consumption. The products Microsoft lists as in scope are Dynamics 365 Sales, Customer Service, Field Service, Customer Insights, Customer Voice, Contact and Project Operations (Dataverse deployments). Use the Message center communication to confirm whether your tenant is included before you plan.

## The three stages

| Stage | When | What you notice |
|---|---|---|
| Early notification | above 85% | Informational and warning notifications in the admin center and by email |
| 1: Restricted | first day above 100% (time zero, T0) | Critical notifications. Blocked: create an environment, copy, restore, convert a trial to paid, recover a deleted environment, add Dataverse to an environment |
| 2: Administration mode | 30 days after T0 | In addition: affected sandbox environments are accessible to admins only |
| 3: Disabled | 90 days after T0 | In addition: nobody can sign in to affected sandbox environments, admins included. Data is only available through a support ticket |

What counts is effective consumption. Before Microsoft identifies an overage, unused capacity is offset, and only in one direction: database can cover log and file, log can cover file. A database deficit cannot be offset.

## What is excluded

- **Production environments** neither enter administration mode nor get disabled. Work there is still affected as soon as it needs a blocked copy or restore.
- **Sandbox environments with active pay-as-you-go** do not go through the lifecycle. Linking a sandbox to pay-as-you-go removes the restrictions for it, even if the tenant stays in overage.
- **Tenants with Dynamics 365 Finance and Operations** are out of scope of the upcoming validation. According to Microsoft it applies to Dataverse-only tenants.

## The first 30 days

The order is a recommendation from practice, the individual measures come from Microsoft.

1. **Day 1: confirm the numbers.** In the admin center open **Licensing** > **Dataverse**. Read off entitlement and consumption per storage type, the effective deficit and the environments and tables that consume the most.
2. **Week 1: clean up.** Delete environments nobody needs any more and data without business, legal or regulatory value. Cleaning up costs no money.
3. **Week 2: move out data that has to stay.** For inactive data with a retention duty there is long-term retention in Dataverse. It lowers active database consumption but does not take effect immediately.
4. **Week 3: decide on buying capacity.** Buy the storage type that is missing. File capacity does not fix a database deficit. Microsoft recommends adding expected growth and a buffer to the deficit.
5. **Before day 30: protect sandbox environments.** If you cannot do without a sandbox, link it to pay-as-you-go. Check price, Azure subscription and budget first.

If you need room at short notice, you can enable a capacity extension in the admin center. It applies to the whole tenant, covers 25% of consumption, runs for at most 45 days and can be requested at most three times in 365 days. It does not resolve the overage permanently.

## Three assumptions that are wrong

- **"I will move capacity between environments."** That only changes the distribution. The tenant-level overage stays.
- **"I will take the sandbox out of administration mode and it is solved."** An admin can do that per environment in order to clean up. The timer keeps running, and the environment reaches the next stage as long as the tenant is in overage.
- **"The report shows no deficit, so everything works."** Copy, restore and create check separately whether at least 1 GB is free in the storage type concerned. An operation can therefore be blocked although the tenant is within its entitlement after offsetting.

## If a sandbox is already disabled

First bring the tenant back within its entitlement. After that an admin re-enables each affected environment individually in the admin center. If the tenant stays in overage, Microsoft Support only helps with data export and recovery options.

## Notice early instead of reacting late

The early notification starts at 85%. If you do not want to wait for the banner, have the status sent to you: the flow **F08 Capacity warning** from the free [AdminHelper starter set](/flows/) reports capacity by email. Add the storage figures to your monthly review, see the [governance concept](/knowledge/governance-concept/).

## Read on

- [Five environment strategies for Power Platform compared](/knowledge/environment-strategies/)
- [Expensive isn't building. Expensive is not knowing.](/en/posts/gov-licensing-governance/)
- [Asking governance questions in Power Platform Admin in Cowork](/knowledge/cowork-governance-questions/)

## Sources

Statements checked against Microsoft Learn on 15 November 2026, Learn page dated 2 November 2026. Microsoft labels the three stages as guidance for an upcoming feature. Deadlines and scope can change before the rollout.

- [Microsoft Learn: Dataverse capacity-based storage details, section "Storage overage lifecycle"](https://learn.microsoft.com/en-us/power-platform/admin/capacity-storage#storage-overage-lifecycle)
- [Microsoft Learn: Free up storage space](https://learn.microsoft.com/en-us/power-platform/admin/free-storage-space)
- [Microsoft Learn: Dataverse long term data retention overview](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-retention-overview)
- [Microsoft Learn: Pay-as-you-go meters](https://learn.microsoft.com/en-us/power-platform/admin/pay-as-you-go-meters)

Orientation only, not legal or licensing advice. Check licence and product details before you implement anything.
