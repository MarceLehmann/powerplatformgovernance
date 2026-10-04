---
title: Copilot Managed Runtime verankert Governance in KI-erstellten Apps
description: Copilot Managed Runtime wendet Mandantenkontrollen, Entra-Authentifizierung,
  DLP, Connector-Richtlinien und Inventartransparenz auf Microsoft-365-Apps an.
date: '2026-09-30T11:03:36Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- compliance
- dlp
- copilot-studio
content_type: curated_summary
curation_id: a6834eba51767fc541295e14
image:
  path: "/assets/img/curated/a6834eba51767fc541295e14.png"
  alt: 'Governance-Karte: Build AI apps inside a governed runtime from the start.'
permalink: "/de/posts/copilot-managed-runtime-brings-governance-to-ai-built-apps-a6834eba/"
translation_url: "/en/posts/copilot-managed-runtime-brings-governance-to-ai-built-apps-a6834eba/"
source_url: https://www.consultor365.com/ia/copilot-managed-runtime/
source_site_url: https://www.consultor365.com/
source_title: Copilot Managed Runtime
source_name: Consultor 365
source_language: es
source_language_name: es
source_author: Ramón Rautenstrauch
source_published_at: '2026-09-30'
source_updated_at: '2026-09-30'
source_type: article
faq:
  - question: "Was erben Apps, die mit der Copilot Managed Runtime gebaut werden, automatisch?"
    answer: "Sie erben die Anmeldung über Microsoft Entra und laufen auf Microsoft-gehosteter Ausführung. Mandantenrichtlinien gelten für sie, und sie erscheinen im Inventar des Microsoft-365-Admincenters. Auch Standardrichtlinien für Connectors, Freigabe und Inhaltssicherheit greifen, sodass eine neue App innerhalb einer vom Administrator definierten Grenze startet statt ausserhalb."
  - question: "Auf welchen Wegen kann man Apps auf der Managed Runtime erstellen?"
    answer: "Drei Wege speisen eine Laufzeit: Cowork, Copilot Studio und ein SDK- oder CLI-Ansatz mit JavaScript oder TypeScript. Weil alle drei in derselben verwalteten Umgebung landen, stehen Entwickler mit Code und Fachanwender mit Prompts unter derselben Authentifizierung, denselben Richtlinien und demselben Inventar."
  - question: "Welche Kontrollen unterstützt die Managed Runtime für Administratoren?"
    answer: "Bedingter Zugriff, Schutz vor Datenverlust, Connector-Einschränkungen, Freigabegrenzen und Lebenszyklusverwaltung. Laut Artikel kommen diese Kontrollen von der Plattform, sodass Administratoren Einblick in KI-gebaute Apps gewinnen, statt nur deren Erstellung verhindern zu wollen. Das zielt auf die wachsende Schatten-KI-Entwicklung, bei der Mitarbeitende ohne Wissen der IT eigene KI-Apps bauen."
  - question: "Ersetzt die Managed Runtime das Entwerfen einer Governance?"
    answer: "Nein. Der Artikel sagt, dass von Anfang an eingebaute Governance nicht heisst, dass man Sicherheit vergessen kann, und dass eine schlecht konfigurierte Richtlinie eine schlecht konfigurierte Richtlinie bleibt. Kontrollen wie Conditional Access, DLP und Connector-Richtlinien müssen weiterhin richtig konfiguriert werden. Eines der Prinzipien von Microsoft ist ein Gleichgewicht zwischen administrativer Kontrolle und Produktivität der Entwickler."
  - question: "Was heisst Erstellen innerhalb einer verwalteten Grenze für Schatten-KI?"
    answer: "Es bedeutet, dass KI-gebaute Apps von Anfang an innerhalb der Tenant-Kontrollen entstehen und nicht erst nachträglich gesteuert werden. Der Artikel formuliert es so: nicht erst erstellen und danach steuern, sondern bereits innerhalb eines gesteuerten Rahmens erstellen. Bei Shadow AI rückt in den Vordergrund, zu wissen, was entsteht, wer es erstellt hat und wer es nutzen darf."
---

## TL;DR

Copilot Managed Runtime ist eine von Microsoft verwaltete Umgebung für Microsoft-365-Geschäftsanwendungen aus Cowork, Copilot Studio oder SDK und CLI. Anwendungen übernehmen die Mandanten-Governance ab der Erstellung, nutzen Microsoft Entra und erscheinen im Microsoft-365-Admincenter. Conditional Access, DLP, Connector-, Freigabe- und Lebenszyklusregeln können zentral angewendet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt die verwaltete Runtime, damit KI-erstellte Apps mit Organisationsidentität und Richtlinien beginnen.
- Admins/CoE: Prüft im Microsoft-365-Admincenter Inventar, Nutzung, Zustand und Lebenszyklus aller Apps unabhängig vom Erstellungsweg.
- Security/Compliance: Konfiguriert Connector-, Freigabe-, Conditional-Access- und DLP-Richtlinien sorgfältig; sichere Standardwerte beheben keine schwachen Einstellungen.
