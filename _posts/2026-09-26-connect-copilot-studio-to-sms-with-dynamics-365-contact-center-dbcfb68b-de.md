---
title: Copilot Studio per SMS mit Dynamics 365 Contact Center verbinden
description: Eine praktische Einrichtung für SMS-Agenten mit Power Platform, Dynamics
  365 Contact Center, Twilio und klaren Datenschutzvorgaben.
date: '2026-09-26T23:23:49Z'
author: governance_editorial
lang: de
toc: false
tags:
- copilot-studio
- security
- environments
- ownership
content_type: curated_summary
curation_id: dbcfb68bc46722a27a5f6a26
image:
  path: "/assets/img/curated/dbcfb68bc46722a27a5f6a26.png"
  alt: 'Governance-Karte: No authentication makes SMS public. Guardrails and identity
    checks still matter.'
permalink: "/de/posts/connect-copilot-studio-to-sms-with-dynamics-365-contact-center-dbcfb68b/"
translation_url: "/en/posts/connect-copilot-studio-to-sms-with-dynamics-365-contact-center-dbcfb68b/"
source_url: https://www.matthewdevaney.com/how-to-send-and-receive-sms-text-messages-in-copilot-studio/
source_site_url: https://www.matthewdevaney.com/
source_title: How To Send And Receive SMS Text Messages In Copilot Studio
source_name: Matthew Devaney
source_language: en
source_language_name: English
source_author: Matthew Devaney
source_published_at: '2026-08-30'
source_type: article
faq:
  - question: "Was brauche ich, damit ein Copilot-Studio-Agent SMS senden und empfangen kann?"
    answer: "Du brauchst drei Bausteine: einen Copilot-Studio-Agenten mit Anweisungen und Wissensquelle, eine eigenständige Installation von Dynamics 365 Contact Center und ein kostenpflichtiges Twilio-Konto mit gekaufter Telefonnummer. Im Beispiel dient ein Hotel-Concierge-Agent, der Gästen nach dem Check-in schreibt und Fragen zum Aufenthalt beantwortet. Die Authentifizierung des Agenten steht dabei auf keine Authentifizierung."
  - question: "Funktioniert ein kostenloses Twilio-Testkonto mit Dynamics 365 Contact Center?"
    answer: "Nein. Der Autor stellt klar, dass sich ein kostenloses Testkonto nicht erfolgreich mit Contact Center verbinden lässt. Du brauchst ein bezahltes Twilio-Konto. Die Account SID und das Auth Token findest du in der Twilio-Konsole im Bereich API-Schlüssel und Token, Contact Center nutzt diese Zugangsdaten für die sichere Verbindung mit dem Twilio-Konto."
  - question: "Wie verbinde ich eine Twilio-Nummer mit Contact Center, damit eingehende SMS ankommen?"
    answer: "Du legst in Contact Center ein Nachrichtenkonto vom Kanal SMS mit Twilio an und trägst die Twilio-Nummer dort ein, als Typ Geo. Dann kopierst du die Callback-URL aus den Kontoeinstellungen in die Nachrichtenkonfiguration der Nummer bei Twilio und wählst als Methode HTTP POST. Damit leitet Twilio eingehende Nachrichten an Contact Center weiter."
  - question: "Wie hänge ich den Copilot-Studio-Agenten an den SMS-Arbeitsstrom?"
    answer: "Erstelle einen eingehenden Arbeitsstrom vom Typ Messaging mit Kanal SMS und Verteilmodus Push und füge einen SMS-Kanal mit deiner Twilio-Nummer hinzu. Öffne dann im Contact Center das Menü für KI-Agenten, wähle deinen Agenten und warte, bis der Chatstatus verbunden anzeigt. Danach verbindest du ihn im Arbeitsstrom über die Schaltfläche zum Hinzufügen des KI-Agenten."
  - question: "Welche Regeln sollten die Anweisungen eines SMS-Agenten enthalten?"
    answer: "Im Beispiel gehört dazu die Vorgabe, Antworten möglichst unter 320 Zeichen zu halten, nur aus der Wissensbasis zu antworten und nicht zu raten. Sensible Daten wie Kartennummern, Bankdaten, Passwörter oder Ausweisnummern darf der Agent weder verlangen noch wiederholen. Bei Wunsch nach einem Menschen, Sicherheitsbedenken, Streit um Beträge, Zahlungen oder Reservierungsänderungen übergibt er an Personal."
---

## TL;DR

Copilot Studio kann SMS über Dynamics 365 Contact Center und ein kostenpflichtiges Twilio-Konto senden und empfangen. Dafür werden eine Dataverse-Umgebung, der SMS-Kanal, ein Messaging-Konto, ein Webhook, ein eingehender Workstream und ein KI-Agent eingerichtet. Die Anleitung verwendet keine Authentifizierung, daher sind Datenschutzregeln und Eskalationsvorgaben besonders wichtig.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Wissensgrenzen, Eskalationsregeln und Datenschutzanweisungen vor der SMS-Anbindung definieren, da der Agent ohne Authentifizierung öffentlich verfügbar ist.
- Admins/CoE: Eine eigene Sandbox- oder Produktionsumgebung mit Dataverse und Contact Center erstellen und danach SMS-Kanal, Messaging-Konto und Workstream konfigurieren.
- Security/Compliance: Den öffentlichen Zugriffsmodus, die Identitätsprüfung, den Umgang mit verbotenen Daten und die Webhook-Zugangsdaten vor dem Start prüfen.
- Leadership/Business: Ein kostenpflichtiges Twilio-Konto und einen menschlichen Eskalationsweg einplanen, weil SMS-Zustellung und sensible Anfragen operative Unterstützung benötigen.
