---
title: Die passende Dataverse-Erweiterung nach Transaktionsrisiko wählen
description: Plug-ins, Custom APIs, Webhooks und Service Bus anhand von Transaktionen,
  Latenz, Sicherheit und ALM auswählen.
date: '2026-11-04T16:46:55Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- alm
- dataverse
content_type: curated_summary
curation_id: f42e43db8ccb419bc20050f5
image:
  path: "/assets/img/curated/f42e43db8ccb419bc20050f5.png"
  alt: 'Governance-Karte: Choose the extension by transaction risk, latency and ownership.
    Do not wait for production failures.'
permalink: "/de/posts/choose-the-right-dataverse-extension-for-transaction-risk-f42e43db/"
translation_url: "/en/posts/choose-the-right-dataverse-extension-for-transaction-risk-f42e43db/"
source_url: https://aidevme.com/dataverse-plugins-custom-apis-webhooks-service-bus/
source_site_url: https://aidevme.com/
source_title: Plug-ins, Custom APIs, Webhooks or Service Bus? Choosing the Right Dataverse
  Extension
source_name: AIDevMe
source_language: en
source_language_name: English
source_author: Zsolt Zombik
source_published_at: '2026-11-04'
source_updated_at: '2026-11-04'
source_type: article
faq:
- question: Wann sollte ein Dataverse-Plug-in in PreValidation statt in PreOperation
    laufen?
  answer: Verwenden Sie PreValidation, um ungültige Eingaben vor der ersten Datenbanktransaktion
    abzulehnen. PreOperation eignet sich zum Ändern von Zielwerten vor dem Speichern.
- question: Wie kann eine Dataverse Custom API den Zugriff einer Agentenoperation
    beschränken?
  answer: Setzen Sie für die Custom API einen vorhandenen Execute Privilege Name.
    Das Plug-in kann innerhalb der benannten, typisierten Operation zusätzlich serverseitig
    validieren.
- question: Was passiert, wenn ein Dataverse-Webhook-Payload 256 KB überschreitet?
  answer: Dataverse setzt den Header x-ms-dynamics-msg-size-exceeded und entfernt
    Kontext, Eingabeparameter und Bildsammlungen. Webhook-Empfänger müssen mit dem
    reduzierten Payload umgehen können.
---

## TL;DR

Nutzen Sie synchrone Plug-ins für Validierungen oder Datenänderungen, die mit einem Dataverse-Speichervorgang erfolgreich sein müssen. Nutzen Sie Custom APIs für typisierte Geschäftsoperationen mit Berechtigungsprüfung. Service Bus eignet sich für entkoppelte Volumenlast, Webhooks für einfache HTTPS-Benachrichtigungen. Empfänger müssen Wiederholungen, Payload-Limits und Idempotenz berücksichtigen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzen Sie Custom APIs für benannte Geschäftsoperationen, statt Aufrufern oder Agenten beliebige Dataverse-Schreibzugriffe zu geben.
- Admins/CoE: Nehmen Sie Plug-in-Assemblys und Schritte in Lösungen auf, weil sichere Konfiguration nicht mit einer Lösung exportiert wird.
- Security/Compliance: Setzen Sie für eine Custom API einen Execute Privilege Name und validieren Sie sensible Operationen serverseitig.
- Admins/CoE: Überwachen Sie Ausführungszeit, Fehler und Aktivität von Dataverse-Plug-ins in den Analytics des Power Platform Admin Centers.
