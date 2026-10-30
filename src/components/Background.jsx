import { useEffect, useRef } from "react";

/**
 * Globaler SALight-Buehnenhintergrund.
 * Zwei echte SVG-Spotlight-Kegel ohne rechteckige Blur-Kanten,
 * drei transparente Rauchschwaden, sanfte Scroll-Bewegung.
 */
function Spotlight({ tone }) {
  const green = tone === "green";
  const key = green ? "salight-spot-green" : "salight-spot-white";
  const rgb = green ? "30,255,139" : "225,243,255";

  return (
    <svg
      className={`ambient-stage__spotlight ambient-stage__spotlight--${tone}`}
      viewBox="0 0 600 920"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Weiche seitliche Kanten. Keine rechteckigen CSS-Blur-Flächen. */}
        <linearGradient id={`${key}-spread`} x1="0" x2="1">
          <stop offset="0" stopColor={`rgb(${rgb})`} stopOpacity="0" />
          <stop offset="0.23" stopColor={`rgb(${rgb})`} stopOpacity={green ? "0.09" : "0.10"} />
          <stop offset="0.5" stopColor={`rgb(${rgb})`} stopOpacity={green ? "0.48" : "0.47"} />
          <stop offset="0.77" stopColor={`rgb(${rgb})`} stopOpacity={green ? "0.09" : "0.10"} />
          <stop offset="1" stopColor={`rgb(${rgb})`} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${key}-core`} x1="0" x2="1">
          <stop offset="0" stopColor={`rgb(${rgb})`} stopOpacity="0" />
          <stop offset="0.37" stopColor={`rgb(${rgb})`} stopOpacity="0.05" />
          <stop offset="0.5" stopColor={`rgb(${rgb})`} stopOpacity={green ? "0.34" : "0.28"} />
          <stop offset="0.63" stopColor={`rgb(${rgb})`} stopOpacity="0.05" />
          <stop offset="1" stopColor={`rgb(${rgb})`} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${key}-length`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.94" />
          <stop offset="0.18" stopColor="white" stopOpacity="0.9" />
          <stop offset="0.46" stopColor="white" stopOpacity="0.7" />
          <stop offset="0.73" stopColor="white" stopOpacity="0.32" />
          <stop offset="1" stopColor="black" stopOpacity="0" />
        </linearGradient>
        <mask id={`${key}-fade`} maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="920">
          <rect width="600" height="920" fill={`url(#${key}-length)`} />
        </mask>
        <radialGradient id={`${key}-source`}>
          <stop offset="0" stopColor={`rgb(${rgb})`} stopOpacity="0.94" />
          <stop offset="0.2" stopColor={`rgb(${rgb})`} stopOpacity="0.46" />
          <stop offset="1" stopColor={`rgb(${rgb})`} stopOpacity="0" />
        </radialGradient>
      </defs>

      <g mask={`url(#${key}-fade)`}>
        <path
          d="M 293 0 L 307 0 Q 367 365 492 920 L 108 920 Q 233 365 293 0 Z"
          fill={`url(#${key}-spread)`}
        />
        <path
          d="M 297 0 L 303 0 Q 343 400 392 920 L 208 920 Q 257 400 297 0 Z"
          fill={`url(#${key}-core)`}
        />
      </g>
      <circle cx="300" cy="10" r="33" fill={`url(#${key}-source)`} />
    </svg>
  );
}

export default function Background() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Winkel begrenzt, damit die Scheinwerfer nicht quer ueber den Text schwenken.
      const progress = window.scrollY / Math.max(window.innerHeight, 1);
      const angle = Math.sin(progress * 0.68) * 7;
      scene.style.setProperty("--light-angle", `${angle.toFixed(2)}deg`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="ambient-stage" ref={sceneRef} aria-hidden="true">
      <Spotlight tone="green" />
      <Spotlight tone="white" />

      <img
        className="ambient-stage__wisp ambient-stage__wisp--one"
        src="/images/smoke-wisp.webp"
        alt=""
        decoding="async"
      />
      <img
        className="ambient-stage__wisp ambient-stage__wisp--two"
        src="/images/smoke-wisp.webp"
        alt=""
        decoding="async"
      />
      <img
        className="ambient-stage__wisp ambient-stage__wisp--three"
        src="/images/smoke-wisp.webp"
        alt=""
        decoding="async"
      />
      <div className="ambient-stage__shade" />
    </div>
  );
}
