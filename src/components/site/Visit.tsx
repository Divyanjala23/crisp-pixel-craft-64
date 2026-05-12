import { SITE } from "@/lib/site";
import interior from "@/assets/interior.jpg";

export function Visit() {
  return (
    <section id="visit" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span data-reveal className="text-[11px] uppercase tracking-[0.4em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
          Visit Us
        </span>
        <h2 data-reveal data-reveal-delay="1" className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[1.02]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Your morning <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>starts here</em>
        </h2>
        <p data-reveal data-reveal-delay="2" className="mt-7 text-sm sm:text-base uppercase tracking-[0.3em] text-muted-foreground">
          {SITE.address}  ·  {SITE.hours.replace("Open Daily · ", "Open daily ")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-9 mb-14">
        <div data-reveal data-reveal-delay="1" className="img-warm relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-elevated lift">
          <img src={interior} alt="Monica Café interior — sun-washed banquette seating" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div data-reveal data-reveal-delay="2" className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-elevated bg-muted lift">
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

      <div className="flex flex-wrap justify-center gap-3" data-reveal>
        <a
          href={SITE.toastUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold rounded-full px-9 py-4 text-sm font-medium tracking-wide shadow-soft"
        >
          Order Online →
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-9 py-4 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-soft"
          style={{ borderColor: "oklch(0.16 0.025 50 / 0.18)" }}
        >
          Get Directions
        </a>
        <a
          href="#catering"
          className="rounded-full border px-9 py-4 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-soft"
          style={{ borderColor: "oklch(0.16 0.025 50 / 0.18)" }}
        >
          Catering Inquiry
        </a>
      </div>
    </section>
  );
}
