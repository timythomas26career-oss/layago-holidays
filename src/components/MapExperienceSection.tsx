import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useCallback, useRef } from "react";
import type { Destination } from "@/lib/destinations";

export function MapExperienceSection({
  destination,
  label = "Swimming",
}: {
  destination: Destination;
  label?: string;
}) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x, y });
    },
    [],
  );

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => {
    setHover(false);
    setMousePos({ x: 0.5, y: 0.5 });
  }, []);

  const parallaxX = (mousePos.x - 0.5) * (hover ? 12 : 0);
  const parallaxY = (mousePos.y - 0.5) * (hover ? 12 : 0);
  const hoverScale = hover && !active ? 1.06 : 1;

  return (
    <section className="px-4 py-8 md:px-6 md:py-16">
      {/* ── Mobile layout (< md) ── */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[2rem] shadow-float md:hidden md:rounded-[2.5rem]"
        style={{
          transform: `scale(${active ? 1.03 : hoverScale})`,
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      >
        {/* Image */}
        <div className="relative h-[55svh] w-full shrink-0 overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              transform: `translate(${parallaxX}px, ${parallaxY}px) scale(${hover && !active ? 1.08 : 1.02})`,
              transition: active
                ? "transform 0.12s ease-out"
                : "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          >
            <img
              src={destination.image}
              alt={`Experience at ${destination.name}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          {/* Title pill — top */}
          <div className="absolute left-1/2 top-8 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-ink shadow-soft">
              {label}
            </span>
            <ChevronUp className="h-4 w-4 text-white/70" />
            <span className="h-20 w-px bg-white/60" />
            <ChevronDown className="h-5 w-5 text-white/85" />
          </div>
        </div>

        {/* Content zone — normal flow, no overlap */}
        <div className="flex flex-col items-center bg-gradient-to-b from-black/70 to-black/90 px-5 pb-8 pt-5">
          {/* Location */}
          <p className="label-xs text-white/75">{destination.location}</p>

          {/* Description */}
          <p className="mt-2 px-2 text-center text-sm font-semibold leading-snug text-white/90">
            {active ? destination.overview : destination.overview.slice(0, 82) + "…"}
          </p>

          {/* Activity pills — stacked vertically */}
          {active && (
            <div className="mt-4 flex w-full max-w-xs flex-col gap-2">
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="w-full text-center rounded-full bg-white/20 px-4 py-2 text-xs text-white/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* + button — own area below everything */}
          <button
            type="button"
            aria-label={active ? "Close experience" : "Open experience"}
            onClick={() => setActive((a) => !a)}
            className={`mt-5 h-11 w-11 shrink-0 rounded-full transition-all duration-300 hover:scale-110 ${active ? "rotate-45 bg-white text-ink" : "bg-white/80 text-ink"}`}
          >
            <span className="block rotate-[-45deg] text-lg font-light">+</span>
          </button>
        </div>
      </div>

      {/* ── Desktop layout (md+) — unchanged ── */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto hidden max-w-6xl overflow-hidden rounded-[2.5rem] shadow-float md:block"
        style={{
          transform: `scale(${active ? 1.03 : hoverScale})`,
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      >
        <div
          className="h-[80vh] w-full overflow-hidden"
          style={{
            transform: `translate(${parallaxX}px, ${parallaxY}px) scale(${hover && !active ? 1.08 : 1.02})`,
            transition: active
              ? "transform 0.12s ease-out"
              : "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <img
            src={destination.image}
            alt={`Experience at ${destination.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="absolute left-1/2 top-16 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="glass rounded-full px-5 py-2 text-sm font-semibold text-ink shadow-soft">
            {label}
          </span>
          <ChevronUp className="h-4 w-4 text-white/70" />
          <span className="h-24 w-px bg-white/60" />
          <ChevronDown className="h-5 w-5 text-white/85" />
        </div>

        {/* Details panel — revealed on click */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6 transition-all duration-500"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(20px)",
            pointerEvents: active ? "auto" : "none",
          }}
        >
          <p className="label-xs text-white/75">{destination.location}</p>
          <p className="px-4 text-center text-base font-semibold text-white/90">
            {destination.overview}
          </p>
          <div className="mt-1 flex flex-wrap justify-center gap-2">
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-3 py-1 text-xs text-white/90 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3">
          {!active && (
            <>
              <p className="label-xs text-white/75">{destination.location}</p>
              <p className="px-4 text-center text-sm font-semibold text-white/90">
                {destination.overview.slice(0, 82)}…
              </p>
            </>
          )}
          <button
            type="button"
            aria-label={active ? "Close experience" : "Open experience"}
            onClick={() => setActive((a) => !a)}
            className={`h-11 w-11 rounded-full transition-all duration-300 hover:scale-110 ${active ? "rotate-45 bg-white text-ink" : "bg-white/80 text-ink"}`}
          >
            <span className="block rotate-[-45deg] text-lg font-light">+</span>
          </button>
        </div>
      </div>
    </section>
  );
}
