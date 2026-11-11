---
title: 'Thinking Quarterly Q4/22: Governance und Sicherheit der Power Platform'
description: Ein Quartalsdigest zu CoE Starter Kit, Umgebungslebenszyklus, implizit
  geteilten Verbindungen, Azure AD Gruppen und Lizenzrisiken in der Power Platform.
date: '2026-11-11T16:39:37Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- environments
- coe
- dataverse
content_type: curated_summary
curation_id: 9f919231402d464edbc53ecd
image:
  path: "/assets/img/curated/9f919231402d464edbc53ecd.png"
  alt: 'Governance-Karte: Make governance easier to deploy, update and clean up.'
permalink: "/de/posts/thinking-quarterly-q4-22-power-platform-governance-and-security-digest-9f919231/"
translation_url: "/en/posts/thinking-quarterly-q4-22-power-platform-governance-and-security-digest-9f919231/"
source_url: https://jukkaniiranen.com/2023/01/thinking-quarterly-q4-22/
source_site_url: https://jukkaniiranen.com/
source_title: Thinking Quarterly, Q4/22
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2023-01-08'
source_type: article
faq:
- question: Wie vereinfacht der CoE Starter Kit Setup Wizard die Bereitstellung?
  answer: Der Setup Wizard senkt die Hürde für die Bereitstellung und Aktualisierung
    von CoE Komponenten. Der Digest bezeichnet ihn als besonders umfangreiche Aktualisierung.
- question: Wofür helfen Löschrichtlinien in Dataverse for Teams?
  answer: Sie helfen, unnötige Dataverse for Teams Umgebungen zu bereinigen. Damit
    wird die schwierige Verwaltung ihres Lebenszyklus unterstützt.
- question: Welches Sicherheitsrisiko haben implizit geteilte Power Apps Verbindungen?
  answer: Implizit geteilte Verbindungen können gemeinsame Zugangsdaten für alle App
    Nutzenden verwenden. Makers und Kunden sind sich dieses Sicherheitsrisikos möglicherweise
    nicht bewusst.
---

## TL;DR

Der CoE Starter Kit Setup Wizard vereinfacht die Bereitstellung und Aktualisierung von CoE Komponenten. Löschrichtlinien für Dataverse for Teams helfen beim Entfernen unnötiger Umgebungen, während implizit geteilte Power Apps Verbindungen gemeinsame Zugangsdaten für alle Nutzenden verwenden können.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Den CoE Starter Kit Setup Wizard für Bereitstellung und Aktualisierung prüfen, weil er den administrativen Aufwand senkt.
- Admins/CoE: Löschrichtlinien für Dataverse for Teams einsetzen, um unnötige Umgebungen zu entfernen und den Lebenszyklus besser zu verwalten.
- Security/Compliance: Implizit geteilte Power Apps Verbindungen prüfen, weil gemeinsame Zugangsdaten für alle Nutzenden eines Connectors verwendet werden können.
- Leadership/Business: Lizenzierung als Governance Thema behandeln, besonders bei CoE Dienstkonten und anonymen Besuchenden von Power Pages.
