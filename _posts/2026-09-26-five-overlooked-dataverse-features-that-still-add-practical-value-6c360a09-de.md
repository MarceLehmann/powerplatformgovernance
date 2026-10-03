---
title: Fünf übersehene Dataverse-Funktionen mit praktischem Nutzen
description: Dataverse bietet nützliche Funktionen ausserhalb des Maker-Portals, darunter
  Outlook- und Exchange-Integration, Diagnostik, Feldzuordnungen und Mehrtabellen-Suchfelder.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
- power-apps
- power-automate
- environments
content_type: curated_summary
curation_id: 6c360a09bf8bc3204851efea
image:
  path: "/assets/img/curated/6c360a09bf8bc3204851efea.png"
  alt: 'Governance-Karte: Dataverse features hide outside the maker portal. Know the
    limits before you design.'
permalink: "/de/posts/five-overlooked-dataverse-features-that-still-add-practical-value-6c360a09/"
translation_url: "/en/posts/five-overlooked-dataverse-features-that-still-add-practical-value-6c360a09/"
source_url: https://readyxrm.blog/2025/08/28/five-forgotten-features-of-dataverse/
source_site_url: https://readyxrm.blog/
source_title: Five forgotten features of Dataverse
source_name: ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-08-28'
source_type: article
faq:
  - question: "Brauche ich eine Dynamics-365-Lizenz, um den Dynamics 365 Outlook Connector zu nutzen?"
    answer: "Nein. Wer eine Power-Apps-Lizenz hat, darf ihn laut Autor uneingeschränkt verwenden. Er ordnet E-Mails Dataverse-Datensätzen zu und verknüpft Dataverse-Kontakte mit Outlook-Kontakten, was im Alltag viel Abtippen erspart. Als einen Grund für die geringe Verbreitung sieht der Autor die irreführende Benennung."
  - question: "Was bringt die native Exchange-Online-Integration in Dataverse?"
    answer: "Sie erlaubt es, E-Mails aus Power Apps zu senden und zu empfangen, ohne einen Power-Automate-Flow, wodurch Flow-Läufe im Kontingent bleiben, und ohne ein spezielles Servicekonto. Für die Einrichtung braucht es Serverintegration, Postfächer, Warteschlangen und E-Mail-fähige Tabellen, was der Artikel der Microsoft-Dokumentation überlässt."
  - question: "Wo finde ich den Geschwindigkeitstest von Dataverse und wie setze ich ihn ein?"
    answer: "Hänge tools/diagnostics/diag.aspx an die crm.dynamics.com-Adresse deiner Umgebung an. Das Werkzeug hilft bei langsamen modellgesteuerten Apps, indem es misst, wie deine Umgebung antwortet. Der Autor empfiehlt, es regelmässig laufen zu lassen und Vergleichswerte aufzubewahren, damit du Leistungseinbussen erkennst, indem du aktuelle mit früheren Messungen vergleichst."
  - question: "Wie funktionieren Feldzuordnungen in Dataverse und wo liegen ihre Grenzen?"
    answer: "Legst du in einer modellgesteuerten App einen verknüpften Datensatz an, etwa einen Kontakt aus dem Unterraster einer Firma, werden zugeordnete Werte in den neuen Datensatz kopiert. Das passiert nur bei der Erstellung, setzt gleiche Feldtypen und gleich grosse oder kleinere Felder voraus, und spätere Änderungen am übergeordneten Datensatz wirken nicht nach. Die Oberfläche gibt es nur im klassischen Tabellen-Designer."
  - question: "Kann ich in Dataverse ohne Code eine Nachschlagespalte für mehrere Tabellen anlegen?"
    answer: "Nicht auf maker-freundliche Art. Die Kundensuche auf Konto oder Kontakt ist eingebaut, eigene Nachschlagespalten auf mehrere Tabellen erfordern aber SDK-Zugriff. XrmToolBox bietet dafür ein Hilfsprogramm, das den Zugang erleichtert. Als Beispiel nennt der Autor eine Spesen-App, in der mehrere Buchungsnachschlagen zu einer einzigen werden und das Formular vereinfachen."
---

## TL;DR

Dataverse unterstützt die Zuordnung von Outlook-E-Mails zu Dataverse-Datensätzen, Exchange-Online-E-Mails ohne Power-Automate-Flows, eine Diagnose-URL für die Leistung modellgesteuerter Apps, Feldzuordnungen über die klassische Oberfläche und Mehrtabellen-Suchfelder. Feldzuordnungen gelten nur bei der Erstellung; benutzerdefinierte Mehrtabellen-Beziehungen benötigen laut Quelle SDK oder XrmToolBox.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt Feldzuordnungen, um kompatible Felder beim Erstellen verbundener Datensätze automatisch zu befüllen, aber erwartet keine späteren Aktualisierungen vom übergeordneten Datensatz.
- Makers: Führt die Diagnose-URL für modellgesteuerte Apps regelmässig aus, damit Leistungsänderungen über Vergleichswerte erkennbar werden.
- Admins/CoE: Prüft Exchange-Online-Integration, Postfächer und Warteschlangen, bevor E-Mail-Flows erstellt werden, die Flow-Ausführungen oder spezielle Dienstkonten benötigen.
- Admins/CoE: Behandelt benutzerdefinierte Mehrtabellen-Suchfelder als kontrollierte Designentscheidung, da ihre Einrichtung laut Quelle SDK oder XrmToolBox statt der Maker-Oberfläche erfordert.
