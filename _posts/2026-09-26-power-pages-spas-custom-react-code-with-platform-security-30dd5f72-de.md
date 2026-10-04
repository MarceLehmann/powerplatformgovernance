---
title: 'Power Pages SPAs: React-Code mit integrierter Plattform-Sicherheit'
description: Ein praktisches Preview-Tutorial zeigt den Upload einer React-Single-Page-App
  in Power Pages mit weiterhin verfügbaren Authentifizierungs- und Tabellenberechtigungen.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- environments
- dataverse
content_type: curated_summary
curation_id: 30dd5f724ac5c30cba3ecf50
image:
  path: "/assets/img/curated/30dd5f724ac5c30cba3ecf50.png"
  alt: 'Governance-Karte: A Power Pages SPA still needs authentication and table permissions.
    Preview code belongs outside production.'
permalink: "/de/posts/power-pages-spas-custom-react-code-with-platform-security-30dd5f72/"
translation_url: "/en/posts/power-pages-spas-custom-react-code-with-platform-security-30dd5f72/"
source_url: https://readyxrm.blog/2025/09/04/power-pages-single-page-apps-create-a-hello-world-website/
source_site_url: https://readyxrm.blog/
source_title: 'Power Pages single-page apps: Create a Hello World website'
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2025-09-04'
source_type: article
faq:
  - question: "Welche Frameworks unterstützt Power Pages für Single-Page-Apps und in welchem Status?"
    answer: "Unterstützt werden React, Angular und Vue. Zum Zeitpunkt des Beitrags war das Feature in der Preview, weshalb der Autor mit einzelnen Fehlern rechnet."
  - question: "Wie lädt man die kompilierte React-Seite in Power Pages hoch?"
    answer: "Zuerst meldet man sich mit pac auth create und der Umgebungs-ID an. Diese ID steht in den Sitzungsdetails, die man über das Zahnrad auf der Power-Pages-Startseite öffnet."
  - question: "Welche Einschränkungen und Vorteile haben Code-Sites in Power Pages?"
    answer: "Bei einer Single-Page-App lassen sich keine Seiten hinzufügen oder bearbeiten, und die Standard-Designvorlagen stehen nicht zur Verfügung. Dafür kann man Authentifizierung und Tabellenberechtigungen der Plattform einrichten."
---

## TL;DR

Die Power-Pages-Vorschau unterstützt Single-Page-Apps mit React, Angular und Vue, die über die PAC CLI hochgeladen werden. Das Tutorial verwendet eine Dataverse-Umgebung ausserhalb der Produktion, lädt kompilierten Code hoch, reaktiviert die inaktive Site und weist darauf hin, dass Authentifizierung und Tabellenberechtigungen verfügbar bleiben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Erstellt und testet die SPA mit der Power-Platform-Tools-Erweiterung und ladet anschliessend den kompilierten Code per PAC CLI hoch; die Vorschau unterstützt React, Angular und Vue.
- Admins/CoE: Verlangt die Bereitstellung in einer Nicht-Produktionsumgebung und prüft die hochgeladene Site vor der Reaktivierung; das Tutorial warnt ausdrücklich vor einer Verbindung mit der Produktion.
- Security/Compliance: Richtet Authentifizierung und Tabellenberechtigungen für die SPA ein, weil eigener Code die Power-Pages-Sicherheitskontrollen nicht ersetzt.
