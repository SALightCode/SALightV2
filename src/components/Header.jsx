import { Menu } from "lucide-react";
import { navItems } from "../data/siteData.js";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="SALight Startseite">
        <img src="/images/logo.png" alt="SALight Logo" className="brand-logo" />
        <span>SALight</span>
      </a>

      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:info@sa-light.de?subject=Anfrage%20SALight">
        Anfrage starten
      </a>

      <button className="mobile-menu" aria-label="Menü">
        <Menu size={22} />
      </button>
    </header>
  );
}
