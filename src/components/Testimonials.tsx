// src/components/Testimonials.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import depo1 from "@/assets/videos/depoimentolucy1.mp4";
import depo2 from "@/assets/videos/depoimentolucy2.mp4";
import depo3 from "@/assets/videos/depoimentolucy3.mp4";
import depo4 from "@/assets/videos/depoimentolucy4.mp4";

const videos = [depo1, depo2, depo3, depo4];

export default function Testimonials() {
  const isMobile = useIsMobile();
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
      className="relative py-32 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* CARD PRETO */}
        <div
          className={`relative flex justify-center z-10 ${
            isMobile ? "mb-12" : "mb-[-140px]"
          }`}
        >
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl rounded-3xl bg-black px-10 pt-14 pb-20 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja quem já usa.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Junte-se a milhares de pessoas que transformaram sua alimentação.
            </p>
          </motion.div>
        </div>

        {/* SLIDER UNIFICADO (DESKTOP + MOBILE) */}
        <div className="relative flex justify-center items-center h-[480px] mt-16">
          <VideoCard
            src={videos[left]}
            position="left"
            isMobile={isMobile}
          />

          <VideoCard
            src={videos[active]}
            active
            isMobile={isMobile}
          />

          <VideoCard
            src={videos[right]}
            position="right"
            isMobile={isMobile}
          />

          {!isMobile && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 md:left-16 z-30 p-3 rounded-full bg-white/90 shadow-md hover:bg-white transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="absolute right-4 md:right-16 z-30 p-3 rounded-full bg-white/90 shadow-md hover:bg-white transition"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function VideoCard({
  src,
  active = false,
  position,
  isMobile,
}: {
  src: string;
  active?: boolean;
  position?: "left" | "right";
  isMobile: boolean;
}) {
  const base =
    "absolute rounded-3xl overflow-hidden bg-black shadow-2xl transition-all duration-500";

  const offset = isMobile ? 180 : 320;
  const scaleSide = isMobile ? "scale-[0.85]" : "scale-90";

  const variants = {
    center: "z-20 scale-100 opacity-100",
    left: `z-10 ${scaleSide} -translate-x-[${offset}px] opacity-40 blur-[1px]`,
    right: `z-10 ${scaleSide} translate-x-[${offset}px] opacity-40 blur-[1px]`,
  };

  const cls = active
    ? variants.center
    : position === "left"
    ? variants.left
    : variants.right;

  return (
    <div
      className={`${base} ${cls}`}
      style={{
        width: isMobile ? 240 : 260,
        height: isMobile ? 420 : 440,
      }}
    >
      <video
        src={src}
        controls
        preload="metadata"
        poster={src}
        className="w-full h-full object-cover"
      />

      <Stars />
    </div>
  );
}

/* ================= STARS ================= */

function Stars() {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}
