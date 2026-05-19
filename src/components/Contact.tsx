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
    <section id="contato" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink mb-4">
              Vamos <span className="italic font-light text-primary">conversar?</span>
            </h2>
            <p className="text-lg text-ink/70 mb-10 max-w-md leading-relaxed">
              Deixe seus processos nas mãos de quem entende do assunto. Entre em contato para darmos o primeiro passo rumo à realização do seu plano.
            </p>

            <div className="space-y-6 mb-12">
              <a href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-ink/60 font-medium">WhatsApp / Telefone</div>
                  <div className="text-ink font-semibold group-hover:text-primary transition-colors">(21) 98875-8907</div>
                </div>
              </a>

              <a href="mailto:priscilla.gomide@desataassessoria.com.br" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-ink/60 font-medium">E-mail</div>
                  <div className="text-ink font-semibold group-hover:text-primary transition-colors">priscilla.gomide@desataassessoria.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-ink/60 font-medium">Atendimento</div>
                  <div className="text-ink font-semibold">100% Digital e Presencial a combinar</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <span className="text-sm font-medium text-ink/60 uppercase tracking-wider">Acompanhe-nos</span>
               <a 
                 href="https://www.instagram.com/desataassessoria/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all outline-none"
               >
                 <Instagram size={18} />
               </a>
            </div>
          </div>

          <div className="bg-surface p-8 md:p-10 rounded-[2rem] border border-ink/5 relative">
             <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-lg">
                Fale Especialista
             </div>
             
             <form onSubmit={handleSubmit} className="space-y-4">
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
               
               <div className="grid grid-cols-2 gap-4">
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
