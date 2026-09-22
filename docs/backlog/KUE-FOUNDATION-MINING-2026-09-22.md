# KUE Foundation Backlog Map

Stand: 2026-09-22  
Status: Arbeitsinventar / Foundation-Mining Pass 1  
Owner: KUE

## Zweck

Dieses Arbeitsinventar erschließt wiederverwendbare Realwissenschaft aus OTA und SSF für den kanonischen Grundlagenbestand von kueper.com. Es ist **keine** automatische Übernahme von OTA- oder SSF-Inhalten. Neue KUE-Grundlagen entstehen nur, wenn eine Aussage projektübergreifend, realwissenschaftlich, quellenfähig und gegenüber bestehenden KUE-Dokumenten hinreichend eigenständig ist.

## Source-of-Truth-Regel

- **KUE**: projektübergreifende wissenschaftliche/MINT+-Grundlagen und methodische Realanker.
- **KG**: Identitäten, kanonische Begriffe, IDs und projektübergreifende Relationen.
- **SSF**: Didaktisierung, Lernpfade, Übungen und Kompetenzaufbau.
- **OTA**: In-Universe-/Archivdokumente, konkrete Zukunftsanwendungen und epistemisch markierte Weltbrücken.
- **Engineering**: konkrete technische Dimensionierung und Systemauslegung.

Arbeitskette:

`Primärliteratur → KUE → KG → SSF / OTA / NOXIA`

## Klassifikation

| Klasse | Bedeutung | Aktion |
| --- | --- | --- |
| COVERED | belastbare KUE-Grundlage existiert bereits | Grounding/Relation prüfen |
| EXTEND_KUE | KUE-Grundlage existiert, aber OTA/SSF enthält eine allgemeine relevante Erweiterung | bestehendes KUE-Dokument reviewen |
| NEW_FOUNDATION | wiederverwendbare Realwissenschaft ohne ausreichenden KUE-Anker | neues KUE-Dokument nach Quellenprüfung |
| PROJECT_ONLY | Inhalt ist didaktisch, fiktional oder projektspezifisch | nicht nach KUE übernehmen |
| ENGINEERING | konkrete Auslegung/Dimensionierung | an Engineering belassen bzw. eskalieren |
| REVIEW | Eigentum, Evidenz oder Abgrenzung noch unklar | manuell prüfen |

## 1. Bestehender KUE-Bestand

Aktuell wurden 31 relevante KUE-Dateien in `src/content/kue/{sci,obs,met}` gefunden:

- MTH: 0001–0006
- OBS: 0101–0102
- SCI: 0001, 0004, 0012, 0013, 0059, 0064, 0167–0183

Die Nummerierung ist damit **nicht** als einfache fortlaufende 0172ff.-Serie zu behandeln. Vor Vergabe weiterer SCI-IDs ist die historische/semantische Nummernlogik zu prüfen.

### Bereits abgeschlossener Grounding-Block

KUE-SCI-0172 bis 0183 sind im OTA-Grounding-Pass vom 2026-09-06 bereits als Realanker verwendet worden. Diese Themen werden im Mining zunächst als COVERED behandelt:

- regenerative Lebenserhaltung / ECLSS
- Erde–Mond-Transfers
- radiogene Wärme / U-Th-Geochemie
- ultraweak photon emission
- mitochondriale DNA-Methylierung
- Quantensensorik / optische Uhren
- Raumfahrzeugatmosphären / Notfall-O₂
- Hydrolox-Triebwerke
- planetare Fahrwege / Regolith-Infrastruktur
- Earth-Independent Medical Operations
- integrierte Mond-Transfer-/Landearchitekturen
- Goldhydride unter Extrembedingungen

KUE-SCI-0013 (2026-09-20) deckt phyllo-cellulares Kryoeis / boiling-freezing unter Nahe-Vakuum-Bedingungen ab und muss in die gemeinsame Kataloglogik aufgenommen werden.

## 2. OTA-Mining

