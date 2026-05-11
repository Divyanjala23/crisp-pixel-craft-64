import { SITE } from "@/lib/site";

export function InfoBar() {
  const items = [
    { label: SITE.hours },
    { label: SITE.address },
    { label: SITE.phone, href: SITE.phoneHref },
    { label: SITE.service },
  ];
  return (
    <section id="info" className="border-y border-border" style={{ backgroundColor: "oklch(0.27 0.13 270)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center" style={{ color: "oklch(0.97 0.005 60)" }}>
        {items.map((item) => (
          <div key={item.label} className="text-xs uppercase tracking-[0.2em]">
            {item.href ? (
              <a href={item.href} className="hover:opacity-80 transition-opacity">{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
