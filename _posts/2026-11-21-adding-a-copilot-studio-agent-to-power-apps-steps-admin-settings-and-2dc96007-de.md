---
title: 'Copilot Studio Agent in Power Apps einbinden: Schritte, Admin-Einstellungen
  und Grenzen'
description: 'Schritt für Schritt: Copilot Studio Agent veröffentlichen, Microsoft
  365 Copilot pro Umgebung und App aktivieren und die aktuellen Grenzen kennen.'
date: '2026-11-21T16:38:04Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- power-apps
- copilot-studio
content_type: curated_summary
curation_id: 2dc960073f29719dc46b39ac
image:
  path: "/assets/img/curated/2dc960073f29719dc46b39ac.png"
  alt: 'Governance-Karte: Old controls are gone. Environment settings now decide how
    agents reach your apps.'
permalink: "/de/posts/adding-a-copilot-studio-agent-to-power-apps-steps-admin-settings-and-2dc96007/"
translation_url: "/en/posts/adding-a-copilot-studio-agent-to-power-apps-steps-admin-settings-and-2dc96007/"
source_url: https://www.spguides.com/add-copilot-studio-agent-to-power-apps/
source_site_url: https://www.spguides.com/
source_title: How to Add a Copilot Studio Agent to Power Apps (2026)
source_name: SPGuides
source_language: en
source_language_name: English
source_author: Bijay Kumar
source_published_at: '2026-11-21'
source_type: article
faq:
- question: Ist das Chatbot-Steuerelement in Power Apps Studio noch verfügbar?
  answer: Nein. Es ist aus dem Einfügen-Bereich verschwunden, und seit dem 2. Februar
    2026 lässt sich das Copilot-Steuerelement nicht mehr in neue Canvas-Apps einfügen.
- question: Welche Einstellung im Power Platform Admin Center aktiviert Microsoft
    365 Copilot für Canvas-Apps?
  answer: Im Admin Center unter Copilot den Eintrag Microsoft 365 Copilot öffnen und
    Canvas-Apps für die gewählte Umgebung auf On stellen.
- question: Kann ein Copilot Studio Agent SharePoint-Listendaten aus einer Canvas-App
    ändern?
  answer: Nicht über Copilot allein, denn Copilot in Apps ist rein lesend; der Agent
    braucht eigene Tools wie einen Agent Flow zum Ändern von Datensätzen.
---

## TL;DR

Das Chatbot-Steuerelement ist aus Power Apps Studio verschwunden, und seit dem 2. Februar 2026 lässt sich das Copilot-Steuerelement nicht mehr in neue Canvas-Apps einfügen. Der unterstützte Weg: Den Agent in Teams und Microsoft 365 veröffentlichen, Microsoft 365 Copilot von einem Admin für die Umgebung aktivieren, die Einstellung in der App einschalten und die App veröffentlichen. Regionale Bereitstellung, Lizenzpflicht und nur lesende Antworten gelten weiter.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Alte Chatbot-Control-Anleitungen verwerfen, den Agent über die Kanäle Teams und Microsoft 365 veröffentlichen und die M365-Copilot-Einstellung in der App auf make.preview.powerapps.com einschalten.
- Admins/CoE: Microsoft 365 Copilot im Power Platform Admin Center pro Umgebung aktivieren, prüfen, dass der Mandant Dataverse-Daten in Microsoft Copilot erlaubt und Dataverse Search eingeschaltet ist, und Lizenzen kontrollieren.
- Security/Compliance: Copilot in Apps liest Daten nur, Änderungen brauchen eigene Agent-Tools wie Agent Flows, was den Prüfumfang verändert.
- Leadership/Business: Die Vorschau kommt regional gestaffelt und erfordert Microsoft 365 Copilot Lizenzen, Verfügbarkeit also vorab planen.
