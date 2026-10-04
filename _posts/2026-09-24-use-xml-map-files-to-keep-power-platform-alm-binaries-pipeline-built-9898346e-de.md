---
title: XML-Map-Dateien für pipeline-erstellte Binärdateien im Power-Platform-ALM nutzen
description: Erklärt, wie XML-Map-Dateien Lösungs-DLLs und Webressourcen mit lokal
  erstellten Binärdateien verbinden und in PAC CLI sowie Power-Platform-Build-Tools
  eingesetzt werden.
date: '2026-09-24T01:48:20Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- environments
content_type: curated_summary
curation_id: 9898346e7159f0a3dcb8a9ae
permalink: "/de/posts/use-xml-map-files-to-keep-power-platform-alm-binaries-pipeline-built-9898346e/"
translation_url: "/en/posts/use-xml-map-files-to-keep-power-platform-alm-binaries-pipeline-built-9898346e/"
source_url: https://benediktbergmann.eu/2025/03/31/using-map-file-in-alm/
source_site_url: https://benediktbergmann.eu/
source_title: Using Map file in ALM
source_name: Benedikt's Power Platform Blog
source_language: en
source_language_name: English
source_author: Benedikt
source_published_at: '2025-03-31'
faq:
  - question: "Welche Aufgabe hat eine XML-Map-Datei im Power-Platform-ALM?"
    answer: "Sie legt fest, welche Plug-in-DLLs und Webressourcen zu einer Lösung gehören und wo sie auf dem lokalen Datenträger liegen. Die Pipeline kann dann frisch gebaute Binärdateien aus dem Build-Ergebnis verwenden. So bleiben Binärdateien aus dem Repository draussen, und nur getestete, von der Pipeline gebaute Komponenten erreichen die nachgelagerten Umgebungen."
  - question: "Welche Zuordnungsarten kennt eine Map-Datei in der Power Platform?"
    answer: "Die Ordnerzuordnung bildet einen ganzen Ordner ab und dient meist Webressourcen. Die Datei-zu-Datei-Zuordnung verknüpft genau eine Quelle mit einem Ziel und ist bei Plug-in-DLLs üblich. Die Datei-zu-Pfad-Zuordnung sucht bestimmte Dateien in zugeordneten Ordnern, was bei verteilter Dateistruktur hilft. Welche Art passt, hängt davon ab, wie die Build-Ausgabe der Lösung aufgebaut ist und wo die Dateien liegen."
  - question: "Wie nutzen die Power Platform Build Tools eine Map-Datei?"
    answer: "Den Parameter MapFile in den Schritten Unpack und Pack der Build Tools in der YAML-Pipeline ergänzen und auf die XML-Datei verweisen. Die Unpack- und Pack-Schritte der CLI bieten die Option für Map-Dateien, und die Azure-DevOps-Oberfläche der Build Tools zeigt sie ebenfalls an. Der Autor legt pro Lösung eine Map-Datei in seinem Repository ab."
  - question: "Warum braucht es Map-Dateien, obwohl Lösungen die Komponenten schon enthalten?"
    answer: "Je nachdem, ob man einem umgebungszentrierten oder quellcodezentrierten ALM-Ansatz folgt, wird eine Lösung aus einer Umgebung statt aus einem Repository erzeugt. Entwickler deployen Pro-Code-Komponenten meist in die Entwicklungsumgebung, obwohl diese für nachgelagerte Umgebungen noch nicht bereit sind. Map-Dateien lassen die Pipeline die Binärdateien liefern, sodass gebaute und getestete Stände ankommen."
  - question: "Funktioniert der Befehl PAC clone ebenfalls mit Map-Dateien?"
    answer: "Ja, der Artikel nennt den PAC-Befehl clone als neuere Ergänzung für ein gesundes ALM, die Map-Dateien unterstützt. Mit einem Clone legt ein Entwickler eine Kopie der Lösung auf der lokalen Platte an, die mit einem normalen msbuild-Befehl arbeitet, was eine Arbeitsweise näher am Pro-Dev erlaubt. Der Autor räumt ein, dass Map-Dateien anfangs verwirren können."
---
## TL;DR

XML-Map-Dateien definieren, wo Plugin-DLLs und Webressourcen lokal liegen. Dadurch kann die Plattform Binärdateien beim Entpacken unterdrücken, während die Pipeline sie bei Bedarf erstellt. Der Beitrag zeigt Ordner-, Datei-zu-Datei- und Datei-zu-Pfad-Zuordnungen sowie eine DemoPlugin.dll-Konfiguration und den MapFile-Pfad für einen Azure-DevOps-Pack- oder Unpack-Schritt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: pro Lösung eine Map-Datei anlegen und sie in jedem PAC-CLI- oder Build-Tools-Pack-/Unpack-Schritt referenzieren, damit nachgelagerte Exporte immer pipeline-erstellte Binärdateien enthalten statt das, was zuletzt auf irgendeiner Entwickler-Maschine gebaut wurde.
- Maker: die Plugins oder Webressourcen bauen, sollten kompilierte DLLs und JavaScript komplett aus der Quellcodeverwaltung heraushalten und sich auf den gemappten lokalen Pfad verlassen — eine Binärdatei einzuchecken, die eigentlich die Pipeline erzeugen soll, hebelt den ganzen Sinn des Mappings aus.
