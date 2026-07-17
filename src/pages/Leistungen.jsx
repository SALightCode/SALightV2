import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  MessageSquareText,
  Music2,
  PartyPopper,
  Settings2,
  Sparkles,
  Truck,
  UsersRound,
  Wrench
} from "lucide-react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";

const services = [
  {
    icon: PartyPopper,
    title: "Geburtstage",
    image: "/images/services/geburtstage.jpg",
    alt: "Lichttechnik auf einer Geburtstagsfeier",
    text: [
      "Wir verwandeln Ihre Geburtstagsfeier in ein unvergessliches Erlebnis. Mit individuellen Lichtshows schaffen wir genau die Atmosphäre, die zu Ihnen und Ihren Gästen passt.",
      "Ob gemütlich und entspannt, stilvoll und elegant oder lebendig und ausgelassen: Die Beleuchtung wird auf Ihre Location, den Ablauf und die gewünschte Stimmung abgestimmt."
    ]
  },
  {
    icon: Sparkles,
    title: "Hochzeiten",
    image: "/images/services/hochzeiten.jpg",
    alt: "Stimmungsvolle Beleuchtung auf einer Hochzeit",
    text: [
      "Ihr besonderer Tag verdient eine besondere Beleuchtung. Unsere Lichtlösungen unterstreichen die romantische Atmosphäre Ihrer Hochzeit und schaffen eine eindrucksvolle Kulisse für Ihre Feier.",
      "Vom Empfang über den ersten Tanz bis zur letzten Runde auf der Tanzfläche sorgt SALight für die passende Lichtstimmung und eine Atmosphäre, die in Erinnerung bleibt."
    ]
  },
  {
    icon: Music2,
    title: "Events & Konzerte",
    image: "/images/services/events-konzerte.jpg",
    alt: "Lichtshow bei einem Event oder Konzert",
    text: [
      "Bei Events und Konzerten ist Lichttechnik ein wesentlicher Bestandteil der Gesamtwirkung. SALight arbeitet eng mit Veranstaltern, Künstlern und weiteren Dienstleistern zusammen.",
      "Vom kleinen Clubkonzert über Firmenveranstaltungen bis hin zu mehrtägigen Produktionen entsteht eine Lichtshow, die das Publikum fesselt und die Performance wirkungsvoll unterstützt."
    ]
  },
  {
    icon: Settings2,
    title: "Programmierung & Beratung",
    image: "/images/services/programmierung-beratung.jpg",
    alt: "Programmierung eines professionellen Lichtsystems",
    text: [
      "Unsere Leistungen umfassen die Einrichtung und Steuerung von Beleuchtungssystemen, die Programmierung individueller Lichtshows und die Anpassung der Technik an die Anforderungen Ihrer Veranstaltung.",
      "Dabei begleitet SALight Sie von der ersten Beratung über die technische Planung bis zur Durchführung vor Ort."
    ]
  }
];

const processSteps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Anfrage",
    text: "Sie senden die wichtigsten Eckdaten Ihrer Veranstaltung. Dazu gehören beispielsweise Datum, Veranstaltungsort, Art des Events, Gästezahl und erste Wünsche."
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Persönliches Gespräch",
    text: "In einem persönlichen Gespräch klären wir Ihre Vorstellungen, die gewünschte Atmosphäre, den Ablauf und die technischen Rahmenbedingungen."
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Planung & Lichtkonzept",
    text: "Auf Grundlage Ihrer Wünsche entsteht ein individuelles Konzept, das auf die Location, das Programm und die gewünschte Wirkung abgestimmt ist."
  },
  {
    icon: ClipboardList,
    number: "04",
    title: "Angebot",
    text: "Sie erhalten ein transparentes und nachvollziehbares Angebot. Ergänzungen, Änderungen und neue Ideen können anschließend gemeinsam abgestimmt werden."
  },
  {
    icon: Wrench,
    number: "05",
    title: "Vorbereitung",
    text: "Technik, Lichtstimmungen, Szenen und Abläufe werden sorgfältig vorbereitet, programmiert und vor dem Einsatz geprüft."
  },
  {
    icon: Truck,
    number: "06",
    title: "Aufbau",
    text: "Am Veranstaltungsort übernimmt SALight den fachgerechten Aufbau, die Einrichtung und die vollständige Funktionsprüfung der Lichttechnik."
  },
  {
    icon: CalendarCheck,
    number: "07",
    title: "Durchführung",
    text: "Während der Veranstaltung wird die Lichttechnik gesteuert und überwacht. Kurzfristige Wünsche können – soweit technisch und zeitlich möglich – flexibel umgesetzt werden."
  },
  {
    icon: CheckCircle2,
    number: "08",
    title: "Rückbau",
    text: "Nach dem Ende der Veranstaltung übernimmt SALight den vollständigen und sicheren Rückbau der eingesetzten Technik."
  }
];

