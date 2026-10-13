'use client';

import { Key, Shield, Search, FileCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InvestigationProcess({ onOpenIntake }: { onOpenIntake: () => void }) {
  const processSteps = [
    {
      step: 'Step 1',
      title: 'Tell Us What Happened',
      description: 'Share your wallet address, transaction IDs, and any messages from the suspected party. We review your case privately to confirm whether there is a traceable trail.',
      icon: Key,
    },
    {
      step: 'Step 2',
      title: 'We Follow the Money',
      description: 'We track every transaction, split, and transfer across blockchains. Even if funds were moved through multiple wallets or swapped between networks, the ledger records every step.',
      icon: Search,
    },
    {
      step: 'Step 3',
      title: 'Pinpoint Where Funds Landed',
      description: 'We check destination addresses against databases of known cryptocurrency exchanges and services to identify where the person deposited the funds.',
      icon: Shield,
    },
    {
      step: 'Step 4',
      title: 'Receive a Clear Written Report',
      description: 'You get an easy-to-read written report with dates, amounts, and destination accounts. You can hand this directly to police, a crypto exchange, or a solicitor.',
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-24 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            What happens after you reach out.
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
            Here is how we handle your inquiry from your first message to your final report: transparently, confidentially, and in plain language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {processSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#191D20] border border-[#252B2F] flex flex-col justify-between hover:border-[#E15D44]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#E15D44]">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#111416] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#F2EFE9] transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#F2EFE9] mb-2.5 group-hover:text-[#F0836D] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#9FA3A3] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#252B2F] text-[10px] font-mono uppercase text-[#61B58A]">
                  Phase Verified
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={onOpenIntake}
            className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest px-8 h-12 shadow-lg shadow-[#E15D44]/20 rounded-lg transition-colors"
          >
            Submit Your Transaction Details for Review
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
