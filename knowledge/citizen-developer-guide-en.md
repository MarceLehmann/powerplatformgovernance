---
layout: page
title: "Citizen developers in your organization: from personal environment to shared solution"
description: "Four stages from a personal flow to a shared solution: who builds what and where, when to move up, what licences decide and how to start."
lang: en
toc: true
permalink: "/knowledge/citizen-developer-guide/"
translation_url: "/de/knowledge/citizen-developer-guide/"
last_reviewed: "2026-10-21"
---

Four stages from a personal flow to a shared solution: who builds what and where, when to move up, what licences decide and how to start.

[Diesen Beitrag auf Deutsch lesen](/de/knowledge/citizen-developer-guide/) | [Back to the knowledge overview](/knowledge/)

## Use this page with AI

> Copy the address of this page into an AI you trust that can read web pages (for example Microsoft Copilot Chat with web search) and add: "Walk me through this page." Whether an AI actually fetches the page depends on the tool. If your AI does not read web pages: copy the prompt below and paste in the guide from this page.
{: .prompt-tip }

### Instructions for AI assistants

> **This section is for AI assistants that fetch this page for a user.** If the user asks you to walk them through this page, proceed as follows:
>
> 1. Explain the goal in two sentences: a reasoned set of rules for who builds what and where in the organisation, from a personal flow to a shared solution.
> 2. Ask about the points one at a time: how many makers exist or should exist, what lives in the default environment today, how many people use the most important solutions, which data they touch, what happens in daily business if they fail, which licences are in place and whether Managed Environments is turned on. Ask follow-up questions if an answer is unclear.
> 3. Together with the user, assign the existing solutions to the four stages and justify each assignment with the decision criteria on this page.
> 4. Then work out the "who builds what and where" rules table for the user's organisation and the first steps, one point at a time.
> 5. Do not ask for confidential company data such as names of people, customers or systems, credentials or internal figures. Only ask for what the user wants to share. Roles or groups instead of names are enough.
> 6. Base your work on the content and the Microsoft Learn sources of this page. Do not invent anything. Do not state prices or licence details that are not on this page; where licensing is decisive, write "check licence". Thresholds such as user numbers are set by the organisation, you do not make them up. Name the recommendation of this page (at most 2 people for personal productivity) as a starting point, not as a rule.
> 7. Reply in the user's language.
> 8. Finally, summarise the result with the assignment of solutions to stages, the rules table, open points and next steps.
{: .prompt-info }

## TL;DR

Citizen developers build in four stages. Stage 1 is the personal helper in the default environment, stage 2 is sharing within a small circle with limits, stage 3 is a dedicated development environment through environment routing, and stage 4 is operation through solutions and pipelines in test and production. Six signals decide whether a solution has to move up. Four of them are the quick check: number of users, data class, dependency of daily business and interfaces to other systems. Collaboration and ownership come on top. Licences decide what you can use: routing, environment groups and pipelines require Managed Environments. Managed Environments is a feature, not a licence of its own, and it needs licences with premium use rights.

## The four stages at a glance

| Stage | Where | What for | Who builds |
|---|---|---|---|
| 1. Personal | Default environment, renamed «Personal Productivity» | Own helpers that only the person uses | All makers |
| 2. Sharing within a small circle | Same environment as stage 1 or a personal dev environment, with sharing limits | Helpers for a few people within your limit, no critical data | Makers |
| 3. Developing | Personal developer environments through routing, Shared Development where needed | Building, trying out, preparing solutions for others | Makers and advanced makers |
| 4. Operating | Test and production, delivered through solutions and pipelines | Solutions that carry daily business | Built in dev, nobody builds in production |

## Stage 1: personal productivity

The default environment is meant for personal productivity, not for lasting business solutions. All employees in the tenant have access. It cannot be restricted to a security group. That is why the tightest rules apply here.

