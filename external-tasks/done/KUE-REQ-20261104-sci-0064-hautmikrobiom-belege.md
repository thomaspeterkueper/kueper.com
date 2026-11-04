---
id: KUE-REQ-20261104-001
title: KUE-SCI-0064 – Belegkorrekturen Reversibilität (Brumlow 2019, Baur 2021) und Abgleich mit OTA-SCI-0064
status: done
source: KUE
target: KUE
created: 2026-11-04
requested_by: Claude (Begutachtung nach ECO-ARC-0037, Zuordnung nach ECO-ARC-0038)
priority: medium
affects: [KUE, OTA]
supersedes: []
---

# KUE-REQ-20261104-001 – KUE-SCI-0064 „Das Hautmikrobiom“: Änderungsvorschlag

## Anlass

Begutachtung nach ECO-ARC-0037. Status „Kanonisch“ – daher nicht direkt geändert. Prüfberichte: `kueper-ecosystem/reviews/2026-11-04-KUE-SCI-0064-2026-DE.md` und `…-OTA-SCI-0064-2026-DE.md`.

Direkt korrigiert (nur Literaturangaben, Metadaten): DOI, Seiten und Autorenliste von Brumlow et al. 2019 (richtig: 10.2147/IDR.S185992, 12, 399–416; Autoren … Cowdrey, Primm), Autorenliste von Baur et al. 2021.

## Gewünschte Änderung

1. **§3.2 und §0.2, Brumlow et al. 2019 – Modellsystem benennen.** Die Studie untersucht nicht menschliche Haut, sondern die Hautschleim-Mikrobiota des Moskitofischs *Gambusia affinis* (Störungen: Rifampicin, Tetracyclin, Chlorhexidin, Wärme, Spülen). Ergebnis: Keimzahl und biochemisches Profil kehren zurück, die taxonomische Zusammensetzung nicht. Vorschlag: „In einem Fisch-Hautschleim-Modell zeigten Brumlow et al. (2019) …“; die Übertragung auf menschliche Haut als [T] kennzeichnen. – Quelle: Dovepress-Volltext, 13.02.2019. Evidenz: [R] für das Modell, [T] für die Übertragung.
2. **§4.1, Baur et al. 2021 – Aussage berichtigen.** Die Arbeit ist eine Mausstudie (SKH1, 2 % Triclosan, 7 Tage). Gemessen wurde die Zusammensetzung (16S), keine biochemische Aktivität. Die Unterschiede der Hautmikrobiota lagen eine Woche nach der letzten Exposition (Tag 13) wieder **nahe am Ausgangswert**; für Barriere-Marker und Darmmikrobiota gibt es keinen Erholungszeitpunkt. Der jetzige Satz („biochemisch messbar … kompositionelle Ausgangslage nicht vollständig wiederhergestellt“) gibt die Studie verkehrt wieder. Vorschlag: „Im Mausmodell kehrte die Zusammensetzung der Hautmikrobiota nach siebentägiger Triclosan-Exposition binnen einer Woche annähernd zum Ausgangszustand zurück; Barrierefunktion und Darmmikrobiota wurden nicht nachverfolgt.“ – Quelle: Baur et al. 2021, *Toxicol Sci* 184(2), 223–235. Evidenz: [R] (Tiermodell).
3. **Statustabelle §6.1 anpassen:** Zeile „Biochemische Reversibilität nach Triclosan-Exposition (~7 Tage)“ → „Kompositionelle Kurzzeit-Erholung nach Triclosan (Maus, ~1 Woche)“ [R]; Zeile „Kompositionelle ≠ biochemische Reversibilität“ → „etabliert im Fischmodell (Brumlow 2019); für menschliche Haut plausibel“ [R]/[T]. Die Synthese „partielle Reversibilität“ (§4.3) bleibt [I], stützt sich aber dann auf Modellsysteme plus menschliche Kurzzeitdaten.
4. **Menschliche Daten ergänzen (Vorschlag):** SanMiguel, A. J. et al. (2018), „Antiseptic agents elicit short-term, personalized, and body site-specific shifts in resident skin bacterial communities“, *J Invest Dermatol* (Preprint bioRxiv 10.1101/230193): 13 Erwachsene, Wasser/Ethanol/Povidon-Iod/Chlorhexidin, Unterarm und Rücken, bis 72 h; Verschiebungen kurzzeitig und individuell. Zeitschriftenangaben beim Einarbeiten prüfen. Evidenz: [R].
5. **§4.2, Preprint:** Autoren nachtragen (Ravikrishnan, A. … Common, J., Lim, Y. S., Nagarajan, N.; 27 Autoren); Stand 04.11.2026 keine begutachtete Fassung gefunden – Kennzeichnung „Preprint“ beibehalten.
6. **Abgleich mit OTA-SCI-0064 (ECO-ARC-0038, Gruppe K):** OTA enthält zusätzlich zu §5.2 die Aussagen „seltene Spezies können dauerhaft verloren gehen“ und „Übergang in alternative stabile Zustände“ – beide ohne Beleg. Übernahme nach KUE nur mit Quelle, sonst als [T] markieren oder weglassen.
7. **ECO-ARC-0036 (optional):** Brumlow und Baur als `provenance: forschung`, Modellsystem jeweils im Text.

## Begründung

Die Kernaussage „biochemische ≠ kompositionelle Reversibilität“ ist belegt, aber nur im Fischmodell; die Triclosan-Studie stützt eher schnelle kompositionelle Erholung als ihr Gegenteil. Das berührt die Statustabelle und die Begründung der Synthese, nicht den Aufbau des Dokuments.

## Betroffene Repositories

- `kueper.com` (dieses Dokument)
- `overtime-archive.org`: OTA-SCI-0064 wird nach ECO-ARC-0038 §3a auf Verweis gekürzt (OTA-REQ-20261104-001); die dort verbleibende Grundinformation übernimmt die korrigierte Fassung. OTA-SCI-0058 (Triclosan) beschreibt Baur 2021 bereits als Mausmodell.

## Erwartetes Ergebnis

Thomas entscheidet; bei Annahme Version 1.1 mit Revisionsvermerk.

## Erledigt

2026-11-04 – von Thomas freigegeben, als KUE-SCI-0064 v1.1 umgesetzt (Punkte 1–6; Punkt 6: die unbelegten OTA-Aussagen wurden nicht übernommen; Punkt 7 optional, nicht umgesetzt).
