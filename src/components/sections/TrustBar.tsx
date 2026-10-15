'use client';

import { Layers, Network, FileSpreadsheet, FileCheck2, ShieldCheck } from 'lucide-react';

export function TrustBar() {
  const capabilities = [
    {
      title: 'Follow the money',
      desc: 'We trace relevant transactions from wallet to wallet.',
      icon: Network,
    },
    {
      title: 'Understand where it went',
      desc: 'We examine where funds moved and how they were transferred.',
      icon: Layers,
    },
    {
      title: 'Document the evidence',
      desc: 'We organise important transactions and findings into a clear record.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Explain the next step',
      desc: 'We help you understand what the findings mean and what options may be available.',
      icon: FileCheck2,
    },
  ];

  return (
    <section className="py-24 bg-[#111416] border-y border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191D20] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Our Approach
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-6">
            We follow the evidence.
          </h2>
          
          <p className="text-base md:text-lg text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto font-normal">
            We start with the transaction trail. Our investigators review the available information, follow relevant fund movements and document what the evidence shows.
          </p>
        </div>

        {/* 4 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-xl bg-[#191D20] border border-[#252B2F] hover:border-[#E15D44]/60 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#111416] flex items-center justify-center text-[#E15D44] mb-6 group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-base font-bold text-[#F2EFE9] mb-2.5 group-hover:text-[#E15D44] transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-xs text-[#9FA3A3] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#252B2F] flex items-center justify-between text-[10px] font-mono uppercase text-[#9FA3A3]">
                  <span>Capability 0{i + 1}</span>
                  <span className="text-[#61B58A] font-bold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
