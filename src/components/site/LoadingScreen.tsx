import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setHide(true), 1400);
    const t2 = setTimeout(() => setGone(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted || gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="grain absolute inset-0" />
      <div className="relative flex flex-col items-center gap-6 text-center px-6">
        <div
          className="text-[10px] uppercase tracking-[0.5em]"
          style={{ color: "oklch(0.78 0.13 75)" }}
        >
          Santa Monica · CA
        </div>
        <h1
          className="text-5xl sm:text-7xl"
          style={{
            fontFamily: "var(--font-serif)",
            color: "oklch(0.97 0.015 80)",
            animation: "monica-rise 1s cubic-bezier(.2,.7,.2,1) forwards",
          }}
        >
          Monica <span className="italic" style={{ color: "oklch(0.82 0.13 80)" }}>Café</span>
        </h1>
        <div
          className="h-[1px] w-40 overflow-hidden"
          style={{ background: "oklch(0.97 0.015 80 / 0.15)" }}
        >
          <div
            className="h-full"
            style={{
              background: "var(--gradient-gold)",
              animation: "monica-load 1.2s ease-in-out forwards",
            }}
          />
        </div>
        <div
          className="text-[10px] uppercase tracking-[0.4em]"
          style={{ color: "oklch(0.97 0.015 80 / 0.6)" }}
        >
          Brewing your experience
        </div>
      </div>
      <style>{`
        @keyframes monica-load {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
