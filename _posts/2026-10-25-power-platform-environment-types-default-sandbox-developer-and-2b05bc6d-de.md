---
title: 'Power Platform Umgebungen: Standard, Sandbox, Entwickler und Produktion'
description: Die Umgebungsarten der Power Platform trennen persönliche Experimente,
  riskante Tests, zeitlich begrenzte Trials und kritische Geschäftsanwendungen.
date: '2026-10-25T16:37:13Z'
author: governance_editorial
lang: de
toc: false
tags:
- environments
- security
content_type: curated_summary
curation_id: 2b05bc6d33d2982e6c80e425
image:
  path: "/assets/img/curated/2b05bc6d33d2982e6c80e425.png"
  alt: 'Governance-Karte: Put every workload in the right environment. The default
    space is not for critical production apps.'
permalink: "/de/posts/power-platform-environment-types-default-sandbox-developer-and-2b05bc6d/"
translation_url: "/en/posts/power-platform-environment-types-default-sandbox-developer-and-2b05bc6d/"
source_url: https://www.m365.fm/blog/power-platform-environment-types-explained/
source_site_url: https://www.m365.fm/
source_title: 'Power Platform Environment Types Explained: Default, Sandbox, Developer,
  and Production'
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_author: Mirko Peters
source_published_at: '2026-10-25'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Können Administratoren die Standardumgebung der Power Platform löschen?
  answer: Nein, Tenant-Administratoren können die Standardumgebung nicht löschen.
    Ihre Nutzung sollte durch Einschränkungen für Produktionsbereitstellungen in diesem
    gemeinsam genutzten Container gesteuert werden.
- question: Welche Power Platform Umgebung unterstützt Datenbankzurücksetzungen und
    Kopien?
  answer: Sandbox-Umgebungen unterstützen riskante Aktionen wie Zurücksetzen, Kopieren
    und Löschen von Daten. Diese Funktionen sind für Tests ausserhalb der Produktion
    vorgesehen.
- question: Wie lange bleibt eine Trial-Umgebung der Power Platform bestehen?
  answer: Eine Trial-Umgebung läuft nach 30 Tagen ab. Ihre Inhalte werden gelöscht,
    daher eignet sie sich nur für kurzfristige Bewertungen und Proofs of Concept.
---

## TL;DR

Power Platform Umgebungen isolieren Apps, Flows und Daten. Die Standardumgebung ist für persönliche Produktivität und risikoarme Experimente gedacht, Sandboxes für Tests mit Zurücksetzen, Kopieren und Löschen, Entwicklerumgebungen für individuelles Lernen, Produktion für kritische Workloads und Trials nur für Proofs of Concept, da sie nach 30 Tagen ablaufen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt verwaltete Entwicklerumgebungen für Lernen und Prototyping, statt Experimente in der gemeinsam genutzten Standardumgebung abzulegen.
- Admins/CoE: Beschränkt Produktionsbereitstellungen in der Standardumgebung und lenkt neue Maker in persönliche Entwicklerumgebungen.
- Security/Compliance: Haltet Umgebungsgrenzen ein, weil Apps nur auf Datenquellen in derselben Umgebung zugreifen können und so Datenvermischung verhindert wird.
- Leadership/Business: Betreibt kritische Apps und Flows in Produktionsumgebungen mit geeigneter Überwachung und geeigneten Sicherheitskontrollen.
