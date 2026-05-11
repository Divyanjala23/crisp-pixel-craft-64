import hero from "@/assets/hero-cilbir.jpg";
import { SITE } from "@/lib/site";

export function Signature() {
  return (
    <section id="signature" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: "oklch(0.27 0.13 270)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-elevated">
          <img src={hero} alt="Çılbır — Turkish poached eggs with garlic yogurt and chili butter" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute top-6 left-6 glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em]" style={{ color: "oklch(0.97 0.005 60)" }}>
            Signature
          </div>
        </div>
        <div style={{ color: "oklch(0.97 0.005 60)" }}>
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.78 0.10 45)" }}>
            The dish people travel for
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
            Çılbır — <em className="italic">Turkish Eggs.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "oklch(0.97 0.005 60 / 0.82)" }}>
            Two perfectly poached eggs over a bed of cool, garlicky strained yogurt — finished with a slow-melted Aleppo chili butter and warm sourdough for dipping. Creamy, spiced, deeply comforting. A recipe carried straight across the Aegean.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] opacity-70">Style</dt>
              <dd className="mt-2 font-medium" style={{ fontFamily: "'Fraunces', serif" }}>Traditional</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] opacity-70">Heat</dt>
              <dd className="mt-2 font-medium" style={{ fontFamily: "'Fraunces', serif" }}>Aleppo · gentle</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] opacity-70">Pairs with</dt>
              <dd className="mt-2 font-medium" style={{ fontFamily: "'Fraunces', serif" }}>Cortado</dd>
            </div>
          </dl>
          <a
            href={SITE.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium shadow-soft transition-all"
            style={{ backgroundColor: "oklch(0.47 0.13 45)", color: "oklch(0.97 0.005 60)" }}
          >
            Order Çılbır on Toast →
          </a>
        </div>
      </div>
    </section>
  );
}
