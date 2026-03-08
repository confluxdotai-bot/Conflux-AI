import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  customLogo?: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ customLogo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', id: 'infrastructure' },
    { name: 'Impact', id: 'impact' },
    { name: 'AI Core', id: 'ai-core' },
    { name: 'Projects', id: 'projects' },
    { name: 'Team', id: 'founders' },
    { name: 'Reviews', id: 'reviews' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-10 h-16 md:h-[72px] transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(2, 12, 27, 0.92)'
            : 'rgba(2, 12, 27, 0.6)',
          backdropFilter: 'blur(24px)',
          borderBottom: scrolled
            ? '1px solid rgba(14, 165, 233, 0.15)'
            : '1px solid rgba(255,255,255,0.04)'
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          {customLogo ? (
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden flex items-center justify-center"
              style={{ border: '1px solid rgba(14,165,233,0.4)', boxShadow: '0 0 12px rgba(14,165,233,0.3)' }}>
              <img src={customLogo} alt="Brand Logo" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="flex items-center gap-2 group">
              <div className="w-7 h-7 md:w-8 md:h-8 relative transition-transform duration-500 group-hover:rotate-[180deg]">
                <div className="absolute inset-0 rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', filter: 'blur(6px)' }} />
                <div className="relative w-full h-full rounded-sm overflow-hidden flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', background: 'linear-gradient(135deg, #0ea5e9, #0369a1)' }} />
              </div>
              <span className="font-orbitron font-bold text-base md:text-lg tracking-tighter text-white uppercase">
                CONFLUX<span style={{ color: '#0ea5e9', textShadow: '0 0 12px rgba(14,165,233,0.6)' }}>AI</span>
              </span>
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-[11px] font-orbitron tracking-[0.15em] text-slate-400 hover:text-white transition-colors duration-200 bg-transparent border-none uppercase"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-sm font-orbitron text-[10px] tracking-[0.15em] text-sky-400 transition-all duration-300"
            style={{ border: '1px solid rgba(14,165,233,0.3)', background: 'rgba(14,165,233,0.06)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(14,165,233,0.15)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(14,165,233,0.6)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(14,165,233,0.06)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(14,165,233,0.3)';
            }}
          >
            CLIENT ACCESS
          </button>

          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-sm font-orbitron text-[10px] tracking-[0.15em] text-white transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 16px rgba(14,165,233,0.35)' }}
          >
            APPLY FOR GROWTH
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none bg-transparent border-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col md:hidden"
            style={{ background: 'rgba(2,12,27,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <div className="flex items-center justify-between px-5 h-16">
              <span className="font-orbitron font-bold text-base text-white">CONFLUX<span style={{ color: '#0ea5e9' }}>AI</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white bg-transparent border-none p-2"><X size={22} /></button>
            </div>

            <div className="flex flex-col items-start justify-center flex-1 px-8 gap-7">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-2xl font-orbitron tracking-[0.1em] text-slate-200 hover:text-sky-400 transition-colors bg-transparent border-none uppercase text-left"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="px-8 pb-12 flex flex-col gap-4">
              <button
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full py-4 font-orbitron text-[11px] tracking-[0.2em] text-white rounded-sm flex items-center justify-center gap-3"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 20px rgba(14,165,233,0.4)' }}
              >
                APPLY FOR GROWTH <ArrowRight size={14} />
              </button>
              <button
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full py-4 font-orbitron text-[11px] tracking-[0.2em] text-sky-400 rounded-sm"
                style={{ border: '1px solid rgba(14,165,233,0.3)', background: 'rgba(14,165,233,0.06)' }}
              >
                CLIENT ACCESS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;