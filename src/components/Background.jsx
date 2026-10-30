import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const updateScrollVars = () => {
      const scrollY = window.scrollY || 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      document.documentElement.style.setProperty(
        "--bg-scroll",
        progress.toFixed(4)
      );

      document.documentElement.style.setProperty(
        "--beam-shift",
        `${scrollY * 0.03}px`
      );

      document.documentElement.style.setProperty(
        "--beam-rotate",
        `${scrollY * 0.01}deg`
      );
    };

    updateScrollVars();
    window.addEventListener("scroll", updateScrollVars, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollVars);
    };
  }, []);

  return (
    <>
      <div className="stage-background" />
      <div className="stage-vignette" />
      <div className="noise-layer" />

      <div className="beam beam-green beam-green-left" />
      <div className="beam beam-green beam-green-right" />
      <div className="beam beam-white beam-white-left" />
      <div className="beam beam-white beam-white-right" />

      <div className="haze haze-a" />
      <div className="haze haze-b" />
      <div className="haze haze-c" />
      <div className="haze haze-d" />

      <div className="ambient-glow ambient-glow-left" />
      <div className="ambient-glow ambient-glow-right" />
    </>
  );
}
