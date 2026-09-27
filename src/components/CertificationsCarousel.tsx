import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, GraduationCap, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, CertificationItem } from '../data/portfolioData';

export const CertificationsCarousel: React.FC = () => {
  // Current active index in the carousel
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeItem = CERTIFICATIONS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CERTIFICATIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === CERTIFICATIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="certifications" 
      className="relative w-full border-b border-white/20 bg-[#142270] blueprint-grid-dense py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-6 mb-12">
          <div>
            <div className="text-xs font-code tracking-[0.3em] text-[#FF5A36] uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A36] inline-block"></span>
              SEC // 06 · CREDENTIALS &amp; ACADEMICS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-bold">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>
          
          {/* Carousel Navigation Controls */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="font-code text-xs text-blue-200/80 mr-2 uppercase">
              INDEX: {activeIndex + 1} / {CERTIFICATIONS.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 border-2 border-white/30 bg-[#182882] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous credential"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 border-2 border-white/30 bg-[#182882] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next credential"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Layout: Highlighted White-Bordered Center Card Flanked by Badge Icons */}
        <div className="space-y-8">
          
          {/* Main Stage: Highlighted White-Bordered Center Card */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background offset blueprint shadow */}
            <div className="absolute -inset-1.5 bg-[#FF5A36]/20 transform rotate-0.5 border border-[#FF5A36]/40 pointer-events-none" />

            <div className="relative bg-[#182882] border-4 border-white p-6 sm:p-10 shadow-2xl">
              
              {/* Card Technical Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-[#FF5A36] text-white flex items-center justify-center">
                    {activeItem.isDegree ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="font-code text-xs text-[#FF5A36] font-bold uppercase tracking-wider block">
                      {activeItem.isDegree ? 'ACADEMIC DEGREE' : 'PROFESSIONAL CERTIFICATION'}
                    </span>
                    <span className="font-code text-[11px] text-blue-200/70 uppercase">
                      ID: {activeItem.badgeCode}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 bg-white text-[#182882] font-code text-xs font-bold uppercase tracking-widest">
                  VALIDATED // {activeItem.year}
                </div>
              </div>

              {/* Title & Organization */}
              <div className="space-y-3 mb-6">
                <h3 className="font-display text-2xl sm:text-4xl text-white font-bold tracking-tight leading-tight">
                  {activeItem.title}
                </h3>
                <div className="flex items-center gap-2 text-[#FF5A36] font-grotesk font-bold text-sm sm:text-base uppercase tracking-wide">
                  <span>ISSUER: {activeItem.issuer}</span>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {activeItem.description}
              </p>

              {/* Technical Blueprint Footer within the Center Card */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs font-code text-blue-200/80">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A36]" />
                  <span>CREDENTIAL VERIFIED &amp; PEER-REVIEWED</span>
                </div>
                <div className="text-right text-[#FF5A36] font-bold">
                  {activeItem.isDegree ? 'INFORMATION SCIENCE & ENGINEERING' : 'ENTERPRISE ARCHITECTURE'}
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding Flanking Diamond/Badge Icons with Year Tags (as described in prompt) */}
          <div className="pt-6">
            <div className="text-center font-code text-xs text-blue-200/60 uppercase tracking-widest mb-6">
              [ SELECT OR CYCLE SURROUNDING BADGES TO INSPECT SPECIFICATIONS ]
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
              {CERTIFICATIONS.map((item, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative p-3 sm:p-4 text-left border-2 transition-all duration-200 group flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] ${
                      isSelected 
                        ? 'bg-[#FF5A36] border-white text-white shadow-lg scale-105' 
                        : 'bg-[#182882] border-white/20 text-blue-200 hover:border-white hover:text-white'
                    }`}
                  >
                    {/* Badge diamond icon indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-7 h-7 flex items-center justify-center border ${
                        isSelected 
                          ? 'bg-white text-[#FF5A36] border-white' 
                          : 'bg-[#121e63] text-white border-white/30 group-hover:border-[#FF5A36]'
                      }`}>
                        {item.isDegree ? (
                          <GraduationCap className="w-3.5 h-3.5" />
                        ) : (
                          <Award className="w-3.5 h-3.5" />
                        )}
                      </div>

                      {/* Year Tag */}
                      <span className={`text-[10px] font-code px-1.5 py-0.5 font-bold uppercase ${
                        isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-white'
                      }`}>
                        {item.year.includes('–') ? '2022' : item.year}
                      </span>
                    </div>

                    {/* Small Badge Title */}
                    <div>
                      <div className="font-grotesk font-bold text-xs line-clamp-2 leading-snug mb-1">
                        {item.title}
                      </div>
                      <div className={`text-[10px] font-code truncate ${
                        isSelected ? 'text-white/80' : 'text-blue-300/60'
                      }`}>
                        {item.issuer}
                      </div>
                    </div>

                    {/* Active diamond indicator */}
                    {isSelected && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
