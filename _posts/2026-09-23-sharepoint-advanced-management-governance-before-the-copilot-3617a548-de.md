---
title: 'SharePoint Advanced Management: Governance vor dem Copilot-Gespräch'
description: 'Josiah Opiyos Fünf-Schritte-Einstieg für SharePoint-Governance, bevor
  Copilot auf diese Inhalte zugreift: Besitz, Lebenszyklus, Zugriff, Overexposure,
  Belege.'
date: '2026-09-23T23:43:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- security
content_type: curated_summary
curation_id: 3617a5487df75107cf2a25a2
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-09.png
  alt: Governance-Karte zur SharePoint-Governance vor der Copilot-Einführung.
permalink: "/de/posts/sharepoint-advanced-management-governance-before-the-copilot-3617a548/"
translation_url: "/en/posts/sharepoint-advanced-management-governance-before-the-copilot-3617a548/"
source_url: https://pnp.github.io/blog/post/sharepoint-advanced-management-governance-before-the-copilot-conversation/
source_site_url: https://pnp.github.io/
source_title: 'SharePoint Advanced Management: Governance Before the Copilot Conversation'
source_name: Microsoft 365 & Power Platform Community Blog
source_author: Josiah Opiyo
source_language: en
source_language_name: English
source_published_at: '2026-09-04'
faq:
  - question: "Welche Funktionen bietet SharePoint Advanced Management für die Governance?"
    answer: "Der Beitrag nennt Richtlinien für Website-Eigentümer, die Verwaltung inaktiver Websites, Bestätigungen, Katalogverwaltung und Änderungsverlauf. Dazu kommen Governance-Berichte, Berichte zu Berechtigungen und Benutzerzugriff, Überwachung von Freigabelinks, Snapshots von Vertraulichkeitsbezeichnungen und Zugriffsprüfungen. Der Bericht zur Data Access Governance ist über PowerShell verfügbar."
  - question: "Mit welchen fünf Punkten sollte man die Governance beginnen?"
    answer: "Der Beitrag schlägt fünf Startpunkte vor. Eigentum klärt, wer für eine Website verantwortlich ist. Lebenszyklus fragt, welche Websites oder Inhalte inaktiv oder überholt sind. Zugriff zeigt, wer worauf und warum zugreifen kann. Überfreigabe deckt unbeabsichtigt breite Sichtbarkeit auf. Belege prüfen Annahmen anhand von Berichten und Überprüfungen."
  - question: "Welche ergänzenden Schutzmassnahmen nennt der Beitrag neben SAM?"
    answer: "Genannt werden Microsoft Entra Conditional Access, Sicherheitsgruppen, eingeschränkter Zugriff, Restricted Content Discovery und Download-Richtlinien. Der Beitrag stellt sie neben die Berichte von SharePoint Advanced Management. Berichte zu Berechtigungen, Benutzerzugriff und Freigabelinks helfen Administratoren zu erkennen, wo Aufmerksamkeit nötig ist, statt jede Website gleich zu behandeln."
  - question: "Welche Einblicke gibt es zu Agenten und Copilot-Inhalten?"
    answer: "Der Beitrag hebt neuere Berichte zu Agenten hervor, darunter Einblicke in kürzlich erstellte Agenten und in die Interaktion von Agenten mit Inhalten in SharePoint und OneDrive. Zudem steht PowerShell etwa für Berichte zur Data Access Governance bereit. Den Agentenbericht nennt der Autor besonders interessant."
  - question: "Muss vor dem Einsatz von Copilot in SharePoint alles perfekt geordnet sein?"
    answer: "Nein. Der Autor schreibt, das Ziel sei nicht unbedingt, alles perfekt zu machen. Es gehe darum, Prioritäten zu erkennen und verhältnismässige Kontrollen anzuwenden. Dafür dienen die fünf Startpunkte Eigentum, Lebenszyklus, Zugriff, Überfreigabe und Belege. Der Beitrag ist ein Community-Beitrag von Josiah Opiyo mit drei Minuten Lesezeit."
---
## TL;DR

SharePoint Advanced Management liefert Site-Besitzrichtlinien, Attestierung inaktiver Sites, Berechtigungs- und Freigabelink-Berichte sowie Sensitivity-Label-Snapshots. Der Fünf-Schritte-Einstieg des Autors: Besitz klären, Lebenszyklus prüfen, Zugriffe kartieren, Overexposure erkennen und alles mit Belegen validieren, bevor Copilot auf diese Inhalte zugreift.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: SAMs Besitz-, Lebenszyklus- und Zugriffsberichte vor jedem Copilot-Rollout durchlaufen — Besitz klären und Zugriffe kartieren ist die eigentliche Vorarbeit, keine Nebensache.
- Security/Compliance: die Overexposure- und Sensitivity-Label-Berichte als den Beleg behandeln, den ein Copilot-Go-live braucht, nicht als Nachweis, der später nachgereicht wird.
- Leadership/Business: den Rollout-Termin zurückhalten, bis dieser Beleg vorliegt, denn ein Agent handelt auf Basis der bereits vorhandenen Besitz- und Zugriffsannahmen — ob sie stimmen oder nicht.
