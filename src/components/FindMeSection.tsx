import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';

export const FindMeSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const contactTiles = [
    {
      id: 'email',
      name: 'EMAIL',
      value: 'nsachar76@gmail.com',
      actionLabel: 'SEND EMAIL',
      href: 'mailto:nsachar76@gmail.com',
      copyValue: 'nsachar76@gmail.com',
      icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7" />,
      subtext: 'Primary direct channel · Instant response'
    },
    {
      id: 'linkedin',
      name: 'LINKEDIN',
      value: 'linkedin.com/in/nikhil-acharya-6b0039202',
      actionLabel: 'OPEN PROFILE',
      href: 'https://www.linkedin.com/in/nikhil-acharya-6b0039202',
      copyValue: 'https://www.linkedin.com/in/nikhil-acharya-6b0039202',
      icon: <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />,
      subtext: 'Professional network · Recommendations & connect'
    },
    {
      id: 'phone',
      name: 'MOBILE / PHONE',
      value: '+91 7676183915',
      actionLabel: 'CALL / MESSAGE',
      href: 'tel:+917676183915',
      copyValue: '7676183915',
      icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7" />,
      subtext: 'Direct voice & WhatsApp · 7676183915'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative w-full border-b border-white/20 bg-[#182882] blueprint-grid py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-6 mb-12">
          <div>
            <div className="text-xs font-code tracking-[0.3em] text-[#FF5A36] uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A36] inline-block"></span>
              SEC // 07 · TRANSMISSION CHANNELS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-bold">
              FIND ME HERE
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-code text-xs text-blue-200/80 tracking-widest uppercase">
            COMMUNICATION PROTOCOLS // OPEN FOR NEW OPPORTUNITIES
          </div>
        </div>

        {/* Small Square Social Icon Tiles Grid (as requested in style reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactTiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-[#142270] border-2 border-white/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#FF5A36] transition-all duration-200 group relative shadow-lg"
            >
              {/* Top Row: Square Icon Box & Badge */}
              <div className="flex items-start justify-between mb-6">
                {/* Square Icon Tile */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#182882] border-2 border-white/30 text-[#FF5A36] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#FF5A36] group-hover:text-white group-hover:border-[#FF5A36] transition-all duration-200 shadow-sm">
                  {tile.icon}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-code text-[10px] text-white/50 tracking-wider">
                    CHAN // 0{tile.id === 'email' ? '1' : tile.id === 'linkedin' ? '2' : '3'}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(tile.copyValue, tile.id)}
                    className="p-1.5 border border-white/20 text-blue-200 hover:text-white hover:border-white transition-colors"
                    title={`Copy ${tile.name}`}
                    aria-label={`Copy ${tile.name}`}
                  >
                    {copiedKey === tile.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Center Info */}
              <div className="space-y-2 mb-6">
                <div className="font-code text-xs text-[#FF5A36] font-bold tracking-widest uppercase">
                  {tile.name}
                </div>
                <div className="font-grotesk font-bold text-lg sm:text-xl text-white break-all">
                  {tile.value}
                </div>
                <p className="text-xs font-code text-blue-200/70">
                  {tile.subtext}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <a
                  href={tile.href}
                  target={tile.id === 'linkedin' ? '_blank' : undefined}
                  rel={tile.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-xs font-grotesk font-bold tracking-widest text-white hover:text-[#FF5A36] transition-colors"
                >
                  <span>{tile.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF5A36] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {copiedKey === tile.id && (
                  <span className="text-[10px] font-code text-emerald-400 font-bold uppercase animate-pulse">
                    COPIED!
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint Callout Strip */}
        <div className="mt-8 border-2 border-white/20 bg-[#121e63] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code">
          <div className="flex items-center gap-3 text-blue-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] animate-ping" />
            <span className="text-white font-medium">AVAILABLE FOR IMMEDIATE CONTRACTS &amp; FULL-TIME DATA ROLES</span>
          </div>
          <div className="text-[#FF5A36] font-bold tracking-wider">
            PRIMARY GEO: BENGALURU, INDIA · REMOTE GLOBAL
          </div>
        </div>

      </div>
    </section>
  );
};
