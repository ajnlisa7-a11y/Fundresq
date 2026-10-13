'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSyncedAsset } from '@/lib/synced-assets';

interface HeroProps {
  onOpenIntake: () => void;
}

export function Hero({ onOpenIntake }: HeroProps) {
  const [quickTx, setQuickTx] = useState('');
  const { url: heroBgUrl, onError: onHeroBgError } = useSyncedAsset('hero-bg.png', '/hero-bg.png');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenIntake();
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-[#090B0C] border-b border-[#252B2F] overflow-hidden">
      {/* Dynamic Synced Hero Background */}
      {heroBgUrl && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={heroBgUrl}
            alt="Forensic Operations Background"
            className="w-full h-full object-cover object-center opacity-30 md:opacity-35 scale-[1.02] transition-opacity duration-700"
            onError={onHeroBgError}
          />
          {/* Studio Shadow Gradient Masks for Ultra-Clean Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090B0C] via-[#090B0C]/75 to-[#090B0C]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090B0C]/90 via-transparent to-[#090B0C]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,11,12,0.3)_0%,rgba(9,11,12,0.92)_100%)]" />
        </div>
      )}

      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-[1]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="forensic-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(225, 93, 68, 0.12)" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#forensic-grid)" />
        </svg>
      </div>

      {/* Subtle radial ambient iris light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225, 93, 68,0.1)_0%,transparent_70%)] pointer-events-none z-[1]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold tracking-[0.25em] uppercase mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E15D44] animate-pulse" />
            Lost or Stolen Cryptocurrency?
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-bold text-[#F2EFE9] tracking-tight leading-[1.02] md:leading-[0.98] mb-6 md:mb-8">
            Follow the funds. <br />
            <span className="text-[#E15D44] italic">Establish the facts.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#9FA3A3] max-w-2xl mx-auto leading-relaxed font-normal mb-8 text-balance">
            Fundresq investigates suspicious cryptocurrency transactions. We follow the movement of funds, document what we find, and help you understand what to do next.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button
              onClick={onOpenIntake}
              className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold uppercase tracking-widest shadow-2xl shadow-[#E15D44]/25 rounded-lg group transition-colors"
            >
              Tell Us What Happened
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Link href="#methodology" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm border-[#252B2F] bg-[#111416] hover:bg-[#191D20] text-[#F2EFE9] font-bold uppercase tracking-wider rounded-lg"
              >
                How It Works
              </Button>
            </Link>
          </div>

          {/* Confidentiality note */}
          <p className="text-xs text-[#9FA3A3] max-w-lg mx-auto mb-8 leading-relaxed flex items-center justify-center gap-1.5 font-mono">
            <span>🔒</span> Your case information is handled confidentially.
          </p>

          {/* Credibility Chips */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-[#9FA3A3] uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#61B58A]" /> No false recovery promises
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E15D44]" /> Transparent scope
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#61B58A]" /> Evidence for police & solicitors
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DA7B5]" /> Strictly confidential
            </span>
          </div>
        </div>

        {/* Rapid Hash / Wallet Input Triage Card */}
        <div className="max-w-3xl mx-auto rounded-xl bg-[#111416] border border-[#252B2F] p-4 sm:p-5 shadow-2xl">
          <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#9FA3A3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={quickTx}
                onChange={(e) => setQuickTx(e.target.value)}
                placeholder="Enter a transaction ID (TxID) or wallet address to review..."
                className="w-full bg-[#090B0C] border border-[#252B2F] rounded-lg pl-10 pr-4 py-3 text-xs font-mono text-[#F2EFE9] placeholder:text-[#9FA3A3]/50 focus:outline-none focus:border-[#E15D44]"
              />
            </div>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#E15D44] text-[#090B0C] hover:bg-[#F0836D] font-mono text-xs font-bold uppercase tracking-wider py-3 px-6 shrink-0 h-11 rounded-lg transition-colors"
            >
              Review Transaction →
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-3 mt-3 border-t border-[#252B2F]/60 text-[10px] font-mono text-[#9FA3A3]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-[#E15D44]" /> Your inquiry is private and kept strictly confidential
            </span>
            <span className="text-[#9FA3A3]/80">
              Supported networks: BTC • ETH • SOL • TRX • ARB • BSC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
