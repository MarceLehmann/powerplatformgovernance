---
title: Conversation IDs für Copilot Studio Agents abrufen
description: Mit dem passenden Debug-Befehl rufen Nutzer die Conversation ID eines
  Custom oder Declarative Agents ab und übermitteln sie an den Support.
date: '2026-10-19T16:55:56Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- ownership
content_type: curated_summary
curation_id: ff37005e9e42ea140df8f5f4
image:
  path: "/assets/img/curated/ff37005e9e42ea140df8f5f4.png"
  alt: 'Governance-Karte: Every agent chat needs a traceable identifier. Get the Conversation
    ID before asking for help.'
permalink: "/de/posts/get-conversation-ids-for-copilot-studio-agents-ff37005e/"
translation_url: "/en/posts/get-conversation-ids-for-copilot-studio-agents-ff37005e/"
source_url: https://microsoft.github.io/mcscatblog/posts/conversationid-users/
source_site_url: https://microsoft.github.io/
source_title: How to Get Your Conversation ID When Chatting with Agents
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Chris Garty
source_published_at: '2026-01-24'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie rufe ich die Conversation ID eines Custom Agents in Copilot Studio
    ab?
  answer: Gib im Chat /debug conversationid ein. Der Agent zeigt danach die Conversation
    ID dieser bestimmten Sitzung an.
- question: Welcher Befehl zeigt die Conversation ID eines Declarative Agents in Microsoft
    365 Copilot?
  answer: Gib in Microsoft 365 Copilot /debug ein. Der Agent zeigt eine Debugging-Karte
    mit der Conversation ID an.
- question: Welche Angaben gehören zu einer Supportanfrage mit einer Copilot Studio
    Conversation ID?
  answer: Sende die Conversation ID, Ort und Zeitpunkt der Nutzung sowie den erwarteten
    und den tatsächlich eingetretenen Ablauf.
animation:
  src: /assets/img/animations/ff37005e9e42ea140df8f5f4-de.gif
  poster: /assets/img/animations/ff37005e9e42ea140df8f5f4-de.poster.png
  width: 800
  height: 450
  alt: "Die Abfolge zeigt den Debug-Befehl im Chat, den Erhalt der Conversation ID oder Debugging-Karte und das Senden der ID mit Ort, Zeitpunkt sowie erwartetem und tatsaechlichem Verhalten an den Support."
---

## TL;DR

Bei Custom Agents zeigt Microsoft 365 Copilot, Teams oder eine andere Chatoberfläche nach /debug conversationid die Conversation ID an. Bei Declarative Agents wird in Microsoft 365 Copilot mit /debug eine Debugging-Karte geöffnet, die diese ID enthält. Für Support sollten Nutzer ID, Ort und Zeitpunkt sowie erwartetes und tatsächliches Verhalten angeben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt die Conversation ID, um die genaue Agentsitzung eines gemeldeten Problems zu finden und die Nutzerinteraktion zu untersuchen.
- Admins/CoE: Fordert ID, verwendete Chatoberfläche, Zeitpunkt sowie erwartetes und tatsächliches Ergebnis an, damit Support die relevante Unterhaltung gezielt untersuchen kann.
- Security/Compliance: Behandelt den vollständigen Gesprächszugriff als berechtigungsabhängig. Makers sehen Gespräche ihrer eigenen Agents, während Admins und Supportmitarbeitende passende Rollen oder Datenzugriffsrechte benötigen.
