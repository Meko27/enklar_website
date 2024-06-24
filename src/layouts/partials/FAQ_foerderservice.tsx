import React from "react";
import Accordion from "@/shortcodes/Accordion";

const FAQ_foerderung: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-8 text-center md:col-12 lg:col-12 xl:col-8">
          <h2 className="mb-8">Häufig gestellte Fragen</h2>
        </div>

        <Accordion title="Warum ist eine Heizlastberechnung wichtig?">
        <p style={{ marginBottom: '16px' }}>Eine Heizlastberechnung ist für die Förderung durch die KfW zwingend erforderlich. Folgende Aspekte deckt die Heizlast ab.</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Energieeffizienz: Die neue Heizung sollte weder über- noch unterdimensioniert werden. Die Heizalst bestimmt die notwendige Leistung der neuen Heizung.</li>
            <li>Kostensenkung: Um die Investitions- und Betriebskosten zu optimieren. Eine präzise Berechnung hilft dabei, die richtige Größe der Heizungsanlage zu bestimmen, was sowohl die Anschaffungs- als auch die Betriebskosten reduziert.</li>
            <li>Komfort: Um ein angenehmes Raumklima zu gewährleisten, indem die Heizungsanlage die Räume gleichmäßig und ausreichend beheizt.</li>
          </ul>
        </Accordion>

        <Accordion title="Wer ist berechtigt einen Antrag zu stellen?">
          <p style={{ marginBottom: '16px' }}>Aktuell sind folgende Gruppen antragsberechtigt:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
            <li>Privatpersonen, die Eigentümer von bestehenden selbstbewohnten (Haupt- oder alleinige Wohnsitz) Einfamilienhäusern in Deutschland sind.</li>
            <li>Privatpersonen, die Eigentümer von bestehenden Mehrfamilienhäusern (mit mehr als einer Wohneinheit) sind sowie Wohnungseigentümergemeinschaften (WEG) in Deutschland, sofern Maßnahmen am Gemeinschaftseigentum umgesetzt werden.</li>
          </ul>
          <p>Ab Ende August 2024 sind Privatpersonen antragsberechtigt, die Eigentümer von vermieteten oder nicht selbstgenutzen Einfamilienhäusern sowie Eigentumswohnungen in Wohnungs¬eigentümer¬gemein¬schaften in Deutsch¬land sind, sofern Maß¬nahmen am Sondereigentum umgesetzt werden</p>
        </Accordion>

        <Accordion title="Bin ich förderberechtigt, wenn ich die Immobilie nur teilweise selbstbewohne?">
        <p style={{ marginBottom: '16px' }}>Bei Mehrfamilienhäusern richtet sich die Höhe der förderfähigen Kosten wie folgt nach der Anzahl der Wohneinheiten:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
            <li>30.000 Euro für die erste Wohneinheit.</li>
            <li>Jeweils 15.000 Euro für die zweite bis sechste Wohneinheit.</li>
            <li>Jeweils 8.000 Euro ab der siebten Wohneinheit.</li>
          </ul>
        </Accordion>

        <Accordion title="Wofür brauche ich eine BzA?">
        <p style={{ marginBottom: '16px' }}>Bei Mehrfamilienhäusern richtet sich die Höhe der förderfähigen Kosten wie folgt nach der Anzahl der Wohneinheiten:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
            <li>30.000 Euro für die erste Wohneinheit.</li>
            <li>Jeweils 15.000 Euro für die zweite bis sechste Wohneinheit.</li>
            <li>Jeweils 8.000 Euro ab der siebten Wohneinheit.</li>
          </ul>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ_foerderung;