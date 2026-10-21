'use client';

import { useState } from 'react';
import { 
  FileText, 
  Clock, 
  Wallet, 
  ArrowRightLeft, 
  CheckCircle2, 
  Database, 
  Compass, 
  ArrowRight, 
  Lock,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ReportDeliverables({ onOpenIntake }: { onOpenIntake: () => void }) {
  const [activeSection, setActiveSection] = useState<number>(0);

  const reportSections = [
    {
      id: 'timeline',
      label: 'Transaction timeline',
      desc: 'Chronological order of every relevant transfer with timestamps and block confirmations.',
      icon: Clock,
      sampleTitle: '01. Verified Chronology',
      sampleContent: (
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded bg-[#111416] border border-[#252B2F] flex items-center justify-between">
            <span className="text-[#9FA3A3]">14 May 2026 03:14 UTC</span>
            <span className="text-[#F2EFE9] font-bold">142.50 ETH Outbound</span>
            <span className="text-[#E15D44]">Initial Unauthorized Transfer</span>
          </div>
          <div className="p-2.5 rounded bg-[#111416] border border-[#252B2F] flex items-center justify-between">
            <span className="text-[#9FA3A3]">14 May 2026 03:45 UTC</span>
            <span className="text-[#F2EFE9] font-bold">85.20 ETH Swapped</span>
            <span className="text-[#6DA7B5]">Cross-Chain Swap (Arbitrum)</span>
          </div>
          <div className="p-2.5 rounded bg-[#111416] border border-[#252B2F] flex items-center justify-between">
            <span className="text-[#9FA3A3]">14 May 2026 05:08 UTC</span>
            <span className="text-[#61B58A] font-bold">84.80 ETH Net Deposit</span>
            <span className="text-[#61B58A]">Exchange Deposit Account</span>
          </div>
        </div>
      ),
    },
    {
      id: 'wallets',
      label: 'Relevant wallets',
      desc: 'Source, intermediate hops, and terminal recipient addresses identified and verified.',
      icon: Wallet,
      sampleTitle: '02. Identified Wallet Relationships',
      sampleContent: (
        <div className="space-y-2 text-xs font-mono">
          <div className="p-3 rounded bg-[#111416] border border-[#252B2F]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase text-[#E15D44] font-bold">Source Wallet (Victim)</span>
              <span className="text-[#9FA3A3]">0x71C9...8E42</span>
            </div>
            <p className="text-[11px] text-[#9FA3A3]">Origination account from which unauthorized transfer occurred.</p>
          </div>
          <div className="p-3 rounded bg-[#111416] border border-[#252B2F]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase text-[#61B58A] font-bold">Destination Wallet (Exchange)</span>
              <span className="text-[#9FA3A3]">0x12F8...77EA</span>
            </div>
            <p className="text-[11px] text-[#9FA3A3]">Regulated exchange deposit sub-account linked to real-world customer identity.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'movement',
      label: 'Movement of funds',
      desc: 'How assets traveled between addresses, splits, liquidity pools, and network bridges.',
      icon: ArrowRightLeft,
      sampleTitle: '03. Flow of Funds Map',
      sampleContent: (
        <div className="p-4 rounded bg-[#111416] border border-[#252B2F] text-xs font-mono space-y-3">
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#252B2F]">
            <span className="text-[#9FA3A3]">Asset Movement Path</span>
            <span className="text-[#61B58A]">100% Accounted</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] flex-wrap">
            <span className="px-2 py-1 rounded bg-[#191D20] text-[#F2EFE9] border border-[#252B2F]">Your Wallet</span>
            <span className="text-[#E15D44]">➔</span>
            <span className="px-2 py-1 rounded bg-[#E24A4A]/10 text-[#FF7D7D] border border-[#E24A4A]/30">Incident Address</span>
            <span className="text-[#E15D44]">➔</span>
            <span className="px-2 py-1 rounded bg-[#191D20] text-[#9FA3A3] border border-[#252B2F]">Arbitrum Swap</span>
            <span className="text-[#E15D44]">➔</span>
            <span className="px-2 py-1 rounded bg-[#61B58A]/10 text-[#61B58A] border border-[#61B58A]/30 font-bold">Exchange Account</span>
          </div>
          <p className="text-[11px] text-[#9FA3A3] pt-1">
            Funds did not enter an unhosted mixing service. 82% of total value traced directly into a single identified exchange deposit account.
          </p>
        </div>
      ),
    },
    {
      id: 'findings',
      label: 'Key findings',
      desc: 'Objective, plain-English summary of what the blockchain evidence conclusively shows.',
      icon: CheckCircle2,
      sampleTitle: '04. Summary Findings',
      sampleContent: (
        <div className="p-4 rounded bg-[#111416] border border-[#252B2F] text-xs space-y-2">
          <p className="text-[#F2EFE9] font-medium leading-relaxed">
            The investigation confirmed that the transfer of 142.50 ETH on 14 May 2026 was executed through an unauthorized smart contract permit approval.
          </p>
          <p className="text-[#9FA3A3] leading-relaxed">
            Following secondary splits and an Arbitrum bridge transfer, <strong className="text-[#F2EFE9]">84.80 ETH net value</strong> arrived at a deposit wallet hosted by a major centralized exchange where the account holder was required to submit government ID.
          </p>
        </div>
      ),
    },
    {
      id: 'data',
      label: 'Supporting transaction data',
      desc: 'Cryptographic transaction hashes (TxIDs), gas fees, block numbers, and public ledger links.',
      icon: Database,
      sampleTitle: '05. Verified Blockchain Data',
      sampleContent: (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="p-2.5 rounded bg-[#111416] border border-[#252B2F] text-[11px]">
            <span className="text-[#9FA3A3] block">Outbound TxID (Ethereum):</span>
            <span className="text-[#E15D44] break-all font-bold">0x4f128c9a3d1e89b7024f8102a39c017d84e92a01...</span>
          </div>
          <div className="p-2.5 rounded bg-[#111416] border border-[#252B2F] text-[11px]">
            <span className="text-[#9FA3A3] block">Deposit TxID (Exchange):</span>
            <span className="text-[#61B58A] break-all font-bold">0x11d4e07a99f1c24e8832a76f012b39c94812f0ea...</span>
          </div>
        </div>
      ),
    },
    {
      id: 'next_steps',
      label: 'Recovery action steps',
      desc: 'Clear options and direct actions taken to recover your scam funds.',
      icon: Compass,
      sampleTitle: '06. Fund Recovery Steps',
      sampleContent: (
        <div className="p-4 rounded bg-[#111416] border border-[#252B2F] text-xs space-y-3">
          <div className="flex items-start gap-2.5 text-[#9FA3A3]">
            <span className="w-5 h-5 rounded-full bg-[#E15D44]/20 text-[#E15D44] flex items-center justify-center shrink-0 font-bold text-[10px]">1</span>
            <span>Pinpoint exact target recipient addresses and recipient platform endpoints.</span>
          </div>
          <div className="flex items-start gap-2.5 text-[#9FA3A3]">
            <span className="w-5 h-5 rounded-full bg-[#E15D44]/20 text-[#E15D44] flex items-center justify-center shrink-0 font-bold text-[10px]">2</span>
            <span>Initiate direct asset recovery coordination and fraud notices for target account 0x12F8...77EA.</span>
          </div>
          <div className="flex items-start gap-2.5 text-[#9FA3A3]">
            <span className="w-5 h-5 rounded-full bg-[#E15D44]/20 text-[#E15D44] flex items-center justify-center shrink-0 font-bold text-[10px]">3</span>
            <span>Execute recovery procedures to reclaim the identified scam funds.</span>
          </div>
        </div>
      ),
    },
  ];

  const current = reportSections[activeSection];

  return (
    <section id="deliverables" className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" />
            The Investigation Report
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            See what happened to your funds.
          </h2>
          <p className="text-base md:text-lg text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto font-normal">
            At the end of an investigation, you receive a report explaining the transaction trail, key findings and relevant evidence.
          </p>
        </div>

        {/* Visual Report Container */}
        <div className="max-w-6xl mx-auto rounded-2xl bg-[#111416] border border-[#252B2F] p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 6 Report Labels */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block mb-3">
                Report Contents:
              </span>
              
              {reportSections.map((sec, idx) => {
                const Icon = sec.icon;
                const isSelected = activeSection === idx;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(idx)}
                    className={`w-full p-4 rounded-xl text-left transition-all border flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-[#191D20] border-[#E15D44] shadow-lg shadow-[#E15D44]/10'
                        : 'bg-[#090B0C] border-[#252B2F] hover:border-[#E15D44]/40 hover:bg-[#111416]'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'bg-[#E15D44] text-[#090B0C]' : 'bg-[#191D20] text-[#E15D44]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${
                        isSelected ? 'text-[#F2EFE9]' : 'text-[#F2EFE9]/90'
                      }`}>
                        {sec.label}
                      </h4>
                      <p className="text-xs text-[#9FA3A3] leading-relaxed mt-0.5">
                        {sec.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Visual Report Preview */}
            <div className="lg:col-span-7 rounded-xl bg-[#090B0C] border border-[#252B2F] p-6 md:p-8 shadow-inner flex flex-col justify-between">
              
              {/* Document Header */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#252B2F]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E15D44]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F2EFE9]">
                      Fundoraid Investigation Report
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-[#9FA3A3]">REF: FO-2026-8812</span>
                    <span className="text-[#E15D44] px-2 py-0.5 rounded bg-[#E15D44]/10 border border-[#E15D44]/30 font-bold uppercase">
                      CONFIDENTIAL
                    </span>
                  </div>
                </div>

                {/* Section Title & Tag */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E15D44] uppercase tracking-wider">
                    {current.sampleTitle}
                  </span>
                  <span className="text-[10px] font-mono text-[#9FA3A3]">
                    Section {activeSection + 1} of 6
                  </span>
                </div>

                {/* Interactive Section Preview */}
                <div className="mb-6">
                  {current.sampleContent}
                </div>
              </div>

              {/* Document Footer & Call to Action */}
              <div className="pt-6 border-t border-[#252B2F]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#9FA3A3]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#61B58A]" />
                    <span>Formatted for direct asset recovery & claims</span>
                  </div>

                  <Button
                    onClick={onOpenIntake}
                    className="w-full sm:w-auto bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] text-xs font-bold uppercase tracking-widest px-6 h-10 rounded-lg shadow-lg shadow-[#E15D44]/20 transition-colors"
                  >
                    Recover Your Scam Funds
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
