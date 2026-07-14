# REQ-KG-LEGAL-ACCESS-20260710 — Zentrale Rechtstexte aus dem KG beziehen

## Status
Done · 2026-07-14

## Ergebnis

Die Rechtstextintegration wurde buildseitig umgesetzt:

- `scripts/sync-legal.mjs` löst die drei Dokument-IDs über `exports/document-references-0.1.json` auf.
- Verantwortlichen-Daten stammen aus `registry/legal/impressum-master.json`.
- Datenschutz und Nutzungsbedingungen stammen aus den dort referenzierten KG-Markdown-Dateien.
- Platzhalter werden beim Build ersetzt.
- Die Website führt keine clientseitigen KG- oder GitHub-Abfragen aus.
- Fehlende Quellen lassen den Sync und damit den Build fehlschlagen.
- Impressum, Datenschutz und Nutzungsbedingungen werden lokal gerendert und im Footer verlinkt.
- Der im Dokumentkörper deklarierte Freigabestatus wird sichtbar ausgewiesen.

## Offener Governance-Hinweis

Die KG-Registry führt die Referenzen als `canonical`, während Datenschutz und Nutzungsbedingungen im Dokumentkörper weiterhin `draft_productive` und „nicht juristisch freigegeben“ deklarieren. kueper.com behandelt deshalb den Dokumentkörper als maßgeblich für die öffentliche Statusanzeige und behauptet keine juristische Freigabe.

## Betroffene Dateien

- `scripts/sync-legal.mjs`
- `src/generated/legal.json`
- `src/components/LegalDocument.astro`
- `src/pages/impressum.astro`
- `src/pages/datenschutz.astro`
- `src/pages/nutzungsbedingungen.astro`
- `src/components/Navigation.astro`
- `package.json`
