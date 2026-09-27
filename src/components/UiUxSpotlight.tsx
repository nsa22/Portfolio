import React, { useState } from 'react';
import { Play, Layers, Layout, Figma, Sparkles, Check, ArrowRight } from 'lucide-react';
import { UI_UX_SPOTLIGHT } from '../data/portfolioData';

interface UiUxSpotlightProps {
  onViewCase: () => void;
}

export const UiUxSpotlight: React.FC<UiUxSpotlightProps> = ({ onViewCase }) => {
  return (
    <section 
      id="spotlight" 
      className="relative w-full border-b border-white/20 bg-[#182882] blueprint-grid py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Annotation */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-8">
          <div className="text-xs font-code tracking-[0.3em] text-[#FF5A36] uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF5A36] inline-block"></span>
            FEATURE // 05 · CROSS-FUNCTIONAL DESIGN INITIATIVE
          </div>
          <div className="font-code text-xs text-blue-200/70 tracking-widest uppercase hidden sm:block">
            FIGMA · ADOBE XD · DATA VISUALIZATION
          </div>
        </div>

        {/* Large Two-Column "Feature" Band (matching reference's "2023 Best of the Best" section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Headline + Copy + Coral Pill CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 font-code text-xs font-bold uppercase tracking-widest border border-white/15">
                SPECIAL RECOGNITION
              </span>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight font-bold leading-none">
                CENTRE OF EXCELLENCE
                <span className="block text-[#FF5A36]">— UI/UX</span>
              </h2>
            </div>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
              Bridging deep data engineering rigor with user-centered interface architecture. Empowering enterprise stakeholders to interact intuitively with complex data flows, analytics dashboards, and executive metrics.
            </p>

            {/* Feature Bullets */}
            <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed font-normal">
              {UI_UX_SPOTLIGHT.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                  <span>
                    {bullet.includes('25%') ? (
                      <>
                        Streamlined workflows with Agile methods, cutting turnaround time by{' '}
                        <strong className="text-[#FF5A36] font-bold underline decoration-white/30 decoration-2">
                          25%
                        </strong>{' '}
                        across design-to-development cycles.
                      </>
                    ) : (
                      bullet
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Metric Callout + Pill CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
              <button
                type="button"
                onClick={onViewCase}
                className="group inline-flex items-center gap-4 bg-[#FF5A36] hover:bg-[#ff6f4e] text-white px-8 py-4 rounded-full font-grotesk font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_8px_25px_rgba(255,90,54,0.4)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>VIEW CASE</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#FF5A36] flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-sm">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </button>

              <div className="flex items-center gap-3 border-l-2 border-white/20 pl-4 py-1">
                <div className="font-display text-3xl text-white font-bold">25%</div>
                <div className="text-[11px] font-code text-blue-200/80 leading-tight uppercase">
                  Turnaround<br />Speedup
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Big Hatch-Pattern Image Block with Wireframe Dashboard Overlay */}
          <div className="lg:col-span-6">
            <div className="relative border-2 border-white/20 bg-[#121e63] p-3 shadow-2xl">
              
              {/* Technical Header */}
              <div className="px-4 py-2.5 bg-[#182882] border-b border-white/20 flex items-center justify-between text-[11px] font-code text-blue-200 uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A36]"></span>
                  <span>UI/UX DESIGN SYSTEM // DATA DASHBOARDS</span>
                </div>
                <span>FIGMA · VIZ_SPEC</span>
              </div>

              {/* Big Hatch-Pattern Image Block */}
              <div className="relative h-96 sm:h-[440px] blueprint-hatch border border-white/20 p-6 flex flex-col justify-between overflow-hidden">
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#121e63]/90 via-transparent to-transparent pointer-events-none" />

                {/* Top Blueprint Technical Badge */}
                <div className="relative z-10 flex justify-between items-center">
                  <div className="bg-[#182882]/95 border border-white/30 px-3 py-1 text-xs font-code text-white">
                    SCALE: VECTOR HD // FIGMA PROTOTYPE
                  </div>
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center font-code text-xs text-[#FF5A36]">
                    ☩
                  </div>
                </div>

                {/* Simulated Data Visualization Wireframe Mockup */}
                <div className="relative z-10 my-auto bg-[#182882]/95 border-2 border-white/30 p-5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5A36]" />
                      <div className="w-3 h-3 rounded-full bg-white/40" />
                      <div className="w-3 h-3 rounded-full bg-white/40" />
                      <span className="ml-2 font-code text-xs text-white uppercase font-bold tracking-wider">
                        EXECUTIVE PIPELINE HEALTH DASHBOARD
                      </span>
                    </div>
                    <span className="font-code text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 border border-emerald-500/30">
                      LIVE STREAM
                    </span>
                  </div>

                  {/* Wireframe Bar & Stat Chart */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#121e63] p-3 border border-white/15">
                      <div className="text-[10px] font-code text-blue-200/70">TOTAL INGESTION</div>
                      <div className="font-display text-xl text-white font-bold">14.2M REC</div>
                      <div className="w-full bg-white/10 h-1 mt-2">
                        <div className="bg-[#FF5A36] h-1 w-[82%]" />
                      </div>
                    </div>
                    <div className="bg-[#121e63] p-3 border border-white/15">
                      <div className="text-[10px] font-code text-blue-200/70">AVG LATENCY</div>
                      <div className="font-display text-xl text-white font-bold">120 MS</div>
                      <div className="w-full bg-white/10 h-1 mt-2">
                        <div className="bg-white h-1 w-[45%]" />
                      </div>
                    </div>
                    <div className="bg-[#121e63] p-3 border border-white/15">
                      <div className="text-[10px] font-code text-blue-200/70">SLO STATUS</div>
                      <div className="font-display text-xl text-[#FF5A36] font-bold">99.98%</div>
                      <div className="w-full bg-white/10 h-1 mt-2">
                        <div className="bg-[#FF5A36] h-1 w-[99%]" />
                      </div>
                    </div>
                  </div>

                  {/* Waveform / Timeline simulation */}
                  <div className="bg-[#121e63] p-3 border border-white/15 flex items-center justify-between text-xs font-code">
                    <span className="text-blue-200">PIPELINE DRIFT MONITOR</span>
                    <span className="text-[#FF5A36] font-bold">0 CRITICAL ALERTS</span>
                  </div>
                </div>

                {/* Bottom Spec Footer */}
                <div className="relative z-10 flex justify-between items-center text-[10px] font-code text-blue-200/80">
                  <span>DESIGN TO DEPLOYMENT CYCLE: -25% TIME</span>
                  <span className="text-white font-semibold">AGILE METHODOLOGY</span>
                </div>
              </div>

              {/* Bottom Frame Bar */}
              <div className="px-4 py-2 bg-[#142270] border-t border-white/20 flex justify-between items-center text-[10px] font-code text-white/60">
                <span>COMPONENT REF: COE-UIUX-SPEC</span>
                <span className="text-[#FF5A36]">PROTOTYPES: FIGMA / ADOBE XD</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
