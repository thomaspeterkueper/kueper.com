# Public Knowledge Candidate Contract

Status: proposed · 2026-10-06
Ecosystem request: `EXT-ECO-KUE-20261006-001`

## Zweck

Ein **Public Knowledge Candidate (PKC)** ist ein interner Prüfzustand für reales Wissen,
das als neue oder aktualisierte öffentliche KUE-Referenz geeignet sein könnte.

PKC ist **keine Publikationsfreigabe** und keine neue kanonische Wissensklasse.

## Herkunft

Ein PKC kann aus OTA, KG, SSF, Engineering oder Products entstehen. NOXIA kann einen
Prüfbedarf auslösen, aber die Verwendung eines Modells im Spiel ist für sich kein
wissenschaftlicher Publikationsnachweis.

## Mindestangaben

- source project
- source reference (stabile ID, Commit, PR oder Dokumentpfad)
- evidence / epistemic status
- last reviewed
- proposed action: `new`, `update` oder `none`
- public-safe summary
- bekannte Grenzen und offene Fragen
- Beziehungen zu OTA/KG/SSF/ENG/PRODUCTS, soweit vorhanden

## Promotion Gate

Vor Übernahme in `src/content/kue/` muss geprüft werden:

1. Ist die Herkunft nachvollziehbar?
2. Sind Primär-/belastbare Quellen vorhanden, soweit fachlich erforderlich?
3. Sind Beobachtung, Modell, Interpretation und Extrapolation getrennt?
4. Ist ein Research Candidate weiterhin als Candidate/Hypothese gekennzeichnet?
5. Existiert bereits ein KUE-Dokument, das statt einer Neuanlage aktualisiert werden sollte?
6. Enthält der Text keine privaten Manuskriptinhalte oder nur für NOXIA geltende Fiktion?
7. Sind Evidenzstatus und Aktualisierungsdatum öffentlich sichtbar bzw. im Dokument nachvollziehbar?

## Harte Grenze

**Research Candidate ≠ Public Knowledge Candidate ≠ veröffentlichtes KUE-Dokument.**

Eine automatische Pipeline darf Kandidaten erzeugen und auf Prüfbedarf hinweisen. Sie darf
weder einen Research Candidate als etabliertes Wissen deklarieren noch selbständig eine
fachliche Publikationsfreigabe erteilen.
