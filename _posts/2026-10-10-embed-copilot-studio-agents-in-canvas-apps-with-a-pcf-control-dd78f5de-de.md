---
title: Copilot Studio Agents mit einem PCF-Steuerelement in Canvas Apps einbetten
description: Das ChatControl-PCF-Steuerelement ersetzt das veraltete Copilot-Steuerelement
  und bietet SSO, eigenes Design sowie bidirektionale Kommunikation.
date: '2026-10-10T16:54:18Z'
author: governance_editorial
lang: de
toc: false
tags:
- power-apps
- copilot-studio
- environments
- security
content_type: curated_summary
curation_id: dd78f5deac83abbb251911ae
image:
  path: "/assets/img/curated/dd78f5deac83abbb251911ae.png"
  alt: 'Governance-Karte: A PCF control needs environment approval before it can embed
    an agent. Secure the connection before scaling the experience.'
permalink: "/de/posts/embed-copilot-studio-agents-in-canvas-apps-with-a-pcf-control-dd78f5de/"
translation_url: "/en/posts/embed-copilot-studio-agents-in-canvas-apps-with-a-pcf-control-dd78f5de/"
source_url: https://microsoft.github.io/mcscatblog/posts/embed-copilot-studio-agents-canvas-apps/
source_site_url: https://microsoft.github.io/
source_title: Embed Copilot Studio Agents in Canvas Apps with a PCF Control
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Dieter De Cock
source_published_at: '2026-04-17'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Wie bette ich nach der Ablösung des integrierten Copilot-Steuerelements
    einen Copilot Studio Agenten in eine Canvas App ein?
  answer: Verwendet das ChatControl-PCF-Steuerelement aus dem Copilot Studio Samples
    Repository und importiert dessen Power Platform Lösung in die Umgebung.
- question: Was muss in Power Platform aktiviert sein, bevor ChatControl zu einer
    Canvas App hinzugefügt werden kann?
  answer: PCF-Komponenten müssen in der Zielumgebung aktiviert sein. Zusätzlich werden
    dort Systemadministratorrechte für die Einrichtung benötigt.
- question: Wie funktioniert SSO für einen über ChatControl eingebetteten Copilot
    Studio Agenten?
  answer: ChatControl nutzt das Microsoft 365 Agents SDK für SSO. Dafür sind eine
    Azure-App-Registrierung und Konfiguration in Azure sowie Copilot Studio erforderlich.
---

## TL;DR

Das integrierte Copilot-Steuerelement kann seit dem 2. Februar 2026 nicht mehr zu neuen Canvas Apps hinzugefügt werden. ChatControl bettet einen veröffentlichten Copilot Studio Agenten über WebChat und das Microsoft 365 Agents SDK ein. Dafür müssen PCF-Komponenten aktiviert sein, Microsoft-Authentifizierung vorliegen und eine Azure-App-Registrierung für SSO eingerichtet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt ChatControl, wenn eine Canvas App einen eingebetteten Copilot Studio Agenten, eigenes Design oder Kontextübergabe benötigt.
- Admins/CoE: Aktiviert PCF-Komponenten in der Zielumgebung und stellt vor dem Lösungsimport Systemadministratorrechte sicher.
- Security/Compliance: Richtet Microsoft-Authentifizierung und die für SSO erforderliche Azure-App-Registrierung in Azure und Copilot Studio ein.
- Leadership/Business: Berücksichtigt das veraltete integrierte Steuerelement und prüft, ob Microsoft 365 Copilot in Canvas Apps in der eigenen Umgebung verfügbar ist.
