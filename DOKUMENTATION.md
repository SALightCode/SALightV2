# SALight – Dokumentation Eventanfrage & E-Mail-Versand

**Stand:** 29.10.2026  
**Projekt:** SALight Website V2  
**Status:** E-Mail-Versand an SALight erfolgreich eingerichtet und getestet.

## 1. Übersicht

Die SALight-Website besitzt ein dreistufiges Eventanfrageformular.

**Website:** https://sa-light-v2.vercel.app/eventanfragen

**Ablauf:**
1. Kunde wählt Veranstaltungsart und gewünschte Leistungen.
2. Kunde gibt Datum, Veranstaltungsort, Gästezahl und weitere Details ein.
3. Kunde hinterlegt seine Kontaktdaten und sendet die Anfrage ab.
4. Die Website übermittelt die Daten an eine serverseitige Vercel-Funktion.
5. Resend versendet die Anfrage per E-Mail an SALight.

**Aktueller Empfänger:** sawade@3phase-events.com  
**Absender:** anfragen@salight.de

Der Versand wurde erfolgreich getestet.

---

## 2. GitHub – Quellcode

**Repository:** `SALightV2`  
**Branch:** `main`

### Wichtige Dateien

| Datei | Funktion |
|---|---|
| `src/App.jsx` | Routing der Website |
| `src/pages/Eventanfragen.jsx` | Dreistufiges Anfrageformular |
| `src/styles.css` | Design und responsive Darstellung |
| `api/eventanfrage.js` | Serverseitiger E-Mail-Versand |

### Formular

Die Datei `Eventanfragen.jsx` verwaltet die Eingaben und sendet sie mit einem POST-Request an:

`/api/eventanfrage`

Die Funktion `handleSubmit` übernimmt den Versand und verarbeitet die Rückmeldung.

### API

Die Datei `api/eventanfrage.js`:

- Empfängt die Formulardaten.
- Prüft wichtige Pflichtfelder.
- Erstellt eine HTML-E-Mail mit den Veranstaltungsdetails.
- Versendet diese über die Resend-API.
- Nutzt die Kundenadresse als Antwortadresse (`reply_to`).

**Wichtig:** Der API-Key darf niemals direkt im GitHub-Code stehen.

---

## 3. Vercel – Hosting und API

**Plattform:** https://vercel.com

**Projekt:** SALight V2  
**Framework:** Vite / React

Vercel übernimmt das Hosting der Website und die Ausführung der serverseitigen API-Funktion.

### Umgebungsvariablen

Pfad:

**Vercel → Projekt → Settings → Environment Variables**

| Variable | Inhalt |
|---|---|
| `RESEND_API_KEY` | Geheimer API-Key aus Resend |
| `EVENT_NOTIFICATION_EMAIL` | sawade@3phase-events.com |

Die Variablen wurden für **Production** eingerichtet.

Nach Änderungen an Umgebungsvariablen oder am GitHub-Code ist ein neues Deployment erforderlich, damit die Änderungen wirksam werden.

### API-Endpunkt

`/api/eventanfrage`

Dieser Endpunkt verarbeitet POST-Anfragen des Formulars.

---

## 4. Resend – E-Mail-Dienst

**Plattform:** https://resend.com

Resend übernimmt den tatsächlichen E-Mail-Versand.

### Domain

**Verifizierte Domain:** `salight.de`

Die erforderlichen DKIM- und Sending-Einträge wurden erfolgreich überprüft.

### API-Key

Pfad:

**Resend → API Keys**

Der API-Key wurde für den Versand eingerichtet und bei Vercel unter `RESEND_API_KEY` gespeichert.

Bei Verlust oder Austausch des Schlüssels muss der neue Schlüssel auch in Vercel hinterlegt werden.

### E-Mail-Konfiguration

| Einstellung | Wert |
|---|---|
| Absender | SALight Eventanfragen |
| Absenderadresse | anfragen@salight.de |
| Empfänger | sawade@3phase-events.com |
| Antwortadresse | E-Mail-Adresse des Kunden |
| Betreff | Neue Eventanfrage: [Veranstaltungsart] |

