export function Nav() {
  return (
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <nav className="glass pointer-events-auto w-full max-w-6xl rounded-full px-5 sm:px-7 py-3 flex items-center justify-between shadow-soft">
        <a href="#menu" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors hidden sm:inline">
          Menu
        </a>
        <a href="#story" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors hidden sm:inline">
          Story
        </a>
        <a href="#" className="font-semibold tracking-tight text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
          <span className="text-lg sm:text-xl italic">Monica</span>
          <span className="text-lg sm:text-xl ml-1">Café</span>
        </a>
        <a href="#hours" className="text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors hidden sm:inline">
          Hours
        </a>
        <a
          href="#visit"
          className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors shadow-soft"
        >
          Visit Us
        </a>
      </nav>
    </header>
  );
}
