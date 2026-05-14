import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Ambient café soundscape — synthesized via Web Audio (no external file needed).
 * Layers gentle brown noise + a low warm pad to evoke a coffee-shop hum.
 * Off by default; user must opt-in (browser autoplay policy).
 */
export function AmbientSound() {
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; stop: () => void } | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    return () => {
      nodesRef.current?.stop();
      ctxRef.current?.close().catch(() => {});
    };
  }, []);

  async function start() {
    if (nodesRef.current) return;
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    const ctx: AudioContext = ctxRef.current ?? new Ctx();
    ctxRef.current = ctx;
    if (ctx.state === "suspended") await ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Brown noise via ScriptProcessor-free buffer source
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 480;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.55;

    noise.connect(noiseFilter).connect(noiseGain).connect(master);

    // Warm low pad
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 110;
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 138;
    const padGain = ctx.createGain();
    padGain.gain.value = 0.04;
    osc.connect(padGain);
    osc2.connect(padGain);
    padGain.connect(master);

    noise.start();
    osc.start();
    osc2.start();

    // Fade in
    master.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.2);

    nodesRef.current = {
      gain: master,
      stop: () => {
        try {
          master.gain.cancelScheduledValues(ctx.currentTime);
          master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
          setTimeout(() => {
            try { noise.stop(); osc.stop(); osc2.stop(); } catch {}
          }, 700);
        } catch {}
      },
    };
  }

  function stop() {
    nodesRef.current?.stop();
    nodesRef.current = null;
  }

  function toggle() {
    if (on) {
      stop();
      setOn(false);
    } else {
      start();
      setOn(true);
    }
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Mute café ambience" : "Play café ambience"}
      title={on ? "Mute café ambience" : "Play café ambience"}
      className="fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-[60] glass-dark rounded-full h-11 w-11 flex items-center justify-center transition-transform hover:scale-105"
      style={{ color: "oklch(0.78 0.13 75)" }}
    >
      {on ? <Volume2 size={16} /> : <VolumeX size={16} />}
      {on && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 0 2px oklch(0.71 0.13 75 / 0.4)",
            animation: "monica-ping 2s ease-in-out infinite",
          }}
        />
      )}
    </button>
  );
}
