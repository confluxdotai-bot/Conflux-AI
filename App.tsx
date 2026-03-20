
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
import Chatbot from './components/Chatbot.tsx';
import DataVault from './components/DataVault.tsx';
import AuthoritySignals from './components/AuthoritySignals.tsx';
import VoiceFAQ from './components/VoiceFAQ.tsx';
import SemanticMap from './components/SemanticMap.tsx';
import CreativeSuite from './components/CreativeSuite.tsx';
import SocialImpact from './components/SocialImpact.tsx';
import BlueprintVault from './components/BlueprintVault.tsx';
import VideoTrust from './components/VideoTrust.tsx';
import GEOPowerhouse from './components/GEOPowerhouse.tsx';

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

  const scaleX = smoothProgress;

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Scroll progress bar — blue */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[200]"
        style={{ scaleX, transformOrigin: 'left', background: 'linear-gradient(90deg, #0000ff, #3333ff, #6666ff)' }}
      />

      {/* Global Navbar */}
      <Navbar customLogo={siteLogo} />

      <main className="relative z-10 w-full overflow-hidden">
        {/* DARK SECTION 1: Hero */}
        <section id="home" className="relative" style={{ backgroundColor: '#020c1b' }}>
          <Hero />
        </section>

        {/* LIGHT SECTION 1: Infrastructure */}
        <section id="infrastructure" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative" style={{ backgroundColor: '#ffffff' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,255,0.3), transparent)' }} />
          <InfrastructureSuite />
        </section>

        {/* 2026 Engagement: Digital Creative Suite */}
        <section id="creative-suite" className="py-24 relative bg-[#f8fafc]">
          <CreativeSuite />
        </section>

        {/* 2026 Engagement: Social Impact & Reach */}
        <SocialImpact />

        {/* 2026 Engagement: The Blueprint Vault */}
        <BlueprintVault />

        {/* 2026 GEO: Data Vault */}
        <DataVault />

        {/* LIGHT SECTION 2: Impact */}
        <section id="impact" className="py-24 relative" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid rgba(15,23,42,0.04)', borderBottom: '1px solid rgba(15,23,42,0.04)' }}>
          <TrustEngine />
        </section>

        {/* 2026 GEO: Semantic Connectivity Cluster */}
        <SemanticMap />

        {/* DARK SECTION 2: AI Core */}
        <section id="ai-core" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ backgroundColor: '#020c1b' }}>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,0,255,1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
          <AICore />
        </section>

        {/* LIGHT SECTION 3: Projects */}
        <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative" style={{ backgroundColor: '#ffffff' }}>
          <Projects />
        </section>

        {/* LIGHT SECTION 4: Reviews */}
        <section id="reviews" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid rgba(15,23,42,0.04)' }}>
          <Reviews />
        </section>

        {/* 2026 Engagement: Authority Signals */}
        <AuthoritySignals />

        {/* LIGHT SECTION 5: Founders */}
        <section id="founders" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative" style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(15,23,42,0.04)' }}>
          <Founders />
        </section>

        {/* 2026 Engagement: Video Trust Showcase */}
        <VideoTrust />

        {/* 2026 Engagement: GEO Powerhouse (AI Citations) */}
        <GEOPowerhouse />

        {/* 2026 GEO: Conversational Solution Engine */}
        <VoiceFAQ />

        {/* DARK SECTION 3: Contact */}
        <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ backgroundColor: '#020c1b' }}>
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,0,255,1) 0%, transparent 70%)', filter: 'blur(120px)' }} />
          <ContactForm />
        </section>
      </main>

      {/* DARK SECTION 4: Footer */}
      <footer className="py-12 px-6 text-center relative" style={{ backgroundColor: '#050f1f', borderTop: '1px solid rgba(0,0,255,0.15)' }}>
        <div className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2 font-inter text-[11px] font-bold tracking-widest uppercase">
          <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="mailto:confluxdotai@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors">confluxdotai@gmail.com</a>
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
              className="text-slate-600 hover:text-blue-500 transition-all duration-300 hover:scale-125">
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-4">
          {siteLogo ? (
            <div className="w-8 h-8 rounded-full overflow-hidden opacity-50 hover:opacity-100 transition-all" style={{ border: '1px solid rgba(0,0,255,0.3)' }}>
              <img src={siteLogo} alt="Site Logo" className="w-full h-full object-cover" />
            </div>
          ) : (
            <span className="font-inter font-black text-xs tracking-tight opacity-100 text-white">CONFLUX<span className="text-blue-500">AI</span></span>
          )}
        </div>
        <p className="font-inter text-[10px] font-bold tracking-widest text-slate-500 uppercase">© {new Date().getFullYear()} CONFLUXAI.IN. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Manual Logo Upload Control */}
      <BrandingControl onUpload={handleLogoUpload} onReset={handleLogoReset} currentLogo={siteLogo} />

      {/* Integrated Chatbot */}
      <Chatbot />
    </div>
  );
};

export default App;
