---
title: Besitz einer Power App übertragen
description: 'Zwei Wege, den Besitzer einer Power App zu übertragen: die CoE-Starter-Kit-Admin-App
  oder Set-AdminPowerAppOwner per PowerShell für skriptbasierte Massentransfers.'
date: '2026-09-24T00:00:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- ownership
- governance
content_type: curated_summary
curation_id: 7f12168d413440b2b647752a
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-49.png
  alt: 'Governance-Karte: Die Staffelübergabe — der Besitzer geht, die Lösung bleibt.'
permalink: "/de/posts/transfer-powerapp-ownership-7f12168d/"
translation_url: "/en/posts/transfer-powerapp-ownership-7f12168d/"
source_url: https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-2-transfer-powerapp-ownership/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip 2: Transfer PowerApp Ownership"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
faq:
  - question: "Wie weise ich eine Power App neu zu, wenn ihr Ersteller gegangen ist?"
    answer: "Nutze entweder die Admin-Apps des CoE Starter Kits, die eine grafische Oberfläche für Inventar und Besitzerwechsel bieten, oder das Cmdlet Set-AdminPowerAppOwner aus dem Modul Microsoft.PowerApps.Administration.PowerShell."
  - question: "Was passiert mit dem bisherigen Besitzer, nachdem Set-AdminPowerAppOwner gelaufen ist?"
    answer: "Der bisherige Besitzer erhält die Rolle Can View, behält also Lesezugriff, verliert aber die Besitzerrechte. Daten und Verbindungen der App bleiben bei der Übertragung unverändert erhalten."
  - question: "Welche Rechte brauche ich, um den Besitzer einer fremden App zu ändern?"
    answer: "Du brauchst entsprechende Zugangsdaten als Power-Platform-Administrator, Umgebungsadministrator oder Global Admin. Normale Maker-Rechte genügen dafür nicht."
---
## TL;DR

Den Besitzer einer Power App auf zwei Wegen übertragen: über die CoE-Starter-Kit-Admin-App per UI für Massentransfers, oder je App per PowerShell mit `Set-AdminPowerAppOwner -AppName <AppId> -EnvironmentName <EnvId> -AppOwner <UserObjectId>`. In beiden Fällen braucht es Power-Platform-, Umgebungs- oder Global-Admin-Rechte — der bisherige Besitzer behält Lesezugriff, verliert aber den Besitz; Daten und Verbindungen bleiben erhalten.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: bei einem einzelnen Offboarding die CoE-Starter-Kit-App nutzen, ganz ohne PowerShell; für ein ganzes ausgeschiedenes Team stattdessen `Set-AdminPowerAppOwner` in einer Schleife einsetzen, da die Admin-App nicht für Massentransfers gebaut ist — ein zweistufiger Prozess: die App für gelegentliche Einzelfälle, das Skript griffbereit für den Tag, an dem ein ganzes Team auf einmal geht.
