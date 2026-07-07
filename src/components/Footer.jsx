import { navItems } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <div>
        <strong>SALight</strong>
        <p>Marwin Sawade — Lichttechnik & Eventbeleuchtung</p>
      </div>
      <nav>
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
    </footer>
  );
}
