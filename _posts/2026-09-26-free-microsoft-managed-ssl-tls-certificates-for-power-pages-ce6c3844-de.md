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
---

## TL;DR

Power Pages kann jetzt ein Microsoft-verwaltetes SSL/TLS-Zertifikat für eine benutzerdefinierte Domäne kostenlos ausstellen, konfigurieren und erneuern. Admins müssen CDN und Web Application Firewall deaktivieren sowie Bindung, Zertifikat und Hostname in dieser Reihenfolge entfernen. Danach wird die Domäne neu verbunden, während der CNAME beim DNS-Anbieter bleibt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: CDN und Web Application Firewall deaktivieren und danach Bindung, Zertifikat und Hostname in dieser Reihenfolge entfernen.
- Admins/CoE: Ein Wartungsfenster einplanen, weil die benutzerdefinierte Domäne während der Einrichtung mehrere Minuten nicht erreichbar sein kann.
- Security/Compliance: Hochgeladene Zertifikate weiter nutzen, wenn Richtlinien die eigene Zertifikatsverwaltung verlangen; die verwaltete Option ist eine Ergänzung.
