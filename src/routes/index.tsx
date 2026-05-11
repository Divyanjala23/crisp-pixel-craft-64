import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FreshnessGrid } from "@/components/site/FreshnessGrid";
import { SocialProof } from "@/components/site/SocialProof";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <FreshnessGrid />
      <SocialProof />
      <Visit />
      <Footer />
    </main>
  );
}
