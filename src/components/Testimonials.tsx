import { useMemo, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import depo1 from "@/assets/videos/depoimentolucy1.mp4";
import depo2 from "@/assets/videos/depoimentolucy2.mp4";
import depo3 from "@/assets/videos/depoimentolucy3.mp4";
import depo4 from "@/assets/videos/depoimentolucy4.mp4";
import depo5 from "@/assets/videos/depoimentolucy5.mp4";

type Pos = "left" | "center" | "right";

const PEOPLE = [
  { name: "Natalia", age: 30 },
  { name: "Adrielly", age: 24 },
  { name: "Amanda", age: 27 },
  { name: "Luanna", age: 34 },
  { name: "Gabriela", age: 26 },
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

  // TROCA INICIAL — PRIMEIRO VÍDEO SERÁ O depo4
  const videos = useMemo(
    () => [
      { src: depo4, person: PEOPLE[3] },
      { src: depo1, person: PEOPLE[0] },
      { src: depo2, person: PEOPLE[1] },
      { src: depo3, person: PEOPLE[2] },
      { src: depo5, person: PEOPLE[4] },
    ],
    [],
  );

  const comments = useMemo(() => COMMENTS, []);
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? videos.length - 1 : i - 1));
  const next = () => setActive((i) => (i === videos.length - 1 ? 0 : i + 1));

  const left = (active - 1 + videos.length) % videos.length;
  const right = (active + 1) % videos.length;

  return (
    <section
      id="testimonials"
      className="
        relative 
        pt-14 lg:pt-24 
        pb-24 lg:pb-32 
        bg-gradient-to-b 
        from-purple-50/30 
        via-neutral-900 
        to-black 
        overflow-hidden
      "
    >
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* CARD PRETO — TÍTULO */}
        <div className="relative flex justify-center z-30 mb-[-12px] lg:mb-[-48px]">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative w-full max-w-5xl rounded-3xl bg-black
              px-6 md:px-10
              pt-12 md:pt-20
              pb-16 lg:pb-36
              text-center shadow-2xl
            "
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja quem já usa.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Junte-se a milhares de pessoas que transformaram sua alimentação.
            </p>
          </motion.div>
        </div>

        {/* MOBILE — COMENTÁRIOS (ABAIXADO + SEM CAIXA APARENTE) */}
        {isMobile && (
          <div className="relative z-30 mt-6 mb-4 overflow-hidden">
            <MobileComments comments={comments} />
          </div>
        )}

        {/* DESKTOP — COMENTÁRIOS (INTACTO) */}
        {!isMobile && (
          <div className="relative z-10 pt-20">
            <DesktopCascadeComments comments={comments} />
          </div>
        )}

        {/* VÍDEOS */}
        <div className="relative mt-10 flex justify-center items-center h-[520px] z-10">
          <VideoCard
            data={videos[left]}
            pos="left"
            isMobile={isMobile}
            onClick={() => setActive(left)}
          />
          <VideoCard
            data={videos[active]}
            pos="center"
            isMobile={isMobile}
          />
          <VideoCard
            data={videos[right]}
            pos="right"
            isMobile={isMobile}
            onClick={() => setActive(right)}
          />

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
    </section>
  );
}

/* ======================================================================= */
/* MOBILE COMMENTS — ALINHADAS, MAIS BAIXAS E SEM LINHAS VISÍVEIS         */
/* ======================================================================= */

