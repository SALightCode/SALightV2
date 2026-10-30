import { useEffect, useRef } from "react";

/**
 * Zurückhaltender SALight-Hintergrund:
 * zwei diffuse Lichtakzente, zwei transparente Rauchschwaden, kein Raster.
 */
export default function Background() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (reducedMotion.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const page = window.scrollY / Math.max(window.innerHeight, 1);
      const angle = Math.sin(page * 0.68) * 9;
      scene.style.setProperty("--light-angle", `${angle.toFixed(2)}deg`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
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
      <div className="ambient-stage__light ambient-stage__light--green" />
      <div className="ambient-stage__light ambient-stage__light--white" />
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
      <div className="ambient-stage__shade" />
    </div>
  );
}
