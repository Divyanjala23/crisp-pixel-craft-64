import { useEffect, useState } from "react";

const reviews = [
  {
    quote: "The Çılbır is a revelation — silky yogurt, perfectly poached eggs, that warm chili butter. Tastes like a Sunday in Istanbul.",
    name: "Elena R.",
    meta: "Local Guide · Santa Monica",
  },
  {
    quote: "Easily the best espresso on Montana Ave. Bright, clean, and the staff actually cares. My new morning ritual.",
    name: "Marcus T.",
    meta: "Coffee enthusiast",
  },
  {
    quote: "Everything is so fresh you can taste the farmers market in it. The Mediterranean wrap ruined every other lunch spot for me.",
    name: "Priya K.",
    meta: "Local resident",
  },
];

export function SocialProof() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: "oklch(0.94 0.015 78)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-secondary font-medium" style={{ color: "oklch(0.42 0.07 135)" }}>
          Loved by Santa Monica
        </span>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-background px-5 py-2.5 shadow-soft">
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((s) => (
              <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "oklch(0.58 0.14 38)" }}>
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium">4.9 · 320+ Google Reviews</span>
        </div>

        <blockquote
          key={i}
          className="mt-12 text-2xl sm:text-3xl lg:text-4xl font-light text-balance leading-snug animate-in fade-in duration-700"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          <em className="italic">“{reviews[i].quote}”</em>
        </blockquote>
        <div className="mt-8 text-sm">
          <p className="font-medium">{reviews[i].name}</p>
          <p className="text-muted-foreground">{reviews[i].meta}</p>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show review ${idx + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: idx === i ? "32px" : "8px",
                backgroundColor: idx === i ? "oklch(0.58 0.14 38)" : "oklch(0.22 0.02 60 / 0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
