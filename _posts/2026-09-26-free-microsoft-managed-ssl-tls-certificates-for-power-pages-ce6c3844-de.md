---
title: Kostenlose verwaltete SSL/TLS-Zertifikate für Power Pages
description: Power Pages kann kostenlose Microsoft-verwaltete Zertifikate für benutzerdefinierte
  Domänen ausstellen, konfigurieren und erneuern. DNS und Ausfallplanung bleiben beim
  Admin.
date: '2026-09-26T16:43:46Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
content_type: curated_summary
curation_id: ce6c38440f497fe733db8e14
image:
  path: "/assets/img/curated/ce6c38440f497fe733db8e14.png"
  alt: 'Governance-Karte: Microsoft-managed certificates remove renewal work. DNS
    and a planned outage still remain.'
permalink: "/de/posts/free-microsoft-managed-ssl-tls-certificates-for-power-pages-ce6c3844/"
translation_url: "/en/posts/free-microsoft-managed-ssl-tls-certificates-for-power-pages-ce6c3844/"
source_url: https://readyxrm.blog/2026/09/18/free-ssl-tls-certificates-for-power-pages/
source_site_url: https://readyxrm.blog/
source_title: Free SSL/TLS certificates for Power Pages
source_name: The ReadyXRM Blog
source_language: en
source_language_name: English
source_author: Nick Doelman
source_published_at: '2026-09-18'
source_type: article
faq:
  - question: "Was muss ich vor dem Microsoft-verwalteten Zertifikat für Power Pages ausschalten?"
    answer: "Zuerst müssen CDN und Web Application Firewall deaktiviert sein. Sind sie aktiv, wird die Option für das Microsoft-verwaltete Zertifikat nicht ausgegraut, sie erscheint gar nicht erst. Wer also vergeblich nach der Auswahl sucht, sollte genau diese beiden Funktionen prüfen. Danach folgen die Schritte zum Entfernen von Bindung, Zertifikat und Hostname."
  - question: "In welcher Reihenfolge entferne ich Bindung, Zertifikat und Hostname einer Power-Pages-Domain?"
    answer: "Zuerst trennst du die bestehende Bindung, dann löschst du das Zertifikat und zuletzt entfernst du den Hostnamen. Die Reihenfolge ist wichtig, denn ein Zertifikat zu löschen, solange noch eine Bindung darauf verweist, schlägt fehl. Erst wenn diese Altlasten weg sind, kannst du die benutzerdefinierte Domain mit dem verwalteten Zertifikat neu verbinden."
  - question: "Ist meine Power-Pages-Website beim Wechsel auf das verwaltete Zertifikat erreichbar?"
    answer: "Nein, während des Wechsels ist die Website unter der eigenen URL nicht erreichbar, bis die neue Bindung fertig ist. Microsoft weist darauf hin, dass der Abschluss mehrere Minuten dauert. Der Autor erlebte durchgehende Ausfallzeit. Plane den Wechsel bei produktiven Seiten deshalb in eine Zeit mit wenig Verkehr."
  - question: "Muss ich bei Power Pages mit verwaltetem Zertifikat weiterhin DNS selbst einrichten?"
    answer: "Ja, das DNS bleibt deine Aufgabe. Du legst bei deinem Registrar einen CNAME-Eintrag an, der den Hostnamen auf die URL der Power-Pages-Website zeigen lässt. Weil Root-Domains keinen CNAME verwenden können, brauchst du eine Subdomain wie www. Das verwaltete Zertifikat ersetzt nur die Zertifikatsverwaltung, nicht die Namensauflösung."
  - question: "Kostet das verwaltete Zertifikat für Power Pages extra, und kann ich eigene weiter nutzen?"
    answer: "Es kostet nichts zusätzlich. Microsoft stellt das Zertifikat bereit, konfiguriert es und erneuert es automatisch. Eigene Zertifikate bleiben möglich, denn das Verwalten per Hochladen ist weiterhin eine Option. Im Admin Center wählst du unter der Domain-Verbindung zwischen drei Varianten: verwaltetes Zertifikat, neues hochladen oder ein vorhandenes verwenden."
---

## TL;DR

Power Pages kann jetzt ein Microsoft-verwaltetes SSL/TLS-Zertifikat für eine benutzerdefinierte Domäne kostenlos ausstellen, konfigurieren und erneuern. Admins müssen CDN und Web Application Firewall deaktivieren sowie Bindung, Zertifikat und Hostname in dieser Reihenfolge entfernen. Danach wird die Domäne neu verbunden, während der CNAME beim DNS-Anbieter bleibt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: CDN und Web Application Firewall deaktivieren und danach Bindung, Zertifikat und Hostname in dieser Reihenfolge entfernen.
- Admins/CoE: Ein Wartungsfenster einplanen, weil die benutzerdefinierte Domäne während der Einrichtung mehrere Minuten nicht erreichbar sein kann.
- Security/Compliance: Hochgeladene Zertifikate weiter nutzen, wenn Richtlinien die eigene Zertifikatsverwaltung verlangen; die verwaltete Option ist eine Ergänzung.
