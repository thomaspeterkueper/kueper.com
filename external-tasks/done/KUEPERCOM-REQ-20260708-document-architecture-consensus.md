# External Task: Document Architecture Consensus

Status: done
Requester: SolarScienceFoundation / SSF
Target repository: kueper.com
Created: 2026-07-08
Completed: 2026-07-14
Type: architecture-consensus-request

## Purpose

SSF needs a shared document architecture before it builds more document-driven learning features.

The current assumption is that kueper.com should be the canonical public document and publication layer of the KUEPER ecosystem, while SSF remains the learning platform.

## Resolution

Answered by `kueper-ecosystem/decisions/ECO-ARC-0007-2026-DE.md`.

Binding result:

- `kueper.com` owns canonical public document bodies in the namespace `DOC:KUE:*`.
- The Knowledge Graph owns identities, mappings, relations and KXF references.
- Required document metadata includes a stable ID, title, status, language, version and a machine-readable `kg:` block.
- Versioning uses a stable document ID plus an explicit version.
- Translations are language variants of the same stable document identity.
- Downstream systems reference stable IDs and consume machine-readable metadata instead of duplicating canonical content.

## Closure

This request is superseded by the ecosystem-level decision and is closed. See also `EXT-ECO-KUE-20260712-002`.
