// src/components/Testimonials.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import depo1 from "@/assets/videos/depoimentolucy1.mp4";
import depo2 from "@/assets/videos/depoimentolucy2.mp4";
import depo3 from "@/assets/videos/depoimentolucy3.mp4";
import depo4 from "@/assets/videos/depoimentolucy4.mp4";

const videos = [depo1, depo2, depo3, depo4];

export default function Testimonials() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Não acredite só na gente.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Veja o que usuários reais dizem sobre a Lucy Fit.
          </p>
        </div>

        {/* MOBILE */}
        {isMobile ? (
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
            {videos.map((video, i) => (
              <div
                key={i}
                className="min-w-[280px] bg-white rounded-2xl shadow-md p-4"
              >
                <video
                  src={video}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full rounded-xl"
                />

                <div className="flex justify-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* DESKTOP */
          <div className="relative flex items-center justify-center gap-8">
            {/* SETA ESQUERDA */}
            <button
              onClick={prev}
              className="absolute left-0 z-10 rounded-full bg-white shadow-lg p-3 hover:bg-purple-50"
            >
              <ChevronLeft />
            </button>

            {/* CARDS */}
            <div className="flex items-center gap-8">
              {videos.map((video, i) => {
                const isActive = i === activeIndex;

                return (
                  <div
                    key={i}
                    className={`transition-all duration-500 rounded-3xl bg-white p-4
                      ${
                        isActive
                          ? "scale-105 shadow-2xl"
                          : "scale-90 opacity-50"
                      }
                    `}
                  >
                    <video
                      src={video}
                      controls={isActive}
                      preload="metadata"
                      playsInline
                      className="w-[320px] rounded-2xl"
                    />

                    <div className="flex justify-center gap-1 mt-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SETA DIREITA */}
            <button
              onClick={next}
              className="absolute right-0 z-10 rounded-full bg-white shadow-lg p-3 hover:bg-purple-50"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
