Move the floating chat launcher (and its popup + nudge) from the bottom-right to the bottom-left, keeping the existing round chat-icon style and all current behavior.

## Changes

**`src/components/site/ChatBot.tsx`**
- Launcher button: swap `right-5 sm:right-7` → `left-5 sm:left-7`.
- First-visit nudge bubble: swap `right-5 sm:right-7` → `left-5 sm:left-7`.
- Popup panel: change `right-3 left-3 sm:left-auto sm:right-7` → `left-3 right-3 sm:right-auto sm:left-7`, and update `origin-bottom-right` → `origin-bottom-left` so the open/close animation scales from the correct corner.

No other files change. Z-index, colors, animations, WhatsApp button, and AI logic stay exactly as they are.
