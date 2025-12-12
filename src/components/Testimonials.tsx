import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Usuária LucyFit",
    text: "Hoje só mando foto no WhatsApp e a Lucy faz todo o resto.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=80",
  },
  {
    name: "João Henrique",
    role: "Emagreceu 8kg",
    text: "Nunca foi tão simples entender minha alimentação.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=80",
  },
  {
    name: "Ana Paula",
    role: "Rotina organizada",
    text: "Áudio, foto ou texto — a Lucy entende tudo.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=80",
  },
];

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="container mx-auto max-w-6xl px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Não acredite só em nós — veja quem já usa.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.4 }}
              className="rounded-2xl bg-white border shadow p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={t.avatar} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">“{t.text}”</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
