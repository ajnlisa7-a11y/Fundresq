'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function TrailDoctrine() {
  return (
    <section className="py-20 md:py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Blockchain Transparency
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-6">
            When digital assets move, <br />
            <span className="text-[#E15D44] italic">the trail doesn't disappear.</span>
          </h2>
          <p className="text-base md:text-xl text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Cryptocurrency transactions can leave a public record on the blockchain. We follow the transaction trail to understand where funds moved.
          </p>
          <div className="flex justify-center">
            <Link
              href="/how-tracing-works"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-[#E15D44] hover:text-[#F0836D] transition-colors py-3 px-6 rounded-lg bg-[#111416] border border-[#252B2F] hover:border-[#E15D44]/50 group shadow-lg shadow-[#090B0C]/40"
            >
              How transaction tracing works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

