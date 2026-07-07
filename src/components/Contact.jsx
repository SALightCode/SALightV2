import { contactOptions } from "../data/siteData.js";

export default function Contact() {
  return (
    <section id="contact" className="section-shell section-spacing contact-section">
      <div className="contact-card glass">
        <p className="eyebrow">Kontakt</p>
        <h2>Bereit für einen stärkeren digitalen Auftritt?</h2>
        <p>
          Schreib SA Light eine Nachricht und starte mit einer klaren Website,
          die hochwertig wirkt und technisch sauber läuft.
        </p>

        <div className="contact-options">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <a className="contact-option" href={option.href} key={option.label}>
                <Icon size={22} />
                <span>
                  <small>{option.label}</small>
                  <strong>{option.value}</strong>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
