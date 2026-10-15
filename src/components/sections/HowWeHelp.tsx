'use client';

import Link from 'next/link';
import { Search, Compass, FileText, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HowWeHelpProps {
  onOpenIntake: () => void;
}

export function HowWeHelp({ onOpenIntake }: HowWeHelpProps) {
  const services = [
    {
      id: 'trace',
      number: '01',
      title: 'Trace cryptocurrency',
      description: 'We follow relevant transactions to see how funds moved between wallets and supported networks.',
      icon: Search,
    },
    {
      id: 'investigate',
      number: '02',
      title: 'Investigate what happened',
      description: 'We examine wallet addresses, transactions and other information connected to your case.',
      icon: Compass,
    },
    {
      id: 'document',
      number: '03',
      title: 'Document the findings',
      description: 'You receive a clear report showing what we found and the transaction trail we identified.',
      icon: FileText,
    },
  ];

  return (
    <section id="how-we-help" className="py-24 md:py-32 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            How Fundresq can help
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto leading-relaxed">
            Simple, honest investigation services to establish the facts.
          </p>
        </div>

        {/* Exactly 3 Clean Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={onOpenIntake}
                className="p-8 md:p-9 rounded-2xl bg-[#090B0C] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#9FA3A3] bg-[#111416] px-3 py-1 rounded-full border border-[#252B2F]">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-[#F2EFE9] mb-4 group-hover:text-[#E15D44] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm text-[#9FA3A3] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Hint */}
                <div className="pt-6 border-t border-[#252B2F]/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E15D44] group-hover:text-[#F0836D] transition-colors flex items-center gap-1.5">
                    Start Case Review
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] font-mono text-[#9FA3A3]/50 uppercase tracking-widest">
                    Confidential
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Visual Explanation Block */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#090B0C] border border-[#252B2F] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            
            {/* Visual Diagram Column (Left) */}
            <div className="lg:col-span-6 bg-[#111416] rounded-2xl border border-[#252B2F] p-6 sm:p-8 flex flex-col items-center justify-center font-mono select-none">
              
              {/* Badge 1: You Sent Funds */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090B0C] border border-[#252B2F] text-[#F2EFE9] text-[11px] font-bold tracking-widest uppercase">
                YOU SENT FUNDS
              </div>

              {/* Arrow Down */}
              <div className="py-2 text-[#9FA3A3]">
                <ArrowDown className="w-4 h-4 text-[#9FA3A3]" />
              </div>

              {/* Node 1: Your Wallet */}
              <div className="w-full max-w-[260px] p-3 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-between shadow-md">
                <span className="text-xs font-bold text-[#F2EFE9] tracking-wider uppercase">
                  YOUR WALLET
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#61B58A] shadow-[0_0_10px_#61B58A]" />
              </div>

              {/* Vertical connector line */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#61B58A] to-[#E15D44]" />

              {/* Node 2: Scam Wallet */}
              <div className="w-full max-w-[260px] p-3 rounded-xl bg-[#191D20] border border-[#E15D44]/50 flex items-center justify-between shadow-md">
                <span className="text-xs font-bold text-[#E15D44] tracking-wider uppercase">
                  SCAM WALLET
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E15D44] animate-pulse shadow-[0_0_10px_#E15D44]" />
              </div>

              {/* Branch Container */}
              <div className="w-full max-w-[260px] relative py-2">
                {/* Vertical continuation to exchange */}
                <div className="w-0.5 h-16 bg-[#252B2F] mx-auto" />

                {/* Horizontal branch to intermediate wallet */}
                <div className="absolute top-5 left-1/2 w-28 sm:w-36 h-0.5 bg-[#252B2F]">
                  <div className="absolute right-0 -top-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#191D20] border border-[#252B2F] text-[10px] text-[#9FA3A3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9FA3A3]" />
                    <span>WALLET</span>
                  </div>
                </div>
              </div>

              {/* Node 3: Exchange Deposit */}
              <div className="w-full max-w-[260px] p-3 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-between shadow-md">
                <span className="text-xs font-bold text-[#F2EFE9] tracking-wider uppercase">
                  EXCHANGE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E15D44] shadow-[0_0_10px_#E15D44]" />
              </div>

              {/* Arrow Down */}
              <div className="py-2 text-[#E15D44]">
                <ArrowDown className="w-4 h-4 text-[#E15D44]" />
              </div>

              {/* Bottom Badge: Fundresq Follows The Transaction Trail */}
              <div className="text-center px-4 py-2 rounded-xl bg-[#E15D44]/10 border border-[#E15D44]/40 text-[#E15D44] text-[11px] font-bold tracking-wider uppercase">
                FUNDRESQ FOLLOWS THE TRANSACTION TRAIL
              </div>
            </div>

            {/* Explanation & Action Column (Right) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block">
                Visual Proof
              </span>

              <h3 className="text-3xl sm:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-tight">
                We follow where the money went.
              </h3>

              <p className="text-base sm:text-lg text-[#9FA3A3] font-normal leading-relaxed">
                Cryptocurrency can move through several wallets and platforms. Fundresq examines the transaction trail to help you understand what happened.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/how-tracing-works" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-7 text-xs border-[#252B2F] bg-[#111416] hover:bg-[#191D20] text-[#F2EFE9] font-bold uppercase tracking-wider rounded-lg group"
                  >
                    Learn How Tracing Works
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#E15D44]" />
                  </Button>
                </Link>

                <Button
                  onClick={onOpenIntake}
                  className="w-full sm:w-auto h-12 px-7 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/20 rounded-lg transition-colors"
                >
                  Tell Us What Happened
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
