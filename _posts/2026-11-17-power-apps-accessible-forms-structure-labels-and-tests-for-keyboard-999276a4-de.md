---
title: 'Barrierefreie Power Apps Formen: Struktur, Labels und Tests für Tastatur und
  Screenreader'
description: 'So bauen Sie Power Apps Canvas-Formen für Tastatur und Screenreader:
  logische Tabulatorreihenfolge, klare AccessibleLabel-Werte, sichtbarer Fokus und
  konkrete Fehlermeldungen.'
date: '2026-11-17T04:49:49Z'
author: governance_editorial
lang: de
toc: false
tags:
- compliance
- power-apps
content_type: curated_summary
curation_id: 999276a45db80a375ecf37f1
image:
  path: "/assets/img/curated/999276a45db80a375ecf37f1.png"
  alt: 'Governance-Karte: A form that only a mouse can finish is a locked door for
    keyboard and screen reader users.'
permalink: "/de/posts/power-apps-accessible-forms-structure-labels-and-tests-for-keyboard-999276a4/"
translation_url: "/en/posts/power-apps-accessible-forms-structure-labels-and-tests-for-keyboard-999276a4/"
source_url: https://softchief.com/power-apps-accessible-forms-build-a-clear-path-for-keyboard-and-screen-reader-users/
source_site_url: https://softchief.com/
source_title: 'Power Apps Accessible Forms: Build a Clear Path for Keyboard and Screen-Reader
  Users'
source_name: Softchief Blog
source_language: en
source_language_name: English
source_author: Softchief
source_published_at: '2026-11-17'
source_type: article
faq:
- question: Wie setze ich AccessibleLabel in Power Apps Canvas-Apps?
  answer: Beschreiben Sie im AccessibleLabel-Property den Zweck jedes Eingabefelds,
    zum Beispiel geschäftliche E-Mail-Adresse statt Hier eingeben, und prüfen Sie
    die Ansage in der laufenden App.
- question: Welche Screenreader unterstützt Microsoft für Canvas-Apps?
  answer: Narrator mit Microsoft Edge sowie NVDA mit Chrome oder Firefox gehören zu
    den verifizierten Kombinationen; testen Sie mit den Tools Ihrer Nutzer.
- question: Was zeigt der Accessibility Checker in Power Apps an?
  answer: Er meldet fehlende Bezeichnungen, fehlende oder unsichtbare Fokusrahmen
    und unklare Steuerelementnamen; betrachten Sie die Ergebnisse als Startpunkt,
    nicht als Garantie.
---

## TL;DR

Barrierefreie Power Apps Canvas-Formen brauchen eine logische Feldreihenfolge, eine aussagekräftige AccessibleLabel-Eigenschaft für jedes Eingabefeld und einen gut sichtbaren Fokusindikator. Dekorative Steuerelemente gehören nicht in die Tabulatorreihenfolge, Farbhinweise brauchen Text, Fehlermeldungen müssen konkret sein. Prüfen Sie die Form mit dem Accessibility Checker, per Tastatur allein und mit Screenreadern wie Narrator mit Edge oder NVDA.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Legen Sie für jedes Eingabefeld eine aussagekräftige AccessibleLabel-Eigenschaft fest, lassen Sie dekorative Steuerelemente aus der Tabulatorreihenfolge und führen Sie den Accessibility Checker vor dem Release aus.
- Admins/CoE: Ergänzen Sie Ihre App-Prüfliste um Tastaturläufe und Screenreader-Tests wie Narrator mit Edge oder NVDA mit Chrome, damit Barrieren vor dem Veröffentlichen auffallen.
- Security/Compliance: Verlangen Sie Text-Hinweise zu Pflichtfeldern, sichtbaren Fokus und konkrete Fehlermeldungen, denn Farbe oder Icons allein schliessen Nutzer aus.
