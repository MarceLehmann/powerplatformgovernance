---
title: Verwaiste Customer-Profile-Lookups in Dataverse verhindern
description: Integrationen von Customer Insights Data und Dataverse können ungültige
  Customer-Profile-Lookups in Contact-, Opportunity-, Lead- oder Account-Datensätzen
  hinterlassen.
date: '2026-09-24T02:44:41Z'
author: governance_editorial
lang: de
toc: false
tags:
- dataverse
- power-automate
content_type: curated_summary
curation_id: 236c489949220f866ac8bcb1
permalink: "/de/posts/preventing-orphan-customer-profile-lookups-in-dataverse-236c4899/"
translation_url: "/en/posts/preventing-orphan-customer-profile-lookups-in-dataverse-236c4899/"
source_url: https://powerplatform.se/orphan-customer-profile-lookups/
source_site_url: https://powerplatform.se/
source_title: Orphan Customer Profile lookups
source_name: Powerplatform.se
source_language: en
source_language_name: English
source_published_at: '2025-06-10'
faq:
  - question: "Was sind verwaiste Kundenprofil-Verknüpfungen in Dataverse?"
    answer: "Es sind Nachschlagefelder, die auf ein Kundenprofil zeigen, das nicht mehr existiert. Sie entstehen, wenn Customer Insights Data mit Dataverse zusammenarbeitet."
  - question: "Warum entstehen solche verwaisten Verknüpfungen?"
    answer: "Auslöser ist oft der Versuch, Lizenzkosten zu senken, denn je 100 000 vereinheitlichte Profile fallen in Customer Insights Data erhebliche monatliche Kosten an."
  - question: "Wie lässt sich das Problem aus Sicht des Autors beheben?"
    answer: "Er nennt zwei Wege: einen Power-Automate-Flow, der prüft, ob die Kundenprofil-ID noch gültig ist, oder eine umgebaute Integration, die nur geänderte Felder schreibt."
---
## TL;DR

Customer Insights Data kann einen ungültigen Customer-Profile-Lookup in einem Dataverse-Datensatz hinterlassen, wenn die Filterung ein zuvor synchronisiertes einheitliches Profil entfernt. Empfohlen wird ein Power-Automate-Flow zur Prüfung der Lookup-Ziele. Integrationen sollten nur geänderte Felder schreiben, damit verwaiste Verweise keine Speichervorgänge fehlschlagen lassen.

{% include curated-attribution.html %}

## Bedeutung für Governance

Admins/CoE sollten COLA-Datensätze mit gesetztem Customer-Profile-Lookup prüfen und Verweise ohne vorhandenes Ziel mit einem Power-Automate-Flow entfernen oder korrigieren. Admins/CoE sollten Integrationen auf das Schreiben tatsächlich geänderter Felder begrenzen, weil umfassende Lese-und-Schreibvorgänge bei ungültigen Lookups fehlschlagen können. Leadership/Business sollte die Filterung von Kunden gegen die gewünschte Profilabdeckung abwägen, da laut Quelle je 100.000 einheitliche Profile erhebliche monatliche Lizenzkosten entstehen. Die beschriebene Filterfunktion war im Juni 2025 als bevorstehend angekündigt und sollte auf ihre aktuelle Verfügbarkeit geprüft werden.
