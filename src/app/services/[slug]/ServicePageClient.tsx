'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Lock, 
  ShieldCheck, 
  Layers, 
  FileCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CaseIntakeModal } from '@/components/sections/CaseIntakeModal';
import { ServiceDetails } from '@/data/services';

interface ServicePageClientProps {
  service: ServiceDetails;
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <Link href="/services" className="hover:text-[#F2EFE9] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#252B2F]" />
            <span className="text-[#E15D44] font-bold">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(225,93,68,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] md:text-[11px] font-mono font-bold tracking-[0.25em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E15D44]" />
            Service {service.number} • {service.title}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-tight mb-6 text-balance">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#9FA3A3] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            {service.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleOpenIntake}
              className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold uppercase tracking-widest shadow-2xl shadow-[#E15D44]/25 rounded-lg group transition-colors"
            >
              Tell Us What Happened
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Link href="#capabilities" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm border-[#252B2F] bg-[#111416] hover:bg-[#191D20] text-[#F2EFE9] font-bold uppercase tracking-wider rounded-lg"
              >
                See How We Can Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Overview & Problem Solved */}
      <section className="py-20 md:py-28 bg-[#111416] border-b border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E15D44] block">
                The Objective
              </span>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#F2EFE9]">
                Why this service matters
              </h2>
              <div className="p-5 rounded-xl bg-[#090B0C] border border-[#252B2F] text-xs md:text-sm text-[#F2EFE9]/90 leading-relaxed font-mono">
                <span className="text-[#E15D44] block font-bold mb-1">Problem Solved:</span>
                {service.problemSolved}
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-sm md:text-base text-[#9FA3A3] leading-relaxed">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#9FA3A3] block">
                Service Overview
              </span>
              <p>{service.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section id="capabilities" className="py-20 md:py-28 bg-[#090B0C] border-b border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
              What we do in {service.title.toLowerCase()}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44] transition-all group shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] mb-5 group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-headline font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#111416] border border-[#252B2F]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block mb-6">
              The 4-Step Process
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step) => (
                <div key={step.number} className="space-y-2">
                  <span className="text-xl font-mono font-bold text-[#E15D44]">
                    0{step.number}
                  </span>
                  <h4 className="text-sm font-bold text-[#F2EFE9]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#9FA3A3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deliverables & Supported Networks */}
      <section className="py-20 md:py-28 bg-[#111416] border-b border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Deliverables */}
            <div className="p-8 rounded-2xl bg-[#090B0C] border border-[#252B2F] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E15D44] font-bold">
                <FileCheck className="w-4 h-4" />
                What You Receive
              </div>
              <ul className="space-y-3 pt-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#F2EFE9]/90 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#61B58A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Uses This & Supported Networks */}
            <div className="p-8 rounded-2xl bg-[#090B0C] border border-[#252B2F] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E15D44] font-bold">
                <Layers className="w-4 h-4" />
                Who Uses This Service
              </div>
              <ul className="space-y-3 pt-2">
                {service.whoThisIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#9FA3A3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E15D44] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#252B2F]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA3A3] block mb-2">
                  Supported Blockchains
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.supportedNetworks.map((net, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#111416] border border-[#252B2F] text-[#F2EFE9]/80">
                      {net}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 md:py-28 bg-[#090B0C] border-b border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-headline font-bold text-[#F2EFE9] mb-3">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl bg-[#111416] border border-[#252B2F] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#191D20] transition-colors"
                  >
                    <span className="text-sm font-bold text-[#F2EFE9]">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#E15D44] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-b from-[#090B0C] to-[#111416] border border-[#E15D44]/40 p-8 md:p-14 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-[#F2EFE9] mb-4">
              Need {service.title.toLowerCase()}?
            </h2>
            <p className="text-sm md:text-base text-[#9FA3A3] max-w-xl mx-auto leading-relaxed mb-8">
              Start with a free, confidential review of your case. We will verify your transaction details and explain what can be identified.
            </p>
            <Button
              onClick={handleOpenIntake}
              className="h-13 px-9 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/25 rounded-lg group transition-colors"
            >
              Tell Us What Happened
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#9FA3A3] mt-6">
              <Lock className="w-3.5 h-3.5 text-[#E15D44]" /> Strictly confidential & secure
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenIntake={handleOpenIntake} />

      <CaseIntakeModal
        isOpen={isIntakeOpen}
        onClose={handleCloseIntake}
      />
    </main>
  );
}
