---
title: Managed Environment mit PowerShell zurücksetzen
description: Eine PowerShell-Methode setzt die Governance-Konfiguration auf Basic
  und entfernt dadurch effektiv den Managed-Status.
date: '2026-09-26T16:34:03Z'
author: governance_editorial
lang: de
toc: false
tags:
- environments
- governance
- security
content_type: curated_summary
curation_id: 307adb54b2cd3621294616e6
image:
  path: "/assets/img/curated/307adb54b2cd3621294616e6.png"
  alt: 'Governance-Karte: Managed status can be removed with PowerShell. Use the environment
    ID and the right admin permissions.'
permalink: "/de/posts/how-to-remove-managed-environment-status-with-powershell-307adb54/"
translation_url: "/en/posts/how-to-remove-managed-environment-status-with-powershell-307adb54/"
source_url: https://www.michaelroth42.com/post/2025-04-30-how-to-unmanage-an-environment/
source_site_url: https://www.michaelroth42.com/
source_title: How to unmanage an environment?
source_name: MichaelRoth42 Blog
source_language: en
source_language_name: English
source_author: Michael Roth
source_published_at: '2025-04-30'
source_type: article
submitted_by:
  publish_credit: true
  name: Michael Roth
  linkedin: https://www.linkedin.com/in/michaelroth42/
faq:
  - question: "Warum möchte man den Status Managed Environment wieder entfernen?"
    answer: "Der Beitrag nennt die Lizenzfolge als Hintergrund. Managed Environments verlangen eine Premium-Lizenz für jeden Benutzer, was der Autor in vielen Organisationen für schwer durchsetzbar hält."
  - question: "Was braucht man, bevor man den Befehl ausführt?"
    answer: "Das PowerShell-Modul Microsoft.PowerApps.Administration.PowerShell muss installiert sein. Ausserdem sind Rechte als Umgebungsadministrator oder Mandantenadministrator nötig."
  - question: "Welches Cmdlet entfernt den Managed-Status und mit welchen Parametern?"
    answer: "Das Cmdlet Set-AdminPowerAppEnvironmentGovernanceConfiguration. Es braucht zwei Parameter: EnvironmentName mit der Kennung der Umgebung und UpdatedGovernanceConfiguration mit dem zuvor erstellten Objekt."
---

## TL;DR

Mit dem Modul Microsoft.PowerApps.Administration.PowerShell kann ein Administrator eine Managed Environment-Konfiguration auf Basic setzen. Dafür erstellt er ein benutzerdefiniertes Objekt, meldet sich mit Environment- oder Tenant-Adminrechten an und führt Set-AdminPowerAppEnvironmentGovernanceConfiguration mit der Environment-ID aus. Dadurch wird der Managed-Status effektiv entfernt; Premium-Lizenzanforderungen und verlorene Schutzfunktionen bleiben wichtige Abwägungen.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Das Modul Microsoft.PowerApps.Administration.PowerShell installieren und vor dem Cmdlet Environment- oder Tenant-Adminrechte sicherstellen.
- Admins/CoE: Die Environment-ID statt eines Anzeigenamens verwenden und protectionlevel auf Basic setzen, um den Managed-Status zu entfernen.
- Leadership/Business: Die Premium-Lizenzpflicht für alle Benutzer gegen Struktur, Leitplanken, Sichtbarkeit und ALM-Vorteile von Managed Environments abwägen.
