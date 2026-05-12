import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative grain px-6 sm:px-12 lg:px-20 pt-24 pb-12" style={{ backgroundColor: "oklch(0.10 0.02 50)", color: "oklch(0.97 0.015 80)" }}>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        <div data-reveal>
          <p className="text-2xl tracking-[0.22em] uppercase font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Monica <span className="italic" style={{ color: "oklch(0.78 0.13 75)" }}>Café</span>
          </p>
          <p className="mt-5 text-sm leading-[1.85] opacity-80 max-w-sm">
            Mediterranean-inspired café in the heart of Santa Monica. Farm-to-table breakfast, specialty coffee, and genuine hospitality.
          </p>
        </div>

        <div data-reveal data-reveal-delay="1">
          <p className="text-[11px] uppercase tracking-[0.4em] mb-6" style={{ color: "oklch(0.78 0.13 75)" }}>Visit Us</p>
          <p className="text-sm leading-[1.85]">{SITE.address}</p>
          <p className="text-sm leading-[1.85]">{SITE.city}</p>
          <p className="text-sm leading-[1.85] mt-4">{SITE.hours}</p>
          <p className="text-sm leading-[1.85] mt-4">
            <a href={SITE.phoneHref} className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">{SITE.phone}</a>
          </p>
          <p className="text-sm leading-[1.85]">
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">{SITE.email}</a>
          </p>
        </div>

        <div data-reveal data-reveal-delay="2">
          <p className="text-[11px] uppercase tracking-[0.4em] mb-6" style={{ color: "oklch(0.78 0.13 75)" }}>Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href={SITE.toastUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">Order Online</a></li>
            <li><a href="#menu" className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">View Menu</a></li>
            <li><a href="#catering" className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">Catering</a></li>
            <li><a href="#visit" className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">Visit Us</a></li>
            <li><a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">Instagram</a></li>
            <li><a href={SITE.uberEatsUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:oklch(0.78_0.13_75)]">Uber Eats</a></li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-20 pt-8 border-t text-xs opacity-60 text-center tracking-[0.2em]" style={{ borderColor: "oklch(0.71 0.13 75 / 0.18)" }}>
        © {new Date().getFullYear()} Monica Café  ·  All rights reserved  ·  Santa Monica, CA
      </div>
    </footer>
  );
}
