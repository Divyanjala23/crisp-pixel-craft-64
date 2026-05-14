import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that toggles `is-visible`
 * on any element with [data-reveal]. Also wires a global click
 * delegate for `.ripple` buttons (sets --rx/--ry and toggles
 * .is-rippling so the CSS ripple keyframe runs).
 */
export function RevealRoot() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
      );
      els.forEach((el) => io!.observe(el));
    } else {
      els.forEach((el) => el.classList.add("is-visible"));
    }

    const onClick = (ev: MouseEvent) => {
      const target = (ev.target as HTMLElement | null)?.closest<HTMLElement>(".ripple");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--rx", `${ev.clientX - rect.left}px`);
      target.style.setProperty("--ry", `${ev.clientY - rect.top}px`);
      target.classList.remove("is-rippling");
      void target.offsetWidth;
      target.classList.add("is-rippling");
      window.setTimeout(() => target.classList.remove("is-rippling"), 700);
    };
    document.addEventListener("click", onClick);

    return () => {
      io?.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);
  return null;
}
