'use client';

import Link from 'next/link';
import { Search, Compass, ShieldCheck, ArrowRight, ArrowDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSyncedAsset } from '@/lib/synced-assets';

interface HowWeHelpProps {
  onOpenIntake: () => void;
}

export function HowWeHelp({ onOpenIntake }: HowWeHelpProps) {
  const { url: investigatorPhotoUrl, onError: onInvestigatorError } = useSyncedAsset(
    'investigator-analysing-data.jpg',
    '/images/investigator-analysing-data.jpg'
  );

  const services = [
    {
      id: 'trace',
      slug: 'crypto-tracing',
      number: '01',
      title: 'Trace cryptocurrency',
      description: 'We follow relevant transactions to see how funds moved between wallets and supported networks.',
      icon: Search,
    },
    {
      id: 'investigate',
      slug: 'wallet-investigation',
      number: '02',
      title: 'Investigate what happened',
      description: 'We examine wallet addresses, transactions and other information connected to your case.',
      icon: Compass,
    },
    {
      id: 'recover',
      slug: 'crypto-tracing',
      number: '03',
      title: 'Recover scam funds',
      description: 'We take direct action to track down and recover lost cryptocurrency and scam funds.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="how-we-help" className="py-16 sm:py-28 md:py-36 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            How Fundoraid can help
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto leading-relaxed">
            Direct services to locate and recover your scam funds.
          </p>
        </div>

        {/* Exactly 3 Clean Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-8 md:p-9 rounded-2xl bg-[#090B0C] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
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
                  <button
                    onClick={onOpenIntake}
                    className="text-xs font-mono font-bold text-[#E15D44] hover:text-[#F0836D] transition-colors flex items-center gap-1.5"
                  >
                    Start Recovery
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[11px] font-mono text-[#9FA3A3] hover:text-[#F2EFE9] transition-colors flex items-center gap-1"
                  >
                    <span>See Details</span>
                    <ExternalLink className="w-3 h-3 text-[#E15D44]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Feature: Real Investigators Analysing Data */}
        <div className="max-w-6xl mx-auto mb-16 rounded-3xl bg-[#090B0C] border border-[#252B2F] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 space-y-5 order-2 lg:order-1">
              <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block">
                Human Intelligence & Blockchain Science
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-tight">
                Real investigators examining the trail.
              </h3>
              <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
                Automated tools can miss complex peeling chains and obfuscation methods. At Fundoraid, experienced forensic specialists manually inspect transaction records, track down illicit transfers, and execute the recovery of your scam funds.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#F2EFE9]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#61B58A]" />
                  <span>Manual Verification</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E15D44]" />
                  <span>Direct Recovery Action</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[380px] overflow-hidden order-1 lg:order-2">
              <img
                src={investigatorPhotoUrl || '/images/investigator-analysing-data.jpg'}
                alt="Senior forensic investigator analysing cryptocurrency transaction flow charts on dual displays"
                className="w-full h-full object-cover object-center"
                onError={onInvestigatorError}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-[#090B0C]/20 to-[#090B0C]" />
            </div>
          </div>
        </div>

        {/* Visual Diagram Block: Elevated Dark Luxury with Subtle Transaction-Path Animation */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-[#0e1113] to-[#090B0C] border border-[#252B2F] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Copper Glow behind Diagram */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,93,68,0.12)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(109,167,181,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
            
            {/* Visual Diagram Column (Left) */}
            <div className="lg:col-span-6 bg-[#111416]/90 backdrop-blur-md rounded-2xl border border-[#252B2F] p-7 sm:p-9 flex flex-col items-center justify-center font-mono select-none shadow-2xl relative">
              
              {/* Telemetry header tag */}
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-[#252B2F] text-[10px] tracking-widest text-[#9FA3A3]">
                <span className="flex items-center gap-1.5 text-[#E15D44] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#E15D44] animate-ping" />
                  LIVE TRAIL MAPPING
                </span>
                <span>MULTI-HOP LEDGER</span>
              </div>

              {/* Badge 1: You Sent Funds */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#191D20] border border-[#252B2F] text-[#F2EFE9] text-[11px] font-bold tracking-widest uppercase shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#61B58A]" />
                YOU SENT FUNDS
              </div>

              {/* Animated Vertical Connector: Funds -> Your Wallet */}
              <div className="h-6 w-full flex justify-center items-center relative">
                <svg className="h-6 w-4 overflow-visible" viewBox="0 0 16 24">
                  <line x1="8" y1="0" x2="8" y2="24" stroke="#252B2F" strokeWidth="2" />
                  <line 
                    x1="8" y1="0" x2="8" y2="24" 
                    stroke="#61B58A" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-trail-flow" 
                  />
                </svg>
              </div>

              {/* Node 1: Your Wallet */}
              <div className="w-full max-w-[280px] p-3.5 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-between shadow-lg group hover:border-[#61B58A]/60 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#F2EFE9] tracking-wider uppercase">
                    YOUR WALLET
                  </div>
                  <div className="text-[10px] text-[#9FA3A3] mt-0.5">
                    0x71C9...8E42 · Origin
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#61B58A] shadow-[0_0_12px_#61B58A]" />
                  <span className="absolute w-5 h-5 rounded-full bg-[#61B58A]/20 animate-ping" />
                </div>
              </div>

              {/* Animated Connector: Your Wallet -> Scam Wallet */}
              <div className="h-8 w-full flex justify-center items-center relative">
                <svg className="h-8 w-4 overflow-visible" viewBox="0 0 16 32">
                  <line x1="8" y1="0" x2="8" y2="32" stroke="#252B2F" strokeWidth="2" />
                  <line 
                    x1="8" y1="0" x2="8" y2="32" 
                    stroke="#E15D44" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-trail-flow" 
                  />
                </svg>
              </div>

              {/* Node 2: Scam Wallet */}
              <div className="w-full max-w-[280px] p-3.5 rounded-xl bg-[#191D20] border border-[#E15D44]/60 flex items-center justify-between shadow-lg group hover:border-[#E15D44] transition-colors relative">
                <div>
                  <div className="text-xs font-bold text-[#E15D44] tracking-wider uppercase flex items-center gap-1.5">
                    <span>SCAM WALLET</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#E15D44]/15 border border-[#E15D44]/30 text-[#E15D44]">FLAGGED</span>
                  </div>
                  <div className="text-[10px] text-[#9FA3A3] mt-0.5">
                    0x32A1...9F0D · Illicit Inflow
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E15D44] animate-pulse shadow-[0_0_12px_#E15D44]" />
              </div>

              {/* Branching SVG Network: Scam Wallet splits to Wallet (right) and Exchange (down) */}
              <div className="w-full max-w-[280px] h-20 relative flex items-center justify-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 280 80">
                  {/* Central vertical track */}
                  <line x1="140" y1="0" x2="140" y2="80" stroke="#252B2F" strokeWidth="2" />
                  <line 
                    x1="140" y1="0" x2="140" y2="80" 
                    stroke="#E15D44" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-trail-flow" 
                  />

                  {/* Horizontal branch line to intermediate wallet */}
                  <path 
                    d="M 140 35 L 220 35" 
                    fill="none" 
                    stroke="#252B2F" 
                    strokeWidth="2" 
                  />
                  <path 
                    d="M 140 35 L 220 35" 
                    fill="none" 
                    stroke="#E15D44" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-trail-flow" 
                  />
                </svg>

                {/* Intermediate Wallet Branch Tag */}
                <div className="absolute right-0 top-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#191D20] border border-[#252B2F] text-[10px] text-[#9FA3A3] shadow-md hover:border-[#E15D44]/50 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#9FA3A3]" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#F2EFE9]">WALLET</span>
                    <span className="text-[8px] text-[#9FA3A3]">Peel Hop</span>
                  </div>
                </div>
              </div>

              {/* Node 3: Recipient Endpoint */}
              <div className="w-full max-w-[280px] p-3.5 rounded-xl bg-[#191D20] border border-[#252B2F] flex items-center justify-between shadow-lg group hover:border-[#E15D44]/60 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#F2EFE9] tracking-wider uppercase flex items-center gap-1.5">
                    <span>RECIPIENT ENDPOINT</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#61B58A]/15 border border-[#61B58A]/30 text-[#61B58A]">IDENTIFIED</span>
                  </div>
                  <div className="text-[10px] text-[#9FA3A3] mt-0.5">
                    0x12F8...77EA · Target Recovery Point
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E15D44] shadow-[0_0_12px_#E15D44]" />
              </div>

              {/* Animated Connector to Bottom Badge */}
              <div className="h-6 w-full flex justify-center items-center relative">
                <svg className="h-6 w-4 overflow-visible" viewBox="0 0 16 24">
                  <line x1="8" y1="0" x2="8" y2="24" stroke="#252B2F" strokeWidth="2" />
                  <line 
                    x1="8" y1="0" x2="8" y2="24" 
                    stroke="#E15D44" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-trail-flow" 
                  />
                </svg>
              </div>

              {/* Bottom Badge: Fundoraid Recovers Your Scam Funds */}
              <div className="text-center px-5 py-2.5 rounded-xl bg-[#E15D44]/10 border border-[#E15D44]/40 text-[#E15D44] text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-[#E15D44]/10">
                FUNDORAID RECOVERS YOUR SCAM FUNDS
              </div>
            </div>

            {/* Explanation & Action Column (Right) */}
            <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
              <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block">
                Visual Proof
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-tight">
                We help you recover your scam funds.
              </h3>

              <p className="text-base sm:text-lg text-[#9FA3A3] font-normal leading-relaxed">
                Cryptocurrency can move through multiple wallets and networks. Fundoraid tracks down the funds and works directly to recover what was taken from you.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/services/crypto-tracing" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto h-13 px-8 text-xs border-[#252B2F] bg-[#111416] hover:bg-[#191D20] text-[#F2EFE9] font-bold uppercase tracking-wider rounded-lg group shadow-md"
                  >
                    See How We Can Help
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#E15D44]" />
                  </Button>
                </Link>

                <Button
                  onClick={onOpenIntake}
                  className="w-full sm:w-auto h-13 px-8 bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#E15D44]/25 rounded-lg transition-colors"
                >
                  Recover Your Scam Funds
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
