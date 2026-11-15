---
title: "Drei Self-Service-Kontrollen, die die meisten Tenants nie aktivieren"
description: "Impulskäufe von Lizenzen pro Produkt blockieren, eine Problem-App unter Quarantäne stellen ohne sie zu löschen, und neue Maker mit den eigenen Regeln statt Microsofts Standardhilfe begrüssen."
date: "2026-09-24T08:15:01Z"
author: marcel_lehmann
lang: de
toc: true
tags:
  - governance
  - environments
content_type: original_article
image:
  path: "https://marcelehmann.github.io/Copilot_LinkedIn/img/govd-52.png"
  alt: "Governance-Karte: Der Impulskauf: MSCommerce PowerShell, eine Richtlinie, erledigt."
permalink: "/de/posts/gov-self-service-governance-controls/"
translation_url: "/en/posts/gov-self-service-governance-controls/"
faq:
  - question: "Wie blockiere ich Self-Service-Käufe von Microsoft-Produkten?"
    answer: "Es gibt keinen einzelnen Tenant-weiten Schalter. Du schaltest ihn pro Produkt mit dem PowerShell-Modul MSCommerce und Update-MSCommerceProductPolicy ab, was Käufe und Testversionen blockiert."
  - question: "Was passiert mit einem Self-Service-Abonnement, wenn der Käufer das Unternehmen verlässt?"
    answer: "Es kündigt sich nicht von selbst. Das Abonnement läuft weiter, bis es jemand aktiv kündigt oder ein Admin die Kündigung über den Support anstösst."
  - question: "Was bewirkt die Quarantäne einer Power-Apps-App?"
    answer: "Die Quarantäne macht die App für Endnutzer sofort unzugänglich, lässt sie aber für den Maker zum Weiterbearbeiten und für Admins zur Prüfung intakt."
---

## TL;DR

Drei Kontrollen existieren bereits heute, kosten nichts extra und bleiben in den meisten Tenants ungenutzt: Self-Service-Lizenzkäufe pro Produkt per PowerShell blockieren, eine bestimmte Problem-App unter Quarantäne stellen, ohne sie zu löschen oder für Maker zu zerstören, und Power Apps' generische Ersteinrichtungshilfe durch die eigenen Regeln ersetzen, sobald sich ein Maker anmeldet. Keine davon braucht Managed-Environments-Lizenzrechnung oder ein grosses Rollout. Es sind Einstellungen und Cmdlets, die bereits jetzt existieren.

## Self-Service-Käufe: standardmässig an, pro Produkt abschaltbar

Neue Microsoft-365- und Power-Platform-Produkte werden mit **standardmässig aktiviertem** Self-Service-Kauf ausgeliefert. Jeder im Tenant kann ein Abonnement per Kreditkarte kaufen, ganz ohne Admin, sobald ein Upgrade-Hinweis auftaucht. Es gibt keinen einzelnen Tenant-weiten Schalter dafür; es wird pro Produkt über das PowerShell-Modul `MSCommerce` gesteuert.

```powershell
# Anzeigen, welche Produkte aktuell Self-Service-Kauf erlauben
Get-MSCommerceProductPolicies -PolicyId AllowSelfServicePurchase

# Für ein bestimmtes Produkt deaktivieren
Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId <ProductId> -Enabled $False
```

Zwei Dinge sollte man wissen, bevor man das tenantweit durchzieht: Das Deaktivieren der Richtlinie blockiert sowohl Käufe als auch Testversionen für dieses Produkt, und das Abschalten des Hinweises entfernt nicht die "Premium holen"-Anstösse in der App, die erscheinen weiterhin, können nur keine Testversion mehr starten. Und verlässt ein Self-Service-Käufer irgendwann das Unternehmen, kündigt sich das Abonnement nicht von selbst; es läuft weiter, bis es jemand aktiv kündigt oder ein Admin das über den Support anstösst. Bestehende Self-Service-Käufe zu prüfen (Microsoft-365-Admin-Center → **Abrechnung → Ihre Produkte**) lohnt sich, bevor man anfängt, neue zu blockieren.

