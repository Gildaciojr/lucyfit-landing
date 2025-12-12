// src/components/Hero.tsx
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import heroGif from "@/assets/gifs/meal-animation.gif";
import lucyLogo from "@/assets/images/lucy-logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gradient-to-b from-white via-purple-50/40 to-white">
      
      {/* BOTÃO HOME FIXO (mobile) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar para o topo"
        className="lg:hidden fixed top-4 left-4 z-[999] bg-white/85 backdrop-blur-md border border-purple-200 shadow-lg px-3 py-2 rounded-xl flex items-center gap-2"
      >
        <img src={lucyLogo} className="h-6 w-auto" alt="LucyFit" />
      </button>

      {/* Blobs */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-[120px]"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-pink-300/30 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">

        {/* TEXTO */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 rounded-full bg-purple-100 text-purple-700 px-4 py-1 text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            Experiência premium em alimentação e treinos
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
            A forma mais simples de organizar sua alimentação, treinos e
            evolução é com a{" "}
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-purple-100/80 shadow-md backdrop-blur-sm align-middle">
              <img
                src={lucyLogo}
                alt="LucyFit"
                className="h-10 md:h-12 lg:h-10 w-auto"
              />
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Monitore treinos, acompanhe alimentação e alcance seus objetivos com
            tecnologia de ponta direto no seu WhatsApp.
          </p>

          {/* MOBILE — SOMENTE O TELEFONE (SEM HEADER E SEM TEXTO EXTRA) */}
          <div className="lg:hidden pt-4">
            <div className="mx-auto max-w-md">
              <div className="relative rounded-3xl bg-white border border-purple-200 shadow-2xl overflow-hidden">
                <img
                  src={heroGif}
                  alt="LucyFit conversando no WhatsApp"
                  className="w-full object-cover bg-white"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-purple-400/20" asChild>
              <a href="#pricing">
                Assinar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* MÉTRICAS */}
          <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                +2.000
              </span>
              <span className="text-xs text-gray-500 -mt-1">pessoas já usaram</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                +50 mil
              </span>
              <span className="text-xs text-gray-500 -mt-1">usuários ativos</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                +200kg
              </span>
              <span className="text-xs text-gray-500 -mt-1">eliminados</span>
            </div>
          </div>
        </motion.div>

        {/* DESKTOP — TELEFONE SEM HEADER */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="absolute inset-0 w-[520px] h-[520px] bg-purple-300/40 blur-[110px] rounded-full" />
          <div className="relative rounded-3xl bg-white border border-white/60 shadow-2xl overflow-hidden max-w-md md:max-w-xl">
            <img
              src={heroGif}
              alt="LucyFit conversando no WhatsApp"
              className="w-full object-cover max-h-[580px] bg-white"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
