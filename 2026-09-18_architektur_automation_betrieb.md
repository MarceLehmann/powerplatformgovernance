# Governance-Automation: Betrieb und Freigabe

Stand: 18.09.2026. Dieser Umsetzungsstand ersetzt die ältere Planung mit manueller Freigabe jedes RSS-Artikels.

## Gewünschter Ablauf

1. Power Automate läuft alle fünf Minuten, ohne parallele Flow-Ausführungen.
2. Aus `new_governancesources` werden ausschliesslich aktive, freigegebene Quellen gelesen.
3. RSS: Feed abrufen, neue Feed-IDs erkennen, neue Artikel abrufen. Artikel: die einzelne freigegebene URL einmal verarbeiten.
4. Der bestehende `AzureAIFoundry-Privat`-Connector prüft mit `ChatCompletion` / `model-router`, ob belastbare Power-Platform-Governance-Inhalte vorliegen. Allgemeine KI-News, Werbung und unzureichende Inhalte werden nicht veröffentlicht.
5. Nur relevante Inhalte werden zu kurzen eigenen DE-/EN-Zusammenfassungen mit Originalquelle, Autor soweit belegt und direktem Original-Link verarbeitet.
6. Der GitHub-Connector sendet die strukturierten Daten als `repository_dispatch` an `Publish Curated Articles`. Keine Zugangsdaten oder ungeprüften Markdown-Dateien im Payload.
7. Der GitHub-Workflow validiert alles nochmals, dedupliziert anhand der Original-URL und schreibt beide Sprachversionen gemeinsam nach `_posts/`. Danach startet er den Pages-Build.
8. Erst ein erfolgreich abgeschlossener Publisher-Lauf bestätigt die Feed-IDs bzw. setzt einen Einzelartikel auf `Published to GitHub`. Das bedeutet Git-Commit, nicht bereits bestätigtes Pages-Deployment.

Es gibt keine separate Artikeltabelle und kein Speichern fremder Artikeltexte in Dataverse. Pro Quelle werden nur Betriebsstatus und verarbeitete Feed-IDs gespeichert. Der vollständige Artikel bleibt beim ursprünglichen Herausgeber.

## Erfassung und Freigabe

Tabelle: **Governance sources** (`new_governancesource`).

| Feld | Verwendung |
|---|---|
| Name | Interne Bezeichnung der Quelle oder des Artikels |
| Article or RSS URL | Die genaue HTTPS-Artikel- oder Feed-URL, nicht eine Blog-Startseite ohne Feed |
| Source type | `RSS` oder `Article` |
| Approval | `Awaiting approval`, `Approved`, `Rejected` |
| Processing enabled | Separater Ein-/Aus-Schalter; standardmässig `No` |
| Processing status | `Ready`, `Published`, `Needs review`, `Error`, `Awaiting GitHub result` |
| Process RSS articles published from | Optionaler Startzeitpunkt beim ersten Feed-Lauf; sonst gilt die Erstellungszeit des Quelldatensatzes |
| Submitter name / Submitter LinkedIn | Optionale Angaben passend zum Websiteformular |
| Public contributor credit consent | Nur `Yes` erlaubt die Übertragung dieser Angaben zu GitHub |
| Last processing message | Lauf- oder Fehlerhinweis; keine fremden Volltexte |

**Start:** `Approval = Approved`, `Processing enabled = Yes`, `Processing status = Ready`. Zum Pausieren `Processing enabled = No` setzen. Der technische Dataverse-Status muss ebenfalls aktiv sein. Freigabe eines RSS-Feeds erlaubt die automatische Veröffentlichung seiner relevanten Kurzfassungen, nicht die Übernahme fremder Volltexte oder Bilder.

Ansichten: `Governance - Awaiting approval`, `Governance - Active RSS feeds`, `Governance - Individual articles`, `Governance - Needs attention`. Das Hauptformular enthält die fachlichen Eingabefelder und schreibgeschützte Betriebsinformationen. Die internen Feed-ID-Felder stehen bewusst nicht im Erfassungsformular.

