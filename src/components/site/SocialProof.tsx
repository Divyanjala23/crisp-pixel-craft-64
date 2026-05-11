const reviews = [
  {
    quote:
      "The Çılbır absolutely delivered. Rich, comforting, and beautifully balanced — it truly stood out. Everything was top-notch. A really nice mix of Turkish and Middle Eastern flavors presented in a modern, thoughtful way.",
    meta: "Google Review",
  },
  {
    quote:
      "The food was fresh, flavorful, and came out fast. The coffee was amazing too — smooth, strong, and not bitter at all. You can tell they use good beans and know what they're doing. The staff was super welcoming.",
    meta: "Google Review",
  },
  {
    quote:
      "Their matcha deserves a special mention — creamy, vibrant, and balanced, which is surprisingly hard to find in Santa Monica. Monica Café has quickly become one of my favorite local cafés.",
    meta: "Google Review · 4.9 Stars",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "oklch(0.47 0.13 45)" }}>
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: "oklch(0.97 0.005 60)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.47 0.13 45)" }}>
            What People Say
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
            Loved by <em className="italic">Santa Monica</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="rounded-3xl bg-background p-8 shadow-soft border border-border/60 flex flex-col"
            >
              <Stars />
              <p className="text-lg leading-relaxed flex-1" style={{ fontFamily: "'Fraunces', serif" }}>
                <em className="italic">“{r.quote}”</em>
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">— {r.meta}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
