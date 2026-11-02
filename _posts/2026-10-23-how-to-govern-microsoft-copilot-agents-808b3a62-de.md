---
title: Microsoft Copilot Agents richtig steuern
description: Copilot Studio und SharePoint Agents erfassen, Besitzer zuweisen, Risiken
  bewerten und veraltete oder exponierte Agents stilllegen.
date: '2026-10-23T16:43:26Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- coe
- copilot-studio
content_type: curated_summary
curation_id: 808b3a62f9e38817fca9ae7e
image:
  path: "/assets/img/curated/808b3a62f9e38817fca9ae7e.png"
  alt: 'Governance-Karte: Every agent needs an owner, a risk rank and a review path.'
permalink: "/de/posts/how-to-govern-microsoft-copilot-agents-808b3a62/"
translation_url: "/en/posts/how-to-govern-microsoft-copilot-agents-808b3a62/"
source_url: https://rencore.com/en/blog/govern-copilot-agents/
source_site_url: https://rencore.com/
source_title: How to govern Microsoft Copilot agents
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Wie sollten Copilot Studio und SharePoint Agents in allen Umgebungen erfasst
    werden?
  answer: Erfasst werden alle Agents mit Ersteller, Umgebung, Veröffentlichungsstatus,
    Besitzer, Wissensquellen, Connectors, Aktionen und Anmeldeanforderung. So bleibt
    ihre Reichweite nachvollziehbar.
- question: Was ist das Risiko eines ohne Anmeldung veröffentlichten Copilot Agents?
  answer: Ein ohne Anmeldung veröffentlichter Agent kann von jeder Person mit dem
    Link genutzt werden. Seine Einstufung hängt ausserdem von Daten, Aktionen und
    Nutzerkreis ab.
- question: Wann sollten ungenutzte Copilot Studio Agents ausser Betrieb genommen
    werden?
  answer: Agents sollten nach 90 Tagen ohne Nutzung zurückgezogen oder gelöscht werden,
    Entwürfe ohne Veröffentlichung nach 30 Tagen. Jede Entscheidung sollte dokumentiert
    werden.
animation:
  video: /assets/img/animations/808b3a62f9e38817fca9ae7e-de.mp4
  poster: /assets/img/animations/808b3a62f9e38817fca9ae7e-de.poster.webp
  width: 800
  height: 450
  alt: "Die Abfolge zeigt die Steuerung von Copilot Agents: alle Copilot Studio und SharePoint Agents erfassen, Besitz und Status dokumentieren, Risiken bewerten und veraltete oder unveroeffentlichte Agents stilllegen."
---

## TL;DR

Erfasse jeden Copilot Studio und SharePoint Agent in allen Umgebungen. Dokumentiere Besitzer, Wissensquellen, Connectors, Aktionen, Veröffentlichung und Anmeldung. Bewerte das Risiko nach Datenempfindlichkeit, Aktionsumfang und Autonomie. Agents ohne Nutzung nach 90 Tagen und unveröffentlichte Entwürfe nach 30 Tagen stilllegen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erstellung in verwalteten Umgebungen offen halten, einen Besitzer zuweisen und Veröffentlichung, Reichweite, Quellen sowie Anmeldung prüfen, bevor Daten offengelegt werden.
- Admins/CoE: Jeden Copilot Studio und SharePoint Agent in allen Umgebungen erfassen, Quellen, Connectors, Aktionen und Nutzung abbilden, Risiken bewerten und Entscheidungen dokumentieren.
- Security/Compliance: Agents mit vertraulichen Daten, weitreichenden oder autonomen Aktionen, fehlender Anmeldung, fehlendem Besitzer oder veralteter Nutzung zuerst prüfen, weil sie die Datenexposition erhöhen.
- Leadership/Business: Für geschäftskritische Agents einen zweiten Besitzer verlangen und ungenutzte Agents nach 90 Tagen oder Entwürfe nach 30 Tagen stilllegen, damit Zugriff und Prüfaufwand kontrolliert bleiben.
