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

const items = [
  { img: smashedEggs, name: "Smashed Eggs" },
  { img: matchaLatte, name: "Matcha Latte" },
  { img: turkishCoffee, name: "Turkish Coffee" },
  { img: cilbir, name: "Çılbır — Turkish Eggs" },
  { img: coffeeCake, name: "Coffee Cake" },
  { img: breakfastWrap, name: "Breakfast Wrap" },
  { img: eggSandwich, name: "Egg Sandwich" },
  { img: breakfastSalad, name: "Breakfast Salad" },
  { img: granolaBowl, name: "Granola Bowl" },
  { img: caesarWrap, name: "Chicken Caesar Wrap" },
  { img: pressedSandwich, name: "Pressed Sandwich" },
  { img: almondToast, name: "Almond Butter Toast" },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: "oklch(0.95 0.008 60)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: "oklch(0.47 0.13 45)" }}>
            From Our Kitchen
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-light text-balance" style={{ fontFamily: "'Fraunces', serif" }}>
            Food worth <em className="italic">coming back for</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <article key={item.name} className="group">
              <div className="overflow-hidden rounded-2xl aspect-square shadow-soft">
                <img
                  src={item.img}
                  alt={item.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-medium" style={{ fontFamily: "'Fraunces', serif" }}>
                {item.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={SITE.toastUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-soft"
          >
            View Full Menu & Order →
          </a>
        </div>
      </div>
    </section>
  );
}
