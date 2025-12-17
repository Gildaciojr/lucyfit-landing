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

const PEOPLE = [
  { name: "Natalia", age: 30 },
  { name: "Adrielly", age: 24 },
  { name: "Amanda", age: 27 },
  { name: "Luanna", age: 34 },
];

type Comment = {
  quote: string;
  name: string;
  role: string;
};

const COMMENTS: Comment[] = [
  {
    quote: "Finalmente consigo manter minha dieta sem estresse. Recomendo demais!",
    name: "Ana Paula",
    role: "Nutricionista",
  },
  {
    quote: "Muito mais prático que qualquer app que você já usa. Só tire foto e pronto!",
    name: "Carlos Eduardo",
    role: "Usuário há 6 meses",
  },
  {
    quote: "Prático, rápido e eficiente. Não consigo mais viver sem!",
    name: "Felipe Costa",
    role: "Personal Trainer",
  },
  {
    quote:
      "Mudou completamente minha relação com a comida. Agora sei exatamente o que estou comendo.",
    name: "Júlia Oliveira",
    role: "Usuária há 1 ano",
  },
  {
    quote:
      "O melhor investimento que fiz na minha saúde. A análise nutricional é perfeita!",
    name: "Rafael Santos",
    role: "Perdeu 8kg",
  },
  {
    quote: "Recomendo para todos os meus alunos. A praticidade é surreal!",
    name: "Diego Ferreira",
    role: "Educador Físico",
  },
  {
    quote: "A IA entende tudo, até quando descrevo por áudio. Incrível!",
    name: "Beatriz Lima",
    role: "Perdeu 15kg",
  },
  {
    quote:
      "Nunca achei que seria tão fácil controlar minha alimentação. Estou impressionado!",
    name: "Camila Rodrigues",
    role: "Perdeu 10kg",
  },
];

