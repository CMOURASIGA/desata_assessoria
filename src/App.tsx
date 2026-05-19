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
