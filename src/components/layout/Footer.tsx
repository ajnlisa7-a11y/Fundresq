'use client';

import Link from 'next/link';
import { FundresqLogo } from '@/components/ui/fundresq-logo';
import { ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer({ onOpenIntake }: { onOpenIntake?: () => void }) {
  return (
    <footer className="bg-[#090B0C] border-t border-[#252B2F] pt-20 pb-12 text-[#F2EFE9]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top CTA Row */}
        <div className="rounded-2xl bg-[#111416] border border-[#252B2F] p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E15D44] block">
              Confidential Review
            </span>
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#F2EFE9]">
              Ready to find where your funds went?
            </h3>
            <p className="text-xs md:text-sm text-[#9FA3A3] max-w-xl leading-relaxed">
              Share your transaction ID or wallet address with us. We will look at the public blockchain trail and tell you honestly what can be traced.
            </p>
          </div>
          <Button
            onClick={onOpenIntake}
            className="bg-[#E15D44] text-[#090B0C] hover:bg-[#F0836D] font-bold text-xs uppercase tracking-widest px-8 h-12 shadow-xl shadow-[#E15D44]/20 rounded-lg shrink-0 transition-colors"
          >
            Start a Confidential Case Review
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 text-xs">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <FundresqLogo size="sm" showSubtitle={false} />
            <p className="text-xs text-[#9FA3A3] leading-relaxed pt-2">
              Blockchain transaction tracing, wallet mapping, and clear evidence reports for individuals, businesses, and legal advisers.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#E15D44] pt-2">
              <Lock className="w-3.5 h-3.5" /> Strictly Confidential Intake
            </div>
          </div>

          {/* Investigations */}
          <div className="space-y-3 font-mono">
            <h5 className="text-[11px] font-bold text-[#F2EFE9] uppercase tracking-widest">
              Investigations
            </h5>
            <ul className="space-y-2.5 text-[#9FA3A3]">
              <li><Link href="/#services" className="hover:text-[#E15D44] transition-colors">Stolen Cryptocurrency</Link></li>
              <li><Link href="/#services" className="hover:text-[#E15D44] transition-colors">Investment Scam Tracing</Link></li>
              <li><Link href="/#services" className="hover:text-[#E15D44] transition-colors">Romance Scam Tracing</Link></li>
              <li><Link href="/#services" className="hover:text-[#E15D44] transition-colors">Wallet & Cluster Mapping</Link></li>
              <li><Link href="/#services" className="hover:text-[#E15D44] transition-colors">Cross-Chain Activity Tracing</Link></li>
              <li><Link href="/#services" className="hover:text-[#E15D44] transition-colors">Commercial & Legal Matters</Link></li>
            </ul>
          </div>

          {/* Fundresq Practice */}
          <div className="space-y-3 font-mono">
            <h5 className="text-[11px] font-bold text-[#F2EFE9] uppercase tracking-widest">
              Fundresq
            </h5>
            <ul className="space-y-2.5 text-[#9FA3A3]">
              <li><Link href="/how-tracing-works" className="hover:text-[#E15D44] transition-colors text-[#E15D44] font-bold">How Tracing Works →</Link></li>
              <li><Link href="/#why-fundresq" className="hover:text-[#E15D44] transition-colors">About Our Practice</Link></li>
              <li><Link href="/#methodology" className="hover:text-[#E15D44] transition-colors">Our 6-Step Process</Link></li>
              <li><Link href="/#deliverables" className="hover:text-[#E15D44] transition-colors">Evidence Reports</Link></li>
              <li><Link href="/#scenarios" className="hover:text-[#E15D44] transition-colors">Case Examples</Link></li>
              <li><Link href="/#insights" className="hover:text-[#E15D44] transition-colors">Fundresq Intelligence</Link></li>
            </ul>
          </div>

          {/* Professional & Institutional */}
          <div className="space-y-3 font-mono">
            <h5 className="text-[11px] font-bold text-[#F2EFE9] uppercase tracking-widest">
              Institutional
            </h5>
            <ul className="space-y-2.5 text-[#9FA3A3]">
              <li><Link href="#services" className="hover:text-[#E15D44] transition-colors">Legal Counsel Support</Link></li>
              <li><Link href="#services" className="hover:text-[#E15D44] transition-colors">Insolvency & Asset Discovery</Link></li>
              <li><Link href="#services" className="hover:text-[#E15D44] transition-colors">Exchange Freeze Packets</Link></li>
              <li><Link href="#global" className="hover:text-[#E15D44] transition-colors">Cross-Border Jurisdictions</Link></li>
              <li><a href="mailto:investigations@fundresq.com" className="hover:text-[#E15D44] transition-colors">Direct Desk: investigations@fundresq.com</a></li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3 font-mono">
            <h5 className="text-[11px] font-bold text-[#F2EFE9] uppercase tracking-widest">
              Governance
            </h5>
            <ul className="space-y-2.5 text-[#9FA3A3]">
              <li><Link href="#" className="hover:text-[#E15D44] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#E15D44] transition-colors">Terms of Engagement</Link></li>
              <li><Link href="#" className="hover:text-[#E15D44] transition-colors">Evidence Chain-of-Custody</Link></li>
              <li><Link href="#" className="hover:text-[#E15D44] transition-colors">Regulatory Disclosures</Link></li>
              <li><Link href="#faq" className="hover:text-[#E15D44] transition-colors">FAQ & Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-8 border-t border-[#252B2F] space-y-4 text-[11px] text-[#9FA3A3] leading-relaxed">
          <p>
            <strong className="text-[#F2EFE9]">Important Disclaimer:</strong> Fundresq provides blockchain transaction tracing and evidence reporting services. We do not provide legal or investment advice, and we do not guarantee the recovery of digital assets. We establish the verifiable facts and provide reports you can hand directly to law enforcement, legal counsel, or cryptocurrency exchanges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[10px] font-mono text-[#9FA3A3]/80">
            <div>
              © 2026 Fundresq. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Delaware Registered Forensic Entity</span>
              <span>•</span>
              <span className="text-[#61B58A]">EVM • UTXO • Solana • Cross-Chain</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
