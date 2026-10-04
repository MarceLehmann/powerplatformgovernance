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
faq:
  - question: "Was macht ein Power-Platform-MCP-Server für einen Copilot-Studio-Agenten möglich?"
    answer: "Er verbindet Copilot Studio über das Model Context Protocol mit Power-Platform-Ressourcen. Der Agent kann dann auf Zuruf in natürlicher Sprache Flows, Canvas- und modellgesteuerte Apps, Dataverse-Vorgänge, Power Pages, Connectors und Umgebungsverwaltung bedienen. Der Server übersetzt die Anfragen in echte API-Aufrufe und liefert Ergebnisse zurück. Für diese mehrstufige Arbeit empfiehlt der Autor den GitHub-Copilot-Harness statt des Standard-Harness."
  - question: "In welchen Schritten richte ich die Verbindung zu Copilot Studio ein?"
    answer: "Erstens lokal per npm installieren, den Einrichtungsassistenten starten und mit dem Doctor-Befehl prüfen. Zweitens den Server im HTTP-Modus mit gesetztem Bearer-Token starten, den Port über VS Code Dev Tunnels öffentlich weiterleiten und an die Tunnel-Adresse den Pfad mcp anhängen. Drittens in Copilot Studio den Server als Werkzeug mit API-Schlüssel im Authorization-Header eintragen."
  - question: "Welche Berechtigungsstufen bietet die Einrichtung des Servers?"
    answer: "Es gibt Voreinstellungen und eine eigene Auswahl. Option 1, Alltagsautomatisierung, gilt als sicherer Standard für Flows, Verbindungen sowie SharePoint- und Excel-Hilfen. Option 6 erlaubt pro Fähigkeit Ja oder Nein, etwa für Connectors, Dataverse-Tabellen, Mandantenverwaltung oder Power Pages. Die Anmeldung läuft über den Gerätecode, und für die Rechtevergabe wird die Azure CLI benötigt."
  - question: "Welche Kontrollen gelten für Agenten, die Power-Platform-Ressourcen selbst anlegen?"
    answer: "Ohne passende Anweisungen legt der Agent womöglich einfach los, ohne zu prüfen. Die Beispielanweisungen verlangen, die Anfrage zu prüfen, zuerst die Umgebung zu untersuchen, einen kurzen Plan vorzulegen und vor dem Erstellen, Ändern oder Löschen auf ein ausdrückliches GO zu warten. Nach dem Bau prüft er, was er tatsächlich erstellt hat, nicht nur die Konfiguration. Der Autor empfiehlt zudem Tests in einer Nicht-Produktivumgebung."
  - question: "Welche Grenzen gelten für Werkzeuge und Tunnel bei diesem Aufbau?"
    answer: "Ein Agent verträgt höchstens 128 Werkzeuge, Microsoft rät aber zu etwa 25 bis 30. Aktiviere deshalb nur benötigte Gruppen. Der Dev Tunnel muss auf öffentlich stehen, denn private Tunnel scheitern bei Aufrufen aus Copilot Studio ohne Fehlermeldung. Lokaler Server und Tunnel enden bei Ruhezustand, Neustart oder geschlossenem VS Code. Mit gleichem Port bleibt die Adresse gleich."
---

## TL;DR

Power Platform MCP verbindet Copilot Studio per Streamable HTTP mit Power Automate, Power Apps, Dataverse und weiteren Ressourcen. Die Anleitung richtet einen tokengeschützten Endpunkt ein, empfiehlt eine Nicht-Produktionsumgebung, begrenzt die Werkzeuge und verlangt: zuerst prüfen, einen Plan vorlegen, auf GO warten und die Erstellung danach kontrollieren.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Agenten in einer Entwickler- oder Sandbox-Umgebung testen und vor dem Erstellen, Ändern oder Löschen ein ausdrückliches GO verlangen, um Auswirkungen auf die Produktion zu vermeiden.
- Admins/CoE: Nur erforderliche Berechtigungen und Werkzeuge aktivieren; Copilot Studio unterstützt höchstens 128 Werkzeuge, empfohlen werden jedoch etwa 25-30 für bessere Ergebnisse.
- Security/Compliance: Den HTTP-Endpunkt mit einem langen Token schützen und die Berechtigungen der Entra-App im Einwilligungsprozess prüfen.
