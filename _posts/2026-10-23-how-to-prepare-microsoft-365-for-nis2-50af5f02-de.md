---
title: Microsoft 365 auf NIS2 vorbereiten
description: NIS2-Pflichten Microsoft 365-Kontrollen zuordnen, Zugriffsbaselines setzen,
  Verantwortliche und Prüfungen pflegen und Auditnachweise bündeln.
date: '2026-10-23T16:43:38Z'
author: governance_editorial
lang: de
toc: false
tags:
- compliance
- security
- governance
- ownership
content_type: curated_summary
curation_id: 50af5f02348052659d00295a
image:
  path: "/assets/img/curated/50af5f02348052659d00295a.png"
  alt: 'Governance-Karte: NIS2 requires proof that controls work over time. Ownership
    and review records make that proof auditable.'
permalink: "/de/posts/how-to-prepare-microsoft-365-for-nis2-50af5f02/"
translation_url: "/en/posts/how-to-prepare-microsoft-365-for-nis2-50af5f02/"
source_url: https://rencore.com/en/blog/prepare-for-nis2-m365/
source_site_url: https://rencore.com/
source_title: How to prepare Microsoft 365 for NIS2
source_name: Rencore
source_language: en
source_language_name: English
source_author: Rencore
source_published_at: '2026-07-04'
source_updated_at: '2026-10-08'
source_type: article
faq:
- question: Wie werden Microsoft-365-Kontrollen Artikel 21 der NIS2 zugeordnet?
  answer: Ordnet Artikel-21-Pflichten konkreten Kontrollen zu, etwa Administrator-MFA,
    Gastzugriff, Mailweiterleitungen, Entra-ID-App-Berechtigungen und Workspace-Verantwortung.
    Jede Kontrolle erhält eine verantwortliche Person.
- question: Was sollte eine Microsoft-365-Zugriffsbaseline für NIS2 enthalten?
  answer: Die Baseline definiert den korrekten Zustand, darunter MFA für Administratoren,
    keine externen Mailweiterleitungen und mindestens zwei Verantwortliche pro Team.
    Richtlinien markieren Abweichungen.
- question: Welche NIS2-Nachweise liefert das Microsoft-Purview-Auditprotokoll?
  answer: Microsoft Purview liefert das Auditprotokoll für Änderungen und Vorfälle
    im Tenant. Es sollte lange genug aufbewahrt werden, um Meldepflichten abzudecken,
    und relevante Risiken müssen überwacht werden.
---

## TL;DR

NIS2-Bereitschaft in Microsoft 365 erfordert benannte Verantwortliche, Baselines für Zugriff und Konfiguration, geplante Prüfungen, Microsoft-Purview-Auditnachweise und Berichte, die jede Pflicht mit einem Beleg verbinden. Dazu gehören MFA für Administratoren, Gastzugriff, Mailweiterleitungen, Entra-ID-App-Berechtigungen und Workspace-Verantwortung. Erhebliche Vorfälle müssen innerhalb von 24 Stunden vorangekündigt und innerhalb von 72 Stunden gemeldet werden.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Makers: Prüft, ob Apps, Agents und Workspaces verantwortliche Personen haben, weil diese Nachweise Zugriffsentscheidungen und Audits unterstützen.
- Admins/CoE: Definiert Richtlinienbaselines für MFA, externen Zugriff, Mailweiterleitungen und Verantwortlichkeiten, um Abweichungen durch geplante Prüfungen und Berichte zu erkennen.
- Security/Compliance: Bewahrt Microsoft-Purview-Auditprotokolle für Meldepflichten auf und überwacht riskante Anmeldungen, externe Weiterleitungen und privilegierte App-Berechtigungen.
