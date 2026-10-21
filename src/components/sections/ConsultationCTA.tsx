'use client';

import { ShieldCheck, Lock, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ConsultationCTA({ onOpenIntake }: { onOpenIntake: () => void }) {
  return (
    <section className="py-28 md:py-36 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(225,93,68,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(225,93,68,0.14)_0%,rgba(17,20,22,0.95)_70%)] border border-[#E15D44]/40 p-8 md:p-16 text-center shadow-[0_0_60px_rgba(225,93,68,0.14)] relative overflow-hidden">
          {/* Subtle Vermilion accent beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-1 bg-gradient-to-r from-transparent via-[#E15D44] to-transparent" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090B0C] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold tracking-widest uppercase mb-6">
            <Lock className="w-3.5 h-3.5" />
            Confidential
          </div>

          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-6">
            Lost money to a crypto scam? <br className="hidden sm:block" />
            <span className="text-[#E15D44] italic">We trace and recover your lost funds.</span>
          </h2>

          <p className="text-sm md:text-base text-[#9FA3A3] max-w-xl mx-auto leading-relaxed mb-10">
            Share what happened and your transaction details. We track down where your money went and take direct action to recover your scam funds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              onClick={onOpenIntake}
              className="w-full sm:w-auto h-13 px-9 text-xs md:text-sm bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold uppercase tracking-widest shadow-2xl shadow-[#E15D44]/25 rounded-lg group transition-colors"
            >
              Recover Your Scam Funds
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="mailto:investigations@fundoraid.com" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-13 px-8 text-xs md:text-sm border-[#252B2F] bg-[#090B0C]/80 hover:bg-[#090B0C] text-[#F2EFE9] font-bold uppercase tracking-wider rounded-lg"
              >
                <Mail className="mr-2 w-4 h-4 text-[#E15D44]" /> investigations@fundoraid.com
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono text-[#9FA3A3] uppercase tracking-widest pt-6 border-t border-[#252B2F]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#61B58A]" /> Direct Recovery Action
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#E15D44]" /> Strictly confidential
            </span>
            <span>•</span>
            <span>Direct response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
