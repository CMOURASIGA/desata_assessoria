export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/10 shadow-sm bg-white p-1">
                 <img 
                   src="https://i.imgur.com/6jUNq5C.png" 
                   alt="Desata Logo" 
                   className="w-full h-full object-contain"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[28px] text-white leading-none font-medium">
                  Desata
                </span>
                <span className="text-white/60 text-[8.5px] font-bold tracking-[0.05em] uppercase leading-none mt-1">
                  Assessoria Imobiliária
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Assessoria especializada em crédito e regularização imobiliária. Desatamos a burocracia para você conquistar seus planos com segurança.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>&copy; {new Date().getFullYear()} Desata Assessoria. Todos os direitos reservados.</div>
          <div>Desenvolvido visando excelência.</div>
        </div>
      </div>
    </footer>
  );
}
