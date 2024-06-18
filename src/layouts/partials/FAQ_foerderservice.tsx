import React from "react";
import Accordion from "@/shortcodes/Accordion";

const FAQ_foerderung: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:col-12 lg:col-12 xl:col-8">
          <h2 className="mb-12">Häufig gestellte Fragen</h2>
        </div>
        <Accordion title="Wer ist berechtigt einen Antrag zu stellen?">
          <p style={{ marginBottom: '16px' }}>Aktuell sind folgende Gruppen antragsberechtigt:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Privatpersonen, die Eigentümer von bestehenden selbstbewohnten (Haupt- oder alleinige Wohnsitz) Einfamilienhäusern in Deutschland sind.</li>
            <li>Privatpersonen, die Eigentümer von bestehenden Mehrfamilienhäusern (mit mehr als einer Wohneinheit) sind sowie Wohnungseigentümergemeinschaften (WEG) in Deutschland, sofern Maßnahmen am Gemeinschaftseigentum umgesetzt werden.</li>
          </ul>
          <p>Ab Ende August 2024 sind Privatpersonen antragsberechtigt, die Eigentümer von vermieteten oder nicht selbstgenutzen Einfamilienhäusern sowie Eigentumswohnungen in Wohnungs¬eigentümer¬gemein¬schaften in Deutsch¬land sind, sofern Maß¬nahmen am Sondereigentum umgesetzt werden</p>
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