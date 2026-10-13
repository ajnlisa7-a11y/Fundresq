'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { IncidentSelector } from '@/components/sections/IncidentSelector';
import { TransactionGraph } from '@/components/sections/TransactionGraph';
import { Capabilities } from '@/components/sections/Capabilities';
import { Methodology } from '@/components/sections/Methodology';
import { ReportDeliverables } from '@/components/sections/ReportDeliverables';
import { ScenariosSection } from '@/components/sections/ScenariosSection';
import { WhyFundresq } from '@/components/sections/WhyFundresq';
import { IntelligenceBlog } from '@/components/sections/IntelligenceBlog';
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
      {/* 1. Navigation */}
      <Navbar onOpenIntake={() => handleOpenIntake()} />

      {/* 1. Hero */}
      <Hero onOpenIntake={() => handleOpenIntake()} />

      {/* 2. Trust / credibility */}
      <TrustBar />

      {/* 3. What happened? */}
      <IncidentSelector onSelectCase={(id) => handleOpenIntake(id)} />

      {/* 4. Simple transaction-tracing visual */}
      <TransactionGraph />

      {/* 5. What we investigate */}
      <Capabilities onOpenIntake={(id) => handleOpenIntake(id)} />

      {/* 6. How it works */}
      <Methodology onOpenIntake={() => handleOpenIntake()} />

      {/* 7. What you receive */}
      <ReportDeliverables onOpenIntake={() => handleOpenIntake()} />

      {/* 8. Example cases */}
      <ScenariosSection onOpenIntake={() => handleOpenIntake()} />

      {/* 9. Why Fundresq */}
      <WhyFundresq onOpenIntake={() => handleOpenIntake()} />

      {/* 10. Fundresq Intelligence */}
      <IntelligenceBlog />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final CTA */}
      <ConsultationCTA onOpenIntake={() => handleOpenIntake()} />

      {/* 13. Footer */}
      <Footer onOpenIntake={() => handleOpenIntake()} />

      {/* Guided 4-Step Case Intake Modal */}
      <CaseIntakeModal
        isOpen={isIntakeOpen}
        onClose={handleCloseIntake}
        preselectedIncident={selectedIncident}
      />
    </main>
  );
}
