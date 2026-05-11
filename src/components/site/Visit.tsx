import { SITE } from "@/lib/site";
import interior from "@/assets/interior.jpg";

export function Visit() {
  return (
    <section id="visit" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.47 0.13 45)" }}>
            Visit Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
            Find us on <em className="italic">Santa Monica Blvd.</em>
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 shadow-soft" style={{ backgroundColor: "oklch(0.47 0.13 45)", color: "oklch(0.97 0.005 60)" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ backgroundColor: "oklch(0.97 0.005 60)" }} />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "oklch(0.97 0.005 60)" }} />
            </span>
            <span className="text-sm font-medium tracking-wide">Open Daily · 7:30am – 4:00pm</span>
          </div>

          <dl className="mt-10 space-y-4 text-sm max-w-md">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Address</dt>
              <dd className="font-medium text-right">{SITE.address}<br />{SITE.city}</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Phone</dt>
              <dd className="font-medium"><a href={SITE.phoneHref} className="hover:underline">{SITE.phone}</a></dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Email</dt>
              <dd className="font-medium"><a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a></dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground uppercase tracking-wider text-xs">Instagram</dt>
              <dd className="font-medium"><a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{SITE.instagramHandle}</a></dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={SITE.toastUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft"
            >
              Order on Toast →
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated bg-muted">
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
    </section>
  );
}
