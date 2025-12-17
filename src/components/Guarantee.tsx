// src/components/Guarantee.tsx
export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-white">
      {/* ================= GARANTIA 30 DIAS ================= */}
      <div className="py-16 lg:py-20 px-4">
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/40 via-white to-purple-50/30 shadow-2xl px-6 py-12 lg:px-12 lg:py-16 overflow-hidden">
          {/* DECOR DESKTOP */}
          <div className="hidden lg:block absolute -top-24 -left-24 w-96 h-96 bg-purple-300/20 rounded-full blur-[140px]" />
          <div className="hidden lg:block absolute -bottom-24 -right-24 w-96 h-96 bg-pink-300/20 rounded-full blur-[140px]" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* TEXTO */}
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl lg:text-4xl font-bold">
                <span className="text-purple-600">Experimente a Lucy Fit</span>{" "}
                por 30 dias
              </h3>

              <p className="text-gray-600 text-sm lg:text-lg">
                Experimente a Lucy Fit por 1 mês e veja como é simples organizar
                sua alimentação e treinos direto no WhatsApp.
              </p>

              <p className="text-gray-600 text-sm lg:text-base">
                Se dentro de 30 dias você não gostar ou não se adaptar, é só
                pedir —
                <strong className="text-purple-600">
                  {" "}
                  devolvemos 100% do seu dinheiro
                </strong>
                .
              </p>

              <p className="font-medium text-gray-700 text-sm lg:text-base">
                Sem riscos. Sem complicação. Só resultados reais.
              </p>

              <div className="pt-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 lg:px-8 lg:py-4 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  Quero experimentar por 30 dias
                </a>
              </div>
            </div>

            {/* MOEDA REAL */}
            <div className="flex justify-center">
              <div className="w-44 h-44 lg:w-56 lg:h-56">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* CÍRCULO BASE */}
                  <defs>
                    <path id="topCurve" d="M 30,100 A 70,70 0 0,1 170,100" />
                    <path
                      id="bottomCurve"
                      d="M 170,100 A 70,70 0 0,1 30,100"
                    />
                  </defs>

                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="url(#coinGradient)"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />

                  <defs>
                    <radialGradient id="coinGradient">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="70%" stopColor="#e5e7eb" />
                      <stop offset="100%" stopColor="#d1d5db" />
                    </radialGradient>
                  </defs>

                  {/* TEXTO CURVO SUPERIOR */}
                  <text
                    fontSize="10"
                    fill="#4b5563"
                    fontWeight="600"
                    letterSpacing="1"
                  >
                    <textPath
                      href="#topCurve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      SATISFAÇÃO GARANTIDA
                    </textPath>
                  </text>

                  {/* TEXTO CURVO INFERIOR */}
                  <text
                    fontSize="10"
                    fill="#4b5563"
                    fontWeight="600"
                    letterSpacing="1"
                  >
                    <textPath
                      href="#bottomCurve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      OU SEU DINHEIRO DE VOLTA
                    </textPath>
                  </text>

                  {/* TEXTO CENTRAL */}
                  <text
                    x="100"
                    y="90"
                    textAnchor="middle"
                    fontSize="38"
                    fontWeight="800"
                    fill="#1f2937"
                  >
                    30
                  </text>
                  <text
                    x="100"
                    y="112"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#374151"
                  >
                    DIAS
                  </text>
                  <text
                    x="100"
                    y="132"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#6b7280"
                  >
                    No plano anual
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= FIM GARANTIA ================= */}
    </section>
  );
}
