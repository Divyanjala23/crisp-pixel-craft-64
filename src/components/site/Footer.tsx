import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 pt-20 pb-10" style={{ backgroundColor: "oklch(0.12 0.02 50)", color: "oklch(0.97 0.015 80)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-2xl tracking-[0.18em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Monica <span className="italic" style={{ color: "oklch(0.78 0.13 75)" }}>Café</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-sm">
            Mediterranean-inspired café in the heart of Santa Monica. Farm-to-table breakfast, specialty coffee, and genuine hospitality.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-5 opacity-70">Visit Us</p>
          <p className="text-sm leading-relaxed">{SITE.address}</p>
          <p className="text-sm leading-relaxed mt-1">{SITE.city}</p>
          <p className="text-sm leading-relaxed mt-4">{SITE.hours}</p>
          <p className="text-sm leading-relaxed mt-4">
            <a href={SITE.phoneHref} className="hover:opacity-80">{SITE.phone}</a>
          </p>
          <p className="text-sm leading-relaxed mt-1">
            <a href={`mailto:${SITE.email}`} className="hover:opacity-80">{SITE.email}</a>
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-5 opacity-70">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><a href={SITE.toastUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Order Online</a></li>
            <li><a href="#menu" className="hover:opacity-80">View Menu</a></li>
            <li><a href="#catering" className="hover:opacity-80">Catering</a></li>
            <li><a href="#visit" className="hover:opacity-80">Visit Us</a></li>
            <li><a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Instagram</a></li>
            <li><a href={SITE.uberEatsUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">Uber Eats</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs opacity-60 text-center tracking-wider">
        © {new Date().getFullYear()} Monica Café  ·  All rights reserved  ·  Santa Monica, CA
      </div>
    </footer>
  );
}
