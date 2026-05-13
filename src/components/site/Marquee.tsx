type Props = {
  items: string[];
  variant?: "dark" | "cream" | "gold";
  speed?: number; // seconds per loop
  reverse?: boolean;
};

export function Marquee({ items, variant = "dark", speed = 38, reverse = false }: Props) {
  const bg =
    variant === "dark"
      ? "oklch(0.10 0.02 50)"
      : variant === "gold"
      ? "oklch(0.71 0.13 75)"
      : "oklch(0.93 0.03 75)";
  const fg =
    variant === "dark"
      ? "oklch(0.97 0.015 80)"
      : variant === "gold"
      ? "oklch(0.16 0.025 50)"
      : "oklch(0.16 0.025 50)";
  const dot = variant === "dark" ? "oklch(0.78 0.13 75)" : "oklch(0.42 0.07 50)";

  // Duplicate enough for seamless loop
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y grain"
      style={{ backgroundColor: bg, color: fg, borderColor: "oklch(0.71 0.13 75 / 0.25)" }}
    >
      <div
        className="flex whitespace-nowrap py-6"
        style={{
          animation: `monica-marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
          willChange: "transform",
        }}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 px-8 text-3xl sm:text-5xl lg:text-6xl font-medium"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <em className="italic">{t}</em>
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: dot }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