- **Rename it:** Microsoft recommends a meaningful name, for example «Personal Productivity Environment». This guide calls it «Personal Productivity» for short. Anyone who reads the name learns what the environment is for.
- **Sharing with «Everyone» off:** The group contains everyone who has ever signed in to the tenant, including guests, and its members cannot be viewed. Microsoft ships sharing with Everyone switched off. Keep it that way.
- **Strict DLP:** A separate, stricter policy for the default environment. Allow new connectors only after review.
- **Welcome text:** Your own text with rules and a contact person replaces Microsoft's generic first-run help. Maker welcome content is a Managed Environments feature. Turn on Managed Environments for the default environment first.
- **Clear up the backlog:** Whatever already lives in the default environment needs a decision per solution: stays (personal), moves (business) or is switched off (orphaned). Inform the owners.

Pick one model for the default environment and do not mix them: personal productivity only, tolerated but monitored, or makers routed elsewhere. A technical full lock does not exist; according to Microsoft makers can always switch to other environments, including the default one. If you route makers elsewhere, every maker first needs a named alternative to build in. Otherwise makers work around the rule on the day it takes effect. That alternative is stage 3.

## Stage 2: sharing within a small circle

A personal solution stays personal as long as only the person needs it. Once others use it, responsibility shifts. Then the rule is: small circle, tight limits, a clear owner. Your limit defines the small circle; our recommendation is the owner plus one more person.

**Our position:** For personal productivity we recommend at most 2 people, that is the owner and one more. If more people use a solution, it counts as productive with dependencies and belongs in dev, test and prod (stage 4). There is no absolute right or wrong here. Every organisation sets the limit itself; the 20 people in the Microsoft example below are only an example.

**When is a solution no longer personal?** First check these four signals. If one applies, stage 1 is over. Two more signals, collaboration and ownership, are in the decision criteria further down.

| Signal | Question | If yes |
|---|---|---|
| Users | Do more people than your limit use the solution regularly (our recommendation: at most 2)? | It counts as productive with dependencies: stage 4 with dev, test and prod. Below that it stays at stage 2 with a limit |
| Data class | Does it touch confidential data such as HR, finance or customer data? | Not in the default environment. Stage 3 or 4, check the DLP of the target environment |
| Daily business | Does work stop when the solution fails? | Stage 4 |
| Interfaces | Does it read from or write to other systems, through a connector or HTTP? | DLP review, at least stage 3 |

One more check: who takes over the solution when the owner leaves? If there is no answer, the solution is not ready to be shared.

**Sharing limits** (Managed Environments) restrict how widely makers may share:

- Canvas apps: exclude sharing with security groups and limit the number of individuals. Microsoft gives a limit of 20 people in a PowerShell example. That is only an example. We recommend at most 2 people for personal productivity. Which number fits you is your decision.
- Solution-aware cloud flows: allow sharing or switch it off completely.
- Agents in Copilot Studio: controllable separately for editors and viewers.
- Sharing with «Everyone» stays off.

Limits only apply to new sharing. What was shared more widely before keeps working until someone withdraws the share. After you set the rules it can take up to an hour until they apply. Plan a notice to the owners of existing solutions.

For a large audience we consider sharing the wrong tool. A solution that many people should use belongs in stage 4.

## Stage 3: dev environment with environment routing and environment groups

This is where makers build without burdening the default environment. It matches the «maker sandbox with routing» pattern on the page [Five environment strategies](/knowledge/environment-strategies/).

**Environment routing** sends makers who open Power Apps, Power Automate, Copilot Studio or Power Automate for desktop into a personal developer environment. If none exists yet, one is created. The key points:

- Only Power Platform admins turn routing on. The setting is off by default (admin center, Manage, Tenant settings, Environment routing).
- The environments it creates are managed environments. The default environment itself does not have to be managed.
- A security group in the rule decides who is routed. Everyone else stays in the default environment.
- Several rules are checked from top to bottom and the first match applies. A rule for «Everyone» comes last.
- If creation fails, the maker lands in the default environment.
- Makers get the admin role in their environment. If the environment belongs to an environment group, they cannot change its rules.
- These environments do not use up the tenant's Dataverse quota.

