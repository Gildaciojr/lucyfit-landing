import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMotionConfig } from "@/lib/motion-config";

import chatTyping from "@/assets/gifs/chat-typing.gif";
import heroChat from "@/assets/gifs/hero-chat.gif";
import mealGif from "@/assets/gifs/meal-animation.gif";

const features = [
  {
    id: 0,
    title: "Capture sua refeição e deixe a I.A fazer o resto.",
    text: "Envie uma foto e receba análise automática de calorias, nutrientes e sugestões de melhoria.",
    media: chatTyping,
  },
  {
    id: 1,
    title: "Fale com sua I.A como se fosse um nutricionista.",
    text: "Descreva seu prato por voz ou mensagem e receba a análise completa instantaneamente.",
    media: heroChat,
  },
  {
    id: 2,
    title: "Controle total, sem esforço.",
    text: "Acompanhe em tempo real quanto pode comer no dia, baseado nas suas metas.",
    media: mealGif,
  },
];

function MediaRenderer({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

function FeatureCard({
  item,
  index,
  activeIndex,
  setActiveIndex,
  activatedRef,
}: {
  item: (typeof features)[0];
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  activatedRef: React.MutableRefObject<Set<number>>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  // ✅ HOOK SEMPRE CHAMADO (regra do React)
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
  });

  useEffect(() => {
    // 🔒 Mobile IGNORA completamente viewport logic
    if (isMobile) return;

    // 🔒 Cada card ativa apenas UMA vez
    if (isInView && !activatedRef.current.has(index)) {
      activatedRef.current.add(index);
      setActiveIndex(index);
    }
  }, [isInView, isMobile, index, setActiveIndex, activatedRef]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setActiveIndex(index)}
      className={`relative overflow-hidden rounded-2xl p-6 border transition-all ${
        isActive
          ? "bg-gradient-to-br from-white via-purple-50/60 to-white border-purple-300 shadow-xl"
          : "bg-white border-purple-100 shadow-md"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>

      {/* MOBILE MEDIA */}
      <div className="lg:hidden mt-5 rounded-xl overflow-hidden shadow">
        <MediaRenderer
          src={item.media}
          alt={item.title}
          className="w-full object-cover"
        />
      </div>

      {!isMobile && isActive && (
        <div className="mt-5 h-1.5 w-full rounded-full bg-purple-100 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
        </div>
      )}
    </div>
  );
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const motionCfg = useMotionConfig();

  // 🔒 Guarda quais cards já ativaram (não reativa ao voltar scroll)
  const activatedRef = useRef<Set<number>>(new Set());

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* TÍTULO — SEMPRE VISÍVEL */}
        {isMobile ? (
          <h2 className="text-4xl font-bold text-center mb-20">
            Como a LucyFit te ajuda todos os dias
          </h2>
        ) : (
          <motion.h2
            {...motionCfg}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Como a LucyFit te ajuda todos os dias
          </motion.h2>
        )}

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            {features.map((item, index) => (
              <FeatureCard
                key={item.id}
                item={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                activatedRef={activatedRef}
              />
            ))}
          </div>

          {/* DESKTOP MEDIA */}
          <div className="hidden lg:block sticky top-32">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-purple-200 bg-purple-50/40">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <MediaRenderer
                  src={features[activeIndex].media}
                  alt="LucyFit em ação"
                  className="w-full object-cover max-h-[650px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
