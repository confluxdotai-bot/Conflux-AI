
import React from 'react';

const Footer: React.FC<{ siteLogo: string | null }> = ({ siteLogo }) => {
  const navyColor = "#000080";

  return (
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
  );
};

export default Footer;
