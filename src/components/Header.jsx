import { Menu } from "lucide-react";
import { navItems } from "../data/siteData.js";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="SA Light Startseite">
        <span className="brand-mark">SA</span>
        <span>Light</span>
      </a>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Anfrage starten
      </a>

      <button className="mobile-menu" aria-label="Menü öffnen">
        <Menu size={22} />
      </button>
    </header>
  );
}
