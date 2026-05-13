import { useEffect, useState } from "react";

function isOpenNow(now: Date) {
  // Open daily 7:30 - 16:00 local time
  const m = now.getHours() * 60 + now.getMinutes();
  return m >= 7 * 60 + 30 && m < 16 * 60;
}

export function OpenPill() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  const open = isOpenNow(now);
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div
      className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.35em] backdrop-blur"
      style={{
        backgroundColor: "oklch(0.10 0.02 50 / 0.55)",
        border: "1px solid oklch(0.71 0.13 75 / 0.35)",
        color: "oklch(0.97 0.015 80)",
      }}
    >
      <span className="relative inline-flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{
            backgroundColor: open ? "oklch(0.78 0.18 145)" : "oklch(0.65 0.18 30)",
            animation: "monica-ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: open ? "oklch(0.72 0.18 145)" : "oklch(0.6 0.18 30)" }}
        />
      </span>
      <span>{open ? "Open Now" : "Closed"} · {time}</span>
    </div>
  );
}
