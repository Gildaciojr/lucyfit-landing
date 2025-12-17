// src/pages/Index.tsx

import Hero from "@/components/Hero";
import Guarantee from "@/components/Guarantee";
import Features from "@/components/Features";
import MoreFeatures from "@/components/MoreFeatures";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <Hero />

      {/* Guarantee */}
      <Guarantee />

      {/* COMO A LUCY AJUDA */}
      <Features />

      {/* AINDA MAIS FUNÇÕES */}
      <MoreFeatures />

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* PLANOS */}
      <Pricing />

      {/* PERGUNTAS FREQUENTES */}
      <FAQ />

      {/* RODAPÉ */}
      <Footer />
    </main>
  );
}
