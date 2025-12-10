import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Usuária LucyFit há 6 meses",
    text: "Antes eu esquecia de anotar quase tudo. Hoje só mando foto no WhatsApp e a Lucy faz todo o resto.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=80",
  },
  {
    name: "João Henrique",
    role: "Emagreceu 8kg em 3 meses",
    text: "O feedback instantâneo me surpreendeu. A Lucy explica o que posso melhorar sem julgamento.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=80",
  },
  {
    name: "Ana Paula",
    role: "Rotina corrida, alimentação organizada",
    text: "Só de mandar áudio e receber análise completa já valeu tudo. Nunca foi tão fácil cuidar da alimentação.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=80",
  },
  {
    name: "Carlos Eduardo",
    role: "Foco em ganho de massa",
    text: "A análise de macros me ajudou a bater proteína todo dia sem planilha.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&w=80",
  },
  {
    name: "Fernanda Martins",
    role: "Voltou a se alimentar bem",
    text: "Com os lembretes e o histórico no WhatsApp, ficou muito mais simples manter o hábito.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&w=80",
  },
  {
    name: "Lucas Rocha",
    role: "Perdeu 5kg e ganhou energia",
    text: "Não é só contar calorias, é entender o que estou comendo. A Lucy explica o impacto de cada refeição.",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=80",
  },
];

const extended = [...testimonials, ...testimonials];

function Column({ reverse = false }: { reverse?: boolean }) {
  return (
    <motion.div
      animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        duration: 28,
        ease: "linear",
        repeat: Infinity,
      }}
      className="space-y-4"
    >
      {extended.map((t, i) => (
        <div
          key={`${t.name}-${i}-${reverse ? "r" : "n"}`}
          className="bg-white/90 border border-gray-200 rounded-2xl shadow-md p-5 flex gap-4"
        >
          <img
            src={t.avatar}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div>
            <p className="text-gray-700 text-sm mb-2">“{t.text}”</p>
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-[11px] text-gray-500">{t.role}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white"
      id="testimonials"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* HEADER MAIS VIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-purple-50 px-5 py-1.5 shadow-sm">
            <span className="text-xs tracking-[0.24em] text-purple-700 font-semibold uppercase">
              Resultados reais
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Não acredite somente em nós — veja quem já usa.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que transformaram sua alimentação
            usando a LucyFit no dia a dia.
          </p>
        </motion.div>

        {/* GRID EM CASCATA */}
        <div className="relative h-[380px] overflow-hidden">
          {/* Gradientes para dar sensação de fade nas bordas */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Column />
            <Column reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
