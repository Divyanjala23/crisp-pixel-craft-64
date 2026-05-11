import { SITE } from "@/lib/site";

export function Catering() {
  return (
    <section id="catering" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="rounded-[2rem] p-10 sm:p-16 shadow-soft" style={{ backgroundColor: "oklch(0.93 0.006 60)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.47 0.13 45)" }}>Catering</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
              Bring Monica to your <em className="italic">office or event.</em>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              Mediterranean breakfast spreads, mezze platters, and pour-over coffee service for offices, weddings, and pop-ups across LA's Westside.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`mailto:${SITE.email}?subject=Catering%20Inquiry`}
              className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft"
            >
              Email an Inquiry
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
