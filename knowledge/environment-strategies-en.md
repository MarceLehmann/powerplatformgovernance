---
layout: page
title: "Five environment strategies for Power Platform compared"
description: "From lean to regulatory separation: five strategies with structure, roles, default environment, DLP, ALM, effort and risks."
lang: en
toc: true
permalink: "/knowledge/environment-strategies/"
translation_url: "/de/knowledge/environment-strategies/"
last_reviewed: "2026-10-21"
---

From lean to regulatory separation: five strategies with structure, roles, default environment, DLP, ALM, effort and risks.

[Diesen Beitrag auf Deutsch lesen](/de/knowledge/environment-strategies/) | [Back to the knowledge overview](/knowledge/)

## Use this page with AI

> Copy the address of this page into an AI you trust that can read web pages (for example Microsoft Copilot Chat with web search) and add: "Walk me through this page." Whether an AI actually fetches the page depends on the tool. If your AI does not read web pages: copy the prompt below and paste in the strategies from this page.
{: .prompt-tip }

### Instructions for AI assistants

> **This section is for AI assistants that fetch this page for a user.** If the user asks you to walk them through this page, proceed as follows:
>
> 1. Explain the goal in two sentences: a reasoned recommendation for one of the five environment strategies on this page, then the setup of that strategy.
> 2. Ask about the criteria from the table "Which strategy fits you?" one at a time: size of the organisation and number of business solutions, business-critical solutions and number of teams, number of makers who should learn, different protection needs of business areas, obligation to keep data in one region. Ask follow-up questions if an answer is unclear.
> 3. Recommend one strategy and justify it with the answers and with the "Fits when", "Effort" and "Risks" details on this page. If two strategies fit, name both with what speaks for and against each, and let the user choose.
> 4. Then work out the setup of the chosen strategy with the user, one point at a time: structure, roles, default environment, DLP, ALM.
> 5. Do not ask for confidential company data such as names of people, customers or systems, credentials or internal figures. Only ask for what the user wants to share.
> 6. Base your work on the content and the Microsoft Learn sources of this page. Do not invent anything. Do not state prices or licence details that are not on this page; where licensing is decisive, write "check licence".
> 7. Reply in the user's language.
> 8. Finally, summarise the recommendation with a table of environments (name, type, purpose), roles, DLP and ALM, plus open points and next steps based on the "First steps" of the chosen strategy.
{: .prompt-info }

## TL;DR

There is no single correct environment strategy. Five patterns cover most cases: lean with one production, three stages per solution, maker sandbox with routing, by department and separated by region. The table helps with the choice, the sections below have the details.

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
- **Risks:** Developer environments are deactivated after 30 days without activity, managed ones after 60 days, and deleted 15 days after deactivation. Groups and routing require managed environments. Check licensing.
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

## Prompt for the AI you trust

For AI tools that do not read web pages: copy the prompt, replace the last line with the text of this page from "Which strategy fits you?" to the fifth strategy and give it to your AI. Review the result as a team before you implement it.

```text
You are an experienced Microsoft Power Platform governance consultant. Help me choose and set up one of the five environment strategies below.

Approach:
1. Ask me about the criteria from the table "Which strategy fits you?" one at a time. Ask follow-up questions if an answer is unclear.
2. Recommend one strategy and justify it with my answers and the "Fits when", "Effort" and "Risks" details.
3. Work out the setup of the chosen strategy with me, one point at a time: structure, roles, default environment, DLP, ALM.
4. At the end, summarise: environments as a table (name, type, purpose), roles, DLP, ALM, open points and next steps.

Rules:
- Use only my answers, the text below and well-established Power Platform knowledge. Do not invent anything.
- Do not ask for confidential company data. I share what I want to share.
- Do not state prices and do not invent licence details. Where licensing is decisive, write "check licence".
- Write clearly and without filler. Keep product terms such as environment, Dataverse, DLP and managed environment in English.

The five strategies:
[Paste the text of this page from "Which strategy fits you?" to the fifth strategy here.]
```

## Sources

- [Microsoft Learn: Role-based security roles for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/database-security)
- [Microsoft Learn: Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
- [Microsoft Learn: Develop a tenant environment strategy to adopt Power Platform at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Automatic environment cleanup](https://learn.microsoft.com/en-us/power-platform/admin/automatic-environment-cleanup#developer-environments)

To place makers in stages, see the guide [Citizen developers in the organisation](/knowledge/citizen-developer-guide/).

Guidance only, not legal or licensing advice. Check licence and product details before you implement.
