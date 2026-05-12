import { SITE } from "@/lib/site";

export function Catering() {
  return (
    <section id="catering" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2.25rem] p-10 sm:p-16 shadow-elevated"
        style={{
          backgroundImage: "linear-gradient(135deg, oklch(0.93 0.03 75) 0%, oklch(0.97 0.015 80) 100%)",
          border: "1px solid oklch(0.71 0.13 75 / 0.25)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>Catering</span>
            <h2 className="mt-4 text-5xl sm:text-6xl font-medium text-balance leading-[1.02]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bring Monica to your <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>office or event.</em>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-[1.85]">
              Mediterranean breakfast spreads, mezze platters, and pour-over coffee service for offices, weddings, and pop-ups across LA's Westside.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`mailto:${SITE.email}?subject=Catering%20Inquiry`}
              className="btn-gold rounded-full px-8 py-4 text-sm font-medium tracking-wide shadow-soft"
            >
              Email an Inquiry
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-full border px-8 py-4 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-soft"
              style={{ borderColor: "oklch(0.16 0.025 50 / 0.18)" }}
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
