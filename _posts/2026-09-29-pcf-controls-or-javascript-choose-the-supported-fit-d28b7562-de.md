---
title: 'PCF-Steuerelemente oder JavaScript in Dynamics 365: Die passende Wahl'
description: PCF oder JavaScript sollte nach Benutzererlebnis, App-Kontext, Wartbarkeit
  und Sicherheitsanforderungen ausgewählt werden.
date: '2026-09-29T11:14:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- alm
- security
- ownership
- power-apps
content_type: curated_summary
curation_id: d28b756205bcef8a79a30efd
image:
  path: "/assets/img/curated/d28b756205bcef8a79a30efd.png"
  alt: 'Governance-Karte: Use the smallest supported tool. Client-side checks do not
    secure critical data.'
permalink: "/de/posts/pcf-controls-or-javascript-choose-the-supported-fit-d28b7562/"
translation_url: "/en/posts/pcf-controls-or-javascript-choose-the-supported-fit-d28b7562/"
source_url: https://softchief.com/pcf-controls-vs-javascript-in-dynamics-365-which-customization-approach-should-you-use/
source_site_url: https://softchief.com/
source_title: 'PCF Controls vs JavaScript in Dynamics 365: Which Customization Approach
  Should You Use?'
source_name: Softchief Technologies
source_language: en
source_language_name: English
source_author: Softchief Author
source_published_at: '2026-09-29'
source_type: article
faq:
  - question: "Wann nehme ich eine PCF-Komponente und wann JavaScript in Dynamics 365?"
    answer: "PCF baut eigene Oberflächenkomponenten, JavaScript ergänzt in der Regel Verhalten auf Formularen modellgesteuerter Apps. Nimm PCF, wenn du Darstellung oder Bearbeitung neu gestalten willst, etwa einen Schieberegler für Zahlen, eine Kalenderansicht oder eine Kartenansicht. Nimm JavaScript, wenn du auf Formularereignisse wie Laden, Feldänderung oder Speichern reagierst, Werte setzt oder Felder ein- und ausblendest."
  - question: "Reicht es, ein Feld per JavaScript auszublenden, um Daten zu schützen?"
    answer: "Nein. Ein Feld im Browser auszublenden oder dort einen Wert zu prüfen, sichert die Daten nicht. Clientseitige Prüfungen helfen bei der Benutzerführung, wichtige Datenregeln müssen serverseitig durchgesetzt werden. Den Zugriff steuern Sicherheitsrollen und Berechtigungen der Plattform. Das gilt für PCF-Komponenten und Formularskripte gleichermassen."
  - question: "Ist Xrm.Page für neuen Formularcode in Dynamics 365 noch empfohlen?"
    answer: "Nein. Microsoft kennzeichnet den älteren Xrm.Page-Ansatz als veraltet und empfiehlt für neuen Code, wo anwendbar, den formContext. Formularskripte sollen die unterstützte Client-API nutzen und den Ausführungskontext übergeben. Direkte Eingriffe ins DOM rät der Beitrag ab, weil das interne Markup kein stabiler Vertrag ist und Anpassungen bei App-Änderungen brechen können."
  - question: "In welchen Apps laufen PCF-Komponenten und Formularskripte?"
    answer: "Formularskripte gelten für Formulare modellgesteuerter Apps. PCF-Komponenten unterstützen sowohl modellgesteuerte als auch Canvas-Apps, wobei die Unterstützung je nach Komponententyp, Zielfläche und Konfiguration variiert. Prüfe deshalb vor der Entwicklung, ob dein Feld und deine App für die geplante Komponente unterstützt sind, und teste immer in der Ziel-App mit echten Daten."
  - question: "Was sollte ich vor dem Entwickeln einer PCF-Komponente oder eines Formularskripts klären?"
    answer: "Kläre die Anforderung und die unterstützte Plattformfläche, die Fähigkeiten im Team und die langfristige Zuständigkeit. PCF verlangt in der Regel TypeScript und Framework-Wissen, Formularskripte JavaScript und Client-API-Kenntnis. Baue für riskante Annahmen einen Prototyp, etwa zu Mobilgeräten oder komplexen Formularen, und teste Barrierefreiheit, denn eigene Controls bringen Tastaturbedienung und Screenreader nicht automatisch mit."
---

## TL;DR

PCF eignet sich für wiederverwendbare Benutzeroberflächen wie Schieberegler, Wählräder, Kalender, Karten oder spezielle Datenansichten. JavaScript passt zu unterstützten Formularereignissen in modellgesteuerten Apps, etwa Laden, Ändern und Speichern. App- und Feldkompatibilität prüfen, Releases paketieren und testen sowie kritische Regeln serverseitig durchsetzen, da clientseitige Logik Daten nicht absichert.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: PCF für wiederverwendbare Oberflächen und JavaScript für gezieltes Formularverhalten wählen; unterstützte APIs nutzen und direkte DOM-Änderungen vermeiden.
- Admins/CoE: Ziel-App, Feldunterstützung, Lösungspaketierung, Umgebungseinstellungen, Freigaben und langfristige Eigentümerschaft vor der Umsetzung dokumentieren; importierte Releases in der Zielumgebung testen.
- Security/Compliance: Ausgeblendete Felder und Browser-Prüfungen nur als Benutzerführung behandeln; Berechtigungen und serverseitige Durchsetzung für kritische Datenregeln einsetzen.
