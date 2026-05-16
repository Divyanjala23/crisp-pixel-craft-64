import interior from "@/assets/interior.jpg";
import produce from "@/assets/grid-produce.jpg";
import espresso from "@/assets/grid-espresso.jpg";
import wrap from "@/assets/grid-wrap.jpg";
import cilbir from "@/assets/menu/cilbir.jpg";
import matcha from "@/assets/menu/matcha-latte.jpg";
import turkish from "@/assets/menu/turkish-coffee.jpg";
import coffeeCake from "@/assets/menu/coffee-cake.jpg";

const shots = [
  { img: interior, alt: "Sun-washed banquette inside Monica Café", span: "md:col-span-2 md:row-span-2" },
  { img: cilbir, alt: "Signature Çılbır — Turkish poached eggs in chili butter" },
  { img: espresso, alt: "Slow-pulled espresso served at the bar" },
  { img: matcha, alt: "Creamy ceremonial matcha latte" },
  { img: produce, alt: "Fresh seasonal produce from the Santa Monica Farmers Market", span: "md:col-span-2" },
  { img: turkish, alt: "Traditional Turkish coffee, hand-prepared" },
  { img: wrap, alt: "Mediterranean wrap, plated" },
  { img: coffeeCake, alt: "House-baked coffee cake" },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-32 sm:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden"
      style={{
        backgroundColor: "oklch(0.97 0.015 80)",
        backgroundImage:
          "radial-gradient(ellipse at bottom right, oklch(0.93 0.03 75 / 0.55), transparent 60%)",
      }}
    >
      <div className="blob" style={{ width: 360, height: 360, bottom: "-80px", left: "-100px", opacity: 0.45 }} />
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <span data-reveal className="text-[11px] uppercase tracking-[0.45em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
              ◆  In the Café
            </span>
            <h2
              data-reveal data-reveal-delay="1"
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[0.98]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A morning, <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>in pictures.</em>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="2" className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Warm light, slow coffee, and plates that smell like a sunlit Aegean
            kitchen. Come spend a morning with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3 sm:gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              data-reveal
              data-reveal-delay={String((i % 6) + 1)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft lift img-warm ${s.span ?? ""}`}
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.08]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, oklch(0.10 0.02 50 / 0.55) 100%)",
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
