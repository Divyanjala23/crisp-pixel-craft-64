import { SITE } from "@/lib/site";

export function InfoBar() {
  const items = [
    { label: SITE.hours },
    { label: SITE.address },
    { label: SITE.phone, href: SITE.phoneHref },
    { label: SITE.service },
  ];
  return (
    <section id="info" className="relative grain border-y" style={{ backgroundColor: "oklch(0.10 0.02 50)", borderColor: "oklch(0.71 0.13 75 / 0.18)" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-7 grid grid-cols-2 lg:grid-cols-4 gap-5 text-center" style={{ color: "oklch(0.97 0.015 80)" }}>
        {items.map((item, i) => (
          <div key={item.label} data-reveal data-reveal-delay={String(i + 1)} className="text-[11px] uppercase tracking-[0.3em]">
            {item.href ? (
              <a href={item.href} className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
