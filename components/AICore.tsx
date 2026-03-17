import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, MessageSquareCode, RefreshCw, Send } from 'lucide-react';
import AnswerBox from './AnswerBox';

const AICore: React.FC = () => {
  const messages = [
    { role: 'ai', text: 'Conflux AI Core active. Infrastructure optimised and ready.' },
    { role: 'user', text: 'Analyse our customer support ticket volume and suggest automation.' },
    { role: 'ai', text: 'Detected 78% repeat queries. Deploying NLP automation module — estimated 40h/week saved.' }
  ];

  const capabilities = [
    { icon: <ShieldCheck size={15} />, text: "Safe and Secure" },
    { icon: <Zap size={15} />, text: "Lightning Fast" },
    { icon: <MessageSquareCode size={15} />, text: "Smart Understanding" },
    { icon: <RefreshCw size={15} />, text: "Updates Instantly" },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-4 md:px-6">
      {/* Left text */}
      <div className="flex-1 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 font-orbitron text-[10px] tracking-widest text-blue-500 uppercase"
          style={{ background: 'rgba(0,0,255,0.1)', border: '1px solid rgba(0,0,255,0.3)' }}
        >
          Neural Infrastructure
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="font-inter font-black mb-6 leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f8fafc' }}
        >
          TALK TO CUSTOMERS<br />
          ON <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #6666ff 0%, #0000cc 100%)' }}>WHATSAPP</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg font-normal leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
          style={{ color: '#cbd5e1' }}
        >
          Use the power of AI right where your customers already are. We help you answer messages, book appointments, and help people 24/7 without extra work.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-slate-800/50"
              style={{
                background: 'rgba(0,0,255,0.05)',
                border: '1px solid rgba(0,0,255,0.2)'
              }}
            >
              <div style={{ color: '#3333ff', flexShrink: 0 }}>{item.icon}</div>
              <span className="text-sm font-medium" style={{ color: '#cbd5e1' }}>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side: AEO Answer Box & Phone mockup */}
      <div className="flex-1 w-full flex flex-col items-center gap-12">
        <AnswerBox 
          question="How can an AI Chatbot help my business grow?"
          answer="A custom AI Chatbot is like a super-fast assistant that works 24/7. It talks to your website visitors, answers their questions immediately, and books meetings for you even while you sleep. Most businesses find they can capture 50% more customers because no one has to wait for a reply."
          listItems={[
            "Always Awake: Works 24/7, never misses a customer.",
            "Instant Replies: No more waiting for emails.",
            "Saves Time: Automatically books your meetings."
          ]}
          delay={0.4}
        />

        <div className="relative" style={{ perspective: '1200px' }}>
          <motion.div
            initial={{ rotateY: 20, rotateX: 10, y: 50, opacity: 0 }}
            whileInView={{ rotateY: 12, rotateX: 4, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              default: { duration: 1.2 }
            }}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto flex flex-col overflow-hidden"
            style={{
              height: '520px',
              borderRadius: '2.5rem',
              background: 'linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(2,12,27,0.98) 100%)',
              border: '1px solid rgba(0,0,255,0.3)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,255,0.2), 0 0 40px rgba(0,0,255,0.1)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Phone header */}
            <div className="px-6 py-5 flex items-center gap-4" style={{ borderBottom: '1px solid rgba(0,0,255,0.15)', background: 'rgba(2,12,27,0.8)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #0000ff, #0000cc)', flexShrink: 0, boxShadow: '0 0 15px rgba(0,0,255,0.5)' }}>
                C
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm tracking-wide text-white">CONFLUX AI CORE</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" style={{ boxShadow: '0 0 8px #3333ff' }} />
                  <p className="font-orbitron text-[9px] tracking-widest uppercase" style={{ color: '#3333ff' }}>Active</p>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-5 space-y-5 overflow-y-auto" style={{ background: '#020c1b' }}>
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
                        ? 'linear-gradient(135deg, #0000ff, #0000cc)'
                        : 'rgba(30,41,59,0.6)',
                      border: msg.role === 'ai' ? '1px solid rgba(0,0,255,0.2)' : 'none',
                      color: msg.role === 'user' ? '#ffffff' : '#cbd5e1',
                      boxShadow: msg.role === 'user' ? '0 4px 15px rgba(0,0,255,0.3)' : 'none'
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input bar */}
            <div className="p-5 flex items-center gap-3" style={{ borderTop: '1px solid rgba(0,0,255,0.15)', background: 'rgba(2,12,27,0.9)' }}>
              <div className="flex-1 h-11 rounded-full px-4 flex items-center text-[11px] italic"
                style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(30,41,59,0.8)', color: '#64748b' }}>
                Awaiting command...
              </div>
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0000ff, #0000cc)', border: '1px solid #3333ff', boxShadow: '0 0 15px rgba(0,0,255,0.4)' }}>
                <Send size={14} className="text-white ml-0.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AICore;