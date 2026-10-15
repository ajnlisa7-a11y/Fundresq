'use client';

import { 
  TrendingDown, 
  UserX, 
  ShieldAlert, 
  KeyRound, 
  LockKeyhole, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react';

interface WhatNeedHelpWithProps {
  onSelectCase: (caseId: string) => void;
}

export function WhatNeedHelpWith({ onSelectCase }: WhatNeedHelpWithProps) {
  const scams = [
    {
      id: 'investment_scam',
      title: 'Investment Scam',
      badge: 'Trading Schemes',
      question: 'Did you send money to a fake investment or trading platform?',
      description: 'You were promised high returns, automated profits, or exclusive access, but the platform will not return your funds.',
      buttonText: 'Get Help',
      icon: TrendingDown,
    },
    {
      id: 'romance_scam',
      title: 'Romance Scam',
      badge: 'Social Engineering',
      question: 'Did someone you met online convince you to send cryptocurrency?',
      description: 'An online contact, romantic match, or acquaintance gained your trust and guided you to make transfers or deposits.',
      buttonText: 'Get Help',
      icon: UserX,
    },
    {
      id: 'theft',
      title: 'Stolen Crypto',
      badge: 'Unauthorized Transfers',
      question: 'Was cryptocurrency taken from your wallet or account?',
      description: 'Funds were transferred out of your private wallet, custodial account, or exchange balance without your permission.',
      buttonText: 'Get Help',
      icon: ShieldAlert,
    },
    {
      id: 'wallet_audit',
      title: 'Wallet Hack',
      badge: 'Key Compromise',
      question: "Are there transactions from your wallet that you didn't make?",
      description: 'A malicious link, compromised seed phrase, or malicious contract drained your wallet balance across multiple transfers.',
      buttonText: 'Get Help',
      icon: KeyRound,
    },
    {
      id: 'unresponsive',
      title: 'Fake Trading Platform',
      badge: 'Frozen Withdrawals',
      question: "Does a platform show money in your account but won't let you withdraw it?",
      description: 'The website displays an active balance or profit, but demands additional "tax fees", "commissions", or deposits before releasing it.',
      buttonText: 'Get Help',
      icon: LockKeyhole,
    },
    {
      id: 'commercial',
      title: 'Other Scam',
      badge: 'General Scam',
      question: 'Something else happened?',
      description: "Phishing emails, fake customer service imposters, fraudulent recovery agents, or business disputes.",
      buttonText: 'Tell Us What Happened',
      icon: HelpCircle,
    },
  ];

  return (
    <section id="what-happened" className="py-24 md:py-32 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header: Focused strictly on the Customer's Situation */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            What Happened To You?
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Choose what happened.
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto">
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
                onClick={() => onSelectCase(scam.id)}
                className="p-8 md:p-9 rounded-2xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 hover:shadow-[0_0_35px_rgba(225,93,68,0.18)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] group-hover:border-[#E15D44] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#9FA3A3] bg-[#090B0C] px-3 py-1 rounded-full border border-[#252B2F]">
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
                  <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
                    {scam.description}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 mt-6 border-t border-[#252B2F]/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E15D44] group-hover:text-[#F0836D] transition-colors flex items-center gap-1.5">
                    {scam.buttonText}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] font-mono text-[#9FA3A3]/60 uppercase tracking-widest">
                    Confidential
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance banner underneath */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-xl bg-[#111416]/80 border border-[#252B2F] text-center text-xs font-mono text-[#9FA3A3] flex items-center justify-center gap-2">
          <span>🔒</span> All case inquiries are handled under strict confidentiality. We do not make false recovery promises.
        </div>
      </div>
    </section>
  );
}
