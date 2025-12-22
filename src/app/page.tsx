import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero/hero";
import { ServicesSection } from "@/components/services/services-section";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <ServicesSection />
    </main>
  );
}
