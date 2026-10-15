---
layout: page
title: "DLP policies: what you must configure"
description: "Default group for new connectors, the minimum set of policies, recommendations per environment strategy, a checklist and common mistakes."
lang: en
toc: true
permalink: "/knowledge/dlp-policies/"
translation_url: "/de/knowledge/dlp-policies/"
last_reviewed: "2026-10-15"
---

Default group for new connectors, the minimum set of policies, recommendations per environment strategy, a checklist and common mistakes.

[Diesen Beitrag auf Deutsch lesen](/de/knowledge/dlp-policies/) | [Back to the knowledge overview](/knowledge/)

## Use this page with AI

> Copy the address of this page into an AI you trust that can read web pages (for example Microsoft Copilot Chat with web search) and add: "Propose a DLP setup for us." Whether an AI actually fetches the page depends on the tool. If your AI does not read web pages: copy the prompt below and paste in the text of this page.
{: .prompt-tip }

### Instructions for AI assistants

> **This section is for AI assistants that fetch this page for a user.** If the user asks you for a DLP setup, proceed as follows:
>
> 1. Explain the goal in two sentences: a proposal for how many DLP policies (data policies) are needed, which environments they apply to and how connectors are grouped, including the default group for new connectors.
> 2. Ask one at a time: which environment strategy applies or is planned (one of the five strategies on /knowledge/environment-strategies/ or their own), which environments exist (default, production, sandbox, developer), what kinds of data are processed (for example personal data, financial data, public data), which connectors are used today or needed, whether custom connectors, HTTP, desktop flows or Copilot Studio are in use, and whether Managed Environments are active. Ask follow-up questions if an answer is unclear.
> 3. Propose a setup based on the sections "Minimum set" and "Recommendations per environment strategy": number of policies, scope per policy (all environments, selected, all except), Business, Non-business and Blocked groups per policy and the default group per policy with reasons. Mark what Microsoft Learn documents and what is a recommendation from practice, as this page does.
> 4. Do not ask for confidential company data such as names of people, customers or systems, credentials, tenant IDs or internal figures. Only ask for what the user wants to share.
> 5. Base your work on the content and the Microsoft Learn sources of this page. Do not invent anything, including connector names. Do not state prices or licence details that are not on this page; where licensing is decisive, write "check licence".
> 6. Reply in the user's language.
> 7. Finally, summarise the setup: per policy the name, scope, default group and the key connectors per group, plus open points and the items from this page's checklist that are still missing.
{: .prompt-info }

## TL;DR

Out of the box a tenant has no DLP policy, so every connector can be combined with every other. Set at least one baseline policy that covers all environments except deliberate exclusions, so new environments are protected right away. Set the default group for new connectors consciously in every policy: Blocked for the default environment policy, Non-business for the others. Keep the number of policies per environment small, because several policies combine into the most restrictive grouping.

In the Power Platform admin center Microsoft now calls DLP policies "data policies". They are the same thing.

## The three groups in one sentence each

- **Business:** connectors for business data. In an app, flow or agent they can only be combined with each other.
- **Non-business:** connectors for non-business data. They too can only be combined with each other.
- **Blocked:** these connectors cannot be used at all where the policy applies.

The names "Business" and "Non-business" carry no meaning of their own. What matters is which connectors sit in the same group. A new policy initially places all connectors in Non-business.

## Mandatory: the default group for new connectors

### What it means

Every policy has a default group (in the admin center "Set default group"). Every connector that Microsoft adds to the platform **after** the policy was created lands in this group. Out of the box it is Non-business. You can change it to Business or Blocked.

### What happens when Microsoft adds new connectors

- **Default group Non-business:** the new connector is usable at once, but only together with other Non-business connectors. It cannot be combined with your Business connectors.
- **Default group Business:** the new connector can work with your business data at once, without anyone having reviewed it. This is the riskiest setting.
- **Default group Blocked:** the new connector stays blocked until an admin classifies it. Exception: new connectors that cannot be blocked still land in Non-business.
- **Desktop flow modules:** they are only enforced if you explicitly assign them to a group. Unassigned modules are not blocked, even if the default group is Blocked.

