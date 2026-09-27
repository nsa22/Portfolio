import React from 'react';
import { Database, ShieldCheck, Zap, Layers, GitBranch, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-[#FF5A36]" />,
      title: 'MULTI-CLOUD PIPELINES',
      spec: 'AWS + GCP HYBRID',
      desc: 'Seamless data integration pipelines bridging on-premises legacy systems and hybrid cloud environments using Airflow, Cloud Composer, and Data Fusion.'
    },
    {
      icon: <Database className="w-5 h-5 text-[#FF5A36]" />,
      title: 'HIGH-PERFORMANCE DWH',
      spec: 'SNOWFLAKE & BIGQUERY',
      desc: 'Deep optimization of modern analytical warehouses via partitioned clustering, zero-copy cloning, materialized views, and aggressive query tuning.'
    },
    {
      icon: <Zap className="w-5 h-5 text-[#FF5A36]" />,
      title: 'STREAMING & REAL-TIME CDC',
      spec: 'CHANGE DATA CAPTURE',
      desc: 'Automated Change Data Capture pipelines syncing operational transactional databases (Amazon RDS) into analytics tiers with sub-minute latency.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FF5A36]" />,
      title: 'GOVERNANCE & RESILIENCE',
      spec: '99.9% UPTIME SLA',
      desc: 'Bulletproof data integrity frameworks with Snowflake Time Travel, automated schema drift handling, and CloudWatch/SQS/SNS monitoring.'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative w-full border-b border-white/20 bg-[#142270] blueprint-grid-dense py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-6 mb-12">
          <div>
            <div className="text-xs font-code tracking-[0.3em] text-[#FF5A36] uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF5A36]"></span>
              SEC // 02 · PROFILE SPECIFICATION
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight font-bold">
              ABOUT THE DEVELOPER
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-code text-xs text-blue-200/70 tracking-widest uppercase">
            SPEC_SHEET: DATA INTEGRATION &amp; PLATFORM SCALING
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 bg-[#182882] border-2 border-white/20 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-code text-xs text-[#FF5A36] uppercase font-bold tracking-widest">
                  [EXECUTIVE BRIEF]
                </span>
                <span className="font-code text-xs text-blue-200/60">
                  REF: NIKHIL-ENG-2026
                </span>
              </div>

              <h3 className="font-grotesk text-xl sm:text-2xl font-bold text-white leading-snug">
                Transforming chaotic data streams into unified, deterministic enterprise intelligence.
              </h3>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                With deep hands-on expertise across both <strong className="text-white">Google Cloud Platform (GCP)</strong> and <strong className="text-white">Amazon Web Services (AWS)</strong>, I engineer automated data pipelines that eliminate ingestion bottlenecks, maintain strict ACID compliance, and unlock real-time analytics.
              </p>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                My work at <strong className="text-white">Niveus Solutions</strong> and <strong className="text-white">Capgemini</strong> centers on mission-critical environments in banking, financial services, and telecommunications — cutting query runtimes by over 80% and delivering reliable 99.9% uptime.
              </p>
            </div>

            {/* Technical Signature */}
            <div className="pt-8 mt-6 border-t border-white/15 flex items-center justify-between">
              <div>
                <div className="font-display text-xl text-white tracking-wider">NIKHIL S ACHARYA</div>
                <div className="font-code text-[11px] text-blue-200/70">DATA INTEGRATION SPECIALIST</div>
              </div>
              <div className="px-3 py-1 bg-white text-[#182882] font-code text-xs font-bold tracking-widest uppercase">
                CERTIFIED GCP &amp; AWS
              </div>
            </div>
          </div>

          {/* Right 4 Blueprint Technical Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-[#182882] border border-white/20 p-5 flex flex-col justify-between hover:border-[#FF5A36] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#121e63] border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className="font-code text-[10px] text-white/50 tracking-wider">
                      MOD // 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-grotesk font-bold text-sm text-white tracking-wide mb-1">
                    {pillar.title}
                  </h4>
                  <div className="text-[10px] font-code text-[#FF5A36] font-bold tracking-wider mb-2">
                    {pillar.spec}
                  </div>
                  <p className="text-blue-100/80 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                  <span className="text-[10px] font-code text-white/40 group-hover:text-white transition-colors">
                    ACTIVE MODULE →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
