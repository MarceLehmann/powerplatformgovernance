---
title: KI Tools, Agenten und Assistenten im Unternehmen inventarisieren
description: Eine aktuelle KI-Inventur aus Mandanten- und Identitätssignalen aufbauen
  und für jedes Tool oder jeden Agenten Besitzer, Nutzer, Datenzugriff und Risiko
  erfassen.
date: '2026-10-23T16:43:28Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: ec1e5cfc0d42dc9c9d725b7b
image:
  path: "/assets/img/curated/ec1e5cfc0d42dc9c9d725b7b.png"
  alt: 'Governance-Karte: AI governance starts with signals, not surveys. Name the
    owner, data reach and risk for every tool.'
permalink: "/de/posts/how-to-inventory-ai-tools-agents-and-assistants-across-your-ec1e5cfc/"
translation_url: "/en/posts/how-to-inventory-ai-tools-agents-and-assistants-across-your-ec1e5cfc/"
source_url: https://rencore.com/en/blog/inventory-ai-tools/
source_site_url: https://rencore.com/
source_title: How to inventory the AI tools in use across your organization
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Wie findet man KI-Dienste ausserhalb von Microsoft 365 Copilot?
  answer: Prüfen Sie in Entra ID die freigegebenen Unternehmensanwendungen und ergänzen
    Sie ausserhalb von Microsoft lizenzierte KI-Dienste samt Mitgliederlisten. Umfragen
    dürfen nur Lücken schliessen.
- question: Welche Angaben gehören in den Eintrag eines Copilot Studio-Agenten?
  answer: Erfassen Sie Besitzer, Nutzer, Datenzugriff, Fähigkeiten, Risikobewertung
    und Prüfdatum. Für Agenten kommen Umgebung, Wissensquellen und Anmeldepflicht
    hinzu.
- question: Warum sollten Anwendungen ohne Besitzer in Entra ID zuerst geprüft werden?
  answer: Anwendungen ohne Besitzer und mit Microsoft Graph-Berechtigungen können
    Unternehmensdaten lesen, ohne dass jemand dafür verantwortlich ist. Sie sollten
    zuerst untersucht werden.
animation:
  src: /assets/img/animations/ec1e5cfc0d42dc9c9d725b7b-de.gif
  poster: /assets/img/animations/ec1e5cfc0d42dc9c9d725b7b-de.poster.png
  width: 800
  height: 450
  alt: "Ein Ablauf mit vier Schritten zeigt den Aufbau einer KI-Inventur: mit Microsoft 365 Copilot, Copilot Studio und SharePoint-Agenten beginnen, Entra ID-Apps und externe KI-Dienste ergaenzen, Felder erfassen und regelmaessig aktualisieren."
---

## TL;DR

Beginnen Sie mit Microsoft 365 Copilot, Copilot Studio und SharePoint-Agenten. Ergänzen Sie Entra ID-Anwendungen und extern lizenzierte Dienste wie Claude Enterprise und ChatGPT Enterprise. Erfassen Sie Besitzer, Nutzer, Datenzugriff und Risiko und aktualisieren Sie die Inventur regelmässig, weil monatlich neue Tools hinzukommen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Copilot Studio- und SharePoint-Agenten, Lizenzen, Entra ID-Anwendungen und externe Dienste entdecken und regelmässig neu prüfen.
- Security/Compliance: Anwendungen mit Microsoft Graph-Berechtigungen ohne Besitzer zuerst prüfen und Risiken anhand von Datenempfindlichkeit, Aktionsumfang und Nutzerzahl bewerten.
- Makers: Für jeden Agenten Besitzer, Nutzer, Wissensquellen und Datenzugriff dokumentieren, damit eine verantwortliche Prüfung möglich ist.
