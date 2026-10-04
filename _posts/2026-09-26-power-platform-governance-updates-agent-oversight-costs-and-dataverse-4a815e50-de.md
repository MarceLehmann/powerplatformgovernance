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
  - question: "Was bietet Copilot Managed Runtime für Apps, die mit KI gebaut wurden?"
    answer: "Von Microsoft betriebenes Hosting für Anwendungen aus Cowork, Code und Copilot Studio, seit dem 25. September in der öffentlichen Vorschau. Genannt werden Entra-Identität, kontrollierte Datenverbindungen und Nutzungsüberwachung."
  - question: "Welche neuen Ausgabenkontrollen bringt das Kostenmanagement in Agent 365?"
    answer: "Neu sind Modellzugriffskontrollen, über die Microsoft Graph API verwaltbare Ausgabenrichtlinien, im Copilot sichtbarer Creditverbrauch und ein Wertbericht. Die Unterstützung für Copilot Studio ist für Oktober geplant."
  - question: "Deckt eine Microsoft-365-Copilot-Lizenz Copilot-Studio-Agenten auf dem GitHub-Copilot-Harness ab?"
    answer: "Nein. Agenten auf dem GitHub-Copilot-Harness verbrauchen Credits beim Bauen, Testen, Auswerten und im Betrieb, und die Microsoft-365-Copilot-Lizenz deckt diese Nutzung nicht ab."
---
## TL;DR

Admins sollten Berechtigungen für Uploads fortgeschrittener Pakete vor dem 25. Oktober prüfen und GitHub-Copilot-Standardfunktionen vor dem 22. Oktober konfigurieren. Agenten brauchen Überwachung von Besitz, Zugriff, Nutzung, Kosten und Verhalten. Benutzerdefinierte Aufrufe des eingestellten Global Discovery Service müssen zur Power Platform List Environments API wechseln.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Berechtigungen für Uploads fortgeschrittener Pakete vor dem 25. Oktober prüfen, da sie sonst standardmässig erlaubt bleiben.
- Security/Compliance: Cowork-Browsernutzung mit einer kleinen genehmigten Gruppe testen und danach Conditional Access, DLP, Audits und Verbrauch prüfen.
- Makers: Benutzerdefinierte Integrationen und ALM-Skripte nach globaldisco.crm.dynamics.com durchsuchen und betroffene Aufrufe migrieren.
- Leadership/Business: Für Agenten die Überwachung von Besitz, Zugriff, Nutzung, Kosten und Verhalten verlangen, damit Risikorichtlinien angewendet werden können.
