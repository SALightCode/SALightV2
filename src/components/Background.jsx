import { useEffect, useRef } from "react";

/**
 * Globaler SALight-Bühnenhintergrund.
 * - Zwei grüne und zwei kaltweiße Lichtkegel
 * - Haze/Rauch mit langsamer CSS-Animation
 * - Scrollabhängige Lichtwinkel ohne React-Neurendering
 */
export default function Background() {
  const lightingRef = useRef(null);

  useEffect(() => {
    const scene = lightingRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    let frameId = 0;

    const updateLightAngles = () => {
      frameId = 0;

      const scrollUnits = window.scrollY / Math.max(window.innerHeight, 1);
      const sweep = Math.sin(scrollUnits * 0.95);
      const counterSweep = Math.sin(scrollUnits * 0.74 + 1.25);

      scene.style.setProperty("--beam-sweep-1", `${(sweep * 15).toFixed(2)}deg`);
      scene.style.setProperty("--beam-sweep-2", `${(-sweep * 12).toFixed(2)}deg`);
      scene.style.setProperty("--beam-sweep-3", `${(counterSweep * 9).toFixed(2)}deg`);
      scene.style.setProperty("--beam-sweep-4", `${(-counterSweep * 11).toFixed(2)}deg`);
    };

    const onScroll = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(updateLightAngles);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="background-grid" aria-hidden="true" />

      <div
        className="background-lighting"
        ref={lightingRef}
        aria-hidden="true"
      >
        <div className="ambient-beam ambient-beam-green ambient-beam-one" />
        <div className="ambient-beam ambient-beam-green ambient-beam-two" />
        <div className="ambient-beam ambient-beam-white ambient-beam-three" />
        <div className="ambient-beam ambient-beam-white ambient-beam-four" />
      </div>

      <div className="smoke smoke-a" aria-hidden="true" />
      <div className="smoke smoke-b" aria-hidden="true" />
      <div className="smoke smoke-c" aria-hidden="true" />
      <div className="smoke smoke-d" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}
