---
title: Power-Automate-Flow exportieren, wenn die Exportoption fehlt
description: Der Pfad /export öffnet die verborgene Paket-Exportseite, nachdem ein
  Flow aus einer Lösung entfernt wurde.
date: '2026-09-24T01:02:38Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- power-automate
- environments
content_type: curated_summary
curation_id: 9ab9c12e4911439c4ca320b1
permalink: "/de/posts/export-a-power-automate-flow-when-the-export-option-is-missing-9ab9c12e/"
translation_url: "/en/posts/export-a-power-automate-flow-when-the-export-option-is-missing-9ab9c12e/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-193-export-flow-when-export-option-missing/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 193: Export a Power Automate Flow When the Export
  Option Is Missing"
source_name: PowerPlatformTip
source_language: en
source_language_name: English
source_author: Marcel Lehmann
source_published_at: '2026-09-23'
source_updated_at: '2026-09-23'
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
faq:
  - question: "Warum fehlt für meinen Cloud-Flow die Option Paket exportieren?"
    answer: "Solution-aware Flows haben die eigenständige Option Export > Package (.zip) absichtlich nicht. Der Artikel ergänzt, dass der Export-Button auch nach dem Entfernen des Flows aus der Lösung verborgen bleiben kann. Der URL-Trick dieses Tipps führt trotzdem zur Exportseite. Für wiederholbare Verschiebungen mehrerer Flows bevorzugt der Artikel Dataverse-Lösungen."
  - question: "Wie funktioniert der URL-Trick zum Exportieren eines Flows?"
    answer: "Nachdem du den Flow aus der Lösung entfernt hast, öffnest du seine Detailseite unter Meine Flows und ersetzt am Ende der Adresse details durch export, dann Enter. Es öffnet sich die Exportseite, auf der du das Paket umbenennst, als Importverhalten Neu erstellen oder Aktualisieren wählst und die Zip-Datei herunterlädst."
  - question: "Welche Entfernen-Option muss ich beim Lösen eines Flows aus der Lösung meiden?"
    answer: "Nicht Delete from this environment wählen, denn das würde den Flow löschen statt nur herauszulösen. Stattdessen Remove und dann Remove from this solution verwenden, was den Flow nur aus der Lösung löst. Dieser Schritt steht am Anfang, noch bevor man die URL auf der Detailseite ändert. Exportieren dürfen nur Besitzer oder Miteigentümer des Flows."
  - question: "Wird der Export-Trick über die Flow-URL von Microsoft offiziell unterstützt?"
    answer: "Nein. Der Artikel nennt ihn einen praktischen Umweg über die Oberfläche und keine offiziell dokumentierte Funktion. Der dokumentierte Weg ist der Export ganzer Dataverse-Lösungen fürs Lebenszyklusmanagement. Nur Besitzer oder Miteigentümer des Flows können so exportieren, und im Browser müssen Cookies von Drittanbietern erlaubt sein."
  - question: "Wo importiere ich ein Flow-Paket, das mit diesem Trick exportiert wurde?"
    answer: "In der Zielumgebung zu My flows gehen, dann Import, dann Import Package (Legacy) wählen und die Zip-Datei hochladen. Laut Artikel ist für diesen Standard-Paketexport und -import eines einzelnen Cloud-Flows keine Premium-Lizenz nötig. Für wiederholbare Verschiebungen mehrerer Flows empfiehlt er stattdessen Dataverse-Lösungen."
---
## TL;DR

Bleibt bei einem Cloudflow nach dem Entfernen aus einer Lösung die Option Export &gt; Paket (.zip) verborgen, öffnet My flows und ersetzt am Ende der Detail-URL /details durch /export. Danach lassen sich Importverhalten wie Neu erstellen oder Aktualisieren festlegen und das Paket herunterladen. Exportieren dürfen nur Besitzer oder Mitbesitzer.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: deren Flow bereits aus einer Lösung entfernt wurde, können den /export-URL-Trick nutzen, um ihn über Neu erstellen oder Aktualisieren herauszuholen — allerdings nur, wenn sie bereits Besitzer oder Mitbesitzer sind, mehr Zugriff verschafft der Trick nicht.
- Admins/CoE: /export als Einzelfall-Rettung behandeln, nicht als unterstützten ALM-Pfad, und für alles, was wiederholt über Umgebungen hinweg verschoben werden muss, auf Dataverse-Lösungen setzen.
- Security/Compliance: jeden Prozess, der sich auf /export stützt, als zu schliessende Dokumentationslücke markieren, denn ein undokumentiertes URL-Muster kann sich ohne Ankündigung ändern oder verschwinden.
