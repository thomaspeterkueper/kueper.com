# KUE-Dokumentvertrag

Status: active
Basis: `ECO-ARC-0007-2026-DE`

## Zuständigkeit

`kueper.com` besitzt kanonische öffentliche Dokumentkörper des KUEPER-Ökosystems, insbesondere MINT+-Grundlagen, Essays, Whitepaper, Spezifikationen, Standards und Guides.

Der Knowledge Graph besitzt Identitäten, Relationen, Mappings und KXF-Metadaten. Andere Systeme referenzieren KUE-Dokumente über stabile IDs und führen keine stillen kanonischen Kopien.

## Stabile Identität

Jedes neu angelegte kanonische Dokument erhält eine stabile ID im Namespace:

```text
DOC:KUE:<KANONISCHE-ID>
```

Die bestehende `signatur` bleibt während der Migration erhalten und dient als lesbare kanonische Kurzkennung.

## Pflichtmetadaten für Neuanlagen

```yaml
id: DOC:KUE:KUE-SCI-0001-2026-DE
signatur: KUE-SCI-0001-2026-DE
title: Deutscher oder englischer Titel
titel: Deutscher oder englischer Titel
status: draft_productive
language: DE
sprache: DE
version: "1.0"
documentType: published_foundation_document
kg:
  entityIds: []
  knowledgeDomainIds: []
  prerequisiteIds: []
  supersedes: []
```

Die doppelten deutsch-/englischsprachigen Felder sind eine zeitlich begrenzte Kompatibilitätsschicht. Neue Consumer sollen `id`, `title`, `language`, `version`, `status`, `documentType` und `kg` verwenden.

## Versionierung und Übersetzungen

- Die Dokument-ID bleibt über inhaltliche Versionen stabil.
- `version` kennzeichnet den veröffentlichten oder bearbeiteten Stand.
- Übersetzungen sind Sprachvarianten derselben Dokumentidentität; sie erhalten keine unabhängige fachliche Identität.
- Ersetzungen und Ablösungen werden im `kg.supersedes`-Block maschinenlesbar dokumentiert.

## Migration

Bestehende Dokumente bleiben buildfähig. Die neuen Felder sind im Astro-Schema zunächst optional und werden bei inhaltlicher Bearbeitung schrittweise ergänzt. Eine massenhafte rein technische Umschreibung ohne fachliche Prüfung ist nicht vorgesehen.
