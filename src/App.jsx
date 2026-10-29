
import { Navigate, Route, Routes } from "react-router-dom";

import PageShell from "./components/PageShell.jsx";

// Seiten
import Home from "./pages/Home.jsx";
import Leistungen from "./pages/Leistungen.jsx";
import Geraete from "./pages/Geraete.jsx";
import Partner from "./pages/Partner.jsx";
import Impressum from "./pages/Impressum.jsx";
import UeberSALight from "./pages/UeberSALight.jsx";
import Referenzen from "./pages/Referenzen.jsx";
import Eventanfragen from "./pages/Eventanfragen.jsx";

// 404-Seite
function NotFound() {
  return (
    <PageShell>
      <section className="page-hero section-shell">
        <p className="eyebrow">Fehler 404</p>

        <h1>Diese Seite wurde nicht gefunden.</h1>

        <p>
          Die aufgerufene Adresse existiert nicht
          oder wurde verschoben.
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

// Hauptanwendung
export default function App() {
  return (
    <Routes>
      {/* Hauptseiten */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/ueber-salight"
        element={<UeberSALight />}
      />

      <Route
        path="/leistungen"
        element={<Leistungen />}
      />

      <Route
        path="/equipment"
        element={<Geraete />}
      />

      <Route
        path="/referenzen"
        element={<Referenzen />}
      />

      <Route
        path="/eventanfragen"
        element={<Eventanfragen />}
      />

      <Route
        path="/partner"
        element={<Partner />}
      />

      <Route
        path="/impressum"
        element={<Impressum />}
      />

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
        path="/partners"
        element={<Navigate to="/partner" replace />}
      />

      {/* Unbekannte URLs */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}
