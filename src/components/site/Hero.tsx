import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-cilbir.jpg";
import { SITE } from "@/lib/site";
import { OpenPill } from "./OpenPill";

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
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0) scale(1.08)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden grain"
      style={{ backgroundColor: "oklch(0.10 0.02 50)" }}
    >
      {/* Background photo — Ken Burns slow zoom + scroll parallax */}
      <img
        ref={imgRef}
        src={heroImg}
        alt="Çılbır — Turkish poached eggs in chili butter at Monica Café"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform kenburns"
        style={{ filter: "saturate(1.08) contrast(1.06) brightness(0.78)" }}
      />
      {/* Cinematic gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.10 0.02 50 / 0.85) 0%, oklch(0.10 0.02 50 / 0.45) 45%, oklch(0.10 0.02 50 / 0.92) 100%)",
        }}
      />
      {/* Floating gold blob */}
      <div className="blob float-slow" style={{ width: 420, height: 420, top: "20%", right: "-80px" }} />

      {/* Vertical side rails */}
      <div
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-6 lg:left-10 z-20 vline text-[10px] uppercase tracking-[0.5em] gap-4 items-center"
        style={{ color: "oklch(0.97 0.015 80 / 0.7)" }}
      >
        <span>Est · Santa Monica</span>
        <span className="block h-16 w-px" style={{ backgroundColor: "oklch(0.71 0.13 75 / 0.5)" }} />
      </div>
      <div
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 lg:right-10 z-20 vline text-[10px] uppercase tracking-[0.5em] gap-4 items-center rotate-180"
        style={{ color: "oklch(0.97 0.015 80 / 0.7)" }}
      >
        <span>508 Santa Monica Blvd · 90401</span>
        <span className="block h-16 w-px" style={{ backgroundColor: "oklch(0.71 0.13 75 / 0.5)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto pt-32 pb-14">
        <div className="flex justify-center md:justify-start" data-reveal>
          <OpenPill />
        </div>

        <div className="flex-1 flex flex-col justify-center text-center mt-10">
          <span
            data-reveal
            className="text-[11px] uppercase tracking-[0.55em] mb-8"
            style={{ color: "oklch(0.78 0.13 75)" }}
          >
            ◆  Specialty Coffee · Mediterranean Soul  ◆
          </span>

          <h1
            data-reveal data-reveal-delay="1"
            className="text-balance font-medium leading-[0.86] text-[18vw] sm:text-[14vw] lg:text-[10.5rem]"
            style={{ fontFamily: "var(--font-serif)", color: "oklch(0.97 0.015 80)" }}
          >
            Aegean
          </h1>
          <h1
            data-reveal data-reveal-delay="2"
            className="-mt-2 sm:-mt-4 italic font-medium text-balance leading-[0.86] text-[18vw] sm:text-[14vw] lg:text-[10.5rem]"
            style={{ fontFamily: "var(--font-serif)", color: "oklch(0.78 0.13 75)" }}
          >
            meets <span style={{ color: "oklch(0.97 0.015 80)" }}>Sun</span>.
          </h1>

          <p
            data-reveal data-reveal-delay="3"
            className="mx-auto mt-10 max-w-xl text-sm sm:text-base leading-relaxed"
            style={{ color: "oklch(0.97 0.015 80 / 0.85)" }}
          >
            A Mediterranean café in the heart of Santa Monica — farm-fresh
            breakfast, slow-pulled espresso, and the kind of mornings you want
            to come back to.
          </p>

          <div data-reveal data-reveal-delay="4" className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.toastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold ripple rounded-full px-9 py-4 text-sm font-medium shadow-soft tracking-wide"
            >
              Order Online →
            </a>
            <a
              href="#menu"
              className="glass rounded-full px-9 py-4 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5"
              style={{ color: "oklch(0.97 0.015 80)" }}
            >
              Explore the Menu
            </a>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div
          data-reveal
          className="mt-12 grid grid-cols-3 gap-3 sm:gap-8 text-center border-t pt-6"
          style={{ borderColor: "oklch(0.71 0.13 75 / 0.25)", color: "oklch(0.97 0.015 80 / 0.85)" }}
        >
          <Stat k="07:30 — 16:00" v="Open Daily" />
          <Stat k="4.9 ★" v="Google Reviews" />
          <Stat k="Farm to Table" v="Daily Sourced" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-base sm:text-xl font-medium" style={{ fontFamily: "var(--font-serif)", color: "oklch(0.97 0.015 80)" }}>{k}</div>
      <div className="text-[10px] mt-1 uppercase tracking-[0.35em]" style={{ color: "oklch(0.78 0.13 75)" }}>{v}</div>
    </div>
  );
}
