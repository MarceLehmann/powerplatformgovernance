---
title: Copilot Studio Agents sicher per Cloud Flow oder direktem HTTP auslösen
description: Copilot Studio Agents lassen sich per Power Automate oder Direct Line
  auslösen, mit geschütztem Zugriff und sicherer Geheimnisverwaltung.
date: '2026-10-27T17:01:25Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- power-automate
- copilot-studio
content_type: curated_summary
curation_id: de53ecdff734e0f3f760cd98
image:
  path: "/assets/img/curated/de53ecdff734e0f3f760cd98.png"
  alt: 'Governance-Karte: HTTP triggers need guarded secrets. Secure the agent before
    you connect it.'
permalink: "/de/posts/trigger-copilot-studio-agents-securely-with-cloud-flows-or-direct-http-de53ecdf/"
translation_url: "/en/posts/trigger-copilot-studio-agents-securely-with-cloud-flows-or-direct-http-de53ecdf/"
source_url: https://microsoft.github.io/mcscatblog/posts/triggering-copilot-studio-http/
source_site_url: https://microsoft.github.io/
source_title: Triggering Copilot Studio Agents with HTTP Calls
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Roel Schenk
source_published_at: '2025-09-25'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie wird ein Copilot Studio Agent vor Direct Line HTTP-Aufrufen konfiguriert?
  answer: Veröffentlicht den Agent, wählt unter Security No Authentication, kopiert
    das Web-Channel-Sicherheitsgeheimnis und aktiviert Require secured access.
- question: Welche vier Direct-Line-Aufrufe senden eine Nachricht und lesen die Antwort
    eines Copilot Studio Agents?
  answer: Erzeugt ein Direct-Line-Token, startet eine Unterhaltung, sendet eine Textnachricht
    und ruft die Aktivitäten der Unterhaltung mit dem Token ab.
- question: Wie schützt man das Direct-Line-Geheimnis in einer Python-Integration?
  answer: Speichert das Geheimnis in Umgebungsvariablen oder Azure Key Vault, schützt
    den Endpunkt, rotiert Geheimnisse und ergänzt Wiederholungen sowie Zeitüberschreitungen.
animation:
  video: /assets/img/animations/de53ecdff734e0f3f760cd98-de.mp4
  poster: /assets/img/animations/de53ecdff734e0f3f760cd98-de.poster.webp
  width: 800
  height: 450
  alt: "Die Abfolge zeigt die Sicherheitskonfiguration des Copilot Studio Agent und danach das Erzeugen eines Direct-Line-Token, das Starten einer Unterhaltung, das Senden einer Nachricht und das Lesen der Aktivitaeten."
---

## TL;DR

Copilot Studio Agents können über einen Power Automate Cloud Flow oder vier Direct Line REST-Aufrufe ausgelöst werden. Der Agent benötigt No Authentication, ein Web-Channel-Sicherheitsgeheimnis und Require secured access. Direct-Line-Geheimnisse sollen in Azure Key Vault oder einem anderen sicheren Speicher liegen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Wählt Cloud Flow für eine native Power-Platform-Integration oder Direct Line für eine direkte REST-Integration, abhängig vom gewünschten Auslösemuster.
- Admins/CoE: Veröffentlicht den Agent, konfiguriert die Sicherheitseinstellungen und aktiviert Require secured access, bevor externe Anfragen zugelassen werden.
- Security/Compliance: Speichert Direct-Line-Geheimnisse sicher, schützt den Endpunkt durch Zugriffskontrollen, rotiert Geheimnisse regelmässig und ergänzt Wiederholungen, Zeitüberschreitungen sowie Protokollierung für produktive Integrationen.
