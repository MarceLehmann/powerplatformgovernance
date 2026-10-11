---
title: Copilot Studio Agents mit engen Berechtigungen steuern
description: Ein Copilot Studio Erneuerungsablauf trennt Leseberatung, Angebotserstellung
  und E-Mail-Entwürfe in Spezialagenten.
date: '2026-10-11T16:35:43Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- copilot-studio
- dataverse
- ownership
content_type: curated_summary
curation_id: ec68b3959921267aaeeea5a8
image:
  path: "/assets/img/curated/ec68b3959921267aaeeea5a8.png"
  alt: 'Governance-Karte: Give each agent only the access its job requires. Keep people
    in control of outbound actions.'
permalink: "/de/posts/govern-copilot-studio-agents-with-narrow-permissions-ec68b395/"
translation_url: "/en/posts/govern-copilot-studio-agents-with-narrow-permissions-ec68b395/"
source_url: https://www.karlex.fi/one-orchestrator-three-agents-and-a-salesperson-who-never-opens-the-crm/
source_site_url: https://www.karlex.fi/
source_title: One orchestrator, three agents, and a salesperson who never opens the
  CRM
source_name: Karl-Johan Spiik, Microsoft MVP
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-10-11'
source_type: article
faq:
- question: Wie soll der Orchestrator des Unicorn Renewal Desk mit Werkzeugzugriff
    ausgestattet werden?
  answer: Der Orchestrator hat keine Werkzeuge und keine MCP-Server. Er leitet Anfragen
    nur an den zuständigen Spezialagenten weiter.
- question: Welche Dataverse-Berechtigungen verwendet der Unicorn Commercial Advisor?
  answer: Er verwendet einen MCP-Server mit Lesezugriff auf Dataverse. Er kann Vereinbarungen,
    Richtlinien und frühere Angebote abrufen, aber nicht schreiben.
- question: Kann der Unicorn Customer Comms Agent die Erneuerungs-E-Mail senden?
  answer: Nein, er darf die E-Mail nur mit Kontaktdaten und einem Work IQ Mail-MCP-Server
    entwerfen. Der Vertriebsmitarbeiter prüft den Entwurf vor dem Versand.
---

## TL;DR

Ein Copilot Studio Renewal Desk leitet Aufgaben an drei Spezialagenten weiter. Der Commercial Advisor hat schreibgeschützten Dataverse-Zugriff, Quote Operations darf nur einen Entwurfsangebot-Workflow ausführen, und Customer Comms darf E-Mails entwerfen, aber nicht senden. Ein Vertriebsmitarbeiter prüft den ausgehenden Entwurf.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Trennt Agentenaufgaben und gebt jedem verbundenen Agenten nur die Werkzeuge für seine klar definierte Aufgabe.
- Admins/CoE: Nutzt eingeschränkte Workflows für Einzelaktionen wie die Erstellung eines Angebotsentwurfs statt eines breiten MCP-Zugriffs.
- Security/Compliance: Lasst ausgehende E-Mails als Entwurf mit menschlicher Prüfung, damit ein Agent keine Kundenkommunikation selbst versenden kann.
