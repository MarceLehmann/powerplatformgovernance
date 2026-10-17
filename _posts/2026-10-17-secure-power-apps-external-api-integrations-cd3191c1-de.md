---
title: Externe Power Apps APIs sicher integrieren
description: Power Apps API-Verbindungen mit sicherer Identität, Backend-Kontrollen,
  DLP, Umgebungsgrenzen und regelmässigen Prüfungen schützen.
date: '2026-10-17T10:43:13Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dlp
- environments
- power-apps
- alm
content_type: curated_summary
curation_id: cd3191c1262d5509ea8aa7ea
image:
  path: "/assets/img/curated/cd3191c1262d5509ea8aa7ea.png"
  alt: 'Governance-Karte: Keep privileged credentials out of Power Apps. Enforce access
    at the API boundary.'
permalink: "/de/posts/secure-power-apps-external-api-integrations-cd3191c1/"
translation_url: "/en/posts/secure-power-apps-external-api-integrations-cd3191c1/"
source_url: https://softchief.com/secure-power-apps-external-api-integration-protect-credentials-and-user-data/
source_site_url: https://softchief.com/
source_title: 'Secure Power Apps External API Integration: Protect Credentials and
  User Data'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-10-17'
source_type: article
faq:
- question: Wie sollen Power Apps Anmeldedaten für eine externe API speichern?
  answer: Schlüssel, Client Secrets und Bearer Tokens gehören nicht in clientseitige
    App-Inhalte. Nutzen Sie Connector-Authentifizierung oder ein geschütztes Backend
    für privilegierte Anmeldedaten.
- question: Wann sollte eine Power App Azure API Management oder Azure Function für
    eine API nutzen?
  answer: Ein Backend ist sinnvoll bei privilegierten Anmeldedaten, Anfrageprüfung,
    Drosselung oder gefilterten Antworten. Es kann Regeln durchsetzen, bevor die Anfrage
    den Zielservice erreicht.
- question: Was schützt eine Power Platform DLP-Richtlinie bei einer externen API-Integration?
  answer: DLP-Richtlinien steuern, welche Connectors zusammenarbeiten und Daten austauschen
    dürfen. Sie regeln Datenbewegungen, ersetzen aber keine API-Autorisierung oder
    Datensatzprüfung.
---

## TL;DR

Nutzen Sie OAuth 2.0 und Microsoft Entra ID, wenn dies unterstützt wird, und halten Sie API-Schlüssel, Client Secrets und Bearer Tokens aus Power Apps Formeln, Variablen, URLs und clientseitigen Anfragen heraus. Leiten Sie privilegierte APIs über Azure API Management oder eine Azure Function, prüfen Sie Berechtigungen an der API-Grenze und verwenden Sie DLP als zusätzliche Absicherung.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Speichern Sie keine API-Schlüssel, Client Secrets oder Bearer Tokens in Formeln, Variablen, URLs oder clientseitigen Anfragen, weil Nutzende diese Inhalte einsehen können.
- Admins/CoE: Beschränken Sie die Bearbeitung benutzerdefinierter Connectors, prüfen Sie Verbindungsbesitzer und setzen Sie DLP-Richtlinien ein, weil Connector-Governance keine API-Autorisierung ersetzt.
- Security/Compliance: Verlangen Sie API- oder Backend-Prüfungen für Rollen, Datensatzbesitz, Eingaben und zurückgegebene Felder, weil ausgeblendete Bildschirme und deaktivierte Schaltflächen umgangen werden können.
- Leadership/Business: Halten Sie Entwicklung, Test und Produktion mit Freigabeprüfungen getrennt, damit Testanmeldedaten und Endpunkte nicht in Live-Apps gelangen.
