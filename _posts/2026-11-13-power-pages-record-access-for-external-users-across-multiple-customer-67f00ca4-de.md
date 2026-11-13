---
title: 'Power Pages: Datensatzzugriff für externe Benutzer über mehrere Kundenkonten'
description: Der Kontobereich folgt nur einer Kontakt-Konto-Beziehung. So entwerfen
  und testen Sie Power Pages-Tabellenberechtigungen, damit externe Nutzer nur freigegebene
  Datensätze erreichen.
date: '2026-11-13T16:53:21Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
- governance
content_type: curated_summary
curation_id: 67f00ca4591eb4657393f2a5
image:
  path: "/assets/img/curated/67f00ca4591eb4657393f2a5.png"
  alt: 'Governance-Karte: Account scope follows one relationship. Extra account memberships
    are never covered by default.'
permalink: "/de/posts/power-pages-record-access-for-external-users-across-multiple-customer-67f00ca4/"
translation_url: "/en/posts/power-pages-record-access-for-external-users-across-multiple-customer-67f00ca4/"
source_url: https://softchief.com/power-pages-record-access-for-external-users-across-multiple-customer-accounts/
source_site_url: https://softchief.com/
source_title: Power Pages Record Access for External Users Across Multiple Customer
  Accounts
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-11-13'
source_type: article
faq:
- question: Deckt der Kontobereich in Power Pages alle Konten ab, denen ein Kontakt
    angehört?
  answer: Nein. Der Kontobereich folgt nur der im Tabellenberechtigungssatz ausgewählten
    Beziehung, zusätzliche Mitgliedschaften brauchen einen eigenen unterstützten Berechtigungspfad.
- question: Schützen Seitenberechtigungen in Power Pages Datensätze vor direkten Web-API-Aufrufen?
  answer: Nein. Seitenberechtigungen steuern nur den Zugriff auf Seiteninhalte, während
    Tabellenberechtigungen die Datensätze über Listen, Formulare, Liquid und die Web-API
    sichern.
- question: Wie teste ich den Power Pages-Zugriff für Kontakte mit mehreren Kontomitgliedschaften?
  answer: Testen Sie Kontakte mit einem Konto, mehreren Mitgliedschaften und ohne
    Mitgliedschaft und versuchen Sie, fremde Datensätze über die direkte URL zu öffnen.
animation:
  video: /assets/img/animations/67f00ca4591eb4657393f2a5-de.mp4
  poster: /assets/img/animations/67f00ca4591eb4657393f2a5-de.poster.webp
  width: 800
  height: 450
  alt: "Ein Ablauf mit 4 Schritten zeigt, wie Sie den Datensatzzugriff in Power Pages absichern: Zugriffsregel festlegen, Kontakt Konto Pfade pruefen, Webrollen zuweisen und Zugriff mit direkten URLs und Web-API testen."
---

## TL;DR

Power Pages gewährt externen Benutzern Zugriff auf Dataverse-Datensätze nur über die im Tabellenberechtigungssatz ausgewählte Beziehung. Der Kontobereich deckt nur das Konto des angemeldeten Kontakts ab, nicht jede separate Mitgliedschaft. Legen Sie die Zugriffsregel zuerst schriftlich fest, prüfen Sie jeden Kontakt-Konto-Pfad, weisen Sie fokussierte Webrollen mit nur nötigen Operationen zu und testen Sie erlaubten und verweigerten Zugriff inklusive direkter URLs und Web-API vor dem Launch.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Legen Sie zuerst den Beziehungspfad vom Kontakt zu jeder geschützten Tabelle fest, bevor Sie Berechtigungen zuweisen, denn ausgeblendete Seiten oder Listen sichern keine Datensätze.
- Admins/CoE: Prüfen Sie bei jedem Testlogin, ob der richtige Dataverse-Kontakt geladen wird, und legen Sie keine sensiblen Tabellenberechtigungen auf die breite Webrolle Authenticated Users.
- Security/Compliance: Fordern Sie Negativtests über direkte Datensatz-URLs und die Web-API, weil eine ausgeblendete Liste den Datensatz selbst nicht schützt.
