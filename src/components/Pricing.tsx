"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Shield } from "lucide-react";
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

  const isMobile = useIsMobile();

  return (
    <section
      id="pricing"
      className="py-10 lg:py-20 bg-white relative overflow-hidden select-none"
      autoCorrect="off"
      spellCheck={false}
    >

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Invista na sua saúde por menos que um lanche.
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Escolha o plano ideal para você
        </p>
      </div>


      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          max-w-5xl
          mx-auto
          px-6
        "
      >


        {/* 🟥 CARD MENSAL — ESQUERDA */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`
            rounded-3xl
            shadow-xl
            border
            border-gray-300
            text-gray-900
            p-10

            ${!isMobile && "bg-gradient-to-br from-gray-200 via-gray-100 to-white shadow-[0_0_60px_rgba(0,0,0,0.15)]"}
            ${isMobile && "bg-gray-100"}
          `}
        >

          <h3 className="text-3xl font-bold">{monthlyBase.name}</h3>
          <p className="mt-3 text-lg opacity-90">{monthlyBase.description}</p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-extrabold">
              R$ {monthlyBase.price.toFixed(2)}
            </span>
            <span className="text-lg opacity-80">{monthlyBase.interval}</span>
          </div>

          <ul className="mt-8 space-y-3">
            {monthlyBase.features.map((f, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start"
              >
                <span
                  className={`
                    mt-1
                    w-3
                    h-3
                    rounded-full
                    ${
                      f.included
                        ? "bg-purple-500"
                        : "bg-red-400"
                    }
                  `}
                />
                <span>{f.name}</span>
              </li>
            ))}
          </ul>

          <a
            href={monthlyBase.cta.href}
            target="_blank"
            className="
              block
              mt-10
              w-full
              text-center
              py-4
              rounded-xl
              text-lg
              font-semibold
              bg-purple-600
              hover:bg-purple-700
              transition
              text-white
            "
          >
            {monthlyBase.cta.text}
          </a>

        </motion.div>



        {/* 🟪 CARD ANUAL — DIREITA */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`
            rounded-3xl
            shadow-2xl
            border
            border-purple-300/40
            bg-gradient-to-br
            from-purple-600
            to-purple-800
            text-white
            p-10
            relative

            ${!isMobile && "shadow-[0_0_90px_rgba(130,60,255,0.45)]"}
          `}
        >

          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="px-4 py-1 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-md flex items-center gap-2">
              <Star className="h-4 w-4" />
              MAIS VENDIDO
            </div>
          </div>

          <h3 className="text-3xl font-bold">{annualBase.name}</h3>
          <p className="mt-3 text-lg opacity-90">{annualBase.description}</p>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-extrabold">
              R$ {annualBase.price.toFixed(2)}
            </span>
            <span className="text-lg opacity-80">{annualBase.interval}</span>
          </div>

          <ul className="mt-8 space-y-3">
            {annualBase.features.map((f, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span
                  className="
                    mt-1
                    w-3
                    h-3
                    rounded-full
                    bg-green-300
                  "
                />
                <span>{f.name}</span>
              </li>
            ))}
          </ul>

          <a
            href={annualBase.cta.href}
            target="_blank"
            className="
              block
              mt-10
              w-full
              text-center
              py-4
              rounded-xl
              text-lg
              font-semibold
              bg-yellow-400
              text-gray-900
              shadow-lg
              hover:bg-yellow-300
              transition
            "
          >
            {annualBase.cta.text}
          </a>

        </motion.div>

      </div>



      {/* GARANTIA */}
      <div className="mt-16 flex justify-center px-6">
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 shadow-sm max-w-xl w-full">
          <ShieldCheck className="h-6 w-6 text-purple-600 shrink-0" />
          <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
            Garantia de <strong>7 dias</strong> — teste sem risco.
            <br className="md:hidden" />
            Devolvemos <strong>100% do seu dinheiro</strong>.
          </p>
        </div>
      </div>


      {/* CANCELAMENTO */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
          <Shield className="h-4 w-4 text-gray-500" />
          <span>Cancele quando quiser.</span>
        </div>
      </div>

    </section>
  );
}
