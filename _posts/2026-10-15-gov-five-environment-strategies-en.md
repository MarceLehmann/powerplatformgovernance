---
title: "Five environment strategies for Power Platform compared"
description: "From lean to regulatory separation: five strategies with structure, roles, default environment, DLP, ALM, effort and risks."
date: "2026-10-15T08:00:00Z"
author: marcel_lehmann
lang: en
toc: true
tags:
  - governance
  - environment-strategy
  - alm
content_type: original_article
permalink: "/en/posts/gov-five-environment-strategies/"
translation_url: "/de/posts/gov-five-environment-strategies/"
---

## TL;DR

There is no single correct environment strategy. Five patterns cover most cases: lean with one production, three stages per solution, maker sandbox with routing, by department and separated by region. The table helps with the choice, the PDF has the details.

**[All five strategies as PDF](/assets/downloads/Environment_Strategies_5_EN.pdf)**

## Which strategy fits you?

| Criterion | Strategy |
|---|---|
| Small organisation, few business solutions | 1. Lean: default plus one production |
| Business-critical solutions, several teams | 2. Three stages per solution: dev, test, prod |
| Many makers who should learn | 3. Maker sandbox with routing and groups |
| Units with different protection needs | 4. By department or business unit |
| Data must stay in a region | 5. By region or regulation |

## 1. Lean: default plus one production

The starting point for small organisations that want a clear separation without building a rulebook.

**Fits when:** Up to a few dozen makers, few business solutions, no dedicated CoE team.

**Structure**

- Default environment, renamed «Personal Productivity», for personal productivity only
- One production environment with Dataverse for business solutions
- One sandbox or developer environment for building and testing

- **Roles:** Makers: Environment Maker in the sandbox. Users: Basic User in production. System Administrator: two named people.
- **Default environment:** Share with «Everyone» off, strict DLP, welcome text with rules and a contact.
- **DLP:** One tenant policy, one stricter policy for the default environment.
- **ALM:** Export and import solutions manually. Run solution checker before every import.
- **Effort:** Setup low, operation low.
- **Risks:** All business solutions share one production. Apps can interfere with each other.
- **First steps:** Create an inventory, rename default, set DLP, create production and sandbox.

## 2. Three stages per solution: dev, test, prod

A solution moves through separate environments, every change is traceable.

**Fits when:** Business-critical solutions, several teams, high traceability requirements.

**Structure**

- One dev, one test and one prod per important solution or solution family
- A pipelines host environment for Power Platform pipelines
- Managed environments at least for test and prod

- **Roles:** Developers: Environment Maker plus System Customizer in dev. Testers: Basic User in test. Prod: pipeline and admin, no direct editing.
- **Default environment:** As in every strategy: productivity only, no business operation.
- **DLP:** A policy per stage: dev more open, prod stricter.
- **ALM:** Power Platform pipelines, solution checker as a requirement, approval before prod.
- **Effort:** Setup medium, operation medium.
- **Risks:** Many environments and capacity. Every environment except trial and developer takes 1 GB at the start.
- **First steps:** Take a pilot solution, build the pipeline, define roles per stage, then transfer to further solutions.

## 3. Maker sandbox with routing and groups

Makers automatically get a personal developer environment, rules apply through environment groups.

**Fits when:** Many makers who should learn and experiment within clear guardrails.

**Structure**

- Default environment for productivity only
- Environment routing sends makers into personal developer environments
- Environment groups: development, shared development, test, production
- A security group defines who is routed

- **Roles:** Makers are admin of their own developer environment but cannot change the group rules.
- **Default environment:** Makers leave the default environment as soon as they are routed. Only productivity stays there.
- **DLP:** Rules via environment groups so every new environment is covered immediately.
- **ALM:** Pipelines from dev through test to prod. Shared development for projects with several makers.
- **Effort:** Setup medium, operation medium.
- **Risks:** Developer environments without use are switched off after 90 days and removed later. Groups and routing require managed environments. Check licensing.
- **First steps:** Create a security group, create a «Development» group with rules, activate routing, inform makers.

## 4. By department or business unit

Each unit gets its own environments and its own rules.

**Fits when:** Units with different protection needs, for example HR and finance versus marketing.

**Structure**

- Own environments per unit (dev and prod)
- An environment group per unit with its own rules
- A naming rule with stage, region, unit and purpose, for example Prod-CH-Finance-Payroll

- **Roles:** Business owners per unit, System Administrator centrally. Roles assigned separately per unit.
- **Default environment:** Productivity only. Business solutions move into the unit environments.
- **DLP:** Stricter policies for units with sensitive data.
- **ALM:** Pipelines per unit or shared, depending on team size.
- **Effort:** Setup medium, operation medium to high.
- **Risks:** Sharing data across units becomes tedious. More environments, more admins, more capacity.
- **First steps:** Classify units by protection need, one pilot unit, then expand step by step.

## 5. By region or regulation

Environments follow the region or the regulation, not the organisation.

**Fits when:** Data must stay in a region, several countries, group structures or customer requirements.

**Structure**

- Own environments per region, the same solution is rolled out per region
- Environment groups per region
- Tenant isolation and strict rules for data flows between regions

- **Roles:** Regional administrators, central governance. Data access only within the own region.
- **Default environment:** Productivity only, no connection to regulated data.
- **DLP:** A policy per region, cross-border connectors blocked or reviewed.
- **ALM:** Central development, delivery per region through pipelines.
- **Effort:** Setup high, operation high.
- **Risks:** Duplicate maintenance, version differences between regions, more support effort.
- **First steps:** Clarify data residency duties, define regions, roll out one solution as a pilot in two regions.

## Sources

- [Microsoft Learn: Role-based security roles for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/database-security)
- [Microsoft Learn: Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
- [Microsoft Learn: Develop a tenant environment strategy to adopt Power Platform at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
