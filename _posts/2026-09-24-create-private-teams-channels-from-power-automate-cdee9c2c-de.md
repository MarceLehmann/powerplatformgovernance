---
title: Private Teams-Kanäle mit Power Automate erstellen
description: Microsoft Graph erstellt über HTTP mit Microsoft Entra ID private Teams-Kanäle
  mit Besitzer und festgelegten Mitgliedern.
date: '2026-09-24T15:05:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- ownership
- power-automate
content_type: curated_summary
curation_id: cdee9c2cedb6381cb78dff72
image:
  path: "/assets/img/curated/cdee9c2cedb6381cb78dff72.png"
  alt: 'Governance-Karte: A private channel needs an owner at creation.'
permalink: "/de/posts/create-private-teams-channels-from-power-automate-cdee9c2c/"
translation_url: "/en/posts/create-private-teams-channels-from-power-automate-cdee9c2c/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-162-create-private-teams-channel-from-flow/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 162: Create a Private Teams Channel from a Flow"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-07-09'
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
faq:
  - question: "Warum kann der Teams-Connector in Power Automate keine privaten Kanäle anlegen?"
    answer: "Der native Teams-Connector erstellt nur Standardkanäle und bietet keine Option, den Mitgliedschaftstyp festzulegen oder einen Besitzer zuzuweisen. Für private Kanäle nutzt du deshalb die Microsoft Graph API über die vorautorisierte Aktion HTTP mit Microsoft Entra ID. Das ist wichtig bei Onboarding, Projektstart oder Supportfällen, wo Kanäle sonst von Hand und uneinheitlich angelegt würden."
  - question: "Weshalb liefert Graph beim Erstellen eines privaten Kanals den Fehler 400?"
    answer: "Meist fehlt ein Besitzer. Ein privater Kanal darf nicht leer erstellt werden, die Anfrage braucht ein Mitglieder-Array mit mindestens einer Person, die die Rolle owner trägt. Fehlt das, antwortet Graph mit 400 Bad Request. Zusätzliche Mitglieder kannst du direkt im ersten Aufruf mitgeben oder später über den Endpunkt für Kanalmitglieder hinzufügen."
  - question: "Brauche ich für den Graph-Aufruf in Power Automate eine App-Registrierung?"
    answer: "Nein. Die Aktion HTTP mit Microsoft Entra ID verwendet die vorautorisierte Identität der Verbindung, daher entfallen App-Registrierung und Verwaltung von Geheimnissen. Du sendest einen POST an den Kanal-Endpunkt des Teams mit dem Mitgliedschaftstyp private. Die Team-ID entspricht der ID der zugrunde liegenden Microsoft-365-Gruppe und lässt sich per Abfrage nach dem Anzeigenamen ermitteln."
  - question: "Welche Berechtigungen braucht die Identität, die einen privaten Kanal erstellt?"
    answer: "Mindestens die Berechtigung Channel.Create, alternativ Group.ReadWrite.All. Zusätzlich muss ein Administrator in den Richtlinien des Teams Admin Centers das Erstellen privater Kanäle für den ausführenden Benutzer erlauben. Fehlt die Berechtigung oder die Richtlinie, wird auch ein gültiger Aufruf mit 403 Forbidden abgelehnt."
  - question: "Welche Grenzen gelten für Name und Mitglieder eines privaten Kanals über Graph?"
    answer: "Der Anzeigename darf höchstens 50 Zeichen lang sein und muss im Team eindeutig sein, ein doppelter Name führt zu 409 Conflict. Ein privater Kanal unterstützt bis zu 200 Mitglieder. Bei Erfolg antwortet Graph mit 201 Created und liefert das Kanalobjekt samt ID, die du im selben Flow für Willkommensnachrichten oder Tabs weiterverwenden kannst."
---
## TL;DR

Der standardmässige Teams-Connector von Power Automate kann keine privaten Kanäle erstellen. Verwende die Aktion HTTP mit Microsoft Entra ID für einen Microsoft-Graph-POST mit membershipType private und einer members-Liste mit mindestens einem Besitzer. Bis zu 200 Mitglieder sind möglich, wobei Berechtigungen und Teams-Richtlinien die Anfrage blockieren können.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Rufe Microsoft Graph über HTTP mit Microsoft Entra ID auf, setze membershipType auf private und füge mindestens einen Besitzer hinzu, damit die Erstellung nicht mit HTTP 400 fehlschlägt.
- Admins/CoE: Prüfe Channel.Create oder Group.ReadWrite.All für die ausführende Identität und erlaube private Kanäle in der Teams-Richtlinie, da sonst trotz gültiger Anfrage ein 403-Fehler entsteht.
- Security/Compliance: Behandle die members-Liste als Zugriffsgrenze, weil private Kanäle nur für aufgeführte Mitglieder sichtbar sind; verwende die zurückgegebene Kanal-ID für kontrollierte Folgeautomatisierung.
