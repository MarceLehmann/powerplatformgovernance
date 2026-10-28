---
title: 'PCF oder Canvas-Komponenten: Die passende Power Apps-Erweiterung wählen'
description: Canvas-Komponenten ermöglichen schnelle No-Code-Oberflächen. PCF unterstützt
  fortgeschrittene Steuerelemente, bringt aber Entwicklungs-, Leistungs- und Governance-Aufwand
  mit sich.
date: '2026-10-28T04:32:04Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- ownership
- power-apps
- dataverse
- environments
content_type: curated_summary
curation_id: c1e9d6ae10cf33aadba179ee
image:
  path: "/assets/img/curated/c1e9d6ae10cf33aadba179ee.png"
  alt: 'Governance-Karte: Choose the simplest component that meets the need. Custom
    code creates an ownership obligation.'
permalink: "/de/posts/pcf-or-canvas-components-choose-the-right-power-apps-extension-c1e9d6ae/"
translation_url: "/en/posts/pcf-or-canvas-components-choose-the-right-power-apps-extension-c1e9d6ae/"
source_url: https://www.m365.fm/blog/pcf-vs-canvas-components-power-apps/
source_site_url: https://www.m365.fm/
source_title: When to Build a Custom PCF Control vs. Using Canvas Components in Power
  Apps
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-27'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Funktionieren Canvas-Komponenten in modellgesteuerten Power Apps?
  answer: Nein. Canvas-Komponenten sind auf Canvas-Apps beschränkt. Für benutzerdefinierte
    Steuerelemente in modellgesteuerten Apps oder Power Pages sind PCF-Codekomponenten
    erforderlich.
- question: Welche Sprachen und Werkzeuge braucht man für ein PCF-Steuerelement?
  answer: PCF-Entwicklung erfordert TypeScript oder JavaScript, HTML, CSS und die
    Microsoft Power Platform CLI für Erstellung und Paketierung.
- question: Warum braucht ein PCF-Steuerelement einen benannten Besitzer?
  answer: PCF-Steuerelemente benötigen Build-Schritt, Quellcode-Repository und Dataverse-Lösungsbereitstellung.
    Fehlende Verantwortung oder Dokumentation kann daher eine unwartbare Black Box
    erzeugen.
---

## TL;DR

Canvas-Komponenten liefern schnelle No-Code-Oberflächen in Canvas-Apps, bleiben aber auf Ausdruckssprache und Layout-Engine beschränkt. PCF-Steuerelemente nutzen TypeScript, HTML, CSS, die Power Platform CLI und Manifest-Ein- und Ausgaben; sie funktionieren auch in modellgesteuerten Apps und Power Pages, benötigen jedoch Build-Schritt, Quellcode-Repository, Besitzer und Bereitstellung über Dataverse-Lösungen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt Canvas-Komponenten für wiederverwendbare Oberflächen in Canvas-Apps, wenn schnelle No-Code-Bereitstellung genügt; gestapelte Workarounds können Leistung und Wartbarkeit verschlechtern.
- Admins/CoE: Fordert für PCF-Steuerelemente einen benannten Besitzer, Dokumentation, Quellcode-Repository, Build-Schritt und Bereitstellung über Dataverse-Lösungen; verhindert so unwartbare Black Boxes und Duplikate.
- Leadership/Business: Bevorzugt native Steuerelemente oder Canvas-Komponenten, wenn sie etwa neunzig Prozent der Anforderungen erfüllen; der geringere Wartungsaufwand kann pixelgenaue Eigenentwicklung überwiegen.
