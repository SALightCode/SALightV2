import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Gauge,
  Lightbulb,
  Move,
  Sparkles,
  Waves,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

import PageShell from "../components/PageShell.jsx";

const categories = [
  {
    id: "moving-heads",
    eyebrow: "Bewegtes Licht",
    title: "Moving Heads",
    text:
      "Bewegtes Licht sorgt für Dynamik, Tiefe und eindrucksvolle Effekte. Je nach Veranstaltung kommen Spot-, Wash- oder Beam-Systeme zum Einsatz.",
    items: [
      {
        name: "Moving-Head Spot 90 W",
        image: "/images/equipment/moving-head-spot-90w.jpg",
        alt: "Moving-Head Spot mit 90 Watt",
        quantity: 4,
        icon: Move,
        description:
          "Der kompakte Moving Head erzeugt klar definierte Lichtstrahlen und eignet sich für unterschiedlichste Veranstaltungsgrößen. Mit Gobos, Prisma und bewegten Positionen lassen sich dynamische Lichtbilder und gezielte Akzente realisieren.",
        features: ["Spot", "Gobos", "Prisma", "DMX"]
      },
      {
        name: "Moving-Head Zoom/Wash",
        image: "/images/equipment/moving-head-zoom-wash.jpg",
        alt: "Moving-Head mit Zoom und Wash-Funktion",
        quantity: 4,
        icon: Waves,
        description:
          "Durch den variablen Zoom lässt sich der Lichtkegel flexibel von schmal und konzentriert bis breit und flächig einstellen. Das Gerät eignet sich besonders für Livebands, Bühnenflächen und stimmungsvolle Raumbeleuchtung.",
        features: ["Wash", "Zoom", "RGBW", "DMX"]
      },
      {
        name: "Moving-Head Spot 60 W",
        image: "/images/equipment/moving-head-spot-60w.jpg",
        alt: "Kompakter Moving-Head Spot mit 60 Watt",
        quantity: 2,
        icon: Lightbulb,
        description:
          "Durch seine kompakte Bauform eignet sich dieser Moving Head besonders für kleinere Locations und private Feiern. Trotz der geringen Größe ermöglicht er bewegte Lichtbilder und gezielte Effekte auf begrenztem Raum.",
        features: ["Spot", "Kompakt", "Gobos", "DMX"]
      },
      {
        name: "Moving-Head Beam 100 W",
        image: "/images/equipment/moving-head-beam-100w.jpg",
        alt: "Moving-Head Beam mit 100 Watt",
        quantity: 2,
        icon: Zap,
        description:
          "Der Moving Head erzeugt einen schmalen und gebündelten Lichtstrahl mit hoher visueller Wirkung. In Verbindung mit Nebel oder Haze entstehen markante Beam-Effekte für Partys, Konzerte und mittelgroße Veranstaltungen.",
        features: ["Beam", "Prisma", "Scharfer Strahl", "DMX"]
      }
    ]
  },
  {
    id: "led-technik",
    eyebrow: "Fläche und Atmosphäre",
    title: "LED-Technik",
    text:
      "Moderne LED-Technik schafft Atmosphäre, setzt Räume in Szene und ermöglicht eine gleichmäßige Ausleuchtung von Bühnen, Tanzflächen und Veranstaltungsräumen.",
    items: [
      {
        name: "RGB Pixel-Bar",
        image: "/images/equipment/rgb-pixel-bar.jpg",
        alt: "RGB Pixel-Bar für dynamische Lichteffekte",
        quantity: 4,
        icon: Gauge,
        description:
          "Die RGB Pixel-Bar eignet sich für farbige Flächen, Lauflichteffekte und dynamische Pixelanimationen. Sie kann als dekoratives Element, zur Hintergrundbeleuchtung oder als sichtbarer Showeffekt eingesetzt werden.",
        features: ["RGB", "Pixelsteuerung", "Lauflicht", "DMX"]
      },
      {
        name: "LED Flood Panel",
        image: "/images/equipment/led-flood-panel.jpg",
        alt: "LED Flood Panel für breite Ausleuchtung",
        quantity: 4,
        icon: Boxes,
        description:
          "Das LED Flood Panel ermöglicht eine breite und gleichmäßige Ausleuchtung. Es eignet sich für Bühnen, Hintergründe, Wände und dekorative Flächen und bildet eine vielseitige Grundlage für die visuelle Gestaltung.",
        features: ["Flächenlicht", "RGB", "Breiter Abstrahlwinkel", "DMX"]
      },
      {
        name: "LED PAR",
        image: "/images/equipment/led-par.jpg",
        alt: "LED PAR Scheinwerfer für Ambientebeleuchtung",
        quantity: 8,
        icon: Sparkles,
        description:
          "Die LED PARs können flexibel für Flächen-, Objekt- und Ambientebeleuchtung eingesetzt werden. Neben kräftigen RGB-Farben stehen je nach Gerät auch UV, Amber sowie warmes und kaltes Weiß zur Verfügung.",
        features: ["RGB", "UV", "Amber", "Weiß"]
      }
    ]
  },
  {
    id: "effekttechnik",
    eyebrow: "Sichtbare Wirkung",
    title: "Effekttechnik",
    text:
      "Nebel und Spezialeffekte machen Licht sichtbar und verleihen Lichtshows zusätzliche Tiefe. Sie werden gezielt und passend zur jeweiligen Location eingesetzt.",
    items: [
      {
        name: "Senkrechte Nebelmaschine",
        image: "/images/equipment/nebelmaschine-vertikal.jpg",
        alt: "Senkrechte Nebelmaschine mit kräftigem Ausstoß",
        quantity: 1,
        icon: Waves,
        description:
          "Die Nebelmaschine erzeugt einen kräftigen senkrechten Ausstoß und simuliert damit einen CO₂-ähnlichen Effekt. Je nach Anwendung kann sie stehend oder hängend montiert werden.",
        features: [
          "Vertikaler Ausstoß",
          "CO₂-Look",
          "DMX",
          "Flexible Montage"
        ]
      }
    ]
  }
];

