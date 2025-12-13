import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Star } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";

const monthlyBase = {
  name: "PLANO MENSAL",
  price: 29.99,
  interval: "/ mês",
  description: "Controle total da sua alimentação com IA pagando mês a mês.",
  features: [
    { name: "Registro de refeições por foto, texto ou áudio", included: true },
    { name: "Cálculo automático de calorias e macronutrientes", included: true },
    { name: "Sugestões de treino e exercícios para sua rotina", included: true },
    { name: "Análise inteligente da sua alimentação com IA", included: true },
    { name: "Metas ajustadas conforme seus hábitos", included: true },
    { name: "Histórico de refeições e treinos no WhatsApp", included: true },
    { name: "Acompanhamento diário", included: true },
    { name: "Suporte prioritário", included: false },
  ],
  cta: {
    text: "Assinar mensal",
    href: "https://pay.hotmart.com/K102603335O?off=oe515n4q&checkoutMode=10&bid=1765197985158",
  },
};

const annualBase = {
  name: "PLANO ANUAL",
  price: 19.99,
  interval: "/ mês",
  description: "12x R$ 19,99 — Economize mais de 30%",
  features: [
    { name: "Registro de refeições por foto, texto ou áudio", included: true },
    { name: "Cálculo automático de calorias e macronutrientes", included: true },
    { name: "Sugestões de treino e exercícios para sua rotina", included: true },
    { name: "Análise inteligente da sua alimentação com IA", included: true },
    { name: "Metas ajustadas conforme seus hábitos", included: true },
    { name: "Histórico de refeições e treinos no WhatsApp", included: true },
    { name: "Acompanhamento diário", included: true },
    { name: "Suporte prioritário", included: true },
  ],
  cta: {
    text: "Melhor oferta",
    href: "https://pay.hotmart.com/K102603335O?off=gv3oc04g&checkoutMode=10",
  },
};

export default function Pricing() {
  const [showAnnual, setShowAnnual] = useState(true);
  const isMobile = useIsMobile();
  const activeTier = showAnnual ? annualBase : monthlyBase;

  const Wrapper = isMobile ? "div" : motion.div;

  return (
    <section id="pricing" className="py-28 bg-white relative overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Invista na sua saúde por menos que um lanche.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Escolha o plano ideal para você
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={!showAnnual ? "font-semibold" : "text-muted-foreground"}>
            Mensal
          </span>

          <Switch checked={showAnnual} onCheckedChange={setShowAnnual} />

          <span className={showAnnual ? "font-semibold" : "text-muted-foreground"}>
            Anual
          </span>

          {showAnnual && !isMobile && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold"
            >
              Economize 40%
            </motion.span>
          )}
        </div>
      </div>

      <Wrapper
        className="flex justify-center px-6"
        {...(!isMobile && {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
        })}
      >
        <div className="w-full max-w-lg rounded-3xl p-10 shadow-2xl border">
          <h3 className="text-3xl font-bold">{activeTier.name}</h3>
          <p className="mt-3 text-lg">{activeTier.description}</p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-extrabold">
              R$ {activeTier.price.toFixed(2)}
            </span>
            <span className="text-lg">{activeTier.interval}</span>
          </div>

          <ul className="mt-8 space-y-3">
            {activeTier.features.map((f, idx) => (
              <li key={idx} className="flex gap-3">
                <span className={`mt-1 w-3 h-3 rounded-full ${f.included ? "bg-green-400" : "bg-red-400"}`} />
                <span>{f.name}</span>
              </li>
            ))}
          </ul>

          <a
            href={activeTier.cta.href}
            target="_blank"
            className="block mt-10 w-full text-center py-4 rounded-xl text-lg font-semibold bg-purple-600 text-white"
          >
            {activeTier.cta.text}
          </a>
        </div>
      </Wrapper>

      <div className="mt-10 flex justify-center gap-2 text-muted-foreground">
        <Shield className="h-5 w-5" />
        <p className="text-sm font-medium">Cancele quando quiser.</p>
      </div>
    </section>
  );
}
