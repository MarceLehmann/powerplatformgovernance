---
title: Verwaiste Power Apps und Flows finden und neu zuweisen
description: Ein Prozess mit fünf Schritten findet verwaiste Power Apps und Power
  Automate Flows, weist Verantwortliche zu, beendet unerwünschte Automatisierung und
  ergänzt Offboarding-Prüfungen.
date: '2026-11-12T16:51:42Z'
author: governance_editorial
lang: de
toc: false
tags:
- ownership
- power-apps
- power-automate
- environments
- security
content_type: curated_summary
curation_id: b5a511f4078aa109eb2e7a91
image:
  path: "/assets/img/curated/b5a511f4078aa109eb2e7a91.png"
  alt: 'Governance-Karte: Every app and flow needs an accountable owner. Unowned automation
    becomes operational and security risk.'
permalink: "/de/posts/how-to-find-and-reassign-ownerless-power-apps-and-flows-b5a511f4/"
translation_url: "/en/posts/how-to-find-and-reassign-ownerless-power-apps-and-flows-b5a511f4/"
source_url: https://rencore.com/en/blog/find-ownerless-power-apps-flows/
source_site_url: https://rencore.com/
source_title: How to find and reassign ownerless Power Apps and flows
source_name: Rencore
source_language: en
source_language_name: English
source_author: Torsten Mandelkow
source_published_at: '2026-11-11'
source_updated_at: '2026-11-11'
source_type: article
faq:
- question: Wie finde ich verwaiste Power Apps in allen Umgebungen?
  answer: Exportiere Apps aus jeder Umgebung und vergleiche die Besitzer mit aktiven
    und deaktivierten Entra ID Benutzern. Markiere fehlende, deaktivierte oder gelöschte
    Besitzer.
- question: Was passiert mit einem Power Automate Flow, wenn der Besitzer das Unternehmen
    verlässt?
  answer: Der Flow kann zunächst mit den Verbindungen und Berechtigungen des ausgeschiedenen
    Benutzers weiterlaufen. Weise deshalb zwei neue Besitzer zu, die Flow und Daten
    kennen.
- question: Wie sollte ich eine Power App ohne verantwortlichen Besitzer stilllegen?
  answer: Schalte den Flow aus, stelle die App 30 Tage zurück und lösche sie, wenn
    niemand widerspricht. Informiere zuvor alle Personen mit Zugriff.
animation:
  video: /assets/img/animations/b5a511f4078aa109eb2e7a91-de.mp4
  poster: /assets/img/animations/b5a511f4078aa109eb2e7a91-de.poster.webp
  width: 800
  height: 450
  alt: "Die Abfolge zeigt den Export von Apps und Flows aus jeder Umgebung, den Vergleich der Besitzer mit dem Entra ID Status, die Zuweisung von zwei neuen Besitzern, die Stilllegung nicht uebernommener Assets und wiederholte Pruefungen."
---

## TL;DR

Exportiere Power Apps und Power Automate Flows aus jeder Umgebung mit Besitzern, Mitbesitzern, Erstellern und Änderungsdatum. Vergleiche die Besitzer mit aktiven und deaktivierten Entra ID Benutzern, weise wichtigen Elementen zwei neue Besitzer zu, beende nicht übernommene Assets und wiederhole die Prüfung beim Offboarding sowie regelmässig.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Ergänzt einen Mitbesitzer für jede geschäftskritische App und jeden Flow, damit ein Weggang nicht die Bearbeitung, Fehlerbehebung oder Stilllegung verhindert.
- Admins/CoE: Exportiert Assets aus allen Umgebungen, vergleicht Besitzer mit dem Entra ID Status, priorisiert wichtige Elemente und plant regelmässige Prüfungen.
- Security/Compliance: Prüft Flows, die weiterhin Verbindungen und Berechtigungen ehemaliger Benutzer verwenden, weil dies Sicherheits- und Ausfallrisiken schafft.
- Leadership/Business: Lasst den stärksten Nutzer oder die Führungskraft des ausgeschiedenen Mitarbeiters die Verantwortung übernehmen und beendet nicht übernommene Assets.
