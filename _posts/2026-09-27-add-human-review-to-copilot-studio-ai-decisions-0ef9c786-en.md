---
title: Add human review to Copilot Studio AI decisions
description: Use Copilot Studio and SharePoint to route unmatched loan purposes to
  a human reviewer through Outlook or Teams, then record the decision and rationale.
date: '2026-09-27T22:56:07Z'
author: governance_editorial
lang: en
toc: false
tags:
- copilot-studio
- governance
- ownership
content_type: curated_summary
curation_id: 0ef9c7863178b432cf0fbe98
image:
  path: "/assets/img/curated/0ef9c7863178b432cf0fbe98.png"
  alt: 'Governance card: Risky AI decisions need a human in the loop. Unexpected cases
    should not pass unattended.'
permalink: "/en/posts/add-human-review-to-copilot-studio-ai-decisions-0ef9c786/"
translation_url: "/de/posts/add-human-review-to-copilot-studio-ai-decisions-0ef9c786/"
source_url: https://www.matthewdevaney.com/copilot-studio-ask-for-human-review-on-ai-decisions/
source_site_url: https://www.matthewdevaney.com/
source_title: 'Copilot Studio: Ask For Human Review On AI Decisions'
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-09-27'
source_type: article
faq:
  - question: "How does the agent in the loan example decide when a person has to review?"
    answer: "The agent compares the stated loan purpose with a list of pre-evaluated purposes. If a match exists, it returns that exact purpose and its category. If none exists, it returns an empty string and the category Human-Review. A condition in the flow then checks whether the category is Human-Review and sends only those applications to a loan officer."
  - question: "Which SharePoint lists does the loan review flow need?"
    answer: "Two lists. The applications list holds the full legal name, the requested amount and the loan purpose. The purposes list holds nine pre-evaluated purposes with the category Allowed or Flagged, for example education as allowed and cryptocurrency trading as flagged. After the review, three more columns are added for the decision, a human-reviewed flag and the rationale."
  - question: "What does the human review action collect and how does it reach the right person?"
    answer: "The flow sends an Outlook message titled Action Required together with the applicant's name. It states the loan purpose that matched no category and asks for a decision, yes to approve or no to flag. The person fills in two fields, the decision and a rationale. Submitting them lets the flow continue, and both values are then stored."
  - question: "How does the flow record human and automated decisions in SharePoint?"
    answer: "After a human review, an expression sets the decision field to Allowed for yes and otherwise to Flagged, the human-reviewed flag to yes, and the rationale is copied over. In the else branch the flow takes the agent's category, sets the flag to no and leaves the rationale blank. Both paths update the same application item in the SharePoint list."
  - question: "What happens in the author's test of the human review flow?"
    answer: "The author submits a loan application, and the workflow decides that a human review is needed. The loan officer receives an email with a form, fills in the decision and the rationale and submits it. The agent waits for this response and then moves on. Finally, the flow records the loan decision, the human-review status and the rationale in the SharePoint list."
---

## TL;DR

Copilot Studio can compare a loan purpose with a SharePoint list of Allowed and Flagged categories. If no match exists, the agent returns Human-Review, sends an Outlook or Teams review request, waits for a Yes or No decision and rationale, and updates the SharePoint application record.

{% include curated-attribution.html %}

## Governance takeaway

- Makers: Define explicit Allowed and Flagged categories, and configure the agent to return Human-Review when no exact match exists so uncertain cases do not receive an unattended decision.
- Admins/CoE: Assign the human review action to a named reviewer and store the decision, review status, and rationale in SharePoint so the workflow remains traceable.
- Leadership/Business: Identify decisions that are too risky for an agent to make alone and ensure reviewers can respond before the process continues.
