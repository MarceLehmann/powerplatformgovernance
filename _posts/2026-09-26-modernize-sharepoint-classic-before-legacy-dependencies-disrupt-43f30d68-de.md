---
title: SharePoint Classic modernisieren, bevor Altlasten Prozesse stören
description: Klassische Seiten, Warnungen, Skripte, Add-ins und ACS-Abhängigkeiten
  erfassen und nach ihrer geschäftlichen Bedeutung modernisieren oder stilllegen.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- compliance
- security
- alm
- power-automate
content_type: curated_summary
curation_id: 43f30d68a870fa8a2c5a542c
image:
  path: "/assets/img/curated/43f30d68a870fa8a2c5a542c.png"
  alt: 'Governance-Karte: Legacy dependencies become business risk when retirement
    arrives.'
permalink: "/de/posts/modernize-sharepoint-classic-before-legacy-dependencies-disrupt-43f30d68/"
translation_url: "/en/posts/modernize-sharepoint-classic-before-legacy-dependencies-disrupt-43f30d68/"
source_url: https://pnp.github.io/blog/post/the-last-mile-of-sharepoint-classic/
source_site_url: https://pnp.github.io/
source_title: 'The Last Mile of SharePoint Classic: Why the Real Risk Isn''t Technical'
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Josiah Opiyo
source_published_at: '2026-09-12'
source_type: article
faq:
  - question: "Was ist der wertvollste erste Schritt, bevor SharePoint Classic abgeschaltet wird?"
    answer: "Eine gezielte Abhängigkeitsinventur, die der Autor als wertvollsten Einzelschritt bezeichnet. Sie erfasst klassische Seiten, Vorlagen, Warnungen, Skripte, Add-ins, ACS-Abhängigkeiten und alte Workflows und sortiert nach geschäftlicher Kritikalität statt nach Anzahl der Sites. Dabei zeigt sich oft, dass ganze Websitesammlungen einfach stillgelegt statt migriert werden können."
  - question: "Vor welchen versteckten Abhängigkeiten in SharePoint Classic warnt der Beitrag?"
    answer: "Script-Editor-Webparts, die vor acht Jahren eingefügt wurden, Integrationen auf Basis von ACS, die seit der Migration niemand mehr angefasst hat, und Warnungen, auf die sich Abteilungen verlassen, weil es immer so gemacht wurde. Provider-hosted Add-ins und alte App-only-Zugriffe fallen irgendwann aus, wenn sie nicht saniert werden. Add-ins galten als zu riskant zum Ersetzen."
  - question: "Wie ersetzt man SharePoint-Warnungen, die auslaufen?"
    answer: "Geh vom Geschäftsprozess aus und nicht von einer technischen Umwandlung. Kläre, bei welchen Ereignissen eine Benachrichtigung nötig ist, wer sie bekommen muss und wie eskaliert wird. Regeln, Power Automate oder ein anderer kontrollierter Weg übernehmen dann, und der Artikel beschreibt sie als zuverlässiger und besser nachvollziehbar. Microsoft hat Meilensteine für das Sperren neuer Warnungen und das Abschalten veröffentlicht."
  - question: "Wann lässt sich eine klassische SharePoint-Seite direkt modernisieren und wann muss sie neu gebaut werden?"
    answer: "Einfache klassische Seiten lassen sich oft direkt umstellen. Seiten mit komplexen Workflows, aufwendigem Branding oder strengen Compliance-Funktionen brauchen meist einen Neubau. Der Autor sieht die Modernisierung zudem als Gelegenheit, Informationsarchitektur, Lebenszyklus, Audit-Fähigkeit und Zugriffsmodelle neu aufzusetzen, statt alte Muster mit modernen Mitteln nachzubauen."
  - question: "Wer muss bei der Modernisierung von SharePoint Classic mitarbeiten?"
    answer: "Ein reines IT-Projekt scheitert laut Autor. Er nennt Plattformverantwortliche, Architekten, SharePoint-Ingenieure, Sicherheit und Compliance, die Leitungen von HR, Finanzen und Betrieb, Power User sowie Change Management. Wer nah am Prozess arbeitet, weiss meist am besten, wo Abhängigkeiten stecken, und ist deshalb für die Inventur unverzichtbar."
---

## TL;DR

Abhängigkeiten von SharePoint Classic wie Warnungen, Script-Editor-Webparts, providergehostete Add-ins, ACS-Authentifizierung und alte Workflows können bei Microsoft-Abkündigungen Geschäftsprozesse unterbrechen. Eine Bestandsaufnahme soll kritische Prozesse priorisieren, unnötige Sites stilllegen, einfache Seiten modernisieren, komplexe Lösungen neu erstellen und gesteuerte Benachrichtigungen wie Power Automate nutzen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Klassische Seiten, Vorlagen, Warnungen, Skripte, Add-ins, ACS-Abhängigkeiten und alte Workflows erfassen und nach geschäftlicher Bedeutung statt nach Site-Anzahl priorisieren.
- Security/Compliance: Informationsarchitektur, Lebenszyklusverwaltung, Audit-Bereitschaft und Zugriffsmodelle bei der Modernisierung neu festlegen, da Altkomponenten Governance-Lücken und Audit-Probleme verursachen können.
- Leadership/Business: HR, Finanzen, Betrieb, Plattformverantwortliche und Prozessexperten einbinden, weil verborgene Abhängigkeiten fehlende Benachrichtigungen, fehlerhafte Automatisierung und unterbrochene Geschäftsabläufe auslösen können.
