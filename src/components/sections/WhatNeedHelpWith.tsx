'use client';

import Link from 'next/link';
import { 
  TrendingDown, 
  UserX, 
  ShieldAlert, 
  KeyRound, 
  Coins, 
  Scale, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface WhatNeedHelpWithProps {
  onSelectCase: (caseId: string) => void;
}

export function WhatNeedHelpWith({ onSelectCase }: WhatNeedHelpWithProps) {
  const scams = [
    {
      id: 'investment_scam',
      pageSlug: 'investment-scams',
      title: 'Investment Scam',
      badge: 'Trading Schemes',
      question: 'Did you send money to a fake investment or trading platform?',
      description: 'You were promised high returns, automated profits, or exclusive access, but the platform will not return your funds.',
      buttonText: 'Recover Funds',
      icon: TrendingDown,
    },
    {
      id: 'romance_scam',
      pageSlug: 'romance-scams',
      title: 'Romance Scam',
      badge: 'Social Engineering',
      question: 'Did someone you met online convince you to send cryptocurrency?',
      description: 'An online contact, romantic match, or acquaintance gained your trust and guided you to make transfers or deposits.',
      buttonText: 'Recover Funds',
      icon: UserX,
    },
    {
      id: 'theft',
      pageSlug: 'stolen-crypto',
      title: 'Stolen Crypto',
      badge: 'Unauthorized Transfers',
      question: 'Was cryptocurrency taken from your wallet or account?',
      description: 'Funds were transferred out of your private wallet, custodial account, or exchange balance without your permission.',
      buttonText: 'Recover Funds',
      icon: ShieldAlert,
    },
    {
      id: 'wallet_audit',
      pageSlug: 'wallet-hacks',
      title: 'Wallet Hack',
      badge: 'Key Compromise',
      question: "Are there transactions from your wallet that you didn't make?",
      description: 'A malicious link, compromised seed phrase, or malicious contract drained your wallet balance across multiple transfers.',
      buttonText: 'Recover Funds',
      icon: KeyRound,
    },
    {
      id: 'loan_scam',
      pageSlug: 'crypto-scams',
      title: 'Loan Scam',
      badge: 'Advance Fee Fraud',
      question: 'Did you pay upfront fees or collateral for a loan you never received?',
      description: 'A fake lender or credit company demanded crypto deposits for insurance, collateral, or processing fees before disappearing.',
      buttonText: 'Recover Loan Funds',
      icon: Coins,
    },
    {
      id: 'asset_recovery',
      pageSlug: 'stolen-crypto',
      title: 'Asset Recovery',
      badge: 'Direct Recovery',
      question: 'Need to track and recover stolen or diverted cryptocurrency?',
      description: 'We map the full transaction path across blockchains and take direct action against recipient accounts to recover your scam funds.',
      buttonText: 'Start Asset Recovery',
      icon: Scale,
    },
  ];

  return (
    <section id="what-happened" className="py-16 sm:py-28 md:py-36 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      {/* Background Subtle Copper Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,93,68,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header: Focused strictly on the Customer's Situation */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            What Happened To You?
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Choose what happened.
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto leading-relaxed">
            Select the situation that best matches what you experienced.
          </p>
        </div>

        {/* 6 Large Scam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {scams.map((scam) => {
            const Icon = scam.icon;
            return (
              <div
                key={scam.id}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#111416] via-[#111416] to-[#0c0e10] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(225,93,68,0.18)] hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-12 h-12 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] group-hover:border-[#E15D44] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#9FA3A3] bg-[#090B0C] px-3.5 py-1.5 rounded-full border border-[#252B2F]">
                      {scam.badge}
                    </span>
                  </div>

                  {/* Scam Title */}
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
                    {scam.title}
                  </h3>

                  {/* Direct Question */}
                  <p className="text-sm text-[#F2EFE9] font-medium leading-relaxed mb-3">
                    {scam.question}
                  </p>

                  {/* Description of what happened */}
                  <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed mb-4">
                    {scam.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#252B2F]/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onSelectCase(scam.id)}
                      className="text-xs font-mono font-bold text-[#E15D44] hover:text-[#F0836D] transition-colors flex items-center gap-1.5"
                    >
                      {scam.buttonText}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Link
                      href={`/scams/${scam.pageSlug}`}
                      className="text-[11px] font-mono text-[#9FA3A3] hover:text-[#F2EFE9] transition-colors flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3 text-[#E15D44]" />
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance banner underneath */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-xl bg-[#111416]/80 border border-[#252B2F] text-center text-xs font-mono text-[#9FA3A3] flex items-center justify-center gap-2">
          <span>🔒</span> All case inquiries are handled under strict confidentiality. Fast, structured action to trace and recover lost assets.
        </div>
      </div>
    </section>
  );
}
