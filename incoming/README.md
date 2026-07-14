# Interne KUE-Eingangsklassifizierung

Status: active · 2026-07-14

Dieser Bereich ist **kein zweiter Cross-Repository-Taskkanal**.

Verbindliche Anforderungen anderer Repositories gehen ausschließlich über:

```text
external-tasks/open/
```

Nach der Annahme kann KUE den fachlichen Bearbeitungsfall intern in einen der folgenden Bereiche einordnen:

- `references/` — Prüfung einer Zuordnung zu einem bereits existierenden KUE-Dokument
- `requested-foundations/` — Bedarf an einem fehlenden oder noch nicht identifizierten KUE-Grundlagendokument
- `review/` — unklare Fälle, die eine menschliche Zuständigkeits- oder Zuordnungsentscheidung benötigen

Die ursprüngliche External-Task-ID muss in jedem internen Vorgang erhalten bleiben. Abschluss und Rückmeldung erfolgen weiterhin über `external-tasks/done/` beziehungsweise `external-tasks/rejected/`.

## Workflow

1. External Task unter `external-tasks/open/` annehmen.
2. Nur bei fachlichem Bedarf eine interne Arbeitsnotiz in einem der drei Unterordner anlegen.
3. Entscheidung oder Dokument-ID im ursprünglichen External Task festhalten.
4. Task nach `done/` oder `rejected/` verschieben.
5. Interne Arbeitsnotiz löschen oder mit dem Abschlussverweis archivieren.

Die Umsetzung dieses Workflows schließt GitHub-Issue #1.
