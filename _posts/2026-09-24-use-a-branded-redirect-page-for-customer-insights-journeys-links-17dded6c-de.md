---
title: Branded-Redirect-Seite für Links aus Customer Insights - Journeys nutzen
description: Eine JavaScript-Redirect-Seite kann vertrauenswürdige Unternehmensdomains
  und UTM-Parameter erhalten und das integrierte Link-Tracking von Customer Insights
  - Journeys ersetzen.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- compliance
- ownership
content_type: curated_summary
curation_id: 17dded6c0894109c6690a156
permalink: "/de/posts/use-a-branded-redirect-page-for-customer-insights-journeys-links-17dded6c/"
translation_url: "/en/posts/use-a-branded-redirect-page-for-customer-insights-journeys-links-17dded6c/"
source_url: https://powerplatform.se/diy-redirect-landing-page-for-ci-j/
source_site_url: https://powerplatform.se/
source_title: DIY Redirect landing page for CI-J
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-02-04'
faq:
  - question: "Warum braucht es eine eigene Weiterleitungsseite für Links aus Journeys?"
    answer: "Weil Customer Insights Journeys keine Links mit eigener Markendomain anbietet. Die entsprechende Funktion wurde zurückgestellt und aus Release Wave 2 2024 entfernt. Für Banken, Versicherungen und andere Organisationen, bei denen Vertrauen zählt, ist das heikel, denn Empfangende erwarten Links, die auf der Firmendomain enden, zum Beispiel forms.contoso.com."
  - question: "Wie funktioniert die selbst gebaute Weiterleitungsseite technisch?"
    answer: "Es ist eine einfache HTML-Seite mit etwas JavaScript, die auf der Firmendomain liegt, etwa unter contoso.com/redirect.html. Sie liest den Query-Parameter url, prüft ihn mit dem URL-Konstruktor von JavaScript und leitet beim Laden der Seite zum Ziel weiter. Fehlt die Angabe oder ist sie ungültig, erscheint die Meldung No URL Provided oder Invalid URL."
  - question: "Bleiben UTM-Parameter bei der Weiterleitung erhalten?"
    answer: "Ja. Die Seite hängt alle übrigen Query-Parameter ausser url an die Zieladresse an, damit UTM-Tags und eigene Werte beim Ziel ankommen. Ein Aufruf sieht so aus: Adresse der Weiterleitungsseite, dann url mit dem Ziel und danach weitere Parameter wie param1 mit einem Wert. Der Autor stellt ein funktionierendes Beispiel auf seiner Website bereit."
  - question: "Was muss bei der Klickverfolgung in Customer Insights Journeys beachtet werden?"
    answer: "Das eingebaute Link-Tracking muss ausgeschaltet bleiben, sonst landen Empfangende wieder auf einer Weiterleitungsseite von Microsoft. Als Ersatz nennt der Autor zwei Wege. Webtracking war zum Zeitpunkt des Beitrags noch eine Vorschaufunktion. Benutzerdefinierte Trigger sind etabliert, die Parameter aus dem Link an die passenden Journeys weitergeben können."
  - question: "Für wen eignet sich dieser Ansatz und was ersetzt er?"
    answer: "Er eignet sich für Organisationen, die Links unter der eigenen Domain brauchen und dafür keine Produktfunktion bekommen. Der Beitrag beschreibt ausdrücklich eine Eigenbaulösung mit einer einfachen Webseite und etwas JavaScript. Zum Zeitpunkt des Beitrags gab es keine Möglichkeit, markengebundene Links in Customer Insights Journeys zu erstellen, weshalb der Autor diese Umgehung vorschlägt."
---
## TL;DR

Customer Insights - Journeys hatte im beschriebenen Release-Kontext keine Funktion für branded Links. Eine im Unternehmen gehostete Redirect-Seite kann die Ziel-URL prüfen, weitere Query-Parameter wie UTM-Tags weitergeben und umleiten. Das integrierte Tracking muss deaktiviert werden, weil Microsoft-Redirect-Seiten eine Richtlinie gegen externe Domains verletzen können.

{% include curated-attribution.html %}

## Bedeutung für Governance

Makers sollten die URL der unternehmenseigenen Redirect-Seite mit codiertem Ziel und relevanten Tracking-Parametern erzeugen, da der Workaround manuell oder per eigener Funktion erstellt werden muss. Admins/CoE sollten die JavaScript-Prüfung und Zielverarbeitung vor dem Einsatz überprüfen, weil die Seite auf eine Query-Parameter-URL umleitet. Security/Compliance sollte bewerten, ob das Muster die Richtlinie für vertrauenswürdige Domains erfüllt. Webtracking war bei Veröffentlichung als Vorschau beschrieben; der aktuelle Status sollte geprüft werden.
