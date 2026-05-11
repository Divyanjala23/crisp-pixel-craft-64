import { SITE } from "@/lib/site";
import interior from "@/assets/interior.jpg";

export function Visit() {
  return (
    <section id="visit" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.47 0.13 45)" }}>
          Visit Us
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
          Your morning <em className="italic">starts here</em>
        </h2>
        <p className="mt-6 text-base sm:text-lg uppercase tracking-[0.2em] text-muted-foreground">
          {SITE.address}  ·  {SITE.hours.replace("Open Daily · ", "Open daily ")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-elevated">
          <img src={interior} alt="Monica Café interior — sun-washed banquette seating" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-elevated bg-muted">
          <iframe
            title="Monica Café location map"
            src={SITE.mapEmbed}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={SITE.toastUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft"
        >
          Order Online →
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-foreground/15 px-8 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all"
        >
          Get Directions
        </a>
        <a
          href="#catering"
          className="rounded-full border border-foreground/15 px-8 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all"
        >
          Catering Inquiry
        </a>
      </div>
    </section>
  );
}
