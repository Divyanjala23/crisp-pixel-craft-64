import { SITE } from "@/lib/site";

const links = [
  { href: "#top", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#visit", label: "Visit Us" },
];

export function Nav() {
  return (
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <nav className="glass pointer-events-auto w-full max-w-6xl rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-soft">
        <a href="#top" className="font-semibold tracking-[0.18em] text-foreground uppercase text-sm" style={{ fontFamily: "'Fraunces', serif" }}>
          Monica <span className="italic" style={{ color: "oklch(0.47 0.13 45)" }}>Café</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={SITE.toastUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors shadow-soft"
        >
          Order Online →
        </a>
      </nav>
    </header>
  );
}
