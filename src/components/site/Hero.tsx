import heroImg from "@/assets/hero-cilbir.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Çılbır Turkish poached eggs with chili oil and specialty espresso at Monica Café"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" style={{ background: "linear-gradient(to bottom, oklch(0.22 0.02 60 / 0.45), oklch(0.22 0.02 60 / 0.25) 40%, oklch(0.22 0.02 60 / 0.78))" }} />

      <div className="relative z-10 flex min-h-screen flex-col justify-end pb-20 sm:pb-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-cream/90 text-xs uppercase tracking-[0.3em] mb-6">
            <span className="h-px w-8 bg-cream/60" style={{ backgroundColor: "oklch(0.984 0.012 80 / 0.6)" }} />
            Santa Monica · Est. on the coast
          </span>
          <h1
            className="text-cream text-balance text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
            style={{ fontFamily: "'Fraunces', serif", color: "oklch(0.984 0.012 80)" }}
          >
            Aegean Tradition.
            <br />
            <em className="italic font-light" style={{ color: "oklch(0.88 0.06 70)" }}>Californian Freshness.</em>
          </h1>
          <p className="text-cream/85 max-w-xl text-base sm:text-lg leading-relaxed mb-10" style={{ color: "oklch(0.984 0.012 80 / 0.85)" }}>
            A neighborhood café where Mediterranean recipes meet the bounty of the Santa Monica Farmers Market. Slow-poured coffee, hand-rolled wraps, and Çılbır that tastes like Bodrum at sunrise.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#order"
              className="glass rounded-full px-7 py-3.5 text-sm font-medium text-cream hover:bg-white/20 transition-all shadow-soft"
              style={{ color: "oklch(0.984 0.012 80)" }}
            >
              Order Online →
            </a>
            <a
              href="#menu"
              className="rounded-full px-7 py-3.5 text-sm font-medium bg-cream/95 text-charcoal hover:bg-cream transition-all shadow-soft"
              style={{ backgroundColor: "oklch(0.984 0.012 80 / 0.95)", color: "oklch(0.22 0.02 60)" }}
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
