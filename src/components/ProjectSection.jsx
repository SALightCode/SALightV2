import { motion } from "framer-motion";

export default function ProjectSection({
  title,
  eyebrow,
  description,
  image,
  alt,
  services,
  technology,
  reverse = false
}) {
  return (
    <section
      className={`project-section ${reverse ? "project-section-reverse" : ""}`}
    >
      <motion.div
        className="project-image glass"
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img src={image} alt={alt} />
      </motion.div>

      <motion.div
        className="project-content"
        initial={{ opacity: 0, x: reverse ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">{eyebrow}</p>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-boxes">
          <div className="project-box glass">
            <h4>Unsere Aufgaben</h4>

            {services.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>

          <div className="project-box glass">
            <h4>Typische Technik</h4>

            {technology.map((item) => (
              <span key={item}>• {item}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