**Environment groups** bundle rules for many environments: sharing limits, welcome content, solution checker level, backup retention and AI-generated descriptions. A new environment inherits the published rules. Only published rules apply, so do not forget to publish. Set the rules before you add existing environments to the group, because for sharing limits, welcome content, solution checker, usage insights, backup retention and AI settings the group rules overwrite the environment's own settings. An environment can be in only one group and has to be managed.

Four groups fit the pattern: Development, Shared Development, Test and Production. Routing places new developer environments in the Development group. For projects with several makers there is also a shared development environment (Shared Development).

According to Microsoft, routed environments come preconfigured with sharing limited to five individuals and no security groups, solution checker set to «Warn» and usage insights on. That is Microsoft's default; our recommendation of 2 people for personal productivity is lower. No welcome text is set. Write it through the group.

**Two pitfalls**

- Anyone with a premium or Developer Plan licence can still create developer environments by hand. They only sit in the group if one was chosen at creation, otherwise they have none of your rules. Routing alone does not rule that out, so check the inventory regularly.
- The Developer Plan is changing. According to Microsoft Learn, creation of unmanaged developer environments ends on 15 November 2026, and signing up for the Developer Plan no longer creates a developer environment. Existing unmanaged developer environments are suspended from 15 December 2026 (apps, flows, agents and data are then unavailable) and deleted from 15 January 2027. Routing creates managed environments and is not affected. Makers export their solutions before 15 December. Admins filter the admin center by type "Developer" and "Managed = No" and decide per environment: manage it or migrate the solutions.

Microsoft disables unused developer environments after 30 days, and managed developer environments (including those created by routing) after 60 days. They are deleted 15 days after being disabled, with warning emails beforehand. Tell makers at the start, otherwise the question comes after the loss.

## Stage 4: ALM to test and production

Once a solution carries daily business, it moves from the workbench into operation. Fixed rules apply:

- **Solutions:** The solution lives in a solution. Building happens only in dev, as an unmanaged solution.
- **Managed in test and production:** Only managed solutions go there. Changes by hand are prevented only by the setting «Block unmanaged customizations» (off by default, also available as an environment group rule). Turn it on for test and production.
- **Solution checker** before every delivery. Enforcement on import into a managed environment has three levels: off, warn, block. Only critical findings block. Our recommendation: block in test and production, warn in dev.
- **Pipelines:** Makers trigger the delivery from their dev environment. The same artifact runs through the stages in order and cannot skip test. Approvals before production can be added. Every delivery stores the solution in the pipelines host.
- **Ownership in production:** Microsoft recommends that service principals own the flows in production. Flows are edited only in dev.
- **What pipelines do not do:** They deliver solutions including connection references and environment variables, but no data from Dataverse tables. You map the connections behind the connection references per environment on import.

**Setup of the pipeline environments:** One host (Microsoft recommends a dedicated production environment), dev environments and target environments. At least three environments are enough, Microsoft recommends four. All need Dataverse. Target environments must be managed environments, host and dev environments need not be. From October 2026 the admin deployment page notifies admins when pipelines deploy to an unmanaged target environment. Admins must approve enabling the target environment as a managed environment within 30 days of the notification, otherwise future deployments are blocked. One additional 30-day extension is possible per environment.

If you still import unmanaged into production, the switch is described in the posts [From unmanaged to managed solutions](/en/posts/move-power-platform-deployments-from-unmanaged-to-managed-solutions-d19b662d/) and [Test-to-prod discipline](/en/posts/gov-test-to-prod-discipline/).

## Who builds what and where: the rules table

