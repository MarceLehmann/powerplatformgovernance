---
title: Das eigentliche Risiko erweiterter Rechte in Power Automate
description: Läuft ein Flow mit den erweiterten Rechten eines Dienstkontos, wird seine
  eigene Eingabevalidierung zur letzten Verteidigungslinie — nicht die Berechtigung
  des Aufrufers.
date: '2026-09-24T00:03:01Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- governance
content_type: curated_summary
curation_id: 9aa7624572134149c04dce7c
image:
  path: https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-08.png
  alt: Governance-Karte zum Risiko erweiterter Dienstkonto-Rechte.
permalink: "/de/posts/the-real-risk-of-elevated-permissions-in-power-automate-9aa76245/"
translation_url: "/en/posts/the-real-risk-of-elevated-permissions-in-power-automate-9aa76245/"
source_url: https://www.powerplatformtip.com/article/powerplatform/2022/05/18/power-apps-elevated-permissions-power-automate/
source_site_url: https://www.powerplatformtip.com/
source_title: "#PowerPlatformTip: Elevated Permissions in Power Apps and Power Automate"
source_name: PowerPlatformTip
source_author: Marcel Lehmann
source_author_url: https://www.powerplatformtip.com/about/
source_language: en
source_language_name: English
source_published_at: '2022-05-18'
publisher_disclosure: Beide Publikationen werden von Marcel Lehmann herausgegeben.
---
## TL;DR

Läuft ein Flow mit den erweiterten Rechten eines Dienstkontos, wird die Eingabevalidierung im Flow selbst — nicht die Berechtigung des aufrufenden Nutzers — zur einzigen echten Sicherheitsprüfung; das Dienstkonto daher exakt auf das beschränken, was die Flow-Aktionen brauchen, und für sensible Vorgänge ein explizites Audit-Log ergänzen, da der Flow-Verlauf allein für Compliance-Zwecke oft nicht genügt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: die einen Flow mit den erweiterten Rechten eines Dienstkontos bauen, müssen jede Eingabe im Flow selbst validieren, denn die Rechte des Aufrufers spielen ab dem Moment keine Rolle mehr, in dem der Flow übernimmt.
- Admins/CoE: das Dienstkonto exakt auf das beschränken, was die Flow-Aktionen brauchen, statt breiten Admin-Zugriff zu geben, damit aus einer Validierungslücke nicht eine Tenant-weite wird.
- Security/Compliance: für sensible Vorgänge ein explizites Audit-Log verlangen, da der Standard-Laufverlauf allein als Nachweis in einem Compliance-Review oft nicht ausreicht.
