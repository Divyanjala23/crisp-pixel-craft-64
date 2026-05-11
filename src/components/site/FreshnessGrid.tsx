import produce from "@/assets/grid-produce.jpg";
import espresso from "@/assets/grid-espresso.jpg";
import wrap from "@/assets/grid-wrap.jpg";

const items = [
  { img: produce, eyebrow: "01 — Sourced", title: "Farmers Market", desc: "Picked Wednesdays at the Santa Monica market. What's in season writes the menu." },
  { img: espresso, eyebrow: "02 — Roasted", title: "Specialty Coffee", desc: "Single-origin beans, pulled with patience. Each shot dialed in by our head barista." },
  { img: wrap, eyebrow: "03 — Crafted", title: "Mediterranean Plates", desc: "Hand-rolled wraps, mezze, and Çılbır — recipes carried across the Aegean." },
];

export function FreshnessGrid() {
  return (
    <section id="menu" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-secondary font-medium" style={{ color: "oklch(0.42 0.07 135)" }}>
            The Pillars
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-balance max-w-2xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Three things, <em className="italic">done with care.</em>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          Every plate and every pour is a small act of craftsmanship — assembled in our open kitchen each morning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item) => (
          <article key={item.title} className="group">
            <div className="overflow-hidden rounded-3xl aspect-[4/5] shadow-soft mb-5">
              <img
                src={item.img}
                alt={item.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium" style={{ color: "oklch(0.58 0.14 38)" }}>
              {item.eyebrow}
            </span>
            <h3 className="mt-2 text-2xl font-medium" style={{ fontFamily: "'Fraunces', serif" }}>{item.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