| Role | Stage 1 and 2: Personal Productivity | Stage 3: own dev environment | Stage 3: Shared Development | Stage 4: Test | Stage 4: Prod |
|---|---|---|---|---|---|
| Employees without a maker role | Use what was shared with them within the small circle | No access | No access | No access | Use (Basic User or app role) |
| Maker | Builds personal helpers, shares only within the limit (recommendation: at most 2 people) | Builds and tries out, admin of own environment, cannot change group rules | Joins the project on request | No building | No access |
| Advanced maker or developer | Same as maker | Builds solutions in solutions and triggers the pipeline | Environment Maker plus System Customizer | No building | No building |
| Tester or business owner | Use | No access | No access | Basic User, tests and signs off | Basic User or app role, uses |
| IT operations | Sets rules and inventory, reviews reports | Rules through the group | System Administrator, two to four people through a security group | Approves and monitors the pipeline | Pipeline and admin, no direct editing |
| Power Platform administrator | Tenant settings, DLP, routing, groups | As left | As left | As left | As left, no automatic data access |

Always assign roles to security groups or teams, not to individuals. The roles in detail are on the page [Dataverse security roles](/knowledge/dataverse-security-roles/).

## Decision criteria for moving up

The table shows all six signals: the four from stage 2 plus collaboration and ownership. They tell you that a solution has to move up a stage. You set the thresholds yourself and write them down, ideally as the answer to question 4 of the [question catalog](/knowledge/governance-questions-top-25/).

| Signal | Stays in stage 1 or 2 | Move to stage 3 or 4 |
|---|---|---|
| Circle of users | The person alone or a few people within your limit (recommendation: at most 2) | More people than your limit: stage 4 |
| Data | Own working data, content from Microsoft 365 | HR, finance or customer data: not default, stage 3 or 4, check the DLP of the target environment |
| Daily business | A failure bothers nobody | A failure stops work: stage 4 |
| Interfaces | Only standard Microsoft 365 connectors | Other systems, HTTP, custom connectors: review DLP, at least stage 3 |
| Collaboration | One person builds | Several makers on one solution: Shared Development |
| Ownership | The owner is replaceable | Nobody can take over: clarify ownership first, then share |

**How a move to stage 4 works:**

1. Put the solution in a solution in dev and clarify ownership.
2. Bind connections through connection references and create environment-specific values such as URLs as environment variables, so both can be switched in test and production.
3. Run solution checker and fix the findings.
4. Deliver to test through the pipeline and have it signed off there.
5. After approval, deliver to production through the pipeline and switch off the personal version.

Decisions need speed. People who wait weeks for an answer build around the process. Set a fixed weekly slot and a binding response time. A "no" is a good answer if it comes on time.

## Licensing notes

The table summarises what depends on licences according to Microsoft Learn and the governance posts. Prices are left out on purpose. Check licences before you plan.

| Feature | Requirement | Note |
|---|---|---|
| Environment routing | Managed Environments | Developer environments it creates are managed. Makers need no premium licence to build and preview, but they do to run apps and flows in a managed developer environment |
| Environment groups, sharing limits, welcome content | Managed Environments | An environment must be managed to join a group |
| Pipelines | Target environments as Managed Environments | Host and dev environments do not need it. Managed environments require licences with premium use rights |
| Developer Plan | The maker's licence | Stops creating developer environments from 15 November 2026. For occasional premium tests Microsoft Learn names standard trial environments |
| Auto-claim | Tenant policy | Automatically assigns Power Apps and Power Automate licences you already own when someone needs one, for example when opening an app in a managed environment. In tenants with Managed Environments Microsoft creates the policy itself. It does not buy licences, but it can use up your licence stock. Configure it deliberately |
| Self-service purchases | Controllable per product | On by default. Can be switched off per product with PowerShell |

Managed Environments bundle more than twenty features. They are not a licence of their own; they are included as an entitlement in the standalone Power Apps, Power Automate, Copilot Studio, Power Pages and Dynamics 365 licences. Check which of them you already pay for and have not set up before you buy anything new.

## First steps