### Our recommendation and why

- **Policy for the default environment: Blocked.** Microsoft recommends this explicitly, so that new connectors stay unusable there until an admin has reviewed them. Every person in the company has access to the default environment.
- **All other policies: Non-business.** This is the recommendation in the general documentation: leave new connectors in Non-business and move them to Business or Blocked only after a review. That way they cannot reach business data and do not break existing solutions.
- **Never Business as the default group.** Microsoft advises against it. An unreviewed connector could be combined with your business data straight away.
- **Recommendation from practice:** baseline policies that, as Microsoft suggests, block everything except Microsoft 365 and standard services should also use Blocked as the default group. Otherwise the block list gets holes with every new connector. Schedule a regular review of new connectors.

## Minimum set: how many policies?

Zero is too few. Without a policy, apps, flows and agents can combine any connector with any other. The same applies to every environment you exclude from all policies.

Microsoft suggests the following setup as a starting point. Counting it as "at least two, often three" is a recommendation from practice.

1. **Baseline policy, restrictive.** Scope "Exclude certain environments": all environments except production and deliberate exclusions. Allows Microsoft 365 and standard services, blocks everything else. It automatically applies to the default environment and to every newly created environment.
2. **Policy for production.** Scope "Add multiple environments": only the selected production environments. You define the connectors with the business unit or project.
3. **Optional: policy for shared productivity or exception environments.** Somewhat more open than the baseline, for example with Azure services, for environments whose maker list you control.

For the default environment Microsoft recommends a separate, strict policy. If it is a Managed Environment, even blocking all connectors, which is possible with advanced connector policies.

### How policies overlap

- All policies that apply to an environment are evaluated together. There is no strict hierarchy between tenant and environment policies.
- **Blocked always wins.** If a single policy blocks a connector, it is blocked in that environment.
- For Business and Non-business the most restrictive grouping applies. Three policies can split the connectors into up to eight groups that cannot be mixed. That is why Microsoft recommends as few policies per environment as possible.
- Environment policies cannot override tenant policies, they can only add restrictions.

### Scope

- **Add all environments:** all environments, including new ones.
- **Add multiple environments:** only the selected ones.
- **Exclude certain environments:** all except the selected ones, including new ones.
- **Environment policy:** exactly one environment. Environment Admins can create them; in environments with Dataverse, System Administrator is required. Tenant policies need the Power Platform Administrator role.

Microsoft recommends central control through tenant policies and using environment policies only for custom connectors or exceptions.

## Recommendations per environment strategy

The strategies are described on the page [Five environment strategies](/knowledge/environment-strategies/). The mapping below is a recommendation from practice based on the Microsoft recommendations above. For all of them: the default environment is strict, with Blocked as its default group.

- **1. Lean:** baseline policy for everything except production, including default. One policy only for production with the connectors your business solutions need. Do not exclude the sandbox from all policies, or everything is allowed there.
- **2. Three stages per solution:** dev somewhat more open for trying things, test and prod with the same grouping, so a solution does not suddenly violate a policy when it moves to prod.
- **3. Maker sandbox with routing:** new developer environments are created all the time. You therefore need a policy with "Exclude certain environments" or rules through environment groups, so every new environment is covered at once. Advanced connector policies can be rolled out through environment groups.
- **4. By department:** one policy per protection need, not per department. Areas with sensitive data such as HR or finance get a stricter policy with a short Business list.
- **5. Regional or regulatory:** one policy per region. Block connectors to services outside the region or restrict them with endpoint filtering. Tenant isolation complements this for connectors that use Microsoft Entra sign-in.

## What to allow and what to block

### Connectors you cannot block

