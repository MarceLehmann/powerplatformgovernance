---
title: 'Nutzer in Microsoft 365 offboarden: Owner vor der Deaktivierung übergeben'
description: 'Fünf Schritte: Offboarding am HR-Austrittsdatum starten, Teams, Websites,
  Apps und Flows übergeben, OneDrive sichern, Lizenzen zurückholen, dann prüfen.'
date: '2026-11-12T16:51:49Z'
author: governance_editorial
lang: de
toc: false
tags:
- ownership
- governance
- security
- power-automate
content_type: curated_summary
curation_id: ba4d9bac29bbce8f2de9efa1
image:
  path: "/assets/img/curated/ba4d9bac29bbce8f2de9efa1.png"
  alt: 'Governance-Karte: A disabled owner is the same as no owner. Hand over first,
    then disable.'
permalink: "/de/posts/offboard-microsoft-365-users-transfer-ownership-before-disabling-the-ba4d9bac/"
translation_url: "/en/posts/offboard-microsoft-365-users-transfer-ownership-before-disabling-the-ba4d9bac/"
source_url: https://rencore.com/en/blog/offboard-users-m365/
source_site_url: https://rencore.com/
source_title: How to offboard users in Microsoft 365 without losing data or control
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: Reicht es, ein Konto in Entra ID zu deaktivieren, um einen Mitarbeiter
    zu offboarden?
  answer: Nein. Die Deaktivierung stoppt nur die Anmeldung, das Konto bleibt als Owner
    bestehen und Sitzungen und Tokens können noch eine Zeit gültig sein.
- question: Was passiert mit den OneDrive-Dateien eines ausgeschiedenen Mitarbeiters?
  answer: Microsoft löscht das OneDrive eine bestimmte Zeit nach der Kontolöschung,
    sofern keine Aufbewahrungsrichtlinie oder kein Legal Hold gilt, also benötigte
    Dateien vorher verschieben.
- question: Was passiert mit Power Automate Flows und Apps, wenn der Owner das Unternehmen
    verlässt?
  answer: Flows laufen unter den Verbindungen des ausgeschiedenen Nutzers weiter und
    werden nicht mehr gepflegt, daher jedem Flow und jeder App vor der Deaktivierung
    einen neuen Owner geben.
---

## TL;DR

Das Deaktivieren eines Kontos stoppt nur die Anmeldung, nicht die Hinterlassenschaften: Teams und Websites mit einzigem deaktiviertem Owner, OneDrive-Dateien, die nach der Aufbewahrungsfrist gelöscht werden, Flows, die unter Verbindungen ausgeschiedener Nutzer weiterlaufen, und Lizenzen, die weiter kosten. Offboarding am HR-Austrittsdatum starten, jedem Team, jeder Website, Gruppe, App und jedem Flow einen neuen Owner geben, Sitzungen widerrufen, Lizenzen zurückholen und eine Woche später prüfen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Offboarding am HR-Austrittsdatum auslösen statt aus dem Gedächtnis, alle Teams, Websites, Gruppen, Apps und Flows des Mitarbeiters auflisten und jedem vor der Deaktivierung einen neuen Owner geben, eine Woche später nachprüfen.
- Security/Compliance: Sitzungen und Tokens im selben Schritt wie die Deaktivierung widerrufen, vor dem Löschen von OneDrive-Inhalten Aufbewahrungsrichtlinien und Legal Holds prüfen und festhalten, was wann an wen übergeben wurde.
- Leadership/Business: Ein deaktiviertes Konto mit Lizenz kostet jeden Monat Geld, daher Lizenzen zurückholen und Managern die Checkliste vor dem letzten Tag geben.
