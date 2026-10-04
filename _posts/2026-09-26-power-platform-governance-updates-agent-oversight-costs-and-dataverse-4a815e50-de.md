---
title: 'Power Platform Governance: Agentenaufsicht, Kostenkontrolle und Dataverse-Ablösung'
description: Die Wochenübersicht behandelt Agenten-Governance, KI-Ausgaben, Browserberechtigungen,
  Work IQ und das Ende der Dataverse Global Discovery Service APIs.
date: '2026-09-26T02:15:24Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- dlp
- ownership
- dataverse
content_type: curated_summary
curation_id: 4a815e508d8e70fb32f77d66
image:
  path: "/assets/img/curated/4a815e508d8e70fb32f77d66.png"
  alt: 'Governance-Karte: Agent governance must track ownership, access, usage, cost,
    and behaviour.'
permalink: "/de/posts/power-platform-governance-updates-agent-oversight-costs-and-dataverse-4a815e50/"
translation_url: "/en/posts/power-platform-governance-updates-agent-oversight-costs-and-dataverse-4a815e50/"
source_url: https://flowaltdelete.ca/2026/09/25/microsoft-ai-power-platform-weekly-update-september-21-2026/
source_site_url: https://flowaltdelete.ca/
source_title: 'AI Weekly: Copilot’s Super App, Work IQ, and New Models'
source_name: Flow Alt Delete
source_language: en
source_language_name: English
source_author: Josh Cook
source_published_at: '2026-09-25'
source_updated_at: '2026-09-25'
source_type: article
faq:
  - question: "Was ist Work IQ und wann beginnt die öffentliche Vorschau?"
    answer: "Work IQ verbindet Daten aus Dynamics 365 und der Power Platform mit Copilot und Agenten, die öffentliche Vorschau startet am 30. September. Grundlage sind semantische Modelle aus ausgewählten Tabellen, Spalten, Beziehungen, Ansichten, Formularen und Fachbegriffen. Dataverse speichert die Modelle, Maker können Definitionen verfeinern und für mehrere Agenten wiederverwenden. Die Unterstützung für Finance and Operations folgt Ende Oktober."
  - question: "Was bietet Copilot Managed Runtime für Apps, die mit KI gebaut wurden?"
    answer: "Es ist ein von Microsoft betriebenes Hosting für Anwendungen, die in Cowork, Code und Copilot Studio entstehen, und befindet sich seit dem 25. September in der öffentlichen Vorschau. Genannt werden die Anbindung der Entra-Identität, kontrollierte Datenverbindungen, Quellcodeverwaltung über Git sowie Nutzungs- und Zustandsüberwachung im Microsoft 365 Admin Center."
  - question: "Welche neuen Ausgabenkontrollen bringt das Kostenmanagement in Agent 365?"
    answer: "Es wird auf Code, Managed Runtime, Cowork und die Work-IQ-APIs ausgedehnt. Neu sind Modellzugriffskontrollen, die festlegen, welche Modellfamilien eine Gruppe nutzen darf, Ausgabenrichtlinien, die sich über die Microsoft Graph API verwalten lassen, für Nutzer sichtbarer Creditverbrauch in Copilot und ein Wertbericht, der Ausgaben mit erzielter Arbeit verknüpft. Die Unterstützung für Copilot Studio ist für Oktober geplant."
  - question: "Was hat sich bei der Global Discovery Service REST API in Dataverse geändert?"
    answer: "Der Support dafür ist am 21. September ausgelaufen. Wer sie noch aufruft, muss auf die Power Platform List Environments API umstellen. Der Wochenüberblick zählt das zu den administrativen Terminen. Integrationen und Skripte, die Umgebungen über die alte Schnittstelle auflisten, solltest du deshalb prüfen."
  - question: "Deckt eine Microsoft-365-Copilot-Lizenz Copilot-Studio-Agenten auf dem GitHub-Copilot-Harness ab?"
    answer: "Nein. Agenten auf dem GitHub-Copilot-Harness verbrauchen Credits beim Bauen, Testen, Auswerten und im Betrieb, und die Microsoft-365-Copilot-Lizenz deckt diese Nutzung nicht ab. Drei Roadmap-Punkte mit Ziel September 2026 versprechen mehr Kostentransparenz für Vorschau und Tests, für Agentenbewertungen und für die Überwachung pro Agent."
---
## TL;DR

Admins sollten Berechtigungen für Uploads fortgeschrittener Pakete vor dem 25. Oktober prüfen und GitHub-Copilot-Standardfunktionen vor dem 22. Oktober konfigurieren. Agenten brauchen Überwachung von Besitz, Zugriff, Nutzung, Kosten und Verhalten. Benutzerdefinierte Aufrufe des eingestellten Global Discovery Service müssen zur Power Platform List Environments API wechseln.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Berechtigungen für Uploads fortgeschrittener Pakete vor dem 25. Oktober prüfen, da sie sonst standardmässig erlaubt bleiben.
- Security/Compliance: Cowork-Browsernutzung mit einer kleinen genehmigten Gruppe testen und danach Conditional Access, DLP, Audits und Verbrauch prüfen.
- Makers: Benutzerdefinierte Integrationen und ALM-Skripte nach globaldisco.crm.dynamics.com durchsuchen und betroffene Aufrufe migrieren.
- Leadership/Business: Für Agenten die Überwachung von Besitz, Zugriff, Nutzung, Kosten und Verhalten verlangen, damit Risikorichtlinien angewendet werden können.
