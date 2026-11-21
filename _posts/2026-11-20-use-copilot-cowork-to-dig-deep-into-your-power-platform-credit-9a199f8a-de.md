---
title: Copilot Cowork nutzen, um den Power Platform Credit-Verbrauch zu analysieren
description: Power Platform Admin Plugin (Vorschau) in Copilot Cowork aktivieren,
  Kreditverbrauch pro Umgebung per Frage abfragen, Charts erzeugen und wöchentliche
  Reports planen.
date: '2026-11-20T22:37:05Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- copilot-studio
- coe
content_type: curated_summary
curation_id: 9a199f8a57482fd819979652
image:
  path: "/assets/img/curated/9a199f8a57482fd819979652.png"
  alt: 'Governance-Karte: Copilot Credit spend hides per environment. Ask for the
    breakdown before the bill asks you.'
permalink: "/de/posts/use-copilot-cowork-to-dig-deep-into-your-power-platform-credit-9a199f8a/"
translation_url: "/en/posts/use-copilot-cowork-to-dig-deep-into-your-power-platform-credit-9a199f8a/"
source_url: https://microsoft.github.io/mcscatblog/posts/copilot-cowork-credit-analysis/
source_site_url: https://microsoft.github.io/
source_title: Use Copilot Cowork to dig deep into your Power Platform credit consumption
  data
source_name: The Custom Engine (Microsoft Copilot Studio CAT team)
source_language: en
source_language_name: English
source_author: Giorgio Ughini
source_published_at: '2026-11-20'
source_updated_at: '2026-11-20'
source_type: article
faq:
- question: Wie aktiviere ich das Power Platform Admin Plugin in Copilot Cowork?
  answer: Im Bereich Customize von Cowork das Plugin Power Platform Admin (Vorschau)
    einschalten und dann die Verbindung Power Platform for Admins V2 per OAuth herstellen.
- question: Welche Administratorrolle braucht man für das Power Platform Admin Plugin
    in Cowork?
  answer: Man braucht Cowork Zugang und ein verbundenes Konto mit der Rolle Power
    Platform Administrator, Dynamics 365 Administrator oder Global Administrator.
- question: Kann Cowork wöchentlich einen Copilot Credit Verbrauchsbericht pro Umgebung
    erstellen?
  answer: Ja, geplante Prompts wiederholen den Bericht mit Chart; Zeitplan, Zeitzone
    und Zustellung vor der Freigabe prüfen, der E-Mail-Versand hängt von den Berechtigungen
    ab.
animation:
  video: /assets/img/animations/9a199f8a57482fd819979652-de.mp4
  poster: /assets/img/animations/9a199f8a57482fd819979652-de.poster.webp
  width: 800
  height: 450
  alt: "Vier Schritte zeigen den Ablauf fuer Credit Reporting in Copilot Cowork: Power Platform Admin Plugin aktivieren, mit Power Platform for Admins V2 per OAuth verbinden, Charts je Umgebung abfragen und einen woechentlichen Report planen."
---

## TL;DR

Das Power Platform Admin Plugin in der Vorschau beantwortet Fragen zum Copilot Credit Verbrauch in natürlicher Sprache. Es wird unter Customize aktiviert, verbindet sich über Power Platform for Admins V2 per OAuth mit einem Administratorkonto und liefert Verbrauch, zugewiesene Credits und Snapshot-Datum je Umgebung. Charts und wöchentliche geplante Reports sind möglich, das Plugin bleibt rein lesend.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Power Platform Admin Plugin in Cowork mit einem Konto der Rollen Power Platform Administrator, Dynamics 365 Administrator oder Global Administrator verbinden und Credit Tabellen und Charts je Umgebung statt manueller Reports abfragen.
- Security/Compliance: Das Plugin ist rein lesend und fragt Datenzugriff nach; geplante Reports erst nach Prüfung von Zeitplan und Zustellung freigeben.
- Leadership/Business: Ein wöchentlicher Chart mit Verbrauch und zugewiesenen Credits je Umgebung zeigt, wo sich Copilot Credit Kosten konzentrieren, ganz ohne Reporting Projekt.
