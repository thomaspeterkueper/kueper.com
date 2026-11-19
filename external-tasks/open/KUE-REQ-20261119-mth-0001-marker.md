---
id: KUE-REQ-20261119-001
title: KUE-MTH-0001 (Methodische Grundlagen) – Marker [R] und Ebenenbezeichnungen klären
status: open
source: KUE
target: KUE
created: 2026-11-19
requested_by: Claude (Begutachtung nach ECO-ARC-0037)
priority: low
affects: [KUE]
supersedes: []
---

# KUE-REQ-20261119-001 – KUE-MTH-0001 „Methodische Grundlagen“: Marker und Ebenenbezeichnungen

Status: open
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-19-KUE-MTH-0001-2026-DE.md`
Claude-Status: wartet auf Thomas

## Anlass

Begutachtung vom 2026-11-19. Das Dokument legt normative Regeln für den Aufbau von Theorien fest (M1–M12); es enthält keine empirischen Aussagen, die altern könnten. Inhaltlich keine Änderung nötig. Zwei formale Punkte berühren Thomas' eigene Methodik und werden deshalb nicht direkt geändert.

## Vorschläge (Entscheidung Thomas)

1. **Marker:** `marker: [R]` bedeutet in KUE „empirisch belegt“. Für ein normatives Methodendokument passt das nicht; M9 verlangt selbst, Grundbegriffe, Annahmen, Hypothesen usw. sprachlich zu trennen. Vorschlag: eigener Marker für methodische Setzungen (falls im Schema vorgesehen) oder ein Satz in der Präambel, dass der Marker hier „ausgearbeitete, geprüfte Fassung“ und nicht „empirischer Befund“ meint. Betrifft gleichermaßen KUE-MTH-0002 bis -0005 (ebenfalls `[R]`).
2. **Ebenenbezeichnungen:** Das Dokument nennt die Schicht „MTH – Methodik“, das Frontmatter `kategorie: MET`. Klären, ob MET die Schemakategorie bleibt und MTH nur Signaturkürzel ist; dann genügt ein Halbsatz im Abschnitt „Schichten des KUE-Forschungsprogramms“.

## Betroffene Repositories

- `kueper.com` (KUE-MTH-0001 bis -0006). Keine Wirkung auf andere Repositories erkannt.

## Erwartetes Ergebnis

Thomas entscheidet zu 1 und 2; danach Umsetzung mit Versionssprung und Revisionsvermerk.
