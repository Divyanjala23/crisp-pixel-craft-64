import produce from "@/assets/grid-produce.jpg";

export function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl aspect-[4/5] shadow-elevated">
            <img src={produce} alt="Fresh Santa Monica Farmers Market produce" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.47 0.13 45)" }}>
            Our Story
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
            Born from a love of <em className="italic">Mediterranean flavors.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
            Monica Café was founded on a simple idea: bring the slow, sun-warmed mornings of the Aegean to downtown Santa Monica. Our kitchen is built around what's good that week — produce sourced directly from the Santa Monica Farmers Market, olive oil pressed by hand, and coffee pulled with patience.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-xl">
            Whether you're grabbing a Cortado on your walk to the office or sitting down to a long Saturday brunch, you're part of the rhythm we love most.
          </p>
        </div>
      </div>
    </section>
  );
}
