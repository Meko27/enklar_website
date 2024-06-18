import React from "react";
import Accordion from "@/shortcodes/Accordion";

const FAQ_foerderung: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:col-12 lg:col-12 xl:col-8">
          <h2 className="mb-12">Häufig gestellte Fragen</h2>
        </div>
        <Accordion title="Wie funktioniert die Förderung für Einfamilienhäuser?">
          <p>
            Die Förderung für Einfamilienhäuser umfasst eine Vielzahl von Maßnahmen, darunter die Installation energieeffizienter Heizsysteme und die Dämmung von Gebäudehüllen. Eigentümer können Zuschüsse und zinsgünstige Kredite beantragen, um die Kosten dieser Maßnahmen zu decken.
          </p>
        </Accordion>
        <Accordion title="Welche Fördermöglichkeiten gibt es für Mehrfamilienhäuser?">
          <p>
            Mehrfamilienhäuser profitieren von speziellen Förderprogrammen, die darauf abzielen, die Energieeffizienz des gesamten Gebäudes zu verbessern. Dies kann durch die Modernisierung der Heizungsanlage, den Einbau neuer Fenster und Türen sowie die Dämmung der Fassade erreicht werden. Die Fördermittel sind gestaffelt und richten sich nach der Anzahl der Wohneinheiten.
          </p>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ_foerderung;