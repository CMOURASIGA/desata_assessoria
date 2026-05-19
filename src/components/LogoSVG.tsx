import React from 'react';
import { motion } from 'motion/react';

interface LogoSVGProps {
  className?: string;
  animate?: boolean;
}

export default function LogoSVG({ className = "", animate = false }: LogoSVGProps) {
  // Cores extraídas diretamente da imagem de referência para fidelidade total.
  const tealBackground = "#0A81A9"; 
  const pureWhite = "#FFFFFF";
  const charcoal = "#1F2937"; 
  const logoBlue = "#0084AD"; 

  return (
    <svg 
      viewBox="0 0 150 150" 
      preserveAspectRatio="xMidYMid meet" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible', width: '100%', height: '100%' }}
    >
      <defs>
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Fundo do recipiente (Fundo azul/teal) */}
      <rect x="0" y="0" width="150" height="150" fill={tealBackground} rx="12" />

      <motion.g
        initial={animate ? { opacity: 0, scale: 0.8, y: 5 } : false}
        animate={animate ? { opacity: 1, scale: 1, y: 0 } : false}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Círculo Branco Principal */}
        <circle cx="75" cy="75" r="66" fill={pureWhite} filter="url(#logoShadow)" />

        {/* Anel Azul Interno (como na imagem original) */}
        <circle 
          cx="75" 
          cy="75" 
          r="55" 
          stroke={logoBlue} 
          strokeWidth="11" 
          fill="none" 
        />

        {/* Símbolo Entrelaçado Estático (Fidelidade à forma da imagem) */}
        <g 
          fill="none" 
          strokeWidth="11.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Parte Preta do Nó */}
          <path 
            d="M 52 102 C 52 88, 55 78, 75 78 C 95 78, 98 88, 98 102 C 98 116, 85 124, 75 114 C 65 104, 75 78, 52 48"
            stroke={charcoal}
          />

          {/* Parte Azul do Nó */}
          <path 
            d="M 98 48 C 98 62, 95 72, 75 72 C 55 72, 52 62, 52 48 C 52 34, 65 26, 75 36 C 85 46, 75 72, 98 102"
            stroke={logoBlue}
          />
          
          {/* Efeito de Sobreposição (interlace) central conforme a imagem */}
          <path 
            d="M 75 72 C 60 72, 55 65, 52 48"
            stroke={logoBlue}
          />
          <path 
            d="M 71 85 C 73 81, 77 75, 79 71"
            stroke={charcoal}
          />
        </g>
      </motion.g>
    </svg>
  );
}
