---
title: Microsoft Intune Compliance Policies einfach erklärt
description: Die Folge erklärt verständlich, was Intune-Compliance-Richtlinien prüfen,
  was bei einem Fehler passiert und wie die Richtlinien den Arbeitszugriff beeinflussen
  können.
date: '2026-11-11T23:00:02Z'
author: governance_editorial
lang: de
toc: false
tags:
- compliance
- security
content_type: curated_summary
curation_id: b8340a72d13c387acb7c3f8d
image:
  path: "/assets/img/curated/b8340a72d13c387acb7c3f8d.png"
  alt: 'Governance-Karte: A compliance policy does not block anyone by itself. Failed
    compliance can still lock work access.'
permalink: "/de/posts/microsoft-intune-compliance-policies-explained-b8340a72/"
translation_url: "/en/posts/microsoft-intune-compliance-policies-explained-b8340a72/"
source_url: https://www.spreaker.com/episode/microsoft-intune-compliance-policies-simply-explained--75935715
source_site_url: https://www.spreaker.com/
source_title: Microsoft Intune Compliance Policies - Simply Explained
source_name: M365.FM
source_language: en
source_language_name: English
source_author: Mirko Peters
source_published_at: '2026-11-11'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Welche Gerätemerkmale prüft eine Microsoft Intune-Compliance-Richtlinie?
  answer: Eine Intune-Compliance-Richtlinie prüft festgelegte Gerätezustände. Die
    Folge erklärt, dass sie bestimmte Geräteinformationen bewerten und daraus den
    Compliance-Status bestimmen kann.
- question: Was passiert, wenn ein Laptop die Microsoft Intune-Compliance nicht erfüllt?
  answer: Ein fehlerhaftes Gerät kann den Arbeitszugriff verlieren. Die Folge beschreibt
    einen Laptop, der ausgesperrt ist und wiederholt eine fehlgeschlagene Anmeldung
    zeigt.
- question: Blockiert eine Microsoft Intune-Compliance-Richtlinie Benutzer selbst?
  answer: Nein. Die Folge unterscheidet zwischen der Bewertung durch die Richtlinie
    und dem Blockieren, obwohl fehlende Compliance den Arbeitszugriff beeinflussen
    kann.
---

## TL;DR

Microsoft Intune-Compliance-Richtlinien prüfen Gerätezustände und melden, ob ein Gerät konform ist. Die Folge erklärt die zwei Teile der Intune-Compliance, prüfbare Merkmale, die Folgen eines Fehlers, die Grenze der Richtlinie selbst und ihre Einordnung in Microsoft 365 und Azure.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Prüfen Sie, welche Gerätemerkmale jede Intune-Compliance-Richtlinie bewertet und wie fehlerhafte Geräte behandelt werden, weil Fehlkonfigurationen den Arbeitszugriff stören können.
- Security/Compliance: Trennen Sie Compliance-Bewertung und Durchsetzung, denn die Richtlinie selbst blockiert niemanden, auch wenn ein nicht konformes Gerät den Arbeitszugriff verlieren kann.
- Leadership/Business: Bewerten Sie nicht konforme Geräte als mögliches Zugriffsrisiko und berücksichtigen Sie die Auswirkungen auf Mitarbeitende, bevor Richtlinien den Zugriff beeinflussen.
