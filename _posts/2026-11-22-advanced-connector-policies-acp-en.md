---
title: "Advanced connector policies (ACP): what they are, where to set them and what can break"
description: "ACP replaces Business, Non-Business and Blocked with a strict allowlist. Where you set it, when it takes effect, why leftover rules are a trap, one case from my own tenant and a checklist."
date: "2026-11-22T00:10:00Z"
author: marcel_lehmann
lang: en
toc: true
tags:
  - dlp
  - security
  - governance
  - environments
content_type: original_article
permalink: "/en/posts/advanced-connector-policies-acp/"
translation_url: "/de/posts/advanced-connector-policies-acp/"
faq:
  - question: "What are advanced connector policies in the Power Platform?"
    answer: "A connector control with a strict allowlist. Everything not explicitly allowed is blocked, including new connectors. Rules reach down to single actions and triggers of certified connectors."
  - question: "Do advanced connector policies replace classic DLP?"
    answer: "Not completely. They cover certified connectors only. Custom connectors and the HTTP connector stay with classic DLP. In mixed mode both apply and the stricter rule wins."
  - question: "Does the rule disappear when I remove an environment from the group?"
    answer: "No. The environment keeps its last ACP rule. Removing the rule on the group does not clear it in the environments either. Remove it per environment or through the API."
---

## TL;DR

Advanced connector policies (ACP) are the new connector control of the Power Platform. Instead of sorting connectors into Business, Non-Business and Blocked, ACP uses a strict allowlist: whatever is not explicitly allowed is blocked, and so is every connector that appears later. You set the rules per environment group or per single environment in the Power Platform admin center, and they apply as soon as you save or publish. Two things catch admins out. An environment that leaves a group keeps its last ACP rule. And an allowlist can break functions nobody thought about, such as the Approvals connector or a single SharePoint action. Open your environment groups and look at the rules.

Status: 22 November 2026, based on Microsoft Learn. The design-time check is still being rolled out in stages, so check the linked pages for the current state.

## What ACP is

ACP replaces the classification model Business, Non-Business and Blocked of classic data loss prevention (DLP) with a strict allowlist.

- **Default deny:** everything that is not explicitly allowed is blocked. New connectors are blocked automatically.
- **Control down to actions and triggers:** this includes internal actions. For the SharePoint connector, for example, the action "Send an HTTP request to SharePoint" can be allowed or blocked on its own.
- **MCP servers:** they can be blocked as a whole.
- **Certified connectors only:** ACP does not cover custom connectors or the HTTP connector. They stay with classic DLP. Virtual connectors are never supported.
- **Managed Environments:** there ACP can also block connectors that classic DLP cannot block.

| | Advanced connector policies | Classic DLP |
|---|---|---|
| Model | Strict allowlist, default deny | Business, Non-Business, Blocked |
| Granularity | Connectors, actions and triggers, including internal actions. MCP servers as a whole | Classification per connector, actions via connector action control |
| Covered connectors | Certified connectors only | Also custom connectors and the HTTP connector |
| Managed Environments | Can also block connectors that classic DLP cannot block | Some connectors cannot be blocked |

## Where you set it

You can set ACP for an environment group or for a single environment.

- **Environment group:** Power Platform admin center, Manage, Environment groups, open the group, Rules, Advanced connector policies. Then select "Publish rules".
- **Single environment:** admin center, Security, Data and privacy, Advanced connector policies.

At the top you see the status **Applied** or **Not applied**. The button **Remove rule** switches ACP off for that scope. When you publish a group, the history of each environment in it shows an entry "Update Managed Environment Settings". That entry is the trace to look for.

Rules can also be managed through an API. Microsoft Learn describes this in a programmability tutorial, linked under sources.

## When it takes effect

- **Immediately:** on saving for a single environment, on publishing for a group.
- **Mixed mode (default):** ACP and classic DLP apply together, and the stricter rule wins. ACP-only mode is optional.
- **Design time or runtime:** the check while building is being rolled out in stages, first Power Automate, then Copilot Studio, then Power Apps. Where it is not live yet, a blocked connector only shows at runtime. A flow can save fine and fail later.

## Why an allowlist

Three properties explain the appeal.

- New connectors are blocked until someone allows them. Nothing new becomes usable by itself.
- Control reaches below the connector. You can allow a connector and still block individual actions.
- On Managed Environments ACP can block connectors that classic DLP cannot block.

A tenant that wants a short, deliberate list of allowed building blocks gets that with ACP. The price is that the list needs care.

## Effects and pitfalls

- **Leftover rules:** an environment you remove from the group keeps its last ACP rule. "Remove rule" on the group also does not remove the rule from the environments. To switch ACP off, remove it per environment, or use the API.
- **Environment routing:** Environment Routing can place new developer environments in a group with ACP automatically.
- **Partial allowance has side effects:** if you allow a connector only with certain actions, every other action is blocked. That includes internal actions and actions that appear in the future. Visible functions can break this way.
- **Late errors:** where the design-time check is not live yet, the error shows on saving or in the run, not while building.
- **Two rule sets:** in mixed mode you have to read ACP and classic DLP together. The stricter one wins, so a connector that classic DLP allows can still fail because of ACP.

## My experience

This week, in my own tenant, two things stopped working in a sandbox and demo environment (a Managed Environment): the Approvals connector and the action "Send an HTTP request to SharePoint". The errors showed up on saving and in the run.

The cause was an ACP allowlist published on the Default Environment Group. The change was visible on 20 November 2026. Who set it, I have not been able to find out, so I make no claim about it.

Taking the environment out of the group did not help. It kept the rule, which matches what Microsoft Learn describes.

My solution for the sandbox: remove ACP there, or allow the connectors I need. For customer and production environments I use ACP deliberately, with a list I maintain myself.

## Checklist

1. Open Environment groups in the admin center. Check the Rules of each group for "Advanced connector policies" and a status of Applied.
2. Check the history of your environments for the entry "Update Managed Environment Settings".
3. Test important flows that use Approvals, SharePoint HTTP requests or rarely used connectors.
4. Maintain the allowlist deliberately: only what is needed. Run a pilot in mixed mode first.
5. For sandbox and dev, decide whether ACP is needed there at all. If not, remove the rule per environment.
6. Custom connectors and HTTP stay under classic DLP. Keep those policies up to date.

## Sources

- [Microsoft Learn: Advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies)
- [Microsoft Learn: Programmability tutorial for advanced connector policies](https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies)

On this site: [From classic data policies to advanced connector policies](/knowledge/advanced-connector-policies/) covers the move step by step, including mixed mode and ACP-only.

Guidance only, not legal or licensing advice. The experience described comes from my own tenant and has no connection to any customer.
