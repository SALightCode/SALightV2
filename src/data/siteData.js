import {
  BadgeCheck,
  Code2,
  Compass,
  Layers3,
  LineChart,
  MessageCircle,
  Palette,
  Rocket,
  Sparkles,
  Zap
} from "lucide-react";

export const services = [
  {
    icon: Palette,
    title: "Webdesign",
    text: "Atmosphärische Websites mit dunklem Premium-Look, klarer Typografie und visueller Tiefe."
  },
  {
    icon: Code2,
    title: "Development",
    text: "Saubere React-/Vite-Umsetzung, schnelle Ladezeiten und eine Struktur, die erweiterbar bleibt."
  },
  {
    icon: LineChart,
    title: "Performance",
    text: "Optimierte Nutzerführung, starke Conversion-Flows und reduzierte Ablenkung."
  },
  {
    icon: Layers3,
    title: "Brand System",
    text: "Farben, Abstände, Komponenten und visuelle Sprache aus einem konsistenten System."
  }
];

export const process = [
  {
    step: "01",
    title: "Positionierung",
    text: "Wir definieren Wirkung, Zielgruppe und die klare Botschaft deiner Website."
  },
  {
    step: "02",
    title: "Designsystem",
    text: "Dunkle Flächen, grauer Rauch, grüne Akzente und hochwertige Komponenten."
  },
  {
    step: "03",
    title: "Launch",
    text: "Vercel-ready Deployment, Domain-Anbindung und finale technische Optimierung."
  }
];

export const stats = [
  { value: "100%", label: "Responsive" },
  { value: "Fast", label: "Vercel Ready" },
  { value: "Dark", label: "Premium Look" }
];

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Prozess", href: "#process" },
  { label: "Kontakt", href: "#contact" }
];

export const highlights = [
  {
    icon: Sparkles,
    title: "Grauer Rauch",
    text: "Subtile Nebelflächen geben dem Hintergrund Tiefe, ohne den Content zu überladen."
  },
  {
    icon: Zap,
    title: "Grüne Akzente",
    text: "Gezielte Neon-Highlights lenken den Blick auf wichtige Aktionen und Elemente."
  },
  {
    icon: BadgeCheck,
    title: "Premium Aufbau",
    text: "Große Typografie, klare Abstände und hochwertige Cards statt Standardtemplate."
  },
  {
    icon: Compass,
    title: "Klare Führung",
    text: "Besucher verstehen sofort, was angeboten wird und wie sie Kontakt aufnehmen."
  }
];

export const contactOptions = [
  {
    icon: MessageCircle,
    label: "E-Mail",
    value: "info@sa-light.de",
    href: "mailto:info@sa-light.de"
  },
  {
    icon: Rocket,
    label: "Projektstart",
    value: "Kostenloses Erstgespräch",
    href: "mailto:info@sa-light.de?subject=Projektanfrage%20SA%20Light"
  }
];
