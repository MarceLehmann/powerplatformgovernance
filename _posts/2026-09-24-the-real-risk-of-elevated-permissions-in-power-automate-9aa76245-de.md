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
faq:
  - question: "Warum kann jemand ohne Schreibrecht auf SharePoint über einen Flow trotzdem Listeneinträge anlegen?"
    answer: "Die Verbindung eines Flows gehört der Person, die sie eingerichtet hat, nicht der Person, die den Flow auslöst. Ein Flow mit dem Trigger PowerApps V2 führt jede Aktion mit der beim Entwurf gesetzten Verbindung aus, etwa der SharePoint-Verbindung eines Dienstkontos. Die aufrufende Person berührt die Liste nie direkt und arbeitet nur in der App."
  - question: "Was ist das Hauptrisiko dieses Musters zur Rechteerhöhung?"
    answer: "Der Flow wird zur Sicherheitsgrenze, weil er mit den Rechten des Servicekontos läuft, egal welcher Benutzer ihn auslöst. Der Endnutzer greift nie direkt auf die geschützte Ressource zu. Der Artikel rät deshalb, Eingaben im Flow zu validieren. Zudem empfiehlt er Least Privilege für das Servicekonto und Audit-Logs, besonders bei sensiblen Vorgängen."
  - question: "Wie viele Rechte soll das Dienstkonto hinter einem erhöhten Flow bekommen?"
    answer: "Nur die Berechtigungen, die der Vorgang braucht, zum Beispiel Schreibzugriff auf eine eingeschränkte SharePoint-Liste oder Aktualisierungsrechte auf einer Dataverse-Tabelle. Der Artikel rät zu Least Privilege statt breiter Admin-Rechte. Ausserdem soll man ein Servicekonto dafür anlegen und sich damit anmelden, wenn man die SharePoint-, Dataverse- oder andere Verbindung erstellt."
  - question: "Was ändert der Trigger PowerApps V2 gegenüber dem älteren Child-Flow-Ansatz?"
    answer: "Früher lief ein übergeordneter Flow als aufrufender Benutzer und startete einen Child-Flow, der die erhöhten Rechte des Servicekontos hielt. Mit dem PowerApps-V2-Trigger läuft der Flow selbst mit seinen konfigurierten Verbindungen, die Eltern-Kind-Umgehung entfällt also. Laut Artikel sind die Lösungen dadurch einfacher zu lesen und zu warten."
  - question: "Reicht der Ausführungsverlauf eines Flows als Prüfspur bei sensiblen Vorgängen?"
    answer: "Der Artikel sagt, dass man für Compliance Audit-Logs führen soll, besonders bei sensiblen Vorgängen, weil der Ausführungsverlauf allein nicht ausreichen kann. Er verweist ausserdem auf Secure Inputs und Secure Outputs (Tipp 98), die die Zugangsdaten des Servicekontos, auf denen dieses Muster beruht, im Ausführungsverlauf maskieren können."
---
## TL;DR

Läuft ein Flow mit den erweiterten Rechten eines Dienstkontos, wird die Eingabevalidierung im Flow selbst — nicht die Berechtigung des aufrufenden Nutzers — zur einzigen echten Sicherheitsprüfung; das Dienstkonto daher exakt auf das beschränken, was die Flow-Aktionen brauchen, und für sensible Vorgänge ein explizites Audit-Log ergänzen, da der Flow-Verlauf allein für Compliance-Zwecke oft nicht genügt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Maker: die einen Flow mit den erweiterten Rechten eines Dienstkontos bauen, müssen jede Eingabe im Flow selbst validieren, denn die Rechte des Aufrufers spielen ab dem Moment keine Rolle mehr, in dem der Flow übernimmt.
- Admins/CoE: das Dienstkonto exakt auf das beschränken, was die Flow-Aktionen brauchen, statt breiten Admin-Zugriff zu geben, damit aus einer Validierungslücke nicht eine Tenant-weite wird.
- Security/Compliance: für sensible Vorgänge ein explizites Audit-Log verlangen, da der Standard-Laufverlauf allein als Nachweis in einem Compliance-Review oft nicht ausreicht.
