'use client';

import { FileSearch, CheckCheck, GitFork, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HowItWorksProps {
  onOpenIntake: () => void;
}

export function HowItWorks({ onOpenIntake }: HowItWorksProps) {
  const steps = [
    {
      num: '1',
      title: 'Tell us what happened',
      description: 'Send us the wallet addresses, transaction details and information you have.',
      icon: FileSearch,
    },
    {
      num: '2',
      title: 'We review your case',
      description: 'We look at the information and determine what can be investigated.',
      icon: CheckCheck,
    },
    {
      num: '3',
      title: 'We trace the transactions',
      description: 'If we take the case, we investigate how the relevant cryptocurrency moved.',
      icon: GitFork,
    },
    {
      num: '4',
      title: 'You get the findings',
      description: 'We explain what we found and provide a clear investigation report.',
      icon: FileText,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            The Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            What happens after you contact us?
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto leading-relaxed">
            We've made the process simple.
          </p>
        </div>

        {/* 4 Simple Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-2xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-[#E15D44] bg-[#090B0C] px-3.5 py-1 rounded-full border border-[#252B2F]">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-headline font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
                    {step.title}
                  </h3>

                  {/* Plain English Description */}
                  <p className="text-sm text-[#9FA3A3] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <Button
            onClick={onOpenIntake}
            className="h-13 px-9 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/20 rounded-lg group transition-colors"
          >
            Tell Us What Happened
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
