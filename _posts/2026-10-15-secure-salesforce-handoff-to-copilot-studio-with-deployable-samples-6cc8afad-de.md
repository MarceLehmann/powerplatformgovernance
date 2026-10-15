---
title: Sichere Salesforce-Übergabe an Copilot Studio mit bereitstellbaren Beispielen
description: Die aktualisierte Anleitung ergänzt Apex-Beispiele, Named Credentials,
  Berechtigungen und Skripte für die Verbindung von Salesforce Einstein Bot mit Copilot
  Studio.
date: '2026-10-15T17:01:23Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- alm
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 6cc8afadb5444c8783e63d89
image:
  path: "/assets/img/curated/6cc8afadb5444c8783e63d89.png"
  alt: 'Governance-Karte: Keep secrets out of Apex code. Use Named Credentials.'
permalink: "/de/posts/secure-salesforce-handoff-to-copilot-studio-with-deployable-samples-6cc8afad/"
translation_url: "/en/posts/secure-salesforce-handoff-to-copilot-studio-with-deployable-samples-6cc8afad/"
source_url: https://microsoft.github.io/mcscatblog/posts/salesforce-copilot-studio-handoff/
source_site_url: https://microsoft.github.io/
source_title: 'Salesforce Handoff to Copilot Studio: From Bare Docs to One-Click Deploy'
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-03-13'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie übergibt der Confused-Dialog von Salesforce Einstein Bot Nachrichten
    an Copilot Studio?
  answer: Der Confused-Dialog leitet eine nicht erkannte Kundennachricht über die
    Direct-Line-API weiter. Einstein Bot zeigt danach die Antwort von Copilot Studio
    an.
- question: Was richtet das Salesforce-Bereitstellungsskript für die Copilot-Studio-Integration
    ein?
  answer: Es stellt drei Apex-Klassen bereit, erstellt Callout- und Credential-Einstellungen,
    vergibt Klassenberechtigungen und fügt den Zugriff auf den Credential Principal
    hinzu.
- question: Warum sollte das Direct-Line-Geheimnis in Salesforce Named Credentials
    liegen?
  answer: Named Credentials halten das Geheimnis aus dem Apex-Quellcode heraus, zentralisieren
    die Rotation und begrenzen den Zugriff auf das Chatbot-Berechtigungsset.
---

## TL;DR

Salesforce Einstein Bot leitet nicht erkannte Nachrichten über Direct Line an Copilot Studio weiter. Bereitstellungsskripte erstellen drei Apex-Klassen, Credential-Einstellungen und Berechtigungen. Named Credentials halten Direct-Line-Geheimnisse aus dem Code heraus. Die Integration unterstützt nicht authentifizierte Agents und verwendet konfigurierbares Polling mit standardmässig fünf Sekunden Verzögerung und fünf Wiederholungen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Konfiguriert die Welcome- und Confused-Dialoge in Einstein Bot, damit nicht erkannte Nachrichten Copilot Studio erreichen und Antworten zurückkehren.
- Admins/CoE: Führt das Bereitstellungsskript aus und ergänzt das Direct-Line-Geheimnis danach manuell in der External Credential, weil Geheimnisse absichtlich aus Skripten ausgeschlossen sind.
- Security/Compliance: Verwendet Named Credentials und den Zugriff über das Chatbot-Berechtigungsset, um Geheimnisrotation zu zentralisieren und den Zugriff auf den Credential Principal einzuschränken.
