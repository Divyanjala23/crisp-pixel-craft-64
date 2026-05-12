import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-cilbir.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.08)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain">
      <img
        ref={imgRef}
        src={heroImg}
        alt="Çılbır — Turkish poached eggs in chili butter at Monica Café"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        style={{ filter: "saturate(1.05) contrast(1.05) brightness(0.92)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.02 50 / 0.70), oklch(0.10 0.02 50 / 0.35) 40%, oklch(0.10 0.02 50 / 0.92))",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto text-center">
        <span data-reveal className="text-[11px] uppercase tracking-[0.5em] mb-10" style={{ color: "oklch(0.78 0.13 75)" }}>
          Santa Monica, California
        </span>
        <h1
          data-reveal data-reveal-delay="1"
          className="text-balance text-6xl sm:text-8xl lg:text-[9rem] font-medium leading-[0.92] mb-2"
          style={{ fontFamily: "var(--font-serif)", color: "oklch(0.97 0.015 80)" }}
        >
          Aegean Touch.
        </h1>
        <h1
          data-reveal data-reveal-delay="2"
          className="italic font-medium text-balance text-6xl sm:text-8xl lg:text-[9rem] leading-[0.92] mb-12"
          style={{ fontFamily: "var(--font-serif)", color: "oklch(0.78 0.13 75)" }}
        >
          Californian Charm.
        </h1>
        <div data-reveal data-reveal-delay="3" className="mx-auto h-px w-20 mb-8" style={{ backgroundColor: "oklch(0.71 0.13 75 / 0.6)" }} />
        <p data-reveal data-reveal-delay="3" className="mx-auto max-w-2xl text-xs sm:text-sm uppercase tracking-[0.4em] mb-14" style={{ color: "oklch(0.97 0.015 80 / 0.85)" }}>
          Specialty Coffee  ·  Mediterranean Breakfast  ·  Farm to Table
        </p>

        <div data-reveal data-reveal-delay="4" className="flex flex-wrap justify-center gap-3">
          <a
            href={SITE.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-9 py-4 text-sm font-medium shadow-soft tracking-wide"
          >
            Order Online →
          </a>
          <a
            href="#catering"
            className="glass rounded-full px-9 py-4 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5"
            style={{ color: "oklch(0.97 0.015 80)" }}
          >
            Catering
          </a>
        </div>

        <a href="#info" className="mt-24 mx-auto inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.45em]" style={{ color: "oklch(0.97 0.015 80 / 0.75)" }}>
          Scroll
          <span className="block h-12 w-px" style={{ backgroundColor: "oklch(0.71 0.13 75 / 0.7)" }} />
        </a>
      </div>
    </section>
  );
}
