
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

  // Scroll progress bar
  const scaleX = smoothProgress;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#020c1b' }}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[200] bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500"
      />

      {/* Ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-[30%] right-[-15%] w-[40%] h-[50%] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)', filter: 'blur(120px)' }} />
      </div>

      <Navbar customLogo={siteLogo} />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="infrastructure" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <InfrastructureSuite />
        </section>

        <section id="impact" className="py-24 overflow-hidden" style={{ borderTop: '1px solid rgba(14,165,233,0.08)', borderBottom: '1px solid rgba(14,165,233,0.08)', background: 'rgba(14,165,233,0.02)' }}>
          <TrustEngine />
        </section>

        <section id="ai-core" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <AICore />
        </section>

        <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24" style={{ background: 'rgba(14,165,233,0.02)', borderTop: '1px solid rgba(14,165,233,0.08)', borderBottom: '1px solid rgba(14,165,233,0.08)' }}>
          <Projects />
        </section>

        <section id="reviews" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24">
          <Reviews />
        </section>

        <section id="founders" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24" style={{ background: 'rgba(14,165,233,0.02)', borderTop: '1px solid rgba(14,165,233,0.08)' }}>
          <Founders />
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24" style={{ borderTop: '1px solid rgba(14,165,233,0.08)' }}>
          <ContactForm />
        </section>
      </main>

      <footer className="py-12 px-6 text-center" style={{ borderTop: '1px solid rgba(14,165,233,0.1)' }}>
        <div className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2 font-orbitron text-[10px] tracking-[0.2em] uppercase">
          <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">Terms of Service</a>
          <a href="mailto:confluxdotai@gmail.com" className="text-sky-500 hover:text-sky-300 transition-colors">confluxdotai@gmail.com</a>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 flex justify-center gap-6">
          {[
            {
              href: "https://www.youtube.com/@Confluxai-z9o",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            },
            {
              href: "https://www.facebook.com/share/17dsWzvFYN/",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            },
            {
              href: "https://www.instagram.com/conflux.ai/",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            },
            {
              href: "https://www.linkedin.com/company/conflux-ai/",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            },
            {
              href: "https://x.com/ConfluxA12947",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            }
          ].map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-sky-400 transition-all duration-300 hover:scale-125">
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-4">
          {siteLogo ? (
            <div className="w-8 h-8 rounded-full overflow-hidden opacity-50 hover:opacity-100 transition-all" style={{ border: '1px solid rgba(14,165,233,0.2)' }}>
              <img src={siteLogo} alt="Site Logo" className="w-full h-full object-cover" />
            </div>
          ) : (
            <span className="font-orbitron font-bold text-xs tracking-tighter opacity-40">CONFLUX<span className="text-sky-500">AI</span></span>
          )}
        </div>
        <p className="font-orbitron text-[8px] tracking-[0.1em] text-slate-600">© {new Date().getFullYear()} CONFLUXAI.IN. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Manual Logo Upload Control */}
      <BrandingControl onUpload={handleLogoUpload} onReset={handleLogoReset} currentLogo={siteLogo} />
    </div>
  );
};

export default App;
