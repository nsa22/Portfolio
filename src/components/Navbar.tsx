import React, { useState } from 'react';
import { Mail, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'AWARDS / CERTS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#182882]/95 backdrop-blur-md border-b border-white/20 select-none">
      {/* Top technical coordinate ticker bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-1 border-b border-white/10 text-[10px] font-code tracking-widest text-blue-200/60 uppercase">
        <div className="flex items-center gap-4">
          <span>PORTFOLIO_SPEC // DATA_ENGINEERING_V2.6</span>
          <span className="text-[#FF5A36]">● LIVE</span>
          <span>LAT: 12.9716° N // LON: 77.5946° E</span>
        </div>
        <div className="flex items-center gap-4">
          <span>STACK: GCP · AWS · SNOWFLAKE · AIRFLOW</span>
          <span className="text-white/40">SEC: 01-INDEX</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* LOGO TREATMENT: Small square badge containing bold initials "NA" next to full name in tracked-out, spaced-out capital letters */}
        <a 
          href="#hero" 
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36]"
          aria-label="Nikhil Acharya Homepage"
        >
          <div className="w-10 h-10 bg-white text-[#182882] flex items-center justify-center font-display text-2xl font-black tracking-tighter border-2 border-white shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#FF5A36] group-hover:text-white group-hover:border-[#FF5A36]">
            NA
          </div>
          <div className="flex flex-col">
            <span className="font-grotesk text-sm sm:text-base font-bold tracking-[0.28em] text-white group-hover:text-blue-100 transition-colors uppercase">
              NIKHIL ACHARYA
            </span>
            <span className="text-[10px] tracking-widest font-code text-blue-200/70 uppercase">
              MULTI-CLOUD ETL/ELT DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-xs font-grotesk font-semibold tracking-widest text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#FF5A36] focus:outline-none focus-visible:text-[#FF5A36]"
            >
              <span className="inline-block transition-transform hover:-translate-y-0.5">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A36] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Small circular social icons top-right in coral-orange + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://www.linkedin.com/in/nikhil-acharya-6b0039202"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5A36] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#ff6f4e] hover:shadow-[0_0_15px_rgba(255,90,54,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
          </a>

          <a
            href="mailto:nsachar76@gmail.com"
            title="Email Nikhil"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5A36] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#ff6f4e] hover:shadow-[0_0_15px_rgba(255,90,54,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#FF5A36] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-[#142270] px-6 py-6 space-y-4 blueprint-grid-dense animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-grotesk font-bold text-sm tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/10 text-white hover:text-[#FF5A36] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5A36]" />
              </a>
            ))}
          </div>

          <div className="pt-2 text-xs font-code text-blue-200/60 flex justify-between items-center">
            <span>SYS_LOC // BENGALURU, IN</span>
            <span className="text-[#FF5A36]">STATUS: OPEN FOR ROLES</span>
          </div>
        </div>
      )}
    </header>
  );
};
