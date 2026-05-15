import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { href: "#top", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#visit", label: "Visit Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-4 z-[90] flex justify-center pointer-events-none transition-all duration-500 ${scrolled ? "top-2" : "top-4"}`}>
      <nav
        className={`pointer-events-auto w-full max-w-6xl rounded-full pl-6 pr-2 flex items-center justify-between shadow-soft transition-all duration-500 ${
          scrolled ? "glass-dark py-1.5" : "glass py-2.5"
        }`}
      >
        <a
          href="#top"
          className={`font-medium tracking-[0.2em] uppercase transition-all duration-500 ${scrolled ? "text-xs" : "text-sm"}`}
          style={{ fontFamily: "var(--font-serif)", color: "oklch(0.97 0.015 80)" }}
        >
          Monica <span className="italic" style={{ color: "oklch(0.78 0.13 75)" }}>Café</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[11px] uppercase tracking-[0.3em] transition-colors duration-300 hover:text-[color:oklch(0.78_0.13_75)]"
              style={{ color: "oklch(0.97 0.015 80 / 0.85)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={SITE.toastUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-gold ripple rounded-full font-medium tracking-wide transition-all duration-500 ${
            scrolled ? "px-4 sm:px-5 py-2 text-[11px] sm:text-xs" : "px-5 sm:px-6 py-2.5 text-xs sm:text-[13px]"
          }`}
        >
          Order Online →
        </a>
      </nav>
    </header>
  );
}