export default function Testimonials() {
  const isMobile = useIsMobile();

  const videos = useMemo(
    () => [
      { src: depo1, person: PEOPLE[0] },
      { src: depo2, person: PEOPLE[1] },
      { src: depo3, person: PEOPLE[2] },
      { src: depo4, person: PEOPLE[3] },
    ],
    [],
  );

  const comments = useMemo(() => COMMENTS, []);

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
      className="relative py-32 bg-gradient-to-b from-purple-50/40 via-black/40 to-black overflow-hidden"
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

        {/* PALCO (SEM CAIXOTE) */}
        <div className="relative pt-32 pb-10">
          {/* ✅ FUNDO PREMIUM (SEM RETÂNGULO): VIGNETTE RADIAL + BLUR */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* Vignette central */}
            <div
              className="absolute left-1/2 top-24 -translate-x-1/2 w-[1200px] h-[720px] opacity-100 blur-[10px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.78) 35%, rgba(0,0,0,0.0) 70%)",
              }}
            />

            {/* Profundidade extra suave embaixo */}
            <div
              className="absolute left-1/2 top-64 -translate-x-1/2 w-[1100px] h-[560px] opacity-90 blur-[18px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)",
              }}
            />
          </div>

          {/* VÍDEOS (subidos um pouco para quase encostar no título) */}
          <div className="relative flex justify-center items-center h-[520px] z-10">
            <VideoCard
              data={videos[left]}
              pos="left"
              isMobile={isMobile}
              onClick={() => setActive(left)}
            />

            <VideoCard data={videos[active]} pos="center" isMobile={isMobile} />

            <VideoCard
              data={videos[right]}
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

          {/* ✅ COMMENTS: AGORA EM UMA “FAIXA” ABAIXO DO PALCO (NÃO SOBREPÕE VÍDEOS) */}
          {isMobile ? (
            <MobileComments comments={comments} />
          ) : (
            <div className="relative -mt-24 pt-20 pb-2">
              {/* A faixa nasce no preto (parte inferior) e some antes de bater na identidade */}
              <DesktopCascadeComments comments={comments} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ================= COMMENTS (DESKTOP) ================= */

function DesktopCascadeComments({ comments }: { comments: Comment[] }) {
  // loop contínuo sem depender de framer (leve)
  const loop = useMemo(() => [...comments, ...comments], [comments]);

  return (
    <div className="relative z-[6] pointer-events-none">
      {/* Área controlada: nasce no fundo e sobe */}
      <div
        className="relative mx-auto max-w-5xl h-[360px] overflow-hidden"
        style={{
          // Visível embaixo, some no topo (efeito “entrar por trás”)
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.0) 86%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.0) 86%)",
        }}
      >
        {/* “TAMPA” superior: cria a sensação de sumir por trás da área de nomes/estrelas */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/95 to-transparent z-10" />

        {/* Trilho vertical com lateralização refinada (não colunas) */}
        <div className="lucy-comment-stream animate-lucyCommentStream">
          {loop.map((c, idx) => (
            <div
              key={`S-${idx}`}
              className={`flex ${
                idx % 4 === 0
                  ? "justify-start"
                  : idx % 4 === 1
                    ? "justify-end"
                    : idx % 4 === 2
                      ? "justify-center"
                      : "justify-start"
              }`}
            >
              <div
                className={`${
                  idx % 4 === 0
                    ? "ml-6"
                    : idx % 4 === 1
                      ? "mr-6"
                      : ""
                }`}
              >
                <CommentCard c={c} compact={idx % 2 === 0} />
              </div>
            </div>
          ))}
        </div>

        {/* CSS animação */}
        <style>{`
          .lucy-comment-stream { will-change: transform; }
          @keyframes lucyCommentStream {
            0% { transform: translateY(20%); }
            100% { transform: translateY(-58%); }
          }
          .animate-lucyCommentStream {
            animation: lucyCommentStream 28s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

function CommentCard({ c, compact }: { c: Comment; compact?: boolean }) {
  return (
    <div
      className={`mb-4 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${
        compact ? "p-4 w-[320px]" : "p-5 w-[360px]"
      }`}
    >
      <p
        className={`text-white/90 ${
          compact ? "text-[13px]" : "text-sm"
        } leading-relaxed`}
      >
        “{c.quote}”
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="leading-tight">
          <p className="text-white font-semibold text-sm">{c.name}</p>
          <p className="text-white/60 text-xs">{c.role}</p>
        </div>

        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className="fill-yellow-400 text-yellow-400 drop-shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= COMMENTS (MOBILE) ================= */

function MobileComments({ comments }: { comments: Comment[] }) {
  return (
    <div className="relative z-[2] -mt-6 mb-10">
      <div className="flex gap-4 overflow-x-auto pb-2 px-1 snap-x snap-mandatory scrollbar-hide">
        {comments.map((c, idx) => (
          <div
            key={idx}
            className="min-w-[260px] max-w-[260px] snap-center rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          >
            <p className="text-white/90 text-[13px] leading-relaxed">
              “{c.quote}”
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="leading-tight">
                <p className="text-white font-semibold text-sm">{c.name}</p>
                <p className="text-white/60 text-xs">{c.role}</p>
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-yellow-400 text-yellow-400 drop-shadow"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= VIDEO CARD ================= */

function VideoCard({
  data,
  pos,
  isMobile,
  onClick,
}: {
  data: { src: string; person: { name: string; age: number } };
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
      {/* VIDEO */}
      <div
        className="rounded-3xl overflow-hidden bg-black shadow-2xl"
        style={{ width: W, height: H }}
      >
        <video
          src={data.src}
          autoPlay={isCenter}
          controls={isCenter}
          preload={isCenter ? "metadata" : "none"}
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* IDENTIDADE */}
      <div className="mt-4 text-center space-y-1 relative z-[30]">
        <p className="text-sm font-semibold text-white">
          {data.person.name},{" "}
          <span className="font-normal text-gray-400">
            {data.person.age} anos
          </span>
        </p>

        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-yellow-400 text-yellow-400 drop-shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
