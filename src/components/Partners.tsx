import { HandshakeIcon, HardHatIcon } from 'lucide-react';

export default function Partners() {
  return (
    <section id="parceiros" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative BG pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
              <HardHatIcon size={14} />
              B2B & Construtoras
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
              Parcerias sólidas com <span className="italic font-light text-primary-light">profissionais</span> do mercado imobiliário
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
              A Desata Assessoria é o braço direito de construtoras, corretores e incorporadoras que desejam oferecer uma experiência mais rápida, segura e orientada aos seus clientes no momento de financiar, simular ou regularizar o imóvel.
            </p>
            
            <a href="#contato" className="inline-flex justify-center items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-medium transition-all hover:bg-surface hover:-translate-y-0.5">
              <HandshakeIcon size={18} />
              Falar sobre parceria
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
             <div className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-[2rem] border border-white/10">
               <div className="text-xl md:text-4xl font-display font-light text-primary-light mb-1 md:mb-2 leading-tight">Agilidade</div>
               <div className="text-[11px] md:text-sm text-white/70 leading-relaxed">Aprovação mais rápida e com menos entraves documentais.</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-[2rem] border border-white/10 md:translate-y-8">
               <div className="text-xl md:text-4xl font-display font-light text-primary-light mb-1 md:mb-2 leading-tight">Taxa 0 de</div>
               <div className="text-[11px] md:text-sm text-white/70 leading-relaxed">dor de cabeça no repasse para seus clientes.</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-[2rem] border border-white/10">
               <div className="text-xl md:text-4xl font-display font-light text-primary-light mb-1 md:mb-2 leading-tight">Retenção</div>
               <div className="text-[11px] md:text-sm text-white/70 leading-relaxed">Aumento de vendas concretizadas através de acompanhamento total.</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-[2rem] border border-white/10 md:translate-y-8">
               <div className="text-xl md:text-4xl font-display font-light text-primary-light mb-1 md:mb-2 leading-tight">Segurança</div>
               <div className="text-[11px] md:text-sm text-white/70 leading-relaxed">Processos guiados rigorosamente pelas normas do mercado.</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