Some connectors cannot be blocked with classic data policies, only assigned to Business or Non-business. They include the Microsoft 365 standard connectors such as SharePoint, OneDrive for Business, Office 365 Outlook, Microsoft Teams, Excel Online (Business), Planner and Power BI, and core platform connectors such as Dataverse, Approvals, Notifications and Microsoft Copilot Studio. With advanced connector policies they can still be blocked in Managed Environments. In environments that are not managed they remain unblockable.

Office 365 Outlook can send email and cannot be blocked. For this Microsoft recommends Exchange rules that block email from apps and flows to external recipients.

### HTTP connectors

HTTP, HTTP Webhook and "When an HTTP request is received" can be classified like any other connector. In the default environment Microsoft recommends Non-business or Blocked, and dedicated environments with a restricted maker list for HTTP. Note: according to Microsoft Learn, the classification of the HTTP connectors can affect child flows. Test this before you block HTTP.

### Connector endpoint filtering

For some connectors you define which targets are allowed: HTTP, HTTP with Microsoft Entra ID, HTTP Webhook, SQL Server, Azure Blob Storage, SMTP, and Browser Automation and UI Automation in desktop flows. The rules are an ordered list of Allow and Deny; the last rule is always `*`, Allow by default. The feature is in preview. It only applies to static endpoints, not to values from variables or environment variables.

### Connector action control

For blockable connectors you allow or block individual actions, for example allow reading, block changing. You also decide whether new actions of the connector are allowed or blocked automatically. This is not available for unblockable connectors or custom connectors. Triggers can only be controlled through PowerShell.

### Custom connectors

- **Tenant policy:** classification by host URL patterns, as an ordered list. The last rule `*` is set to "Ignore" by default. Custom connectors can then be combined with Business and Non-business, as long as no other policy classifies them.
- **Environment policy:** classification one by one by name. Unclassified custom connectors fall into the default group.
- **Default environment:** Microsoft recommends blocking all URL patterns and allowing individual APIs on purpose only, always over HTTPS.

### Desktop flows

For desktop flow modules to appear in policies, turn on "Show desktop flow actions in DLP policies" in the tenant settings. This setting cannot be changed afterwards. Then check every policy: modules only take effect if you explicitly assign them to a group, and non-compliant desktop flows are suspended.

### Copilot Studio

Data policies apply to agents in all tenants; exemptions are no longer possible. Important connectors for agents:

- Block "Chat without Microsoft Entra ID authentication in Copilot Studio" if agents should only be reachable with sign-in.
- Knowledge sources: "Knowledge source with public websites and data", "Knowledge source with SharePoint and OneDrive" and "Knowledge source with documents", each "in Copilot Studio".
- Channels: for example "Direct Line channels in Copilot Studio" for websites and custom apps.
- Blocking HTTP also blocks the "HTTP request" node in agents.

Microsoft points out that newer Copilot Studio connectors usually land in the default group Non-business. Another reason to set the default group on purpose.

## Checklist

- [ ] Inventory: which environments exist, which connectors are in use
- [ ] Baseline policy created with "Exclude certain environments" or "Add all environments"
- [ ] Default environment covered by a strict policy
- [ ] Default group set on purpose in every policy: Blocked for default, otherwise Non-business
- [ ] No environment excluded from all policies, except with a documented reason
- [ ] At most two policies per environment (recommendation from practice)
- [ ] Unblockable connectors assigned to Business or Non-business on purpose
- [ ] HTTP connectors classified, child flows tested
- [ ] Endpoint filtering for HTTP, SQL Server and SMTP reviewed
- [ ] Rule for custom connectors (URL patterns) set, `*` not left on Ignore where that is not intended
- [ ] Desktop flow modules made visible and classified
- [ ] Copilot Studio connectors (sign-in, knowledge sources, channels) classified
- [ ] Error message with contact and link to your rules set (`Set-PowerAppDlpErrorSettings`)
- [ ] Policies and exception process documented for makers, for example in the Power Platform hub
- [ ] Impact checked before saving: which apps, flows and agents will violate the policy
- [ ] Regular review of new connectors scheduled

