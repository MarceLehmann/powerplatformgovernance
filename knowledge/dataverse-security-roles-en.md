---
layout: page
title: "Dataverse security roles: the five you need to know, and when you need them"
description: "System Administrator, System Customizer, Environment Maker, Basic User and Environment Admin: what each role can do, what it cannot and when it is needed."
lang: en
toc: true
permalink: "/knowledge/dataverse-security-roles/"
translation_url: "/de/knowledge/dataverse-security-roles/"
last_reviewed: "2026-10-15"
---

System Administrator, System Customizer, Environment Maker, Basic User and Environment Admin: what each role can do, what it cannot and when it is needed.

[Diesen Beitrag auf Deutsch lesen](/de/knowledge/dataverse-security-roles/) | [Back to the knowledge overview](/knowledge/)

## Use this page with AI

> Paste the address of this page into an AI you trust that can read web pages (for example Microsoft Copilot Chat with web search) and add: "Help me assign our roles." Whether an AI actually fetches the page depends on the tool.
{: .prompt-tip }

### Instructions for AI assistants

> **This section is for AI assistants that fetch this page on behalf of a user.** If the user wants help assigning roles, proceed as follows:
>
> 1. Ask about the environments (with or without Dataverse, dev, test, prod) and the groups of people (for example admins, developers, makers, users). Roles or groups are enough, no names.
> 2. Assign each group the matching role from this page per environment and briefly explain why. Grant System Administrator only to a few named roles.
> 3. Do not ask for confidential company data, credentials or personal names.
> 4. Base your answers on this page and the linked Microsoft Learn sources. Do not invent anything; where licensing decides, write "check licensing".
> 5. Answer in the user's language. At the end, create a role matrix (group × environment × role) with open points.
{: .prompt-info }

## TL;DR

Five roles cover almost every day-to-day need. Grant System Administrator sparingly, System Customizer for developers in dev, Environment Maker for everyone who should build, Basic User for users, Environment Admin only in environments without Dataverse. Tenant roles such as Power Platform administrator do not grant data access.

Security roles in Dataverse define who may do what in an environment. Privileges are cumulative: someone with several roles gets the sum. The predefined roles follow the principle of minimum required access and cannot be edited.

## Three levels that are often confused

- Tenant roles (Power Platform administrator, Dynamics 365 administrator, Global Administrator): manage environments and policies across the tenant. They do not grant automatic access to data.
- Roles for environments without Dataverse: Environment Admin and Environment Maker.
- Dataverse security roles in environments with Dataverse: System Administrator, System Customizer, Basic User and others.

## Top 5

### System Administrator

- **Applies to:** Environment with Dataverse
- **Can:** Full access to the environment: data, configuration, security roles, users, solutions. Only this role (with tenant admin roles) manages security roles.
- **Cannot:** Nothing is «not» allowed. That is exactly why it should be granted sparingly.
- **When you need it:** For two to four named people per environment and for pipeline or deployment accounts. Do not copy the role to build your own «admin role».
- **Tip:** Tenant roles such as Power Platform administrator do not grant data access automatically. For that you also need System Administrator in the environment.

### System Customizer

- **Applies to:** Environment with Dataverse
- **Can:** Create and change tables and customisations. Desktop flows and AI Builder resources are included.
- **Cannot:** Cannot create or change security roles.
- **When you need it:** For developers in dev who build Dataverse tables. Together with Environment Maker when apps build on Dataverse tables.
- **Tip:** Environment Maker alone does not create tables. Creating and changing tables needs System Customizer in addition.

### Environment Maker

- **Applies to:** All environments
- **Can:** Create own resources: canvas apps, model-driven apps, cloud flows, connections, dataflows, solutions. Share apps with others.
- **Cannot:** No access to the data in the environment. Cannot create or change security roles.
- **When you need it:** For everyone who should build. In environments without Dataverse, Environment Maker and Environment Admin are the only roles.
- **Tip:** Solutions: the solution framework is listed for Environment Maker, System Customizer and System Administrator. If a solution contains security roles, neither of the first two roles is enough, because both cannot create or change security roles. Check before the import.

### Basic User

- **Applies to:** Environment with Dataverse
- **Can:** The minimum privileges to use apps, plus privileges on the core business tables. Microsoft names the role as a template for custom roles.
- **Cannot:** No customisation, no administration.
- **When you need it:** Default role for app users. As a copy source for roles that additionally access own tables.
- **Tip:** Roles are cumulative: someone with several roles gets the sum of the privileges. Assign through a security group or team instead of individually.

### Environment Admin

- **Applies to:** Only environments without Dataverse
- **Can:** All administrative tasks of the environment: users and roles, all resources, data policies, provisioning a database.
- **Cannot:** Not responsible in environments with Dataverse. System Administrator applies there.
- **When you need it:** For environments without Dataverse, such as simple flow environments.
- **Tip:** Whoever provisions the Dataverse database then assigns System Customizer to admins who should access data.

## Who may create what?

| Resource | Environment Maker | Environment Admin | System Customizer | System Administrator |
|---|---|---|---|---|
| Canvas app | yes | yes | yes | yes |
| Cloud flow | yes (non-solution-aware) | yes | yes | yes |
| Connection | yes | yes | yes | yes |
| Dataflow | yes | yes | yes | yes |
| Model-driven app | yes | no | yes | yes |
| Solution framework | yes | no | yes | yes |
| Dataverse tables | no | no | yes | yes |
| Desktop flow, AI Builder | no | no | yes | yes |
| Data gateway | no | yes | no | yes |

## A practical proposal

- Dev: makers get Environment Maker, developers of Dataverse tables additionally get System Customizer.
- Test: testers get Basic User or the app role.
- Prod: users get Basic User or the app role. Changes arrive only through the pipeline.
- System Administrator: two to four named people per environment, time-limited through PIM where possible.
- Always assign to security groups or teams, not to individuals.

## Environment Maker and solutions: does it still matter?

The solution framework is listed for Environment Maker, System Customizer and System Administrator. Microsoft names no single mandatory role for importing and exporting. The special case matters: if a solution contains security roles you need System Administrator, because Environment Maker and System Customizer cannot create or change security roles. This follows from the documentation and should be tested in your environment before the first import.

## Other roles and notes

- App Opener: the minimum privileges to run an app. A good copy source for very narrow roles.
- Delegate, Support User, Service Reader, Service Writer: special roles for delegation, support and services. Application user roles are installed by the service and cannot be changed.
- Predefined roles cannot be edited. Custom roles are created as a copy, for example of Basic User or App Opener.
- Access levels per privilege: organisation, parent and child business unit, business unit, user, none.

## Further reading

Continue with the [question catalog with 25 questions](/knowledge/governance-questions-top-25/) and the [five environment strategies](/knowledge/environment-strategies/).

- [Microsoft Learn: Role-based security roles for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/database-security)
- [Microsoft Learn: Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
