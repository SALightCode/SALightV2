import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-content">
        <motion.div
          className="eyebrow pill"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={16} />
          Premium Dark Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          Dunkles Design. Grauer Rauch. Grüner Akzent.
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16 }}
        >
          SA Light entwickelt moderne digitale Auftritte mit hochwertiger
          Atmosphäre, präziser Nutzerführung und einem Look, der hängen bleibt.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24 }}
        >
          <a className="btn btn-primary" href="#contact">
            Projekt starten
            <ArrowRight size={18} />
          </a>
          <a className="btn btn-secondary" href="#services">
            <PlayCircle size={18} />
            Leistungen ansehen
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-panel glass"
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.22 }}
      >
        <div className="panel-top">
          <span />
          <span />
          <span />
        </div>
        <div className="panel-glow" />
        <div className="metric">
          <strong>SA Light</strong>
          <span>Digital Design Studio</span>
        </div>
        <div className="preview-card large">
          <span>Visual Identity</span>
          <strong>Dark Premium Interface</strong>
        </div>
        <div className="preview-grid">
          <div className="preview-card">
            <span>Accent</span>
            <strong>#00FF88</strong>
          </div>
          <div className="preview-card">
            <span>Style</span>
            <strong>Smoke / Glass</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
