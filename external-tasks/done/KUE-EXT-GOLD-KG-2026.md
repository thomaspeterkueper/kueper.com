# KG-Auftrag: Gold-Transmutation
Status: done
Quelle: DOC:KUE:KUE-SCI-0100-2026-DE
Eigentümer: KUEPER Knowledge Graph

## Ziel
Kanonisches Dokument nur referenzieren, nicht duplizieren. Wissensknoten für Gold/Au-197, Quecksilber/Hg-198, Hg-197, Neutron, (n,2n)-Reaktion, Elektroneneinfang, D-T-Fusion, Isotopenproduktion, Kerntransmutation und Unternehmen Marathon Fusion prüfen bzw. anlegen.

## Relationen
- Hg-198 --(n,2n)--> Hg-197
- Hg-197 --Elektroneneinfang--> Au-197
- D-T-Fusion --liefert--> schnelle Neutronen
- KUE-SCI-0100-2026-DE --dokumentiert--> Forschungsstand der Gold-Transmutation
- Marathon Fusion --beansprucht, ungeprüft--> experimentellen Nachweis (Oktober 2026)

## Qualitätssicherung
Evidenzstatus auf Aussagenebene: gesicherte Kernphysik / Simulation 2025 / ungeprüfte Unternehmensbehauptung 2026. DOI/Quellenlink, Stichtag und Provenienz pflegen; keine unbelegten Ausbeuten oder technische Reife behaupten.

## Akzeptanzkriterien
Eindeutige Entitäten, quellengestützte Relationen, Dokument-ID-Mapping, keine kanonische Textkopie und nachvollziehbare Unsicherheitsklassifikation.

## Erledigt

2026-11-16 – KG-seitig erfüllt (kueper-knowledge-graph#254, Exporte `ontology-gold-transmutation-0.1.json`, `entity-registry-gold-transmutation-0.1.json`); Abschluss über EXT-KG-KUE-20261115-001.

## Umgesetzt

KUE-SCI-0100 verweist im Frontmatter auf die KG-IDs; Marathon Fusion bleibt bewusst Evidenzeintrag (`unverified_company_claim`), keine KG-Entität.
