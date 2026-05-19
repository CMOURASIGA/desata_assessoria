import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Esconder a animação após ~13s totais (Animation ends at ~3.2s + 10s wait)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000);
    }, 13500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Brand Blue Background for Intro */}
          <div className="absolute inset-0 bg-[#0C6188]">
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.15)_0%,_transparent_60%)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
            />
          </div>

          <div className="relative flex flex-col items-center justify-center h-full w-full perspective-1000">
            
            {/* Cinematic Camera Zoom Container for Logo - Adjusted scale and padding to fit correctly */}
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64 mb-6 flex items-center justify-center overflow-visible"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              {/* White Circular Background with enough padding to fit the logo symbol comfortably */}
              <div className="relative w-full h-full overflow-hidden rounded-full bg-white shadow-2xl p-6 border-4 border-white/20">
                <img 
                  src="https://i.imgur.com/6jUNq5C.png" 
                  alt="Desata Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Typography lock-in: Company name and Sub-title restored */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center mb-6"
            >
              <span className="font-serif text-[42px] md:text-[56px] text-white leading-none font-medium mb-1 drop-shadow-lg">
                Desata
              </span>
              <span className="text-white/80 text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase leading-none drop-shadow-md">
                Assessoria Imobiliária
              </span>
            </motion.div>

            {/* Tagline below naming */}
            <motion.div
              className="flex flex-col items-center"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.5 }}
                className="text-white/90 text-lg md:text-xl font-light italic tracking-wide drop-shadow-md"
              >
                A empresa desatadora de nós
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