Eine URL-Änderung an einer bereits freigegebenen Quelle nur nach Pausierung und erneuter Prüfung durchführen; für eine andere Quelle vorzugsweise einen neuen Datensatz anlegen. Bereits an GitHub übergebene Aufträge sind durch ein nachträgliches Pausieren nicht zurückgerufen; solche Läufe bei Bedarf in GitHub abbrechen.

## Formularmapping

| Websitefeld | Dataverse |
|---|---|
| `content_url` | `new_contenturl` |
| `submitter_name` | `new_submittername` |
| `submitter_linkedin` | `new_submitterlinkedin` |
| `publish_credit` exakt `yes` | `new_publishcredit = true`, sonst `false` |

Öffentliche Eingaben dürfen niemals `new_approval` oder `new_enabled` setzen. Der Webhook-Intake ist angelegt und live getestet; er weist zusätzliche Felder ab und setzt Freigabe/Aktivierung ausschliesslich serverseitig. **Direkte öffentliche Einbindung am 18.09.2026 nach Aufklärung über Spam- und Kapazitätsrisiken ausdrücklich freigegeben.** Der Einreichungsflow ist aktiv; der separate Veröffentlichungsflow bleibt ausgeschaltet.

## Website-Webhook

- Flow: `Power Platform Governance - Website submissions - Webhook`, ID `b8c08dea-43e2-43e2-90ce-e5c8e3fe3671`, in derselben Solution. Für die direkte Website-Einreichung aktiviert.
- Definition: `tools/intake.mjs`; Bereitstellung: `pwsh -File tools/deploy-intake.ps1`. Ohne `-Enable` bleibt der Flow ausgeschaltet. Keine Abhängigkeit von GitHub oder Foundry.
- Request: JSON per POST mit den vier Websitefeldern und optional leerem Honeypot-Feld `website`. Nur HTTPS, keine offensichtlichen lokalen/IP-Ziele oder URL-Zugangsdaten; LinkedIn nur persönliches Profil auf `linkedin.com` bzw. `www.linkedin.com`.
- Keine URL wird beim Intake abgerufen. Keine KI-, GitHub- oder Veröffentlichungsaktion. `Approval = Awaiting approval`, `Processing enabled = No`, `Processing status = Needs review` sind fest verdrahtet.
- Quelltyp wird zunächst als `Article` gespeichert. Bei der manuellen Prüfung auf `RSS` ändern, wenn ein Feed eingereicht wurde; danach bewusst freigeben, aktivieren und auf `Ready` setzen. Eine Blog-Startseite ohne nutzbaren Feed bleibt zur Klärung gesperrt.
- Namen und LinkedIn werden nur mit `publish_credit = yes` übertragen und gespeichert. Ohne Einwilligung werden sie bereits im Browser weggelassen.
- Bereits vorhandene URLs werden nicht geändert, auch nicht Einwilligung oder Freigabe. Fragmente werden entfernt. Die Lookup-Prüfung verhindert Wiederholungen nacheinander, ist jedoch keine atomare Eindeutigkeitsgarantie für gleichzeitige Requests. Die manuelle Prüfung muss solche Dubletten zusammenführen; keine automatische Freigabe.
- Antwort erst nach erfolgreicher Dataverse-Operation: HTTP 202 mit `accepted: true, status: awaiting_review`. Ungültige Eingaben: 400. Speicherfehler: 503. Keine persönlichen Daten, Datensatz-IDs oder Fehlerdetails in öffentlichen Antworten.
- Callback-Adresse wird als GitHub-Actions-Secret `GOVERNANCE_SUBMISSION_ENDPOINT` erst beim Pages-Build eingebunden, nicht im Git-Verlauf gespeichert. **Im ausgelieferten HTML und im Browser ist sie absichtlich öffentlich; das Build-Secret ändert daran nichts.** Geschützte Flow-Eingaben/Ausgaben reduzieren persönliche Daten im Laufprotokoll. Die gespeicherten Dataverse-Angaben bleiben dort für Berechtigte sichtbar.
- `tools/test-intake-live.ps1`: 11 echte HTTP-Prüfungen bestanden, einschliesslich gespeicherter Freigabesperre, Opt-in, Wiederholung und unzulässiger Steuerfelder. Das Skript verlangt einen ausgeschalteten Flow und darf nicht während des öffentlichen Betriebs ausgeführt werden.
- Direkter Browser-Test gegen den echten Webhook: HTTP 202, bestätigte Meldung, Eingabefeld zurückgesetzt und genau ein Dataverse-Datensatz mit `Awaiting approval` / `No` / `Needs review`, ohne Namensdaten. Eigener Testdatensatz anschliessend entfernt. Fehlerbehandlung und Desktop/Mobil wurden zusätzlich mit abgefangenen Antworten geprüft.

