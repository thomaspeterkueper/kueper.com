# Forschungsentwurf: Neurobiologische Systemforschung

Status: research_candidate / internal_review
Erfasst: 2026-11-17
Verantwortliche Ebene: kueper.com (wissenschaftlicher Dokumentkörper)
Kanonisierung: ausstehend; keine DOC:KUE-ID vergeben
Publikation: nicht freigegeben
Evidenz: präklinisch (Mausmodelle, experimentelle Zell- und Proteomikanalysen)

## Leitfrage
Wie interagieren Blut-Hirn-Schranke, periphere Organe, Metabolismus, Immunsystem, Gliazellen und neuronale Netzwerke bei Gehirnalterung, Neurodegeneration und gegebenenfalls Bewusstseinskorrelaten?

## Forschungscluster
1. Neurovaskulärer Transport und selektive Blut-Hirn-Schranken-Funktion
2. Neuroimmunologie und gliale Regulation
3. Organ-Gehirn-Achsen (insbesondere Leber–Gehirn)
4. Synaptische Integrität, Lipidstoffwechsel und Neurodegeneration
5. Körper-Gehirn-Kopplung und Bewusstseinsforschung (als eigene Hypothesenebene)
6. Kausale, mechanistische und computationale Modelle mit strikten Evidenzgrenzen

## Initialer Studienanker
Zhou, Haoyue, et al. (2026-11-11). *The blood-brain barrier imports diverse neuroprotective proteins through pathways impaired early in Alzheimer's disease models*. Cell.
DOI: https://doi.org/10.1016/j.cell.2026.10.039
PubMed: https://pubmed.ncbi.nlm.nih.gov/43014307/

### Befunde und Einordnung
- In dem experimentellen Protein-Tracking-Ansatz wurden 861 Blutproteine untersucht. 92 konnten im Hirnparenchym nachgewiesen werden. Das Abstract der Arbeit beschreibt außerdem, dass die gesunde Blut-Hirn-Schranke 191 Plasmaproteine aufnimmt bzw. sondiert; diese Zahl ist nicht mit den 861 insgesamt untersuchten Proteinen gleichzusetzen.
- APOA1 gelangt nach den experimentellen Daten über SR-B1 über die Blut-Hirn-Schranke und interagiert anschließend mit ABCA1 in Astrozyten; der Cholesterinefflux steht mit synaptischer Integrität in Zusammenhang.
- In Alzheimer-Modellen ist der Import schützender Proteine früh beeinträchtigt, noch bevor eine allgemeine Barrierestörung erkennbar wird.
- Experimentelle APOA1-Manipulation zeigte in den untersuchten Modellen günstige Effekte auf Krankheitsmerkmale.

### Evidenzgrenzen
- Primär präklinisch. Keine klinisch belegte Alzheimertherapie durch APOA1-Anhebung.
- Selektive Transportstörung ist nicht gleichbedeutend mit allgemeiner Blut-Hirn-Schranken-Leckage.
- Die Studie begründet weder, dass Alzheimer ausschließlich eine Organ-Gehirn-Versorgungsstörung ist, noch eine Bewusstseinstheorie.
- Für jede Übertragung auf Menschen, allgemeine Alterungsmodelle oder NPCs sind eigenständige Evidenzbewertungen nötig; EXTRAPOLATED_TO darf keine Evidenz vererben.

## Vorgeschlagene Forschungsfragen
- Welche Rezeptorpaare vermitteln zielzelltypischen Import peripherer Proteine?
- Wie früh verändert sich dieser Transport bei unterschiedlichen Alterungs- und Alzheimer-Modellen?
- Welche kausale Rolle spielt der astrozytäre Cholesterintransport für Synapsen?
- Lassen sich passive Barriereschäden von spezifischen Transportdefiziten sauber differenzieren?
- Welche Befunde zu Leber-Gehirn-Kommunikation sind beim Menschen repliziert?

## Vorgeschlagene semantische Entitäten (noch nicht angelegt)
Study: Zhou2026_Cell_BBB_ProteinImport
ResearchFinding: BBB_SelectiveProteinImport; ADModel_EarlyTransportImpairment
MechanismCandidate: APOA1_SR-B1_ABCA1_Astrocyte_CholesterolEfflux
BiologicalContext: Mouse; AlzheimerModel; Astrocyte; BBB; Liver
EvidenceAssessment: preclinical_mechanistic

Mögliche Relationen:
APOA1 --TRANSPORTED_ACROSS_VIA--> BBB/SR-B1
APOA1 --ENGAGES--> Astrocyte/ABCA1
ABCA1 --REGULATES--> CholesterolEfflux
CholesterolEfflux --SUPPORTS--> SynapseIntegrity
ADModel --ASSOCIATED_WITH--> EarlySelectiveImportImpairment

## Integrationsgrenzen und nächste Gates
1. Fachreview und Prüfung der Primärarbeit, Methoden und Limitationen.
2. Nach Review: kanonischen KUE-Forschungsanker mit regelkonformer ID/Dokumentmetadaten anlegen.
3. Danach Knowledge-Graph-Einträge mit Provenienz, Forschungsstand und Evidenzstatus prüfen und deduplizieren.
4. Erst danach optionale SSF-Lerninhalte und NOXIA-Hypothesen-/Simulationsanker, ohne medizinische Therapiebehauptung oder automatische NPC-Physiologieänderung.
5. Omnizedenz-Verbindung nur als philosophische Interpretation, explizit nicht als empirischer Beleg.

Dieser Entwurf ist keine Freigabe für Veröffentlichung, Merge, Datenbankmigration oder Simulation.