function MobileComments({ comments }: { comments: Comment[] }) {
  const loop = [...comments, ...comments];

  return (
    <div className="relative z-30 overflow-hidden mt-0 mb-0">
      <div className="mobile-comment-stream animate-mobileCommentStream">
        {loop.map((c, idx) => (
          <div
            key={idx}
            className="min-w-[250px] max-w-[250px] mx-2 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              px-4 py-4
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            <p className="text-white/90 text-[13px] leading-relaxed">
              “{c.quote}”
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm truncate">
                  {c.name}
                </p>
                <p className="text-white/60 text-xs truncate">{c.role}</p>
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradientes para esconder completamente bordas laterais e inferior */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900 via-neutral-900/90 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-neutral-900 via-neutral-900/90 to-transparent pointer-events-none" />

      <style>{`
        .mobile-comment-stream {
          display: flex;
          width: max-content;
          gap: 10px;
          will-change: transform;
        }

        @keyframes mobileCommentStream {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-mobileCommentStream {
          animation: mobileCommentStream 23s linear infinite;
        }
      `}</style>
    </div>
  );
}

/* ======================================================================= */
/* DESKTOP — NÃO ALTERADO                                                 */
/* ======================================================================= */

function DesktopCascadeComments({ comments }: { comments: Comment[] }) {
  const loop = useMemo(() => [...comments, ...comments], [comments]);

  return (
    <div className="relative pointer-events-none">
      <div className="relative mx-auto max-w-6xl h-[220px] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        <div className="lucy-comment-stream-horizontal animate-lucyCommentStreamHorizontal items-center">
          {loop.map((c, idx) => (
            <CommentCard key={idx} c={c} />
          ))}
        </div>

        <style>{`
          .lucy-comment-stream-horizontal {
            display: flex;
            gap: 28px;
            will-change: transform;
          }

          @keyframes lucyCommentStreamHorizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-lucyCommentStreamHorizontal {
            animation: lucyCommentStreamHorizontal 36s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

function CommentCard({ c }: { c: Comment }) {
  return (
    <div className="w-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.35)] p-5">
      <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
        “{c.quote}”
      </p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm truncate">
            {c.name}
          </p>
          <p className="text-white/60 text-xs truncate">{c.role}</p>
        </div>

        <div className="flex shrink-0 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ======================================================================= */
/* VIDEO CARD — SEM AUTOPLAY, COM IMAGEM E PLAY/PAUSE EM TODOS            */
/* ======================================================================= */

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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const width = isMobile ? 240 : 270;
  const height = isMobile ? 420 : 460;
  const offset = isMobile ? 150 : 320;

  const styles = {
    center: { transform: "translateX(0) scale(1)", zIndex: 20, opacity: 1 },
    left: { transform: `translateX(-${offset}px) scale(0.9)`, zIndex: 10, opacity: 1 },
    right: { transform: `translateX(${offset}px) scale(0.9)`, zIndex: 10, opacity: 1 },
  } as const;

  const [playing, setPlaying] = useState(false);

  // Sempre que o vídeo deixa de ser o card central, ele pausa
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (pos !== "center") {
      v.pause();
      try {
        v.currentTime = 0;
      } catch {
        /* ignore */
      }
      setPlaying(false);
    }
  }, [pos]);

  // Força carregar um frame para evitar tela preta (desktop e mobile)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleLoaded = () => {
      try {
        if (v.readyState >= 2) {
          v.currentTime = 0.1;
        }
      } catch {
        /* ignore */
      }
    };

    v.addEventListener("loadedmetadata", handleLoaded);
    return () => v.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  const handleClick = () => {
    // se não é o card central, apenas navega
    if (pos !== "center" && onClick) {
      onClick();
      return;
    }

    const v = videoRef.current;
    if (!v) return;

    // central: play / pause com áudio
    if (!playing) {
      v.muted = false;
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="absolute cursor-pointer transition-all duration-300"
      style={styles[pos]}
    >
      <div
        className="rounded-3xl overflow-hidden shadow-2xl bg-black"
        style={{ width, height }}
      >
        <video
          ref={videoRef}
          src={data.src}
          loop
          playsInline
          autoPlay={false}
          preload="auto"
          muted={false}
          className="w-full h-full object-cover"
        />
      </div>

      {pos === "center" && (
        <button
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            bg-black/60 text-white
            rounded-full p-5
          "
        >
          {playing ? "❚❚" : "▶"}
        </button>
      )}

      <div className="mt-4 text-center space-y-1">
        <p className="text-sm font-semibold text-white">
          {data.person.name},{" "}
          <span className="text-gray-400 font-normal">
            {data.person.age} anos
          </span>
        </p>

        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
