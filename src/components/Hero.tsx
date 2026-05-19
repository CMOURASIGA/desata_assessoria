import { motion } from 'motion/react';
import { ArrowRight, Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-surface">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/10 text-xs font-semibold tracking-wide text-primary uppercase mb-6 shadow-sm">
            Especialistas em Crédito e Regularização
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.1] text-ink mb-6">
            Desatamos a burocracia para você conquistar seu imóvel com <span className="text-primary italic font-light">mais segurança.</span>
          </h1>
          <p className="text-lg text-ink/70 mb-10 max-w-lg leading-relaxed">
            Assessoria especializada em crédito imobiliário, consórcio, consignado e regularização imobiliária. Clareza e acompanhamento do início da aprovação até o registro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Quero falar com a Desata
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-surface text-ink px-8 py-3.5 rounded-full font-medium transition-all border border-ink/10 shadow-sm hover:-translate-y-0.5">
              <Calculator size={18} className="text-primary" />
              Fazer uma simulação
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 pt-8 border-t border-ink/5">
            <div>
              <div className="text-3xl font-display font-bold text-primary">10+</div>
              <div className="text-sm font-medium text-ink/60 uppercase tracking-widest mt-1">Anos de Experiência</div>
            </div>
            <div className="w-px h-12 bg-ink/10"></div>
            <div>
              <div className="text-3xl font-display font-bold text-accent">100%</div>
              <div className="text-sm font-medium text-ink/60 uppercase tracking-widest mt-1">Acompanhamento</div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative hidden md:block"
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2rem] transform rotate-3 scale-[1.02]"></div>
           <div className="relative z-10 w-full h-[600px] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
             {/* Main Hero Image */}
             <img 
               src="https://i.imgur.com/Ivq11TS.png" 
               alt="Família feliz com as chaves" 
               className="w-full h-full object-cover"
             />
           </div>
           
           {/* Floating badge */}
           <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">Burocracia Zero</div>
                  <div className="text-xs text-ink/60">Processos simplificados</div>
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
