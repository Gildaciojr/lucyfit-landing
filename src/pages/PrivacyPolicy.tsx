// src/pages/PrivacyPolicy.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-6 py-20 max-w-4xl">
        {/* TÍTULO */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            🥗 Política de Privacidade – LucyFit
          </h1>
          <p className="text-muted-foreground mt-4">
            Última atualização: 14 de novembro de 2025
          </p>
        </header>

        {/* CONTEÚDO */}
        <section className="space-y-12 text-lg leading-relaxed text-foreground/90">

          <p>
            A <strong>LucyFit</strong> respeita sua privacidade e se compromete
            a proteger todos os dados fornecidos pelos usuários. Esta
            Política de Privacidade explica como coletamos, utilizamos,
            armazenamos e tratamos as informações quando você utiliza nossos
            serviços via WhatsApp ou painel web.
          </p>

          {/* 1. INFORMAÇÕES COLETADAS */}
          <article>
            <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>

            <h3 className="text-xl font-semibold mb-2">a) Dados fornecidos pelo usuário</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e número do WhatsApp;</li>
              <li>Mensagens enviadas (texto, áudio e imagem);</li>
              <li>Fotos de refeições e atividades físicas;</li>
              <li>Informações corporais (opcional);</li>
              <li>Integrações com plataformas externas (como Google Calendar).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">b) Dados coletados automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data e hora das interações;</li>
              <li>Identificador único do usuário;</li>
              <li>Dados de uso do painel web;</li>
              <li>Status da assinatura (Free / Mensal / Anual).</li>
            </ul>
          </article>

          {/* 2. USO DOS DADOS */}
          <article>
            <h2 className="text-2xl font-bold mb-4">2. Como Utilizamos os Dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analisar refeições e treinos com IA;</li>
              <li>Gerar relatórios e dados nutricionais;</li>
              <li>Registrar histórico alimentar e físico;</li>
              <li>Oferecer recomendações personalizadas;</li>
              <li>Melhorar o desempenho da assistente.</li>
            </ul>
          </article>

          {/* 3. COMPARTILHAMENTO */}
          <article>
            <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Dados</h2>
            <p>
              A LucyFit <strong>não vende</strong> e <strong>não compartilha</strong>
              dados pessoais com terceiros, exceto quando necessário para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Cumprir obrigações legais;</li>
              <li>Garantir segurança da plataforma;</li>
              <li>Processamento de pagamento via Hotmart.</li>
            </ul>
          </article>

          {/* 4. ARMAZENAMENTO */}
          <article>
            <h2 className="text-2xl font-bold mb-4">4. Armazenamento e Segurança</h2>
            <p>
              Utilizamos servidores seguros com criptografia, backups automáticos
              e monitoramento contínuo para proteger suas informações.
            </p>
          </article>

          {/* 5. CONTROLE DO USUÁRIO */}
          <article>
            <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
            <p>Você pode solicitar:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Acesso aos seus dados;</li>
              <li>Correção ou exclusão;</li>
              <li>Encerramento da conta.</li>
            </ul>
            <p className="mt-4">
              Contato:{" "}
              <a
                href="mailto:atendimento@lucyfit.com.br"
                className="text-primary underline"
              >
                atendimento@lucyfit.com.br
              </a>
            </p>
          </article>

          {/* 6. WHATSAPP */}
          <article>
            <h2 className="text-2xl font-bold mb-4">6. Uso do WhatsApp</h2>
            <p>
              Todas as mensagens enviadas ao nosso número são processadas
              exclusivamente dentro da infraestrutura autorizada da LucyFit.
            </p>
          </article>

          {/* 7. PAGAMENTOS */}
          <article>
            <h2 className="text-2xl font-bold mb-4">7. Pagamentos e Hotmart</h2>
            <p>
              A LucyFit não armazena informações de pagamento. Todo o
              processamento é feito pela Hotmart, seguindo seus próprios
              protocolos de segurança.
            </p>
          </article>

          {/* 8. ATUALIZAÇÕES */}
          <article>
            <h2 className="text-2xl font-bold mb-4">8. Alterações nesta Política</h2>
            <p>
              Atualizações poderão ocorrer. Mudanças relevantes serão comunicadas
              via site ou WhatsApp.
            </p>
          </article>

        </section>
      </main>

      <Footer />
    </div>
  );
}
