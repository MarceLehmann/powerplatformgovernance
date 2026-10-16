---
title: KI-Konten über Personen statt über einzelne Anbieter steuern
description: Mehrere KI-Anbieter erzeugen getrennte Konten, IDs und Prüfprotokolle.
  Die Zuordnung zu Entra ID schafft eine einheitliche Sicht auf Zugriff, Besitz und
  Aktivitäten.
date: '2026-10-16T04:31:55Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
- ownership
content_type: curated_summary
curation_id: 1850e057abb723eba1ca8f64
image:
  path: "/assets/img/curated/1850e057abb723eba1ca8f64.png"
  alt: 'Governance-Karte: One person, many AI accounts. Governance must join them
    by identity.'
permalink: "/de/posts/govern-ai-accounts-around-people-not-individual-providers-1850e057/"
translation_url: "/en/posts/govern-ai-accounts-around-people-not-individual-providers-1850e057/"
source_url: https://rencore.com/en/blog/ai-systems-people-use-at-work/
source_site_url: https://rencore.com/
source_title: The AI systems your people use at work, and who is behind each account
source_name: Rencore
source_language: en
source_language_name: English
source_author: Tiina Rytkönen
source_published_at: '2026-09-25'
source_updated_at: '2026-09-25'
source_type: article
faq:
- question: Warum kann die Administrationskonsole eines KI-Anbieters nicht alle Unternehmenskonten
    steuern?
  answer: Sie kann andere Anbieter nicht steuern, weil jede Konsole nur eigene Benutzer,
    Projekte, IDs und Prüfereignisse sieht. Die übergreifende Identitätszuordnung
    fehlt.
- question: Wie hilft Entra ID bei der Zuordnung von Konten über mehrere KI-Anbieter?
  answer: Entra ID liefert die Organisationsidentität, mit der getrennte KI-Konten
    einer Person zugeordnet werden. Projekte, Einstellungen, Ausgaben oder Dateien
    jedes Werkzeugs enthält es nicht automatisch.
- question: Warum sollten Unternehmen KI-Prüfprotokolle vor einem Sicherheitsvorfall
    sammeln?
  answer: Die Aufbewahrung von KI-Prüfprotokollen ist begrenzt und hängt von Anbieter
    und Tarif ab. Aktivitäten ausserhalb dieses Zeitfensters stehen für die Untersuchung
    nicht mehr zur Verfügung.
---

## TL;DR

Unternehmens-KI verteilt sich auf mehrere Anbieter, wobei kein Anbieter mehr als 40 Prozent der gemeldeten Nutzung erreicht. Rencore empfiehlt, jedes KI-Konto derselben Person in Entra ID zuzuordnen und Benutzer, Projekte, Sitzungen, Einstellungen und Ausgaben gemeinsam zu verwalten. Die Aufbewahrung von Prüfprotokollen ist begrenzt.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Ordnet KI-Konten den Identitäten in Entra ID zu, damit Benutzer, Projekte, Sitzungen, Einstellungen und Ausgaben anbieterübergreifend verwaltet werden können.
- Security/Compliance: Prüft die Aufbewahrung der Prüfprotokolle jedes Anbieters und sammelt Nachweise frühzeitig, da ältere Aktivitäten verloren gehen können.
- Leadership/Business: Betrachtet mehrere KI-Anbieter als ein Gesamtportfolio statt als einzelne Werkzeuge, weil jeder Anbieter nur einen Teil der Nutzung abdeckt.