OTA enthält derzeit 334 Markdown-Kandidaten im wissenschaftlichen, technischen und Foundation-nahen Bestand. Das Mining erfolgt **themenzentriert**, nicht dokumentzentriert: mehrere OTA-Dokumente dürfen eine einzige KUE-Grundlage speisen.

### Pass A — aktuelle, gut isolierbare Realwissenschaft

| Cluster | Signal im OTA-Bestand | Vorläufige Klasse | Nächster Prüfschritt |
| --- | --- | --- | --- |
| Lunarer Staub / Exposition / Mitigation | aktueller PELICAN-Evidenzpass, NASA-Standard aktualisiert | NEW_FOUNDATION / EXTEND_KUE | Abgrenzung zu SCI-0180; Staubphysik und Gesundheits-/Systemwirkung separat prüfen |
| Perchlorate / Mars-Regolithchemie | aktueller Perchlorat- und Feed-Chemistry-Pass | NEW_FOUNDATION | Umweltchemie, Toxikologie, Aufbereitung und Pflanzenbezug entkoppeln |
| Flexible Photosynthese / Pflanzenzustände | NOXIA→OTA State-Model-Request | REVIEW | reale Pflanzenphysiologie von Spielzustandsmodell trennen |
| FRB als baryonischer Beobachtungskanal | AVI→OTA Request | NEW_FOUNDATION-Kandidat | ausschließlich beobachtungs-/kosmologische Realbasis extrahieren; AVI-Hypothese ausschließen |
| Supernovae und kosmische Expansion | AVI→OTA Request | REVIEW | Standardkosmologie/SN-Ia-Kalibrierung von AVI-Deutung trennen |
| Transferlogistik | ENG→OTA Canonicalization | ENGINEERING / REVIEW | allgemeine Logistikgrundlagen vs. konkrete Architektur trennen |
| Mars-Biologie / Generation Mars | KG/OTA-Kette | REVIEW | reale Humanbiologie, Langzeitraumflug und fiktionale Generationenmodelle trennen |

### Pass B — systematischer Serien-Sweep

Priorisierte OTA-Serien für Foundation-Mining:

1. `OTA-SCI-*` — höchste Wahrscheinlichkeit direkt extrahierbarer Realgrundlagen.
2. `OTA-TEC-*` — Realgrundlage von konkreter Technik und Zukunftswerten trennen.
3. `OTA-BIO-*` — Biologie/Medizin gegen SCI-0181 und weitere KUE-Anker deduplizieren.
4. `OTA-OBS-*` — reale Beobachtungsdaten gegen KUE-OBS abgleichen.
5. `OTA-FND-*` — nur realwissenschaftliche Bestandteile extrahieren; narrative/philosophische Foundations nicht automatisch zu SCI machen.
6. übrige Serien nur bei klarer wissenschaftlicher Querreferenz.

## 3. SSF-Mining

SSF besitzt aktuell keine offenen External Tasks, aber fachlich verwertbare Module. Der sichtbare Bestand enthält insbesondere:

| SSF-Cluster | Material | Vorläufige Klasse | KUE-Frage |
| --- | --- | --- | --- |
| Magnetismus | MAG-001 bis MAG-008 | REVIEW / NEW_FOUNDATION | Welche physikalischen/materialwissenschaftlichen Grundlagen fehlen KUE, ohne KG-Begriffe oder SSF-Didaktik zu duplizieren? |
| Permanentmagnet-Werkstoffe | MAG-Serie + abgeschlossener KG-Request | NEW_FOUNDATION-Kandidat | Materialklassen, Kennwerte, Temperatur-/Korrosions-/Versorgungsgrenzen |
| Elektromagnetische Systeme | MAG-007/008 Umfeld | REVIEW | Motor, Generator, Transformator, Hall-Sensor, Magnetlager: gemeinsame Physik vs. Engineering |
| Technische Mechanik II | Stress/strain, principal/equivalent/combined stress | NEW_FOUNDATION-Kandidat | allgemeine Spannungs-/Dehnungs- und Versagensgrundlagen als KUE-Realanker |
| Planetare Raman-Ressourcenerkundung | abgeschlossenes SSF-Engineering-Thema | NEW_FOUNDATION-Kandidat | Raman-Spektroskopie und planetare Mineral-/Ressourcenidentifikation abstrahieren |
| Power Generation | abgeschlossener Lernmodul-Request | REVIEW | allgemeine Energiewandlung gegen bestehende/kommende KUE-Grundlagen prüfen |

