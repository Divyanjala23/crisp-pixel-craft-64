import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-20 py-14 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-muted-foreground">
        <div>
          <p style={{ fontFamily: "'Fraunces', serif" }} className="text-foreground text-xl">
            Monica <em className="italic">Café</em>
          </p>
          <p className="mt-2">{SITE.address}, {SITE.city}</p>
          <p className="mt-1">{SITE.hours}</p>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-foreground/70 mb-3">Contact</p>
          <p><a href={SITE.phoneHref} className="hover:text-foreground">{SITE.phone}</a></p>
          <p><a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a></p>
          <p><a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{SITE.instagramHandle}</a></p>
        </div>
        <div className="sm:text-right">
          <a
            href={SITE.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-medium hover:bg-primary/90"
          >
            Order on Toast →
          </a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} Monica Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
