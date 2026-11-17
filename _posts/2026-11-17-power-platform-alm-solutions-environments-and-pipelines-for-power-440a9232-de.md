---
title: 'Power Platform ALM: Lösungen, Umgebungen und Pipelines für Power Automate'
description: Schritt-für-Schritt-Anleitung, um Power Automate Flows mit Lösungen,
  Verbindungsverweisen, Umgebungsvariablen und Pipelines von Dev über Test nach Produktion
  zu bringen.
date: '2026-11-17T16:40:29Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- environments
- power-automate
- ownership
content_type: curated_summary
curation_id: 440a923230331d6fb1ff91d0
image:
  path: "/assets/img/curated/440a923230331d6fb1ff91d0.png"
  alt: 'Governance-Karte: A solution moves the recipe. Connections and values stay
    behind in every environment.'
permalink: "/de/posts/power-platform-alm-solutions-environments-and-pipelines-for-power-440a9232/"
translation_url: "/en/posts/power-platform-alm-solutions-environments-and-pipelines-for-power-440a9232/"
source_url: https://www.andersjensen.org/en/articles/power-platform-alm-solutions-environments-pipelines/
source_site_url: https://www.andersjensen.org/
source_title: 'Power Platform ALM: Solutions, environments and pipelines'
source_name: andersjensen.org
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-11-17'
source_type: article
faq:
- question: Wie bringe ich einen Power Automate Flow mit einer Lösung von Dev nach
    Produktion?
  answer: Flow in einer Lösung im Dev bauen, als managed Lösung exportieren und über
    Pipelines in Test und Produktion importieren. Verbindungen und Werte müssen im
    Ziel schon existieren.
- question: Warum verlangt eine Power Platform Lösung nach dem Import erneut Verbindungen?
  answer: Weil eine Verbindung eine persönliche Anmeldung ist und nie Teil der Lösung
    wird. Der Verweis zeigt darauf, und beim Import wählt man pro Umgebung eine Verbindung.
- question: Brauchen Pipelines in Power Platform Managed Environments als Ziel?
  answer: Ja, Pipelines setzen voraus, dass die Zielumgebungen Managed Environments
    sind. Richte das für Test und Produktion ein, bevor du verteilst.
---

## TL;DR

Flows gehören in eine Lösung mit eigenem Publisher und werden über getrennte Dev-, Test- und Produktionsumgebungen bewegt. Verbindungen reisen nie mit; Verbindungsverweise erhalten in jeder Umgebung eine eigene Verbindung, und umgebungsspezifische Werte wie SharePoint-Seiten gehören in Umgebungsvariablen. Test und Produktion erhalten verwaltete Lösungen über Pipelines, die Managed Environments voraussetzen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Flows in einer Lösung mit eigenem Publisher bauen und Verbindungsverweise plus Umgebungsvariablen nutzen, denn die Standardlösung lässt sich nicht exportieren und feste Werte brechen beim Import.
- Admins/CoE: Dev, Test und Produktion mit Dataverse bereitstellen, Managed Environments für Pipelines aktivieren und die Abschaffung unmanaged Developer Environments ab November 2026 einplanen.
- Security/Compliance: Aktuelle Dev-Werte vor dem Export aus der Lösung entfernen und Geheimnisse über Secret-Variablen aus Azure Key Vault beziehen.
- Leadership/Business: Getrennte Dev- und Testumgebungen unterstützen, weil Fehler an produktiven Flows direkt das Geschäft treffen.
