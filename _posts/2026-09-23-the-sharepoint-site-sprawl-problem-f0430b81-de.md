---
title: Das SharePoint-Site-Sprawl-Problem
description: Warum Self-Service-Site-Erstellung einen IT-Engpass gegen ein Stilllegungsproblem
  eintauscht, und wie Erstellungsregeln und Lifecycle-Reviews von Anfang an zusammengehören.
date: '2026-09-23T23:51:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
content_type: curated_summary
curation_id: f0430b81fd1d21920c4ff13b
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-42.png
  alt: Governance-Karte zu Site- und Umgebungswildwuchs durch Self-Service-Erstellung.
permalink: "/de/posts/the-sharepoint-site-sprawl-problem-f0430b81/"
translation_url: "/en/posts/the-sharepoint-site-sprawl-problem-f0430b81/"
source_url: https://pnp.github.io/blog/post/the-spo-site-sprawl-problem/
source_site_url: https://pnp.github.io/
source_title: The SharePoint Site Sprawl Problem
source_name: Microsoft 365 & Power Platform Community Blog
source_author: Josiah Opiyo
source_language: en
source_language_name: English
source_published_at: '2026-08-16'
faq:
  - question: "Warum ist Unsicherheit das eigentliche Problem bei vielen SharePoint-Sites?"
    answer: "Weil bei wachsender Zahl an Sites Grundfragen unbeantwortet bleiben: Wo gehört Inhalt hin, wem gehört die Site, ist der Inhalt noch relevant, wer hat Zugriff, und gibt es ein doppeltes Angebot für denselben Zweck? Bleiben diese Fragen offen, arbeitet die Administration nur noch reaktiv. Die schiere Anzahl der Sites ist also nicht der Kern, sondern der fehlende Überblick."
  - question: "Wodurch entsteht Wildwuchs bei SharePoint-Sites, obwohl IT ihn vermeiden will?"
    answer: "Selbstbedienung beim Erstellen wurde eingeführt, um IT-Engpässe zu vermeiden. Anlegen ist einfach, Aufräumen schwer. Zudem sind Teams und Microsoft-365-Gruppen eng mit SharePoint verbunden, deshalb deckt das Sperren einer einzelnen Erstellungsroute nicht zwingend jeden Weg ab, über den neue Sites entstehen."
  - question: "Welche Site-Merkmale betrachtet der Beitrag für die SharePoint-Governance?"
    answer: "Der Beitrag behandelt den Besitzstatus, etwa ausgeschiedene Besitzer oder inaktive Konten, die Dauer ohne sinnvolle Aktivität, externe Freigaben, doppelte Sites mit gleichem Zweck, Namen und Zweck, Vertraulichkeit, Mitgliedschaft und Berechtigungen sowie Erwartungen an den Lebenszyklus. So sehen Administratoren, wo tatsächlich Aufmerksamkeit nötig ist, statt nur eine weitere grosse Liste von Sites zu erhalten."
  - question: "Heisst eine hohe Zahl an SharePoint-Sites automatisch schlechte Governance?"
    answer: "Nein. Eine grosse Zahl allein sagt nichts über die Qualität. Entscheidend ist, ob die Organisation versteht, was sie hat, und sinnvolle Entscheidungen darüber treffen kann. Manche Organisationen lassen die Selbstbedienung offen und ergänzen klarere Hinweise, Besitzererwartungen, Lebenszyklus-Überprüfungen und Berichte, andere verlangen für bestimmte Arten der Erstellung eine Genehmigung."
  - question: "Welche Massnahmen und Werkzeuge helfen gegen unkontrolliertes Wachstum von SharePoint-Sites?"
    answer: "Der Beitrag nennt Lebenszyklus-Überprüfungen mit Berichten, Genehmigungen für bestimmte Site-Typen, Besitzerrichtlinien, die Sites ohne erfüllte Vorgaben anzeigen, sowie die Funktionen zur Lebenszyklusverwaltung für Besitz, Inaktivität und Bestätigung. Als Werkzeuge gelten PowerShell für Inventar und Berichte sowie das SharePoint Admin Center mit seinen Kontrollen und Auswertungen."
---
## TL;DR

Self-Service-Site-Erstellung nimmt der IT Engpässe ab, macht aber die Stilllegung zum eigentlichen Problem: Sites häufen sich mit unklaren Besitzern und jahrelang ohne Aktivität an. Die Lösung sind nicht Erstellungssperren, sondern von Anfang an klare Namenskonventionen, Sensitivitätsstufen und regelmässige Besitzprüfungen, die Sites mit ausgeschiedenen Besitzern erkennen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: jede Self-Service-Erstellungsregel von Anfang an mit einer wiederkehrenden Besitz-Attestierung koppeln — eine verwaiste Site Jahre später stillzulegen kostet deutlich mehr als vierteljährlich den Besitzer zu prüfen.
- Maker: die eine neue Site, App oder Umgebung anlegen, sollten Namenskonventionen und Sensitivitätsstufen gleich bei der Erstellung setzen, nicht erst wenn Governance danach fragt.
- Leadership/Business: Wildwuchs als Lifecycle-Kostenproblem verstehen, nicht als Reibungsproblem bei der Anfrage — Erstellung zu blockieren löst es nicht, aber Lifecycle-Reviews auszulassen garantiert es.
