import React, { useEffect } from 'react';
import { X, CheckCircle, Database, Cpu, Layers, ExternalLink, ArrowRight } from 'lucide-react';
import { WorkCard, UI_UX_SPOTLIGHT } from '../data/portfolioData';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  workCard?: WorkCard | null;
  isUiUxModal?: boolean;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  workCard,
  isUiUxModal = false
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a113d]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#142270] border-4 border-white shadow-2xl p-6 sm:p-8 blueprint-grid-dense text-white my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Technical Header */}
        <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-[#FF5A36] text-white flex items-center justify-center font-display text-lg font-bold">
              {isUiUxModal ? 'COE' : workCard?.number || 'DW'}
            </span>
            <div>
              <div className="text-[10px] font-code text-[#FF5A36] font-bold tracking-widest uppercase">
                {isUiUxModal ? 'SPECIAL CASE STUDY' : 'TECHNICAL DEEP DIVE SPECIFICATION'}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight">
                {isUiUxModal ? UI_UX_SPOTLIGHT.title : workCard?.company}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 border border-white/30 bg-[#182882] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Content */}
        {isUiUxModal ? (
          <div className="space-y-6">
            <div className="p-4 bg-[#182882] border border-white/20">
              <span className="text-xs font-code text-blue-200/80 uppercase block mb-1">
                EXECUTIVE SUMMARY
              </span>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                As part of the Centre of Excellence UI/UX initiative, I partnered with cross-functional product and engineering teams to transform complex, multi-layered data analytics into high-fidelity, intuitive interactive dashboards.
              </p>
            </div>

            <div>
              <h4 className="font-grotesk font-bold text-sm tracking-wider uppercase text-[#FF5A36] mb-3">
                KEY INITIATIVES &amp; METHODOLOGY
              </h4>
              <ul className="space-y-3 text-sm text-blue-100">
                {UI_UX_SPOTLIGHT.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF5A36] mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-grotesk font-bold text-sm tracking-wider uppercase text-[#FF5A36] mb-3">
                DESIGN ARTIFACTS &amp; TOOLING
              </h4>
              <div className="flex flex-wrap gap-2">
                {UI_UX_SPOTLIGHT.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-[#182882] border border-white/20 text-xs font-code text-white uppercase tracking-wider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 border border-white/20 bg-[#121e63] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-code text-blue-200/70 uppercase">DOCUMENTED IMPACT:</span>
                <div className="font-display text-2xl text-[#FF5A36] font-bold">25% CYCLE REDUCTION</div>
              </div>
              <div className="text-xs font-code text-white">
                AGILE SPRINT VELOCITY ENHANCED
              </div>
            </div>
          </div>
        ) : workCard ? (
          <div className="space-y-6">
            {/* Overview */}
            <div className="p-4 bg-[#182882] border border-white/20">
              <div className="flex justify-between items-center text-xs font-code text-blue-200/80 mb-1">
                <span>ROLE: {workCard.role.toUpperCase()}</span>
                <span className="text-[#FF5A36] font-bold">{workCard.period}</span>
              </div>
              <p className="text-sm sm:text-base text-white leading-relaxed">
                {workCard.detailedCase.overview}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="font-grotesk font-bold text-sm tracking-wider uppercase text-[#FF5A36] mb-3">
                PIPELINE ARCHITECTURE &amp; ORCHESTRATION
              </h4>
              <ul className="space-y-3 text-sm text-blue-100">
                {workCard.detailedCase.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#FF5A36] mt-0.5 flex-shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business & Technical Outcomes */}
            <div>
              <h4 className="font-grotesk font-bold text-sm tracking-wider uppercase text-[#FF5A36] mb-3">
                MEASURABLE OUTCOMES &amp; OPTIMIZATION
              </h4>
              <ul className="space-y-3 text-sm text-blue-100">
                {workCard.detailedCase.outcomes.map((out, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Chips */}
            <div>
              <h4 className="font-grotesk font-bold text-sm tracking-wider uppercase text-white mb-2">
                DEPLOYED INFRASTRUCTURE STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {workCard.detailedCase.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#182882] border border-white/20 text-xs font-code text-blue-100 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Modal Blueprint Footer */}
        <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between">
          <span className="font-code text-xs text-blue-200/60 uppercase">
            SPEC DOC // VERIFIED PORTFOLIO ENTRY
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-white text-[#182882] font-grotesk font-bold text-xs uppercase tracking-widest hover:bg-[#FF5A36] hover:text-white transition-colors"
          >
            CLOSE WINDOW
          </button>
        </div>
      </div>
    </div>
  );
};
