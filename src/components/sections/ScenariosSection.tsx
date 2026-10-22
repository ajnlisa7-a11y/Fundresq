'use client';

import { TrendingDown, UserX, ShieldAlert, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSyncedAsset } from '@/lib/synced-assets';

interface ScenariosSectionProps {
  onOpenIntake: () => void;
}

export function ScenariosSection({ onOpenIntake }: ScenariosSectionProps) {
  const { url: teamPhotoUrl, onError: onTeamError } = useSyncedAsset(
    'team-reviewing-findings.jpg',
    '/images/team-reviewing-findings.jpg'
  );

  const cases = [
    {
      id: '01',
      badge: 'Investment Platform',
      title: 'Fake Crypto Investment Scheme',
      victimStory:
        'A victim deposited $48,000 into an online platform advertising automated high-yield returns. When they requested a withdrawal, the site demanded a 20% "tax fee" and locked their account.',
      howWeHelped:
        'We traced the initial deposit through three intermediate wallets, identifying the destination account holding the funds.',
      outcome:
        'Fundoraid identified the destination account, initiated direct recovery proceedings, and secured the recovery of the $48,000.',
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
        'Fundoraid mapped the scammer’s collection wallet, submitted verified asset recovery documentation, and initiated the recovery of the scam funds.',
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
        'Fundoraid tracked the bridge conversion into Bitcoin, identified the consolidation address, and executed recovery actions to reclaim the lost assets.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="scenarios" className="py-16 sm:py-28 md:py-36 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Case Examples
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Examples of cases we investigate & recover
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-2xl mx-auto leading-relaxed">
            Real situations showing how we follow digital assets and initiate recovery action.
          </p>
        </div>

        {/* Exactly 3 Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-14">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#111416] via-[#111416] to-[#0c0e10] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_45px_rgba(225,93,68,0.18)]"
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
                        Recovery Action:
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
                    Start Recovery Case
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

        {/* Professional Review Feature: Real Team & Legal Collaboration */}
        <div className="max-w-6xl mx-auto mb-16 rounded-3xl bg-gradient-to-b from-[#111416] via-[#111416] to-[#0c0e10] border border-[#252B2F] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] overflow-hidden">
              <img
                src={teamPhotoUrl || '/images/team-reviewing-findings.jpg'}
                alt="Legal counsel and forensic investigators reviewing case findings and ledger diagrams"
                className="w-full h-full object-cover object-center"
                onError={onTeamError}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#111416]/30 to-[#111416]" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191D20] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-[#61B58A]" />
                Direct Recovery Action
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-tight">
                Direct action to recover your scam funds.
              </h3>

              <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
                We don't just hand you a paper report and leave you on your own. Fundoraid actively traces your cryptocurrency, pinpoints the recipient accounts, and takes direct action to recover your scam funds.
              </p>

              <div className="pt-2">
                <Button
                  onClick={onOpenIntake}
                  className="w-full sm:w-auto h-12 px-7 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/20 rounded-lg transition-colors"
                >
                  Recover Your Scam Funds
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="text-center text-xs text-[#9FA3A3]/70 font-mono max-w-2xl mx-auto">
          Case examples are anonymised to protect client privacy. Past investigations do not guarantee future outcomes.
        </div>
      </div>
    </section>
  );
}
