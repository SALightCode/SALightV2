import { motion } from "framer-motion";
import PageShell from "../components/PageShell.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { services } from "../data/siteData.js";

export default function Leistungen() {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow">Leistungen</p>
        <h1>Maßgeschneiderte Lichtlösungen für Veranstaltungen.</h1>
        <p>
          Von der ersten Idee über die technische Planung bis zur Umsetzung vor Ort:
          SALight gestaltet Lichtkonzepte, die Ihre Location aufwerten und den
          Charakter Ihrer Veranstaltung sichtbar machen.
        </p>
      </section>

      <section className="section-shell page-grid-spacing">
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card glass"
                key={service.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="icon-box"><Icon size={28} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-spacing">
        <div className="split-layout">
          <div>
            <p className="eyebrow">Ablauf</p>
            <h2>Planung, Aufbau, Steuerung und Betreuung.</h2>
          </div>
          <p className="split-copy">
            SALight unterstützt Sie bei der Gestaltung Ihrer Location, der Auswahl
            passender Technik sowie bei der Steuerung und Programmierung komplexer
            Beleuchtungssysteme. Ziel ist eine Lichtstimmung, die professionell wirkt
            und zu Ihrem Event passt.
          </p>
        </div>
      </section>

      <ContactBlock />
    </PageShell>
  );
}
