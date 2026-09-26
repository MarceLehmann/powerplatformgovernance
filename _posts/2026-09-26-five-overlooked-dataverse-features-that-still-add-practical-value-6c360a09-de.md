---
title: Fünf übersehene Dataverse-Funktionen mit praktischem Nutzen
description: Dataverse bietet nützliche Funktionen ausserhalb des Maker-Portals, darunter
  Outlook- und Exchange-Integration, Diagnostik, Feldzuordnungen und Mehrtabellen-Suchfelder.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
- power-apps
- power-automate
- environments
content_type: curated_summary
curation_id: 6c360a09bf8bc3204851efea
image:
  path: "/assets/img/curated/6c360a09bf8bc3204851efea.png"
  alt: 'Governance-Karte: Dataverse features hide outside the maker portal. Know the
    limits before you design.'
permalink: "/de/posts/five-overlooked-dataverse-features-that-still-add-practical-value-6c360a09/"
translation_url: "/en/posts/five-overlooked-dataverse-features-that-still-add-practical-value-6c360a09/"
source_url: https://readyxrm.blog/2025/08/28/five-forgotten-features-of-dataverse/
source_site_url: https://readyxrm.blog/
source_title: Five forgotten features of Dataverse
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-08-28'
source_type: article
---

## TL;DR

Dataverse unterstützt die Zuordnung von Outlook-E-Mails zu Dataverse-Datensätzen, Exchange-Online-E-Mails ohne Power-Automate-Flows, eine Diagnose-URL für die Leistung modellgesteuerter Apps, Feldzuordnungen über die klassische Oberfläche und Mehrtabellen-Suchfelder. Feldzuordnungen gelten nur bei der Erstellung; benutzerdefinierte Mehrtabellen-Beziehungen benötigen laut Quelle SDK oder XrmToolBox.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt Feldzuordnungen, um kompatible Felder beim Erstellen verbundener Datensätze automatisch zu befüllen, aber erwartet keine späteren Aktualisierungen vom übergeordneten Datensatz.
- Makers: Führt die Diagnose-URL für modellgesteuerte Apps regelmässig aus, damit Leistungsänderungen über Vergleichswerte erkennbar werden.
- Admins/CoE: Prüft Exchange-Online-Integration, Postfächer und Warteschlangen, bevor E-Mail-Flows erstellt werden, die Flow-Ausführungen oder spezielle Dienstkonten benötigen.
- Admins/CoE: Behandelt benutzerdefinierte Mehrtabellen-Suchfelder als kontrollierte Designentscheidung, da ihre Einrichtung laut Quelle SDK oder XrmToolBox statt der Maker-Oberfläche erfordert.
