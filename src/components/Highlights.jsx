import { motion } from "framer-motion";
import { highlights, stats } from "../data/siteData.js";

export default function Highlights() {
  return (
    <section className="section-shell section-spacing">
      <div className="split-layout">
        <div>
          <p className="eyebrow">Look & Feel</p>
          <h2>Ein Design mit Tiefe, Kontrast und klarer Wirkung.</h2>
        </div>
        <p className="split-copy">
          Der Hintergrund bleibt dunkel. Die grauen Rauchflächen schaffen
          Atmosphäre, während grüne Akzente nur dort erscheinen, wo sie
          Aufmerksamkeit erzeugen sollen.
        </p>
      </div>

      <div className="highlight-grid">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              className="highlight-item glass"
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              <Icon size={24} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
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
  );
}
