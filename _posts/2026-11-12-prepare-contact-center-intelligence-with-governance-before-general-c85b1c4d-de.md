---
title: Contact Center Intelligence vor der allgemeinen Verfügbarkeit richtig vorbereiten
description: Contact Center Intelligence braucht vor dem Start klare Connector-Verantwortung,
  Schutz für biometrische Daten, Copilot Studio Umgebungen und ein Kostenmodell.
date: '2026-11-12T10:41:05Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- environments
- coe
- copilot-studio
content_type: curated_summary
curation_id: c85b1c4df1d652c42594997f
image:
  path: "/assets/img/curated/c85b1c4df1d652c42594997f.png"
  alt: 'Governance-Karte: Roadmap dates are plans, not promises. Govern the connector
    and data before launch.'
permalink: "/de/posts/prepare-contact-center-intelligence-with-governance-before-general-c85b1c4d/"
translation_url: "/en/posts/prepare-contact-center-intelligence-with-governance-before-general-c85b1c4d/"
source_url: https://holgerimbery.blog/contact-center-intelligence-month-prepare-ga-dates
source_site_url: https://holgerimbery.blog/
source_title: 'Contact Center Intelligence one month in: what to prepare before the
  GA dates'
source_name: Holger Imbery fieldnotes and insights
source_language: en
source_language_name: English
source_author: Holger Imbery
source_published_at: '2026-11-12'
source_type: article
faq:
- question: Wie sollten Teams den universellen CCI Connector vor einem Pilot prüfen?
  answer: Teams sollten dokumentierten Status, Datenflüsse, Ausfallverhalten, Überwachung
    und die verantwortliche Person für die plattformspezifische Integration klären.
- question: Welche Governance braucht die CCI Sprachbiometrie?
  answer: Nötig sind Einwilligung, Zweckbindung, Aufbewahrungs- und Löschregeln, eine
    alternative Anmeldung sowie eine festgelegte Reaktion auf falsch akzeptierte Personen.
- question: Wie sollten CCI Customer Assist Agents in Copilot Studio verwaltet werden?
  answer: Nutzt getrennte Umgebungen, Richtlinien und Maker für Contact Center Agents
    sowie einen eigenen Release Prozess, während Wissen und Themen gezielt geteilt
    werden.
---

## TL;DR

Contact Center Intelligence läuft neben einer bestehenden Contact Center Plattform über Genesys Cloud oder einen universellen Connector. Vor einem Pilot sollten Teams Datenflüsse, Ausfälle und Verantwortlichkeiten prüfen, Sprachbiometrie und Qualitätssicherung regeln, getrennte Umgebungen einrichten und Copilot Credits ohne unbestätigte Roadmap Termine kalkulieren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Richtet getrennte Copilot Studio Umgebungen mit eigenen Richtlinien und Veröffentlichungsrechten für Contact Center Agents ein, weil Customer Assist denselben Builder nutzt.
- Security/Compliance: Klärt Einwilligung, Aufbewahrung, Löschung und Fallback für Stimmabdrücke vor einem biometrischen Pilot oder Go live.
- Leadership/Business: Behandelt Roadmap Termine als Planungsannahmen und verlangt dokumentierte Bereitschaft vor einer Freigabe.
- Makers: Ordnet jede CCI Funktion dem aktuellen Tool und Verantwortlichen zu und testet Connector Ausfälle, damit das Contact Center ohne KI weiterarbeitet.
