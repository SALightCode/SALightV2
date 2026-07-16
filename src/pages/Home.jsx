import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { benefits } from "../data/siteData.js";

const coreServices = [
  "Individuelle Lichtkonzepte",
  "Moderne Lichttechnik",
  "Programmierung und Steuerung",
  "Professionelle Betreuung vor Ort"
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero home-hero section-shell">
        <div className="hero-content">
          <motion.p
            className="eyebrow pill"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Sparkles size={16} />
            SALight — Marwin Sawade
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Wir beleuchten nicht einfach Events.
            <span className="headline-accent">
              Wir erschaffen Atmosphäre.
            </span>
          </motion.h1>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
          >
            Maßgeschneiderte Lichttechnik für Feiern, Firmenveranstaltungen,
            Locations und besondere Momente. Von der ersten Idee bis zur
            programmierten Lichtszene entwickelt SALight Lösungen, die Ihre
            Veranstaltung sichtbar aufwerten.
          </motion.p>

          <motion.div
            className="hero-actions hero-main-actions"
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
          >
            <Link className="btn btn-primary btn-large" to="/eventanfragen">
              Event anfragen
              <ArrowRight size={20} />
            </Link>

            <Link className="btn btn-secondary btn-large" to="/ueber-salight">
              Über SALight
            </Link>
          </motion.div>

          <motion.div
            className="hero-service-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {coreServices.map((service) => (
              <div key={service}>
                <CheckCircle2 size={18} />
                <span>{service}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18 }}
        >
          <div className="light-source" />
          <div className="light-beam beam-left" />
          <div className="light-beam beam-center" />
          <div className="light-beam beam-right" />

          <div className="stage-smoke stage-smoke-one" />
          <div className="stage-smoke stage-smoke-two" />

          <div className="stage-content glass">
            <span className="stage-label">SALight</span>

            <strong>
              Lichttechnik, die Räume verändert und Momente inszeniert.
            </strong>

            <p>
              Planung · Technik · Programmierung · Betreuung
            </p>
          </div>
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Warum SALight?</p>

          <h2>
            Persönliche Planung und Lichtlösungen, die zu Ihrem Event passen.
          </h2>

          <p>
            SALight verbindet technische Kompetenz mit einem klaren Gespür für
            Raum, Stimmung und Wirkung.
          </p>
        </div>

        <div className="service-grid">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="service-card glass"
                key={item.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="icon-box">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <ContactBlock />
    </PageShell>
  );
}
