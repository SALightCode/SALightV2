
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
        {/* SALight Logo */}
        <Link
          className="brand"
          to="/"
          aria-label="SALight Startseite"
          onClick={closeMenu}
        >
          <img
            src="/images/SALightLogo.png"
            alt="SALight"
            className="brand-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          aria-label="Hauptnavigation"
        >
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

        {/* Eventanfrage Button */}
        <Link
          className="header-cta"
          to="/eventanfragen"
        >
          Event anfragen
        </Link>

        {/* Mobile Menü Button */}
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

      {/* Hintergrund Mobile Menü */}
      <div
        className={`menu-backdrop ${
          menuOpen ? "visible" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation */}
      <aside
        className={`mobile-drawer ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <Link
            className="brand"
            to="/"
            aria-label="SALight Startseite"
            onClick={closeMenu}
          >
            <img
              src="/images/SALightLogo.png"
              alt="SALight"
              className="brand-logo"
            />
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

        <nav
          className="drawer-nav"
          aria-label="Mobile Navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "drawer-link active"
                  : "drawer-link"
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
