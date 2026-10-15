import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SCAMS_DATA } from '@/data/scams';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Cryptocurrency Scams & Investigations Directory | Fundresq',
  description:
    'Explore common cryptocurrency scams, including investment fraud, romance scams, fake trading platforms, wallet hacks, and crypto theft. Learn how on-chain tracing investigates each incident.',
  alternates: {
    canonical: 'https://fundresq.com/scams',
  },
};

export default function ScamsIndexPage() {
  const scamsList = Object.values(SCAMS_DATA);

  return (
    <main className="min-h-screen bg-[#090B0C] text-[#F2EFE9] selection:bg-[#E15D44] selection:text-[#F2EFE9]">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-24 md:pt-28 bg-[#090B0C] border-b border-[#252B2F]/60">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9FA3A3]">
            <Link href="/" className="hover:text-[#F2EFE9] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#252B2F]" />
            <span className="text-[#E15D44] font-bold">Scams Directory</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            What Happened To You?
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-6">
            Cryptocurrency scam investigations
          </h1>
          <p className="text-base sm:text-lg text-[#9FA3A3] max-w-2xl mx-auto leading-relaxed">
            Choose what happened to you. We organize our investigations around your situation to trace where your cryptocurrency moved and establish the verified facts.
          </p>
        </div>
      </section>

      {/* All 6 Scams Grid */}
      <section className="py-20 bg-[#111416] border-b border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {scamsList.map((scam) => (
              <Link
                key={scam.slug}
                href={`/scams/${scam.slug}`}
                className="p-8 rounded-2xl bg-[#090B0C] border border-[#252B2F] hover:border-[#E15D44] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E15D44] bg-[#111416] px-3 py-1 rounded-full border border-[#252B2F]">
                      {scam.badge}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
                    {scam.title}
                  </h2>

                  <p className="text-xs md:text-sm text-[#F2EFE9]/80 font-medium leading-relaxed mb-3">
                    “{scam.victimSearchPhrase}”
                  </p>

                  <p className="text-xs text-[#9FA3A3] leading-relaxed line-clamp-3">
                    {scam.problemStatement}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#252B2F] flex items-center justify-between text-xs font-mono font-bold text-[#E15D44]">
                  <span>Explore Investigation Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
