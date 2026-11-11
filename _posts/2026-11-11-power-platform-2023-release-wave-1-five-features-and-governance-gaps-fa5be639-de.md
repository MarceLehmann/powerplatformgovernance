---
title: 'Power Platform Release Wave 1: Neue Funktionen und Governance-Risiken'
description: Jukka Niiranen bewertet fünf Punkte der Release Wave 1, darunter manuelle
  Administratorrollen und persönlich verwaltete Dataverse-Umgebungen.
date: '2026-11-11T16:39:42Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- dataverse
- power-apps
content_type: curated_summary
curation_id: fa5be6390a75c180da653873
image:
  path: "/assets/img/curated/fa5be6390a75c180da653873.png"
  alt: 'Governance-Karte: Admin power should not mean automatic access to every Dataverse
    record.'
permalink: "/de/posts/power-platform-2023-release-wave-1-five-features-and-governance-gaps-fa5be639/"
translation_url: "/en/posts/power-platform-2023-release-wave-1-five-features-and-governance-gaps-fa5be639/"
source_url: https://jukkaniiranen.com/2023/01/something-to-look-forward-to-in-2023-release-wave-1/
source_site_url: https://jukkaniiranen.com/
source_title: Something to look forward to in 2023 Release Wave 1
source_name: Jukka Niiranen Blog
source_language: en
source_language_name: English
source_author: Jukka Niiranen
source_published_at: '2023-01-25'
source_type: article
faq:
- question: Wie verändert die manuelle Zuweisung der Systemadministratorrolle den
    Dataverse-Zugriff von Tenant-Administratoren?
  answer: Kunden können die Systemadministratorrolle ausgewählten Benutzern zuweisen,
    statt sich vollständig auf die automatische Zuweisung zu verlassen. Dadurch kann
    unnötiger Zugriff auf Geschäftsdaten reduziert werden.
- question: Können persönliche Power Apps-Umgebungen Dataverse ohne Bereitstellung
    durch Administratoren nutzen?
  answer: Ja, persönliche Umgebungen ermöglichen Makers den Zugriff auf Premium-Funktionen
    wie Dataverse ohne Bereitstellung durch Tenant-Administratoren. Die Administration
    kann diese Funktion deaktivieren.
- question: Warum sollten Unternehmen den Power Platform Release Planner regelmässig
    beobachten?
  answer: Release-Pläne können sich während der Welle ändern, wobei Funktionen ergänzt,
    verzögert, verschoben oder gestrichen werden. Regelmässige Kontrollen zeigen den
    aktuelleren Planungsstand.
---

## TL;DR

Die Release Wave 1 von 2023 führt die manuelle Zuweisung der Systemadministratorrolle und persönliche Umgebungen mit Dataverse ein. Persönliche Umgebungen laufen nicht ab und benötigen keine Bereitstellung durch Tenant-Administratoren. Da Makers Premium-Funktionen selbstständig nutzen können, sollten Unternehmen Governance und DLP-Richtlinien anwenden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüfen, ob die Systemadministratorrolle manuell vergeben werden soll, damit globale Administratorrollen nicht automatisch Zugriff auf alle Dataverse-Geschäftsdaten eröffnen.
- Admins/CoE: Entscheiden, ob persönliche Umgebungen aktiviert werden, und DLP-Richtlinien anwenden, weil Makers sie ohne Hilfe der Administration bereitstellen können.
- Makers: Neue modellgesteuerte Steuerelemente und responsive Canvas-Layouts sorgfältig testen, weil die visuelle Aktualisierung zunächst opt-in ist und Fehler verursachen kann.
- Leadership/Business: Release-Pläne als veränderlich einplanen, da Funktionen bis zum Ende der Welle ergänzt, verschoben oder gestrichen werden können.
