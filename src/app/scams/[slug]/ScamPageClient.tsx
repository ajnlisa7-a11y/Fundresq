'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  FileSearch, 
  ChevronDown, 
  Lock, 
  AlertTriangle,
  ChevronRight,
  TrendingDown,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CaseIntakeModal } from '@/components/sections/CaseIntakeModal';
import { ScamDetails } from '@/data/scams';
import { useSyncedAsset } from '@/lib/synced-assets';

interface ScamPageClientProps {
  scam: ScamDetails;
}

export function ScamPageClient({ scam }: ScamPageClientProps) {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { url: victimPhotoUrl, onError: onVictimError } = useSyncedAsset(
    'investment-scam-victim.jpg',
    '/images/investment-scam-victim.jpg'
  );

  const handleOpenIntake = () => {
    setIsIntakeOpen(true);
  };

  const handleCloseIntake = () => {
    setIsIntakeOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#090B0C] text-[#F2EFE9] selection:bg-[#E15D44] selection:text-[#F2EFE9]">
      <Navbar onOpenIntake={handleOpenIntake} />

      {/* Breadcrumbs */}
      <div className="pt-24 md:pt-28 bg-[#090B0C] border-b border-[#252B2F]/60">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9FA3A3]">
            <Link href="/" className="hover:text-[#F2EFE9] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#252B2F]" />
            <Link href="/scams" className="hover:text-[#F2EFE9] transition-colors">
              Scams
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#252B2F]" />
            <span className="text-[#E15D44] font-bold">{scam.title}</span>
          </nav>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
        {/* Subtle radial iris glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,93,68,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] md:text-[11px] font-mono font-bold tracking-[0.25em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E15D44] animate-pulse" />
              {scam.badge}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-tight mb-6 text-balance">
              {scam.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#9FA3A3] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
              {scam.heroSubtitle}
            </p>

            {/* Victim Search Phrase Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111416]/80 border border-[#252B2F] text-xs font-mono text-[#F2EFE9]/80 mb-8 max-w-xl text-center">
              <span className="text-[#E15D44] font-bold">Situation:</span> “{scam.victimSearchPhrase}”
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleOpenIntake}
                className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold uppercase tracking-widest shadow-2xl shadow-[#E15D44]/25 rounded-lg group transition-colors"
              >
                Start Recovery Case
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="#how-we-investigate" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm border-[#252B2F] bg-[#111416] hover:bg-[#191D20] text-[#F2EFE9] font-bold uppercase tracking-wider rounded-lg"
                >
                  See How We Can Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Happened & Warning Signs */}
      <section className="py-20 md:py-28 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              Recognizing The Pattern
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
              What happened in this scam?
            </h2>
            <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
              {scam.problemStatement}
            </p>
          </div>

          {/* Warning Signs Grid */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E15D44] font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#E15D44]" />
              Common Red Flags & Tactics Experienced By Victims
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {scam.warningSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#090B0C] border border-[#252B2F] flex items-start gap-3.5 text-xs md:text-sm text-[#F2EFE9]/90 leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#E15D44]/10 border border-[#E15D44]/30 flex items-center justify-center text-[#E15D44] font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{sign}</span>
                </div>
              ))}
            </div>

            {/* Photographic Moment: Real-World Situation */}
            <div className="rounded-2xl overflow-hidden border border-[#252B2F] bg-[#090B0C] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="md:col-span-7 relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={victimPhotoUrl || '/images/investment-scam-victim.jpg'}
                    alt="Individual reviewing frozen account withdrawal alerts on a deceptive trading platform"
                    className="w-full h-full object-cover object-center"
                    onError={onVictimError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#090B0C]/20 to-[#090B0C]" />
                </div>
                <div className="md:col-span-5 p-6 md:p-8 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block">
                    Real-World Situation
                  </span>
                  <h3 className="text-lg md:text-xl font-headline font-bold text-[#F2EFE9] leading-snug">
                    When withdrawals are blocked and demands for fees begin.
                  </h3>
                  <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
                    Victims typically realise something is wrong when a platform demands unexpected &ldquo;tax clearance fees&rdquo; or &ldquo;liquidity verification&rdquo; before allowing withdrawals. While the dashboard numbers are simulated, where your actual cryptocurrency moved is permanently recorded on the blockchain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Fundoraid Investigates This Scam */}
      <section id="how-we-investigate" className="py-20 md:py-28 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              Forensic Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
              How Fundoraid investigates {scam.title.toLowerCase()}
            </h2>
            <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
              We do not rely on guesses or assumptions. We reconstruct the movement of funds directly from the public blockchain ledger.
            </p>
          </div>

          {/* Investigation Steps */}
          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {scam.howWeInvestigate.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111416] border border-[#252B2F] flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] font-mono font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#F2EFE9] font-medium leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What We Trace Chips */}
          <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-2xl bg-[#111416] border border-[#252B2F]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block mb-4">
              On-Chain Footprint We Follow
            </span>
            <div className="space-y-3">
              {scam.whatWeTrace.map((footprint, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#9FA3A3] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#61B58A] shrink-0 mt-0.5" />
                  <span>{footprint}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Real Case Study */}
      <section className="py-20 md:py-28 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              Case Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
              Real anonymised case example
            </h2>
            <p className="text-sm md:text-base text-[#9FA3A3]">
              Past case results do not guarantee identical outcomes, but demonstrate our forensic evidence process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-[#090B0C] border border-[#252B2F] p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#252B2F]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block mb-1">
                  Case Review
                </span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-[#F2EFE9]">
                  {scam.caseStudy.title}
                </h3>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#111416] border border-[#252B2F] font-mono text-xs text-[#E15D44] font-bold">
                Funds Involved: {scam.caseStudy.lossAmount}
              </div>
            </div>

            <div className="space-y-6 text-xs md:text-sm leading-relaxed text-[#9FA3A3]">
              <div>
                <strong className="text-[#F2EFE9] font-mono uppercase text-[10px] tracking-wider block mb-1.5">
                  The Incident:
                </strong>
                <p>{scam.caseStudy.narrative}</p>
              </div>

              <div>
                <strong className="text-[#E15D44] font-mono uppercase text-[10px] tracking-wider block mb-1.5">
                  What Fundoraid Discovered:
                </strong>
                <p>{scam.caseStudy.findings}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#111416] border border-[#252B2F]">
                <strong className="text-[#61B58A] font-mono uppercase text-[10px] tracking-wider block mb-1.5">
                  The Outcome & Next Steps:
                </strong>
                <p className="text-[#F2EFE9]/90">{scam.caseStudy.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Specific FAQs */}
      <section className="py-20 md:py-28 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
              Questions about {scam.title.toLowerCase()}
            </h2>
            <p className="text-sm md:text-base text-[#9FA3A3]">
              Clear, transparent answers without false promises.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {scam.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#111416] border border-[#252B2F] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#191D20] transition-colors"
                  >
                    <span className="text-sm font-bold text-[#F2EFE9] pr-2">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#E15D44] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#9FA3A3] leading-relaxed border-t border-[#252B2F] bg-[#090B0C]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 md:py-28 bg-[#111416] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#090B0C] to-[#111416] border border-[#E15D44]/40 p-8 md:p-14 text-center shadow-2xl relative">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E15D44] block mb-3">
              Confidential Case Intake
            </span>
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-[#F2EFE9] mb-4">
              Lost money to {scam.title.toLowerCase()}?
            </h2>
            <p className="text-sm md:text-base text-[#9FA3A3] max-w-xl mx-auto leading-relaxed mb-8">
              Share your transaction hashes or wallet address. We will trace where the cryptocurrency went, pinpoint recipient exchange accounts, and initiate recovery action.
            </p>

            <Button
              onClick={handleOpenIntake}
              className="h-13 px-9 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/25 rounded-lg group transition-colors"
            >
              Start Recovery Process
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#9FA3A3] mt-6">
              <Lock className="w-3.5 h-3.5 text-[#E15D44]" /> Handled under strict confidentiality
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenIntake={handleOpenIntake} />

      {/* Case Intake Modal */}
      <CaseIntakeModal
        isOpen={isIntakeOpen}
        onClose={handleCloseIntake}
        preselectedIncident={scam.slug}
      />
    </main>
  );
}
