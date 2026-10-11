---
title: SharePoint Hero Links brauchen eine eigene Governance neben alten Freigabelinks
description: Hero Links verwenden sichere Standardwerte, doch alte Links bleiben aktiv
  und bestehende Ablaufregeln gelten nicht für den neuen Hauptlink.
date: '2026-10-11T16:35:44Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
content_type: curated_summary
curation_id: 49260018275a34fae44750e8
image:
  path: "/assets/img/curated/49260018275a34fae44750e8.png"
  alt: 'Governance-Karte: Hero Links do not inherit legacy expiration policies. Treat
    old and new links as separate controls.'
permalink: "/de/posts/sharepoint-hero-links-need-separate-governance-from-legacy-sharing-49260018/"
translation_url: "/en/posts/sharepoint-hero-links-need-separate-governance-from-legacy-sharing-49260018/"
source_url: https://reshmeeauckloo.com/posts/sharepoint-herolink-powershell/
source_site_url: https://reshmeeauckloo.com/
source_title: 'SharePoint Hero Links: What admins need to know'
source_name: reshmeeauckloo.com
source_language: en
source_language_name: English
source_published_at: '2026-10-11'
source_type: article
faq:
- question: Wie steuert DefaultMainLinkScope den Zugriff auf SharePoint Hero Links?
  answer: DefaultMainLinkScope wählt die anfängliche Zielgruppe des Hauptlinks einer
    Website. Die Einstellung ist ein Standardwert und keine erzwungene Einschränkung,
    wenn Richtlinien eine Erweiterung erlauben.
- question: Werden bestehende SharePoint-Freigabelinks automatisch in Hero Links migriert?
  answer: Bestehende Freigabelinks werden nicht automatisch ersetzt, und es gibt keinen
    dokumentierten automatischen Migrationsweg. Sie bleiben unter Andere Links separat
    verfügbar.
- question: Gelten bestehende Ablaufregeln für SharePoint Hero Links?
  answer: Bestehende Ablaufregeln gelten weiterhin für alte Freigabelinks, aber nicht
    für Hero Links. Administratoren müssen den Ablauf von Hero Links separat bewerten.
---

## TL;DR

SharePoint Hero Links verwenden DefaultMainLinkScope als Standardzielgruppe pro Website. Bestehende Freigabelinks bleiben unter Andere Links sichtbar und funktionieren getrennt weiter. Alte Ablaufregeln gelten nicht für Hero Links. Administratoren sollten die websitespezifische Einstellung setzen und prüfen sowie alte Links unabhängig verwalten, da keine automatische Migration dokumentiert ist.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: DefaultMainLinkScope auf jeder relevanten Website setzen und prüfen, weil die Einstellung websitespezifisch ist und die anfängliche Hero-Link-Zielgruppe bestimmt.
- Security/Compliance: Den Ablauf von Hero Links separat bewerten, weil bestehende Ablaufregeln für alte Links gelten, aber nicht für Hero Links.
- Leadership/Business: Während der Einführung mit beiden Linkarten planen, weil alte Links mit ihren bisherigen Berechtigungen weiter zugänglich bleiben und nicht automatisch ersetzt werden.
