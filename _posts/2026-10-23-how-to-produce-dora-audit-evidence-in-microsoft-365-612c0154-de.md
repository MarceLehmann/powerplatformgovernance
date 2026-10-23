---
title: DORA-Prüfnachweise in Microsoft 365 erstellen
description: Microsoft 365- und Power-Platform-Assets inventarisieren, Verantwortliche
  zuweisen, Zugriffe prüfen und datierte DORA-Nachweise aufbewahren.
date: '2026-10-23T16:43:28Z'
author: governance_editorial
lang: de
toc: false
tags:
- compliance
- governance
- ownership
- power-automate
- copilot-studio
content_type: curated_summary
curation_id: 612c015446ed81b1749a3c4b
image:
  path: "/assets/img/curated/612c015446ed81b1749a3c4b.png"
  alt: 'Governance-Karte: DORA evidence must show what exists, who owns it and what
    happened over time.'
permalink: "/de/posts/how-to-produce-dora-audit-evidence-in-microsoft-365-612c0154/"
translation_url: "/en/posts/how-to-produce-dora-audit-evidence-in-microsoft-365-612c0154/"
source_url: https://rencore.com/en/blog/dora-audit-evidence-m365/
source_site_url: https://rencore.com/
source_title: How to produce DORA audit evidence in Microsoft 365
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Sind Copilot-Studio-Agenten und Power-Automate-Flows nach DORA IKT-Assets?
  answer: Ja. Agenten und Flows laufen im Mandanten, greifen auf Geschäftsdaten zu
    und verarbeiten sie, daher brauchen sie Eintrag, Besitzer und Abhängigkeiten im
    Asset-Register.
- question: Wie sollen Microsoft-365-Teams Zugriffe für DORA-Nachweise prüfen?
  answer: Besitzer sollen Zugriffe auf Arbeitsbereiche, Apps und Agenten nach einem
    festen Zeitplan bestätigen, nicht bestätigte Zugriffe entfernen und Prüfprotokolle
    aufbewahren.
- question: Welche Unterlagen belegen Microsoft-365-DORA-Kontrollen über längere Zeit?
  answer: Kontrollzuordnung, Asset-Inventar, Besitz- und Zugriffsprüfungen, Richtlinienverläufe
    sowie Auditdaten zeigen Bestand, Verantwortlichkeit und Veränderungen nachvollziehbar.
---

## TL;DR

DORA behandelt Microsoft 365-Arbeitsbereiche, Power Apps, Power Automate-Flows und Copilot-Studio-Agenten als IKT-Assets. Ordnen Sie Pflichten Kontrollen zu, erfassen Sie Besitzer und Abhängigkeiten, überwachen Sie Richtlinienabweichungen, prüfen Sie Zugriffe regelmässig und bündeln Sie datierte Nachweise für Aufsichten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erfassen Sie Besitzer, Aktivität und erreichbare Daten für jede App, jeden Flow und jeden Agenten, weil von Fachanwendern erstellte Assets sonst im IKT-Register fehlen können.
- Admins/CoE: Pflegen Sie ein aktuelles serviceübergreifendes Inventar, Richtlinien-Baselines und geplante Zugriffsprüfungen, damit verwaiste oder überberechtigte Assets zwischen Audits erkannt werden.
- Security/Compliance: Bewahren Sie Kontrollzuordnung, Prüfentscheidungen, Richtlinienergebnisse und Microsoft-Purview-Auditdaten mit Zeitbezug auf, weil Screenshots keine historischen Abläufe belegen.
- Leadership/Business: Benennen Sie Verantwortliche für DORA-Kontrollen und stellen Sie Nachweise im normalen Betrieb sicher, damit unter Auditdruck keine Entscheidungen rekonstruiert werden müssen.
