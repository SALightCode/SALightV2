
import PageShell from "../components/PageShell.jsx";
import { ArrowUpRight } from "lucide-react";

// ==================================================
// PARTNERDATEN
// Hier kannst du später Partner ergänzen.
// ==================================================

const partners = [
  {
    name: "3Phase-Events",
    category: "Veranstaltungstechnik",
    description:
      "Ein zuverlässiger Partner, mit jahrelanger Zusammenarbeit, für professionelle Veranstaltungen. Gemeinsam realisieren wir individuelle Projekte und sorgen für überzeugende Ergebnisse.",
    image: "/images/VideowallFKB.png",
    website: "https://3phase-events.de/",
  },

    {
    name: "Manuel Paulus Fotofrafie",
    category: "Fotografie",
    description:
      "Manuel Paulus steht für authentische Fotografie mit einem besonderen Gespür für Menschen und Momente. Besonders schätzen wir seine professionelle Arbeitsweise, sein vorausschauendes und smartes Handeln sowie seinen hohen Qualitätsanspruch. Eine Zusammenarbeit, bei der Professionalität und Menschlichkeit Hand in Hand gehen.",
    image: "/images/Manuel_Paulus_Logo.png",
    website: "https://www.manuelpaulus.de/",
  },
  
];

export default function Partner() {
  return (
    <PageShell>
      <main className="partner-page">

        {/* Seitenüberschrift */}
        <section className="page-hero section-shell">
          <p className="eyebrow">Unser Netzwerk</p>

          <h1>
            Starke Partner.
            <span className="headline-accent">
              Starke Zusammenarbeit.
            </span>
          </h1>

          <p>
            Gute Veranstaltungen entstehen durch
            Zusammenarbeit. Hier stellen wir Unternehmen
            und Dienstleister vor, mit denen wir
            gemeinsam Projekte umsetzen.
          </p>
        </section>

        {/* Partnerliste */}
        <section className="section-shell section-spacing">
          <div className="partner-list">

            {partners.map((partner) => (
              <article
                className="partner-card"
                key={partner.name}
              >
                <a
                  className="partner-image-link"
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Website von ${partner.name} öffnen`}
                >
                  <img
                    src={partner.image}
                    alt={`Logo von ${partner.name}`}
                    loading="lazy"
                  />
                </a>

                <div className="partner-content">
                  <h2>{partner.name}</h2>

                  <p className="partner-category">
                    {partner.category}
                  </p>

                  <p className="partner-description">
                    {partner.description}
                  </p>

                  <a
                    className="partner-website"
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website besuchen
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            ))}

          </div>
        </section>

      </main>
    </PageShell>
  );
}
