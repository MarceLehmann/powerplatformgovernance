---
title: Human-in-the-Loop-Workflows mit einem Copilot-Studio-Connector absichern
description: Eine Webhook-Aktion pausiert Copilot-Studio-Workflows für menschliche
  Eingaben, setzt sie über eine eigene Oberfläche fort und verlangt Schutz für Callback-URLs.
date: '2026-10-08T16:51:36Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- power-automate
- security
content_type: curated_summary
curation_id: fdc89633319eccb2a91703f6
image:
  path: "/assets/img/curated/fdc89633319eccb2a91703f6.png"
  alt: 'Governance-Karte: Anyone with the callback URL can resume the flow. Keep it
    server-side.'
permalink: "/de/posts/secure-human-in-the-loop-workflows-with-a-copilot-studio-custom-fdc89633/"
translation_url: "/en/posts/secure-human-in-the-loop-workflows-with-a-copilot-studio-custom-fdc89633/"
source_url: https://microsoft.github.io/mcscatblog/posts/human-in-the-loop-custom-connector/
source_site_url: https://microsoft.github.io/
source_title: Building a Custom Human-in-the-Loop Experience for Copilot Studio Workflows
source_name: The Custom Engine
source_language: en
source_language_name: English
source_author: Adi Leibowitz
source_published_at: '2026-05-20'
source_updated_at: '2026-08-02'
source_type: article
faq:
- question: Was bewirkt x-ms-notification-url in einem benutzerdefinierten Copilot-Studio-Connector?
  answer: Die Einstellung veranlasst Power Platform, eine Callback-URL zu erzeugen
    und für die spätere Fortsetzung in die Connector-Anfrage einzusetzen.
- question: Wie setzt eine Webhook-Aktion einen pausierten Copilot-Studio-Workflow
    fort?
  answer: Das Backend sendet die menschliche Antwort an notificationUrl, worauf Power
    Platform den Flow rehydriert und mit den Antwortdaten fortsetzt.
- question: Wie sollte eine notificationUrl eines Human-in-the-Loop-Connectors geschützt
    werden?
  answer: Die SAS-signierte notificationUrl muss serverseitig bleiben und darf nicht
    im Browser oder für Endnutzer sichtbar sein, da jeder mit ihr den Flow fortsetzen
    kann.
---

## TL;DR

Ein benutzerdefinierter Copilot-Studio-Connector kann einen Workflow mit einer Webhook-Aktion pausieren und fortsetzen, sobald das Backend an die erzeugte notificationUrl sendet. Währenddessen bleibt der Flow dehydriert. Die OpenAPI-Definition braucht x-ms-notification-url, x-ms-notification-content, kein x-ms-trigger und einen DELETE-Endpunkt zum Abbestellen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt die Human-in-the-Loop-Connectoraktion, wenn E-Mail oder Teams bei vielen Anfragen unübersichtlich werden, und gestaltet die eigene Oberfläche passend zum Prozess.
- Admins/CoE: Ersetzt In-Memory-Speicher und Entwicklungstunnel vor dem Produktionseinsatz durch dauerhafte Speicherung und HTTPS-Hosting.
- Security/Compliance: Haltet die SAS-signierte notificationUrl serverseitig und ergänzt OAuth sowie Benutzerautorisierung, weil jeder mit dieser URL den Flow fortsetzen kann.
