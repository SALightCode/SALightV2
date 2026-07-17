import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  UserRound
} from "lucide-react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";

const values = [
  {
    icon: Lightbulb,
    title: "Individuelle Konzepte",
    text: "Jede Veranstaltung ist einzigartig. Deshalb entwickle ich Lichtkonzepte, die exakt zur Location, zum Ablauf und zur gewünschten Atmosphäre passen."
  },
  {
    icon: Cpu,
    title: "Moderne Technik",
    text: "Zuverlässige Veranstaltungstechnik und eine saubere Programmierung bilden die Grundlage für professionelle Lichtinszenierungen."
  },
  {
    icon: UserRound,
    title: "Persönliche Betreuung",
    text: "Von der ersten Idee bis zur letzten Lichtszene begleite ich jedes Projekt persönlich und bleibe Ihr direkter Ansprechpartner."
  },
  {
    icon: ShieldCheck,
    title: "Qualität bis ins Detail",
    text: "Saubere Planung, zuverlässige Technik und eine professionelle Umsetzung sorgen dafür, dass am Veranstaltungstag alles funktioniert."
  }
];

const timeline = [
  {
    year: "2019",
    title: "Beginn als Lightjockey",
    text: "Mein Einstieg in die Eventtechnik begann am Lichtpult. Dort lernte ich, wie stark Licht die Wirkung einer Veranstaltung prägt."
  },
  {
    year: "Danach",
    title: "Eigenes Equipment",
    text: "Mit wachsender Erfahrung investierte ich Schritt für Schritt in eigene Technik und begann, individuelle Lichtkonzepte selbst umzusetzen."
  },
  {
    year: "Heute",
    title: "Große und mehrtägige Veranstaltungen",
    text: "SALight betreut heute Geburtstage, Gartenpartys, Hochzeiten, größere Produktionen, Kofferjobs und Veranstaltungen mit einer Dauer von bis zu fünf Tagen."
  }
];

export default function UeberSALight() {
  return (
    <PageShell>
      <section className="page-hero section-shell about-hero">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Über SALight</p>

          <h1>
            Lichttechnik aus Leidenschaft.
            <span className="headline-accent">Seit 2019.</span>
          </h1>

          <p>
            Hinter SALight stehen persönliche Betreuung, Leidenschaft für
            Veranstaltungstechnik und der Anspruch, aus jeder Veranstaltung
            ein besonderes Erlebnis zu machen.
          </p>
        </motion.div>

        <motion.div
          className="about-hero-image glass"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <img
            src="/images/about/marwin-1.jpg"
            alt="Marwin Sawade von SALight"
          />
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <div className="about-intro-grid">
          <motion.div
            className="about-image-card glass"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <img
              src="/images/about/marwin-2.jpg"
              alt="Marwin Sawade bei der Arbeit mit Lichttechnik"
            />
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow">Wer steckt hinter SALight?</p>

            <h2>Mein Name ist Marwin Sawade.</h2>

            <p>
              Ich bin 25 Jahre alt und Gründer von SALight. Technik begeistert
              mich schon mein ganzes Leben. Besonders fasziniert mich die
              Verbindung aus Technik, Kreativität und der Möglichkeit, mit
              Licht eine ganz eigene Atmosphäre zu schaffen.
            </p>

            <p>
              Im Jahr 2019 begann mein Weg in der Veranstaltungstechnik als
              Lightjockey. Dabei lernte ich, wie entscheidend Licht für die
              Wirkung einer Veranstaltung ist und welchen Unterschied ein
              durchdachtes Lichtkonzept machen kann.
            </p>

            <p>
              Mit wachsender Erfahrung entstand der Wunsch, eigene Ideen
              umzusetzen. Deshalb investierte ich Schritt für Schritt in eigenes
              Equipment und entwickelte individuelle Lichtlösungen für
              unterschiedlichste Veranstaltungen.
            </p>

            <p>
              Heute betreut SALight Events jeder Größenordnung: von
              Geburtstagen und Gartenpartys über Hochzeiten bis hin zu
              mehrtägigen Veranstaltungen, größeren Produktionen und
              professionellen Kofferjobs.
            </p>

            <div className="about-checks">
              <div>
                <CheckCircle2 size={19} />
                Persönliche Projektbetreuung
              </div>

              <div>
                <CheckCircle2 size={19} />
                Individuelle Lichtkonzepte
              </div>

              <div>
                <CheckCircle2 size={19} />
                Zuverlässige technische Umsetzung
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-spacing">
        <motion.div
          className="about-quote glass"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={28} />

          <blockquote>
            Licht schafft nicht nur Helligkeit.
            <span>Licht schafft Emotionen.</span>
          </blockquote>
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Meine Philosophie</p>

          <h2>
            Keine Standardlösung, sondern ein Lichtkonzept mit eigenem
            Charakter.
          </h2>

          <p>
            Jede Veranstaltung hat andere Anforderungen. Deshalb entstehen bei
            SALight Lösungen, die technisch zuverlässig sind und gleichzeitig
            genau die gewünschte Stimmung erzeugen.
          </p>
        </div>

        <div className="service-grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                className="service-card glass"
                key={value.title}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="icon-box">
                  <Icon size={28} />
                </div>

                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Entwicklung</p>

          <h2>Vom Lightjockey zur eigenen Eventtechnik.</h2>
        </div>

        <div className="about-timeline">
          {timeline.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="timeline-icon">
                <CalendarDays size={22} />
              </div>

              <div className="timeline-year">{item.year}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing about-cta-section">
        <motion.div
          className="contact-card glass"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Ihr Event</p>

          <h2>
            Lassen Sie uns Ihre Veranstaltung ins perfekte Licht setzen.
          </h2>

          <p>
            Gemeinsam entwickeln wir eine Lichtlösung, die zu Ihrer Location,
            Ihrem Ablauf und Ihren Vorstellungen passt.
          </p>

          <div className="hero-actions about-cta-actions">
            <Link className="btn btn-primary btn-large" to="/eventanfragen">
              Event anfragen
            </Link>

            <Link className="btn btn-secondary btn-large" to="/leistungen">
              Leistungen ansehen
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
