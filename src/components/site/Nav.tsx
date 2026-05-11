import { SITE } from "@/lib/site";

export function Nav() {
  return (
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <nav className="glass pointer-events-auto w-full max-w-6xl rounded-full pl-6 pr-2 sm:pl-7 sm:pr-2 py-2 flex items-center justify-between shadow-soft">
        <a href="#top" className="font-semibold tracking-tight text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
          <span className="text-lg sm:text-xl italic">Monica</span>
          <span className="text-lg sm:text-xl ml-1">Café</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="#story" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">Story</a>
          <a href="#signature" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">Signature</a>
          <a href="#catering" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">Catering</a>
          <a href="#visit" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">Visit</a>
        </div>
        <a
          href={SITE.toastUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors shadow-soft"
        >
          Order Now →
        </a>
      </nav>
    </header>
  );
}
