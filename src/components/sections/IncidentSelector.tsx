'use client';

import { useState } from 'react';
import { 
  ShieldAlert, 
  TrendingDown, 
  Building2, 
  Search, 
  Scale, 
  Briefcase, 
  UserX,
  ArrowRight, 
  CheckCircle2, 
  FileWarning, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IncidentSelectorProps {
  onSelectCase: (caseId: string) => void;
}

export const INCIDENT_TYPES = [
  {
    id: 'stolen',
    title: 'My crypto was stolen',
    subtitle: 'Someone accessed my wallet or account without permission.',
    icon: ShieldAlert,
    buttonLabel: 'Get help →',
    timelineSpeed: 'Act quickly (first 72 hours)',
    viability: 'Clear blockchain trail',
    guidance: 'We trace the stolen coins from your wallet through every intermediate address, network bridges, and recipient endpoints to take direct action and recover your scam funds.',
    actionText: 'Recover Stolen Crypto',
    checklist: [
      'Your wallet address (where funds were sent from)',
      'The transaction ID (TxID) of the unauthorized transfer',
      'The address that received the stolen funds'
    ]
  },
  {
    id: 'investment_scam',
    title: 'I was targeted by an investment scam',
    subtitle: 'I sent cryptocurrency to a trading platform, broker, or investment scheme.',
    icon: TrendingDown,
    buttonLabel: 'Get help →',
    timelineSpeed: 'Time-sensitive',
    viability: 'Direct scam fund recovery',
    guidance: 'Fraudulent investment platforms often pretend you are making profits while quietly moving your crypto into their own accounts. We trace where your deposits actually went, proving what happened and identifying where the money ended up to initiate recovery.',
    actionText: 'Recover Investment Scam Funds',
    checklist: [
      'All deposit transaction IDs (TxID) and dates',
      'The website URL and any chat messages from the platform',
      'Screenshots of the account portal or balance claims'
    ]
  },
  {
    id: 'romance_scam',
    title: 'I was targeted by a romance scam',
    subtitle: 'Someone I met online, on dating apps or social media persuaded me to send crypto.',
    icon: UserX,
    buttonLabel: 'Get help →',
    timelineSpeed: 'Act quickly',
    viability: 'Multi-hop network tracing',
    guidance: 'Romance and relationship scams involve fraudsters building trust before directing victims to fake crypto investment portals. We follow the movement of your funds through intermediary wallets to identify destination endpoints and take direct action to recover your scam funds.',
    actionText: 'Recover Romance Scam Funds',
    checklist: [
      'Wallet addresses and transaction hashes (TxIDs) of your transfers',
      'The website URL or platform names provided by the contact',
      'Communication logs or chat history you have saved'
    ]
  },
  {
    id: 'compromised',
    title: 'My wallet was compromised',
    subtitle: 'I noticed transactions I didn\'t make or approve.',
    icon: Building2,
    buttonLabel: 'Get help →',
    timelineSpeed: 'Urgent',
    viability: 'Direct wallet tracking',
    guidance: 'When a wallet is compromised by a malicious permit or unauthorized private key access, funds are often quickly swept. We trace the destination addresses and coordinate swift recovery actions to reclaim your assets.',
    actionText: 'Recover Drained Wallet Funds',
    checklist: [
      'Your affected wallet address',
      'Transaction IDs of the unexpected transfers',
      'Approximate time the compromise was noticed'
    ]
  },
  {
    id: 'transaction',
    title: 'I need a transaction investigated',
    subtitle: 'I have a wallet address or transaction I want examined.',
    icon: Search,
    buttonLabel: 'Start an investigation →',
    timelineSpeed: 'Flexible schedule',
    viability: 'Complete historical timeline',
    guidance: 'We analyze any target wallet address or transaction to see where its money came from, which other wallets it communicates with, and which services it uses. You receive an easy-to-understand breakdown to support direct asset recovery.',
    actionText: 'Start Scam Fund Recovery',
    checklist: [
      'The public wallet address or transaction hash you want investigated',
      'The date range or specific transactions in question',
      'Any known background details or context'
    ]
  },
  {
    id: 'wrong_place',
    title: 'I sent funds to the wrong place',
    subtitle: 'I need help understanding where the transaction went.',
    icon: Scale,
    buttonLabel: 'Review the transaction →',
    timelineSpeed: 'Standard review',
    viability: 'On-chain verification',
    guidance: 'If you sent cryptocurrency to an incorrect recipient, wrong network, or unsupported contract address, we inspect the ledger to confirm where the assets currently reside and execute direct recovery with the receiving platform.',
    actionText: 'Recover Diverted Assets',
    checklist: [
      'Sending wallet address',
      'Receiving address you intended or entered',
      'Transaction ID (TxID) and network used'
    ]
  },
  {
    id: 'professional',
    title: "I'm acting for a client or business",
    subtitle: 'I need professional support with a digital asset matter.',
    icon: Briefcase,
    buttonLabel: 'Professional enquiries →',
    timelineSpeed: 'Priority intake',
    viability: 'Formal forensic affidavit',
    guidance: 'We work directly with corporate counsel, liquidators, and compliance units. We provide clear technical evidence packets, transaction chronologies, and expert declarations to execute the direct recovery of corporate or client funds.',
    actionText: 'Initiate Fund Recovery Matter',
    checklist: [
      'Firm or agency name and matter reference',
      'Immediate requirement (e.g. recovery claim evidence, formal statement)',
      'List of relevant transaction hashes and wallet addresses'
    ]
  }
];

export function IncidentSelector({ onSelectCase }: IncidentSelectorProps) {
  const [activeId, setActiveId] = useState('stolen');
  const activeIncident = INCIDENT_TYPES.find((item) => item.id === activeId) || INCIDENT_TYPES[0];

  return (
    <section id="incident-triage" className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Case Triage
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            What happened?
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed">
            Choose the option that best describes your situation.
          </p>
        </div>

        {/* 6 Selectable Incident Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
          {INCIDENT_TYPES.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeId;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 relative border cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#191D20] border-[#E15D44] shadow-[0_0_25px_rgba(225, 93, 68,0.18)] ring-1 ring-[#E15D44]'
                    : 'bg-[#111416] border-[#252B2F] hover:border-[#E15D44]/50 hover:bg-[#191D20]/80'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#E15D44] text-[#090B0C]' : 'bg-[#191D20] text-[#E15D44] group-hover:bg-[#E15D44]/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#E15D44] bg-[#E15D44]/10 px-2.5 py-0.5 rounded border border-[#E15D44]/30 font-bold">
                        Selected
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#F2EFE9] mb-2 group-hover:text-[#E15D44] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9FA3A3] leading-relaxed mb-4">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#252B2F]/60 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCase(item.id);
                    }}
                    className="text-xs font-mono font-bold text-[#E15D44] group-hover:text-[#F0836D] flex items-center gap-1 hover:underline"
                  >
                    {item.buttonLabel}
                  </button>
                  <span className="text-[10px] font-mono text-[#9FA3A3]/60">
                    Click to inspect
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Contextual Guidance Panel */}
        <div className="max-w-4xl mx-auto rounded-xl bg-[#111416] border border-[#252B2F] p-6 md:p-8 shadow-2xl relative">
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#E15D44] bg-[#090B0C] px-2.5 py-1 rounded border border-[#E15D44]/30">
              Scenario Guide: {activeIncident.title}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-[#252B2F] text-xs">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA3A3] block mb-1">
                Timing
              </span>
              <div className="flex items-center gap-2 font-bold text-[#F2EFE9]">
                <Clock className="w-3.5 h-3.5 text-[#E15D44]" />
                {activeIncident.timelineSpeed}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA3A3] block mb-1">
                What We Trace
              </span>
              <div className="flex items-center gap-2 font-bold text-[#F2EFE9]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#61B58A]" />
                {activeIncident.viability}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9FA3A3] block mb-1">
                Evidence Format
              </span>
              <div className="flex items-center gap-2 font-bold text-[#F2EFE9]">
                <FileWarning className="w-3.5 h-3.5 text-[#E15D44]" />
                Court & Police Ready
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2EFE9]">
              How we help in this situation:
            </h4>
            <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
              {activeIncident.guidance}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#E15D44] block mb-2 font-bold">
                What to save right now:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9FA3A3]">
                {activeIncident.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-[#090B0C] p-2.5 rounded border border-[#252B2F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#61B58A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#252B2F]">
            <span className="text-[11px] text-[#9FA3A3] italic">
              All case details are kept 100% confidential. No recovery guarantees or upfront fee traps.
            </span>
            <Button
              onClick={() => onSelectCase(activeIncident.id)}
              className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest h-11 px-6 shadow-xl shadow-[#E15D44]/20 w-full sm:w-auto transition-colors"
            >
              {activeIncident.actionText}
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
