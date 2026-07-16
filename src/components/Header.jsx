import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteData.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <Link
          className="brand"
          to="/"
          aria-label="SALight Startseite"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.png"
            alt="SALight Logo"
            className="brand-logo"
          />

          <span>SALight</span>
        </Link>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="header-cta" to="/eventanfragen">
          Event anfragen
        </Link>

        <button
          type="button"
          className="mobile-menu"
          aria-label="Navigation öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <Link className="brand" to="/" onClick={closeMenu}>
            <img
              src="/images/logo.png"
              alt="SALight Logo"
              className="brand-logo"
            />

            <span>SALight</span>
          </Link>

          <button
            type="button"
            className="drawer-close"
            aria-label="Navigation schließen"
            onClick={closeMenu}
          >
            <X size={25} />
          </button>
        </div>

        <nav className="drawer-nav" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "drawer-link active" : "drawer-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          className="btn btn-primary drawer-cta"
          to="/eventanfragen"
          onClick={closeMenu}
        >
          Event anfragen
        </Link>
      </aside>
    </>
  );
}
