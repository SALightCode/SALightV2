
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";

const eventTypes = [
  "Geburtstag / Gartenparty",
  "Club / Party",
  "Theater / Show",
  "Konzert / Live-Bühne",
  "Firmenveranstaltung",
  "Sonstiges",
];

const serviceTypes = [
  "Lichttechnik",
  "Tontechnik",
  "Bühnentechnik",
  "Spezialeffekte",
  "Technische Betreuung",
];

const initialForm = {
  eventType: "Geburtstag / Gartenparty",
  services: ["Lichttechnik"],
  date: "",
  location: "",
  guests: "50–100",
  budget: "",
  description: "",
  name: "",
  email: "",
  phone: "",
  privacyAccepted: false,
};

export default function Eventanfragen() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);

  const update = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toggleService = (service) => {
    setForm((previous) => ({
      ...previous,
      services: previous.services.includes(service)
        ? previous.services.filter((item) => item !== service)
        : [...previous.services, service],
    }));
  };

  const nextStep = () => {
    if (step === 1 && form.services.length === 0) {
      alert("Bitte wähle mindestens eine Leistung aus.");
      return;
    }

    setStep((previous) => Math.min(previous + 1, 3));
  };

  const previousStep = () => {
    setStep((previous) => Math.max(previous - 1, 1));
  };


async function handleSubmit(event) {
  event.preventDefault();

  if (!form.privacyAccepted) {
    alert("Bitte bestätige die Datenschutzhinweise.");
    return;
  }

  try {
    const response = await fetch("/api/eventanfrage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Die Anfrage konnte nicht gesendet werden."
      );
    }

    alert(
      "Vielen Dank! Deine Eventanfrage wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei dir."
    );
  } catch (error) {
    console.error("Fehler beim Versand:", error);

    alert(
      error.message ||
        "Beim Versand ist ein Fehler aufgetreten. Bitte versuche es erneut."
    );
  }
}


  return (
    <main className="event-request-page">
      <section className="section-shell page-hero">
        <p className="eyebrow">DEIN EVENT. UNSERE TECHNIK.</p>
        <h1>
          Lass uns etwas
          <span className="headline-accent">
            Besonderes schaffen.
          </span>
        </h1>
        <p>
          Ob private Feier, Clubnacht oder große Bühne:
          Erzähl uns von deiner Veranstaltung.
          Gemeinsam entwickeln wir die passende technische Lösung.
        </p>
      </section>

      <section className="section-shell section-spacing">
        <div className="event-request-layout">
          <div className="event-request-intro">
            <p className="eyebrow">EVENTANFRAGE</p>
            <h2>Deine Idee. Unser nächstes Projekt.</h2>
            <p>
              Mit wenigen Angaben können wir deine Veranstaltung
              besser einschätzen und ein individuelles Angebot
              vorbereiten.
            </p>

            <div className="event-request-benefits">
              <p><Check size={18} /> Unverbindliche Anfrage</p>
              <p><Check size={18} /> Individuelle Planung</p>
              <p><Check size={18} /> Persönlicher Kontakt</p>
            </div>
          </div>

          <div className="event-request-form glass">
            <div className="event-form-header">
              <span>Schritt {step} von 3</span>
              <span>{Math.round((step / 3) * 100)} %</span>
            </div>

            <div className="event-progress">
              <div
                className="event-progress-fill"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="event-form-step">
                  <p className="eyebrow">01 / DEIN EVENT</p>
                  <h3>Was hast du vor?</h3>

                  <label htmlFor="event-type">
                    Veranstaltungsart
                  </label>
                  <select
                    id="event-type"
                    value={form.eventType}
                    onChange={(event) =>
                      update("eventType", event.target.value)
                    }
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <label>Welche Leistungen benötigst du?</label>

                  <div className="event-service-options">
                    {serviceTypes.map((service) => (
                      <label
                        className="event-service-option"
                        key={service}
                      >
                        <input
                          type="checkbox"
                          checked={form.services.includes(service)}
                          onChange={() => toggleService(service)}
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={nextStep}
                  >
                    Weiter <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="event-form-step">
                  <p className="eyebrow">02 / DETAILS</p>
                  <h3>Erzähl uns mehr.</h3>

                  <label htmlFor="event-date">Veranstaltungsdatum</label>
                  <input
                    id="event-date"
                    type="date"
                    value={form.date}
                    onChange={(event) =>
                      update("date", event.target.value)
                    }
                  />

                  <label htmlFor="event-location">
                    Veranstaltungsort
                  </label>
                  <input
                    id="event-location"
                    type="text"
                    placeholder="Ort oder Location"
                    value={form.location}
                    onChange={(event) =>
                      update("location", event.target.value)
                    }
                  />

                  <label htmlFor="event-guests">
                    Erwartete Gästezahl
                  </label>
                  <select
                    id="event-guests"
                    value={form.guests}
                    onChange={(event) =>
                      update("guests", event.target.value)
                    }
                  >
                    <option>Bis 50</option>
                    <option>50–100</option>
                    <option>100–250</option>
                    <option>250–500</option>
                    <option>Über 500</option>
                    <option>Noch unbekannt</option>
                  </select>

                  <label htmlFor="event-budget">
                    Budget (optional)
                  </label>
                  <select
                    id="event-budget"
                    value={form.budget}
                    onChange={(event) =>
                      update("budget", event.target.value)
                    }
                  >
                    <option value="">Noch offen</option>
                    <option>Unter 500 €</option>
                    <option>500–1.000 €</option>
                    <option>1.000–2.500 €</option>
                    <option>2.500–5.000 €</option>
                    <option>Über 5.000 €</option>
                  </select>

                  <label htmlFor="event-description">
                    Beschreibe deine Veranstaltung
                  </label>
                  <textarea
                    id="event-description"
                    rows={5}
                    placeholder="Was ist geplant? Gibt es besondere Wünsche?"
                    value={form.description}
                    onChange={(event) =>
                      update("description", event.target.value)
                    }
                  />

                  <div className="event-form-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={previousStep}
                    >
                      <ArrowLeft size={18} /> Zurück
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={nextStep}
                    >
                      Weiter <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="event-form-step">
                  <p className="eyebrow">03 / KONTAKT</p>
                  <h3>Wie erreichen wir dich?</h3>

                  <label htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) =>
                      update("name", event.target.value)
                    }
                  />

                  <label htmlFor="contact-email">E-Mail *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      update("email", event.target.value)
                    }
                  />

                  <label htmlFor="contact-phone">
                    Telefonnummer (optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      update("phone", event.target.value)
                    }
                  />

                  <label className="event-privacy">
                    <input
                      type="checkbox"
                      required
                      checked={form.privacyAccepted}
                      onChange={(event) =>
                        update("privacyAccepted", event.target.checked)
                      }
                    />
                    <span>
                      Ich habe die Datenschutzhinweise zur Kenntnis
                      genommen und stimme der Verarbeitung meiner
                      Angaben zur Bearbeitung der Anfrage zu.
                    </span>
                  </label>

                  <div className="event-form-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={previousStep}
                    >
                      <ArrowLeft size={18} /> Zurück
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Anfrage vorbereiten <Send size={18} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
