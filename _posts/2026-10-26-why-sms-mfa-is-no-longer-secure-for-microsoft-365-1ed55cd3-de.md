---
title: Warum SMS-MFA für Microsoft 365 nicht mehr sicher ist
description: SMS-MFA ist durch SIM-Swapping und gezieltes Phishing gefährdet. Bessere
  Optionen sind Authenticator mit Zahlvergleich, Passkeys und Sicherheitsschlüssel.
date: '2026-10-26T16:39:00Z'
author: governance_editorial
lang: de
toc: false
tags:
- security
content_type: curated_summary
curation_id: 1ed55cd3fd10a3d4fd2aa6bb
image:
  path: "/assets/img/curated/1ed55cd3fd10a3d4fd2aa6bb.png"
  alt: 'Governance-Karte: SMS MFA leaves sign-ins exposed to SIM swapping and targeted
    phishing. Move to phishing-resistant methods.'
permalink: "/de/posts/why-sms-mfa-is-no-longer-secure-for-microsoft-365-1ed55cd3/"
translation_url: "/en/posts/why-sms-mfa-is-no-longer-secure-for-microsoft-365-1ed55cd3/"
source_url: https://www.m365.fm/blog/sms-text-message-mfa-security-risks-microsoft-365/
source_site_url: https://www.m365.fm/
source_title: Why SMS Text Message MFA is No Longer Secure for Microsoft 365
source_name: M365 FM Podcast
source_language: en
source_language_name: English
source_published_at: '2026-10-26'
source_type: article
submitted_by:
  publish_credit: true
  name: Mirko Peters
  linkedin: https://www.linkedin.com/in/m365showpodcast/
faq:
- question: Wie gefährdet SIM-Swapping die SMS-MFA für Microsoft 365?
  answer: Angreifer können einen Mobilfunkanbieter zur Übertragung der Rufnummer auf
    ihre SIM bewegen und dadurch Microsoft-365-Codes erhalten.
- question: Können Administratoren SMS- und Sprachanmeldung in Entra ID deaktivieren?
  answer: Ja, Richtlinien für Authentifizierungsmethoden in Entra ID können SMS und
    Sprachanrufe einschränken oder deaktivieren und sicherere Methoden erzwingen.
- question: Wie senkt der Zahlvergleich in Microsoft Authenticator das Phishing-Risiko?
  answer: Beim Zahlvergleich geben Nutzer die Zahl vom Anmeldebildschirm in der App
    ein. Dadurch werden blinde Bestätigungen bei MFA-Angriffen erschwert.
---

## TL;DR

SMS-MFA nutzt das öffentliche Telefonnetz und setzt Microsoft-365-Anmeldungen SIM-Swapping sowie gezieltem Phishing aus. Empfohlen werden Microsoft Authenticator mit Zahlvergleich, Passkeys oder FIDO2-Sicherheitsschlüssel. Während der Umstellung sollten zwei gültige Prüfmethoden und getestete Wiederherstellungswege bestehen bleiben.

{% include curated-attribution.html %}

## Bedeutung für Governance

- Admins/CoE: Globale Administratoren, Finanzpersonal und Nutzer mit Zugriff auf kritische Portale zuerst umstellen, weil kompromittierte Konten dort grössere Folgen haben.
- Security/Compliance: SMS und Sprachanrufe über Richtlinien für Authentifizierungsmethoden in Entra ID einschränken, weil eingegebene Codes über gefälschte Anmeldeseiten abgefangen werden können.
- Leadership/Business: Den Wechsel schrittweise mit zwei Prüfmethoden und getesteten Wiederherstellungswegen planen, weil eine abrupte Durchsetzung Kontosperren und Helpdesk-Aufwand verursachen kann.