export default function Leistungen() {
  return (
    <PageShell>
      <section className="page-hero section-shell services-hero">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Leistungen</p>

          <h1>
            Ihr Event im Rampenlicht.
            <span className="headline-accent">
              Individuell geplant und professionell umgesetzt.
            </span>
          </h1>

          <p>
            SALight bietet maßgeschneiderte Lichttechnik für Geburtstage,
            Hochzeiten, Events, Konzerte und professionelle Produktionen.
            Von der ersten Idee bis zur letzten programmierten Lichtszene.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary btn-large" to="/eventanfragen">
              Event anfragen
              <ArrowRight size={20} />
            </Link>

            <Link className="btn btn-secondary btn-large" to="/equipment">
              Equipment ansehen
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="services-hero-visual glass"
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="services-light-source" />
          <div className="services-light-beam beam-one" />
          <div className="services-light-beam beam-two" />
          <div className="services-light-beam beam-three" />

          <div className="services-hero-card">
            <span>SALight</span>
            <strong>
              Lichttechnik für Atmosphäre, Emotion und Wirkung.
            </strong>
          </div>
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Einsatzbereiche</p>

          <h2>
            Lichtlösungen für private Feiern und professionelle Veranstaltungen.
          </h2>

          <p>
            Jede Veranstaltung hat einen eigenen Charakter. Deshalb werden
            Technik, Lichtstimmung und Betreuung individuell auf Ihre Wünsche
            abgestimmt.
          </p>
        </div>

        <div className="services-showcase">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                className={`service-feature glass ${
                  reverse ? "service-feature-reverse" : ""
                }`}
                key={service.title}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="service-feature-image">
                  <img src={service.image} alt={service.alt} />

                  <div className="service-feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="service-feature-copy">
                  <div className="icon-box">
                    <Icon size={28} />
                  </div>

                  <h3>{service.title}</h3>

                  {service.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <Link className="service-inline-link" to="/eventanfragen">
                    Leistung anfragen
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Projektablauf</p>

          <h2>
            Von der ersten Anfrage bis zum sicheren Rückbau.
          </h2>

          <p>
            Eine strukturierte Planung schafft Sicherheit. Gleichzeitig bleibt
            während des gesamten Projekts Raum für neue Ideen, Änderungen und
            zusätzliche Wünsche.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process-card glass"
                key={step.number}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.58,
                  delay: (index % 4) * 0.07
                }}
              >
                <div className="process-card-top">
                  <div className="process-icon">
                    <Icon size={22} />
                  </div>

                  <span>{step.number}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="process-note glass"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <Sparkles size={25} />

          <div>
            <strong>Ihre Wünsche stehen jederzeit im Mittelpunkt.</strong>

            <p>
              Während der Planung, der Vorbereitung und auch am
              Veranstaltungstag können Anpassungen und neue Ideen eingebracht
              werden. Soweit technisch und zeitlich möglich, reagiert SALight
              flexibel auf Ihre Wünsche.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <motion.div
          className="contact-card glass"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Ihr nächstes Event</p>

          <h2>
            Lassen Sie uns gemeinsam Ihre Veranstaltung ins perfekte Licht
            setzen.
          </h2>

          <p>
            Beschreiben Sie kurz Ihr Event und Ihre Wünsche. SALight entwickelt
            daraus eine individuelle technische und gestalterische Lösung.
          </p>

          <div className="hero-actions services-cta-actions">
            <Link className="btn btn-primary btn-large" to="/eventanfragen">
              Jetzt Event anfragen
              <ArrowRight size={20} />
            </Link>

            <Link className="btn btn-secondary btn-large" to="/equipment">
              Verfügbares Equipment
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
