import { useEffect } from "react";

/**
 * Time-based theming. Adds a data attribute to <html> based on the local hour:
 *   morning  (6–11)   — bright, golden
 *   midday   (11–16)  — neutral warm
 *   evening  (16–20)  — amber, moody
 *   night    (20–6)   — deep espresso
 * Stylesheet rules can target [data-time="evening"] etc. for subtle filter tweaks.
 */
export function TimeTheme() {
  useEffect(() => {
    const apply = () => {
      const h = new Date().getHours();
      const mode =
        h >= 6 && h < 11 ? "morning"
        : h >= 11 && h < 16 ? "midday"
        : h >= 16 && h < 20 ? "evening"
        : "night";
      document.documentElement.setAttribute("data-time", mode);
    };
    apply();
    const id = setInterval(apply, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);
  return null;
}
