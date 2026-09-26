---
title: Copilot-Studio-Agenten für Power-Platform-Ressourcen sicher steuern
description: Eine Anleitung verbindet einen Power-Platform-MCP-Server mit Copilot
  Studio, damit ein Agent Umgebungen prüft und nach Freigabe Power-Automate-Flows
  oder Power Apps erstellt.
date: '2026-09-26T23:17:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- environments
- copilot-studio
- power-automate
content_type: curated_summary
curation_id: feb7d4f4fc5543041ad1524a
image:
  path: "/assets/img/curated/feb7d4f4fc5543041ad1524a.png"
  alt: 'Governance-Karte: AI can build real Power Platform resources. Inspect, plan,
    and get explicit approval before it acts.'
permalink: "/de/posts/govern-copilot-studio-agents-that-build-power-platform-resources-feb7d4f4/"
translation_url: "/en/posts/govern-copilot-studio-agents-that-build-power-platform-resources-feb7d4f4/"
source_url: https://pnp.github.io/blog/post/build_power_automate_flows__power_apps_using_natural_language_in_copilot_studio_with_power_platform_mcp/
source_site_url: https://pnp.github.io/
source_title: Build Power Automate Flows and Power Apps from Copilot Studio - Just
  by Asking
source_name: Microsoft 365 and Power Platform Community Blog
source_language: en
source_language_name: English
source_author: Ranjith D
source_published_at: '2026-09-05'
source_type: article
---

## TL;DR

Power Platform MCP verbindet Copilot Studio per Streamable HTTP mit Power Automate, Power Apps, Dataverse und weiteren Ressourcen. Die Anleitung richtet einen tokengeschützten Endpunkt ein, empfiehlt eine Nicht-Produktionsumgebung, begrenzt die Werkzeuge und verlangt: zuerst prüfen, einen Plan vorlegen, auf GO warten und die Erstellung danach kontrollieren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Agenten in einer Entwickler- oder Sandbox-Umgebung testen und vor dem Erstellen, Ändern oder Löschen ein ausdrückliches GO verlangen, um Auswirkungen auf die Produktion zu vermeiden.
- Admins/CoE: Nur erforderliche Berechtigungen und Werkzeuge aktivieren; Copilot Studio unterstützt höchstens 128 Werkzeuge, empfohlen werden jedoch etwa 25-30 für bessere Ergebnisse.
- Security/Compliance: Den HTTP-Endpunkt mit einem langen Token schützen und die Berechtigungen der Entra-App im Einwilligungsprozess prüfen.
