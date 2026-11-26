# Entwicklungsstand – kueper.com

```
Stand: 26.11.2026 (Einstieg nach kueper-ecosystem/docs/development-checkpoints.md v1.0.0, EXT-ECO-KUE-20261125-001)
Letzte verifizierte Revision von main: c2917e6 (26.11.2026)
```

Einstieg nach [`kueper-ecosystem/docs/development-checkpoints.md`](https://github.com/thomaspeterkueper/kueper-ecosystem/blob/main/docs/development-checkpoints.md). Offene Aufgaben stehen in [`external-tasks/open/`](../../external-tasks/open/), offene PRs auf GitHub – hier stehen nur Verweise und der belegte Stand, keine zweite Aufgabenliste. Wer einen Workstream fortsetzt, liest zuerst seinen Checkpoint und aktualisiert ihn im selben Commit wie den Arbeitsschritt.

| Workstream | Status | Checkpoint |
|---|---|---|
| Übernahme werkneutraler OTA-Realteile (ECO-ARC-0038) | integriert, laufend | unten |
| Begutachtung und Korrektur bestehender KUE-Dokumente | integriert, laufend | unten |
| Foundation Mining aus OTA und SSF | geplant (Inventur Pass 1) | unten |
| Offene Entwurfs-PRs | implementiert, nicht gemergt | unten |

## Übernahme werkneutraler OTA-Realteile (ECO-ARC-0038)

- Ziel: Werkneutrales [R]/[T]-Wissen aus OTA-Dokumenten liegt als KUE-SCI-Dokument in `src/content/kue/sci/`; OTA verweist nur noch per Signatur darauf.
- Status: integriert; neue Dokumente entstehen je Request (zuletzt KUE-SCI-0224 und KUE-SCI-0225, 26.11.2026).
- Branch / PR: je Request `claude/<task-id>` mit Merge; Signaturen gehen per Umschlag aus `.kueper/outbox/` an OTA zurück.
- Letzte verifizierte Revision: `c2917e6` (26.11.2026).
- Tests: `npm run build` (Astro-Build inkl. Rechtstext-Sync aus dem KG).
- Offene Schritte: `external-tasks/open/EXT-OTA-KUE-*`.
- Risiken / offene Fragen: Kennwerte und Quellen, die in den Requests als „nicht online bestätigt“ markiert sind, vor der Übernahme selbst prüfen.
- Abschlusskriterien: alle Zeilen der Zuordnungsinventur in `kueper-ecosystem/status/ota-kue-zuordnung.md` haben einen Stand.
- Maßgebliche Dokumente: [`docs/document-contract.md`](../document-contract.md), `kueper-ecosystem/decisions/ECO-ARC-0036`, `-0037`, `-0038`.

## Begutachtung und Korrektur bestehender KUE-Dokumente

- Ziel: bestehende KUE-Dokumente nach Begutachtung korrigieren und ergänzen (Versionssprung und Revisionsvermerk je Dokument).
- Status: integriert, laufend (zuletzt KUE-SCI-0223 v0.2, 26.11.2026).
- Branch / PR: `claude/review-<datum>` bzw. `claude/recherche-pruefung-<datum>` mit Merge.
- Letzte verifizierte Revision: `c2917e6` (26.11.2026).
- Tests: `npm run build`.
- Offene Schritte: `external-tasks/open/KUE-REQ-*`, `external-tasks/open/EXT-KG-KUE-*`.
- Risiken / offene Fragen: Fragen zur Ebenenmarkierung methodischer Dokumente (KUE-MTH-0001/0002) laufen über die jeweiligen Requests.
- Abschlusskriterien: laufender Betrieb, kein Abschluss vorgesehen.
- Maßgebliche Dokumente: [`docs/document-contract.md`](../document-contract.md).

## Foundation Mining aus OTA und SSF

- Ziel: wiederverwendbare Realwissenschaft aus OTA und SSF dedupliziert als KUE-Grundlagen erschließen.
- Status: geplant – Arbeitsinventar Pass 1 liegt vor, die Umsetzung läuft weitgehend über den OTA-Workstream oben.
- Branch / PR: keiner.
- Letzte verifizierte Revision: Inventur vom 22.09.2026.
- Tests: –
- Offene Schritte: [`docs/backlog/KUE-FOUNDATION-MINING-2026-09-22.md`](../backlog/KUE-FOUNDATION-MINING-2026-09-22.md), [`docs/backlog/CHE-1101.md`](../backlog/CHE-1101.md).
- Risiken / offene Fragen: Abgrenzung zum OTA-Workstream; die Inventur ist nicht fortgeschrieben.
- Abschlusskriterien: jede Zeile der Inventur ist übernommen, verworfen oder als Request erfasst.
- Maßgebliche Dokumente: `kueper-ecosystem/docs/cross-repository-workflow.md` (Beispiel D).

## Offene Entwurfs-PRs

- Ziel: Entwürfe außerhalb der beiden laufenden Workstreams; jeder PR ist sein eigener Checkpoint.
- Status: implementiert, nicht gemergt (Stand 26.11.2026).
- Branch / PR: #32 (Dione), #31 (Ideenparkplatz), #30 und #29 (Research Candidates), #28 (Living Legacy Methodik), #25 (Nanokugel-Verschränkung), #18 (SSF-Dokumentationsstandard), #12 (HIS-0001), #11 (Sauna-Neuroresilienz), #7 (öffentlicher Wissensanker).
- Letzte verifizierte Revision: Head-Commits laut GitHub am 26.11.2026.
- Tests: `npm run build` je PR.
- Offene Schritte: die PRs selbst.
- Risiken / offene Fragen: mehrere Entwürfe sind seit Wochen unverändert und können inzwischen von `main` überholt sein.
- Abschlusskriterien: PR gemergt oder geschlossen; danach Zeile hier entfernen.
- Maßgebliche Dokumente: PR-Beschreibungen.
