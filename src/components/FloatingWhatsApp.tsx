import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a 
        href="https://api.whatsapp.com/send?phone=5521988758907&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnr3VqBkKkRPKo-ZXWKg9CoNrvPSg8Oi8YVwL5gR_ZSsbLzXFJ95KErkzcGxA_aem_vAi5yAHvdSXP2OpkGeljqg" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors group relative"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-ink text-sm font-medium py-1.5 px-3 rounded-lg shadow-md border border-ink/5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Precisa de ajuda?
        </span>
        
        {/* Helper Ping */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </motion.div>
  );
}
