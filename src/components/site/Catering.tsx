import { SITE } from "@/lib/site";
import bg from "@/assets/grid-produce.jpg";

export function Catering() {
  return (
    <section id="catering" className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2.5rem] shadow-elevated max-w-[1400px] mx-auto grain"
        style={{ backgroundColor: "oklch(0.10 0.02 50)" }}
      >
        <img
          src={bg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          style={{ filter: "saturate(1.1) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, oklch(0.10 0.02 50 / 0.95) 0%, oklch(0.10 0.02 50 / 0.65) 60%, oklch(0.10 0.02 50 / 0.95) 100%)",
          }}
        />
        <div className="blob" style={{ width: 360, height: 360, top: "-80px", right: "-80px", opacity: 0.6 }} />

        <div className="relative z-10 px-8 sm:px-14 lg:px-20 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" style={{ color: "oklch(0.97 0.015 80)" }}>
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.45em] font-medium" style={{ color: "oklch(0.78 0.13 75)" }}>
              ◆  Catering
            </span>
            <h2
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[1]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Bring Monica to your <em className="italic" style={{ color: "oklch(0.78 0.13 75)" }}>office or event.</em>
            </h2>
            <p className="mt-7 max-w-xl text-base sm:text-lg leading-[1.85]" style={{ color: "oklch(0.97 0.015 80 / 0.85)" }}>
              Mediterranean breakfast spreads, mezze platters, and pour-over
              coffee service for offices, weddings, and pop-ups across LA's
              Westside.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}?subject=Catering%20Inquiry`}
                className="btn-gold rounded-full px-8 py-4 text-sm font-medium tracking-wide shadow-soft"
              >
                Email an Inquiry
              </a>
              <a
                href={SITE.phoneHref}
                className="rounded-full border px-8 py-4 text-sm font-medium tracking-wide transition-all hover:-translate-y-0.5"
                style={{ borderColor: "oklch(0.71 0.13 75 / 0.45)", color: "oklch(0.97 0.015 80)" }}
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l" style={{ borderColor: "oklch(0.71 0.13 75 / 0.25)" }}>
            <ul className="space-y-5">
              {[
                ["Mezze platters", "Hummus, labneh, olives, warm pita."],
                ["Breakfast spreads", "Çılbır, eggs, granola, seasonal fruit."],
                ["Pour-over service", "Specialty beans pulled on-site."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "oklch(0.78 0.13 75)" }} />
                  <div>
                    <p className="font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem" }}>{t}</p>
                    <p className="text-sm opacity-80">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
