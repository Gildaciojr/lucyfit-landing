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
  { icon: Calendar, title: "Registro automático diário", description: "Registre refeições por foto, texto ou áudio diretamente no WhatsApp." },
  { icon: History, title: "Histórico completo", description: "Tenha acesso a todo seu histórico organizado na conversa." },
  { icon: TrendingUp, title: "Análise nutricional avançada", description: "Calorias, macros e fibras analisados automaticamente." },
  { icon: Target, title: "Metas personalizadas", description: "Metas ajustadas conforme sua rotina e objetivos." },
  { icon: PieChart, title: "Análise de macros", description: "Visualização clara da distribuição nutricional." },
  { icon: FileText, title: "Leitura por foto, áudio ou texto", description: "A Lucy entende qualquer formato." },
  { icon: Utensils, title: "Sugestões de refeições", description: "Combinações inteligentes para manter equilíbrio." },
  { icon: MessageSquare, title: "Assistente com IA", description: "Respostas instantâneas no WhatsApp." },
  { icon: Zap, title: "Feedback instantâneo", description: "Insights rápidos após cada refeição." },
  { icon: Dumbbell, title: "Registro de exercícios", description: "Controle total da sua rotina de treinos." },
  { icon: Activity, title: "Treinos personalizados", description: "Sugestões criadas pela IA." },
  { icon: ClipboardCheck, title: "Avaliação detalhada", description: "Análise completa das refeições." },
];

export default function MoreFeatures() {
  const isMobile = useIsMobile();

  return (
    <section className="py-28 bg-gradient-to-b from-white via-purple-50/20 to-white">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.25em] text-purple-600 font-semibold uppercase">
            Ainda mais funções
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Tudo o que você precisa em um só lugar.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.3 }}
              className="p-6 rounded-2xl bg-white shadow-md border border-purple-100"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
