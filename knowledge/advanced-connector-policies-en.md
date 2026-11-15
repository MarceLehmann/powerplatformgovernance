---
layout: page
title: "From classic data policies to advanced connector policies"
description: "What changes with the allowlist, what advanced connector policies do not cover yet, when the move pays off and how to run both models side by side in mixed mode."
lang: en
toc: true
permalink: "/knowledge/advanced-connector-policies/"
translation_url: "/de/knowledge/advanced-connector-policies/"
last_reviewed: "2026-11-15"
---

Advanced connector policies (ACP) replace the Business, Non-business and Blocked groups with an allowlist. This page shows what you gain, what you still need the classic policy for and the steps to move without locking makers out of their work.

[Diese Seite auf Deutsch lesen](/de/knowledge/advanced-connector-policies/) | [Back to the knowledge overview](/knowledge/)

How classic policies are structured is covered on [DLP policies: what you must configure](/knowledge/dlp-policies/). This page does not repeat that and builds on it.

## TL;DR

In an ACP every connector you do not explicitly allow is blocked. New connectors from Microsoft are blocked automatically, so the question of the default group disappears. In managed environments ACP also blocks connectors that classic policies cannot block, such as SharePoint or Dataverse. ACP applies to certified connectors only: it does not cover custom connectors and HTTP yet, and it will not cover the virtual connectors of Copilot Studio. You still need the classic policy for those. The move pays off first for the default environment and for environments with a short, stable connector list.

## What changes

| Topic | Classic data policy | Advanced connector policy |
|---|---|---|
| Basic stance | Every connector sits in one of three groups | Allowlist, everything else is blocked |
| New connectors | land in the default group | are blocked until you allow them |
| New actions of a connector | depends on the connector action control setting | blocked once you have defined the allowed actions of a connector |
| Nonblockable connectors | Business or Non-business only | can be blocked in managed environments |
| Scope | tenant or environment, several policies overlap | one effective ACP per environment, set directly or inherited from an environment group |
| View of actions | triggers, internal and deprecated actions not visible | tagged as such and can be blocked individually |

ACP also lists MCP servers. You can block an MCP server as a whole, but not yet individual tools inside it.

## What ACP does not cover

ACP applies to certified connectors only. Four gaps follow from that.

- **Custom connectors and HTTP connectors.** Microsoft plans a separate rule type for them. Until then you govern them with the classic policy and, for HTTP, with endpoint filtering.
- **Virtual connectors of Copilot Studio**, meaning channels and knowledge sources. According to Microsoft ACP will not support virtual connectors in the future either. The Copilot Studio ones get their own rules outside ACP. Until then the classic policy stays in charge.
- **Desktop flow virtual connectors.** They are becoming certified connectors and can then be governed through ACP.
- **Environments that are not managed.** ACP works there on a single environment, but the nonblockable connectors stay nonblockable.

If you use agents, custom connectors or HTTP, you therefore need both models.

## Mixed mode and ACP-only

- **Mixed mode** is the state after you turn ACP on. Classic policies and ACP are evaluated together, and the most restrictive combination applies. Microsoft recommends this mode while you migrate.
- **ACP-only** evaluates the ACP alone. Classic policies remain stored but no longer take effect in that environment or group. You turn the mode on per environment group or per environment with the rule "Advanced connector policies only".

In mixed mode a block can come from either system. That makes troubleshooting harder for makers and admins. Keep the state short, but switch to ACP-only only when the environment no longer needs anything that only the classic policy governs.

## When the move pays off

A recommendation from practice, derived from the properties above.

**Move early:**

- A default environment that is a managed environment. Microsoft recommends blocking all connectors there and points to ACP for it, because only ACP also blocks the nonblockable connectors.
- Environments with a short connector list that rarely changes, for example a production environment with a few business solutions.
- Tenants where nobody has time to classify new connectors continuously. The allowlist takes that work off you.

**Wait:**

- Environments where agents are published through Copilot Studio channels or where custom connectors and HTTP carry the load. You would only add a second system.
- Developer environments where makers keep trying new connectors. Every addition to the list would be a request.

## Moving in six steps

1. **Build the list.** In the admin center inventory, read from the **Connectors** column which connectors the apps, flows and agents of the environment use today. That becomes your allowlist.
2. **Start with one environment.** In the admin center open **Security** > **Data and privacy** > **Advanced connector policies** and pick a pilot environment.
3. **Curate the list, then save.** The nonblockable connectors are preloaded as allowed. Add your list and remove what should be blocked. The ACP takes effect as soon as you save: everything that is not allowed is blocked.
4. **Leave the classic policy in place.** That puts you in mixed mode. Watch for two weeks which messages reach makers.
5. **Roll out to groups.** For several environments you set the ACP under **Manage** > **Environment groups** > select the group > **Rules** and publish with **Publish rules**. Environment groups can only contain managed environments.
6. **ACP-only comes last.** Switch when the environment needs neither custom connectors nor HTTP nor Copilot Studio channels through the classic policy.

## Three pitfalls

- **Rule removed from the group, block stays.** If you remove the ACP from an environment group, or an environment from the group, the environments keep their last ACP. Microsoft does this on purpose so that connectors do not become unblocked unnoticed. To lift it, remove the rule per environment with **Remove rule** or through the Power Platform API.
- **Runtime and design time.** Enforcement while building arrives in stages: first in the Power Automate maker portal, then in Copilot Studio, then in Power Apps. Until then ACP only takes effect there at runtime. According to Microsoft, design-time enforcement in a portal marks general availability of ACP for that workload.
- **"Allowed" counter higher than the list.** The counter also includes entries that no longer resolve to a current certified connector, for example after a connector was retired.

## Read on

- [DLP policies: what you must configure](/knowledge/dlp-policies/)
- [DLP is a guardrail, not a wall: the mechanics that matter](/en/posts/gov-dlp-in-practice/)
- [Five environment strategies for Power Platform compared](/knowledge/environment-strategies/)
- [Power Platform governance concept: where to start](/knowledge/governance-concept/)

## Sources

Statements checked against Microsoft Learn on 15 November 2026. The section "When the move pays off", the two-week observation period and the order of the six steps are recommendations from practice, not Microsoft's wording.

- [Microsoft Learn: Advanced connector policies](https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies)
- [Microsoft Learn: Data policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
- [Microsoft Learn: Connector classification](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification)
- [Microsoft Learn: Environment groups](https://learn.microsoft.com/en-us/power-platform/admin/environment-groups)
- [Microsoft Learn: Power Platform inventory](https://learn.microsoft.com/en-us/power-platform/admin/power-platform-inventory)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)

Orientation only, not legal or licensing advice. Check licence and product details before you implement anything.
