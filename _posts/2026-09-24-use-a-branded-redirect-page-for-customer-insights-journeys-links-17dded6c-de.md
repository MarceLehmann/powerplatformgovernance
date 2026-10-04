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
    answer: "Weil Customer Insights Journeys keine Links mit eigener Markendomain anbietet. Die entsprechende Funktion wurde zurückgestellt und aus Release Wave 2 2024 entfernt."
  - question: "Wie funktioniert die selbst gebaute Weiterleitungsseite technisch?"
    answer: "Es ist eine einfache HTML-Seite mit etwas JavaScript, die auf der Firmendomain liegt, etwa unter contoso.com/redirect.html."
  - question: "Was muss bei der Klickverfolgung in Customer Insights Journeys beachtet werden?"
    answer: "Das eingebaute Link-Tracking muss ausgeschaltet bleiben, sonst landen Empfangende wieder auf einer Weiterleitungsseite von Microsoft. Als Ersatz nennt der Autor zwei Wege."
---
## TL;DR

Customer Insights - Journeys hatte im beschriebenen Release-Kontext keine Funktion für branded Links. Eine im Unternehmen gehostete Redirect-Seite kann die Ziel-URL prüfen, weitere Query-Parameter wie UTM-Tags weitergeben und umleiten. Das integrierte Tracking muss deaktiviert werden, weil Microsoft-Redirect-Seiten eine Richtlinie gegen externe Domains verletzen können.

{% include curated-attribution.html %}

## Bedeutung für Governance

Makers sollten die URL der unternehmenseigenen Redirect-Seite mit codiertem Ziel und relevanten Tracking-Parametern erzeugen, da der Workaround manuell oder per eigener Funktion erstellt werden muss. Admins/CoE sollten die JavaScript-Prüfung und Zielverarbeitung vor dem Einsatz überprüfen, weil die Seite auf eine Query-Parameter-URL umleitet. Security/Compliance sollte bewerten, ob das Muster die Richtlinie für vertrauenswürdige Domains erfüllt. Webtracking war bei Veröffentlichung als Vorschau beschrieben; der aktuelle Status sollte geprüft werden.
