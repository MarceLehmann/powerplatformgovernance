---
title: Dataverse-Dateikapazität zurückgewinnen, ohne E-Mail-Verlauf zu löschen
description: Eine geplante Power-Automate-Ausführung löscht alte activitymimeattachment-Zeilen
  per FetchXML, während die zugehörigen E-Mails erhalten bleiben.
date: '2026-11-04T16:46:52Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
- power-automate
- environments
- compliance
- governance
content_type: curated_summary
curation_id: 5b684a191e24d06c05bfe137
image:
  path: "/assets/img/curated/5b684a191e24d06c05bfe137.png"
  alt: 'Governance-Karte: Delete attachment rows, not email history. Storage comes
    back without losing the record.'
permalink: "/de/posts/reclaim-dataverse-file-capacity-without-deleting-email-history-5b684a19/"
translation_url: "/en/posts/reclaim-dataverse-file-capacity-without-deleting-email-history-5b684a19/"
source_url: https://shaheer365.blogspot.com/2026/11/free-up-dataverse-file-capacity-delete.html
source_site_url: https://shaheer365.blogspot.com/
source_title: 'Free Up Dataverse File Capacity: Delete Old Email Attachments, Keep
  the Emails'
source_name: Shaheer365
source_language: en
source_language_name: English
source_author: Shaheer Ahmad
source_published_at: '2026-11-04'
source_updated_at: '2026-11-04'
source_type: article
faq:
- question: Welche Dataverse-Tabelle soll ein Power-Automate-Flow für alte E-Mail-Anhänge
    löschen?
  answer: Gelöscht werden Zeilen aus activitymimeattachment, in Dataverse als Attachments-Tabelle
    verfügbar. Die E-Mail-Datensätze bleiben erhalten, während die Anhangsbeziehung
    entfernt wird.
- question: Wie schliesst FetchXML E-Mail-Entwürfe bei der Auswahl von Dataverse-Anhängen
    aus?
  answer: Filtere die übergeordnete E-Mail mit actualend olderthan-x-days. Entwürfe
    besitzen kein actualend und werden dadurch automatisch ausgeschlossen.
- question: Warum kann die Dataverse-Dateikapazität nach dem Löschen von Anhangszeilen
    unverändert bleiben?
  answer: Die Kapazität kann unverändert bleiben, wenn eine weitere activitymimeattachment-Zeile
    dieselbe zugrunde liegende Datei referenziert. Speicher wird erst nach Entfernung
    der letzten Referenz frei.
---

## TL;DR

Lösche alte activitymimeattachment-Zeilen in Dataverse mit einem geplanten Power-Automate-Flow und einer FetchXML-Abfrage. Das Beispiel erfasst E-Mails älter als 90 Tage, verarbeitet bis zu 5.000 Zeilen je Lauf, schliesst Entwürfe aus und weist auf gemeinsam verwendete Dateien hin, die erst nach Entfernung der letzten Referenz Speicher freigeben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Begrenze die Abfrage auf die gewünschten E-Mail-Anhänge, lasse die body-Spalte weg und prüfe Dateinamen sowie Zeilenanzahl vor dem Löschen.
- Admins/CoE: Prüfe die Datei-Aufschlüsselung im Power Platform Admin Center, teste zuerst in einer Entwicklungs- oder Sandbox-Umgebung und plane wiederkehrende Stapel mit passenden Löschberechtigungen.
- Security/Compliance: Hole die Freigabe für die tatsächliche Aufbewahrungsfrist ein, da 90 Tage nur ein Beispiel sind und gelöschte Dataverse-Anhänge nicht wiederhergestellt werden können.
- Leadership/Business: Informiere über unveränderte Outlook-Kopien und darüber, dass Kapazitätsberichte bis zu 72 Stunden für die Aktualisierung benötigen können.
