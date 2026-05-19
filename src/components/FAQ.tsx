import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'A Desata faz simulação de financiamento?',
    answer: 'Sim, realizamos simulações personalizadas em diferentes instituições financeiras para encontrar a taxa e o plano perfeitos para o seu perfil.',
  },
  {
    question: 'Vocês atendem quais cidades?',
    answer: 'Atendemos clientes em todo o Brasil no modelo digital, porém determinados processos de regularização imobiliária em órgãos locais podem exigir avaliação particular. Fale conosco para detalhes.',
  },
  {
    question: 'Preciso ter o imóvel já escolhido?',
    answer: 'Não. Você pode (e deve) buscar a aprovação de crédito e as simulações antes mesmo de escolher o imóvel, assim você entende o seu limite seguro de compra.',
  },
  {
    question: 'Vocês trabalham com consórcio?',
    answer: 'Sim! Prestamos assessoria especializada para encontrar a melhor carta de crédito, orientando sobre lances, prazos e taxas de administração reais.',
  },
  {
    question: 'Posso tirar dúvidas iniciais pelo WhatsApp?',
    answer: 'Com certeza. Nosso atendimento via WhatsApp está preparado para tirar suas dúvidas iniciais e guiar os próximos passos sem compromisso.',
  },
  {
    question: 'Vocês ajudam com documentação e registro?',
    answer: 'Sim, somos especialistas em desburocratizar a documentação. Levantamos, organizamos e conduzimos averbações e registros junto aos cartórios competentes.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-ink mb-4">
            Perguntas <span className="italic font-light text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-ink/70">
            Dúvidas rápidas sobre a Desata Assessoria.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-primary/20 shadow-md ring-1 ring-primary/5' : 'border-ink/10 shadow-sm'}`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-ink pr-8">{faq.question}</span>
                  <ChevronDown className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className="transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-6 pb-5 text-ink/70 text-sm leading-relaxed border-t border-ink/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