## Quarantäne: eine App herausnehmen, ohne etwas zu löschen

Eine Problem-App zu löschen ist endgültig und vernichtet die Arbeit des Makers. Quarantäne ist die Mittelvariante: Sie macht die App für Endnutzer sofort unzugänglich, lässt sie aber für den Maker zum Weiterbearbeiten und für Admins zur weiteren Prüfung vollständig intakt.

```powershell
# Unter Quarantäne stellen
Set-AppAsQuarantined -EnvironmentName <EnvironmentName> -AppName <AppName>

# Wieder aufheben
Set-AppAsUnquarantined -EnvironmentName <EnvironmentName> -AppName <AppName>

# Aktuellen Zustand prüfen
Get-AppQuarantineState -EnvironmentName <EnvironmentName> -AppName <AppName>
```

Die Wirkung ist präzise abgegrenzt: Admins sehen die App unabhängig vom Zustand weiterhin im Admin Center und in PowerShell, Maker können sie weiterhin in Power Apps Studio öffnen und bearbeiten, und nur Endnutzer, die sie starten wollen, werden blockiert, mit einer Ausnahme: Wer die App bereits geöffnet hatte, kann sie noch ein paar Sekunden weiternutzen, bevor die Quarantäne greift. Quarantäne deckt aktuell Canvas-Apps und Code-Apps ab; Model-Driven Apps werden noch nicht unterstützt.

## Maker-Willkommensinhalt: die leere Standardhilfe durch die eigenen Regeln ersetzen

Öffnet ein Maker zum ersten Mal Power Apps oder Copilot Studio in einer Managed Environment, landet er standardmässig bei Microsofts generischer Ersteinrichtungshilfe, die nichts über die eigene DLP-Richtlinie, die Namenskonvention oder die tatsächlich vorgesehene Umgebung sagt. **Maker-Willkommensinhalt** ersetzt diesen Bildschirm durch selbst geschriebenes Markdown, pro Umgebung oder pro Environment Group.

Einrichtung: **Power Platform Admin Center → Verwalten → Umgebungen** → eine Managed Environment auswählen → **Managed Environment bearbeiten** → den eigenen Text unter **Maker Welcome content** eingeben, optional eine **Learn more URL** zum internen Wiki ergänzen, und optional verlangen, dass Maker einen Nutzungsbedingungslink aktiv bestätigen müssen, bevor sie fortfahren. Diese Bestätigung wird protokolliert und ist in Microsoft Purview auditierbar.

Microsofts eigene Adoptionsempfehlung schlägt vor, je Umgebungstyp unterschiedliche Inhalte zu schreiben statt einer generischen Nachricht: in der Default-Umgebung vor Einschränkungen warnen, in Production auf die richtige Support-Anlaufstelle verweisen, und in Developer-Umgebungen den Zweck der Sandbox erklären. Ist die Umgebung Teil einer Environment Group, überschreibt deren Willkommensinhalt, was auf Umgebungsebene gesetzt wurde. Also vorher entscheiden, wo das tatsächlich gepflegt wird, statt es doppelt zu konfigurieren.

## Wen betrifft das

- Admins/CoE: keine dieser drei Massnahmen braucht ein Projekt: diese Woche das MSCommerce-Audit durchführen, Quarantäne als Reaktion auf eine gemeldete App griffbereit halten statt direkt zu löschen, und einmal echten Willkommensinhalt schreiben, statt jeden neuen Maker bei Microsofts leerem Standard starten zu lassen.
- Security/Compliance: Self-Service-Käufe schaffen lizenzierte Produkte und Datenspuren, die Admins nie genehmigt haben: prüfen, was bereits gekauft wurde, bevor entschieden wird, welche Produkte gesperrt werden, denn das Blockieren der Richtlinie für die Zukunft betrifft nicht, was bereits aktiv ist.
- Maker: eine App unter Quarantäne ist keine unsichtbare Strafe. Sie bleibt in Studio voll bearbeitbar; das Einzige, was sich ändert, ist, dass Endnutzer sie nicht starten können, bis die Quarantäne aufgehoben wird.
