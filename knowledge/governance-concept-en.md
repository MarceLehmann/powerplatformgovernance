---
layout: page
title: "Power Platform governance concept: where to start"
description: "Five building blocks in a fixed order: admin role, environment strategy, data policies, roles and responsibility, ongoing control. With the first step for each block and the way to every guide on this site."
lang: en
toc: true
permalink: "/knowledge/governance-concept/"
translation_url: "/de/knowledge/governance-concept/"
last_reviewed: "2026-11-15"
---

A governance concept for Power Platform consists of five decisions that build on each other. This page puts them in order, names the first step for each block and takes you to the guides that go into detail.

[Diese Seite auf Deutsch lesen](/de/knowledge/governance-concept/) | [Back to the knowledge overview](/knowledge/)

## TL;DR

Start with the person who is responsible, not with a tool. Environments come next, then data policies, then roles, and ongoing control comes last. Data policies apply per environment, roles take effect inside environments, and you can only check what you have defined. Hence the order. A small company does not need a dedicated team for this. It needs a named person, one page with the decisions and a fixed monthly review.

In the Power Platform documentation Microsoft describes governance as the policies, practices and tools an organisation uses to manage and control the platform, and lists seven practices for it. The five building blocks below are a recommendation from practice that arranges those practices for small and medium-sized companies.

## The order at a glance

| Step | Building block | Done when |
|---|---|---|
| 1 | Define the admin role | two people are responsible by name and cover for each other |
| 2 | Environment strategy | it is clear what the default environment is for and where business solutions run |
| 3 | Data policies | every environment is covered by at least one policy |
| 4 | Roles and responsibility | every business solution has two owners and makers know how to request things |
| 5 | Ongoing control | a monthly review with fixed figures is in the calendar |

## 1. Define the admin role

The first practice Microsoft lists is to designate an administrative role that oversees operations and ensures compliance. Without that person the later decisions wait.

**Your first step:** Name a lead and a deputy with the Power Platform administrator role. Write down who decides on new environments and on connector approvals.

- [Building a governance strategy: the 25 questions every company has to answer](/knowledge/governance-questions-top-25/)
- [Three access-control habits that quietly undo everything else](/en/posts/gov-access-control-basics/)
- [Expensive isn't building. Expensive is not knowing.](/en/posts/gov-licensing-governance/)

## 2. Environment strategy

The environment is the unit that policies, backups and capacity attach to. Microsoft recommends a strategy for creating, managing and decommissioning environments and treats the default environment as a separate topic, because everyone in the tenant can build there.

**Your first step:** Decide what the default environment is for and create one production environment for business solutions. The page with the five strategies helps you choose.

- [Five environment strategies for Power Platform compared](/knowledge/environment-strategies/)
- [Configure once, govern many: the environment features you are already paying for](/en/posts/gov-environment-lifecycle-automation/)
- [If you can't roll back, you're not deploying, you're gambling](/en/posts/gov-test-to-prod-discipline/)
- [Quality gates beat quality hopes: enforcing solution checker on import](/en/posts/gov-solution-checker-enforcement/)
- [Storage exceeded: what happens to your environments](/knowledge/storage-overage/)

## 3. Data policies

Data policies define which connectors can be used in which environment. They come after the environment strategy because their scope is made of environments. Without your own configuration the tenant has no policy.

**Your first step:** Create a baseline policy that covers all environments except the ones you exclude on purpose, and set the default group for new connectors deliberately.

- [DLP policies: what you must configure](/knowledge/dlp-policies/)
- [From classic data policies to advanced connector policies](/knowledge/advanced-connector-policies/)
- [DLP is a guardrail, not a wall: the mechanics that matter](/en/posts/gov-dlp-in-practice/)
- [Your data gateway is a single point of failure until you cluster it](/en/posts/gov-data-gateway-ownership/)

## 4. Roles and responsibility

Microsoft distinguishes Power Platform admins, who define the rules, environment admins, who implement them in their environment, and makers, who build within the rules. For a small company this means: every business solution has named owners, and makers know how to request an environment or a connector.

**Your first step:** Record two owners for every business solution and publish the request path in a place makers will find.

- [Dataverse security roles: the five you need to know, and when you need them](/knowledge/dataverse-security-roles/)
- [Citizen developers in your organization: from personal environment to shared solution](/knowledge/citizen-developer-guide/)
- [Two names per solution, always: ownership that survives offboarding](/en/posts/gov-ownership-offboarding/)
- [A disabled owner does not disable the flow](/en/posts/gov-disabled-owner-zombie-flows/)
- [The only manual that ever existed walked home at 5 PM](/en/posts/gov-documentation-debt/)
- [Three self-service controls most tenants never turn on](/en/posts/gov-self-service-governance-controls/)
- [Shadow IT isn't a discipline problem, it's a latency problem](/en/posts/gov-shadow-it-root-cause/)

## 5. Ongoing control

Microsoft calls this reactive governance: watch what appears in the tenant and respond to findings. That covers ownerless resources, inactive resources and high-value solutions in the default environment. What is new is asking these questions in plain language in Power Platform Admin in Cowork.

**Your first step:** Set a monthly review and track fixed figures. The article on shadow IT suggests which ones.

- [Detect and measure shadow IT in Power Platform](/knowledge/detect-shadow-it/)
- [Asking governance questions in Power Platform Admin in Cowork](/knowledge/cowork-governance-questions/)
- [The governance report you don't have to build yourself](/en/posts/gov-weekly-coe-rhythm/)
- [Monitoring that nobody reads is just decoration](/en/posts/gov-monitoring-readiness/)
- [An agent can pass every test and still give a bad answer](/en/posts/gov-ai-agent-governance/)
- [AI costs compared: AI Builder, Copilot Credits, Azure AI Foundry, Document Intelligence](/knowledge/ai-cost-comparison/)
- [AdminHelper starter set: ten flows that report on your tenant by email](/flows/)

## What belongs on one page

A concept that gets read fits on one page. A recommendation from practice for its content:

1. Who is the Power Platform administrator, and who is the deputy?
2. Which environments exist and what is each one for?
3. Which data policy applies where, and who approves a new connector?
4. How does a maker request an environment, a connector or a licence, and how fast is the answer?
5. Which figures does who look at on which day of the month?

The [25 questions for a governance strategy](/knowledge/governance-questions-top-25/) supply the answers for that page. You can work through them with an AI of your choice and end up with a draft.

## Sources

Statements checked against Microsoft Learn on 15 November 2026. The order of the five building blocks, the "Done when" column and the section "What belongs on one page" are recommendations from practice, not Microsoft's wording.

- [Microsoft Learn: Power Platform governance overview and strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/admin-best-practices)
- [Microsoft Learn: Manage Power Platform adoption at scale](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/govern-at-scale)
- [Microsoft Learn: Implement reactive governance controls](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/reactive-governance)
- [Microsoft Learn: Agentic governance with Power Platform Admin in Cowork](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/agentic-governance)
- [Microsoft Learn: Implement a data policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)

Orientation only, not legal or licensing advice. Check licence and product details before you implement anything.
