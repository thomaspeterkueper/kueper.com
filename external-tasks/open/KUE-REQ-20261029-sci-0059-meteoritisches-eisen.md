---
id: KUE-REQ-20261029-001
title: KUE-SCI-0059 – Korrekturen und Ergänzungen aus der Begutachtung 2026-10-29
status: open
source: KUE
target: KUE
created: 2026-10-29
requested_by: Claude (Begutachtung nach ECO-ARC-0037)
priority: medium
affects: [KUE]
supersedes: []
---

# KUE-REQ-20261029-001 – KUE-SCI-0059 „Meteoritisches Eisen“: Änderungsvorschlag

## Anlass

Begutachtung nach [ECO-ARC-0037-2026-DE](https://github.com/thomaspeterkueper/kueper-ecosystem/blob/main/decisions/ECO-ARC-0037-2026-DE.md). Das Dokument hat Status „Kanonisch“ und wird deshalb nicht direkt geändert. Prüfbericht: `kueper-ecosystem/reviews/2026-10-29-KUE-SCI-0059-2026-DE.md`.

## Gewünschte Änderung

1. **Abschnitt 2.3, Tabelle:** „IIAB … häufigste Gruppe“ ist falsch. Die größte chemische Gruppe der Eisenmeteorite ist IIIAB (rund ein Drittel der klassifizierten Eisen; IAB etwa 19 %, IIAB etwa 11 %, IVA etwa 8 %). Vorschlag: Vermerk „häufigste Gruppe“ zu IIIAB verschieben. – Quelle: Scott, E. R. D., „Parent Bodies of Iron Meteorites“, IAU Colloquium (ca. 1977), Tab. I. Evidenz: [R], Fachliteratur.
2. **Abstract und 2.1, Abkühlrate:** „1–100 °C pro Million Jahre“ ist zu eng. Metallographische Abkühlraten unterscheiden sich stark nach Gruppe; für IVA wurden 19–3400 K/Myr bestimmt (Rasmussen, Ulff-Møller & Haack 1995, GCA), die Tabelle des Dokuments nennt IVA selbst „rascher Abkühlpfad“. Vorschlag: „je nach Gruppe etwa 10 bis mehrere 1000 K pro Million Jahre“, mit Verweis auf Goldstein et al. (2009). Evidenz: [R].
3. **2.1/2.2, Ausschließlichkeit:** „Kein irdischer Herstellungsprozess erzeugt dieses Gefüge“ präzisieren: Mikroskopische Widmanstätten-Strukturen sind auch aus Stählen und Schweißnähten bekannt; diagnostisch ist das makroskopische Lamellenmuster oktaedritischer Eisenmeteorite. Evidenz: [R], Lehrbuchwissen Metallkunde.
4. **Tabelle 1.2, Mörigen:** Nachweis war nicht das Widmanstätten-Gefüge, sondern die Zusammensetzung (Ni, Ge u. a.; Zuordnung zur Gruppe IAB, Kaalijärv als mögliche Quelle). Datierung ca. 900–800 v. Chr. – Quelle: Hofmann, B. A. et al. (2023), *Journal of Archaeological Science* 157, 105827. Herkunftsebene: `forschung`.
5. **Ergänzung 1.2:** Schatz von Villena (Spanien): Halbkugel und Armreif, ca. 1400–1200 v. Chr., Nickelgehalte sprechen für meteoritisches Eisen; wegen Korrosion ausdrücklich vorläufig. – Quelle: Rovira-Llorens, S. et al., *Trabajos de Prehistoria* (2023/2024). Kennzeichnung: [H], `forschung`.
6. **Abschnitt III, magnetische Träger:** Die wichtigsten Remanenzträger in meteoritischem Metall sind Tetrataenit (geordnetes FeNi) und die „cloudy zone“, nicht primär Magnetit; Magnetit tritt in Eisenmeteoriten v. a. in Schmelzkruste und Verwitterungsprodukten auf. Vorschlag: Abschnitt III um Tetrataenit/Cloudy Zone ergänzen und die Magnetit-Aussagen auf ihren Beleg prüfen. – Quelle: Bryson, J. F. J. et al. (2015), *Nature* 517, 472–475 (Paläomagnetismus der Pallasit-Mutterkörper, langlebiger Kerndynamo). Evidenz: [R].
7. **Abschnitt IV, epistemologische Tabelle:** Die Zeilen zu ²⁶Al/⁶⁰Fe und zu Magnetfeldanomalien in Eisenerzformationen haben im Text keine Grundlage. Entweder im Text mit Quelle belegen oder streichen.
8. **ECO-ARC-0036:** Historische Aussagen (Fundtabelle, *an.bar*-Deutung) mit Herkunftsebene kennzeichnen; *an.bar* = `forschung`, Prüfstand `sekundaer`.

## Begründung

Das Dokument ist kanonische Realgrundlage; die Punkte 1, 2 und 4 sind sachliche Fehler, 5 und 6 wichtige Lücken.

## Betroffene Repositories

- `kueper.com` (Dokument selbst)
- `kueper-knowledge-graph`: falls dort Claims aus KUE-SCI-0059 gespiegelt sind (in dieser Begutachtung nicht prüfbar, kein Zugriff)

## Erwartetes Ergebnis

Thomas entscheidet; bei Annahme neue Version 1.1 mit Revisionsvermerk.
