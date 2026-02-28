
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import InfrastructureSuite from './components/InfrastructureSuite.tsx';
import TrustEngine from './components/TrustEngine.tsx';
import AICore from './components/AICore.tsx';
import Projects from './components/Projects.tsx';
import Reviews from './components/Reviews.tsx';
import Founders from './components/Founders.tsx';
import ContactForm from './components/ContactForm.tsx';
import BrandingControl from './components/BrandingControl.tsx';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Branding state
  const [siteLogo, setSiteLogo] = useState<string | null>(null);

  useEffect(() => {
    const savedLogo = localStorage.getItem('conflux_custom_logo');
    if (savedLogo) {
      setSiteLogo(savedLogo);
    }
  }, []);

  const handleLogoUpload = (logoData: string) => {
    setSiteLogo(logoData);
    localStorage.setItem('conflux_custom_logo', logoData);
  };

  const handleLogoReset = () => {
    setSiteLogo(null);
    localStorage.removeItem('conflux_custom_logo');
  };

  // Dynamic background color transition based on scroll
  const background = useTransform(smoothProgress, [0, 0.5, 1], ["#020617", "#0f172a", "#020617"]);

  return (
    <motion.div style={{ background }} className="relative min-h-screen selection:bg-blue-500/30">
      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-800/10 blur-[120px] rounded-full" />
      </div>

      <Navbar customLogo={siteLogo} />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="infrastructure" className="py-24 px-6 md:px-12 lg:px-24">
          <InfrastructureSuite />
        </section>

        <section id="impact" className="py-24 bg-slate-900/30 border-y border-white/5 overflow-hidden">
          <TrustEngine />
        </section>

        <section id="ai-core" className="py-24 px-6 md:px-12 lg:px-24">
          <AICore />
        </section>

        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/30 border-y border-white/5">
          <Projects />
        </section>

        <section id="reviews" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/10">
          <Reviews />
        </section>

        <section id="founders" className="py-24 px-6 md:px-12 lg:px-24">
          <Founders />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/30 border-t border-white/5">
          <ContactForm />
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2 font-orbitron text-[10px] tracking-[0.2em] uppercase">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="mailto:confluxdotai@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors">confluxdotai@gmail.com</a>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 flex justify-center gap-6">
          <a href="https://www.youtube.com/@Confluxai-z9o" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
          </a>
          <a href="https://www.facebook.com/share/17dsWzvFYN/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="https://www.instagram.com/conflux.ai/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
          <a href="https://www.linkedin.com/company/conflux-ai/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="https://x.com/ConfluxA12947" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-all hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
          </a>
        </div>
        <div className="flex justify-center mb-4">
          {siteLogo ? (
            <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all">
              <img src={siteLogo} alt="Site Logo" className="w-full h-full object-cover" />
            </div>
          ) : (
            <span className="font-orbitron font-bold text-xs tracking-tighter opacity-50">CONFLUX<span className="text-blue-500">AI</span></span>
          )}
        </div>
        <p className="font-orbitron text-[8px] tracking-[0.1em] opacity-40">&copy; {new Date().getFullYear()} CONFLUXAI.IN. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Manual Logo Upload Control */}
      <BrandingControl onUpload={handleLogoUpload} onReset={handleLogoReset} currentLogo={siteLogo} />
    </motion.div>
  );
};

export default App;
