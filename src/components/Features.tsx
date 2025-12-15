import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import chatTyping from "@/assets/gifs/chat-typing.gif";
import heroChat from "@/assets/gifs/hero-chat.gif";
import mealVideo from "@/assets/gifs/meal-animation.webm";

/* ✅ TIPAGEM CORRETA */
type FeatureMediaType = "image" | "video";

type FeatureItem = {
  id: number;
  title: string;
  text: string;
  media: string;
  type: FeatureMediaType;
};

const features: FeatureItem[] = [
  {
    id: 0,
    title: "Capture sua refeição e deixe a I.A fazer o resto.",
    text: "Envie uma foto e receba análise automática de calorias, nutrientes e sugestões de melhoria.",
    media: chatTyping,
    type: "image",
  },
  {
    id: 1,
    title: "Fale com sua I.A como se fosse um nutricionista.",
    text: "Descreva seu prato por voz ou mensagem e receba a análise completa instantaneamente.",
    media: heroChat,
    type: "image",
  },
  {
    id: 2,
    title: "Controle total, sem esforço.",
    text: "Acompanhe em tempo real quanto pode comer no dia, baseado nas suas metas.",
    media: mealVideo,
    type: "video",
  },
];

function MediaRenderer({
  src,
  type,
  alt,
  className,
}: {
  src: string;
  type: FeatureMediaType;
  alt: string;
  className?: string;
}) {
  if (type === "video") {
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
  item: FeatureItem;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (!isMobile && isInView) {
      setActiveIndex(index);
    }
  }, [isInView, isMobile, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setActiveIndex(index)}
      className={`rounded-2xl p-6 border transition-all ${
        isActive
          ? "bg-gradient-to-br from-white via-purple-50/60 to-white border-purple-300 shadow-xl"
          : "bg-white border-purple-100 shadow-md"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>

      <div className="mt-5 rounded-xl overflow-hidden shadow">
        <MediaRenderer
          src={item.media}
          type={item.type}
          alt={item.title}
          className="w-full object-cover"
        />
      </div>

      {/* CTA */}
      <a
        href="#pricing"
        className="inline-block mt-4 text-sm font-semibold text-purple-600 hover:text-purple-700"
      >
        Assine agora →
      </a>
    </div>
  );
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Como a LucyFit te ajuda todos os dias
        </h2>

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
              <MediaRenderer
                src={features[activeIndex].media}
                type={features[activeIndex].type}
                alt="LucyFit em ação"
                className="w-full object-cover max-h-[650px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
