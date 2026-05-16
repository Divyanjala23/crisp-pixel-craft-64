import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { InfoBar } from "@/components/site/InfoBar";
import { Story } from "@/components/site/Story";
import { Menu } from "@/components/site/Menu";
import { SocialProof } from "@/components/site/SocialProof";
import { Gallery } from "@/components/site/Gallery";
import { Catering } from "@/components/site/Catering";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";
import { RevealRoot } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { CursorGlow } from "@/components/site/CursorGlow";
import { ChatBot } from "@/components/site/ChatBot";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { AmbientSound } from "@/components/site/AmbientSound";
import { TimeTheme } from "@/components/site/TimeTheme";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <LoadingScreen />
      <TimeTheme />
      <RevealRoot />
      <CursorGlow />
      <Nav />
      <Hero />
      <InfoBar />
      <Marquee
        items={[
          "Çılbır",
          "Cortado",
          "Matcha Latte",
          "Mezze",
          "Smashed Eggs",
          "Turkish Coffee",
          "Granola Bowl",
          "Almond Toast",
        ]}
        variant="dark"
        speed={42}
      />
      <Story />
      <Marquee
        items={[
          "Farm to Table",
          "Aegean Tradition",
          "Slow Coffee",
          "Daily Sourced",
          "Santa Monica",
          "Open 7:30",
        ]}
        variant="cream"
        speed={48}
        reverse
      />
      <Menu />
      <SocialProof />
      <Catering />
      <Visit />
      <Footer />
      <AmbientSound />
      <ChatBot />
    </main>
  );
}
