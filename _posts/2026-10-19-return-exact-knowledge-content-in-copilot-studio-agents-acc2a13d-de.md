---
title: Exakte Inhalte aus Wissensquellen in Copilot Studio ausgeben
description: Drei Methoden in Copilot Studio geben unveränderte Wissensauszüge aus,
  wenn Zusammenfassungen genehmigte Richtlinien oder Leistungsinhalte abschwächen
  könnten.
date: '2026-10-19T16:55:53Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- compliance
- dataverse
content_type: curated_summary
curation_id: acc2a13dfa6884faa27bfc2e
image:
  path: "/assets/img/curated/acc2a13dfa6884faa27bfc2e.png"
  alt: 'Governance-Karte: Approved content must stay exact. Do not let the agent summarize
    what users need verbatim.'
permalink: "/de/posts/return-exact-knowledge-content-in-copilot-studio-agents-acc2a13d/"
translation_url: "/en/posts/return-exact-knowledge-content-in-copilot-studio-agents-acc2a13d/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-studio-defeating-oversummarization/
source_site_url: https://microsoft.github.io/
source_title: 'Defeating Oversummarization in AI Agents: How to Deliver Exact Content
  from Knowledge Sources'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Doug Bellingeri
source_published_at: '2026-01-23'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie gibt Copilot Studio unveränderte SharePoint-Wissensresultate aus?
  answer: Verwendet Custom Search mit einem AI Prompt, der die Suchresultate erhält
    und unveränderte Zitate ohne Zusammenfassung anfordert. Der Ablauf kann zusätzlich
    Quellenangaben einfügen.
- question: Was macht der Knoten Generate a Search Query in Copilot Studio?
  answer: Er schreibt eine Benutzeranfrage mit relevantem Gesprächskontext neu, bevor
    sie an einen AI Prompt gesendet wird. Dadurch erhält der Prompt eine spezifischere
    Anfrage.
- question: Welche Copilot-Studio-Methode ist gegen Übersummarization am konsistentesten?
  answer: Custom Search mit einem Topic und AI Prompt war im beschriebenen Test am
    konsistentesten. Die Methode bot ausserdem die genaueste Kontrolle über Suche,
    Abfrageerstellung und Prompting.
---

## TL;DR

Copilot Studio kann unveränderte Wissensauszüge über Custom Search mit einem AI Prompt, reine Agentenanweisungen oder eine Kombination aus Anweisungen und AI Prompt ausgeben. Methode 1 lieferte die konsistentesten Ergebnisse und die genaueste Kontrolle. Methode 2 war weniger konsistent und konnte zusätzlich eine Zusammenfassung ausgeben. Modell, Geschwindigkeit und Kosten beeinflussen die Auswahl.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt Custom Search, Generate a Search Query und einen AI Prompt, wenn exakte Auszüge und Quellenangaben wichtig sind, denn diese Methode bot die konsistenteste Kontrolle.
- Admins/CoE: Testet Modell und Orchestrierungsmuster, weil die Antworttreue variiert und sich Einrichtung, Geschwindigkeit und Agentenkosten unterscheiden.
- Security/Compliance: Verhindert Zusammenfassungen, wenn genehmigte Richtlinien oder Leistungsinhalte unverändert ausgegeben werden müssen.
