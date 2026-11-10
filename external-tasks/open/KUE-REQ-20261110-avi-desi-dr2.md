---
id: KUE-REQ-20261110-001
title: KUE-SCI-0001 (AVI) – Folgen des DESI-DR2-Beobachtungsstands für den Arbeitsansatz
status: open
source: KUE
target: KUE
created: 2026-11-10
requested_by: Claude (Begutachtung nach ECO-ARC-0037)
priority: medium
affects: [KUE]
supersedes: []
---

# KUE-REQ-20261110-001 – KUE-SCI-0001 „AVI – Axiomatisches Vakuum-Integral“: Folgen des DESI-DR2-Beobachtungsstands

Status: open
Quelle: Begutachtung nach ECO-ARC-0037 (Claude)
Prüfbericht: `kueper-ecosystem/reviews/2026-11-10-KUE-SCI-0001-2026-DE.md`
Claude-Status: wartet auf Thomas

## Anlass

Begutachtung nach ECO-ARC-0037 vom 2026-11-10. AVI ist ein eigenes Modell von Thomas – der Theorieteil wurde nicht angefasst. Direkt umgesetzt (v1.4.1) wurden nur der Beobachtungsstand in §13.5 und Literaturkorrekturen. Die folgenden Punkte berühren den Arbeitsansatz selbst und brauchen eine Entscheidung von Thomas.

## Befunde

- DESI DR2 (DESI Collaboration, Abdul-Karim et al. 2025, arXiv:2503.14738, DOI 10.1103/tr6y-kpc6): Im CPL-Modell bevorzugen BAO + CMB w₀ > −1, w_a < 0 gegenüber ΛCDM mit 3,1σ, mit Supernovae 2,8–4,2σ je nach SN-Stichprobe. [R, nicht gesichert]
- Übersicht Turyshev (2026, arXiv:2602.05368, Preprint): Die Präferenz ist datensatzabhängig; DES-Dovekie-Neukalibrierung schwächt sie ab, Re-Analysen sehen den Treiber im niedrigsten Rotverschiebungsbereich (möglicherweise z ≲ 0,1); kanonische Einfeld-Quintessenz kann w < −1 nicht erreichen, nicht-phantome Dynamik bleibt aber mit den Daten verträglich; CPL ist eine Kompression, kein physikalisches Modell. [T]

## Vorschläge (Entscheidung Thomas)

1. **§13.5 Energiebedingungen:** Der Arbeitsansatz verlangt w_vac ≥ −1 (WEC). Die CPL-Bestfits mit w₀ > −1 und w_a < 0 kreuzen in die Phantomzone (w < −1 bei höherer Rotverschiebung). Klären, ob AVI die WEC als Axiom hält (dann: Hinweis, dass AVI nur die nicht-phantomen Lesarten der DESI-Daten abdecken kann) oder sie als offen markiert.
2. **Ausweg B (v1.5, w_vac = w_vac(Φ)):** Die DESI-Präferenz für eine zeitlich veränderliche Zustandsgleichung ist ein möglicher erster Prüfstein für w_vac(Φ). Vorschlag: In §13.7 als sekundär offenen Punkt „Abgleich mit DESI DR2/DR3 (nicht über CPL, sondern direkt über H(z), D_M/r_d, D_H/r_d)“ aufnehmen.
3. **§VII.2 Observablen:** Vorhersagen für BAO-Abstände sind dort noch offen; mit DR2 liegen Messungen bei 0,1 < z < 4,2 vor. Nur Hinweis, keine Änderung ohne Entscheidung.
4. **§6.1 Running Vacuum:** Solà Peracaula und Mitautoren haben Running-Vacuum-Modelle direkt an DESI-Daten angepasst. Prüfen, ob die Abgrenzung „markovsch“ dort noch zutrifft – nur mit eigener Recherche und Entscheidung von Thomas ergänzen.

## Betroffene Repositories

- `kueper.com` (KUE-SCI-0001, ggf. KUE-PHI-0001). Keine Wirkung auf andere Repositories erkannt; OTA verweist nicht auf KUE-SCI-0001.

## Erwartetes Ergebnis

Thomas entscheidet zu 1–4; danach Umsetzung mit Versionssprung und Revisionsvermerk.
