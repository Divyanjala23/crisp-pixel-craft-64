import produce from "@/assets/grid-produce.jpg";
import espresso from "@/assets/grid-espresso.jpg";
import wrap from "@/assets/grid-wrap.jpg";

const pillars = [
  {
    img: espresso,
    title: "Specialty Coffee",
    desc: "Expertly crafted espresso, cortado, matcha latte and more — using only the finest beans with meticulous brewing.",
  },
  {
    img: produce,
    title: "Farm to Table",
    desc: "Fresh seasonal ingredients sourced every morning from the Santa Monica Farmers Market — you taste the difference.",
  },
  {
    img: wrap,
    title: "Mediterranean Soul",
    desc: "Dishes rooted in Aegean tradition — from Turkish eggs to Mediterranean wraps — presented with a California touch.",
  },
];

export function Story() {
  return (
    <section id="story" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <span data-reveal className="text-[11px] uppercase tracking-[0.4em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
          Our Story
        </span>
        <h2 data-reveal data-reveal-delay="1" className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[1.02]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Born from a love of <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>Mediterranean flavors</em> and California freshness
        </h2>
        <p data-reveal data-reveal-delay="2" className="mt-10 text-lg leading-[1.85] text-muted-foreground">
          Every morning we source seasonal ingredients from the Santa Monica Farmers Market to craft wholesome, honest food — paired with specialty coffee made with genuine care. From the creamy Çılbır that has become our signature to our expertly pulled cortados, every detail is intentional.
        </p>
        <p data-reveal data-reveal-delay="3" className="mt-5 text-lg leading-[1.85] text-muted-foreground">
          Whether you are staying for a slow morning or grabbing a quick sip, we are here to make it memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {pillars.map((p, i) => (
          <article key={p.title} data-reveal data-reveal-delay={String(i + 1)} className="group lift rounded-3xl">
            <div className="img-warm overflow-hidden rounded-3xl aspect-[4/5] shadow-elevated mb-6">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
