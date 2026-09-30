---
title: Microsoft 365 Copilot-Agents mit Registry-first steuern
description: Die Agent-Registry im Microsoft 365 Admin Center nutzen, um Copilot-Agents
  zu prüfen, zu blockieren, einzugrenzen und zu verwalten.
date: '2026-09-30T23:12:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- ownership
- copilot-studio
content_type: curated_summary
curation_id: 85d6b60f7b999d9aa8ddc829
image:
  path: "/assets/img/curated/85d6b60f7b999d9aa8ddc829.png"
  alt: 'Governance-Karte: You cannot govern agents you cannot see. Start with the
    registry.'
permalink: "/de/posts/manage-microsoft-365-copilot-agents-with-registry-first-controls-85d6b60f/"
translation_url: "/en/posts/manage-microsoft-365-copilot-agents-with-registry-first-controls-85d6b60f/"
source_url: https://www.andersjensen.org/en/articles/manage-agents-in-microsoft-365-copilot-admin-guide/
source_site_url: https://www.andersjensen.org/
source_title: 'How to Manage Agents in Microsoft 365 Copilot: Admin Guide'
source_name: andersjensenorg
source_language: en
source_language_name: English
source_author: Anders Jensen
source_published_at: '2026-07-24'
source_type: article
---

## TL;DR

Unter Agents &gt; All agents im Microsoft 365 Admin Center zeigt die Registry alle Tenant-Agents nach Status, Plattform und Herausgeber. Prüfen Sie Datenzugriff und Berechtigungen, blockieren Sie unerwünschte Agents mit dokumentiertem Grund oder begrenzen Sie die Installation auf Gruppen. Agent Management Rules können besitzerlose Agent-Builder-Agents dem Manager des vorherigen Besitzers übertragen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Beginnen Sie mit der All-agents-Registry, filtern Sie nach Herausgeber, Plattform und Status und prüfen Sie Datenzugriff sowie Berechtigungen vor dem Rollout.
- Security/Compliance: Blockieren Sie ungeeignete Agents und dokumentieren Sie den Grund; die Sperre entfernt den Agent auch bei bereits installierten Nutzern.
- Admins/CoE: Nutzen Sie Specific users or groups für Pilotgruppen und prüfen Sie, dass Nutzer ausserhalb des Piloten den eingeschränkten Agent nicht sehen.
- Leadership/Business: Planen Sie vierteljährliche Prüfungen, weil sich Frontier-Funktionen, Agent-365-Optionen und Oberflächendetails häufig ändern.
