---
title: "Zwei Namen pro Lösung, immer: Besitz, der Offboarding übersteht"
description: "Warum Microsoft eigene PowerShell-Cmdlets speziell für verwaiste Flows pflegt, und warum Offboarding-Automatisierung nur funktioniert, wenn sie vom selben Ereignis ausgelöst wird, das HR ohnehin schon erzeugt."
date: "2026-09-24T08:45:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - ownership
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-04.png"
  alt: "Governance-Karte: Die Geister-App: zwei Namen pro Lösung, immer."
permalink: "/de/posts/gov-ownership-offboarding/"
translation_url: "/en/posts/gov-ownership-offboarding/"
faq:
  - question: "Wie finde ich alle Flows, die ein ausgeschiedener Mitarbeiter erstellt hat?"
    answer: "Nutze das PowerShell-Cmdlet Get-AdminFlow mit dem Parameter CreatedBy und der Objekt-ID der Person, um alle ihre Flows auf einmal zu finden."
  - question: "Warum scheitert ein verwaister Flow?"
    answer: "Ein verwaister Flow ist einer, dessen Besitzerkonto nicht mehr existiert oder ungültig ist, und er scheitert, weil seine Verbindungen an dieses Konto gebunden waren."
  - question: "Warum soll ich bei jeder Lösung einen Stellvertreter erfassen?"
    answer: "Jedes Neuzuweisungs-Cmdlet braucht einen Menschen, der entscheidet, wer der neue Besitzer wird, und genau das beantwortet ein benannter Stellvertreter bereits."
---

## TL;DR

Microsoft pflegt einen eigenen Support-Artikel speziell dafür, Flows zu reparieren, die ihren Besitzer verloren haben, ein Beweis, dass "kein gültiger Besitzer" ein routinemässiger, erwarteter Ausfall ist, kein Randfall. Die Lösung ist nicht besseres Aufräumen im Nachhinein; es ist, bei der Erstellung einen Besitzer *und* einen Stellvertreter zu erfassen, sodass die Neuzuweisung ein Nachschlagen statt eine Recherche ist, und diese Neuzuweisung von demselben Signal auszulösen, das HR beim Austritt einer Person ohnehin schon erzeugt, statt von einem separaten Governance-Prozess, der sich jeden Austritt selbst merken muss.

## "Kein gültiger Besitzer" ist häufig genug für eigenes Tooling

Ein verwaister Flow (dessen Besitzerkonto nicht mehr existiert oder ungültig ist) scheitert konkret, weil seine Verbindungen an dieses Konto gebunden waren. Microsofts Lösung dafür ist kein einmaliges Skript; es ist ein gepflegter Support-Artikel mit sowohl einem UI-Weg (Flow öffnen, Teilen auswählen, neuen Besitzer hinzufügen) als auch eigenen PowerShell-Cmdlets: `Get-AdminFlowOwnerRole`, um den aktuellen Besitz zu sehen, `Set-AdminFlowOwnerRole`, um einen neuen zuzuweisen, und `Get-AdminFlow -CreatedBy <user-object-id>`, um alle Flows einer bestimmten ausgeschiedenen Person auf einmal zu finden. Nichts davon existiert als seltener Nachgedanke. Es existiert, weil das oft genug passiert, um wiederholbares Tooling zu brauchen, keine einmalige Handreparatur.

## Die eigentliche Lösung: einen Stellvertreter benennen, bevor er gebraucht wird

Jedes dieser Cmdlets braucht trotzdem einen Menschen, der entscheidet, *wer* der neue Besitzer sein soll, und genau diese Entscheidung beantwortet ein benannter Stellvertreter bereits. Zwei Namen bei der Erstellung einer Lösung zu erfassen (Besitzer und Stellvertreter) macht aus "wem weisen wir das zu" eine Nachschlagefrage statt eine nachträgliche Recherche. Das kostet nichts in der Einrichtung und verkürzt direkt genau den Behebungsprozess, für den Microsoft eigenes Tooling bauen musste.

Derselbe Neuzuweisungsbedarf zeigt sich über Flows hinaus. Dataverses **Zeilen neu zuweisen** überträgt mit einer Aktion alles, was eine ausgeschiedene Person besass, an jemand anderen. Wissenswert, bevor man sich darauf verlässt: Es deaktiviert jeden aktivierten Prozess (Geschäftsregeln, Workflows), der an die neu zugewiesenen Zeilen gebunden ist, und der neue Besitzer muss sie reaktivieren. Ein benannter Stellvertreter, der die Ressource bereits kennt, bemerkt und behebt das deutlich zuverlässiger als jemand, der kalt darauf stösst.

## Die Neuzuweisung vom Austrittsereignis selbst auslösen

Die Lücke in den meisten Organisationen ist nicht ein fehlender Neuzuweisungsmechanismus. Es ist, dass nichts diesen Mechanismus anstösst. Hängt die Neuzuweisung des Besitzes einer Lösung beim Offboarding davon ab, dass sich jemand erinnert, eine Tabelle zu prüfen oder ein Ticket zu erstellen, hängt sie von einem Schritt ausserhalb des eigentlichen Austrittsprozesses ab, und Schritte ausserhalb des Prozesses sind genau die, die unter Druck übersprungen werden. Die strukturelle Lösung: den Neuzuweisungs-Flow vom selben Signal auslösen, das ohnehin schon existiert (ein deaktiviertes Entra-ID-Konto), es gegen die Felder Besitzer und Stellvertreter abgleichen und automatisch neu zuweisen, statt darauf zu warten, dass es jemand bemerkt.

## Wen betrifft das

- Admins/CoE: bei der Solution-Erstellung sowohl einen Besitzer als auch einen benannten Stellvertreter verlangen, nicht als optionales Feld, das später ausgefüllt wird. Es ist das eine Metadatenfeld, das Microsofts eigene Behebung verwaister Flows zu etwas macht, das selten laufen muss.
- Maker: einen Stellvertreter benennen, der die Ressource tatsächlich übernehmen könnte, nicht wer gerade frei war, als das Formular fragte. Microsoft liefert eigenes Bulk-PowerShell-Tooling genau deshalb, weil "kein gültiger Besitzer" häufig genug ist, um es zu brauchen.
- Leadership/Business: die Neuzuweisung des Besitzes an dasselbe Konto-deaktiviert-Ereignis binden, das der Offboarding-Prozess von HR ohnehin schon auslöst, statt an einen separaten Governance-Review, der sich jeden Austritt eigenständig merken muss.

{% include offers-hint.html topic="owner" %}
