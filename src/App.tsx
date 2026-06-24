import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const isBlocked = import.meta.env.VITE_SITE_BLOCKED === 'true';

  if (isBlocked) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 p-2">
          <img 
            src="https://i.imgur.com/6jUNq5C.png" 
            alt="Desata Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-ink mb-4">
          Site em <span className="italic font-light text-primary">manutenção</span>
        </h1>
        <p className="text-ink/70 max-w-md mx-auto leading-relaxed">
          Estamos realizando atualizações em nosso sistema. Por favor, volte em breve. Para urgências, entre em contato via WhatsApp.
        </p>
        <a 
          href="https://api.whatsapp.com/send?phone=5521988758907" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg"
        >
          Falar via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <>
      {!introFinished && <IntroAnimation onComplete={() => setIntroFinished(true)} />}
      
      {/* 
        We show main content with opacity 0 at first or simply render it so it's ready, 
        and fade it in after intro 
      */}
      <div 
        className={`transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <HowItWorks />
          <Partners />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
