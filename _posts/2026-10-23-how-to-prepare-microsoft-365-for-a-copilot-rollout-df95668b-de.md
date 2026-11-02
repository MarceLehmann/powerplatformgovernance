---
title: Microsoft 365 auf einen Copilot-Rollout vorbereiten
description: Ein Microsoft-365-Tenant wird durch Zugriffsmessung, weniger Oversharing,
  Sensitivity Labels, veraltete Inhalte und einen geprüften Pilot-Rollout vorbereitet.
date: '2026-10-23T16:43:36Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- ownership
content_type: curated_summary
curation_id: df95668b5ef0a8ca9c34b384
image:
  path: "/assets/img/curated/df95668b5ef0a8ca9c34b384.png"
  alt: 'Governance-Karte: Copilot follows permissions. Fix access before rollout.'
permalink: "/de/posts/how-to-prepare-microsoft-365-for-a-copilot-rollout-df95668b/"
translation_url: "/en/posts/how-to-prepare-microsoft-365-for-a-copilot-rollout-df95668b/"
source_url: https://rencore.com/en/blog/prepare-m365-for-copilot-rollout/
source_site_url: https://rencore.com/
source_title: How to prepare Microsoft 365 for a Copilot rollout
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Wie verwendet Microsoft 365 Copilot Berechtigungen aus SharePoint, OneDrive
    und Teams?
  answer: Microsoft 365 Copilot verwendet die bestehenden Berechtigungen der anfragenden
    Person und kann zugängliche Inhalte nutzen. Oversharing erhöht deshalb die mögliche
    Datenoffenlegung.
- question: Welche Prüfungen sind vor der Vergabe von Microsoft 365 Copilot-Lizenzen
    nötig?
  answer: Vor der Lizenzvergabe sollten externe Freigaben, unterbrochene Vererbung,
    externe Besitzer und Sites ohne Besitzer gemessen werden. Diese Basis zeigt die
    Zugriffsrisiken.
- question: Wie wird ein Microsoft 365 Copilot-Pilot vor der Erweiterung geprüft?
  answer: Eine Pilotgruppe wird anhand des tatsächlichen Zugriffs ausgewählter Benutzer
    und definierter Schwellenwerte geprüft. Die Erweiterung folgt erst bei stabilem
    Ergebnis.
animation:
  video: /assets/img/animations/df95668b5ef0a8ca9c34b384-de.mp4
  poster: /assets/img/animations/df95668b5ef0a8ca9c34b384-de.poster.webp
  width: 800
  height: 450
  alt: "Eine Abfolge mit fünf Schritten zeigt die Vorbereitung von Microsoft 365 fuer Copilot: Exponierung messen, breite Zugriffe beheben, sensible Sites kennzeichnen, veraltete Inhalte bereinigen und einen Pilot pruefen."
---

## TL;DR

Microsoft 365 Copilot verwendet die bestehenden Berechtigungen der anfragenden Person. Vor der Lizenzzuweisung sollten Admins Freigaben in SharePoint, OneDrive und Teams messen, breite Zugriffe schliessen, sensible Sites kennzeichnen, veraltete Inhalte archivieren und den Zugriff einer Pilotgruppe prüfen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Externe Freigaben, unterbrochene Vererbung, externe Besitzer und Sites ohne Besitzer in SharePoint, OneDrive und Teams messen, um die Risikobasis festzulegen.
- Security/Compliance: Breite Links, inaktive Gäste und nicht gekennzeichnete sensible Sites beheben, weil Copilot Inhalte mit vorhandener Benutzerberechtigung verwenden kann.
- Leadership/Business: Mit einer Pilotgruppe starten, den tatsächlichen Zugriff prüfen und erst bei stabilen Schwellenwerten erweitern, während sich Berechtigungen weiter ändern können.
