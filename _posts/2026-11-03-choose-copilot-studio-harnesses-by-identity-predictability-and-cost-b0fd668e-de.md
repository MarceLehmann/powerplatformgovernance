---
title: Copilot Studio Harness nach Identität, Planbarkeit und Kosten wählen
description: Nutzen Sie Organisationsidentitäten, DLP und minimale Berechtigungen
  für autonome Agents. Der Standard Harness eignet sich für feste Abläufe, der Microsoft
  Copilot Harness für Ausnahmen.
date: '2026-11-03T04:43:45Z'
author: governance_editorial
lang: de
toc: false
tags:
- governance
- security
- dlp
- alm
- copilot-studio
content_type: curated_summary
curation_id: b0fd668e07c2fb65146d602a
image:
  path: "/assets/img/curated/b0fd668e07c2fb65146d602a.png"
  alt: 'Governance-Karte: Permissions are the wall. Instructions are only requests.'
permalink: "/de/posts/choose-copilot-studio-harnesses-by-identity-predictability-and-cost-b0fd668e/"
translation_url: "/en/posts/choose-copilot-studio-harnesses-by-identity-predictability-and-cost-b0fd668e/"
source_url: https://www.karlex.fi/five-microsoft-agent-tools-one-licence-review-on-whose-behalf-and-how-predictably/
source_site_url: https://www.karlex.fi/
source_title: 'Five Microsoft agent tools, one licence review: on whose behalf, and
  how predictably?'
source_name: Karlex
source_language: en
source_language_name: English
source_author: Karl-Johan Spiik
source_published_at: '2026-11-03'
source_type: article
faq:
- question: Worin unterscheiden sich der Standard Harness und der Microsoft Copilot
    Harness in Copilot Studio?
  answer: Der Standard Harness folgt vom Maker definierten Abläufen, Tools und Variablen.
    Der Microsoft Copilot Harness plant Schritte selbst, behält Kontext und behandelt
    Fehler.
- question: Reicht ein Copilot Studio Hook als Schutz vor Lizenzänderungen für geschützte
    Gruppen?
  answer: Nein, ein Hook reicht nicht als einziger Schutz, weil eine fehlgeschlagene
    Ausführung die Aktion durchlässt. Das Agent-Konto darf diese Lizenzen nicht ändern
    können.
- question: Wann verbraucht ein wiederkehrender Copilot Studio Lizenzprüfungs-Flow
    Copilot Credits?
  answer: Ein wiederkehrender oder autonomer Flow verbraucht Credits zum Standardtarif.
    Der kostenlose Fall verlangt eine Interaktion eines lizenzierten Nutzers über
    den Agent-Trigger.
---

## TL;DR

Copilot Chat, Agent Builder und Cowork laufen unter der Identität einer einzelnen Person. Copilot Studio Harnesses erstellen Organisations-Agents mit eigener Veröffentlichung, DLP und ALM. Nutzen Sie den Standard Harness für deterministische Abläufe und den Microsoft Copilot Harness für begründungsintensive Ausnahmen. Autonome und wiederkehrende Flows verbrauchen Copilot Credits.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Wählen Sie den Standard Harness, wenn gleiche Eingaben gleiche Ergebnisse liefern müssen, und nutzen Sie den Microsoft Copilot Harness für Ausnahmen mit Begründung.
- Admins/CoE: Erstellen Sie organisationsweite Lizenzprüfungen mit Dataverse, DLP und ALM, statt sich auf den Cowork einer einzelnen Person zu verlassen.
- Security/Compliance: Sperren Sie Änderungen an geschützten Gruppen über die Berechtigungen des Agent-Kontos, denn Anweisungen und fehlerhafte Hooks reichen nicht als Schutz.
- Leadership/Business: Vergleichen Sie die Kosten für Copilot Credits mit den eingesparten Lizenzkosten, bevor Sie Lizenzprüfungen automatisieren.
