---
title: KI-Agenten mit unabhängigen Kontrollen sicher begrenzen
description: KI-Agenten können wie interne Risiken behandelt werden. Begrenzte Berechtigungen
  und getrennte Kontrollen für Autorisierung, Protokollierung und Abschaltung reduzieren
  den möglichen Schaden.
date: '2026-10-11T10:35:19Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
- copilot-studio
- dataverse
- power-apps
content_type: curated_summary
curation_id: 57fd953f49be484b32598f3d
image:
  path: "/assets/img/curated/57fd953f49be484b32598f3d.png"
  alt: 'Governance-Karte: Trust less. Control more. Keep AI authority outside the
    model.'
permalink: "/de/posts/design-ai-agents-so-independent-controls-can-stop-them-57fd953f/"
translation_url: "/en/posts/design-ai-agents-so-independent-controls-can-stop-them-57fd953f/"
source_url: https://www.consultor365.com/ia/la-ia-mas-segura-es-la-que-mejor-podemos-controlar/
source_site_url: https://www.consultor365.com/
source_title: La IA más segura es la que mejor podemos controlar
source_name: Consultor 365
source_language: es
source_language_name: es
source_author: Ramón Rautenstrauch
source_published_at: '2026-10-11'
source_updated_at: '2026-10-11'
source_type: article
faq:
- question: Wie sollten Berechtigungen für einen Dynamics 365 Sales Agenten vergeben
    werden?
  answer: Ein Dynamics 365 Sales Agent sollte nur den für seine Aufgabe nötigen Zugriff
    erhalten, mit zusätzlichen Prüfungen für sensible Vorgänge.
- question: Warum sollte die Autorisierung eines KI-Agenten ausserhalb des Modell-Prompts
    liegen?
  answer: Eine externe Autorisierung kann eine unzulässige Aktion ablehnen oder eine
    menschliche Freigabe verlangen, selbst wenn das Modell sie anfordert.
- question: Kann eine Chain-of-Thought-Spur einen KI-Agenten unabhängig auditieren?
  answer: Nein. Eine Begründungsspur ist kein unabhängiger Nachweis, daher müssen
    Betriebsdaten Anfragen, angewandte Kontrollen und ausgeführte Aktionen zeigen.
---

## TL;DR

KI-Agenten mit Zugriff auf Dynamics 365, Copilot Studio oder die Power Platform sollten nur notwendige Berechtigungen erhalten. Eine externe Autorisierung muss unzulässige Aktionen ablehnen, während Beobachtung, Tests, Audits und Unterbrechungsmechanismen die Ausführung dokumentieren und begrenzen. Microsoft Agent 365 wird als Steuerungsebene für kompatible Unternehmensagenten beschrieben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Vergebt Agenten nur die erforderlichen Berechtigungen und verlangt zusätzliche Prüfungen für sensible Aktionen, damit Fehler und Prompt Injection weniger Schaden verursachen.
- Admins/CoE: Haltet Autorisierung, Audits, Beobachtung und Unterbrechung ausserhalb der Modelllogik, damit Vorgänge rekonstruiert und gestoppt werden können.
- Security/Compliance: Sichert Nachweise zu Tool-Nutzung, Datenzugriffen, Änderungen und Ergebnissen und testet bösartige Eingaben, Integrationsfehler, Konfigurationsänderungen und unerlaubte Tool-Nutzung.
