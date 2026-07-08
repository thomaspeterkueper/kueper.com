# External Task: Document Architecture Consensus

Status: open
Requester: SolarScienceFoundation / SSF
Target repository: kueper.com
Created: 2026-07-08
Type: architecture-consensus-request

## Purpose

SSF needs a shared document architecture before it builds more document-driven learning features.

The current assumption is that kueper.com should be the canonical public document and publication layer of the KUEPER ecosystem, while SSF remains the learning platform.

This task asks kueper.com to confirm, correct, or reject that assumption.

## Context

Proposed ecosystem responsibilities:

- kueper-knowledge-graph: knowledge entities, relations, mappings, identifiers, KXF.
- kueper.com: canonical documents, publications, essays, books, standards, specs, guides.
- overtime-archive.org: in-universe or archive-style documents and fictional mirrors.
- solarsciencefoundation: learning modules, exercises, progress, learning paths.
- noxiagame: application/game consumption of SSF progress.

## Requested kueper.com Clarification

Please confirm or correct:

1. Should kueper.com own canonical document bodies?
2. Which document types belong here?
   - books
   - essays
   - whitepapers
   - specifications
   - standards
   - organization documents
   - research notes
   - guides
   - public source documents for SSF modules
3. What metadata should every canonical document expose?
4. How should documents be versioned?
5. How should translations be represented?
6. Should documents expose stable IDs for KG, OTA, SSF, and NOXIA references?
7. Should published documents have machine-readable metadata for downstream consumers?

## Proposed Principle For Review

kueper.com owns canonical public document content.

Other repositories should not duplicate or silently fork these documents. They should reference document IDs or build derived views.

## Expected Output

A short decision note in this repository that states:

- whether kueper.com is the canonical document owner
- accepted document types
- required metadata
- versioning expectations
- open questions for KG, OTA, and SSF

## Downstream Dependency

SSF should not finalize its document-source schema until kueper.com confirms how canonical document IDs and URLs should work.
