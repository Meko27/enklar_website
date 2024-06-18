import React from "react";
import Tabs from "@/shortcodes/Tabs"; 
import Tab from "@/shortcodes/Tab";


const Examples_foerderung: React.FC = () => {
    

    return (
      <section className="section">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:col-12 lg:col-12 xl:col-8">
        <h2 className="mb-12">Förderbeispiele aus der Praxis</h2>
        <p className="mb-12">Abhängig von der Anzahl der Wohneinheiten, kann es schonmal passieren den Überblick zu verlieren. Schauen Sie sich deshalb gerne die beiden Beispiele aus der Praxis an. </p>
        </div>
        <Tabs>
          <Tab name="Förderbeispiel Einfamilienhaus">
            <h4>Einbau einer Wärmepumpe im Einfamilienhaus</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </Tab>
          <Tab name="Förderbeispiel Mehrfamilienhaus">
            <h4>Einbau einer Wärmepumpe im Mehrfamilienhaus</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </Tab>
        </Tabs>
      </div>
    </section>
    );
};

export default Examples_foerderung;