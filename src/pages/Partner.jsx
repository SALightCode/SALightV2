import PageShell from "../components/PageShell.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { partners } from "../data/siteData.js";

export default function Partner() {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow">Partner</p>
        <h1>Zusammenarbeit für stärkere Events.</h1>
        <p>
          SALight arbeitet mit Locations, DJs, Eventplanern und Dienstleistern zusammen,
          um Veranstaltungen technisch und atmosphärisch sauber umzusetzen.
        </p>
      </section>

      <section className="section-shell page-grid-spacing">
        <div className="partner-grid">
          {partners.map((partner) => (
            <article className="partner-card glass" key={partner.title}>
              <h3>{partner.title}</h3>
              <p>{partner.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactBlock />
    </PageShell>
  );
}
