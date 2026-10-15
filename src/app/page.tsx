'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { WhatNeedHelpWith } from '@/components/sections/WhatNeedHelpWith';
import { HowWeHelp } from '@/components/sections/HowWeHelp';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ScenariosSection } from '@/components/sections/ScenariosSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
import { Footer } from '@/components/layout/Footer';
import { CaseIntakeModal } from '@/components/sections/CaseIntakeModal';

export default function Home() {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<string | undefined>(undefined);

  const handleOpenIntake = (incidentId?: string) => {
    setSelectedIncident(incidentId);
    setIsIntakeOpen(true);
  };

  const handleCloseIntake = () => {
    setIsIntakeOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#090B0C] text-[#F2EFE9] selection:bg-[#E15D44] selection:text-[#F2EFE9]">
      {/* Navigation */}
      <Navbar onOpenIntake={() => handleOpenIntake()} />

      {/* 1. HERO: Tell me exactly what you do */}
      <Hero onOpenIntake={() => handleOpenIntake()} />

      {/* 2. WHAT HAPPENED?: 6 large cards for primary scam types */}
      <WhatNeedHelpWith onSelectCase={(id) => handleOpenIntake(id)} />

      {/* 3. HOW FUNDRESQ CAN HELP: Exactly 3 core services */}
      <HowWeHelp onOpenIntake={() => handleOpenIntake()} />

      {/* 4. WHAT HAPPENS AFTER YOU CONTACT US?: Simplified 4-step process */}
      <HowItWorks onOpenIntake={() => handleOpenIntake()} />

      {/* 5. EXAMPLES OF CASES WE INVESTIGATE: 3 focused, relatable case studies */}
      <ScenariosSection onOpenIntake={() => handleOpenIntake()} />

      {/* 6. ANSWERING YOUR QUESTIONS: 5 essential FAQs */}
      <FAQSection />

      {/* 7. NOT SURE WHERE YOUR CRYPTO WENT?: Final CTA banner */}
      <ConsultationCTA onOpenIntake={() => handleOpenIntake()} />

      {/* FOOTER */}
      <Footer onOpenIntake={() => handleOpenIntake()} />

      {/* Guided Case Intake Modal */}
      <CaseIntakeModal
        isOpen={isIntakeOpen}
        onClose={handleCloseIntake}
        preselectedIncident={selectedIncident}
      />
    </main>
  );
}
