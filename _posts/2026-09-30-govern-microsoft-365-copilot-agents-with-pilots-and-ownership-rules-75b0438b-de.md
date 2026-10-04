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
faq:
  - question: "Welchen Zugriff haben deklarative Agenten in Microsoft 365 Copilot?"
    answer: "Denselben wie der Benutzer und nicht mehr. Agenten können keine SharePoint-Sites, Postfächer oder Teams-Kanäle öffnen, die der Benutzer selbst nicht öffnen kann. Sie laufen auf demselben Orchestrator, denselben Sprachmodellen und KI-Diensten wie Copilot, erben dessen Datenschutz und beachten Vertraulichkeitsbezeichnungen und Verschlüsselung aus Purview Information Protection."
  - question: "Was ist das Hauptrisiko beim Aktivieren von Agenten in Microsoft 365 Copilot?"
    answer: "Oversharing. Agenten geben keine Daten preis, aktivieren aber bestehende Berechtigungen schnell, wodurch zu breiter Zugriff auf alte SharePoint-Sites sichtbar wird. Der Autor nennt das ein Problem der Datenhygiene. Microsoft empfiehlt vor einem breiten Rollout Purview und SharePoint Advanced Management, die beide in Copilot-Lizenzen enthalten sind."
  - question: "Welche Steuerungen gibt es im Admin Center für Agenten in Microsoft 365?"
    answer: "Der Bereich Agents bietet Benutzerzugriff für alle, niemanden oder ausgewählte Benutzer und Gruppen, zulässige Agententypen von Microsoft, der eigenen Organisation und externen Herausgebern (auf Wunsch nur zertifizierte), Freigabe oder Sperre pro Agent, Regeln zum Teilen sowie Verwaltungsregeln mit Richtlinienvorlagen, auch für Agenten ohne Besitzer."
  - question: "Was passiert mit Agenten, wenn ihr Ersteller das Unternehmen verlässt?"
    answer: "Mit Agent Builder gebaute Agenten können herrenlos werden, wenn Mitarbeitende die Stelle wechseln. Das Admin Center bietet Verwaltungsregeln für Agenten ohne Besitzer, die sie an die Führungskraft des früheren Besitzers übertragen. Den Wildwuchs an Agenten zählt der Autor zu den Risiken, die ohne Leitplanken entstehen."
  - question: "Warum verursacht auch das Abschalten von Agenten Kosten?"
    answer: "Einschränkungen treiben Benutzer zu nicht freigegebenen Werkzeugen und zu Schatten-KI ausserhalb der IT-Sicht. Seit Dezember 2025 funktionieren die integrierten Agenten Researcher und Analyst als Werkzeuge in Copilot Chat auch bei deaktivierten Agenten, nur ihre Sichtbarkeit in der linken Navigation folgt dem Schalter. Der Autor schlägt vor, mit den Agenten von Microsoft und den eigenen zu beginnen, per Benutzerzugriff eine Pilotgruppe zu öffnen und danach zu erweitern, sobald die Nutzung bekannt ist."
---

## TL;DR

Deklarative Agenten in Microsoft 365 Copilot verwenden die Berechtigungen der anfragenden Person und haben keine eigene Entra-ID-Identität. Prüfen Sie vor der Aktivierung mit Purview und SharePoint Advanced Management auf Oversharing, starten Sie mit einer Pilotgruppe, bewerten Sie externe Herausgeber einzeln und nutzen Sie Agent Management Rules für eigentümerlose Agenten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Begrenzen Sie User access auf eine Pilotgruppe und erweitern Sie erst nach der Nutzungsbeobachtung und Prüfung der Datenquellen jedes Agenten.
- Security/Compliance: Nutzen Sie Purview und SharePoint Advanced Management, um alte weitreichende Berechtigungen zu finden, bevor Agenten diese schneller sichtbar machen.
- Admins/CoE: Lassen Sie zuerst Microsoft- und Organisationsagenten zu, bewerten Sie externe Herausgeber einzeln und definieren Sie Freigabe- sowie Eigentümerübertragungsregeln.
- Leadership/Business: Dokumentieren Sie Aktivierungsentscheidung, Begründung und Risiko nutzungsbasierter Kosten, damit spätere Prüfungen nicht von Erinnerungen abhängen.
