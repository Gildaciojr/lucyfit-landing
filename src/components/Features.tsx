// src/components/Features.tsx
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import chatTyping from "@/assets/gifs/chat-typing.gif";
import heroChat from "@/assets/gifs/hero-chat.gif";
import mealVideo from "@/assets/gifs/meal-animation.mp4";

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
    media: mealVideo,
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
  const isVideo = src.endsWith(".mp4");

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={className}
      />
    );
  }

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
}: {
  item: (typeof features)[0];
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (!isMobile && isInView) setActiveIndex(index);
  }, [isInView, isMobile, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => !isMobile && setActiveIndex(index)}
      className={`cursor-pointer relative overflow-hidden rounded-2xl p-6 border transition-all ${
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

      {isActive && (
        <div className="mt-5 h-1.5 w-full rounded-full bg-purple-100 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
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
    <section id="features" className="py-32 bg-white">
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
