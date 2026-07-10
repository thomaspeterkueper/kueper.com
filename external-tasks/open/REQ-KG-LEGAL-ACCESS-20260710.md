# REQ-KG-LEGAL-ACCESS-20260710 — Zentrale Rechtstexte aus dem KG beziehen

## Target System
`SYS:KUEPER:kueper-com`

## Origin
`SYS:KUEPER:knowledge-graph`

## Status
Open

## Priority
High vor Veröffentlichung/Freigabe der Rechtstexte

## Zweck
Impressum, Datenschutzerklärung und Nutzungsbedingungen werden zentral im KUEPER Knowledge Graph gepflegt. Dieses Repository rendert die Dokumente, besitzt aber keine eigene rechtliche Systemwahrheit.

## Kanonische Quellen

- Registry: `exports/document-references-0.1.json`
- Impressumsdaten: `registry/legal/impressum-master.json`
- Datenschutz: `registry/legal/datenschutz.de.md`
- Nutzungsbedingungen: `registry/legal/terms.de.md`

Repository: `thomaspeterkueper/kueper-knowledge-graph`

Document IDs:

- `DOC:KUE:LEGAL-IMPRINT-DE`
- `DOC:KUE:LEGAL-PRIVACY-DE`
- `DOC:KUE:LEGAL-TERMS-DE`

## Requested Change

1. Die drei Dokumente anhand ihrer IDs in `exports/document-references-0.1.json` auflösen.
2. Die dort angegebenen `sourcePath`-Dateien **build- oder serverseitig** aus dem KG beziehen.
3. Platzhalter der Form `{{ impressum.responsible.name }}`, `{{ impressum.responsible.address }}`, `{{ impressum.responsible.email }}` und `{{ impressum.updated }}` aus `registry/legal/impressum-master.json` ersetzen.
4. Lokale Seiten für Impressum, Datenschutz und Nutzungsbedingungen rendern und aus Footer/Navigation verlinken.
5. Keine Browser-Laufzeitabfrage an GitHub oder den KG durchführen. Die Besucher sollen nur die lokal gebaute/gerenderte Seite erhalten.
6. Bei nicht erreichbarer KG-Quelle den Build fehlschlagen lassen oder einen zuletzt geprüften Build-Cache verwenden; keine still erfundenen Fallback-Texte erzeugen.
7. Rechtstexte nicht lokal fachlich verändern. Site-spezifische technische Fakten als strukturiertes Feedback/Request an den KG zurückmelden.
8. Dokumente erst öffentlich als freigegebene Rechtstexte ausweisen, wenn ihr KG-Status ausdrücklich `released` beziehungsweise juristisch freigegeben ist. Aktuell sind die Markdown-Dateien `draft_productive` und nicht juristisch freigegeben.

## Temporärer Zugriff

Bis ein öffentlicher KG-Endpunkt verfügbar ist, können die Dateien beim Build aus dem öffentlichen GitHub-Repository gelesen werden. Bevorzugt wird ein Build-Skript, das die Registry liest und anschließend die referenzierten Pfade lädt; keine hart codierten Textkopien.

## Akzeptanzkriterien

- Verantwortlichen-Daten stammen ausschließlich aus `impressum-master.json`.
- Privacy/Terms stammen ausschließlich aus den KG-Quelldateien.
- Keine Client-seitige GitHub-/KG-Abfrage.
- Footer-Links funktionieren.
- Draft-/Release-Status wird respektiert.
- Änderungen am Inhalt werden nicht im Ziel-Repo vorgenommen, sondern als KG-Request zurückgegeben.

## Created
2026-07-10

## Curator
T.P.K.
