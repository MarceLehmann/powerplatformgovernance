---
layout: page
title: "AI costs compared: AI Builder, Copilot Credits, Azure AI Foundry, Document Intelligence"
description: "Compare unit list prices, licensing requirements and use from Power Automate for AI Builder, Copilot Credits, Azure AI Foundry and Document Intelligence."
lang: en
toc: true
permalink: "/knowledge/ai-cost-comparison/"
translation_url: "/de/knowledge/ai-cost-comparison/"
last_reviewed: "2026-10-23"
---

Compare costs per prompt, document page and text volume, along with the requirements for use from Power Automate.

[Diesen Beitrag auf Deutsch lesen](/de/knowledge/ai-cost-comparison/) | [Back to the knowledge overview](/knowledge/)

## TL;DR

This comparison shows USD list prices for AI Builder, Copilot Credits, Azure AI Foundry and Azure AI Document Intelligence, without discounts, as of October 2026. AI Builder uses annually prepaid Tier 1 monthly capacity, while Copilot Credits use pay-as-you-go; prompts assume 1,000 tokens with 90% input and 10% output. An invoice page costs $0.016 with AI Builder, $0.080 with Copilot Credits and $0.010 with Document Intelligence. The Foundry mapping to basic and premium is an assumption; the premium example costs $0.0038 in Foundry, compared with $0.091 with AI Builder and $0.100 with Copilot Credits.

## Prices per unit

All amounts are USD per stated unit. Prompt values are estimates under the assumptions below.

| Capability (unit) | AI Builder | Copilot Credits | Azure AI Foundry | Document Intelligence |
| --- | --- | --- | --- | --- |
| Basic model prompt (1,000 tokens) | $0.0006 | $0.001 | $0.0011 (GPT-5.4 mini, assumed) | not compared |
| Standard model prompt (1,000 tokens) | $0.012 | $0.015 | no fixed mapping | not compared |
| Premium model prompt (1,000 tokens) | $0.091 | $0.100 | $0.0038 (GPT-5.4, assumed) | not compared |
| Invoice/receipt/ID (1 page) | $0.016 | $0.080 | not compared | $0.010 (Prebuilt) |
| Contract/health insurance card (1 image; Document Intelligence: 1 page) | $0.016* | $0.080* | not compared | $0.010 (Prebuilt) |
| Custom document processing (1 page) | $0.050 | $0.080 | - | $0.030 (Custom Extraction) |
| Text recognition OCR (1 page) | $0.0015 | $0.001 | not compared | $0.0015 (Read) |
| Object detection (1 image) | $0.004 | $0.080 | not compared | not compared |
| Image description (1 image) | $0.016* | $0.080* | not compared | not compared |
| Simple text analysis: sentiment, language, key phrases (1,000 characters) | $0.001 | $0.001 | not compared | not compared |
| Advanced text analysis: categories, entities (1,000 characters) | $0.010 | $0.015 | not compared | not compared |
| Text translation (1,000 characters) | $0.011 | $0.015 | not compared | not compared |

