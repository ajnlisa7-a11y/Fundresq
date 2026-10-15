'use client';

import { ShieldCheck, Target, Eye, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhyFundresq({ onOpenIntake }: { onOpenIntake: () => void }) {
  const principles = [
    {
      title: 'We start with evidence',
      description: 'Conclusions follow verified on-chain records, not assumptions about where funds went.',
      icon: Target,
    },
    {
      title: 'We follow a clear process',
      description: 'Every transaction, split, and transfer is tracked systematically from start to finish.',
      icon: ShieldCheck,
    },
    {
      title: 'We explain things simply',
      description: 'Technical blockchain data is translated into plain-language summaries anyone can read.',
      icon: Eye,
    },
    {
      title: 'We protect your information',
      description: 'Your case details, wallet addresses, and communications remain strictly confidential.',
      icon: Lock,
    },
  ];

  return (
    <section id="why-fundresq" className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Our Standard
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Crypto can move quickly. <br />
            <span className="text-[#E15D44] italic">We follow the trail.</span>
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto">
            No guesswork and no false promises. We reconstruct the transaction trail so you have the verifiable facts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#191D20] flex items-center justify-center text-[#E15D44] mb-5 group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F2EFE9] mb-2 group-hover:text-[#E15D44] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#9FA3A3] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={onOpenIntake}
            className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest px-8 h-12 shadow-xl shadow-[#E15D44]/20 rounded-lg transition-colors"
          >
            Tell Us What Happened
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
