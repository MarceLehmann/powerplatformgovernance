---
title: 'Viele KI-Assistenten, ein Fundament: Was der Exchange-Ausfall über geteilte
  Abhängigkeiten verrät'
description: Der Exchange-Online-Ausfall im November 2026 zeigte, dass Copilot, Claude
  und ChatGPT auf demselben Microsoft-365-Estate aus Daten, Berechtigungen und Verfügbarkeit
  laufen.
date: '2026-11-13T16:43:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- security
content_type: curated_summary
curation_id: e86335935b78e723b0c6dc1d
image:
  path: "/assets/img/curated/e86335935b78e723b0c6dc1d.png"
  alt: 'Governance-Karte: Every AI assistant inherits your permissions and your downtime.
    The models differ, the foundation does not.'
permalink: "/de/posts/many-ai-assistants-one-foundation-what-the-exchange-outage-revealed-e8633593/"
translation_url: "/en/posts/many-ai-assistants-one-foundation-what-the-exchange-outage-revealed-e8633593/"
source_url: https://rencore.com/en/blog/many-ai-assistants-one-foundation/
source_site_url: https://rencore.com/
source_title: Many AI assistants, one foundation
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Matthias Einig
source_published_at: '2026-11-13'
source_updated_at: '2026-11-13'
source_type: article
faq:
- question: Hat der Exchange-Online-Ausfall im November 2026 auch den Zugriff von
    Claude und ChatGPT auf Microsoft 365 betroffen?
  answer: Berichten zufolge waren die Microsoft-365-Konnektoren betroffen, mit denen
    diese Assistenten auf Postfächer und Dateien zugreifen; auch Copilot stand auf
    der Liste.
- question: Wer sollte eine App oder einen KI-Agenten besitzen, wenn der Erbauer das
    Unternehmen verlassen hat?
  answer: Eine aktive, namentlich genannte Person von heute, nicht die Person, die
    gebaut hat und gegangen ist. Dauert das Mapping eine Woche, fehlt Governance,
    nicht Resilienz.
- question: Wie vielen Organisationen fehlen die Governance-Kontrollen für den Einsatz
    von KI-Agenten im grossen Stil?
  answer: Laut Gartner sagen 80 Prozent der Organisationen, dass ihnen die Kontrollen
    fehlen, um KI-Agenten im grossen Stil einzusetzen.
---

## TL;DR

Während des über 16-stündigen Exchange-Online-Ausfalls vom 12. November 2026 stand Microsoft 365 Copilot auf der Liste der betroffenen Dienste, und Berichten zufolge auch die Konnektoren, mit denen andere Assistenten auf Postfach und Dateien zugreifen. Claude und ChatGPT nutzen dieselben SharePoint-Websites, Postfächer und Entra-ID-Identitäten wie Copilot, drei Assistenten bedeuten also eine geteilte Abhängigkeit. Gartner: 26 Prozent gegen 3 Prozent Copilot-Wert, 80 Prozent fehlen Agent-Kontrollen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Weiten Sie Incident-Reviews auf drei Fragen aus: Was ist auf Microsoft 365 gebaut, einschliesslich Flows, Apps und Agents ausserhalb der IT, worauf greift jedes zu, und wer besitzt es aktiv?
- Security/Compliance: Assistenten lesen mit den bereits gewährten Berechtigungen, jede Freigabe-Lücke wird zum KI-Risiko; Berechtigungen bereinigen, bevor weitere Assistenten folgen.
- Leadership/Business: Claude oder ChatGPT neben Copilot diversifiziert nicht, solange alles auf einem Microsoft-365-Estate liegt; Inventar und Ownership finanzieren, bevor Agents skaliert werden.
- Makers: Für jeden Flow, jede App und jeden Agenten eine aktive, namentlich genannte Person als Besitzer benennen, damit die Wiederherstellung nicht an Verlassenen scheitert.
