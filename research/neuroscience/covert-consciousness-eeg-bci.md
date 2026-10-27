# Verborgenes Bewusstsein: kognitiv-motorische Dissoziation, EEG-BCI und Verantwortung

**Stand:** 27.10.2026 · **Status:** Forschungsnotiz (keine klinische Leitlinie, kein kanonisches Publikationsdokument) · **Auftrag:** [#23](https://github.com/thomaspeterkueper/kueper.com/issues/23)

## Fragestellung

Kann eine Person nach schwerer akuter Hirnverletzung kognitiv auf Aufforderungen reagieren, obwohl keine sichtbare motorische Reaktion beobachtet wird? Wie lassen sich solche Fähigkeiten mittels nichtinvasiver EEG-Gehirn-Computer-Schnittstelle (BCI) erkennen und möglicherweise nutzbar machen?

## Quellen

- **Primärstudie:** Qi Shen et al., *Clinically unresponsive patients with acute brain injury activate a brain-computer interface*, *Brain* (2026), DOI: https://doi.org/10.1093/brain/awag210 .
- **Sekundärbericht:** https://www.welt.de/gesundheit/article6ad9e950d76437b82f935370/gehirn-forscher-entdecken-verborgenes-bewusstsein-und-machen-es-erstmals-nutzbar.html .
- Für die weitergehende Fachprüfung: Primärtext, Supplement, Patientenauswahl, statistische Auswertung, EEG-Klassifikation, Kontrollbedingungen und zwölfmonatige Nachbeobachtung einzeln auditieren.

## Berichtete Befunde

**[R]** In der berichteten klinischen Kohorte von **41** äußerlich nicht ansprechbaren Personen mit akuter Hirnverletzung konnten **13 (32 %)** eine EEG-basierte Schnittstelle durch vorgestellte Bewegungen beeinflussen. Das System nutzte eine Echtzeit-Rückkopplung über die Tonhöhe eines akustischen Signals. Dies ist eine experimentelle aktive BCI-Aufgabe, noch keine freie Kommunikation über Schmerzen, Wünsche oder Einwilligung.

**[R]** Klinisch wieder ansprechbar bei Entlassung: **4/13** der BCI-erfolgreichen gegenüber **1/28** der nicht erfolgreichen Gruppe. Funktionelle Selbstständigkeit nach zwölf Monaten: **6/13** gegenüber **2/28**. Die Zahlen beschreiben Gruppenassoziationen, keine kausale Wirkung der BCI auf Genesung; kleine Zellen, Selektion und mögliche Störfaktoren begrenzen Prognoseaussagen.

**[H]** Erfolgreiche BCI-Steuerung könnte ein Hinweis auf erhaltene kognitive Verarbeitung und eine künftig erweiterbare Kommunikationsmöglichkeit sein. Ein negativer Versuch schließt Bewusstsein nicht aus (Aufmerksamkeits-, Sprachverständnis-, Hör-, Ermüdungs- oder Signalqualitätsprobleme).

## Begriffliche Trennung

- **Wachheit/Arousal:** physiologischer Zustand, nicht identisch mit nachgewiesener bewusster Erfahrung.
- **Verhaltensreaktion:** von außen beobachtbare Antwort; ihr Fehlen ist kein direkter Nachweis fehlender Erfahrung.
- **Kognitiv-motorische Dissoziation (CMD):** Hinweise auf befehlsbezogene kognitive Verarbeitung trotz fehlender entsprechender äußerer Motorik.
- **EEG-BCI:** technische Erfassung und Übersetzung bestimmter Hirnsignalmuster in eine kontrollierbare Ausgabe; abhängig von Paradigma und Messqualität.
- **Bewusstsein:** klinisch und philosophisch mehrdeutiger Begriff; aus einem einzelnen positiven oder negativen Test nicht vollständig bestimmbar.

## Ethische und klinische Fragen

1. **Diagnostische Demut:** Nichtansprechbarkeit nicht vorschnell mit fehlender innerer Erfahrung gleichsetzen.
2. **Patientenwürde:** Bei Pflege, Ansprache, Schmerzmanagement und Angehörigenkommunikation diagnostische Unsicherheit berücksichtigen.
3. **Einwilligung:** Ein BCI-Tonhöhenexperiment ist keine validierte Ja/Nein-Kommunikation und erlaubt nicht automatisch autonome Behandlungsentscheidungen.
4. **Falsch negative und falsch positive Befunde:** Testwiederholung, unabhängige Methoden, Kalibrierung, Blindbedingungen und Fachbeurteilung prüfen.
5. **Prognose:** Assoziationen mit späterer Funktionalität nicht als sichere individuelle Vorhersage kommunizieren.

## Anschlussprojekte (Vorschläge, noch nicht implementiert)

- **Knowledge Graph:** Knoten für `cognitive_motor_dissociation`, `acute_brain_injury`, `EEG_BCI`, `motor_imagery`, `clinical_responsiveness`, `functional_independence`, `Shen_2026`. Quellengestützte, populationsgebundene Kanten: `Shen_2026 --reports--> BCI_control_13_of_41` [R], `BCI_success --associated_with--> later_functional_independence` [R, observational], `negative_BCI --proves--> absence_of_consciousness` **nicht anlegen**.
- **SSF:** Lernmodul „Wachheit, Bewusstsein, Reaktion und Kommunikation“ mit Fallbeispiel und Grenzen der EEG-Diagnostik.
- **Methusalem:** Fragestellung zu funktioneller Neuroregeneration und Rehabilitation nach Hirnverletzung, keine belegte Therapie.
- **Resonanzethik/Omnizedenz:** Ethische Folgerung: „Fehlende beobachtbare Antwort ist kein Beweis für fehlende innere Erfahrung.“ Keine metaphysische Behauptung als Studienbefund ausgeben.

## Evidenzlegende

**[R]** berichteter empirischer Befund; **[H]** offene Hypothese. Die Zahlen und Studienmethoden sind vor einer kanonischen Veröffentlichung gegen die vollständige Originalpublikation und das Supplement zu auditieren.
