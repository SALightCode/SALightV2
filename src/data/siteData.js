import {
  BadgeCheck,
  CalendarCheck,
  CircuitBoard,
  Lightbulb,
  Mail,
  MapPinned,
  Music2,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Geräte", href: "/geraete" },
  { label: "Partner", href: "/partner" },
  { label: "Impressum", href: "/impressum" }
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Erfahrung & Kompetenz",
    text: "Profitieren Sie von langjähriger Erfahrung, technischem Know-how und sicherer Umsetzung."
  },
  {
    icon: Palette,
    title: "Individuelle Lösungen",
    text: "Maßgeschneiderte Lichtkonzepte, die perfekt zu Ihrer Veranstaltung und Location passen."
  },
  {
    icon: BadgeCheck,
    title: "Professionelle Ausführung",
    text: "Von der Planung bis zur Umsetzung steht SALight Ihnen mit Rat und Tat zur Seite."
  },
  {
    icon: Zap,
    title: "Modernste Technik",
    text: "Hochwertige Lichttechnik sorgt für Atmosphäre, Wirkung und den extra Touch."
  }
];

export const services = [
  {
    icon: Lightbulb,
    title: "Lichtkonzepte",
    text: "Individuelle Beleuchtung für Feiern, Veranstaltungen, Locations und besondere Momente."
  },
  {
    icon: CircuitBoard,
    title: "Programmierung",
    text: "Steuerung und Programmierung komplexer Beleuchtungssysteme für präzise Shows."
  },
  {
    icon: MapPinned,
    title: "Location-Gestaltung",
    text: "Atmosphärische Ausleuchtung von Räumen, Bühnen, Außenbereichen und Eventflächen."
  },
  {
    icon: Music2,
    title: "Eventbegleitung",
    text: "Technische Betreuung vor Ort, damit Licht, Stimmung und Ablauf zuverlässig funktionieren."
  }
];

export const equipment = [
  "Moving Heads",
  "LED Bars",
  "Ambient- und Architekturlicht",
  "DMX-Steuerung",
  "Controller und Pulte",
  "Uplights",
  "Effektlicht",
  "Nebel- und Atmosphäreneffekte",
  "Stative und Traversen",
  "Kabel, Stromverteilung und Zubehör"
];

export const partners = [
  {
    title: "Locations",
    text: "Zusammenarbeit mit Eventlocations, Sälen, Gastronomie und privaten Veranstaltungsorten."
  },
  {
    title: "DJs & Musik",
    text: "Abstimmung von Lichtstimmung, Showmomenten und musikalischen Highlights."
  },
  {
    title: "Eventdienstleister",
    text: "Koordination mit Technik, Dekoration, Fotografie und Planungspartnern."
  }
];

export const stats = [
  { value: "Event", label: "Lichttechnik" },
  { value: "Custom", label: "Lichtkonzepte" },
  { value: "Live", label: "Betreuung" }
];

export const contactCards = [
  {
    icon: Mail,
    title: "Anfrage senden",
    text: "Schreiben Sie SALight für Ihre Veranstaltung.",
    href: "mailto:info@sa-light.de?subject=Anfrage%20SALight"
  },
  {
    icon: CalendarCheck,
    title: "Event planen",
    text: "Gemeinsam entwickeln wir das passende Lichtkonzept.",
    href: "mailto:info@sa-light.de?subject=Eventplanung%20SALight"
  },
  {
    icon: Users,
    title: "Partner werden",
    text: "Für Locations, DJs und Eventdienstleister.",
    href: "/partner"
  }
];

export const heroBadges = [
  "Lichttechnik",
  "Atmosphäre",
  "Eventdesign",
  "Programmierung"
];

export const accentIcon = Sparkles;
