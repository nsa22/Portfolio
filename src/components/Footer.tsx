import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'AWARDS / CERTS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#0e174e] border-t-2 border-white/20 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/15">
          
          {/* Logo Badge + Tracked Out Name */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-white text-[#182882] flex items-center justify-center font-display text-2xl font-black border-2 border-white">
              NA
            </div>
            <div className="flex flex-col">
              <span className="font-grotesk text-base font-bold tracking-[0.28em] text-white uppercase">
                NIKHIL ACHARYA
              </span>
              <span className="text-[10px] tracking-widest font-code text-blue-200/70 uppercase">
                MULTI-CLOUD ETL/ELT DEVELOPER
              </span>
            </div>
          </div>

          {/* Nav Links Repeated */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-grotesk font-bold tracking-widest text-blue-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#FF5A36] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll to Top Blueprint Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="self-start lg:self-auto inline-flex items-center gap-2 px-4 py-2 border border-white/25 hover:border-white hover:bg-white/10 text-xs font-code uppercase tracking-wider text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5A36]" />
          </button>
        </div>

        {/* Bottom Technical Spec & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-code text-blue-200/60">
          <div>
            © 2026 Nikhil S Acharya. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>SYS_BUILD // V2.6.4</span>
            <span className="text-white/30">|</span>
            <span>BLUEPRINT DESIGN LANGUAGE</span>
            <span className="text-white/30">|</span>
            <span className="text-[#FF5A36]">STATUS: SECURE 200 OK</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
