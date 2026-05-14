import smashedEggs from "@/assets/menu/smashed-eggs.jpg";
import matchaLatte from "@/assets/menu/matcha-latte.jpg";
import turkishCoffee from "@/assets/menu/turkish-coffee.jpg";
import cilbir from "@/assets/menu/cilbir.jpg";
import coffeeCake from "@/assets/menu/coffee-cake.jpg";
import breakfastWrap from "@/assets/menu/breakfast-wrap.jpg";
import eggSandwich from "@/assets/menu/egg-sandwich.jpg";
import breakfastSalad from "@/assets/menu/breakfast-salad.jpg";
import granolaBowl from "@/assets/menu/granola-bowl.jpg";
import caesarWrap from "@/assets/menu/caesar-wrap.jpg";
import pressedSandwich from "@/assets/menu/pressed-sandwich.jpg";
import almondToast from "@/assets/menu/almond-toast.jpg";
import { SITE } from "@/lib/site";

type Item = { img: string; name: string; tag: string; span?: string; hot?: boolean };

// Bento layout — varied sizes for editorial feel.
const items: Item[] = [
  { img: cilbir, name: "Çılbır — Turkish Eggs", tag: "Signature", span: "md:col-span-2 md:row-span-2", hot: true },
  { img: smashedEggs, name: "Smashed Eggs", tag: "Brunch", hot: true },
  { img: matchaLatte, name: "Matcha Latte", tag: "Drinks", hot: true },
  { img: breakfastWrap, name: "Breakfast Wrap", tag: "Brunch" },
  { img: turkishCoffee, name: "Turkish Coffee", tag: "Drinks", hot: true },
  { img: eggSandwich, name: "Egg Sandwich", tag: "Brunch", span: "md:col-span-2" },
  { img: granolaBowl, name: "Granola Bowl", tag: "Bowls" },
  { img: breakfastSalad, name: "Breakfast Salad", tag: "Bowls" },
  { img: caesarWrap, name: "Chicken Caesar Wrap", tag: "Lunch" },
  { img: pressedSandwich, name: "Pressed Sandwich", tag: "Lunch" },
  { img: coffeeCake, name: "Coffee Cake", tag: "Pastry", hot: true },
  { img: almondToast, name: "Almond Butter Toast", tag: "Toast" },
];

export function Menu() {
  return (
    <section
      id="menu"
      className="relative py-32 sm:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden"
      style={{
        backgroundColor: "oklch(0.97 0.015 80)",
        backgroundImage:
          "radial-gradient(ellipse at top, oklch(0.93 0.03 75 / 0.7), transparent 60%)",
      }}
    >
      <div className="blob" style={{ width: 380, height: 380, top: "10%", left: "-120px", opacity: 0.5 }} />
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span data-reveal className="text-[11px] uppercase tracking-[0.45em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
              ◆  From Our Kitchen
            </span>
            <h2
              data-reveal data-reveal-delay="1"
              className="mt-5 text-5xl sm:text-7xl lg:text-8xl font-medium text-balance leading-[0.95]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Food worth <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>coming back for.</em>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="2" className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Twelve dishes. Real ingredients. Sourced every morning from the
            Santa Monica Farmers Market — pulled, poached, and plated with
            Aegean care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px] gap-4 sm:gap-5">
          {items.map((item, i) => (
            <article
              key={item.name}
              data-reveal
              data-reveal-delay={String((i % 6) + 1)}
              className={`group relative overflow-hidden rounded-3xl shadow-soft lift img-warm ${item.span ?? ""}`}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* readable gradient */}
              <div
                className="absolute inset-0 z-[1] opacity-90 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 35%, oklch(0.10 0.02 50 / 0.85) 100%)",
                }}
              />
              <div className="absolute top-4 left-4 z-[2]">
                <span
                  className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.97 0.015 80 / 0.85)",
                    color: "oklch(0.16 0.025 50)",
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-[2] p-5 sm:p-6">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-medium leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.97 0.015 80)" }}
                >
                  {item.name}
                </h3>
                <div
                  className="mt-3 h-px w-10 transition-all duration-500 group-hover:w-20"
                  style={{ backgroundColor: "oklch(0.78 0.13 75)" }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center" data-reveal>
          <a
            href={SITE.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-9 py-4 text-sm font-medium tracking-wide shadow-soft"
          >
            View Full Menu & Order →
          </a>
        </div>
      </div>
    </section>
  );
}
