import React, { useState } from 'react';
import { 
  Terminal, 
  Database, 
  Cloud, 
  Wrench, 
  ChevronRight, 
  Check, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { 
  SKILL_CATEGORIES, 
  SKILLS_DATA, 
  SkillCategory, 
  SkillItem 
} from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('PROGRAMMING LANGUAGES');
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number>(0);

  const filteredSkills = SKILLS_DATA.filter((s) => s.category === activeTab);

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'PROGRAMMING LANGUAGES':
        return <Terminal className="w-4 h-4 text-[#FF5A36]" />;
      case 'DATABASES & WAREHOUSE':
        return <Database className="w-4 h-4 text-[#FF5A36]" />;
      case 'CLOUD & PIPELINE':
        return <Cloud className="w-4 h-4 text-[#FF5A36]" />;
      case 'TOOLS':
        return <Wrench className="w-4 h-4 text-[#FF5A36]" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="relative w-full border-b border-white/20 bg-[#142270] blueprint-grid-dense py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-6 mb-12">
          <div>
            <div className="text-xs font-code tracking-[0.3em] text-[#FF5A36] uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF5A36] inline-block"></span>
              SEC // 04 · TECHNICAL REPERTOIRE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight font-bold">
              SKILLS &amp; CAPABILITIES
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-code text-xs text-blue-200/80 tracking-widest uppercase">
            MATRIX: PROGRAMMING LANGUAGES · DATABASES · CLOUD · TOOLS
          </div>
        </div>

        {/* Tab Navigation (styled like the reference's bold tab bar) */}
        <div className="flex flex-wrap border-2 border-white/20 bg-[#121e63] mb-8 overflow-hidden shadow-md">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveTab(cat);
                  setSelectedSkillIndex(0);
                }}
                className={`flex-1 min-w-[200px] sm:min-w-0 py-4 px-5 text-center font-grotesk font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 border-r border-b sm:border-b-0 border-white/15 last:border-r-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] ${
                  isActive 
                    ? 'bg-[#FF5A36] text-white shadow-inner' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>{cat}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tabbed Content List (styled like reference: icon badge, thumbnail hatch placeholder, title, label chips, chevron) */}
        <div className="border-2 border-white/20 bg-[#182882] divide-y divide-white/15 shadow-xl">
          {filteredSkills.map((skill, index) => {
            const isSelected = selectedSkillIndex === index;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkillIndex(index)}
                className={`group cursor-pointer transition-colors duration-150 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isSelected 
                    ? 'bg-[#2a43cf] text-white' 
                    : 'hover:bg-white/5 text-blue-100'
                }`}
              >
                {/* Left Side: Icon box, diagonal hatch thumbnail placeholder, and Title */}
                <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                  {/* Category Icon Badge */}
                  <div className={`w-9 h-9 flex-shrink-0 flex items-center justify-center border transition-colors ${
                    isSelected 
                      ? 'bg-white text-[#2a43cf] border-white' 
                      : 'bg-[#121e63] text-[#FF5A36] border-white/20'
                  }`}>
                    {getCategoryIcon(skill.category)}
                  </div>

                  {/* Thumbnail Diagonal Hatch Box Placeholder (like reference) */}
                  <div className="w-12 h-10 flex-shrink-0 blueprint-hatch border border-white/25 hidden sm:block relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center font-code text-[9px] text-white/70 font-bold">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                  </div>

                  {/* Skill Name & Sub-description */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-grotesk font-bold text-base sm:text-lg text-white tracking-wide truncate">
                        {skill.name}
                      </h3>
                      <span className={`text-[10px] font-code px-2 py-0.5 uppercase tracking-wider hidden md:inline-block ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-black/30 text-blue-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className={`text-xs truncate max-w-xl mt-0.5 ${
                      isSelected ? 'text-blue-100 font-medium' : 'text-blue-200/70'
                    }`}>
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: 1-2 Label Chips and Chevron */}
                <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 flex-shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-code px-2.5 py-1 tracking-wider uppercase transition-colors ${
                          isSelected
                            ? 'bg-white text-[#182882] font-bold shadow-sm'
                            : 'bg-[#142270] text-blue-100 border border-white/15'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Chevron Arrow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'bg-[#FF5A36] text-white rotate-90 scale-105' 
                      : 'text-white/60 group-hover:text-white group-hover:translate-x-1'
                  }`}>
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Blueprint Deep Dive Card */}
        {filteredSkills[selectedSkillIndex] && (
          <div className="mt-6 border-2 border-white/25 bg-[#121e63] p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-code text-xs text-[#FF5A36] uppercase font-bold tracking-widest">
                <span>ACTIVE SPECIFICATION</span>
                <span>//</span>
                <span>{filteredSkills[selectedSkillIndex].name}</span>
              </div>
              <p className="text-white text-sm sm:text-base font-normal max-w-3xl">
                {filteredSkills[selectedSkillIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {filteredSkills[selectedSkillIndex].tags.map((t) => (
                  <span key={t} className="text-[10px] font-code bg-black/40 text-blue-200 px-2 py-0.5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 self-end md:self-center">
              <span className="font-code text-xs text-blue-200/70 uppercase">PROFICIENCY:</span>
              <span className="px-3.5 py-1.5 bg-[#FF5A36] text-white font-code text-xs font-bold uppercase tracking-wider shadow">
                {filteredSkills[selectedSkillIndex].level}
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
