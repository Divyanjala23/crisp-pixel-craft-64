import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are Mona, the friendly digital host of Monica Café — a Mediterranean-inspired specialty coffee shop in Santa Monica, California.

Tone: warm, concise, a little playful. Talk like a knowledgeable barista who loves the food. Keep replies short (2–4 sentences max unless the guest asks for detail). Use markdown sparingly.

Key facts you can share:
- Address: 508 Santa Monica Blvd, Santa Monica, CA 90401
- Hours: Open daily 7:30am – 4:00pm
- Phone: (310) 303-8997
- Email: info@monicala.com
- Service: Dine-in, takeout, delivery (Uber Eats), catering
- Order online: https://order.toasttab.com/online/monica-cafe
- Style: Aegean tradition meets Californian freshness, farm-to-table
- Signature: Çılbır (Turkish poached eggs in chili butter & garlic yogurt)
- Popular: Cortado, matcha latte, Turkish coffee, smashed eggs, breakfast wrap, granola bowl, almond butter toast, mezze, pressed sandwich
- Catering: Mediterranean breakfast spreads, mezze platters, pour-over coffee service for offices, weddings, pop-ups across LA's Westside

When someone asks to order, point them to Order Online (the Toast link). For catering, suggest emailing info@monicala.com or calling. If you don't know something specific (like a price), say so honestly and suggest calling the café.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as {
            messages: Array<{ role: "user" | "assistant"; content: string }>;
          };

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(
              JSON.stringify({ error: "AI is not configured." }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          const upstream = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-3-flash-preview",
                stream: true,
                messages: [
                  { role: "system", content: SYSTEM_PROMPT },
                  ...(messages || []).slice(-12),
                ],
              }),
            }
          );

          if (!upstream.ok) {
            if (upstream.status === 429) {
              return new Response(
                JSON.stringify({ error: "Too many messages — please wait a moment and try again." }),
                { status: 429, headers: { "Content-Type": "application/json" } }
              );
            }
            if (upstream.status === 402) {
              return new Response(
                JSON.stringify({ error: "AI credits required." }),
                { status: 402, headers: { "Content-Type": "application/json" } }
              );
            }
            const text = await upstream.text();
            console.error("AI gateway error", upstream.status, text);
            return new Response(
              JSON.stringify({ error: "AI gateway error" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(upstream.body, {
            headers: {
              "Content-Type": "text/event-stream",
              "Cache-Control": "no-cache",
              Connection: "keep-alive",
            },
          });
        } catch (e) {
          console.error("chat handler error", e);
          return new Response(
            JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
