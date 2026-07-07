import { CheckCircle2 } from "lucide-react";
import PageShell from "../components/PageShell.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { equipment } from "../data/siteData.js";

export default function Geraete() {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow">Verfügbare Geräte</p>
        <h1>Technik für Lichtstimmung, Effekte und Atmosphäre.</h1>
        <p>
          Hier können später konkrete Modelle, Bilder, Mengen und technische Daten ergänzt werden.
          Die aktuelle Struktur ist bereits dafür vorbereitet.
        </p>
      </section>

      <section className="section-shell page-grid-spacing">
        <div className="equipment-grid">
          {equipment.map((item) => (
            <article className="equipment-card glass" key={item}>
              <CheckCircle2 size={22} />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <ContactBlock />
    </PageShell>
  );
}
