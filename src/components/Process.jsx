import { motion } from "framer-motion";
import { process } from "../data/siteData.js";

export default function Process() {
  return (
    <section id="process" className="section-shell section-spacing">
      <div className="section-heading narrow">
        <p className="eyebrow">Prozess</p>
        <h2>Von der Idee zur live geschalteten Website.</h2>
      </div>

      <div className="process-list">
        {process.map((item, index) => (
          <motion.article
            key={item.step}
            className="process-item"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.09 }}
          >
            <span>{item.step}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