### Direkter Pilotbetrieb

Kein Proxy und keine Azure Function nötig oder angelegt. `_data/submission.yml` enthält `direct_webhook: true` und eine leere lokale `endpoint`-Angabe. Build-Plugin und Browser erlauben die signierte Power-Automate-Adresse nur bei dieser ausdrücklichen Freigabe und passender Callback-Struktur. Ohne Build-Secret bleibt das Formular deaktiviert.

1. CORS-Preflight der Power-Platform-Plattform ist geprüft: HTTP 204, POST und `content-type` erlaubt. CORS ist keine Authentifizierung und begrenzt keine direkten Bot-Aufrufe.
2. Kein eigener serverseitiger Rate-Limiter oder CAPTCHA vorhanden. Honeypot und Eingabeprüfung sind nur einfache Hürden. Viele gültige unterschiedliche Einreichungen können Dataverse-Speicher und Flow-/API-Kapazität beanspruchen; mögliche Kosten hängen vom Lizenzmodell ab. Diese Restrisiken wurden für den Pilotbetrieb akzeptiert.
3. Laufzahlen, Fehler und die Ansicht `Governance - Awaiting approval` manuell beobachten. Es wurde keine automatische Missbrauchsüberwachung eingerichtet.
4. Bei Missbrauch zuerst den Einreichungsflow ausschalten. Bei Schlüsselwechsel das Actions-Secret aktualisieren und den Pages-Build erneut auslösen; eine bereits veröffentlichte Adresse als dauerhaft bekannt behandeln.
5. Später bei Bedarf einen Proxy mit wirksamer Anfragebegrenzung und/oder serverseitig geprüftem Bot-Schutz ergänzen. Alle bestehenden Freigabesperren beibehalten. Für diesen Wechsel `direct_webhook` wieder deaktivieren und den öffentlichen Proxy konfigurieren.

Implementierungsgrundlage ist die Second-Brain-Notiz `Flow_per_Web_API_anlegen_clientdata.md`. Zusätzlich live verifiziert: `ParseJson` unterstützt bei `OpenApiConnection` keine `pattern`-Schemas; `ParseJson`/`Compose` benötigen hier ausschliesslich geschützte Eingaben statt separat geschützter Ausgaben; synchrone `Response`-Aktionen erlauben keine Trigger-Parallelitätsbegrenzung.

## Sicherheit und Betriebsgrenzen

