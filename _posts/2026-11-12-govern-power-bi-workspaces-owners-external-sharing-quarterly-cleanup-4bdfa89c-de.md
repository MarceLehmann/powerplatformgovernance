---
title: 'Power BI Workspaces governen: Owner pro Workspace, externe Freigaben prüfen'
description: 'Fünf Schritte für Power BI Governance: Workspaces inventarisieren, zwei
  Admins aus dem Fachteam benennen, externe Freigaben prüfen, ungenutzte Berichte
  ausmustern, Nachweise aufbewahren.'
date: '2026-11-12T16:51:39Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- security
- compliance
content_type: curated_summary
curation_id: 4bdfa89ca609bb24cf037f07
image:
  path: "/assets/img/curated/4bdfa89ca609bb24cf037f07.png"
  alt: 'Governance-Karte: No owner, no fix. Name an owner for every Power BI workspace
    before you touch sharing.'
permalink: "/de/posts/govern-power-bi-workspaces-owners-external-sharing-quarterly-cleanup-4bdfa89c/"
translation_url: "/en/posts/govern-power-bi-workspaces-owners-external-sharing-quarterly-cleanup-4bdfa89c/"
source_url: https://rencore.com/en/blog/govern-power-bi/
source_site_url: https://rencore.com/
source_title: How to govern Power BI workspaces and sharing
source_name: Rencore Blog
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: Wer sollte einen Power BI Workspace besitzen und warum zwei Admins?
  answer: Eine benannte Person aus dem Fachteam, das die Berichte nutzt, plus ein
    zweiter Admin, damit der Workspace eine Abgabe überlebt. Verwaiste Workspaces
    lassen sich weder korrigieren noch löschen.
- question: Wie finde ich Power BI Workspaces mit externen Nutzern?
  answer: Workspaces listen, deren Mitglieder oder Betrachter externe Nutzer enthalten,
    die Owner um Bestätigung bitten und die externe Freigabe in den Tenanteinstellungen
    einschränken.
- question: Wann sollten ungenutzte Power BI Berichte ausgemustert werden?
  answer: Berichte, Dashboards und Datasets, die 90 Tage niemand geöffnet hat, werden
    ihrem Owner zur Ausmusterung gemeldet; die Quartalsbereinigung erfasst auch ungenutzte
    Pro- oder Premium-Per-User-Lizenzen.
---

## TL;DR

Power BI Selbstbedienung wächst schneller als die Kontrolle. Fünf Schritte: alle Workspaces mit Admins, Mitgliedern, Berichten und Datasets listen; pro Workspace zwei Admins aus dem Fachteam benennen; Workspaces mit externen Nutzern finden, Zugriff bestätigen und externe Freigabe in den Tenanteinstellungen einschränken; Berichte, Dashboards und Datasets ohne Nutzung seit 90 Tagen ausmustern; quartalsweise wiederholen und Bestätigungen für Audits dokumentieren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Den Fünf-Schritte-Zyklus quartalsweise fahren, Workspaces und Artefakte inventarisieren, pro Workspace zwei Admins benennen und fehlende Bestätigungen der Owner einfordern.
- Security/Compliance: Externe Zugriffe in kürzeren Abständen prüfen als interne und dokumentieren, wer was bestätigt oder entfernt hat, als Nachweis für Audits.
- Leadership/Business: Ungenutzte Berichte, Datasets und Lizenzen sind Kosten, und ohne Owner entstehen Doppelberichte ohne einzige Datenquelle, also die Bereinigung unterstützen.
- Makers: Wer Workspaces veröffentlicht, wird als Owner oder zweiter Admin benannt und muss auf Anfrage externe Freigaben bestätigen oder Inhalte ausmustern.
