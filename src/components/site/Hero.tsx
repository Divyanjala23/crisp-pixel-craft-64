import heroImg from "@/assets/hero-cilbir.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Çılbır — Turkish poached eggs in chili butter at Monica Café"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.18 0.06 270 / 0.55), oklch(0.18 0.06 270 / 0.30) 40%, oklch(0.18 0.06 270 / 0.85))",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "oklch(0.97 0.005 60 / 0.85)" }}>
          Santa Monica, California
        </span>
        <h1
          className="text-balance text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95] mb-2"
          style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.97 0.005 60)" }}
        >
          Aegean Touch.
        </h1>
        <h1
          className="italic font-light text-balance text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-10"
          style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.82 0.10 50)" }}
        >
          Californian Charm.
        </h1>
        <div className="mx-auto h-px w-16 mb-8" style={{ backgroundColor: "oklch(0.97 0.005 60 / 0.5)" }} />
        <p className="mx-auto max-w-2xl text-sm sm:text-base uppercase tracking-[0.3em] mb-12" style={{ color: "oklch(0.97 0.005 60 / 0.85)" }}>
          Specialty Coffee  ·  Mediterranean Breakfast  ·  Farm to Table
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={SITE.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-3.5 text-sm font-medium shadow-soft transition-all"
            style={{ backgroundColor: "oklch(0.47 0.13 45)", color: "oklch(0.97 0.005 60)" }}
          >
            Order Online →
          </a>
          <a
            href="#catering"
            className="glass rounded-full px-8 py-3.5 text-sm font-medium transition-all shadow-soft"
            style={{ color: "oklch(0.97 0.005 60)" }}
          >
            Catering
          </a>
        </div>

        <a href="#info" className="mt-20 mx-auto inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em]" style={{ color: "oklch(0.97 0.005 60 / 0.7)" }}>
          Scroll
          <span className="block h-10 w-px" style={{ backgroundColor: "oklch(0.97 0.005 60 / 0.5)" }} />
        </a>
      </div>
    </section>
  );
}
