import { Building2, Landmark, Wallet, ClipboardCheck, FileText, BadgeCheck } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Crédito Imobiliário',
    description: 'Apoio completo na análise, simulação e condução do processo de financiamento imobiliário.',
  },
  {
    icon: Landmark,
    title: 'Consórcio',
    description: 'Orientação especializada para clientes que buscam planejamento, carta de crédito e alternativas ao financiamento tradicional.',
  },
  {
    icon: Wallet,
    title: 'Empréstimo Consignado',
    description: 'Apoio em simulações e orientação para a contratação com mais clareza, taxas justas e segurança.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regularização Imobiliária',
    description: 'Consultoria dedicada para tratar pendências documentais, garantindo a tranquilidade na posse ou venda.',
  },
  {
    icon: FileText,
    title: 'Averbações',
    description: 'Apoio ponta a ponta nos processos de atualização e formalização de informações e histórico do imóvel.',
  },
  {
    icon: BadgeCheck,
    title: 'Registro de Imóveis',
    description: 'Orientação precisa para documentação e manutenção da regularidade no processo de registro nos órgãos competentes.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold tracking-wide text-primary uppercase mb-4">
            Nossas Soluções
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink mb-6">
            Especialidades que <span className="italic font-light text-primary">desatam nós.</span>
          </h2>
          <p className="text-lg text-ink/70">
            Cuidamos de toda a documentação e processos para que você possa focar no que realmente importa: a realização dos seus planos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-[2rem] border border-ink/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface group-hover:bg-primary flex items-center justify-center transition-colors duration-300 mb-6">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-ink group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-ink/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
