import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img 
                src="https://i.imgur.com/Ug5vYYA.png" 
                alt="Documentos e aprovação" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary image overlapping */}
            <div className="absolute top-1/2 -right-8 w-48 h-48 rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl hidden lg:block translate-y-10">
              <img 
                src="https://i.imgur.com/y11f1B3.png" 
                alt="Chave da casa nova" 
                className="w-full h-full object-cover bg-surface"
              />
            </div>
            {/* Decorative pattern */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] [background-size:16px_16px] opacity-20 z-0"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-ink mb-6">
              Nascemos para simplificar o <span className="italic font-light text-primary">complexo.</span>
            </h2>
            <p className="text-lg text-ink/70 mb-6 leading-relaxed">
              A Desata Assessoria nasceu com um propósito claro: simplificar processos que muitas vezes parecem difíceis, burocráticos e confusos para clientes e empresas.
            </p>
            <p className="text-lg text-ink/70 mb-10 leading-relaxed">
              Atuamos ao seu lado em etapas importantes da sua vida financeira e imobiliária, como financiamento, consórcio, crédito consignado e regularização de imóveis, oferecendo sempre uma orientação clara, um acompanhamento próximo e total segurança em cada decisão.
            </p>

            <div className="space-y-4">
              {[
                'Atendimento consultivo e humanizado',
                'Foco total em desburocratizar seu processo',
                'Transparência e clareza em todas as etapas',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-medium text-ink/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