Source and date, AI Builder: [Capability Rate Table](https://learn.microsoft.com/en-us/ai-builder/administer-licensing), October 2026, accessed 23.10.2026.

Source and date, Copilot Credits: [Capability Rate Table](https://learn.microsoft.com/en-us/ai-builder/administer-licensing), [credit management](https://learn.microsoft.com/en-us/ai-builder/message-management) and [Copilot Studio Billing Rates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), October 2026, accessed 23.10.2026.

Source and date, Azure AI Foundry: [Azure Retail Prices API](https://prices.azure.com/api/retail/prices) and [Azure OpenAI pricing](https://azure.microsoft.com/en-us/pricing/details/azure-openai/), Global Standard, queried 23.10.2026.

Source and date, Document Intelligence: [Azure Retail Prices API](https://prices.azure.com/api/retail/prices) and [pricing page](https://azure.microsoft.com/en-us/pricing/details/ai-document-intelligence/), pay-as-you-go S0, Sweden Central, queried 23.10.2026.

*Contract processing and image description are free while in preview. The table shows their regular rates. For contracts and health insurance cards, it compares a price per image with a price per page.

Object detection and image description belong to Azure AI Vision. Text analysis and translation use Azure AI Language and Translator respectively. These services are outside this comparison.

Additional Document Intelligence rates for S0 in Sweden Central:

| Model | USD per 1,000 pages | USD per page |
| --- | --- | --- |
| Read (OCR) | $1.50; from 1 million pages per month $0.60 | $0.0015 before the volume tier |
| Prebuilt | $10.00 | $0.010 |
| Layout | $10.00 | $0.010 |
| Custom Extraction | $30.00 | $0.030 |
| Add-on Query Fields | $10.00 | $0.010 |
| Add-on High Resolution, Font, Formula | $6.00 | $0.006 |
| Custom Classification | $3.00 | $0.003 |

The free F0 tier includes 500 pages per month. Training a custom template model is free.

## Assumptions and conversion

1 Copilot Credit equals $0.01 with pay-as-you-go. AI Builder uses the annually prepaid Tier 1 add-on with 1 million credits per month for $500 per month. This gives $0.0005 per AI Builder Credit. Prepaid monthly capacity and pay-as-you-go are not fully equivalent comparisons.

A prompt here contains 1,000 tokens: 900 input and 100 output. The exact AI Builder rates per 1,000 tokens for input/output are 1/3 credits for basic, 20/60 for standard and 140/560 for premium. Microsoft also charges a hidden system prompt of approximately 1,200 input tokens. The prompt examples exclude it. You can read actual usage from promptTokens and completionTokens in the output of “Run a prompt”.

Copilot rates for “Text and generative AI tools” are basic 0.1, standard 1.5 and premium 10 credits per 1,000 tokens, 1,000 characters or page, depending on the capability. “Content processing tools” cost 8 credits per page or image. Agent Flow Actions cost an additional 13 Copilot Credits per 100 actions.

Microsoft does not publish a model mapping for basic, standard and premium. For Foundry, we assume basic = GPT-5.4 mini and premium = GPT-5.4. There is no fixed mapping for standard here.

| Foundry model, Global Standard | Input per 1 million tokens | Output per 1 million tokens |
| --- | --- | --- |
| GPT-5.4 mini | $0.75 | $4.50 |
| GPT-5.4 | $2.50 | $15.00 |

For GPT-5.4 mini, 900 × $0.75 / 1,000,000 + 100 × $4.50 / 1,000,000 = $0.000675 + $0.00045 = $0.001125, rounded to $0.0011. For GPT-5.4, 900 × $2.50 / 1,000,000 + 100 × $15.00 / 1,000,000 = $0.00225 + $0.0015 = $0.00375, rounded to $0.0038.

Azure prices can vary by region and deployment type: Global, Data Zone or Regional. Azure bills through the Azure subscription rather than Power Platform licences. Setup, operation and troubleshooting are excluded, as are network/storage costs and support.

## AI Builder licensing status

New customers must buy Copilot Credits. Existing customers can only renew or increase the AI Builder add-on until **1 November 2026**.

From 1 November 2026, new or renewed Power Platform and Dynamics 365 licences no longer include seeded AI Builder Credits.

AI Builder actions are premium connectors. A flow containing such an action requires a premium licence; in Power Apps, the app becomes a premium app. With pay-as-you-go, the Cloud Flow Run meter applies separately from credit consumption.

In Copilot Studio, agents and Agent Flows always use Copilot Credits for AI Builder capabilities. Power Apps and Power Automate consume AI Builder Credits first, then Copilot Credits.

## How to use it from Power Automate

### AI Builder

Use AI Builder actions such as “Run a prompt” or actions for invoices, receipts, OCR and custom document models.
The flow is a premium flow and requires a premium licence and available credit capacity.
It consumes AI Builder Credits first, then Copilot Credits; promptTokens and completionTokens show prompt usage.

### Copilot Credits

Use the same AI Builder actions in a premium flow when the environment has no AI Builder Credits; in Copilot Studio, prompt tools and Agent Flows always use Copilot Credits.
Obtain capacity through a prepaid pack or pay-as-you-go with an Azure subscription linked to the environment; the AI Builder flow requires a premium licence.
View consumption in the Power Platform Admin Center. When usage exceeds 125 percent of prepaid capacity, agents are suspended and new Agent Flow runs are blocked.

### Azure AI Foundry

The “Azure OpenAI” connector is Premium in Power Automate, Power Apps and Copilot Studio; use “Creates a completion for the chat message” with a deployment ID and API version.
You need an Azure subscription and a resource with a model deployment; authenticate with an API key or Microsoft Entra ID.
The connector does not support images in message content or function calling. Alternatively, use the premium HTTP action against the resource endpoint for newer features.

### Azure AI Document Intelligence

The “Azure AI Document Intelligence (form recognizer)” connector is Standard in Power Automate and Copilot Studio and unavailable in Power Apps.
Use “Analyze Document for Prebuilt or Custom models (v4.x API)” with a model ID such as prebuilt-invoice, prebuilt-receipt, prebuilt-idDocument, prebuilt-read, prebuilt-layout or a custom model.
You need a Document Intelligence resource in the Azure portal; authenticate with its endpoint and API key or Entra ID. The premium HTTP action is an alternative.

## When each option makes sense

Assessment by KMUpower, not a statement by Microsoft. Unit prices exclude setup, operation and troubleshooting effort.

| Criterion | Assessment by KMUpower |
| --- | --- |
| Few documents or prompts, low setup effort | AI Builder or Copilot Credits are quick to start, require no Azure subscription and no key management. View consumption centrally in the Admin Center. New customers can only use Copilot Credits. |
| Many document pages | Use Document Intelligence directly: an invoice page costs $0.010 instead of $0.080 with Copilot Credits or $0.016 with AI Builder, making it 8 or 1.6 times cheaper respectively. You need an Azure resource, keys or Entra access, and your own error handling in the flow. |
| Very many prompts or specific model choices | Direct Foundry use offers model choice and parameters, with billing against Azure credit. Token pricing has no markup and no system prompt charge. |
| Data protection and region | With Foundry, you choose the resource and region. Entra ID access is possible instead of a shared key. |

## Sources

1. [AI Builder Capability Rate Table](https://learn.microsoft.com/en-us/ai-builder/administer-licensing), accessed 23.10.2026.
2. [Copilot Credits for AI Builder](https://learn.microsoft.com/en-us/ai-builder/message-management), accessed 23.10.2026.
3. [Copilot Studio Billing Rates](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), accessed 23.10.2026.
4. [AI Builder Credits and licensing](https://learn.microsoft.com/en-us/ai-builder/credit-management), accessed 23.10.2026.
5. [Prompt tokens](https://learn.microsoft.com/en-us/ai-builder/licensing-prompt-tokens), accessed 23.10.2026.
6. [Azure Retail Prices API](https://prices.azure.com/api/retail/prices), [Azure OpenAI pricing](https://azure.microsoft.com/en-us/pricing/details/azure-openai/) and [Document Intelligence pricing](https://azure.microsoft.com/en-us/pricing/details/ai-document-intelligence/), accessed 23.10.2026.
7. [Azure OpenAI connector](https://learn.microsoft.com/en-us/connectors/azureopenai/), accessed 23.10.2026.
8. [Azure AI Document Intelligence (form recognizer) connector](https://learn.microsoft.com/en-us/connectors/formrecognizer/), accessed 23.10.2026.

## Frequently asked questions

### Can you still buy the AI Builder add-on as a new customer?

No. New customers must buy Copilot Credits. Existing customers can renew or increase the add-on until 1 November 2026.

### Does every Document Intelligence flow need a premium HTTP action?

No. The Document Intelligence connector is Standard in Power Automate. The alternative HTTP action is Premium.

### Why might your prompt consume more tokens than the example?

Microsoft adds a hidden system prompt of approximately 1,200 tokens to AI Builder input. The examples only count 900 input and 100 output tokens.

### Do tests and training cost anything?

Tests in Prompt Builder and on the AI Models page, as well as training, are free. Business card reader and Prediction are also free. Document Intelligence offers F0 with 500 pages per month and free training for custom template models.

### Is Foundry premium the same model as AI Builder premium?

Microsoft does not publish this mapping. Using GPT-5.4 as the counterpart to premium is an assumption here.
