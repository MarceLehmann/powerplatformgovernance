---
title: 'KingswaySoft-Fehler beheben: Unauthorized bei langen Dataverse-Läufen'
description: Bei langer KingswaySoft-Pagination gegen Dataverse läuft das Token ab.
  Der Dienst wird im Catch-Block erneuert, drei Sekunden gewartet und die Anfrage
  wiederholt.
date: '2026-11-21T16:38:14Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- dataverse
content_type: curated_summary
curation_id: dbb33a57195cdb71e9db17de
image:
  path: "/assets/img/curated/dbb33a57195cdb71e9db17de.png"
  alt: 'Governance-Karte: Tokens expire before long Dataverse jobs finish. Renew the
    service and retry, or the run fails.'
permalink: "/de/posts/fixing-the-kingswaysoft-unauthorized-error-on-long-dataverse-runs-dbb33a57/"
translation_url: "/en/posts/fixing-the-kingswaysoft-unauthorized-error-on-long-dataverse-runs-dbb33a57/"
source_url: https://temmyraharjo.com/posts/dataverse-kingswaysoft-the-http-request-is-unauthorized-with-client-authentication-scheme-anonymous
source_site_url: https://temmyraharjo.com/
source_title: Dataverse KingswaySoft - The HTTP request is unauthorized with client
  authentication scheme 'Anonymous'
source_name: Temmy Raharjo's Blog
source_language: en
source_language_name: English
source_author: Temmy Raharjo
source_published_at: '2026-11-21'
source_type: article
faq:
- question: Warum wirft KingswaySoft bei Dataverse den Fehler HTTP request is unauthorized
    mit Authentication Scheme Anonymous?
  answer: Das Authentifizierungstoken läuft bei langer Pagination ab und der Code
    erneuert den Dienst nicht, weshalb spätere Anfragen abgelehnt werden.
- question: Wie behebe ich den Unauthorized-Fehler in einer KingswaySoft Script Component?
  answer: Im Catch-Block den CRM-Service über die Verbindung neu erzeugen, drei Sekunden
    warten und die Anfrage wiederholen. So wird das abgelaufene Token ersetzt.
- question: Unterstützt KingswaySoft das Auslesen unmaskierter Daten über den UnMaskedData-Parameter
    in Dataverse?
  answer: Nein, KingswaySoft unterstützte die UnMaskedData-Funktion nicht, weshalb
    eigener Code in einer Script Component oder einem Script Task nötig war.
animation:
  video: /assets/img/animations/dbb33a57195cdb71e9db17de-de.mp4
  poster: /assets/img/animations/dbb33a57195cdb71e9db17de-de.poster.webp
  width: 800
  height: 450
  alt: "Ein Ablauf in drei Schritten zeigt bei langer Dataverse-Pagination einen Unauthorized-Fehler, dann das Erneuern von IOrganizationService im Catch-Block, drei Sekunden Warten und das Wiederholen der Anfrage."
---

## TL;DR

Eigener KingswaySoft-Code mit IOrganizationService kann bei langer Dataverse-Pagination mit dem HTTP-Fehler unauthorized Anonymous scheitern, weil das Authentifizierungstoken abläuft und nie erneuert wird. Die Lösung erneuert den CRM-Dienst im Catch-Block, wartet drei Sekunden und wiederholt die Anfrage. Eigene Skripte unbedingt mit grossen Datenmengen testen, damit langlebige Läufe zuverlässig bleiben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Serviceaufrufe in KingswaySoft-Script-Komponenten mit grosser Dataverse-Pagination in einen Retry packen, der den IOrganizationService erneuert, da Tokens mitten im Lauf ablaufen.
- Admins/CoE: Den Fehler unauthorized Anonymous in langen Integrationsläufen als abgelaufenes Token und nicht als Berechtigungsproblem einstufen.
- Security/Compliance: Prüfen, dass eigener Integrationscode die Serviceinstanz bei Fehlern erneuert, statt sie über den ganzen Lauf beizubehalten.
