---
title: Nicht verwaltete Entwicklerumgebungen werden entfernt
description: Nicht verwaltete Entwicklerumgebungen werden am 15. Dezember 2026 gesperrt
  und am 15. Januar 2027 gelöscht. Prüfen, exportieren und migrieren Sie Ihre Arbeit.
date: '2026-11-05T10:38:22Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- alm
- power-apps
- power-automate
content_type: curated_summary
curation_id: 8443b63591781a1fe4689d07
image:
  path: "/assets/img/curated/8443b63591781a1fe4689d07.png"
  alt: 'Governance-Karte: Unmanaged developer environments are being removed. Export
    your solutions before suspension.'
permalink: "/de/posts/unmanaged-developer-environments-are-being-removed-8443b635/"
translation_url: "/en/posts/unmanaged-developer-environments-are-being-removed-8443b635/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-176-unmanaged-developer-environment-deprecation-before-15-december/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 176: Your Free Developer Environment Is Going Away:
  What to Do Before 15 December"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-11-05'
source_type: article
faq:
- question: Wie erkenne ich eine nicht verwaltete Entwicklerumgebung im Power Platform
    Admin Center?
  answer: Unter Manage, Environments nach Type = Developer und Managed = No filtern.
    Die Spalte Last activity hilft bei der Unterscheidung aktiver und verlassener
    Umgebungen.
- question: Was passiert nach dem 15. Dezember 2026 mit einer Power Apps Developer
    Plan Umgebung?
  answer: Eine nicht verwaltete Umgebung wird am 15. Dezember 2026 gesperrt und ab
    dem 15. Januar 2027 gelöscht, einschliesslich Apps, Flows, Sites und Daten.
- question: Wie kann ich Lösungen aus einer nicht verwalteten Entwicklerumgebung verschieben?
  answer: Komponenten in eine nicht verwaltete Lösung aufnehmen, Änderungen veröffentlichen,
    die Lösung exportieren und die ZIP-Datei in eine verwaltete Umgebung oder Sandbox
    importieren.
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
---

## TL;DR

Nicht verwaltete Entwicklerumgebungen, einschliesslich kostenloser Umgebungen aus dem Power Apps Developer Plan, werden am 15. Dezember 2026 gesperrt und am 15. Januar 2027 gelöscht. Admins filtern im Power Platform Admin Center nach Type = Developer und Managed = No. Makers exportieren ihre Lösungen und migrieren sie in eine verwaltete Umgebung, eine Sandbox oder eine Testumgebung.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Apps, Flows und weitere Komponenten in eine eigene nicht verwaltete Lösung aufnehmen und vor dem 15. Dezember exportieren, damit die Arbeit verfügbar bleibt.
- Admins/CoE: Umgebungen nach Type = Developer und Managed = No filtern, aktive Umgebungen prüfen und eine Umwandlung oder Migration planen.
- Leadership/Business: Vor der Sperrung eine lizenzierte verwaltete Umgebung oder Sandbox bereitstellen, damit Apps, Flows, Sites und Daten verfügbar bleiben.
