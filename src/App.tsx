/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { SkillsSection } from './components/SkillsSection';
import { UiUxSpotlight } from './components/UiUxSpotlight';
import { CertificationsCarousel } from './components/CertificationsCarousel';
import { FindMeSection } from './components/FindMeSection';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';
import { WorkCard } from './data/portfolioData';

export default function App() {
  const [selectedWorkCard, setSelectedWorkCard] = useState<WorkCard | null>(null);
  const [isUiUxModalOpen, setIsUiUxModalOpen] = useState(false);

  const handleLearnMoreClick = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#182882] text-white flex flex-col selection:bg-[#FF5A36] selection:text-white">
      {/* Blueprint Structural Outer Frame Layout */}
      <Navbar onContactClick={handleContactClick} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onLearnMoreClick={handleLearnMoreClick} />

        {/* About Section */}
        <About />

        {/* Work / Experience (Numbered Cards 01 & 02) */}
        <WorkExperience 
          onSelectCard={(card) => setSelectedWorkCard(card)} 
        />

        {/* Skills Section (Tabbed Category List with Highlighted Active Row) */}
        <SkillsSection />

        {/* Feature Band: Centre of Excellence — UI/UX */}
        <UiUxSpotlight 
          onViewCase={() => setIsUiUxModalOpen(true)} 
        />

        {/* Education & Certifications Carousel */}
        <CertificationsCarousel />

        {/* "Find Me Here" Band (Square Social Icon Tiles) */}
        <FindMeSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail / Case Study Modals */}
      <DetailModal
        isOpen={Boolean(selectedWorkCard)}
        onClose={() => setSelectedWorkCard(null)}
        workCard={selectedWorkCard}
      />

      <DetailModal
        isOpen={isUiUxModalOpen}
        onClose={() => setIsUiUxModalOpen(false)}
        isUiUxModal={true}
      />
    </div>
  );
}