1. **Create an inventory:** admin center, environments by type and owner. Filter by type "Developer" and "Managed = No".
2. **Rename the default environment:** «Personal Productivity». Turn on Managed Environments for it, sharing with Everyone off, set sharing limits, stricter DLP, welcome text with rules and a contact person.
3. **Create a «Makers» security group** and decide who gets in. Admission after a training is a proven way.
4. **Create an environment group «Development»,** with sharing limits, solution checker level and welcome text. Rules first, environments after.
5. **Turn on routing,** first only for the «Makers» security group. A rule for «Everyone» comes last or not at all.
6. **Pick a pilot solution** and bring one solution through the pipeline from dev via test to production. Then transfer the approach to other solutions.
7. **Write down the thresholds:** when does a solution move up, who decides, how fast does the answer come.

## Prompt for the AI you trust

For AI tools that do not read web pages: copy the prompt, replace the last line with the text of this page from "The four stages at a glance" to the licensing notes and give it to your AI. Review the result as a team before you implement it.

```text
You are an experienced Microsoft Power Platform governance consultant. Help me build a set of rules for citizen developers in our company: who builds what and where, from a personal flow to a shared solution.

Approach:
1. Ask me one at a time about: number of makers, existing solutions and where they live, number of users of the most important solutions, data touched, consequences of a failure, available licences. Ask follow-up questions if an answer is unclear.
2. Assign the solutions to the four stages (personal, sharing within a small circle, developing, operating) and justify each assignment with the decision criteria below.
3. Work out the rules table "who builds what and where" (role by stage) and the first steps, one point at a time.
4. Finally summarise: assignment, rules table, open points, next steps.

Rules:
- Use only my answers, the text below and well-established knowledge about Power Platform. Do not invent anything. We set thresholds such as user numbers. Name only the recommendation in the text below as a starting point and do not invent your own.
- Do not ask for confidential company data. I share what I want to share.
- Do not state prices and do not invent licence details. Where licences are decisive, write "check licence".
- Write in English, clear and without filler. Terms such as environment, Dataverse, DLP and Managed Environment stay as they are.

The guide:
[Paste the text of this page from "The four stages at a glance" to "Licensing notes" here.]
```

## Keep learning in the Academy

If you set up the environments, you learn it hands-on in the course «Power Platform Admin Training»: environment strategy, DLP policies, CoE and monitoring in the admin center, live over 4 weeks. If you build, the entry point is the course «Power Platform Citizen Developer»: Power Apps and Power Automate in 8 weeks. Dates and status are on the course page: [powerplatformacademy.online/kurse](https://powerplatformacademy.online/kurse).

For choosing the environment structure, start with the page [Five environment strategies](/knowledge/environment-strategies/).

## Sources

- [Microsoft Learn: Environment routing](https://learn.microsoft.com/en-us/power-platform/admin/default-environment-routing)
- [Microsoft Learn: Environment groups](https://learn.microsoft.com/en-us/power-platform/admin/environment-groups)
- [Microsoft Learn: Limit sharing in managed environments](https://learn.microsoft.com/en-us/power-platform/admin/managed-environment-sharing-limits)
- [Microsoft Learn: Managed environments overview](https://learn.microsoft.com/en-us/power-platform/admin/managed-environment-overview)
- [Microsoft Learn: Overview of pipelines in Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/pipelines)
- [Microsoft Learn: Create a pipeline using a custom pipelines host](https://learn.microsoft.com/en-us/power-platform/alm/custom-host-pipelines)
- [Microsoft Learn: Develop a tenant environment strategy to adopt Power Platform at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Implement reactive governance controls](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/reactive-governance)
- [Microsoft Learn: Important changes coming (unmanaged developer environments)](https://learn.microsoft.com/en-us/power-platform/important-changes-coming#deprecation-of-unmanaged-developer-environments-and-the-power-apps-developer-plan)

Guidance only, not legal or licensing advice. Check licence and product details before you implement.