- HTTPS, Port 443, keine URL-Zugangsdaten und keine offensichtlichen lokalen/IP-Ziele. RSS-Artikel müssen denselben Host wie der freigegebene Feed verwenden. Externe Feed-Hosts benötigen eine gesonderte Erweiterung der Freigaberegel.
- Diese Prüfungen ersetzen keinen DNS-/Redirect-kontrollierten Fetch-Proxy. Deshalb nur manuell geprüfte öffentliche Quellen freigeben; kein ungeprüfter öffentlicher Auto-Import. Die HTTP-/RSS-Connectors sind keine vollständige SSRF-Schutzschicht.
- Fremde Seiteninhalte sind untrusted data. Sie können keine Freigabe erteilen, Repository-Pfade bestimmen oder Tools ausführen. HTML-/Liquid-Ausgaben werden beim Rendern entschärft.
- Maximal 30 neue Kandidaten pro Quelle und 2000 gemerkte Feed-IDs; grössere Mengen gehen in `Needs review`. Beim ersten Lauf kann der Startzeitpunkt historische Artikel ausschliessen. Keine stille Begrenzung mit anschliessendem Überspringen.
- Fehler bestätigen keine Feed-IDs. Nach drei aufeinanderfolgenden Verarbeitungsfehlern erfolgt `Needs review`. Ein fehlgeschlagener GitHub-Lauf geht direkt zur Prüfung.
- GitHub-Deduplizierung liest die vorhandenen Postdateien. Keine zusätzliche Artikel-Datenbank. Gleichzeitige Git-Commits werden bei abweichenden Dateien per Rebase wiederholt; echte Konflikte verlangen Prüfung.
- GitHub-Laufstatus wird einmal je Zyklus über die öffentliche API gelesen. Die letzten 100 Publisher-Läufe werden berücksichtigt; nicht gefundene Aufträge gehen nach 24 Stunden zur Prüfung.
- Eine GitHub-Übergabe ist auf die vom Connector/API unterstützte Payload-Grösse begrenzt. Zu grosse Batches schlagen sichtbar fehl und werden nicht als veröffentlicht markiert.
- Der Standard-GitHub-Connector fordert auch Organisationsrechte an. Die persönliche Zustimmung dazu erfolgt durch Marcel, nicht automatisiert durch den Assistenten.

## Bereitgestellter Stand

- Solution, Tabelle, Fachformular, vier Ansichten und fünf Connection References sind angelegt. Die Tabelle ist einschliesslich beider interner Feed-ID-Felder veröffentlicht.
- Cloud Flow `Power Platform Governance - RSS and articles - Every 5 minutes` ist gespeichert und **ausgeschaltet**.
- Dataverse, RSS, Content Conversion und Foundry sind gebunden. Die GitHub-Referenz ist ungebunden, weil die persönliche GitHub-Anmeldung fehlt.
- Der zuletzt gespeicherte Cloud-Entwurf nutzt noch den Zeitstempel-Fortschritt. Die verbesserte Feed-ID-Erkennung liegt in `tools/automation.mjs`; Power Automate blockiert das Aktualisieren, solange GitHub ungebunden ist. Nach der Anmeldung muss der Generator-Stand erneut übertragen werden.
- Flow-Checker des gespeicherten Entwurfs: keine Fehler, Warnung wegen deaktiviertem Flow. Dies ersetzt keinen End-to-End-Test.
- GitHub-Publisher und Vorlagen sind veröffentlicht. Die Pages-CI mit Automationsprüfungen, Websiteprüfungen und Deployment ist erfolgreich durchgelaufen. Der Publisher selbst wurde noch nicht durch einen Live-Dispatch ausgelöst.
- Lokale Prüfungen: Node-Tests für Gates und Flow-Struktur, Ruby-Tests für den Publisher, Jekyll-Build und Websiteprüfungen einschliesslich beider Sprachpfade und unbekannter Quelldaten. Ein absichtlich entfernter Canonical-Link in einer temporären deutschen Testseite wurde korrekt abgewiesen.
- Noch offen: GitHub-Login, endgültige Flow-Speicherung, Testlauf von RSS und Einzelartikel einschliesslich Negativtest ohne Freigabe, anschliessend Aktivierung.

## Wiederaufnahme

1. GitHub-Verbindung in derselben Power-Automate-Umgebung mit dem Repository-Besitzer anmelden.
2. `pwsh -File tools/deploy-automation.ps1` ausführen. Das Skript nutzt die vorhandene Azure-CLI-Anmeldung, prüft die komplette paginierte Connections-Liste, bindet GitHub und speichert den aktuellen Generator-Stand. Es gibt keine Tokens aus und lässt den Flow ausgeschaltet.
3. Bei mehreren GitHub-Verbindungen die gewünschte Connection-ID mit `-GitHubConnection` angeben.
4. Nach erfolgreichen kontrollierten End-to-End-Tests im Designer aktivieren. Alternativ kann das Bereitstellungsskript nach erfolgter Prüfung mit `-Enable` aktivieren.

Quellartefakte: `tools/automation.mjs`, `tools/publish-curation.rb`, `tools/deploy-automation.ps1` und `.github/workflows/publish-curation.yml`. Keine Secrets in diesen Dateien.