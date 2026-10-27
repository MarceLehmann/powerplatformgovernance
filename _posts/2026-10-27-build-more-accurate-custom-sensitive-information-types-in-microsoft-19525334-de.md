---
title: Genauere benutzerdefinierte Informationstypen in Microsoft Purview erstellen
description: Regex, unterstützende Schlüsselwörter, Nähe-Einstellungen und reale Beispieldateien
  senken Fehlalarme bei benutzerdefinierten sensiblen Informationstypen in Microsoft
  Purview.
date: '2026-10-27T16:41:09Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- compliance
- dlp
content_type: curated_summary
curation_id: 195253340c60e0768f39116e
image:
  path: "/assets/img/curated/195253340c60e0768f39116e.png"
  alt: 'Governance-Karte: Shape alone does not equal meaning. Context makes detection
    precise.'
permalink: "/de/posts/build-more-accurate-custom-sensitive-information-types-in-microsoft-19525334/"
translation_url: "/en/posts/build-more-accurate-custom-sensitive-information-types-in-microsoft-19525334/"
source_url: https://www.m365.fm/blog/microsoft-purview-custom-sensitive-information-types/
source_site_url: https://www.m365.fm/
source_title: 'Microsoft Purview Custom Sensitive Information Types: Building Regex
  and Supporting Evidence That Actually Work'
source_name: M365 FM
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie erkennen benutzerdefinierte sensible Informationstypen interne Mitarbeiterkennungen
    in Microsoft Purview?
  answer: Sie verbinden ein Regex-Muster für die Struktur der Kennung mit unterstützenden
    Begriffen wie Personalnummer oder HR-Datensatz. Dadurch erhält der Treffer zusätzlichen
    Geschäftskontext.
- question: Was steuert die Nähe-Einstellung in einem sensiblen Informationstyp von
    Microsoft Purview?
  answer: Sie legt fest, wie nah unterstützende Schlüsselwörter am Regex-Treffer stehen
    müssen. Ein enges Fenster verhindert, dass weit entfernte Dokumenttexte unabhängige
    Treffer auslösen.
- question: Wie lassen sich benutzerdefinierte sensible Informationstypen in Microsoft
    Purview vor der Durchsetzung testen?
  answer: Ladet reale Geschäftsdokumente und E-Mails mit positiven, negativen und
    grenzwertigen Beispielen hoch. Prüft Fehlalarme und Lücken und verfeinert danach
    Regex, Schlüsselwörter oder Nähe-Einstellungen.
---

## TL;DR

Benutzerdefinierte sensible Informationstypen in Microsoft Purview kombinieren strukturierte Regex-Muster mit nahen Schlüsselwörtern und Nähe-Einstellungen, um firmenspezifische Kennungen zu erkennen. Schlüsselwortverzeichnisse bündeln verwandte Begriffe. Reale positive, negative und grenzwertige Dateien prüfen die Genauigkeit vor der Durchsetzung, während breite Muster unnötige Alarme erzeugen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Nutzt strukturell präzise Regex-Muster für firmenspezifische Kennungen, weil breite Zahlenmuster auch Telefonnummern, Rechnungen und normale Tabellen erfassen können.
- Admins/CoE: Pflegt spezifische Schlüsselwortverzeichnisse und enge Nähe-Fenster, weil allgemeine Begriffe oder weit entfernte Kontexte Fehlalarme erzeugen.
- Security/Compliance: Prüft benutzerdefinierte Typen vor der Durchsetzung mit realen positiven, negativen und grenzwertigen Dokumenten und verbessert Regeln anhand erkannter Fehlalarme und Lücken.
