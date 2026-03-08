
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, Building2, Briefcase, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    goal: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    setStatus('processing');

    try {
      // EmailJS configuration — sends to confluxdotai@gmail.com
      await emailjs.send(
        'service_confluxai',      // EmailJS Service ID
        'template_confluxai',     // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company,
          goal: formData.goal || 'Not specified',
          message: formData.message || 'No additional message',
          to_email: 'confluxdotai@gmail.com',
          reply_to: formData.email,
        },
        'YOUR_EMAILJS_PUBLIC_KEY'  // Replace with your EmailJS Public Key
      );
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      // Fallback — open mailto link if EmailJS fails
      const subject = encodeURIComponent(`New Growth Application — ${formData.company}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nGoal: ${formData.goal}\nMessage: ${formData.message}`
      );
      window.location.href = `mailto:confluxdotai@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
    }
  };

  const inputStyle = (field: string) => ({
    width: '100%',
    background: focused === field ? 'rgba(14,165,233,0.07)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? 'rgba(14,165,233,0.5)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '6px',
    padding: '14px 16px',
    color: '#f0f9ff',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.25s ease',
    fontFamily: 'Inter, sans-serif',
    boxShadow: focused === field ? '0 0 0 3px rgba(14,165,233,0.08)' : 'none'
  });

  const serviceOptions = [
    { value: 'ai-automation', label: 'AI Automation & Chatbots' },
    { value: 'web-development', label: 'Website Development' },
    { value: 'ad-optimization', label: 'Ad Stack Optimization' },
    { value: 'full-stack', label: 'Complete Digital Infrastructure' },
    { value: 'it-consultancy', label: 'IT Strategy Consultancy' },
  ];

  if (status === 'success') {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20 px-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(5,15,31,0.9))',
            border: '1px solid rgba(14,165,233,0.25)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.3)' }}>
            <CheckCircle2 size={40} style={{ color: '#0ea5e9' }} />
          </div>
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3">Application Received!</h3>
          <p className="text-slate-400 text-sm md:text-base mb-2 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our growth team has received your application
            and will reach out within <strong className="text-sky-400">24 hours</strong>.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg"
            style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
            <Mail size={14} style={{ color: '#0ea5e9' }} />
            <span className="font-orbitron text-[11px] tracking-widest text-sky-400">confluxdotai@gmail.com</span>
          </div>
          <div className="mt-6">
            <button
              onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', company: '', goal: '', message: '' }); }}
              className="font-orbitron text-[10px] tracking-widest text-slate-500 hover:text-sky-400 transition-colors bg-transparent border-none"
            >
              SUBMIT ANOTHER APPLICATION
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}
        >
          <Mail size={28} style={{ color: '#0ea5e9' }} />
        </motion.div>
        <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight">
          Apply for <span className="text-gradient">Growth</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto mb-4 leading-relaxed">
          Tell us about your business and goals. We'll design a custom AI strategy for you.
        </p>
        <div className="flex items-center justify-center gap-2" style={{ color: 'rgba(14,165,233,0.6)' }}>
          <Mail size={12} />
          <a href="mailto:confluxdotai@gmail.com" className="font-orbitron text-[10px] tracking-widest hover:text-sky-400 transition-colors uppercase">
            confluxdotai@gmail.com
          </a>
        </div>
      </div>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(14,165,233,0.04) 0%, rgba(5,15,31,0.85) 100%)',
          border: '1px solid rgba(14,165,233,0.12)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5)'
        }}
      >
        {/* Form top bar */}
        <div className="px-8 py-4 flex items-center gap-2" style={{ borderBottom: '1px solid rgba(14,165,233,0.08)', background: 'rgba(14,165,233,0.03)' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <span className="ml-4 font-orbitron text-[9px] tracking-widest text-slate-600 uppercase">Growth Application Form</span>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Full Name */}
            <div>
              <label className="flex items-center gap-2 text-slate-400 text-[11px] font-medium tracking-widest uppercase mb-2">
                <User size={10} /> Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                style={inputStyle('name')}
                value={formData.name}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-slate-400 text-[11px] font-medium tracking-widest uppercase mb-2">
                <Mail size={10} /> Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                style={inputStyle('email')}
                value={formData.email}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Company */}
            <div>
              <label className="flex items-center gap-2 text-slate-400 text-[11px] font-medium tracking-widest uppercase mb-2">
                <Building2 size={10} /> Company / Business *
              </label>
              <input
                type="text"
                required
                placeholder="Your company name"
                style={inputStyle('company')}
                value={formData.company}
                onFocus={() => setFocused('company')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-slate-400 text-[11px] font-medium tracking-widest uppercase mb-2">
                <User size={10} /> Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                style={inputStyle('phone')}
                value={formData.phone}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Service Goal */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-slate-400 text-[11px] font-medium tracking-widest uppercase mb-2">
                <Briefcase size={10} /> What Do You Need?
              </label>
              <select
                style={{ ...inputStyle('goal'), cursor: 'pointer', appearance: 'none' }}
                value={formData.goal}
                onFocus={() => setFocused('goal')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData({ ...formData, goal: e.target.value })}
              >
                <option value="" style={{ background: '#020c1b' }}>Select a service...</option>
                {serviceOptions.map(opt => (
                  <option key={opt.value} value={opt.value} style={{ background: '#020c1b' }}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-slate-400 text-[11px] font-medium tracking-widest uppercase mb-2">
                <Send size={10} /> Tell Us More (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your business challenge, target market, and what success looks like for you..."
                style={{ ...inputStyle('message'), resize: 'none' }}
                value={formData.message}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 pt-2">
              {status === 'error' && (
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                  <span className="text-red-400 text-xs">Something went wrong. Please email us directly at confluxdotai@gmail.com</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'processing'}
                className="w-full group py-4 md:py-5 rounded-lg font-orbitron text-xs tracking-[0.25em] text-white flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-60"
                style={{
                  background: status === 'processing'
                    ? 'rgba(14,165,233,0.5)'
                    : 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  boxShadow: status !== 'processing' ? '0 8px 30px rgba(14,165,233,0.4)' : 'none'
                }}
              >
                {status === 'processing' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    SENDING YOUR APPLICATION...
                  </>
                ) : (
                  <>
                    SUBMIT APPLICATION
                    <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>

              <p className="text-center mt-4 text-[10px] text-slate-600">
                🔒 Your information is secure and will never be shared. We respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
