'use client';

import { 
  FileSearch, 
  CheckCheck, 
  GitBranch, 
  Database, 
  FileText, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MethodologyProps {
  onOpenIntake: () => void;
}

export function Methodology({ onOpenIntake }: MethodologyProps) {
  const steps = [
    {
      num: '01',
      title: 'Tell us what happened',
      tagline: 'Initial contact',
      description: 'Send us the information you have about the incident.',
      icon: FileSearch,
    },
    {
      num: '02',
      title: 'We review the details',
      tagline: 'Record inspection',
      description: 'We look at the wallet addresses, transactions and supporting information.',
      icon: CheckCheck,
    },
    {
      num: '03',
      title: 'We follow the transactions',
      tagline: 'Blockchain tracing',
      description: 'We investigate how relevant funds moved between wallets and supported networks.',
      icon: GitBranch,
    },
    {
      num: '04',
      title: 'We document what we find',
      tagline: 'Structured evidence',
      description: 'Important transactions and findings are organised into a clear timeline.',
      icon: Database,
    },
    {
      num: '05',
      title: 'You receive a report',
      tagline: 'Clear findings',
      description: 'We explain the findings in straightforward language and provide the relevant transaction information.',
      icon: FileText,
    },
    {
      num: '06',
      title: 'We explain the next steps',
      tagline: 'Informed decisions',
      description: "Based on what we find, we'll explain the options that may be available.",
      icon: Compass,
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-[#191D20] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E15D44]" />
            How It Works
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            What happens after you contact us?
          </h2>
          
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto">
            A clear, straightforward process from your first message to your completed report.
          </p>
        </div>

        {/* 6-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44]/50 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-headline font-black text-[#E15D44]/40 group-hover:text-[#E15D44] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#191D20] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#F2EFE9] mb-1.5">
                    {step.num}. {step.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-[#E15D44] mb-4 font-bold">
                    {step.tagline}
                  </div>

                  <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#252B2F] flex items-center justify-between text-[10px] font-mono uppercase text-[#9FA3A3]">
                  <span>Phase {step.num}</span>
                  <span className="text-[#61B58A] font-bold">Documented</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centrepiece Doctrine Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090B0C] border border-[#E15D44]/40 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(225, 93, 68,0.08)]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block">
              Core Evidentiary Principle
            </span>
            <h4 className="text-base md:text-lg font-bold text-[#F2EFE9]">
              Investigate first, promise nothing you cannot guarantee.
            </h4>
            <p className="text-xs text-[#9FA3A3] leading-relaxed max-w-xl">
              We never promise recovered funds or guaranteed freezes. We establish the verifiable facts and deliver the evidence required for appropriate next steps.
            </p>
          </div>
          
          <Button
            onClick={onOpenIntake}
            className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest px-6 h-11 shrink-0 shadow-lg shadow-[#E15D44]/20 transition-colors"
          >
            Tell Us What Happened
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
