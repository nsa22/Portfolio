import React, { useState } from 'react';
import { CheckSquare, ArrowUpRight, Play, Database, Cloud, Activity, ChevronRight } from 'lucide-react';
import { WORK_CARDS, WorkCard } from '../data/portfolioData';

interface WorkExperienceProps {
  onSelectCard: (card: WorkCard) => void;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ onSelectCard }) => {
  return (
    <section 
      id="work" 
      className="relative w-full border-b border-white/20 bg-[#182882] blueprint-grid py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-6 mb-12">
          <div>
            <div className="text-xs font-code tracking-[0.3em] text-[#FF5A36] uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A36] inline-block"></span>
              SEC // 03 · PRODUCTION PIPELINES &amp; EXPERIENCE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-bold">
              WORK EXPERIENCE
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-code text-xs text-blue-200/80 tracking-widest uppercase flex items-center gap-2">
            <span>2 ACTIVE PRODUCTION TIERS</span>
            <span className="text-white/30">|</span>
            <span className="text-[#FF5A36]">FINANCE &amp; TELECOM</span>
          </div>
        </div>

        {/* Numbered Project Cards Grid (2 cards, styled like reference's 01, 02 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {WORK_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#142270] border-2 border-white/20 flex flex-col justify-between hover:border-white/50 transition-all duration-300 relative group"
            >
              {/* Card Top Banner: Eyebrow label, Number, Checkbox Icon */}
              <div className="p-6 border-b border-white/15 bg-[#121e63] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl sm:text-4xl text-white font-bold leading-none">
                    {card.number}
                  </span>
                  <div className="h-6 w-px bg-white/20" />
                  <span className="text-xs font-code tracking-widest text-[#FF5A36] uppercase font-bold">
                    {card.eyebrow}
                  </span>
                </div>

                {/* Small Checkbox / Square Icon top-right (reference feature) */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-code text-blue-200/60 uppercase hidden sm:inline">
                    VERIFIED PRODUCTION
                  </span>
                  <div className="w-7 h-7 border border-white/30 rounded-sm bg-[#182882] flex items-center justify-center text-[#FF5A36]">
                    <CheckSquare className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Diagonal Hatch Image Placeholder (reusable technical blueprint placeholder) */}
              <div className="relative h-48 sm:h-56 blueprint-hatch border-b border-white/15 p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-start z-10">
                  <div className="bg-[#182882]/95 border border-white/30 px-3 py-1 font-code text-xs text-white uppercase tracking-wider shadow">
                    FIG.{card.number} // PIPELINE TOPOLOGY
                  </div>
                  <div className="text-[10px] font-code text-white/70 bg-[#121e63]/90 px-2 py-0.5 border border-white/20">
                    SLA: REAL-TIME
                  </div>
                </div>

                {/* Technical schematic box inside the hatch */}
                <div className="my-auto z-10 bg-[#182882]/90 border border-white/25 p-3 sm:p-4 max-w-sm">
                  <div className="text-[10px] font-code text-[#FF5A36] font-bold uppercase mb-1">
                    {card.id === 'niveus' ? 'GCP DATA RECONCILIATION FLOW' : 'AWS S3 → SNOWPIPE CDC SYNC'}
                  </div>
                  <div className="text-xs font-code text-white">
                    {card.id === 'niveus' 
                      ? 'Data Fusion Ingest ➔ Cloud Composer ➔ BigQuery Warehousing'
                      : 'Amazon RDS ➔ Streams CDC ➔ S3 ➔ Snowpipe ➔ Snowflake'}
                  </div>
                </div>

                {/* Bottom tag row on the image */}
                <div className="z-10 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-0.5 bg-[#FF5A36] text-white font-code text-[10px] font-bold tracking-wider uppercase rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body: Title, Role, Description, Highlighted Metrics */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                    <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-tight">
                      {card.company}
                    </h3>
                    <span className="font-grotesk text-sm font-semibold text-blue-200">
                      {card.role}
                    </span>
                  </div>

                  {/* Bullet points with orange-highlighted metrics */}
                  <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed font-normal">
                    {card.id === 'niveus' ? (
                      <>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Built robust ETL and ELT pipelines using Google Cloud Data Fusion and Cloud Composer (Airflow) to streamline financial data workflows.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Optimized complex Stored Procedures using CTEs and temporary tables, cutting query execution time from <strong className="text-[#FF5A36] font-bold underline decoration-white/30 decoration-2">2+ hours to 20 minutes</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Engineered optimizations for long-running Data Fusion pipelines, drastically reducing ingestion times.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Leveraged BigQuery for high-performance warehousing/analytics across enterprise finance assets.</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Architected automated ETL/ELT pipelines using Airflow and Snowpipe (S3 → Snowflake), reducing manual intervention by <strong className="text-[#FF5A36] font-bold underline decoration-white/30 decoration-2">90%</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Engineered real-time analytics integration between Amazon RDS and Snowflake, achieving a <strong className="text-[#FF5A36] font-bold underline decoration-white/30 decoration-2">50% reduction</strong> in latency.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Optimized Snowflake performance by <strong className="text-[#FF5A36] font-bold underline decoration-white/30 decoration-2">30%</strong> using Materialized Views, Streams, and CDC for SCD Type 1 logic.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Built data integrity frameworks using incremental delete/insert logic and custom flattening functions for nested JSON/variant data.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Established monitoring via AWS CloudWatch, SQS, and SNS, maintaining <strong className="text-[#FF5A36] font-bold underline decoration-white/30 decoration-2">99.9% pipeline uptime</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#FF5A36] font-bold mt-1 text-xs">▸</span>
                          <span>Enhanced data resilience using Snowflake Time Travel, UnDrop, and Informatica for cross-system integration.</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Metrics Highlight Pills / Boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {card.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#182882] border border-white/15 p-2.5 text-center">
                      <div className="font-display text-xl sm:text-2xl text-[#FF5A36] font-bold">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-code text-blue-200/80 uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pill-shaped Coral CTA Button (matching reference) */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCard(card)}
                    className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 bg-[#FF5A36] hover:bg-[#ff6f4e] text-white px-7 py-3 rounded-full font-grotesk font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-[0_4px_20px_rgba(255,90,54,0.4)] group-hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>VIEW DETAILS</span>
                    <span className="w-7 h-7 rounded-full bg-white text-[#FF5A36] flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-sm">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
