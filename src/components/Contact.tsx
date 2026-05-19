import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('idle');
      alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-[32px] md:text-5xl font-display font-semibold text-ink mb-4">
              Vamos <span className="italic font-light text-primary">conversar?</span>
            </h2>
            <p className="text-base md:text-lg text-ink/70 mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
              Deixe seus processos nas mãos de quem entende do assunto. Entre em contato para darmos o primeiro passo rumo à realização do seu plano.
            </p>

            <div className="space-y-5 mb-10 text-left">
              <a href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group bg-surface/50 p-3 rounded-2xl border border-ink/5 md:bg-transparent md:p-0 md:border-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] md:text-sm text-ink/40 font-bold uppercase tracking-wider">WhatsApp / Telefone</div>
                  <div className="text-ink font-bold group-hover:text-primary transition-colors break-all">(21) 98875-8907</div>
                </div>
              </a>

              <a href="mailto:priscilla.gomide@desataassessoria.com.br" className="flex items-center gap-4 group bg-surface/50 p-3 rounded-2xl border border-ink/5 md:bg-transparent md:p-0 md:border-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] md:text-sm text-ink/40 font-bold uppercase tracking-wider">E-mail</div>
                  <div className="text-ink font-bold group-hover:text-primary transition-colors break-all text-sm md:text-base">priscilla.gomide@desataassessoria.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-surface/50 p-3 rounded-2xl border border-ink/5 md:bg-transparent md:p-0 md:border-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] md:text-sm text-ink/40 font-bold uppercase tracking-wider">Atendimento</div>
                  <div className="text-ink font-bold text-sm md:text-base">100% Digital / Estúdio RJ</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
               <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Siga-nos</span>
               <a 
                 href="https://www.instagram.com/desataassessoria/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm border border-ink/5"
               >
                 <Instagram size={20} />
               </a>
            </div>
          </div>

          <div className="bg-surface p-6 md:p-10 rounded-[2.5rem] border border-ink/5 relative shadow-xl shadow-ink/5">
             <div className="absolute top-0 left-1/2 md:left-auto md:right-10 transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2.5 px-6 rounded-full shadow-lg">
                Enviar Solicitação
             </div>
             
             <form onSubmit={handleSubmit} className="space-y-4 mt-4">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-ink/70 mb-1.5 ml-2">Nome Completo</label>
                 <input 
                   type="text" 
                   id="name" 
                   required
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                   className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pb-3.5 text-ink"
                   placeholder="Ex: João da Silva"
                 />
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-ink/70 mb-1.5 ml-2">WhatsApp</label>
                   <input 
                     type="tel" 
                     id="phone"
                     required
                     value={formData.phone}
                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
                     className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-ink"
                     placeholder="(00) 00000-0000"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-ink/70 mb-1.5 ml-2">E-mail</label>
                   <input 
                     type="email" 
                     id="email"
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-ink"
                     placeholder="seu@email.com"
                   />
                 </div>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-ink/70 mb-1.5 ml-2">Como podemos ajudar?</label>
                 <textarea 
                   id="message" 
                   rows={4}
                   required
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                   className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-ink"
                   placeholder="Descreva brevemente sua necessidade..."
                 ></textarea>
               </div>

               <button 
                 type="submit" 
                 disabled={status === 'submitting' || status === 'success'}
                 className="w-full bg-primary hover:bg-primary-light text-white rounded-xl py-4 font-semibold tracking-wide transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex justify-center items-center gap-2 mt-4"
               >
                 {status === 'idle' && 'Enviar Solicitação'}
                 {status === 'submitting' && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                 {status === 'success' && 'Mensagem Enviada!'}
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
