---
title: 'Copilot Studio Credits: Lizenzbefreiungen, Kosten und Fristen'
description: Copilot Studio nutzt seit 3. August 2026 verbrauchsbasierte Copilot Credits;
  bestehende Agents wechseln bis 1. September.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- copilot-studio
content_type: curated_summary
curation_id: 7b922a1f74a4194071720757
image:
  path: "/assets/img/curated/7b922a1f74a4194071720757.png"
  alt: 'Governance-Karte: Copilot licenses do not always exempt agent usage. Building
    and testing can consume credits too.'
permalink: "/de/posts/copilot-studio-credits-licence-exemptions-costs-and-deadlines-7b922a1f/"
translation_url: "/en/posts/copilot-studio-credits-licence-exemptions-costs-and-deadlines-7b922a1f/"
source_url: https://www.andersjensen.org/en/articles/copilot-studio-pricing/
source_site_url: https://www.andersjensen.org/
source_title: 'Copilot Studio Pricing 2026: Credits Explained + Calculator'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-08-12'
source_type: article
faq:
  - question: "Was kostet ein Copilot Credit und wie kaufe ich ihn?"
    answer: "Ein Credit kostet standardmässig einen Cent und liegt in einem gemeinsamen Pool des Tenants. Es gibt drei Modelle: Pay-as-you-go zu einem Cent pro Credit mit monatlicher Abrechnung, ein Kapazitätspaket mit 25 000 Credits für 200 Dollar im Monat und einen Pre-Purchase-Plan mit Jahresvorauszahlung, 5 bis 20 Prozent Mengenrabatt und mindestens 300 000 Credits."
  - question: "Ab wann ist das Kapazitätspaket günstiger als Pay-as-you-go?"
    answer: "Ab etwa 20 000 Credits im Monat. Das Paket für 200 Dollar entspricht 20 000 Credits zu je einem Cent, darunter gewinnt Pay-as-you-go. Ungenutzte Paket-Credits verfallen beim monatlichen Zurücksetzen ohne Übertrag, der effektive Preis pro Credit steigt also, wenn du das Paket nicht ausschöpfst."
  - question: "Wie viele Credits verbrauchen typische Aktionen in Copilot Studio?"
    answer: "Tenant-Graph-Grounding kostet 12 Credits pro Antwort, andere Wissensquellen wie Dateien, Websites und Dataverse 2 Credits pro Antwort, ein Werkzeugaufruf 5 Credits und Agent-Flows 13 Credits pro 100 einzelne Aktionen. KI-Prompts kommen je nach Stufe Basic, Standard oder Premium mit Aufschlägen dazu. Die Werte stammen aus dem Credits Guide vom August 2026."
  - question: "Befreit eine Microsoft-365-Copilot-Lizenz Agenten von Credits?"
    answer: "Nur bei den klassischen Harnesses. Interne Benutzer mit einer solchen Lizenz erhalten bei Standard- und Copilot-Chat-Agenten die B2E-Ausnahme. Beim GitHub-Copilot-Harness gilt sie nicht, dort zahlst du Credits beim Bauen und im Betrieb. Konkrete Raten für diesen Harness hat Microsoft nicht veröffentlicht, auch für das Erstellen in natürlicher Sprache fehlen sie."
  - question: "Wer teilt sich das Credit-Budget mit Copilot-Studio-Agenten?"
    answer: "Copilot Cowork, Dynamics 365 und Work IQ ziehen aus demselben Pool des Tenants, Agenten konkurrieren also mit den Cowork-Nutzern um ein Budget. Der Autor merkt an, dass dir das vorher niemand sagt. Vor dem 3. August 2026 erstellte Agenten behalten ihre alten Preise bis zum 1. September 2026 und wechseln dann auf Credit-Abrechnung."
---

## TL;DR

Copilot Studio nutzt Copilot Credits auf Mandantenebene. Tenant Graph Grounding kostet 12 Credits pro Antwort, anderes Wissen 2 und Tool-Aufrufe 5. Microsoft-365-Copilot-Lizenzen befreien interne lizenzierte Nutzende nur bei klassischen Harnesses. Der GitHub-Copilot-Harness berechnet Erstellen, Tests und Laufzeit; konkrete neue Tarife sind nicht veröffentlicht.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Verbrauch für Agent, Tests und Evaluierungen vor der Bereitstellung kalkulieren, da Credits mandantenweit geteilt werden und der GitHub-Copilot-Harness bereits beim Erstellen und zur Laufzeit abrechnet.
- Leadership/Business: Pay-as-you-go mit Kapazitätspaketen von 25.000 Credits anhand des tatsächlichen Monatsbedarfs vergleichen, weil ungenutzte Paket-Credits monatlich verfallen.
- Security/Compliance: Klassische und GitHub-Copilot-Harness-Agents bei Lizenzprüfungen unterscheiden, weil die Befreiung für interne Nutzende beim neuen Harness nicht gilt.
