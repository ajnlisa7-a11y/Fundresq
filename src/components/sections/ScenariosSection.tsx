'use client';

import { TrendingDown, UserX, ShieldAlert, ArrowRight } from 'lucide-react';

interface ScenariosSectionProps {
  onOpenIntake: () => void;
}

export function ScenariosSection({ onOpenIntake }: ScenariosSectionProps) {
  const cases = [
    {
      id: '01',
      badge: 'Investment Platform',
      title: 'Fake Crypto Investment Scheme',
      victimStory:
        'A victim deposited $48,000 into an online platform advertising automated high-yield returns. When they requested a withdrawal, the site demanded a 20% "tax fee" and locked their account.',
      howWeHelped:
        'We traced the initial deposit through three intermediate wallets, identifying the final transfer into an account on a major centralized exchange.',
      outcome:
        'Client received a verified evidence pack with exact exchange account records, enabling their solicitor to file an immediate freeze request with the exchange compliance department.',
      icon: TrendingDown,
    },
    {
      id: '02',
      badge: 'Social Engineering',
      title: 'Romance & Trust Scam',
      victimStory:
        'An individual was convinced by an acquaintance met on social media to transfer USDT into a deceptive liquidity-mining pool over a four-month period.',
      howWeHelped:
        'We mapped every individual transfer across the Tron network, aggregating all transactions into a single chronological timeline showing the scammer’s collection wallet.',
      outcome:
        'Delivered an investigative summary detailing the exact wallet cluster and total funds diverted, submitted directly to federal cybercrime reporting units.',
      icon: UserX,
    },
    {
      id: '03',
      badge: 'Unauthorized Transfer',
      title: 'Compromised Personal Wallet',
      victimStory:
        'A cryptocurrency holder connected their wallet to a fraudulent web application, resulting in all tokens being drained within minutes across multiple transactions.',
      howWeHelped:
        'We followed the stolen tokens through decentralized token swaps and cross-chain bridges, documenting the conversion trail back into Bitcoin.',
      outcome:
        'Provided a complete visual and tabular ledger exhibit tracking where the stolen funds were consolidated for law enforcement investigators.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="scenarios" className="py-24 md:py-32 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Case Examples
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Examples of cases we investigate
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-2xl mx-auto leading-relaxed">
            The examples below are anonymised and illustrative. Every case has a unique transaction trail.
          </p>
        </div>

        {/* Exactly 3 Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-14">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="p-8 md:p-9 rounded-2xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#E15D44] uppercase tracking-wider">
                        Case {c.id}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA3A3] bg-[#090B0C] px-3 py-1 rounded-full border border-[#252B2F]">
                      {c.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-headline font-bold text-[#F2EFE9] mb-4 group-hover:text-[#E15D44] transition-colors">
                    {c.title}
                  </h3>

                  {/* Body Content */}
                  <div className="space-y-4 text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#F2EFE9] font-bold block mb-1">
                        What Happened:
                      </span>
                      <p>{c.victimStory}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block mb-1">
                        What We Traced:
                      </span>
                      <p>{c.howWeHelped}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#61B58A] font-bold block mb-1">
                        The Deliverable:
                      </span>
                      <p>{c.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-6 mt-6 border-t border-[#252B2F] flex items-center justify-between">
                  <button
                    onClick={onOpenIntake}
                    className="text-xs font-mono font-bold text-[#E15D44] group-hover:text-[#F0836D] transition-colors flex items-center gap-1.5"
                  >
                    Have a similar case? Tell us what happened
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono text-[#9FA3A3]/50 uppercase tracking-widest">
                    Anonymised
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="text-center text-xs text-[#9FA3A3]/70 font-mono max-w-2xl mx-auto">
          Case examples are anonymised to protect client privacy. Past investigations do not guarantee future outcomes.
        </div>
      </div>
    </section>
  );
}
