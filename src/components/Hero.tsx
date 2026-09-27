import React from 'react';
import { Play, ArrowDown, Database, Cpu, Cloud, Workflow, Sparkles } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMoreClick }) => {
  return (
    <section 
      id="hero" 
      className="relative w-full border-b border-white/20 bg-[#182882] blueprint-grid overflow-hidden"
    >
      {/* Blueprint Structural Grid Lines & Technical Annotation Marks */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle crosshairs at corners */}
        <span className="absolute top-4 left-4 font-code text-xs text-white/30">+ [0,0] REF</span>
        <span className="absolute top-4 right-4 font-code text-xs text-white/30">[1440,0] +</span>
        <span className="absolute bottom-4 left-4 font-code text-xs text-white/30">+ [0,900]</span>
        <span className="absolute bottom-4 right-4 font-code text-xs text-white/30">[1440,900] +</span>
        
        {/* Vertical technical demarcation line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Eyebrow Label with Technical Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs sm:text-sm font-grotesk font-bold uppercase tracking-[0.35em] text-[#FF5A36] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF5A36] rounded-full inline-block animate-pulse"></span>
                DATA ENGINEER
              </span>
              <span className="text-white/30 font-code text-xs hidden sm:inline">// MULTI-CLOUD ARCHITECT</span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-code tracking-wider text-blue-200">
                AWS · GCP
              </span>
            </div>

            {/* Huge bold name (condensed / grotesk sans-serif) */}
            <div className="space-y-1">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8rem] uppercase font-bold leading-[0.88] tracking-tight text-white drop-shadow-sm">
                NIKHIL S
                <span className="block text-white/95">ACHARYA</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-blue-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl border-l-2 border-[#FF5A36] pl-4 py-1">
              Dynamic IT professional specializing in end-to-end data integration across multi-cloud environments (AWS &amp; GCP), building scalable ETL/ELT pipelines for finance and telecom.
            </p>

            {/* Pill-shaped CTA button with circular play/arrow icon in coral-orange */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onLearnMoreClick();
                }}
                className="group inline-flex items-center gap-4 bg-[#FF5A36] hover:bg-[#ff6f4e] text-white px-7 py-3.5 rounded-full font-grotesk font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_8px_25px_rgba(255,90,54,0.4)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>LEARN MORE</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#FF5A36] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110 shadow-inner">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 font-grotesk font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-200"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4 text-[#FF5A36]" />
              </a>
            </div>

            {/* Technical Spec Footnote / Key Metrics Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/15 max-w-xl text-left">
              <div>
                <div className="font-display text-2xl sm:text-3xl text-white font-bold">2+ HRS → 20M</div>
                <div className="text-[11px] font-code text-blue-200/70 uppercase">Query Speedup</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-[#FF5A36] font-bold">90%</div>
                <div className="text-[11px] font-code text-blue-200/70 uppercase">Manual Reduction</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl text-white font-bold">99.9%</div>
                <div className="text-[11px] font-code text-blue-200/70 uppercase">Uptime Metric</div>
              </div>
            </div>

          </div>

          {/* Right Column: Large Hatch-Pattern Decorative Block (matching the reference's image slot) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Blueprint Container Frame */}
              <div className="relative p-2 bg-[#121e63] border-2 border-white/20 shadow-2xl">
                
                {/* Technical Card Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#182882] border-b border-white/20 text-[10px] font-code tracking-wider text-blue-200 uppercase">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A36]"></span>
                    <span>FIG.01 // DATA PIPELINE TOPOLOGY</span>
                  </div>
                  <span>REF: ARCH-GCP-AWS</span>
                </div>

                {/* Large Diagonal Hatch Area */}
                <div className="relative h-80 sm:h-96 md:h-[420px] blueprint-hatch border border-white/15 flex flex-col justify-between p-6 overflow-hidden">
                  
                  {/* Subtle technical wireframe graphics overlay inside the hatch */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101c57]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Target Markers */}
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="p-2 bg-[#182882]/90 border border-white/20 text-[11px] font-code">
                      <div className="text-white/60">SOURCE NODE</div>
                      <div className="text-[#FF5A36] font-bold">CDC · STREAMS · S3</div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center font-code text-xs text-white/70">
                      ✛
                    </div>
                  </div>

                  {/* Center Blueprint Flow Visualization Box */}
                  <div className="relative z-10 my-auto bg-[#182882]/95 border-2 border-white/30 p-5 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <span className="text-[11px] font-code font-bold tracking-widest text-blue-200 uppercase">
                        INGESTION TO WAREHOUSE
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-[#FF5A36] text-white font-bold rounded-full">
                        ACTIVE
                      </span>
                    </div>

                    <div className="space-y-3 font-code text-xs text-blue-100">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-[#2a43cf] flex items-center justify-center text-white text-[11px]">
                          01
                        </div>
                        <span className="text-white font-medium">Cloud Composer (Airflow)</span>
                      </div>
                      <div className="w-0.5 h-3 bg-white/20 ml-3" />
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-[#2a43cf] flex items-center justify-center text-white text-[11px]">
                          02
                        </div>
                        <span className="text-white font-medium">GCP Data Fusion / Snowpipe</span>
                      </div>
                      <div className="w-0.5 h-3 bg-white/20 ml-3" />
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-[#FF5A36] flex items-center justify-center text-white text-[11px]">
                          03
                        </div>
                        <span className="text-white font-bold">BigQuery &amp; Snowflake Warehousing</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Blueprint Tag */}
                  <div className="relative z-10 flex justify-between items-end text-[10px] font-code text-blue-200/80">
                    <div>
                      <span>STATUS: CONTINUOUS RECONCILIATION</span>
                      <div className="text-white font-semibold">ZERO DATA LOSS GUARANTEE</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[#FF5A36]">SCALE // PETABYTE-READY</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Frame Metric Ticker */}
                <div className="px-3 py-2 bg-[#142270] border-t border-white/20 flex justify-between items-center text-[10px] font-code text-white/70">
                  <span>SCALE: 1:1 PRODUCTION</span>
                  <span>BUILD ID: NA-2026-ENG</span>
                </div>
              </div>

              {/* Offset Decorative Accent Badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FF5A36] border-2 border-white text-white flex flex-col items-center justify-center p-2 shadow-xl rotate-3 hover:rotate-0 transition-transform">
                <span className="font-display text-2xl font-bold leading-none">ETL</span>
                <span className="text-[9px] font-code tracking-widest uppercase">PIPELINES</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
