// src/components/Pricing.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Star } from "lucide-react";
import { Switch } from "@/components/ui/switch";

// ---------------------------
//   BASE DOS PLANOS
// ---------------------------

const monthlyBase = {
  name: "PLANO MENSAL",
  price: 29.99,
  interval: "/ mês",
  description: "Controle total da sua alimentação com IA pagando mês a mês.",
  features: [
    { name: "Registro por foto, áudio e texto", included: true },
    { name: "Cálculo automático de calorias e macros", included: true },
    { name: "Sugestões de treinos", included: true },
    { name: "Histórico completo", included: true },
    { name: "Acompanhamento diário", included: true },
    { name: "Suporte prioritário", included: false },
  ],
  cta: {
    text: "Assinar mensal",
    href:
      "https://pay.hotmart.com/K102603335O?off=oe515n4q&checkoutMode=10&bid=1765197985158",
  },
};

const annualBase = {
  name: "PLANO ANUAL",
  price: 19.99,
  interval: "/ mês",
  description: "Pague 12x de R$ 19,99 — economize 40% garantindo 1 ano completo.",
  features: [
    { name: "Tudo do plano mensal incluído", included: true },
    { name: "Suporte prioritário", included: true },
    { name: "Melhor custo-benefício", included: true },
  ],
  cta: {
    text: "Assinar anual",
    href:
      "https://pay.hotmart.com/K102603335O?off=ms9bkn4k&checkoutMode=10&bid=1765197973603",
  },
};

// ---------------------------
//   COMPONENTE PRINCIPAL
// ---------------------------

export default function Pricing() {
  const [showAnnual, setShowAnnual] = useState(true);

  const activeTier = showAnnual ? annualBase : monthlyBase;

  return (
    <section id="pricing" className="py-28 bg-white relative overflow-hidden">

      {/* Glow no fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 via-white to-white pointer-events-none" />

      {/* TÍTULO */}
      <div className="text-center mb-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Invista na sua saúde por menos que um lanche.
        </h2>

        <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
          Planos flexíveis e acessíveis. Escolha o ideal para sua jornada.
        </p>

        {/* SELETOR */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={!showAnnual ? "font-semibold text-gray-900" : "text-muted-foreground"}>
            Mensal
          </span>

          <Switch checked={showAnnual} onCheckedChange={setShowAnnual} />

          <span className={showAnnual ? "font-semibold text-gray-900" : "text-muted-foreground"}>
            Anual
          </span>

          {showAnnual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full shadow-sm font-semibold"
            >
              Economize 40%
            </motion.span>
          )}
        </div>
      </div>

      {/* CARD PREMIUM CENTRALIZADO */}
      <motion.div
        key={showAnnual ? "annual" : "monthly"}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center relative z-10 px-6"
      >
        <div
          className={`
            relative w-full max-w-lg 
            rounded-3xl p-10 shadow-2xl border 
            backdrop-blur-xl transition-all
            ${
              showAnnual
                ? "bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-300/40 shadow-purple-500/40"
                : "bg-white text-gray-900 border-gray-200"
            }
          `}
          style={{ animation: "float 4s ease-in-out infinite" }}
        >

          {/* SELO MAIS VENDIDO */}
          {showAnnual && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-4 py-1 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-md flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                MAIS VENDIDO
              </motion.div>
            </div>
          )}

          {/* Nome + preço */}
          <h3 className={`text-3xl font-bold ${showAnnual ? "text-white" : "text-gray-900"}`}>
            {activeTier.name}
          </h3>

          <p className={`mt-3 text-lg ${showAnnual ? "text-purple-100" : "text-gray-600"}`}>
            {activeTier.description}
          </p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-extrabold">
              R$ {activeTier.price.toFixed(2)}
            </span>
            <span className="text-lg opacity-80">{activeTier.interval}</span>
          </div>

          {/* Lista de features */}
          <ul className="mt-8 space-y-3">
            {activeTier.features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    showAnnual ? "bg-green-300" : "bg-purple-500"
                  }`}
                />
                <span className="text-base">{f.name}</span>
              </li>
            ))}
          </ul>

          {/* BOTÃO CTA */}
          <a
            href={activeTier.cta.href}
            target="_blank"
            className={`
              block mt-10 w-full text-center py-4 rounded-xl text-lg font-semibold shadow-lg transition-all
              ${
                showAnnual
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }
            `}
          >
            {activeTier.cta.text}
          </a>
        </div>
      </motion.div>

      {/* GARANTIA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-24 max-w-3xl mx-auto text-center p-12 rounded-3xl 
        bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 
        border border-green-300 shadow-xl relative z-10"
      >
        <ShieldCheck className="h-12 w-12 mx-auto text-green-600" />

        <p className="text-xl font-bold mt-4 text-green-800">
          Garantia de 7 dias
        </p>

        <p className="text-base mt-2 text-green-800/80">
          Experimente sem risco. Caso não goste, devolvemos 100% do seu investimento.
        </p>
      </motion.div>

      {/* RODAPÉ DO BLOCO */}
      <div className="mt-10 flex justify-center gap-2 text-muted-foreground">
        <Shield className="h-5 w-5" />
        <p className="text-sm font-medium">Cancele quando quiser.</p>
      </div>
    </section>
  );
}