Didaktische Lernpfade, Quizlogik und Kompetenzstufen bleiben SSF und werden nicht nach KUE verschoben.

## 4. Deduplizierungsregeln

Ein neues KUE-Dokument wird nur angelegt, wenn alle folgenden Bedingungen erfüllt sind:

1. Die Grundlage ist projektübergreifend wiederverwendbar.
2. Sie ist nicht bereits ausreichend durch KUE abgedeckt.
3. Sie kann auf reale Primär-/Reviewliteratur zurückgeführt werden.
4. Fiktionale Zukunftswerte und projektspezifische Parameter lassen sich entfernen.
5. Das Thema ist groß genug für einen eigenständigen stabilen Realanker.
6. Es handelt sich nicht primär um KG-Ontologie, SSF-Didaktik oder Engineering-Dimensionierung.

## 5. Priorisierte Arbeitswellen

### Welle 1 — hohe Wiederverwendbarkeit

- Lunarer Staub: Physik, Exposition, System- und Gesundheitsrisiken
- Perchlorate in Mars-/Planetary-Regolith: Chemie, Toxikologie, Verarbeitung
- Raman-Spektroskopie für planetare Mineralogie/Ressourcenerkundung
- Permanentmagnetische Werkstoffe und reale Materialgrenzen
- Spannungs-/Dehnungszustände und kombinierte Beanspruchung

### Welle 2 — Raumfahrt-/Biologie-Grundlagen

- Pflanzenphysiologie und Photosynthese unter kontrollierten extraterrestrischen Bedingungen
- Langzeit-/Generationenmissionen: belastbare Humanbiologie getrennt von Zukunftsszenarien
- Transfer-/Cargo-Logistik: nur projektübergreifende physikalische/operative Grundlagen

### Welle 3 — Astrophysik/Kosmologie

- FRB als Sonde für baryonische Materie
- Typ-Ia-Supernovae als Distanzindikatoren und kosmologische Beobachtungsgrundlage
- weitere OTA-OBS/SCI-Kandidaten nach Deduplizierung gegen KUE-OBS und AVI-Abgrenzung

## 6. Nummerierung vor Neuanlage

**Blocker:** Keine neue KUE-SCI-ID allein aus dem vermeintlich „nächsten“ Wert 0184 ableiten.

Vor dem ersten neuen Foundation-Dokument werden:
- alle vorhandenen SCI-Signaturen und Dateinamen abgeglichen,
- historische Nummern 0001/0004/0012/0013/0059/0064/0167–0183 klassifiziert,
- Dubletten oder unterschiedliche ID-Systeme identifiziert,
- anschließend eine konsistente Vergaberegel dokumentiert.

## 7. Nächste operative Schritte

1. KUE-Katalog mit Titel, Status, Version, Themen und Grounding-Beziehungen tabellieren.
2. OTA-SCI vollständig thematisch clustern und gegen KUE matchen.
3. OTA-TEC/BIO/OBS nur auf verbleibende Lücken prüfen.
4. SSF MAG/TM2/Raman/Power-Generation gegen dieselbe Matrix prüfen.
5. Kandidaten je Thema auf Primärquellen zurückführen.
6. Erst danach KUE-Dokumente erstellen.
7. Neue stabile KUE-Dokumente anschließend per External Task an KG zur Registrierung/Relationierung geben.

## Arbeitsprinzip

Das Ziel ist nicht, möglichst viele KUE-Dokumente zu erzeugen. Ziel ist eine kleine, belastbare und wiederverwendbare Schicht wissenschaftlicher Grundlagen, auf die OTA, SSF, NOXIA und weitere Projekte eindeutig referenzieren können.
