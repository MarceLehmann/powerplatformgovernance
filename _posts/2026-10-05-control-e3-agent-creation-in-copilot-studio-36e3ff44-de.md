---
title: Agentenerstellung für E3-Nutzer in Copilot Studio steuern
description: Microsoft 365 E3 und E5 können klassische Agentenerstellung über Power
  Virtual Agents for Office 365 enthalten. Deaktivieren Sie den Dienstplan pro Nutzer
  oder per Gruppe.
date: '2026-10-05T16:57:58Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- copilot-studio
- environments
- dataverse
- alm
content_type: curated_summary
curation_id: 36e3ff4401291219904663f9
image:
  path: "/assets/img/curated/36e3ff4401291219904663f9.png"
  alt: 'Governance-Karte: A hidden service plan can open agent creation to E3 users.
    Govern the entitlement before agents and environments spread.'
permalink: "/de/posts/control-e3-agent-creation-in-copilot-studio-36e3ff44/"
translation_url: "/en/posts/control-e3-agent-creation-in-copilot-studio-36e3ff44/"
source_url: https://microsoft.github.io/mcscatblog/posts/e3-users-build-agents-turn-it-off/
source_site_url: https://microsoft.github.io/
source_title: Why Your E3 Users Can Suddenly Build Agents in Copilot Studio and How
  to Turn It Off
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Em D'Arcy
source_published_at: '2026-07-09'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie verhindern Admins, dass E3-Nutzer klassische Agenten in Copilot Studio
    erstellen?
  answer: Deaktivieren Sie den Dienstplan Power Virtual Agents for Office 365 pro
    Nutzer oder über eine Gruppenlizenzierung in Microsoft Entra ID.
- question: Welche Funktionen erhalten E3-Nutzer durch Power Virtual Agents for Office
    365?
  answer: Der Dienstplan erlaubt klassische Agenten in Dataverse for Teams Umgebungen
    und die Veröffentlichung in Teams, jedoch keine generative Orchestrierung oder
    Premium-Connectoren.
- question: Löscht die Deaktivierung des Dienstplans bestehende Copilot Studio Agenten
    oder Umgebungen?
  answer: Nein. Sie verhindert das Erstellen und Bearbeiten durch betroffene Nutzer,
    löscht aber keine bestehenden Agenten und bereinigt keine bereitgestellten Dataverse
    for Teams Umgebungen.
---

## TL;DR

Microsoft 365 E3 und E5 können über den Dienstplan Power Virtual Agents for Office 365 die Erstellung klassischer Agenten erlauben. Wird der Dienstplan pro Nutzer oder per Microsoft Entra ID Gruppenlizenzierung deaktiviert, können betroffene Nutzer keine klassischen Agenten mehr erstellen oder bearbeiten. Bestehende Agenten und Dataverse for Teams Umgebungen bleiben erhalten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Power Virtual Agents for Office 365 pro Nutzer oder über Gruppenlizenzierung deaktivieren, damit die Erstellung klassischer Agenten einheitlich gesteuert wird.
- Admins/CoE: Bestehende Dataverse for Teams Umgebungen prüfen, bevor der Zugriff eingeschränkt wird, weil die Deaktivierung keine Agenten oder Umgebungen löscht.
- Security/Compliance: Verwaltete Umgebungen und DLP-Richtlinien ergänzen, damit weiterhin zugelassene Maker innerhalb der Governance-Leitplanken arbeiten.
