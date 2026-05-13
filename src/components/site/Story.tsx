import produce from "@/assets/grid-produce.jpg";
import espresso from "@/assets/grid-espresso.jpg";
import wrap from "@/assets/grid-wrap.jpg";

const pillars = [
  {
    n: "01",
    img: espresso,
    title: "Specialty Coffee",
    desc: "Expertly crafted espresso, cortado, matcha latte and more — using only the finest beans with meticulous brewing.",
  },
  {
    n: "02",
    img: produce,
    title: "Farm to Table",
    desc: "Fresh seasonal ingredients sourced every morning from the Santa Monica Farmers Market — you taste the difference.",
  },
  {
    n: "03",
    img: wrap,
    title: "Mediterranean Soul",
    desc: "Dishes rooted in Aegean tradition — from Turkish eggs to Mediterranean wraps — presented with a California touch.",
  },
];

export function Story() {
  return (
    <section
      id="story"
      className="relative py-32 sm:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="blob" style={{ width: 420, height: 420, bottom: "-100px", right: "-100px", opacity: 0.4 }} />
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial intro: asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-28">
          <div className="lg:col-span-5">
            <span data-reveal className="text-[11px] uppercase tracking-[0.45em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
              ◆  Our Story
            </span>
            <h2
              data-reveal data-reveal-delay="1"
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[0.98]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Born from a love of <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>Mediterranean flavors</em> and California freshness.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p data-reveal data-reveal-delay="2" className="text-lg leading-[1.85] text-muted-foreground">
              Every morning we source seasonal ingredients from the Santa Monica
              Farmers Market to craft wholesome, honest food — paired with
              specialty coffee made with genuine care. From the creamy Çılbır
              that has become our signature to our expertly pulled cortados,
              every detail is intentional.
            </p>
            <p data-reveal data-reveal-delay="3" className="mt-5 text-lg leading-[1.85] text-muted-foreground">
              Whether you are staying for a slow morning or grabbing a quick
              sip, we are here to make it memorable.
            </p>
          </div>
        </div>

        {/* Pillars — staggered offset cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              data-reveal-delay={String(i + 1)}
              className={`relative ${i === 1 ? "md:mt-20" : ""} ${i === 2 ? "md:mt-10" : ""}`}
            >
              <div className="img-warm overflow-hidden rounded-[2rem] aspect-[4/5] shadow-elevated mb-7 ring-gold-soft">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>{p.n}</span>
                <h3 className="text-3xl lg:text-4xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed pl-9">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
