import { useMemo, useState } from "react";
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
  { quote: "Finalmente consigo manter minha dieta sem estresse. Recomendo demais!", name: "Ana Paula", role: "Nutricionista" },
  { quote: "Muito mais prático que qualquer app que você já usa. Só tire foto e pronto!", name: "Carlos Eduardo", role: "Usuário há 6 meses" },
  { quote: "Prático, rápido e eficiente. Não consigo mais viver sem!", name: "Felipe Costa", role: "Personal Trainer" },
  { quote: "Mudou completamente minha relação com a comida. Agora sei exatamente o que estou comendo.", name: "Júlia Oliveira", role: "Usuária há 1 ano" },
  { quote: "O melhor investimento que fiz na minha saúde. A análise nutricional é perfeita!", name: "Rafael Santos", role: "Perdeu 8kg" },
  { quote: "Recomendo para todos os meus alunos. A praticidade é surreal!", name: "Diego Ferreira", role: "Educador Físico" },
  { quote: "A IA entende tudo, até quando descrevo por áudio. Incrível!", name: "Beatriz Lima", role: "Perdeu 15kg" },
  { quote: "Nunca achei que seria tão fácil controlar minha alimentação. Estou impressionado!", name: "Camila Rodrigues", role: "Perdeu 10kg" },
];

export default function Testimonials() {
  const isMobile = useIsMobile();

  const videos = useMemo(
    () => [
      { src: depo1, person: PEOPLE[0] },
      { src: depo2, person: PEOPLE[1] },
      { src: depo3, person: PEOPLE[2] },
      { src: depo4, person: PEOPLE[3] },
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
      className="relative pt-14 lg:pt-24 pb-24 lg:pb-32 bg-gradient-to-b from-purple-50/30 via-neutral-900 to-black overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-6 relative">

        {/* CARD PRETO — TÍTULO */}
        <div className="relative flex justify-center z-30 mb-[-32px] lg:mb-[-48px]">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative w-full max-w-5xl rounded-3xl bg-black
              px-6 md:px-10
              pt-12 md:pt-14
              pb-20 lg:pb-36
              text-center shadow-2xl
            "
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Não acredite somente em nós — veja quem já usa.
            </h2>

            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Junte-se a milhares de pessoas que transformaram sua alimentação.
            </p>

            {/* FADE INFERIOR — MOBILE ONLY */}
            <div className="absolute bottom-0 left-0 right-0 h-16 md:hidden pointer-events-none bg-gradient-to-b from-black to-transparent" />
          </motion.div>
        </div>

        {/* COMMENTS — DESKTOP */}
        {!isMobile && (
          <div className="relative z-10 pt-20">
            <DesktopCascadeComments comments={comments} />
          </div>
        )}

        {/* COMMENTS — MOBILE */}
        {isMobile && <MobileComments comments={comments} />}

        {/* VÍDEOS */}
        <div className="relative mt-2 lg:mt-4 flex justify-center items-center h-[520px] z-10">
          <VideoCard data={videos[left]} pos="left" isMobile={isMobile} onClick={() => setActive(left)} />
          <VideoCard data={videos[active]} pos="center" isMobile={isMobile} />
          <VideoCard data={videos[right]} pos="right" isMobile={isMobile} onClick={() => setActive(right)} />

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

/* ================= COMMENTS (DESKTOP) ================= */

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
          <p className="text-white font-semibold text-sm truncate">{c.name}</p>
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

/* ================= COMMENTS (MOBILE) ================= */

function MobileComments({ comments }: { comments: Comment[] }) {
  return (
    <div className="relative z-10 -mt-10 mb-6">
      <div className="flex gap-4 overflow-x-auto pb-2 px-1 snap-x snap-mandatory scrollbar-hide">
        {comments.map((c, idx) => (
          <div
            key={idx}
            className="min-w-[260px] max-w-[260px] snap-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          >
            <p className="text-white/90 text-[13px] leading-relaxed">“{c.quote}”</p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">{c.name}</p>
                <p className="text-white/60 text-xs">{c.role}</p>
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

  const styles = {
    center: { transform: "translateX(0) scale(1)", zIndex: 20, opacity: 1 },
    left: { transform: `translateX(-${offset}px) scale(0.9)`, zIndex: 10, opacity: 0.45 },
    right: { transform: `translateX(${offset}px) scale(0.9)`, zIndex: 10, opacity: 0.45 },
  } as const;

  const isCenter = pos === "center";

  return (
    <div onClick={onClick} className="absolute cursor-pointer transition-all duration-500" style={styles[pos]}>
      <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ width: W, height: H }}>
        <video
          src={data.src}
          autoPlay={isCenter}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 text-center space-y-1">
        <p className="text-sm font-semibold text-white">
          {data.person.name},{" "}
          <span className="text-gray-400 font-normal">{data.person.age} anos</span>
        </p>

        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
