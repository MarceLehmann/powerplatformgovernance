---
title: Power Platform Übergabe bei ausscheidenden Entwicklern
description: Ein Governance-Plan für Bestandsaufnahme, Eigentumsübertragung, sichere
  Verbindungen und Tests, bevor der Zugriff eines Entwicklers entfernt wird.
date: '2026-11-10T10:47:38Z'
author: governance_editorial
lang: de
toc: false
tags:
- ownership
- governance
- environments
- security
- coe
content_type: curated_summary
curation_id: 86a515995b4f1d805df1563c
image:
  path: "/assets/img/curated/86a515995b4f1d805df1563c.png"
  alt: 'Governance-Karte: Ownership is more than access. Transfer knowledge, connections
    and accountability together.'
permalink: "/de/posts/power-platform-ownership-handover-when-a-developer-leaves-86a51599/"
translation_url: "/en/posts/power-platform-ownership-handover-when-a-developer-leaves-86a51599/"
source_url: https://softchief.com/power-platform-application-ownership-and-handover-keep-apps-running-when-a-developer-leaves/
source_site_url: https://softchief.com/
source_title: 'Power Platform Application Ownership and Handover: Keep Apps Running
  When a Developer Leaves'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-11-10'
source_type: article
faq:
- question: Wie sollte ein Power Platform Team Assets vor dem Ausscheiden eines Entwicklers
    erfassen?
  answer: Prüfen Sie jede relevante Umgebung auf Canvas- und modellgesteuerte Apps,
    Flows, Konnektoren und Lösungskomponenten und erfassen Sie Verantwortliche, Abhängigkeiten,
    Benutzer und Geschäftsauswirkungen.
- question: Kann der Besitzer eines Cloud-Flows ohne Lösung direkt geändert werden?
  answer: Nein, der Besitzer eines Flows ohne Lösung kann nicht direkt geändert werden;
    unterstützte Freigabe- oder Mitbesitzeroptionen müssen mit den Abhängigkeiten
    getestet werden.
- question: Was muss vor dem Entfernen des Entwicklerzugriffs in Power Platform getestet
    werden?
  answer: Testen Sie typische Benutzerabläufe, geplante Vorgänge, Integrationen, Fehlerbehandlung,
    Überwachung und Wiederherstellung unter der neuen Supportregelung, bevor Sie den
    Zugriff entziehen.
animation:
  video: /assets/img/animations/86a515995b4f1d805df1563c-de.mp4
  poster: /assets/img/animations/86a515995b4f1d805df1563c-de.poster.webp
  width: 800
  height: 450
  alt: "Die Abfolge zeigt eine Power Platform Uebergabe: Assets in Umgebungen erfassen, Verantwortliche benennen, Verbindungen und Support dokumentieren, Zugriffe sicher uebertragen und dann Vorgaenge testen."
---

## TL;DR

Vor dem Entfernen des Zugriffs eines ausscheidenden Entwicklers werden Power Platform Apps, Flows, Lösungen und Abhängigkeiten in allen Umgebungen erfasst. Geschäfts- und technische Verantwortliche werden benannt, Verbindungen und Support dokumentiert, Zugriffe sicher übertragen und Benutzerabläufe, geplante Vorgänge, Überwachung und Wiederherstellung getestet.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: App-Logik, Datenflüsse, Abhängigkeiten und Bereitstellungsschritte an einem freigegebenen gemeinsamen Ort dokumentieren, damit Nachfolger das Asset betreiben können.
- Admins/CoE: Ein Register mit Produktionsassets, Umgebungen, Kritikalität, Abhängigkeiten und Prüfterminen pflegen und nach Zugriffsänderungen verwaiste Flows prüfen.
- Security/Compliance: Persönliche Verbindungen bei Bedarf ersetzen, Berechtigungen und DLP-Anforderungen prüfen und kritische Workflows nicht von der Anmeldung eines früheren Mitarbeiters abhängig machen.
- Leadership/Business: Vor einer Veröffentlichung oder dem Ausscheiden Geschäfts- und technische Verantwortliche benennen, damit Entscheidungen, Support und Ausfallfolgen klar zugeordnet sind.