export default function Geraete() {
  return (
    <PageShell>
      <section className="page-hero section-shell equipment-hero">
        <motion.div
          className="equipment-hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Verfügbares Equipment</p>

          <h1>
            Technik, die Wirkung erzeugt.
            <span className="headline-accent">
              Passend ausgewählt für Ihr Event.
            </span>
          </h1>

          <p>
            Hochwertige Licht- und Effekttechnik für private Feiern,
            Konzerte und professionelle Veranstaltungen. Das Equipment wird
            regelmäßig erweitert und individuell auf die Anforderungen Ihrer
            Veranstaltung abgestimmt.
          </p>
        </motion.div>

        <motion.div
          className="equipment-hero-visual glass"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <img
            src="/images/equipment/equipment-hero.jpg"
            alt="Professionelle Lichttechnik von SALight"
          />

          <div className="equipment-hero-overlay" />

          <div className="equipment-hero-label">
            <span>SALight Equipment</span>
            <strong>
              Bewegtes Licht, LED-Technik und Effekte aus einer Hand.
            </strong>
          </div>
        </motion.div>
      </section>

      {categories.map((category, categoryIndex) => (
        <section
          className="section-shell section-spacing equipment-category"
          id={category.id}
          key={category.id}
        >
          <motion.div
            className="section-heading equipment-category-heading"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">{category.eyebrow}</p>
            <h2>{category.title}</h2>
            <p>{category.text}</p>
          </motion.div>

<div className="equipment-list">
  {category.items.map((item, itemIndex) => {
    const Icon = item.icon;
    const isReversed = itemIndex % 2 !== 0;

    return (
      <motion.article
        className={`equipment-card equipment-card-horizontal glass ${
          isReversed ? "equipment-card-reversed" : ""
        }`}
        key={item.name}
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{
          duration: 0.65,
          delay: itemIndex * 0.06
        }}
      >
        <div className="equipment-card-image">
          <img src={item.image} alt={item.alt} loading="lazy" />

          <div className="equipment-image-glow" />

          <div className="equipment-availability">
            <span>Bestand</span>
            <strong>{item.quantity}× vorhanden</strong>
          </div>
        </div>

        <div className="equipment-card-content">
          <div className="equipment-card-heading">
            <div className="equipment-card-icon">
              <Icon size={23} />
            </div>

            <span>
              {String(categoryIndex + 1).padStart(2, "0")}.
              {String(itemIndex + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="equipment-card-copy">
            <p className="equipment-card-kicker">{category.title}</p>

            <h3>{item.name}</h3>

            <p>{item.description}</p>
          </div>

          <div className="equipment-features">
            {item.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      </motion.article>
    );
  })}
</div>
  {category.items.map((item, itemIndex) => {
    const Icon = item.icon;

    return (
      <motion.article
        className="equipment-card glass"
        
            {category.items.map((item, itemIndex) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="equipment-card glass"
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.6,
                    delay: itemIndex * 0.08
                  }}
                >
                  <div className="equipment-card-image">
                    <img src={item.image} alt={item.alt} />

                    <div className="equipment-availability">
                      <span>Bestand</span>
                      <strong>{item.quantity}× vorhanden</strong>
                    </div>
                  </div>

                  <div className="equipment-card-content">
                    <div className="equipment-card-heading">
                      <div className="equipment-card-icon">
                        <Icon size={22} />
                      </div>

                      <span>
                        {String(categoryIndex + 1).padStart(2, "0")}.
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                    <div className="equipment-features">
                      {item.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="section-shell section-spacing">
        <motion.div
          className="equipment-philosophy glass"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.68 }}
        >
          <p className="eyebrow">Individuelle Zusammenstellung</p>

          <h2>Das passende Equipment für jedes Event.</h2>

          <p>
            Nicht jede Veranstaltung benötigt möglichst viel Technik.
            Gemeinsam wählen wir genau die Komponenten aus, die zu Ihrer
            Location, Ihrem Budget und der gewünschten Atmosphäre passen.
            So entsteht ein stimmiges Gesamtkonzept – effizient,
            professionell und ohne unnötige Technik.
          </p>
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
          <p className="eyebrow">Persönliche Beratung</p>

          <h2>Sie sind unsicher, welche Technik zu Ihrem Event passt?</h2>

          <p>
            SALight stellt die Technik passend zu Location, Gästezahl,
            Veranstaltungsart und gewünschter Atmosphäre zusammen.
          </p>

          <div className="hero-actions services-cta-actions">
            <Link className="btn btn-primary btn-large" to="/eventanfragen">
              Event anfragen
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
