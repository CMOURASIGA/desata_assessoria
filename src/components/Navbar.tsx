import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Parceiros', href: '#parceiros' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center bg-white/80 backdrop-blur-md md:bg-transparent rounded-2xl md:rounded-none py-3 md:py-0 px-5 md:px-6 shadow-sm md:shadow-none">
        <a href="#" className="flex items-center gap-3 group">
           <div className="relative w-12 h-12 overflow-hidden rounded-full border border-surface shadow-sm bg-white p-1">
             <img 
               src="https://i.imgur.com/6jUNq5C.png" 
               alt="Desata Logo" 
               className="w-full h-full object-contain"
               referrerPolicy="no-referrer"
             />
           </div>
           <div className="flex flex-col">
             <span className="font-serif text-[28px] text-primary leading-none font-medium">
               Desata
             </span>
             <span className="text-ink text-[8.5px] font-bold tracking-[0.05em] uppercase leading-none mt-1">
               Assessoria Imobiliária
             </span>
           </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
          >
            <Phone size={16} />
            Falar Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ opacity: mobileMenuOpen ? 0 : 1 }}></div>
          <div className="w-6 h-0.5 bg-current transition-all" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }}></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-surface py-4 px-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-ink hover:text-primary block py-2 border-b border-surface/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex justify-center items-center gap-2 bg-primary text-white w-full px-5 py-3 rounded-full text-sm font-medium mt-2"
          >
            <Phone size={16} />
            Falar Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
