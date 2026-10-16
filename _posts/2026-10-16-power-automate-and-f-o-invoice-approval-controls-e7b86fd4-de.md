---
title: Power Automate und F&O für kontrollierte Rechnungsfreigaben
description: F&O sperrt die Buchung weiterhin, während Power Automate Rechnungsfreigaben
  in Teams bereitstellt.
date: '2026-10-16T06:11:54Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
- dataverse
- copilot-studio
content_type: curated_summary
curation_id: e7b86fd4d679a211229e84be
image:
  path: "/assets/img/curated/e7b86fd4d679a211229e84be.png"
  alt: 'Governance-Karte: Keep F&O posting controls. Put approvals in Teams.'
permalink: "/de/posts/power-automate-and-f-o-invoice-approval-controls-e7b86fd4/"
translation_url: "/en/posts/power-automate-and-f-o-invoice-approval-controls-e7b86fd4/"
source_url: https://www.karlex.fi/power-automate-approvals-vs-fo-workflows-three-ways-to-approve-the-same-invoice/
source_site_url: https://www.karlex.fi/
source_title: 'Power Automate approvals vs F&O workflows: three ways to approve the
  same invoice'
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-16'
source_type: article
faq:
- question: Wie verarbeitet das Zusammenspiel aus F&O-Workflow und Power-Automate-Geschäftsereignis
    Kreditorenrechnungen?
  answer: Es nutzt den Trigger bei Auftreten eines Geschäftsereignisses, während der
    F&O-Workflow die Buchung weiterhin sperrt.
- question: Warum muss eine Power-Automate-Genehmigung für F&O im Kontext der genehmigenden
    Person laufen?
  answer: Andernfalls entsteht ein Auditproblem in der Genehmigungshistorie, auch
    wenn F&O seinen eigenen Workflowverlauf behält.
- question: Welches Zeitlimit gilt für Power-Automate-Genehmigungen bei Rechnungsentscheidungen?
  answer: Power-Automate-Genehmigungen enden nach 30 Tagen. Bei längeren Entscheidungen
    kann am 29. Tag eine neue Genehmigung gestartet werden.
---

## TL;DR

Bei Kreditorenrechnungen bleibt der F&amp;O-Workflow bestehen, damit keine Buchung vor der Genehmigung erfolgt. Power Automate wird durch das Geschäftsereignis ausgelöst und übermittelt die Entscheidung an Teams. Virtuelle Dataverse-Tabellen lesen Lieferantendaten ohne Datenkopie. Genehmigungen müssen im Kontext der tatsächlich genehmigenden Person laufen, F&amp;O-Lizenzen beachten und das 30-Tage-Limit einplanen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Den F&amp;O-Workflow bei Power Automate beibehalten, weil er die Buchung sperrt und den F&amp;O-Workflowverlauf erhält.
- Security/Compliance: Sicherstellen, dass der Flow im Kontext der tatsächlich genehmigenden Person arbeitet, sonst entsteht ein Auditproblem.
- Leadership/Business: F&amp;O-Teammitgliedslizenzen für Genehmigende in Teams einplanen, weil die Lizenzierung den Datenzugriff betrifft.
