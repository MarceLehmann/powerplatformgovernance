---
title: Microsoft 365 Copilot-Agenten mit Piloten und Eigentumsregeln steuern
description: Begrenzen Sie Nutzer, Herausgeber, Freigaben und einzelne Agenten und
  prüfen Sie Oversharing vor dem Rollout.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 75b0438b21c9779a1704a56b
image:
  path: "/assets/img/curated/75b0438b21c9779a1704a56b.png"
  alt: 'Governance-Karte: Enable agents gradually. Fix oversharing before agents make
    it visible.'
permalink: "/de/posts/govern-microsoft-365-copilot-agents-with-pilots-and-ownership-rules-75b0438b/"
translation_url: "/en/posts/govern-microsoft-365-copilot-agents-with-pilots-and-ownership-rules-75b0438b/"
source_url: https://www.andersjensen.org/en/articles/should-you-enable-agents-in-microsoft-365-copilot/
source_site_url: https://www.andersjensen.org/
source_title: Should You Enable Agents in Microsoft 365 Copilot?
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-12'
source_type: article
---

## TL;DR

Deklarative Agenten in Microsoft 365 Copilot verwenden die Berechtigungen der anfragenden Person und haben keine eigene Entra-ID-Identität. Prüfen Sie vor der Aktivierung mit Purview und SharePoint Advanced Management auf Oversharing, starten Sie mit einer Pilotgruppe, bewerten Sie externe Herausgeber einzeln und nutzen Sie Agent Management Rules für eigentümerlose Agenten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Begrenzen Sie User access auf eine Pilotgruppe und erweitern Sie erst nach der Nutzungsbeobachtung und Prüfung der Datenquellen jedes Agenten.
- Security/Compliance: Nutzen Sie Purview und SharePoint Advanced Management, um alte weitreichende Berechtigungen zu finden, bevor Agenten diese schneller sichtbar machen.
- Admins/CoE: Lassen Sie zuerst Microsoft- und Organisationsagenten zu, bewerten Sie externe Herausgeber einzeln und definieren Sie Freigabe- sowie Eigentümerübertragungsregeln.
- Leadership/Business: Dokumentieren Sie Aktivierungsentscheidung, Begründung und Risiko nutzungsbasierter Kosten, damit spätere Prüfungen nicht von Erinnerungen abhängen.
