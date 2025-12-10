import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Mic, BarChart3 } from "lucide-react";

import chatGif from "@/assets/gifs/chat-typing.gif";
import voiceGif from "@/assets/gifs/hero-chat.gif";
import controlGif from "@/assets/gifs/meal-animation.gif";

const features = [
  {
    icon: Camera,
    title: "Capture sua refeição e deixe a I.A fazer o resto.",
    description:
      "Envie uma foto e receba análise automática de calorias, nutrientes e sugestões de melhoria. Simples, rápido e preciso.",
    media: chatGif,
  },
  {
    icon: Mic,
    title: "Fale com sua I.A como se fosse um nutricionista.",
    description:
      "Descreva seu prato por voz ou mensagem e receba a análise completa instantaneamente.",
    media: voiceGif,
  },
  {
    icon: BarChart3,
    title: "Controle total, sem esforço.",
    description:
      "Acompanhe em tempo real quanto pode comer no dia, baseado nas suas metas e no seu histórico.",
    media: controlGif,
  },
];

export default function Features() {
  const [active, setActive] = useState(0);

  // alternância automática
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="how-it-works" className="relative py-28 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-100/40 via-white to-purple-100/30" />

      <div className="relative container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-purple-700 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              COMO A LUCY AJUDA
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              Visual premium, funcionalidades que realmente importam.
            </h2>
            <p className="text-gray-600 max-w-lg">
              Com a LucyFit, você tem as funcionalidades essenciais — sem complicação.
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((item, index) => {
              const isActive = active === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  className={`
                    rounded-2xl border bg-white/90 p-6 cursor-pointer transition-all
                    hover:shadow-xl hover:-translate-y-1
                    ${isActive ? "border-purple-500 shadow-purple-200/70" : "border-gray-200 shadow-md"}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? "bg-purple-600" : "bg-purple-100"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          isActive ? "text-white" : "text-purple-600"
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* 🎚️ Barra de carregamento premium */}
                  {isActive && (
                    <div className="mt-4 h-[3px] bg-purple-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-purple-600 animate-[loadbar_5s_linear_infinite]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE — viewer */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="absolute -top-16 -left-12 w-[360px] h-[360px] bg-purple-300/35 blur-[120px] rounded-full" />
          <div className="absolute -bottom-16 -right-12 w-[320px] h-[320px] bg-pink-300/30 blur-[110px] rounded-full" />

          <div className="relative w-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 backdrop-blur-xl bg-white/70">
            <img
              src={features[active].media}
              alt={features[active].title}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ANIMAÇÃO DA BARRA */
const style = document.createElement("style");
style.innerHTML = `
@keyframes loadbar {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
}
`;
document.head.appendChild(style);
