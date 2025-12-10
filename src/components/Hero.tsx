import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroGif from "@/assets/gifs/meal-animation.gif";
import lucyLogo from "@/assets/images/lucy-logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gradient-to-b from-white via-purple-50/40 to-white">
      {/* Blobs animados */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-pink-300/30 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-4 py-1 text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            Experiência premium em alimentação e treinos
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
            A forma mais simples de organizar sua alimentação, treinos e evolução é com a{" "}
            <span
              className="
                inline-flex items-center gap-4 px-6 py-3 rounded-2xl
                bg-purple-100/80 shadow-md backdrop-blur-sm
              "
            >
              <img
                src={lucyLogo}
                alt="LucyFit"
                className="h-20 md:h-24 w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
              />
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Monitore treinos, acompanhe alimentação e alcance seus objetivos com
            tecnologia de ponta direto no seu WhatsApp.
          </p>

          {/* CTAS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base shadow-lg shadow-purple-400/20"
              asChild
            >
              <a href="#pricing">
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-gray-300"
              asChild
            >
              <a href="#how-it-works">Ver como funciona</a>
            </Button>
          </div>

          {/* UPDATED STATISTICS */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-gray-600">

            <div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                +2.000
              </span>
              <span className="ml-1">pessoas já usaram a LucyFit</span>
            </div>

            <span className="hidden sm:block h-4 w-px bg-gray-300" />

            <div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                +50 mil
              </span>
              <span className="ml-1">usuários ativos</span>
            </div>

            <span className="hidden sm:block h-4 w-px bg-gray-300" />

            <div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                +200kg
              </span>
              <span className="ml-1">eliminados</span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE — WhatsApp Preview Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 w-[360px] h-[360px] bg-purple-300/30 blur-[100px] rounded-full" />

          {/* CARD */}
          <div className="relative rounded-3xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl overflow-hidden max-w-sm">
            
            {/* Card Header */}
            <div className="px-4 py-3 flex items-center justify-between bg-white/60 border-b border-white/30">
              <div className="flex items-center gap-2">
                <img src={lucyLogo} className="h-7 w-7 rounded-full" />
                <div>
                  <p className="text-xs font-semibold">LucyFit • Assistente IA</p>
                  <p className="text-[10px] text-gray-500">Conversa ativa no WhatsApp</p>
                </div>
              </div>
              <span className="text-[10px] text-gray-500">em tempo real</span>
            </div>

            {/* WhatsApp GIF */}
            <img
              src={heroGif}
              alt="LucyFit conversando no WhatsApp"
              className="w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
