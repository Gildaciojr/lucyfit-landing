// src/components/Testimonials.tsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import depo1 from "@/assets/videos/depoimentolucy1.mp4";
import depo2 from "@/assets/videos/depoimentolucy2.mp4";
import depo3 from "@/assets/videos/depoimentolucy3.mp4";
import depo4 from "@/assets/videos/depoimentolucy4.mp4";

type Pos = "left" | "center" | "right";

export default function Testimonials() {
  const isMobile = useIsMobile();

  const videos = useMemo(() => [depo1, depo2, depo3, depo4], []);
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === videos.length - 1 ? 0 : i + 1));

  const left = (active - 1 + videos.length) % videos.length;
  const right = (active + 1) % videos.length;

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-purple-50/40 to-black overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* CARD PRETO (TÍTULO) */}
        <div className="relative flex justify-center z-20 mb-[-120px]">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl rounded-3xl bg-black px-10 pt-14 pb-32 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja quem já usa.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Junte-se a milhares de pessoas que transformaram sua alimentação.
            </p>
          </motion.div>
        </div>

        {/* FUNDO PRETO CONTÍNUO (evita branco entre cards) */}
        <div className="relative bg-black pt-36 pb-24 rounded-b-[48px]">
          <div
            className={`relative flex justify-center items-center ${
              isMobile ? "h-[520px]" : "h-[520px]"
            }`}
          >
            <VideoCard
              src={videos[left]}
              pos="left"
              isMobile={isMobile}
              onClick={() => setActive(left)}
            />

            <VideoCard
              src={videos[active]}
              pos="center"
              isMobile={isMobile}
            />

            <VideoCard
              src={videos[right]}
              pos="right"
              isMobile={isMobile}
              onClick={() => setActive(right)}
            />

            {/* SETAS */}
            <button
              onClick={prev}
              className={`absolute z-30 rounded-full bg-white/90 shadow-md hover:bg-white transition ${
                isMobile ? "left-2 p-2" : "left-6 md:left-16 p-3"
              }`}
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className={`absolute z-30 rounded-full bg-white/90 shadow-md hover:bg-white transition ${
                isMobile ? "right-2 p-2" : "right-6 md:right-16 p-3"
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function VideoCard({
  src,
  pos,
  isMobile,
  onClick,
}: {
  src: string;
  pos: Pos;
  isMobile: boolean;
  onClick?: () => void;
}) {
  const W = isMobile ? 240 : 270;
  const H = isMobile ? 420 : 460;

  const offset = isMobile ? 150 : 320;

  const styles: Record<Pos, React.CSSProperties> = {
    center: {
      transform: "translateX(0) scale(1)",
      zIndex: 20,
      opacity: 1,
      filter: "none",
    },
    left: {
      transform: `translateX(-${offset}px) scale(0.9)`,
      zIndex: 10,
      opacity: 0.45,
      filter: "blur(0.6px)",
    },
    right: {
      transform: `translateX(${offset}px) scale(0.9)`,
      zIndex: 10,
      opacity: 0.45,
      filter: "blur(0.6px)",
    },
  };

  const isCenter = pos === "center";

  return (
    <div
      onClick={onClick}
      className="absolute cursor-pointer transition-all duration-500"
      style={{ ...styles[pos] }}
    >
      <div
        className="rounded-3xl overflow-hidden bg-black shadow-2xl"
        style={{ width: W, height: H }}
      >
        <video
          src={src}
          controls={isCenter}
          preload={isCenter ? "metadata" : "none"}
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* ⭐ ESTRELAS FORA DO CARD */}
      <div className="mt-3 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400 drop-shadow"
          />
        ))}
      </div>
    </div>
  );
}