## Common mistakes

- **No policy.** None exists out of the box. Every connector can be combined with every other.
- **Default group never looked at.** New connectors land unreviewed in Non-business and are usable at once, including in the default environment.
- **Business as the default group.** Unreviewed connectors combine with your business data straight away.
- **Test or dev environments excluded from all policies.** No rule applies there at all.
- **Too many overlapping policies.** Connectors fall apart into many small groups and makers no longer understand the error messages.
- **Policy changed without checking.** Existing flows are suspended within 24 hours and connections disabled.
- **Desktop flow modules turned on but not classified.** They have no effect, or desktop flows are suspended unexpectedly if you overlooked the new modules when saving.
- **Relying on endpoint filtering although makers use variables.** Dynamic endpoints are not checked.

## Prompt for the AI you trust

For AI tools that do not read web pages: copy the prompt, replace the last line with the text of this page from "The three groups in one sentence each" to "Common mistakes" and paste it into your AI. Review the result as a team before you implement it.

```text
You are an experienced consultant for Microsoft Power Platform governance. Help me set up our DLP policies (data policies).

Approach:
1. Ask me one at a time: our environment strategy, which environments exist, what kinds of data we process, which connectors we use, whether custom connectors, HTTP, desktop flows or Copilot Studio are in use, and whether Managed Environments are active. Ask follow-up questions if an answer is unclear.
2. Propose a setup: number of policies, scope per policy, Business, Non-business and Blocked groups, and the default group for new connectors per policy, each with reasons.
3. At the end, summarise: per policy the name, scope, default group and key connectors per group, plus open points and missing checklist items.

Rules:
- Use only my answers, the text below and established knowledge of Power Platform. Do not invent anything, including connector names.
- Do not ask for confidential company data. I share what I want to share.
- Do not state prices and do not invent licence details. Where licensing is decisive, write "check licence".
- Write in English, clearly and without filler.

The text of the page:
[Paste the text of this page from "The three groups in one sentence each" to "Common mistakes" here.]
```

## Further reading

The mechanics behind the default group, action control and endpoint filtering are explained in the post [DLP is a guardrail, not a wall](/en/posts/gov-dlp-in-practice/). See also [five environment strategies](/knowledge/environment-strategies/) and [the 25 governance strategy questions](/knowledge/governance-questions-top-25/).

## Sources

All statements checked against Microsoft Learn on 15.10.2026. Points marked "recommendation from practice" are not taken word for word from Microsoft.

- [Microsoft Learn: Data policies](https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention)
- [Microsoft Learn: Manage data policies](https://learn.microsoft.com/en-us/power-platform/admin/prevent-data-loss)
- [Microsoft Learn: Connector classification](https://learn.microsoft.com/en-us/power-platform/admin/dlp-connector-classification)
- [Microsoft Learn: Combined effect of multiple data policies](https://learn.microsoft.com/en-us/power-platform/admin/dlp-combined-effect-multiple-policies)
- [Microsoft Learn: Connector endpoint filtering (preview)](https://learn.microsoft.com/en-us/power-platform/admin/connector-endpoint-filtering)
- [Microsoft Learn: Connector action control](https://learn.microsoft.com/en-us/power-platform/admin/connector-action-control)
- [Microsoft Learn: Advanced connector policies](https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies)
- [Microsoft Learn: Implement a data policy strategy](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/dlp-strategy)
- [Microsoft Learn: Secure the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/secure-default-environment)
- [Microsoft Learn: Data loss prevention (DLP) policy creation in Power Automate](https://learn.microsoft.com/en-us/power-automate/prevent-data-loss)
- [Microsoft Learn: Configure data policies for agents in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)

Guidance only, not legal or licensing advice. Check licence and product details before you implement.
