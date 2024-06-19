import React from "react";
import Tabs from "@/shortcodes/Tabs"; 
import Tab from "@/shortcodes/Tab";

const Examples_foerderung: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-0 text-center md:col-12 lg:col-12 xl:col-8">
          <h2 className="mb-12">Förderbeispiele aus der Praxis</h2>
          <p className="mb-12">Schauen Sie sich gerne die beiden Beispiele aus der Praxis an, um die Heizungsförderung besser zu verstehen.</p>
        </div>
        <Tabs>
          <Tab name="Beispiel EFH">
            <h5 className="mt-4 mb-2"> Ausgangssituation</h5>
            <p className="lg:col-8">Familie Müller aus Hessen wohnt in einem Einfamilienhaus, möchte eine moderne Wärmepumpe installieren lassen.</p>
            <h5 className="mt-4 mb-2"> Eckdaten</h5>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
              <li><strong>Bestehende Heizung:</strong> Gas-Zentralheizung</li>
              <li><strong>Geplante Heizung:</strong> Luft-Wasser-Wärmepumpe von der Firma Bosch</li>
              <li><strong>Was passiert mit der alten Heizung:</strong> Soll ersetzt werden</li>
              <li><strong>Gesamtkosten der neuen Wärmepumpe inkl. Installation:</strong> 30.000€</li>
              <li><strong>Haushaltsjahreseinkommen geringer als 40.000€:</strong> Nein</li>
            </ul>
            <h5 className="mt-4 mb-2"> Förderung</h5>
            <p>Der Förderzuschuss errechnet sich wie folgt:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
              <li><strong>30% Grundförderung</strong></li>
              <li><strong>20% Klimageschwindigkeitsbonus</strong> (wegen des Austausches)</li>
              <li><strong>5% Effizienzbonus</strong> (wegen des Einsatzes eines natürlichen Kältemittels)</li>
              <li><strong>Maximal förderfähige Kosten: 30.000€</strong> (bei einer Wohneinheit)</li>
            </ul>
            <p>Familie Müller erhält somit einen Föderzuschuss von <strong>55%</strong> und demnach <strong>16.500€</strong> zurück.</p>
            <p>Familie Müller zahlt also nur <strong>13.500€</strong> für ihre neue Wärmepumpe.</p>
          </Tab>
          <Tab name="Beispiel MFH">
            <h5 className="mt-4 mb-2"> Ausgangssituation</h5>
            <p className="lg:col-8">Herr Wagner aus Niedersachsen besitzt ein voll-vermietetes Mehrfamilienhaus.</p>
            <p className="lg:col-8">Der Ölkessel des Hauses soll nun durch eine klimafreundliche Wärmepumpe ersetzt werden.</p>
            <h5 className="mt-4 mb-2"> Eckdaten</h5>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
              <li><strong>Bestehende Heizung:</strong> Ölkessel</li>
              <li><strong>Geplante Heizung:</strong> Luft-Wasser-Wärmepumpe von der Firma Daikin</li>
              <li><strong>Was passiert mit der alten Heizung:</strong> Soll ersetzt werden</li>
              <li><strong>Gesamtkosten der neuen Wärmepumpe inkl. Installation:</strong> 49.000€</li>
              <li><strong>Anzahl der Wohneinheiten:</strong> 8</li>
            </ul>
            
            <h5 className="mt-4 mb-2"> Förderung</h5>
            <p>Bei Mehrfamilienhäusern richtet sich die Höhe der förderfähigen Kosten nach der Anzahl der Wohneinheiten:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
              <li>30.000€ für die erste Wohneinheit</li>
              <li>jeweils 15.000€ für die zweite bis sechste Wohneinheit</li>
              <li>jeweils 8.000€ ab der siebten Wohneinheit</li>
            </ul>
            <p>Damit ergibt sich folgende Förderung:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
              <li><strong>30% Grundförderung</strong> (für vermietete Häuser ist dies die maximale Förderquote)</li>
              <li><strong>Förderfähige Kosten: 121.000€</strong></li> (errechnet sich 30.000 + 15.000 x 5 + 8.000 x 2 = 121.000€)
            </ul>
            <p>Herr Wagner erhält somit einen Föderzuschuss von <strong>30%</strong> und demnach <strong>14.700€</strong> zurück.</p>
            <p>Herr Wagner zahlt also nur <strong>34.300€</strong> für die neue Wärmepumpe.</p>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Examples_foerderung;