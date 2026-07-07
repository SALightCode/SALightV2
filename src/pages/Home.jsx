import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import PageShell from "../components/PageShell.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { benefits, heroBadges, stats } from "../data/siteData.js";

export default function Home() {
  return (
    <PageShell>
      <section className="hero section-shell">
        <div className="hero-content">
          <motion.p
            className="eyebrow pill"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={16} />
            Willkommen bei SALight — Marwin Sawade
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Lichttechnik für beeindruckende Atmosphären.
          </motion.h1>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Ihr Partner für beeindruckende Lichttechnik und unvergessliche Atmosphären.
            SALight bietet maßgeschneiderte Lichtlösungen für jede Art von Veranstaltung —
            von der Gestaltung Ihrer Location bis zur Steuerung und Programmierung
            komplexer Beleuchtungssysteme.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <a className="btn btn-primary" href="mailto:info@sa-light.de?subject=Anfrage%20SALight">
              Event anfragen <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="/leistungen">
              Leistungen ansehen
            </a>
          </motion.div>

          <div className="badge-row">
            {heroBadges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </div>

        <motion.div
          className="hero-panel glass"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          <div className="panel-top"><span /><span /><span /></div>
          <div className="panel-glow" />
          <div className="metric">
            <strong>SALight</strong>
            <span>Lichttechnik & Eventbeleuchtung</span>
          </div>
          <div className="preview-card large">
            <span>Fokus</span>
            <strong>Location, Stimmung und Show im perfekten Licht.</strong>
          </div>
          <div className="preview-grid">
            <div className="preview-card">
              <span>Look</span>
              <strong>Dark / Smoke</strong>
            </div>
            <div className="preview-card">
              <span>Accent</span>
              <strong>Green Light</strong>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Warum SALight?</p>
          <h2>Lichtlösungen, die genau zu Ihrer Veranstaltung passen.</h2>
          <p>
            Lassen Sie uns gemeinsam Ihre Feier ins perfekte Licht setzen.
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
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="icon-box"><Icon size={28} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="stats-bar glass">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <ContactBlock />
    </PageShell>
  );
}
