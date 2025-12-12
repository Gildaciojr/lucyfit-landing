// src/components/Features.tsx
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// GIFs corretos
import chatTyping from "@/assets/gifs/chat-typing.gif";
import heroChat from "@/assets/gifs/hero-chat.gif";
import mealAnimation from "@/assets/gifs/meal-animation.gif";

const features = [
  {
    id: 0,
    title: "Capture sua refeição e deixe a I.A fazer o resto.",
    text: "Envie uma foto e receba análise automática de calorias, nutrientes e sugestões de melhoria. Simples, rápido e preciso.",
    gif: chatTyping,
  },
  {
    id: 1,
    title: "Fale com sua I.A como se fosse um nutricionista.",
    text: "Descreva seu prato por voz ou mensagem e receba a análise completa instantaneamente.",
    gif: heroChat,
  },
  {
    id: 2,
    title: "Controle total, sem esforço.",
    text: "Acompanhe em tempo real quanto pode comer no dia, baseado nas suas metas e no seu histórico.",
    gif: mealAnimation,
  },
];

function FeatureCard({
  item,
  index,
  activeIndex,
  setActiveIndex,
}: {
  item: (typeof features)[0];
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <motion.div
      ref={ref}
      initial={isMobile ? false : { opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: isMobile ? 0 : 0.6 }}
      className={`
        relative overflow-hidden rounded-2xl p-6 border transition-all
        ${
          isActive
            ? "bg-gradient-to-br from-white via-purple-50/60 to-white border-purple-300 shadow-[0_18px_45px_rgba(88,28,135,0.18)]"
            : "bg-white border-purple-100 shadow-[0_10px_30px_rgba(88,28,135,0.08)]"
        }
      `}
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {item.text}
      </p>

      {/* MOBILE — GIF JUNTO */}
      <div className="lg:hidden mt-5 rounded-xl overflow-hidden shadow">
        <img
          src={item.gif}
          alt={item.title}
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* BARRA — SOMENTE CARD ATIVO */}
      {isActive && (
        <div className="mt-5 h-1.5 w-full rounded-full bg-purple-100 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Como a LucyFit te ajuda todos os dias
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div className="space-y-10">
            {features.map((item, index) => (
              <FeatureCard
                key={item.id}
                item={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>

          {/* DESKTOP — GIF GRANDE */}
          <div className="hidden lg:block sticky top-32">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-200 bg-purple-50/40 backdrop-blur-xl">
              <motion.img
                key={activeIndex}
                src={features[activeIndex].gif}
                alt="LucyFit em ação"
                className="w-full object-cover max-h-[650px]"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
