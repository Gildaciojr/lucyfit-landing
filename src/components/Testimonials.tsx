// src/components/Testimonials.tsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import depo1 from "@/assets/videos/depoimentolucy1.mp4";
import depo2 from "@/assets/videos/depoimentolucy2.mp4";
import depo3 from "@/assets/videos/depoimentolucy3.mp4";
import depo4 from "@/assets/videos/depoimentolucy4.mp4";

type CardPos = "left" | "center" | "right";

export default function Testimonials() {
  const isMobile = useIsMobile();

  const videos = useMemo(() => [depo1, depo2, depo3, depo4], []);
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () => setActive((i) => (i === videos.length - 1 ? 0 : i + 1));

  const leftIndex = (active - 1 + videos.length) % videos.length;
  const rightIndex = (active + 1) % videos.length;

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* CARD PRETO — MANTIDO (PREMIUM) */}
        <div
          className={`relative flex justify-center z-10 ${
            isMobile ? "mb-10" : "mb-[-160px]"
          }`}
        >
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl rounded-3xl bg-black px-10 pt-14 pb-28 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja quem já usa.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Junte-se a milhares de pessoas que transformaram sua alimentação.
            </p>
          </motion.div>
        </div>

        {/* CARROSSEL “STACKED” — IGUAL NO DESKTOP E NO MOBILE */}
        <div
          className={`relative flex justify-center items-center ${
            isMobile ? "h-[520px] mt-2" : "h-[520px] mt-12"
          }`}
        >
          {/* LEFT */}
          <VideoCard
            src={videos[leftIndex]}
            pos="left"
            isMobile={isMobile}
            onClick={() => setActive(leftIndex)}
          />

          {/* CENTER */}
          <VideoCard
            src={videos[active]}
            pos="center"
            isMobile={isMobile}
            onClick={() => {}}
          />

          {/* RIGHT */}
          <VideoCard
            src={videos[rightIndex]}
            pos="right"
            isMobile={isMobile}
            onClick={() => setActive(rightIndex)}
          />

          {/* SETAS — ATIVAS TANTO NO DESKTOP QUANTO NO MOBILE */}
          <button
            onClick={prev}
            aria-label="Vídeo anterior"
            className={`absolute z-30 rounded-full bg-white/90 shadow-md hover:bg-white transition ${
              isMobile
                ? "left-2 p-2"
                : "left-6 md:left-16 p-3"
            }`}
          >
            <ChevronLeft className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
          </button>

          <button
            onClick={next}
            aria-label="Próximo vídeo"
            className={`absolute z-30 rounded-full bg-white/90 shadow-md hover:bg-white transition ${
              isMobile
                ? "right-2 p-2"
                : "right-6 md:right-16 p-3"
            }`}
          >
            <ChevronRight className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
          </button>
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  src,
  pos,
  isMobile,
  onClick,
}: {
  src: string;
  pos: CardPos;
  isMobile: boolean;
  onClick: () => void;
}) {
  // ✅ Ajustes finos (mantém premium no desktop e encaixa no mobile)
  const W = isMobile ? 250 : 270;
  const H = isMobile ? 440 : 460;

  const offsetX = isMobile ? 165 : 320;
  const scaleSide = isMobile ? 0.90 : 0.90;

  const styleByPos: Record<CardPos, React.CSSProperties> = {
    center: {
      transform: "translateX(0px) scale(1)",
      opacity: 1,
      zIndex: 20,
      filter: "none",
    },
    left: {
      transform: `translateX(-${offsetX}px) scale(${scaleSide})`,
      opacity: isMobile ? 0.55 : 0.45,
      zIndex: 10,
      filter: "blur(0.6px)",
    },
    right: {
      transform: `translateX(${offsetX}px) scale(${scaleSide})`,
      opacity: isMobile ? 0.55 : 0.45,
      zIndex: 10,
      filter: "blur(0.6px)",
    },
  };

  const isCenter = pos === "center";

  return (
    <div
      onClick={onClick}
      className="absolute rounded-3xl overflow-hidden shadow-2xl bg-black cursor-pointer"
      style={{
        width: W,
        height: H,
        transition: "transform 450ms ease, opacity 450ms ease, filter 450ms ease",
        ...styleByPos[pos],
      }}
    >
      {/* ✅ Mobile performance:
          - Centro: preload metadata + controls
          - Laterais: preload none (não baixa vídeo inteiro), sem controls
      */}
      <video
        src={src}
        controls={isCenter}
        preload={isCenter ? "metadata" : "none"}
        playsInline
        muted={false}
        className="w-full h-full object-cover"
      />

      {/* ⭐ Estrelas sempre visíveis */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400 drop-shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
