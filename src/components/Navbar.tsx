import { Phone, Menu, X, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center transition-all duration-300">
        <a href="#" className="flex items-center gap-3 group relative z-50">
           <div className={`relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-surface shadow-sm bg-white p-1 transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
             <img 
               src="https://i.imgur.com/6jUNq5C.png" 
               alt="Desata Logo" 
               className="w-full h-full object-contain"
               referrerPolicy="no-referrer"
             />
           </div>
           <div className="flex flex-col">
             <span className={`font-serif text-2xl md:text-[28px] text-primary leading-none font-medium transition-all duration-300 ${scrolled ? 'text-xl md:text-2xl' : ''}`}>
               Desata
             </span>
             <span className={`text-ink text-[7px] md:text-[8.5px] font-bold tracking-[0.05em] uppercase leading-none mt-1 transition-all duration-300 ${scrolled ? 'hidden md:block' : ''}`}>
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
          className={`lg:hidden relative z-50 p-2 transition-colors rounded-full ${mobileMenuOpen ? 'text-white' : scrolled ? 'text-ink' : 'text-primary'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Improved with full-screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-40 bg-primary flex flex-col pt-32 px-8 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-start">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-serif text-white hover:text-primary-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-10 border-t border-white/10"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex justify-center items-center gap-2 bg-white text-primary w-full px-5 py-4 rounded-xl text-lg font-bold shadow-lg"
              >
                <Phone size={20} />
                WhatsApp
              </a>
              
              <div className="flex items-center justify-center gap-6 mt-8">
                <a 
                  href="https://www.instagram.com/desataassessoria/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  <Instagram size={24} />
                </a>
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold font-mono">
                  Siga-nos
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
