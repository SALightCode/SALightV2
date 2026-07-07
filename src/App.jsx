import Home from "./pages/Home.jsx";
import Leistungen from "./pages/Leistungen.jsx";
import Geraete from "./pages/Geraete.jsx";
import Partner from "./pages/Partner.jsx";
import Impressum from "./pages/Impressum.jsx";

const routes = {
  "/": Home,
  "/leistungen": Leistungen,
  "/geraete": Geraete,
  "/partner": Partner,
  "/impressum": Impressum
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const Page = routes[path] || Home;
  return <Page />;
}
