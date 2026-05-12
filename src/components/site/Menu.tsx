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
    <section id="menu" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-20" style={{ backgroundColor: "oklch(0.97 0.015 80)", backgroundImage: "radial-gradient(ellipse at top, oklch(0.93 0.03 75 / 0.7), transparent 60%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span data-reveal className="text-[11px] uppercase tracking-[0.4em] font-medium" style={{ color: "oklch(0.71 0.13 75)" }}>
            From Our Kitchen
          </span>
          <h2 data-reveal data-reveal-delay="1" className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium text-balance leading-[1.02]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Food worth <em className="italic" style={{ color: "oklch(0.42 0.07 50)" }}>coming back for</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
          {items.map((item, i) => (
            <article
              key={item.name}
              data-reveal
              data-reveal-delay={String((i % 6) + 1)}
              className="group lift rounded-2xl"
            >
              <div className="img-warm overflow-hidden rounded-2xl aspect-square shadow-soft">
                <img
                  src={item.img}
                  alt={item.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-medium tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {item.name}
              </h3>
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
