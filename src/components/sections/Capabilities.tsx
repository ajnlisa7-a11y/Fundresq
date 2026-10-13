'use client';

import { 
  ShieldAlert, 
  TrendingDown, 
  Search, 
  Shuffle, 
  UserX, 
  Building2, 
  ArrowRight 
} from 'lucide-react';

interface CapabilitiesProps {
  onOpenIntake: (category?: string) => void;
}

export function Capabilities({ onOpenIntake }: CapabilitiesProps) {
  const services = [
    {
      id: 'theft',
      title: 'Stolen cryptocurrency',
      description: 'We investigate where stolen funds moved after leaving a wallet or account.',
      technicalMeta: 'Stolen funds & unauthorized transfers',
      cta: 'Investigate stolen funds →',
      icon: ShieldAlert,
      tag: '01',
    },
    {
      id: 'investment_scam',
      title: 'Investment scams',
      description: 'We examine transactions linked to fake trading platforms, deceptive brokers, and fraudulent yield schemes.',
      technicalMeta: 'Fake platforms & fraudulent brokers',
      cta: 'Investigate an investment scam →',
      icon: TrendingDown,
      tag: '02',
    },
    {
      id: 'romance_scam',
      title: 'Romance scams',
      description: 'We trace funds sent to individuals met on dating apps or social platforms who solicited crypto under false pretenses.',
      technicalMeta: 'Deceptive relationships & solicited transfers',
      cta: 'Investigate a romance scam →',
      icon: UserX,
      tag: '03',
    },
    {
      id: 'cross_chain',
      title: 'Funds moved across blockchains',
      description: 'We investigate relevant transactions even when funds move between supported blockchain networks.',
      technicalMeta: 'Token swaps & network bridge transfers',
      cta: 'Trace across blockchains →',
      icon: Shuffle,
      tag: '04',
    },
    {
      id: 'wallet',
      title: 'Wallet activity',
      description: 'We review wallet transactions and connections to help build a clearer picture of what happened.',
      technicalMeta: 'Wallet history & connected addresses',
      cta: 'Examine a wallet address →',
      icon: Search,
      tag: '05',
    },
    {
      id: 'business_legal',
      title: 'Business and legal matters',
      description: 'We provide investigation and reporting support for professional and commercial cases.',
      technicalMeta: 'Commercial disputes & legal reporting',
      cta: 'Professional enquiries →',
      icon: Building2,
      tag: '06',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            What We Investigate
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            What Fundresq investigates
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
            Clear, structured investigations for individuals, businesses, and legal matters.
          </p>
        </div>

        {/* 6 Specific Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="p-8 rounded-xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44]/50 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#191D20] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#9FA3A3] bg-[#090B0C] px-2.5 py-1 rounded border border-[#252B2F]">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed mb-4">
                    {svc.description}
                  </p>

                  <div className="mb-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090B0C] border border-[#252B2F] text-[9px] font-mono text-[#9FA3A3]/70 uppercase tracking-wider">
                    <span>Focus:</span>
                    <span className="text-[#F2EFE9]/80 font-medium">{svc.technicalMeta}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenIntake(svc.id)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#E15D44] hover:text-[#F0836D] flex items-center gap-2 group-hover:translate-x-1 transition-all pt-5 border-t border-[#252B2F] w-full text-left"
                >
                  {svc.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
