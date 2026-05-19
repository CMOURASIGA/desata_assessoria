export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Você entra em contato',
      description: 'Informe sua necessidade pelo nosso formulário ou WhatsApp. Estamos prontos para ouvir seu momento.',
    },
    {
      num: '02',
      title: 'Entendemos seu cenário',
      description: 'Nossa equipe analisa seu objetivo, sua documentação atual e levanta todas as possibilidades no mercado.',
    },
    {
      num: '03',
      title: 'Avaliamos alternativas',
      description: 'Apresentamos cenários claros de simulações, os melhores caminhos disponíveis e orientações detalhadas.',
    },
    {
      num: '04',
      title: 'Acompanhamento total',
      description: 'Apoiamos você durante todo o processo, garantindo menos dúvidas, nenhum retrabalho e segurança jurídica.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink mb-6">
            Como <span className="italic font-light text-primary">funciona</span>
          </h2>
          <p className="text-lg text-ink/70">
            Um processo desenhado para tirar o peso das suas costas.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-ink/10 hidden md:block" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white w-24 h-24 rounded-full border border-ink/10 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:border-primary transition-colors">
                  <span className="font-display font-bold text-3xl text-primary">{step.num}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-ink mb-3">{step.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed max-w-[250px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
