import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";
import ProjectSection from "../components/ProjectSection.jsx";

import {
  projectCategories,
  softwareTools,
  workingMethods
} from "../data/projects.js";

export default function Referenzen() {
  return (
    <PageShell>
      <section className="page-hero section-shell references-hero">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Referenzen & Einsatzbereiche</p>

          <h1>
            Lichtkonzepte für unterschiedliche Veranstaltungen.
            <span className="headline-accent">
              Individuell geplant und professionell umgesetzt.
            </span>
          </h1>

          <p>
            Von privaten Gartenpartys über Clubbeleuchtung und Theater bis hin
            zu Konzerten und Bühnenproduktionen: Jede Veranstaltung stellt
            eigene Anforderungen an Technik, Programmierung und Atmosphäre.
          </p>
        </motion.div>

        <motion.div
          className="references-hero-visual glass"
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="references-light references-light-one" />
          <div className="references-light references-light-two" />
          <div className="references-light references-light-three" />

          <div className="references-smoke references-smoke-one" />
          <div className="references-smoke references-smoke-two" />

          <div className="references-hero-card">
            <span>SALight Projekte</span>

            <strong>
              Technik, Gestaltung und Live-Operating aus einer Hand.
            </strong>
          </div>
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Einsatzbereiche</p>

          <h2>
            Unterschiedliche Veranstaltungen. Ein gemeinsamer Anspruch.
          </h2>

          <p>
            Die folgenden Bereiche zeigen, wie vielseitig Lichttechnik
            eingesetzt werden kann. Die Texte und Bilder kannst du später
            direkt in der Datei <code>src/data/projects.js</code> anpassen.
          </p>
        </div>

        <div className="projects-list">
          {projectCategories.map((project, index) => (
            <ProjectSection
              key={project.id}
              {...project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Know-how</p>

          <h2>
            Gute Technik ist nur die Grundlage.
            Entscheidend sind Planung und Programmierung.
          </h2>

          <p>
            SALight arbeitet mit professionellen Steuerungs-, Planungs- und
            Visualisierungssystemen. So können Lichtshows vorbereitet,
            programmiert und während der Veranstaltung zuverlässig betrieben
            werden.
          </p>
        </div>

        <div className="software-grid">
          {softwareTools.map((tool, index) => (
            <motion.article
              className="software-card glass"
              key={tool.name}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08
              }}
            >
              <div className="software-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>

                <p>{tool.category}</p>
              </div>

              <h3>{tool.name}</h3>

              <p className="software-description">
                {tool.description}
              </p>

              <div className="software-skills">
                {tool.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell section-spacing">
        <motion.div
          className="working-methods glass"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.68 }}
        >
          <div className="working-methods-heading">
            <p className="eyebrow">Arbeitsweise</p>

            <h2>
              Vom ersten Konzept bis zur laufenden Show.
            </h2>

            <p>
              Technik, Programmierung und Veranstaltung müssen als
              Gesamtsystem funktionieren. Deshalb betrachtet SALight nicht nur
              einzelne Geräte, sondern den vollständigen Ablauf.
            </p>
          </div>

          <div className="working-methods-grid">
            {workingMethods.map((method, index) => (
              <motion.article
                className="working-method-card"
                key={method.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.52,
                  delay: index * 0.08
                }}
              >
                <div className="working-method-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
              </motion.article>
            ))}
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
          <Sparkles size={28} />

          <p className="eyebrow">Ihr nächstes Projekt</p>

          <h2>
            Sie planen eine Veranstaltung und suchen eine individuelle
            Lichtlösung?
          </h2>

          <p>
            Beschreiben Sie kurz Ihr Event, Ihre Location und Ihre Wünsche.
            SALight entwickelt daraus ein passendes technisches und
            gestalterisches Konzept.
          </p>

          <div className="hero-actions references-cta-actions">
            <Link
              className="btn btn-primary btn-large"
              to="/eventanfragen"
            >
              Event anfragen
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
