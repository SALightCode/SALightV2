
const MAX_BODY_SIZE = 20000;

function clean(value, maxLength = 1000) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      message: "Methode nicht erlaubt.",
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.EVENT_NOTIFICATION_EMAIL;

    if (!apiKey || !recipient) {
      console.error("E-Mail-Konfiguration fehlt.");

      return res.status(500).json({
        success: false,
        message: "Der E-Mail-Versand ist nicht konfiguriert.",
      });
    }

    const rawBody =
      typeof req.body === "string"
        ? req.body
        : JSON.stringify(req.body ?? {});

    if (rawBody.length > MAX_BODY_SIZE) {
      return res.status(413).json({
        success: false,
        message: "Die Anfrage ist zu groß.",
      });
    }

    const data =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body ?? {};

    const eventType = clean(data.eventType, 120);
    const services = Array.isArray(data.services)
      ? data.services
          .filter((item) => typeof item === "string")
          .slice(0, 15)
          .map((item) => clean(item, 100))
      : [];

    const date = clean(data.date, 50);
    const location = clean(data.location, 200);
    const guests = clean(data.guests, 100);
    const budget = clean(data.budget, 100);
    const description = clean(data.description, 4000);

    const name = clean(data.name, 150);
    const email = clean(data.email, 254);
    const phone = clean(data.phone, 100);

    if (
      !name ||
      !email ||
      !eventType ||
      !location ||
      !date ||
      !data.privacyAccepted
    ) {
      return res.status(400).json({
        success: false,
        message: "Bitte alle Pflichtfelder ausfüllen.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Bitte eine gültige E-Mail-Adresse eingeben.",
      });
    }

    const fields = [
      ["Name", name],
      ["E-Mail", email],
      ["Telefon", phone || "Nicht angegeben"],
      ["Veranstaltungsart", eventType],
      ["Leistungen", services.join(", ") || "Keine Auswahl"],
      ["Datum", date],
      ["Ort", location],
      ["Gästezahl", guests || "Nicht angegeben"],
      ["Budget", budget || "Nicht angegeben"],
      ["Beschreibung", description || "Keine Angaben"],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;
                  max-width:650px;margin:auto;
                  color:#202020;line-height:1.6">

        <h1 style="color:#008b50">
          Neue SALight-Eventanfrage
        </h1>

        <p>
          Über das Anfrageformular deiner Website
          wurde eine neue Eventanfrage eingereicht.
        </p>

        <table style="width:100%;
                      border-collapse:collapse">
          ${fields
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:12px;
                             border-bottom:1px solid #ddd;
                             font-weight:bold;
                             vertical-align:top">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding:12px;
                             border-bottom:1px solid #ddd;
                             white-space:pre-wrap">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `
            )
            .join("")}
        </table>

        <p style="margin-top:28px;color:#777">
          Automatisch versendet über SALight.
        </p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SALight Eventanfragen <anfragen@salight.de>",
        to: [recipient],
        reply_to: email,
        subject: `Neue Eventanfrage: ${eventType}`,
        html,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend-Fehler:", result);

      return res.status(502).json({
        success: false,
        message: "Die Anfrage konnte nicht versendet werden.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Deine Eventanfrage wurde erfolgreich versendet.",
    });
  } catch (error) {
    console.error("Eventanfrage-Fehler:", error);

    return res.status(500).json({
      success: false,
      message: "Beim Verarbeiten der Anfrage ist ein Fehler aufgetreten.",
    });
  }
}
