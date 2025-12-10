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
    title: "Elaboração de treinos personalizados",
    description:
      "Receba sugestões de treinos adaptados à sua rotina, tempo disponível e objetivos — tudo criado pela IA.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação detalhada das refeições",
    description:
      "Veja uma avaliação completa das suas refeições, com análise nutricional e insights claros da assistente.",
  },
];

export default function MoreFeatures() {
  return (
    <section
      className="py-28 bg-gradient-to-b from-white via-purple-50/30 to-white"
      id="features"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* TÍTULO MAIS VIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-purple-50 px-5 py-1.5 shadow-sm">
            <span className="text-xs font-semibold tracking-[0.24em] text-purple-700 uppercase">
              Ainda mais funções
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ainda mais funções para facilitar{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              sua vida.
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I.A projetada para quem quer simplicidade, velocidade e resultados
            reais — com tudo organizado em um único lugar.
          </p>
        </motion.div>

        {/* GRID PREMIUM */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl border border-gray-200/80 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-600 transition-all">
                <item.icon className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
