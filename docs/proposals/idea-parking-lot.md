# KUEPER Ideen- und Forschungsparkplatz (Entwurf)

Status: Vorschlag, nicht produktiv. Stand: 2026-11-19.

## Zweck
Unverbindliche Gedanken, Beobachtungen, offene Forschungsfragen und Projektvorschläge erfassen, ohne sofort Issues, External Tasks, kanonische Dokumente oder Implementierungen anzulegen. Der Parkplatz ist **keine zweite Task-Engine** und kein Veröffentlichungsarchiv.

## Eintragsschema
- ID (stabil, z. B. IDEA-2026-0001), Titel, Datum, Urheber/Quelle
- Typ: Gedanke | Beobachtung | Hypothese | Forschungsfrage | Verbesserung | Entwicklungswunsch
- Kurzbeschreibung und Bezug: kueper.com | KG | OTA | SSF | NOXIA | übergreifend
- Evidenz: belegt | vorläufig | spekulativ | Simulation; Quellen/Links; Unsicherheiten
- Status: inbox | prüfen | geparkt | bereit | überführt | verworfen
- Duplikat-/Verknüpfungsreferenzen und nächster überprüfbarer Schritt
- Optional: Aufwand, Nutzen, Abhängigkeiten; keine Pflicht zur sofortigen Priorisierung

## Prozess
1. Erfassen ohne Entwicklungsauftrag und ohne automatische Veröffentlichung.
2. Vor jeder Vertiefung vorhandene Einträge, Issues, PRs und kanonische Dokumente abgleichen.
3. Regelmäßig kleine Auswahl sichten, konsolidieren, priorisieren; ähnliche Ideen verknüpfen statt duplizieren.
4. Erst nach Entscheidung als Issue, Forschungsnotiz, Dokument oder **bestehenden** External Task weitergeben; Rücklink und Status 'überführt' setzen.
5. Keine automatischen Änderungen an Produktivsystemen, keine automatische Zusammenführung.

## Abgrenzung
- `incoming/`: konkrete Dokumenteingänge und Foundation-Anfragen, unverändert.
- `external-tasks/`: verbindliche Cross-Repository-Aufträge nach ECO-ARC-0006, unverändert.
- `src/content/kue/`: kanonische öffentliche Dokumente, unverändert.
- Knowledge Graph: Identitäten, Relationen, Mappings, kanonische Forschungsentitäten.
- OverTime Archive: fiktionale und In-universe-Archivdokumente.

## Einführung
Zunächst nur diese Prozessbeschreibung als Draft prüfen. Nach Freigabe einen einzigen Index mit verlinkten Einträgen anlegen, keine parallele Datenbank und kein eigenes Scheduler-System. Einträge dürfen privat bleiben; keine unveröffentlichten Romanfiguren oder personenbezogenen Inhalte automatisch veröffentlichen.

## Beispiel (nicht als beschlossene Aufgabe)
Idee: Embodied-AI-Wahrnehmung in NOXIA mit bestehendem Reflex-/Gedächtnissystem abgleichen. Status: prüfen. Vorhandene PRs #453, #454, #835 und Körper-/Gedächtnismodule zuerst vergleichen. Keine neue parallele NPC-Engine.
