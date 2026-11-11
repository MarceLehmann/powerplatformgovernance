---
title: Dataverse for Teams fehlt weiterhin eine formale ALM-Strategie
description: Dataverse for Teams ermöglichte eigene Umgebungen in Teams, doch Lösungsverwaltung,
  Verantwortlichkeiten und CoE-Unterstützung blieben unvollständig.
date: '2026-11-11T16:39:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- environments
- alm
- coe
content_type: curated_summary
curation_id: 3fff14a49dd8aad928ba2e16
image:
  path: "/assets/img/curated/3fff14a49dd8aad928ba2e16.png"
  alt: 'Governance-Karte: Dataverse for Teams needs an ALM and ownership model. Workarounds
    are not governance.'
permalink: "/de/posts/dataverse-for-teams-still-lacks-a-formal-alm-story-3fff14a4/"
translation_url: "/en/posts/dataverse-for-teams-still-lacks-a-formal-alm-story-3fff14a4/"
source_url: https://jukkaniiranen.com/2022/11/the-state-of-teams-as-a-platform/
source_site_url: https://jukkaniiranen.com/
source_title: The state of Teams as a platform
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2022-11-16'
source_type: article
faq:
- question: Welche Auswirkungen hat Dataverse for Teams auf ALM in der Power Platform?
  answer: Für Dataverse for Teams gab es keine formale ALM-Strategie zur Verwaltung
    von Apps und Umgebungen, und die Werkzeuge galten als Umgehungslösungen.
- question: Warum wurde die CoE Starter Kit-Version für Dataverse for Teams eingestellt?
  answer: Das Team konnte die nötigen Investitionen für die Pflege der Dataverse for
    Teams-Version nicht mehr rechtfertigen, wodurch Compliance-Daten an Premium-Lizenzierung
    gebunden wurden.
- question: Welches Sicherheitsrisiko hat das Drittanbieter-App-Modell von Microsoft
    Teams?
  answer: Teams-Benutzer können Drittanbieter-Apps mit Code auf externen Servern autorisieren,
    die sie möglicherweise für Phishing-Zwecke imitieren können.
---

## TL;DR

In Dataverse for Teams wurden viele Umgebungen erstellt, doch die verfügbaren Werkzeuge für die Lösungsverwaltung galten als vorläufige Umgehungslösungen. Zwei Jahre nach der allgemeinen Verfügbarkeit fehlte laut Quelle weiterhin ein formaler ALM-Ansatz für Apps und Umgebungen. Zudem wurde die Dataverse for Teams-Version des CoE Starter Kits eingestellt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Überwacht Teams-basierte Umgebungen und unterscheidet produktive Apps von Beispielinstallationen oder Tests, weil eine hohe Anzahl allein keine aktive Nutzung belegt.
- Security/Compliance: Prüft Berechtigungen und externen Code von Drittanbieter-Apps in Teams, weil Benutzer Apps für potenzielles Phishing autorisieren können.
- Leadership/Business: Bewertet Dataverse for Teams als unvollständige Plattformoption, wenn ALM und Verantwortlichkeiten ungeklärt sind und Lösungen dauerhaft betrieben werden sollen.
