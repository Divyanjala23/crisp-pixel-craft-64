import heroImg from "@/assets/hero-cilbir.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Çılbır Turkish poached eggs with chili oil and specialty espresso at Monica Café"
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

      <div className="relative z-10 flex min-h-screen flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] mb-6" style={{ color: "oklch(0.97 0.005 60 / 0.9)" }}>
            <span className="h-px w-8" style={{ backgroundColor: "oklch(0.97 0.005 60 / 0.6)" }} />
            508 Santa Monica Blvd · Open daily 7:30 – 4:00
          </span>
          <h1
            className="text-balance text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.97 0.005 60)" }}
          >
            Aegean Touch.
            <br />
            <em className="italic font-light" style={{ color: "oklch(0.78 0.10 45)" }}>Californian Charm.</em>
          </h1>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed mb-10" style={{ color: "oklch(0.97 0.005 60 / 0.88)" }}>
            Specialty coffee, Mediterranean breakfast, and farm-to-table plates from the Santa Monica Farmers Market — served all day in the heart of downtown SaMo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.toastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3.5 text-sm font-medium shadow-soft transition-all"
              style={{ backgroundColor: "oklch(0.47 0.13 45)", color: "oklch(0.97 0.005 60)" }}
            >
              Order Online →
            </a>
            <a
              href="#signature"
              className="glass rounded-full px-7 py-3.5 text-sm font-medium transition-all shadow-soft"
              style={{ color: "oklch(0.97 0.005 60)" }}
            >
              See the Çılbır
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
