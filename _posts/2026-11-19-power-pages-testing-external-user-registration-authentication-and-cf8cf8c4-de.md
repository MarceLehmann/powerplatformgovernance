---
title: 'Power Pages: Externe Benutzerregistrierung, Authentifizierung und Kontoverknüpfung
  testen'
description: 'Leitfaden zum Testen externer Benutzer in Power Pages: Kontaktzuordnung,
  eindeutige E-Mails, Webrollen, Tabellenberechtigungen und Negativtests gegen unbefugten
  Datenzugriff.'
date: '2026-11-19T10:44:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- governance
content_type: curated_summary
curation_id: cf8cf8c434ede9b4accb9da8
image:
  path: "/assets/img/curated/cf8cf8c434ede9b4accb9da8.png"
  alt: 'Governance-Karte: Successful login is not sufficient. Verify that the authenticated
    identity maps to the right contact with the least access.'
permalink: "/de/posts/power-pages-testing-external-user-registration-authentication-and-cf8cf8c4/"
translation_url: "/en/posts/power-pages-testing-external-user-registration-authentication-and-cf8cf8c4/"
source_url: https://softchief.com/power-pages-how-to-test-external-user-registration-authentication-and-account-linking/
source_site_url: https://softchief.com/
source_title: 'Power Pages: How to Test External User Registration, Authentication,
  and Account Linking'
source_name: Softchief Blog
source_language: en
source_language_name: English
source_author: Softchief
source_published_at: '2026-11-19'
source_type: article
faq:
- question: Warum schlägt die Anmeldung in Power Pages fehl, wenn zwei Kontakte dieselbe
    E-Mail-Adresse haben?
  answer: Power Pages verlangt eindeutige Kontakt-E-Mail-Adressen. Doppelte Adressen,
    auch bei inaktiven Datensätzen, können die Authentifizierung blockieren und gehören
    in die Testdatenplanung.
- question: Wie verknüpfe ich eine externe Identität mit einem bestehenden Dataverse-Kontakt
    in Power Pages?
  answer: Nutzen Sie die E-Mail-Kontaktzuordnung von Microsoft Entra External ID oder
    einen Einladungsflow und prüfen Sie nach der Anmeldung die Contact-ID. E-Mail-Abgleich
    allein reicht als Identitätsnachweis nie aus.
- question: Wie teste ich, dass ein Power Pages-Kunde nicht die Fälle anderer Kunden
    sieht?
  answer: Melden Sie sich als beide Testkunden und als anonymer Besucher an und prüfen
    Sie, ob Tabellenberechtigungen im Kontaktbereich fremde Datensätze verweigern.
    Testen Sie auch die verweigerten Zugriffe.
---

## TL;DR

Eine Power Pages-Website mit externer Anmeldung über Microsoft Entra External ID braucht mehr als einen Login-Test: prüfen, ob die Identität am richtigen Dataverse-Kontakt hängt, keine doppelten Kontakte entstehen, Kontakt-E-Mails eindeutig bleiben, Webrollen und Tabellenberechtigungen den Zugriff pro Kontakt oder Konto begrenzen und Verweigerungsfälle getestet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Testen Sie Registrierung, erneute Anmeldung und Identitätsverknüpfung in einer Dev-Umgebung mit drei Testidentitäten und vergleichen Sie Contact-IDs statt Namen.
- Admins/CoE: Halten Sie Kontakt-E-Mail-Adressen eindeutig, denn Duplikate blockieren die Anmeldung, und testen Sie externe Benutzer nicht in der Produktivumgebung.
- Security/Compliance: Behandeln Sie den E-Mail-Abgleich nie als Identitätsnachweis, bevorzugen Sie Einladungsflows und prüfen Sie kontobasierte Berechtigungen gegen Datenabfluss.