Ein zusätzliches E-Mail-Postfach für `anfragen@salight.de` ist für den Versand nicht erforderlich.

### Fehleranalyse

Unter **Resend → Emails** lassen sich die versendeten Nachrichten und deren Zustellstatus überprüfen.

---

## 5. GoDaddy – DNS-Konfiguration

**Plattform:** https://godaddy.com

**Domain:** `salight.de`

Die DNS-Einträge sorgen dafür, dass Resend berechtigt ist, E-Mails im Namen der Domain zu versenden.

### Verifizierte DNS-Einträge

| Typ | Name | Wert |
|---|---|---|
| TXT | `resend._domainkey` | DKIM-Schlüssel aus Resend |
| CNAME | `rsend` | `rsend-euw1.forge.rmta.net` |
| CNAME | `send` | `send.forge.rmta.net` |

Alle drei Einträge waren bei der Einrichtung als **Verified** markiert.

Der vollständige DKIM-Wert ist in Resend beziehungsweise der DNS-Verwaltung hinterlegt.

### Optionaler DMARC-Eintrag

| Typ | Name | Wert |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=none;` |

Dieser Eintrag wurde in Resend als optional angezeigt. Ob er bei GoDaddy tatsächlich hinterlegt wurde, ist nicht dokumentiert.

**Achtung:** Bestehende DNS-Einträge nicht unüberlegt löschen oder überschreiben. Insbesondere MX-, SPF- und DMARC-Einträge können andere E-Mail-Dienste beeinflussen.

---

## 6. Aktueller Funktionsumfang

**Bereits umgesetzt:**
- Dreistufiges Anfrageformular
- Responsive SALight-Design
- Pflichtfeldprüfung
- Versand über Vercel und Resend
- E-Mail-Benachrichtigung an SALight
- Kundenadresse als Antwortadresse
- Einfache Erfolgsmeldung im Browser

**Noch nicht umgesetzt:**
- Automatische Eingangsbestätigung an den Kunden
- Individuell gestaltete Erfolgsseite statt Browser-Alert
- Produktiver Spam-Schutz mit serverseitiger Verifikation
- Abschließende Prüfung der Datenschutzhinweise und Einwilligungslogik

Die Kundenbestätigung wurde bewusst zurückgestellt.

---

## 7. Fehlerbehebung

**Keine E-Mail bei SALight angekommen?**

1. In Vercel prüfen, ob das letzte Deployment erfolgreich war.
2. Unter Vercel → Settings → Environment Variables prüfen, ob beide Variablen vorhanden sind.
3. In Resend → Emails nachsehen, ob die Nachricht angenommen oder abgewiesen wurde.
4. Den Spam-Ordner des Empfängerpostfachs kontrollieren.
5. Bei API-Fehlern die Function Logs in Vercel prüfen.

**Kunde erhält keine Bestätigung?**

Das ist aktuell beabsichtigt. Die API verschickt nur eine Benachrichtigung an SALight.

**Nach einer Änderung funktioniert nichts mehr?**

Die letzten Änderungen in GitHub überprüfen und gegebenenfalls einen funktionierenden Commit wiederherstellen.

---

## 8. Erweiterung für später

Wenn eine automatische Kundenbestätigung ergänzt werden soll, muss `api/eventanfrage.js` um einen zweiten E-Mail-Versand erweitert werden.

Dieser verwendet:

- `to`: Kundenadresse aus dem Formular
- `from`: `SALight <anfragen@salight.de>`
- `reply_to`: SALight-Kontaktadresse
- `subject`: `Deine Eventanfrage bei SALight`

Die Nachricht sollte die Veranstaltungsdaten zusammenfassen und ausdrücklich darauf hinweisen, dass es sich um eine Eingangsbestätigung und noch nicht um eine verbindliche Auftragsbestätigung handelt.

**Empfehlung:** Vor einer größeren öffentlichen Nutzung Spam-Schutz und Datenschutz abschließend prüfen.

---

*SALight – Technische Projektdokumentation, Stand Oktober 2026*
