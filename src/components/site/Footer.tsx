export function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-6 text-sm text-muted-foreground">
        <p style={{ fontFamily: "'Fraunces', serif" }} className="text-foreground text-lg">
          Monica <em className="italic">Café</em>
        </p>
        <p>© {new Date().getFullYear()} Monica Café · Santa Monica, CA</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Press</a>
          <a href="#" className="hover:text-foreground transition-colors">Careers</a>
        </div>
      </div>
    </footer>
  );
}
