import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's your signature dish?",
  "Are you open right now?",
  "Do you cater events?",
  "How do I order online?",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey, I'm **Mona** ✨ — your Monica Café guide. Ask me about the menu, hours, ordering, or catering.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && last.content !== "") {
          // Already streaming
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: ctrl.signal,
      });

      if (!resp.ok || !resp.body) {
        let msg = "Something went wrong. Please try again.";
        if (resp.status === 429) msg = "Too many messages — give me a moment and try again.";
        if (resp.status === 402) msg = "AI is temporarily unavailable.";
        try {
          const j = await resp.json();
          if (j?.error) msg = j.error;
        } catch {}
        setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let done = false;

      while (!done) {
        const { value, done: d } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) upsert(delta);
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Network hiccup — please try again." },
        ]);
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }

  if (!mounted) return null;

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Mona"}
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[70] btn-gold rounded-full shadow-glow flex items-center gap-2 pl-4 pr-5 py-3.5 text-sm font-medium tracking-wide"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span className="hidden sm:inline">{open ? "Close" : "Ask Mona"}</span>
      </button>

      {/* Panel */}
      <div
        className={`fixed z-[69] right-3 left-3 sm:left-auto sm:right-7 bottom-24 sm:bottom-28 w-auto sm:w-[400px] max-w-[440px] origin-bottom-right transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`}
      >
        <div
          className="rounded-3xl overflow-hidden shadow-elevated grain flex flex-col h-[min(560px,75vh)]"
          style={{
            backgroundColor: "oklch(0.10 0.02 50)",
            border: "1px solid oklch(0.71 0.13 75 / 0.3)",
            color: "oklch(0.97 0.015 80)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4 border-b"
            style={{ borderColor: "oklch(0.71 0.13 75 / 0.2)" }}
          >
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center"
              style={{ background: "var(--gradient-gold)", color: "oklch(0.16 0.025 50)" }}
            >
              <Sparkles size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
                Mona <span className="italic" style={{ color: "oklch(0.78 0.13 75)" }}>· Café Concierge</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "oklch(0.78 0.13 75)" }}>
                <span className="inline-block h-1.5 w-1.5 rounded-full mr-2" style={{ backgroundColor: "oklch(0.72 0.18 145)" }} />
                Online · replies instantly
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-3">
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <Bubble role="assistant" content="" typing />
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full transition-colors"
                  style={{
                    border: "1px solid oklch(0.71 0.13 75 / 0.35)",
                    color: "oklch(0.97 0.015 80 / 0.9)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-3 border-t"
            style={{ borderColor: "oklch(0.71 0.13 75 / 0.2)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the menu, hours, catering…"
              className="flex-1 bg-transparent rounded-full px-4 py-2.5 text-sm outline-none"
              style={{
                border: "1px solid oklch(0.71 0.13 75 / 0.3)",
                color: "oklch(0.97 0.015 80)",
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="btn-gold rounded-full h-10 w-10 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function Bubble({ role, content, typing }: { role: "user" | "assistant"; content: string; typing?: boolean }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
        style={
          isUser
            ? {
                background: "var(--gradient-gold)",
                color: "oklch(0.16 0.025 50)",
                borderBottomRightRadius: 6,
              }
            : {
                backgroundColor: "oklch(0.16 0.025 50 / 0.85)",
                color: "oklch(0.97 0.015 80)",
                border: "1px solid oklch(0.71 0.13 75 / 0.2)",
                borderBottomLeftRadius: 6,
              }
        }
      >
        {typing ? (
          <span className="inline-flex gap-1 py-1">
            <Dot delay={0} />
            <Dot delay={150} />
            <Dot delay={300} />
          </span>
        ) : (
          <Markdown text={content} />
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{
        backgroundColor: "oklch(0.78 0.13 75)",
        animation: "monica-ping 1.2s ease-in-out infinite",
        animationDelay: `${delay}ms`,
      }}
    />
  );
}

/** Tiny safe markdown — bold + links + line breaks. */
function Markdown({ text }: { text: string }) {
  // escape HTML
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const html = escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /(https?:\/\/[^\s)]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: oklch(0.78 0.13 75); text-decoration: underline;">$1</a>'
    )
    .replace(/\n/g, "<br/>");
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
