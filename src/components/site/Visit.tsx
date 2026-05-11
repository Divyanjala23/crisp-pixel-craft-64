export function Visit() {
  return (
    <section id="visit" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium" style={{ color: "oklch(0.58 0.14 38)" }}>
            Find us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
            Pull up a chair on <em className="italic">Montana Avenue.</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            A sun-washed corner room with linen banquettes, an open kitchen, and the steady song of the espresso machine. Walk-ins welcome.
          </p>

          <dl id="hours" className="mt-10 space-y-4 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Address</dt>
              <dd className="font-medium text-right">1422 Montana Ave<br />Santa Monica, CA 90403</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Mon — Fri</dt>
              <dd className="font-medium">7:00 — 16:00</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Sat — Sun</dt>
              <dd className="font-medium">8:00 — 17:00</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft">
              Reserve a Table
            </a>
            <a href="#" className="rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium hover:bg-accent transition-all">
              Get Directions →
            </a>
          </div>
        </div>

        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-elevated bg-gradient-warm">
          <div className="absolute inset-0 flex flex-col justify-between p-10 text-cream" style={{ color: "oklch(0.984 0.012 80)" }}>
            <div className="flex justify-between items-start">
              <span className="text-xs uppercase tracking-[0.3em] opacity-80">Daily ritual</span>
              <span className="text-xs uppercase tracking-[0.3em] opacity-80">No. 07</span>
            </div>
            <div>
              <p
                className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight italic"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                "Eat with the seasons.
                <br />Drink with intention."
              </p>
              <p className="mt-8 text-xs uppercase tracking-[0.3em] opacity-80">— The Monica Café Kitchen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
