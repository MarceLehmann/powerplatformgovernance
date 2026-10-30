---
title: Benutzerdefinierte SharePoint-Formulare mit einer eigenen Umgebung steuern
description: Benutzerdefinierte SharePoint-Formulare sind eigentlich Canvas-Apps.
  Eine eigene Produktionsumgebung und die Rolle SharePoint Custom Form Maker verbessern
  Übersicht und Kontrolle.
date: '2026-10-30T16:57:06Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- environments
- ownership
- security
- power-apps
content_type: curated_summary
curation_id: 41b6902fe7ccee545be2b2c6
image:
  path: "/assets/img/curated/41b6902fe7ccee545be2b2c6.png"
  alt: 'Governance-Karte: Custom forms are apps in disguise. Govern their environment
    before they become invisible risks.'
permalink: "/de/posts/govern-sharepoint-custom-forms-with-a-dedicated-power-platform-41b6902f/"
translation_url: "/en/posts/govern-sharepoint-custom-forms-with-a-dedicated-power-platform-41b6902f/"
source_url: https://www.michaelroth42.com/post/2025-09-10-custom-sharepoint-forms-an-admins-survival-guide/
source_site_url: https://www.michaelroth42.com/
source_title: SharePoint Custom Forms - An Admin’s Survival Guide
source_name: MichaelRoth42 Blog
source_language: en
source_language_name: English
source_author: Michael Roth
source_published_at: '2025-09-10'
source_type: article
faq:
- question: In welcher Umgebung werden benutzerdefinierte SharePoint-Formulare standardmässig
    gespeichert?
  answer: Benutzerdefinierte SharePoint-Formulare werden standardmässig in der Standardumgebung
    gespeichert, sofern Admins keine andere Umgebung für neue Formulare festlegen.
- question: Welche Rechte gibt die Rolle SharePoint Custom Form Maker?
  answer: Die Rolle erlaubt das Erstellen, Bearbeiten und Verwenden benutzerdefinierter
    SharePoint-Formulare, aber nicht das Erstellen anderer Apps oder Flows.
- question: Wie lassen sich bestehende SharePoint-Formulare aus der Standardumgebung
    verschieben?
  answer: Das Open-Source-Tool FlowPowerAppsMigrator kann bestehende benutzerdefinierte
    Formulare und Flows zwischen Umgebungen verschieben.
---

## TL;DR

Benutzerdefinierte SharePoint-Formulare in Power Apps liegen standardmässig in der Standardumgebung. Admins können mit Set-AdminPowerAppSharePointFormEnvironment eine eigene Produktionsumgebung festlegen. Dafür müssen Dataverse-Speicher und Dynamics 365-Apps aktiviert sein, damit die Rolle SharePoint Custom Form Maker installiert werden kann.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Behandelt ein angepasstes SharePoint-Formular wie eine zu steuernde Canvas-App, weil es Power Fx, Nachschlagen, Validierungen und Flows enthalten kann.
- Admins/CoE: Richtet eine eigene Produktionsumgebung ein und weist sie künftigen Formularen zu, damit diese leichter auffindbar und verwaltbar sind.
- Security/Compliance: Vergibt die Rolle SharePoint Custom Form Maker gezielt und prüft Berechtigungen, weil SharePoint- und Power-Apps-Berechtigungen voneinander abweichen können.
