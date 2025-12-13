import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Testimonials() {
  const isMobile = useIsMobile();

  const testimonials = [
    {
      text: "Perdi 12kg em 3 meses! A I.A me ajudou a entender minha alimentação de verdade.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
      name: "Mariana Silva",
      role: "Perdeu 12kg",
    },
    {
      text: "Muito mais prático que qualquer app que já usei. Só tirar foto e pronto!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
      name: "Carlos Eduardo",
      role: "Usuário há 6 meses",
    },
    {
      text: "Finalmente consigo manter minha dieta sem estresse. Recomendo demais!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop",
      name: "Ana Paula",
      role: "Nutricionista",
    },
    {
      text: "Mudou completamente minha relação com a comida.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop",
      name: "Julia Oliveira",
      role: "Usuária há 1 ano",
    },
    {
      text: "O melhor investimento que fiz na minha saúde.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
      name: "Rafael Santos",
      role: "Perdeu 8kg",
    },
    {
      text: "A I.A entende tudo, até quando mando áudio.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop",
      name: "Beatriz Lima",
      role: "Perdeu 15kg",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold">Não acredite somente em nós</h2>
          </motion.div>
        )}

        <div className="flex justify-center gap-6 max-h-[520px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={16} />
          {!isMobile && (
            <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={20} />
          )}
        </div>
      </div>
    </section>
  );
}
