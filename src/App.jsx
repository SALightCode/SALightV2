import { Navigate, Route, Routes } from "react-router-dom";

import PageShell from "./components/PageShell.jsx";

import Home from "./pages/Home.jsx";
import Leistungen from "./pages/Leistungen.jsx";
import Geraete from "./pages/Geraete.jsx";
import Partner from "./pages/Partner.jsx";
import Impressum from "./pages/Impressum.jsx";
import UeberSALight from "./pages/UeberSALight.jsx";

function PlaceholderPage({ eyebrow, title, description }) {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow">{eyebrow}</p>

        <h1>{title}</h1>

        <p>{description}</p>
      </section>
    </PageShell>
  );
}

function NotFound() {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow">Fehler 404</p>

        <h1>Diese Seite wurde nicht gefunden.</h1>

        <p>
          Die aufgerufene Adresse existiert nicht oder wurde verschoben.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="/">
            Zur Startseite
          </a>
        </div>
      </section>
    </PageShell>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Hauptseiten */}
      <Route path="/" element={<Home />} />
      <Route path="/ueber-salight" element={<UeberSALight />} />
      <Route path="/leistungen" element={<Leistungen />} />

      <Route path="/equipment" element={<Geraete />} />

      <Route
        path="/eventanfragen"
        element={
          <PlaceholderPage
            eyebrow="Eventanfragen"
            title="Planen Sie Ihr nächstes Event mit SALight."
            description="Hier entsteht das Anfrageformular für Veranstaltungsart, Datum, Ort, Gästezahl, gewünschte Leistungen und weitere Projektdetails."
          />
        }
      />

      <Route
        path="/referenzen"
        element={
          <PlaceholderPage
            eyebrow="Referenzen"
            title="Veranstaltungen, Lichtkonzepte und besondere Momente."
            description="Auf dieser Seite werden später Bilder und Informationen zu ausgewählten Veranstaltungen und umgesetzten Lichtkonzepten präsentiert."
          />
        }
      />

      <Route path="/partner" element={<Partner />} />

      <Route path="/impressum" element={<Impressum />} />

      {/* Weiterleitungen alter oder englischer URLs */}

      <Route
        path="/services"
        element={<Navigate to="/leistungen" replace />}
      />

      <Route
        path="/geraete"
        element={<Navigate to="/equipment" replace />}
      />

      <Route
        path="/references"
        element={<Navigate to="/referenzen" replace />}
      />

      <Route
        path="/partners"
        element={<Navigate to="/partner" replace />}
      />

      <Route
        path="/contact"
        element={<Navigate to="/eventanfragen" replace />}
      />

      {/* Unbekannte URL */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
