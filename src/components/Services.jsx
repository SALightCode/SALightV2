import { motion } from "framer-motion";
import { services } from "../data/siteData.js";

export default function Services() {
  return (
    <section id="services" className="section-shell section-spacing">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Alles, was eine moderne Website braucht.</h2>
        <p>
          Kein Baukasten-Look. Die Website wird als klares digitales Produkt
          aufgebaut: visuell stark, schnell, responsiv und leicht erweiterbar.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              className="service-card glass"
              key={service.title}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <div className="icon-box">
                <Icon size={28} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
