import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, MessageSquareCode, RefreshCw, Send } from 'lucide-react';

const AICore: React.FC = () => {
  const messages = [
    { role: 'ai', text: 'Conflux AI Core active. Infrastructure optimised and ready.' },
    { role: 'user', text: 'Analyse our customer support ticket volume and suggest automation.' },
    { role: 'ai', text: 'Detected 78% repeat queries. Deploying NLP automation module — estimated 40h/week saved.' }
  ];

  const capabilities = [
    { icon: <ShieldCheck size={15} />, text: "End-to-end encrypted logic" },
    { icon: <Zap size={15} />, text: "Sub-200ms response time" },
    { icon: <MessageSquareCode size={15} />, text: "Natural Language Processing" },
    { icon: <RefreshCw size={15} />, text: "Live CRM synchronisation" },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left text */}
      <div className="flex-1 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="section-tag mb-5 justify-center lg:justify-start"
        >
          Neural Infrastructure
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="font-orbitron font-black text-white mb-6 leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          THE <span className="text-gradient">WHATSAPP</span><br />OMNICHANNEL
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
        >
          Enterprise-grade AI deployed through the world's most accessible interface.
          We remove the friction between complex automation and your customers.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{
                background: 'rgba(14,165,233,0.05)',
                border: '1px solid rgba(14,165,233,0.1)'
              }}
            >
              <div style={{ color: '#0ea5e9', flexShrink: 0 }}>{item.icon}</div>
              <span className="text-slate-300 text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right phone mockup */}
      <div className="flex-1 w-full flex justify-center" style={{ perspective: '1200px' }}>
        <motion.div
          initial={{ rotateY: 20, rotateX: 10, y: 50, opacity: 0 }}
          whileInView={{ rotateY: 12, rotateX: 4, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            default: { duration: 1.2 }
          }}
          className="w-full max-w-[320px] md:max-w-[360px] mx-auto flex flex-col overflow-hidden"
          style={{
            height: '520px',
            borderRadius: '2.5rem',
            background: 'linear-gradient(180deg, rgba(5,15,31,0.95) 0%, rgba(2,12,27,0.98) 100%)',
            border: '1px solid rgba(14,165,233,0.25)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(14,165,233,0.15)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Phone header */}
          <div className="px-6 py-5 flex items-center gap-4" style={{ borderBottom: '1px solid rgba(14,165,233,0.1)', background: 'rgba(14,165,233,0.04)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', flexShrink: 0 }}>
              C
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white text-sm tracking-wide">CONFLUX AI CORE</h4>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <p className="font-orbitron text-[9px] tracking-widest uppercase" style={{ color: '#0ea5e9' }}>Active</p>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-5 space-y-5 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.5 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] p-3.5 text-xs leading-relaxed"
                  style={{
                    borderRadius: msg.role === 'user'
                      ? '16px 16px 4px 16px'
                      : '16px 16px 16px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #0ea5e9, #0284c7)'
                      : 'rgba(255,255,255,0.05)',
                    border: msg.role === 'ai' ? '1px solid rgba(14,165,233,0.12)' : 'none',
                    color: '#f0f9ff',
                  }}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input bar */}
          <div className="p-5 flex items-center gap-3" style={{ borderTop: '1px solid rgba(14,165,233,0.1)' }}>
            <div className="flex-1 h-11 rounded-full px-4 flex items-center text-[11px] text-slate-600 italic"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              Ask anything...
            </div>
            <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 12px rgba(14,165,233,0.4)' }}>
              <Send size={14} className="text-white ml-0.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AICore;