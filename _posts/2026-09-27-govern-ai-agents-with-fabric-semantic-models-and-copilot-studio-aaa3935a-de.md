---
title: KI-Agenten mit Fabric-Semantikmodellen und Copilot Studio steuern
description: Power BI-Semantikmodelle liefern die kontrollierte Berechnungsschicht
  für KI-Agenten, während Fabric, Copilot Studio und klare Sicherheitsgrenzen den
  Kontext absichern.
date: '2026-09-27T00:08:18Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- copilot-studio
content_type: curated_summary
curation_id: aaa3935ae6194c68f263d3c5
image:
  path: "/assets/img/curated/aaa3935ae6194c68f263d3c5.png"
  alt: 'Governance-Karte: AI agents need governed context, not raw data. Anchor calculations
    to one source of truth.'
permalink: "/de/posts/govern-ai-agents-with-fabric-semantic-models-and-copilot-studio-aaa3935a/"
translation_url: "/en/posts/govern-ai-agents-with-fabric-semantic-models-and-copilot-studio-aaa3935a/"
source_url: https://www.m365.fm/blog/microsoft-fabric-semantic-models-ai-agents/
source_site_url: https://www.m365.fm/
source_title: 'Building the Organizational Brain: Combining Microsoft Fabric Semantic
  Models with AI Agents'
source_name: M365 FM
source_language: en
source_language_name: English
source_published_at: '2026-09-16'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
  - question: "Warum liefern reine Sprachmodelle unzuverlässige Finanzzahlen?"
    answer: "Ein ungeerdetes KI-Modell, das eine Quartals-GuV analysieren soll, liefert oft halluzinierte Zahlen und widersprüchliche Wahrheiten."
  - question: "Aus welchen fünf Schichten besteht die gesteuerte Agentenarchitektur?"
    answer: "Daten, Logik, Tools, Skills und Governance. Die Datenebene ruht auf vertrauenswürdigen Unternehmensdaten in OneLake und Delta-Tabellen."
  - question: "Was trägt Direct Lake zu diesem Entwurf bei?"
    answer: "Direct Lake lässt Power BI Daten im Delta-Format aus OneLake direkt abfragen. Das beseitigt Datenduplikate und wiederholte Import-Aktualisierungen bei gleichbleibend hoher Analyseleistung."
---

## TL;DR

Power BI-Semantikmodelle liefern kontrollierte Berechnungen, Beziehungen und Geschäftsregeln, damit Copilot Studio und Datenagenten Finanz- und Betriebsdaten ohne erfundene Kennzahlen auswerten. Die vorgeschlagene Architektur umfasst fünf Schichten: Daten, Logik, Werkzeuge, Fähigkeiten und Governance. Berechtigungen und Compliance gelten dabei für Agenten wie für digitale Mitarbeitende.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Für Agentenantworten freigegebene Power BI-Semantikmodelle verwenden, damit Berechnungen und KPIs konsistent bleiben.
- Admins/CoE: Rollen, Berechtigungen und Sicherheitsgrenzen über alle fünf Architekturschichten definieren, weil Agenten einen kontrollierten Kontext benötigen.
- Security/Compliance: Automatisierte Compliance-Kontrollen anwenden und den Zugriff auf Unternehmensdaten prüfen, bevor konversationelle Einblicke aktiviert werden.
- Leadership/Business: Eine einzige Quelle für Finanzkennzahlen verlangen, damit personalisierte KI-Einblicke keine widersprüchlichen Leistungsbilder erzeugen.
