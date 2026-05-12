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
    <section id="story" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
          Our Story
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light text-balance leading-[1.05]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Born from a love of <em className="italic">Mediterranean flavors</em> and California freshness
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Every morning we source seasonal ingredients from the Santa Monica Farmers Market to craft wholesome, honest food — paired with specialty coffee made with genuine care. From the creamy Çılbır that has become our signature to our expertly pulled cortados, every detail is intentional.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Whether you are staying for a slow morning or grabbing a quick sip, we are here to make it memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((p) => (
          <article key={p.title} className="group">
            <div className="overflow-hidden rounded-3xl aspect-[4/5] shadow-soft mb-6">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <h3 className="text-2xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
