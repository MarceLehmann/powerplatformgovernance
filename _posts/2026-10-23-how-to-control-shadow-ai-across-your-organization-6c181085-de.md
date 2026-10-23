---
title: Schatten-KI erkennen und kontrolliert verwalten
description: Ungeprüfte KI-Werkzeuge finden, Datenzugriffe bewerten, Verantwortliche
  festlegen und geeignete Tools verwalten oder entfernen.
date: '2026-10-23T16:43:24Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- compliance
- copilot-studio
content_type: curated_summary
curation_id: 6c181085e1c0e4c85a028bad
image:
  path: "/assets/img/curated/6c181085e1c0e4c85a028bad.png"
  alt: 'Governance-Karte: Unapproved AI is a governance blind spot. Inventory it before
    it reaches company data.'
permalink: "/de/posts/how-to-control-shadow-ai-across-your-organization-6c181085/"
translation_url: "/en/posts/how-to-control-shadow-ai-across-your-organization-6c181085/"
source_url: https://rencore.com/en/blog/control-shadow-ai/
source_site_url: https://rencore.com/
source_title: How to control shadow AI
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Wie findet Entra ID ungeprüfte KI-Tools mit Microsoft-Graph-Berechtigungen?
  answer: Entra ID zeigt Enterprise-Anwendungen mit erteilter Zustimmung und deren
    Microsoft-Graph-Berechtigungen, wodurch unbesitzter Datenzugriff sichtbar wird.
- question: Was soll mit einem ungeprüften Copilot-Studio- oder SharePoint-Agent geschehen?
  answer: Bewertet Datenzugriff und Nutzen, genehmigt ihn unter Governance oder lasst
    den Agent durch seinen Besitzer zurückziehen und informiert die Nutzer.
- question: Warum kann ein vollständiges Verbot von Schatten-KI das Risiko erhöhen?
  answer: Ein pauschales Verbot kann Nutzung auf private Geräte und Konten verlagern
    und dadurch die Sichtbarkeit verringern; nützliche Tools sollten kontrolliert
    genehmigt werden.
---

## TL;DR

Prüfe Enterprise-Anwendungen in Entra ID, Agents in Copilot Studio und SharePoint sowie Mitglieder lizenzierter KI-Dienste. Bewerte Datenzugriffe, Nutzer und eigenständige Aktionen. Genehmige nützliche Tools mit Inventar, Verantwortlichen und Zugriffsprüfung oder widerrufe Zustimmungen und entferne den Rest. Wiederhole die Suche regelmässig.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Prüft Agents in Copilot Studio oder SharePoint auf Genehmigung und Verantwortliche, bevor sie Unternehmensdaten verwenden.
- Admins/CoE: Erfasst Entra-ID-Anwendungen mit Microsoft-Graph- oder SharePoint-Berechtigungen sowie Agents und Dienstmitglieder, damit neue Funde einem Verantwortlichen zugewiesen werden.
- Security/Compliance: Bewertet, welche Daten jedes Tool lesen oder ändern kann, besonders bei Anwendungen ohne Verantwortliche, weil unverwaltete Zugriffe Sicherheits- und Compliance-Risiken schaffen.
- Leadership/Business: Bevorzugt genehmigte Unternehmenslösungen statt pauschaler Verbote, da Nutzung sonst auf private Geräte und Konten ausweichen kann.
