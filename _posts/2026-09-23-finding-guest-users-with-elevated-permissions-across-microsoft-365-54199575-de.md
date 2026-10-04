---
title: Gastkonten mit erweiterten Rechten in Microsoft 365 finden
description: Ein PnP-PowerShell-Skript gleicht Gastkonten gegen Entra-ID-Rollen, Teams-Besitz
  und SharePoint-Site-Admins ab und exportiert einen gemeinsamen CSV-Bericht.
date: '2026-09-23T23:44:11Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
- ownership
content_type: curated_summary
curation_id: 541995750816daffc85f530e
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-37.png
  alt: Governance-Karte zum Aufspüren von Gastkonten mit erweiterten Rechten.
permalink: "/de/posts/finding-guest-users-with-elevated-permissions-across-microsoft-365-54199575/"
translation_url: "/en/posts/finding-guest-users-with-elevated-permissions-across-microsoft-365-54199575/"
source_url: https://pnp.github.io/blog/post/finding-guest-users-with-elevated-permissions-across-microsoft-365/
source_site_url: https://pnp.github.io/
source_title: Finding Guest Users with Elevated Permissions Across Microsoft 365
source_name: Microsoft 365 & Power Platform Community Blog
source_author: Josiah Opiyo
source_language: en
source_language_name: English
source_published_at: '2026-08-03'
faq:
  - question: "Welche Berechtigungen prüft das Skript für Gastbenutzer in Microsoft 365?"
    answer: "Es prüft drei Bereiche: Verzeichnisrollen in Microsoft Entra ID, Besitzerschaft in Teams und Administratoren von SharePoint-Websitesammlungen."
  - question: "Was steht im CSV-Bericht des Skripts für Gastberechtigungen?"
    answer: "Das Skript exportiert eine CSV-Datei mit fünf Spalten: Anzeigename, Benutzerprinzipalname, Berechtigungsart, zugewiesene Rolle und Ressource. Die Ergebnisse aus Entra ID, Teams und SharePoint stehen in einem einzigen Bericht."
  - question: "Warum behalten Gäste erhöhte Rechte, nachdem ein Projekt beendet ist?"
    answer: "Die Berechtigungen sind auf verschiedene Verwaltungsoberflächen von Microsoft 365 verteilt, deshalb sieht sie niemand an einer Stelle. Der Autor schildert einen Gast-Berater, der Monate nach Projektende noch Besitzer eines Teams war."
---
## TL;DR

Ein PnP-PowerShell-Skript gleicht Gastkonten gegen Entra-ID-Verzeichnisrollen, Teams-Besitzrechte und SharePoint-Websitesammlungsadministratoren ab und exportiert eine CSV mit Anzeigename, UPN, Berechtigungstyp und Ressource — es schliesst damit eine Lücke, für die es keinen eingebauten Sammelbericht gibt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Security/Compliance: dieses Skript als wiederkehrenden Review einplanen, nicht als einmaligen Check — Gastkonten behalten nach Projektende oft Admin-Rechte, einfach weil niemand drei einzelne Portale erneut von Hand prüft.
- Admins/CoE: bekommen damit ein konkretes Werkzeug — Entra-ID-Rollen, Teams-Besitzrechte und SharePoint-Site-Admin-Listen in einem Durchgang statt manuell zusammengesucht.
- Leadership/Business: ein veraltetes Gastkonto mit erweiterten Rechten als akutes Risiko für externen Zugriff behandeln, nicht als Aufräumarbeit, die bis zum nächsten Audit warten kann.
