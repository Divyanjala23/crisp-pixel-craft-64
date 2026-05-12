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
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "oklch(0.71 0.13 75)" }}>
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="relative grain py-32 sm:py-40 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: "oklch(0.10 0.02 50)", color: "oklch(0.97 0.015 80)" }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span data-reveal className="text-[11px] uppercase tracking-[0.4em] font-medium" style={{ color: "oklch(0.78 0.13 75)" }}>
            What People Say
          </span>
          <h2 data-reveal data-reveal-delay="1" className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[1.02]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Loved by <em className="italic" style={{ color: "oklch(0.78 0.13 75)" }}>Santa Monica</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              data-reveal
              data-reveal-delay={String(i + 1)}
              className="lift rounded-3xl p-9 flex flex-col"
              style={{
                backgroundColor: "oklch(0.16 0.025 50 / 0.7)",
                border: "1px solid oklch(0.71 0.13 75 / 0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Stars />
              <p className="text-lg lg:text-xl leading-[1.7] flex-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.97 0.015 80 / 0.95)" }}>
                <em className="italic">“{r.quote}”</em>
              </p>
              <p className="mt-7 text-[11px] uppercase tracking-[0.3em]" style={{ color: "oklch(0.78 0.13 75)" }}>— {r.meta}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
