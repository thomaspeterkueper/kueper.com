# kueper.com

Kanonische öffentliche Dokument- und Publikationsschicht des KUEPER-Ökosystems.

`kueper.com` speichert und veröffentlicht insbesondere MINT+-Grundlagen, Essays, Whitepaper, Spezifikationen, Standards und Guides. Identitäten, Relationen, Mappings und zentrale Rechtsdaten werden im KUEPER Knowledge Graph gepflegt; fiktionale und In-universe-Archivdokumente gehören ausschließlich ins OverTime Archive.

## Lokale Entwicklung

```bash
git clone https://github.com/thomaspeterkueper/kueper.com.git
cd kueper.com
npm install
npm run dev
```

Produktionsbuild:

```bash
npm run build
```

Vor `dev` und `build` synchronisiert `scripts/sync-legal.mjs` die zentralen Rechtstextquellen aus `thomaspeterkueper/kueper-knowledge-graph`. Ist die KG-Quelle nicht erreichbar oder fehlt eine registrierte Dokument-ID, schlägt der Sync fehl. Es werden keine erfundenen Fallback-Texte erzeugt.

## Kanonische Dokumente

Dokumente liegen unter:

```text
src/content/kue/<kategorie>/
```

Für Neuanlagen gilt der Dokumentvertrag in [`docs/document-contract.md`](docs/document-contract.md). Die stabile ID verwendet den Namespace:

```text
DOC:KUE:<KANONISCHE-ID>
```

Bestehende Dokumente verwenden weiterhin Felder wie `signatur`, `titel` und `sprache`. Die ECO-ARC-0007-Felder `id`, `title`, `language`, `documentType` und `kg` werden schrittweise ergänzt.

## Repository-Struktur

```text
external-tasks/
  open/       # verbindliche Cross-Repository-Anforderungen
  done/       # abgeschlossene Anforderungen
  rejected/   # abgelehnte Anforderungen
incoming/
  references/             # interne Prüfung vorhandener KUE-Anker
  requested-foundations/  # interne Bearbeitung fehlender Grundlagen
  review/                 # unklare Fälle
src/content/kue/           # kanonische Dokumentkörper
src/pages/                 # öffentliche Astro-Seiten
scripts/sync-legal.mjs     # buildseitige KG-Rechtstextintegration
```

`incoming/` ist kein zweiter External-Task-Kanal. Cross-Repository-Kommunikation läuft ausschließlich über `external-tasks/` nach ECO-ARC-0006.

## Rechtstexte

Die folgenden Dokumente werden zentral aus dem Knowledge Graph bezogen:

- `DOC:KUE:LEGAL-IMPRINT-DE`
- `DOC:KUE:LEGAL-PRIVACY-DE`
- `DOC:KUE:LEGAL-TERMS-DE`

Der im Dokumentkörper deklarierte Draft-/Release-Status wird auf der Website sichtbar respektiert. Inhaltliche Änderungen erfolgen nicht lokal, sondern über einen External Task an `KG`.

## Links

- Website: https://kueper.com
- Autorenseite: https://thomas-kueper.de
- OverTime Archive: https://overtimearchive.org
- KUEPER-Ökosystem-Dashboard: https://kueper-ecosystem.vercel.app/dashboard

## Lizenz

© 2026 Thomas Peter Küper. Alle Rechte vorbehalten.

Schriftarten behalten ihre jeweiligen Lizenzen:

- Inter — SIL OFL 1.1
- Source Serif Pro — SIL OFL 1.1
- JetBrains Mono — Apache 2.0
