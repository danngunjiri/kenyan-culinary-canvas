import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/Menu";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Reservation } from "@/components/Reservation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jiko — Authentic Kenyan Flavors, Served Fresh" },
      { name: "description", content: "Premium Kenyan dining in Nairobi. Nyama choma, pilau, Swahili coastal cuisine, cocktails and live nights at Jiko Restaurant." },
      { property: "og:title", content: "Jiko — Authentic Kenyan Flavors" },
      { property: "og:description", content: "A modern home for authentic Kenyan cuisine — fire-grilled, family-recipe, fiercely local." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-charcoal text-cream">
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
