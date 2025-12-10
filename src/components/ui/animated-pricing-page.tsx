import React from "react";
import { Shield, Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  subtitle?: string;
  badge?: string;
  checkoutUrl: string;
  highlight?: boolean;
}

const ShieldIcon = () => <Shield className="w-4 h-4" />;

const PricingCard = ({
  title,
  price,
  period,
  subtitle,
  badge,
  checkoutUrl,
  highlight,
}: PricingCardProps) => {
  const features = [
    "Registro por foto",
    "Registro por áudio",
    "I.A nutricionista",
    "Histórico completo",
    "Metas automáticas",
    "Dashboard",
    "Análise completa",
    "Suporte",
  ];

  return (
    <div
      className={`pricing-card ${
        highlight ? "pricing-card-purple ring-2 ring-primary" : "pricing-card-purple"
      }`}
    >
      <div className="bg"></div>
      <div className="wrap">
        <div className="outline"></div>
        <div className="content p-8 flex flex-col text-white">
          <div className="text-sm font-bold bg-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 self-center">
            {badge ? (
              <>
                <Check className="w-4 h-4" /> {badge}
              </>
            ) : (
              <>
                <ShieldIcon /> {title}
              </>
            )}
          </div>

          <p className="text-7xl lg:text-8xl font-black my-4">R$ {price}</p>
          <p className="text-sm font-medium text-white/80 tracking-widest">{period}</p>

          {subtitle && <p className="text-xs text-white/60 mt-2">{subtitle}</p>}

          <div className="card-details">
            <p className="text-white/70 my-8 text-center text-sm">
              Acesso completo a todas as funcionalidades premium do app.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {features.map((f) => (
                <span key={f} className="feature-tag">
                  {f}
                </span>
              ))}
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-auto w-full bg-gray-900/50 text-white font-semibold py-3 rounded-xl 
                hover:bg-gray-900 transition-colors flex items-center justify-center gap-2
              "
            >
              Criar conta agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PricingPage = () => (
  <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4">
    <div className="shape-1"></div>
    <div className="shape-2"></div>

    <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Invista na sua saúde por menos que um lanche.
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
        <PricingCard
          title="PLANO MENSAL"
          price="29,99"
          period="/ MÊS"
          checkoutUrl="https://pay.hotmart.com/K102603335O?off=oe515n4q&checkoutMode=6"
        />

        <PricingCard
          title="PLANO ANUAL"
          price="19,99"
          period="/ MÊS"
          subtitle="Cobrança de R$ 239,88 por ano"
          badge="MELHOR OFERTA"
          checkoutUrl="https://pay.hotmart.com/K102603335O?off=ms9bkn4k&checkoutMode=6"
          highlight
        />
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-foreground/70">
        <Shield className="h-5 w-5" />
        <p className="text-sm font-medium">Sem compromisso. Cancele quando quiser.</p>
      </div>
    </div>
  </div>
);
