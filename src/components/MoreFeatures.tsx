import {
  Calendar,
  History,
  TrendingUp,
  Target,
  PieChart,
  FileText,
  Utensils,
  MessageSquare,
  Zap,
  Dumbbell,
  Activity,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: Calendar,
    title: "Registro automático diário",
    description:
      "Registre suas refeições enviando foto, texto ou áudio. A Lucy Fit organiza tudo automaticamente no WhatsApp.",
  },
  {
    icon: History,
    title: "Histórico completo",
    description:
      "Tenha acesso ao histórico das suas refeições sempre que quiser. Tudo salvo diretamente na conversa.",
  },
  {
    icon: TrendingUp,
    title: "Análise nutricional avançada",
    description:
      "Receba análises completas com calorias, proteínas, carboidratos, gorduras e fibras de cada refeição enviada.",
  },
  {
    icon: Target,
    title: "Metas personalizadas",
    description:
      "Defina metas de calorias e macronutrientes e acompanhe facilmente se está dentro da sua rotina diária.",
  },
  {
    icon: PieChart,
    title: "Análise de macros",
    description:
      "Veja a distribuição de proteínas, carboidratos e gorduras ao longo do dia de forma simples e objetiva.",
  },
  {
    icon: FileText,
    title: "Leitura por foto, áudio ou texto",
    description:
      "Envie uma foto, descreva sua refeição ou mande um áudio — a Lucy entende qualquer formato.",
  },
  {
    icon: Utensils,
    title: "Sugestões de refeições",
    description:
      "Receba sugestões de alimentos e combinações inteligentes que ajudam a manter sua rotina equilibrada.",
  },
  {
    icon: MessageSquare,
    title: "Assistente com IA",
    description:
      "Tire dúvidas, peça orientações e receba respostas instantâneas direto no WhatsApp.",
  },
  {
    icon: Zap,
    title: "Feedback instantâneo",
    description:
      "Após cada refeição, a Lucy entrega observações rápidas para aumentar sua consciência alimentar.",
  },
  {
    icon: Dumbbell,
    title: "Registro de exercícios",
    description:
      "Adicione seus treinos para acompanhar sua rotina de atividades e manter tudo organizado no WhatsApp.",
  },
  {
    icon: Activity,
    title: "Treinos personalizados",
    description:
      "Receba sugestões de treinos adaptados à sua rotina, tempo disponível e objetivos — tudo criado pela IA.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação detalhada",
    description:
      "Veja uma avaliação completa das suas refeições, com análise nutricional e insights claros da assistente.",
  },
];

export default function MoreFeatures() {
  const isMobile = useIsMobile();

  return (
    <section className="py-28 bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.25em] text-purple-600 font-semibold uppercase">
            Ainda mais funções
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Tudo o que você precisa em um só lugar.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) =>
            isMobile ? (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-md border border-purple-100 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-semibold text-lg mb-2 text-gray-900 min-h-[3rem]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-purple-100 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-semibold text-lg mb-2 text-gray-900 min-h-[3rem]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
