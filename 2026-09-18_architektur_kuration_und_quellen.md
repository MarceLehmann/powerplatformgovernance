# Kuration, Quellen und Einreichungen

Stand: 18.09.2026. Diese Ausrichtung ist für die Website und spätere Automatisierung massgeblich.

## Zweck

Power Platform Governance ist eine kuratierte Sammlung: relevante Inhalte finden, kurz zusammenfassen, ihren Governance-Bezug einordnen und zum Original weiterleiten. Kein Volltextarchiv, keine vollständigen Übersetzungen fremder Beiträge und keine nachgebauten Anleitungen.

## Mindeststandard aus Sicht des Originalautors

- **Erkennbare Urheberschaft:** Blogname, Originalautor und verlinkter Originaltitel stehen vor der Zusammenfassung. Die Beschreibung nennt die Quelle auch auf der Startseite.
- **Besuche für das Original:** Der Hauptlink lautet „Detailed article on [Blogname]“ und führt direkt zur Artikel-URL, ohne Login, Newsletter-Schranke oder Tracking-Redirect.
- **Kurzfassung statt Ersatz:** Meist etwa 40–80 Wörter TL;DR plus eine kurze eigene Einordnung. Sehr kurze Quellen noch knapper behandeln. Keine vollständigen Schrittfolgen oder FAQ nacherzählen. Die Wortzahl ist eine redaktionelle Orientierung, keine rechtliche Freigrenze.
- **Keine falsche Zuschreibung:** Originalautor, Herausgeber unserer Kurzfassung und Einreicher sind unterschiedliche Rollen. Unsere Einordnung ist als „Governance takeaway“ erkennbar.
- **Zeitlicher Kontext:** Originaldatum und belegtes Änderungsdatum getrennt vom Datum unseres Beitrags ausweisen. Produktversprechen nicht ungeprüft als aktuell darstellen.
- **Rechte respektieren:** Öffentliche URLs und RSS-Feeds sind keine pauschale Erlaubnis zur Wiederveröffentlichung. Keine fremden Bilder, Screenshots, Logos, Codeblöcke oder längeren Zitate ohne passende Rechte übernehmen. Lizenz nur nennen, wenn belegt; Bedingungen beachten.
- **Korrektur und Entfernung:** Autoren können sich an die öffentlich angegebene Adresse `info@kmupower.com` wenden. Bei Entfernung oder RSS-Abmeldung auch zukünftige Wiederaufnahme verhindern; das spätere Backend muss dies berücksichtigen.
- **Keine erfundene Partnerschaft:** Quellenaufnahme bedeutet keine Empfehlung durch den Autor. Gemeinsame Herausgeber und bezahlte Platzierungen offenlegen.

Normale redaktionelle Quellenlinks werden nicht pauschal auf `nofollow` gesetzt. Vom Einreicher gelieferte LinkedIn-Links sind als `ugc` markiert. Für bezahlte Links gelten gesonderte Kennzeichnung und Linkattribute. Quellenlink und Nutzungsrecht sind unterschiedliche Fragen.

## Einreichung mit einem Pflichtfeld

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `content_url` | Ja | Artikel-, Blog- oder RSS/Atom-URL; HTTP/HTTPS |
| `submitter_name` | Nein | Gewünschter öffentlicher Name |
| `submitter_linkedin` | Nein | Persönliche LinkedIn-Profil-URL unter `https://[www.]linkedin.com/in/` |
| `publish_credit` | Nein | HTML-Checkbox sendet `yes` nur bei ausdrücklicher Freigabe |

Kein Titel, Blogname, Themenkatalog, Sprachfeld oder E-Mail nötig. Metadaten werden aus der Quelle ermittelt und vor Veröffentlichung geprüft. Der Einreicher muss nicht der Originalautor sein.

Ohne Einwilligung erscheinen weder Name noch LinkedIn-Link. Solche Angaben dürfen dann auch nicht im öffentlichen Git-Repository, Feed, Suchindex oder JSON-LD landen. In Markdown sind bei Freigabe nur `submitted_by.name`, `submitted_by.linkedin` und der echte boolesche Wert `submitted_by.publish_credit: true` erlaubt. Keine privaten Kontakt- oder Einwilligungsprotokolle im öffentlichen Repository speichern.

Das spätere Backend muss URL-Schema, Host, Redirects und Eingaben serverseitig prüfen, private Netzwerkziele beim Abruf blockieren, personenbezogene Felder minimieren und vor HTML-Ausgabe escapen. Browser-Validierung ersetzt diese Prüfung nicht. Nicht behaupten, eine LinkedIn-Identität sei verifiziert, nur weil eine URL angegeben wurde.

## Quellenübersicht

- Die Seite `/sources/` entsteht beim Build aus `source_url` der veröffentlichten Beiträge.
- Domain-Ermittlung über den URI-Parser, nicht über Texteingaben oder Blognamen.
- Domains werden kleingeschrieben; ein führendes `www.` wird für die Gruppierung entfernt. Echte Subdomains bleiben eigenständig.
- Eine Domain erscheint einmal, mit Link zur Quellwebsite und zu den vorhandenen Zusammenfassungen.
- Unveröffentlichte Einträge, ungültige URLs und URLs mit Zugangsdaten werden nicht aufgenommen.
- Einreicher-Profile sind keine Quellen und landen deshalb nicht in dieser Domain-Liste.

## SEO und GEO

Konkreter Titel, eigenständige Beschreibung, TL;DR, thematische Tags, nachvollziehbare Quellen und eine kurze zusätzliche Einordnung machen den Eintrag verständlich. Die Seite erhält eine selbstreferenzierende Canonical-URL und korrektes `BlogPosting`-JSON-LD mit Power Platform Governance als Herausgeber der Zusammenfassung. Originaldaten bleiben sichtbare Quellenangaben, nicht das Veröffentlichungsdatum unseres neuen Textes.

Kein künstlicher Langtext für Suchmaschinen, keine erfundenen FAQs, keine Ranking- oder KI-Zitationsgarantien. Reine Duplikate und vollständige Übersetzungen sind nicht das Ziel. `source_url` ist kein externes Canonical. DE/EN wären zwei Fassungen unserer Kurzfassung; automatische Sprachvarianten und `hreflang` sind noch nicht umgesetzt.

## Veröffentlichtes Beispiel

[PowerPlatformTip 56](https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-56-empowering-tools-in-coe/) wurde als kurzer CoE-Beitrag vorbereitet: Originalautor Marcel Lehmann, Originaldatum 30.05.2023, laut Quelle aktualisiert am 09.07.2026, Originallizenz CC BY 4.0. Die gemeinsame Herausgeberschaft ist offengelegt.

Marcel hat die Veröffentlichung seiner simulierten Einreichung und der Einreicherangaben in dieser Unterhaltung ausdrücklich beauftragt. Der Beitrag nennt ihn zusätzlich unter „Suggested by“ mit seinem öffentlich verlinkten LinkedIn-Profil. Das ist keine Freigabe für die Daten anderer Einreicher.

## Betriebsstand

Der Beispielbeitrag wird direkt über GitHub veröffentlicht. Das vereinfachte Formular und die automatisierte Quellenliste sind implementiert. Ein öffentlicher Einreichungs-Endpunkt ist noch nicht angeschlossen; der Formularversand bleibt deshalb deaktiviert. Es wurde kein Einreichungs- oder Foundry-Flow ausgeführt. Die drei bisherigen Original-Beispielbeiträge bleiben erhalten; Beiträge mit `source_url` erscheinen zusätzlich in der Quellenübersicht.