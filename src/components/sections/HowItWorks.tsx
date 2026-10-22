'use client';

import { FileSearch, CheckCheck, GitFork, ShieldCheck, ArrowRight } from 'lucide-react';
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
      description: 'If we take your case, we investigate how your cryptocurrency moved to locate your stolen funds.',
      icon: GitFork,
    },
    {
      num: '4',
      title: 'Recover your funds',
      description: 'We track down the recipient wallets and take direct action to recover your scam funds.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-28 md:py-36 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,93,68,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            The Recovery Process
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            What happens after you contact us?
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto leading-relaxed">
            We've made the process of recovering your scam funds simple.
          </p>
        </div>

        {/* 4 Simple Steps Grid with subtle connected progress line */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-0.5 bg-[#252B2F] z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-[#E15D44]/40 to-transparent w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 sm:p-8 md:p-9 rounded-2xl bg-gradient-to-b from-[#111416] via-[#111416] to-[#0c0e10] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_45px_rgba(225,93,68,0.18)]"
                >
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-7">
                      <span className="text-xl font-mono font-bold text-[#E15D44] bg-[#090B0C] px-3.5 py-1 rounded-full border border-[#252B2F] shadow-sm">
                        0{step.num}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] group-hover:border-[#E15D44] transition-all duration-300 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-headline font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
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
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <Button
            onClick={onOpenIntake}
            className="w-full sm:w-auto h-13 px-9 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/20 rounded-lg group transition-colors"
          >
            Recover Your Scam Funds
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
