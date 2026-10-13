'use client';

import { Shield, ArrowRight, CheckCircle2, FileSearch, Building2, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScenariosSection({ onOpenIntake }: { onOpenIntake: () => void }) {
  const scenarios = [
    {
      id: '01',
      caseType: 'Suspected investment scam',
      incident: 'A client sent cryptocurrency to what appeared to be an investment platform.',
      investigation: 'We reviewed the original transactions and followed relevant movements from the receiving wallets.',
      deliverable: 'A clear report showing the transaction trail and our findings.',
      tag: 'Platform Fraud',
      icon: TrendingDownIcon,
    },
    {
      id: '02',
      caseType: 'Drained personal wallet',
      incident: 'A client noticed unauthorized transactions leaving their wallet after interacting with a deceptive link.',
      investigation: 'We traced the movement of the stolen tokens across multiple wallet hops and token swaps.',
      deliverable: 'A chronological transaction timeline identifying the exchange where funds were deposited.',
      tag: 'Wallet Compromise',
      icon: Shuffle,
    },
    {
      id: '03',
      caseType: 'Business or partnership dispute',
      incident: 'A business experienced an unapproved transfer of cryptocurrency reserves between partners.',
      investigation: "We examined the company's historical wallet activity and separated business expenses from personal transfers.",
      deliverable: 'An objective written report and ledger exhibit suitable for legal advisers and dispute resolution.',
      tag: 'Commercial Dispute',
      icon: Building2,
    },
  ];

  return (
    <section id="scenarios" className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Case Examples
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Examples of cases we investigate
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto">
            The examples below are anonymised or illustrative and do not promise a particular outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {scenarios.map((sc) => {
            const Icon = sc.icon;
            return (
              <div
                key={sc.id}
                className="p-8 rounded-xl bg-[#111416] border border-[#252B2F] flex flex-col justify-between hover:border-[#E15D44]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold">
                      CASE TYPE
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#9FA3A3] bg-[#191D20] px-2.5 py-1 rounded border border-[#252B2F]">
                      {sc.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F2EFE9] mb-5 group-hover:text-[#E15D44] transition-colors">
                    {sc.caseType}
                  </h3>

                  <div className="space-y-4 text-xs text-[#9FA3A3]">
                    <div>
                      <strong className="text-[#F2EFE9] block font-mono uppercase text-[10px] mb-1">
                        What happened
                      </strong>
                      <p className="leading-relaxed">{sc.incident}</p>
                    </div>

                    <div>
                      <strong className="text-[#E15D44] block font-mono uppercase text-[10px] mb-1">
                        What we investigated
                      </strong>
                      <p className="leading-relaxed">{sc.investigation}</p>
                    </div>

                    <div>
                      <strong className="text-[#61B58A] block font-mono uppercase text-[10px] mb-1">
                        What we provided
                      </strong>
                      <p className="leading-relaxed">{sc.deliverable}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#252B2F]">
                  <button
                    onClick={onOpenIntake}
                    className="text-xs font-mono font-bold text-[#E15D44] hover:text-[#F0836D] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    See how the investigation works →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center text-xs text-[#9FA3A3]/70 italic max-w-2xl mx-auto">
          The examples above are anonymised or illustrative and do not promise a particular outcome.
        </div>
      </div>
    </section>
  );
}

function TrendingDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
