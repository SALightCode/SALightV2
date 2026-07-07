import { contactCards } from "../data/siteData.js";

export default function ContactBlock() {
  return (
    <section className="section-shell section-spacing contact-section">
      <div className="contact-card glass">
        <p className="eyebrow">Kontakt</p>
        <h2>Lassen Sie uns Ihre Vision verwirklichen.</h2>
        <p>
          Kontaktieren Sie SALight noch heute, um mehr über die Leistungen zu erfahren
          und Ihr nächstes Event gemeinsam zu planen.
        </p>

        <div className="contact-options">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a className="contact-option" href={card.href} key={card.title}>
                <Icon size={22} />
                <span>
                  <small>{card.title}</small>
                  <strong>{card.text}</strong>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
