import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useMotionConfig } from "@/lib/motion-config";

export default function FAQ() {
  const motionCfg = useMotionConfig();

  const faqs = [
    {
      question: "Como funciona a I.A?",
      answer:
        "Nossa I.A identifica alimentos por foto, áudio ou texto e calcula automaticamente calorias, nutrientes e macros.",
    },
    {
      question: "Preciso ter conhecimento nutricional?",
      answer:
        "Não. A assistente faz todo o trabalho pesado e entrega orientações claras e práticas.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Sim! O plano é sem fidelidade e você pode cancelar diretamente pela Hotmart.",
    },
    {
      question: "A Lucy calcula tudo automaticamente?",
      answer:
        "Sim. Basta enviar foto, áudio ou texto — a análise completa chega em segundos.",
    },
    {
      question: "O plano inclui todas as funções?",
      answer:
        "Inclui análise inteligente, histórico, metas, dashboard, leituras ilimitadas e suporte.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-28 bg-gradient-to-b from-white via-purple-50/20 to-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {/* HEADER */}
        <motion.div {...motionCfg} className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full bg-purple-50 px-5 py-1.5 shadow-sm">
            <span className="text-xs tracking-[0.25em] text-purple-700 font-semibold uppercase">
              Dúvidas frequentes
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            Perguntas frequentes
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Tudo o que você precisa saber antes de começar a usar a LucyFit.
          </p>
        </motion.div>

        {/* ACCORDION */}
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all px-6"
            >
              <AccordionTrigger className="py-6 text-left font-semibold hover:text-purple-600 transition-colors">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
