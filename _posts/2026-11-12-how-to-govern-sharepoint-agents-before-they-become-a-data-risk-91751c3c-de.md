---
title: SharePoint-Agenten vor Datenrisiken richtig steuern
description: Alle SharePoint-Agenten erfassen, Verantwortliche benennen, den Website-Zugriff
  prüfen und Agenten mit veralteten oder besitzerlosen Inhalten stilllegen.
date: '2026-11-12T16:51:37Z'
author: governance_editorial
lang: de
toc: false
tags:
- ownership
- security
- compliance
- copilot-studio
content_type: curated_summary
curation_id: 91751c3cfdf761847f63decc
image:
  path: "/assets/img/curated/91751c3cfdf761847f63decc.png"
  alt: 'Governance-Karte: An agent is only as safe as the site it reads. Govern the
    site, not just the agent.'
permalink: "/de/posts/how-to-govern-sharepoint-agents-before-they-become-a-data-risk-91751c3c/"
translation_url: "/en/posts/how-to-govern-sharepoint-agents-before-they-become-a-data-risk-91751c3c/"
source_url: https://rencore.com/en/blog/govern-sharepoint-agents/
source_site_url: https://rencore.com/
source_title: How to govern SharePoint agents
source_name: Rencore
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: Wie lassen sich SharePoint-Agenten und Copilot-Studio-Agenten gemeinsam
    erfassen?
  answer: Führt ein regelmässig aktualisiertes Inventar mit jedem Agenten, seiner
    SharePoint-Website, den Wissensquellen und der Dateianzahl neben den Copilot-Studio-Agenten.
- question: Welche Risiken einer SharePoint-Website sollten vor dem Lesen durch einen
    Agenten geprüft werden?
  answer: Prüft Sensitivitätsbezeichnungen, externe Freigaben, Bearbeitungsrechte,
    externe Website-Besitzer und unterbrochene Vererbung vor dem Zugriff des Agenten.
- question: Wann sollte ein SharePoint-Agent stillgelegt werden?
  answer: Stilllegt Agenten auf veralteten Websites, auch auf Websites ohne Öffnung
    seit 90 Tagen, nachdem der Verantwortliche über Behalten oder Archivieren entschieden
    hat.
---

## TL;DR

SharePoint-Agenten antworten aus ihren Websites mit den Berechtigungen der anfragenden Person. Erfasse jeden Agenten mit Website, Wissensquellen und Dateianzahl, benenne einen Verantwortlichen, prüfe Bezeichnungen, externe Freigaben und Bearbeitungsrechte, korrigiere die Website vor der Nutzung und entferne Agenten mit Websites, die 90 Tage inaktiv waren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Beschränkt die Quellen eines Agenten auf Inhalte, für die der Website-Verantwortliche einstehen kann, weil Antworten aus den Dateien dieser Website entstehen.
- Admins/CoE: Führt ein regelmässig aktualisiertes Inventar von SharePoint- und Copilot-Studio-Agenten mit Websites, Wissensquellen und Dateianzahl, weil einmalige Exporte schnell veralten.
- Security/Compliance: Prüft Sensitivitätsbezeichnungen, externe Freigaben, Bearbeitungsrechte und unterbrochene Vererbung, bevor ein Agent eine Website liest, weil falsch freigegebene oder unbezeichnete Dateien zu Antworten werden können.
- Leadership/Business: Verlangt benannte Verantwortliche und Prüfungen für veraltete oder besitzerlose Websites, weil sonst niemand für überholte Antworten rechenschaftspflichtig bleibt.
