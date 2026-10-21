'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Hash, 
  Network, 
  Eye, 
  Layers, 
  Building2, 
  Search, 
  AlertTriangle, 
  FileCheck, 
  ArrowRight, 
  ShieldCheck, 
  Lock,
  Compass,
  CheckCircle2,
  HelpCircle,
  Clock
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CaseIntakeModal } from '@/components/sections/CaseIntakeModal';
import { Button } from '@/components/ui/button';

export default function HowTracingWorksPage() {
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'mechanics' | 'attribution' | 'boundaries'>('all');

  const topics = [
    {
      id: 'txids',
      category: 'mechanics',
      tag: '01. Foundational Ledger',
      icon: Hash,
      title: 'Transaction Hashes (TXIDs) & Cryptographic Proof',
      plainEnglish: 'Every transfer is etched into a permanent, timestamped receipt that nobody can change.',
      deepDive: [
        'A transaction hash (TXID) is a unique 64-character hexadecimal identifier produced when a cryptocurrency transfer is validated and confirmed by network miners or validators.',
        'Because blockchains are cryptographically immutable, historical transaction records cannot be deleted, altered, or forged after confirmation.',
        'Investigators use the TXID as the incontrovertible starting point: it establishes the exact sender address, recipient address, block height, unix timestamp, gas fees, and token contract interaction.'
      ],
      sample: '0x8f2d5e3c7a1b490f23e817456bc91024a56d8e20f1c93a4b87e65d21c3b4a0f8'
    },
    {
      id: 'clustering',
      category: 'mechanics',
      tag: '02. Graph Analysis',
      icon: Network,
      title: 'Clustering & Address Heuristics',
      plainEnglish: 'How investigators recognise when dozens of different addresses belong to the same person or group.',
      deepDive: [
        'Scammers rarely leave stolen funds in one wallet. They split amounts into dozens of secondary wallets (known as "peel chains") to confuse victims.',
        'Investigators apply behavioral heuristics, including multi-input clustering and change-address detection, to mathematically prove that separate addresses share common private keys or operational control.',
        'By reconstructing the entire cluster, we trace the full aggregate sum rather than losing sight of fragmented micro-transfers.'
      ],
      sample: 'Common Ownership Heuristic: Input A + Input B in single transaction = Same entity controller'
    },
    {
      id: 'attribution',
      category: 'attribution',
      tag: '03. Identity Bridging',
      icon: Eye,
      title: 'Pseudonymity vs. Wallet Attribution',
      plainEnglish: 'Why crypto wallets are pseudonymous until funds touch real-world institutions.',
      deepDive: [
        'A blockchain address does not show a name, passport, or home address. It is pseudonymous: a public key derived from an underlying elliptic curve pair.',
        'Wallet attribution is the forensic process of linking pseudonymous addresses to identifiable real-world entities.',
        'Attribution occurs when an address interacts with centralised services: regulated exchanges, payment gateways, OTC brokers, or KYC-verified smart contract registries.'
      ],
      sample: 'Cluster 0x4B...81 -> Interacts with Omnibus Deposit 0x12...EA -> Attributed to Regulated Exchange Entity'
    },
    {
      id: 'bridges',
      category: 'mechanics',
      tag: '04. Multi-Network Tracking',
      icon: Layers,
      title: 'Cross-Chain Activity & Bridges',
      plainEnglish: 'What happens when stolen funds hop from Ethereum to Bitcoin, Tron, or Solana.',
      deepDive: [
        'Perpetrators often use cross-chain bridges or decentralized liquidity pools to swap assets from one blockchain to another in an attempt to break the chain of custody.',
        'However, cross-chain bridges operate through deterministic smart contracts: tokens are locked or burned on the origin chain, emitting a public event, while synthetic or native tokens are released on the destination chain.',
        'Investigators link the deposit transaction on Chain A with the corresponding release transaction on Chain B using timestamps, liquidity pool interaction IDs, and cryptographic relayer signatures.'
      ],
      sample: 'Chain 1 Lock Event [Bridge Protocol] <== Deterministic Relayer ID ==> Chain 2 Release Event'
    },
    {
      id: 'exchanges',
      category: 'attribution',
      tag: '05. Centralised Touchpoints',
      icon: Building2,
      title: 'Exchanges & Off-Ramps',
      plainEnglish: 'Where stolen crypto enters regulated accounts subject to law enforcement disclosure.',
      deepDive: [
        'To convert cryptocurrency into fiat currency (USD, GBP, EUR) or trade on global platforms, funds are typically sent to centralized exchanges (CEXs).',
        'Exchanges assign unique personal deposit addresses to each customer. When funds arrive at a personal deposit address, the exchange automatically sweeps them into an omnibus hot wallet.',
        'Identifying the personal deposit address allows legal teams and police to issue preservation requests and court disclosure orders (subpoenas) to uncover the account holder’s KYC documents and IP logs.'
      ],
      sample: 'Personal Deposit Address (Subpoena Target) -> Automated Internal Sweep -> Cold Storage Vault'
    },
    {
      id: 'tools',
      category: 'mechanics',
      tag: '06. Professional Infrastructure',
      icon: Search,
      title: 'Blockchain Explorers vs. Forensic Analytics',
      plainEnglish: 'Why checking a public block explorer is only a tiny fraction of a genuine investigation.',
      deepDive: [
        'Public block explorers (such as Etherscan, Blockchain.com, or Solscan) display single transactions in raw text format, making multi-hop investigations difficult to track.',
        'Professional investigators utilize forensic graph software that incorporates millions of verified attribution tags, sanctions lists, darknet markers, and automated taint analysis algorithms.',
        'This allows us to visualize complex multi-chain money flows, measure tainted fund percentages, and export courtroom-ready visual evidence graphs.'
      ],
      sample: 'Raw Block Explorer = Single ledger entry | Forensic Graph = Multi-hop entity map & attribution database'
    },
    {
      id: 'limitations',
      category: 'boundaries',
      tag: '07. Honest Realities',
      icon: AlertTriangle,
      title: 'Realistic Boundaries & Limitations',
      plainEnglish: 'What blockchain tracing can prove, and what it cannot do.',
      deepDive: [
        'What tracing DOES: It proves the exact movement of funds, reveals intermediary wallets, establishes cluster ownership, locates recipient deposit endpoints, and creates verified evidence to recover your scam funds.',
        'What tracing CANNOT do: No private firm has a secret "hack back" button. Private non-custodial wallets cannot be accessed without authorized intervention or legal execution.',
        'Anyone claiming "guaranteed recovery" or claiming they can magically reverse confirmed blockchain transactions is attempting to scam you a second time.'
      ],
      sample: 'Transparent Fact: Tracing provides the evidentiary proof needed for police and legal recovery pathways.'
    },
    {
      id: 'evidence',
      category: 'boundaries',
      tag: '08. Legal Rigour',
      icon: FileCheck,
      title: 'Evidence Standards for Asset Recovery & Claims',
      plainEnglish: 'Structuring findings so cybercrime units and recovery specialists can act immediately.',
      deepDive: [
        'For evidence to be actionable by law enforcement cybercrime divisions or accepted in court proceedings, it must meet strict chain-of-custody and verification standards.',
        'Fundoraid reports include RFC-3161 cryptographic timestamping, verifiable transaction hashes, entity attribution, and a clear executive timeline.',
        'This allows recovery specialists to apply for disclosure orders or banking evidence applications without delay.'
      ],
      sample: 'Chain of Custody Standard: Verifiable On-Chain Hashes + Cryptographic Timestamps + Forensic Attributions'
    }
  ];

  const filteredTopics = activeTab === 'all' 
    ? topics 
    : topics.filter(t => t.category === activeTab);

  return (
    <main className="min-h-screen bg-[#090B0C] text-[#F2EFE9] selection:bg-[#E15D44] selection:text-[#F2EFE9]">
      <Navbar onOpenIntake={() => setIsIntakeOpen(true)} />

      {/* Header Banner */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,93,68,0.12),transparent)]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
            <Compass className="w-3.5 h-3.5" />
            Progressive Disclosure • Technical Reference
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-6">
            How Transaction Tracing <br />
            <span className="text-[#E15D44] italic">Actually Works.</span>
          </h1>

          <p className="text-base md:text-xl text-[#9FA3A3] leading-relaxed max-w-3xl mb-8">
            The homepage explains what we do in plain language. This page is for anyone who wants to understand the exact technical mechanics: transaction hashes, clustering algorithms, wallet attribution, bridges, exchanges, and evidentiary standards.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#E15D44] text-[#090B0C]' 
                  : 'bg-[#111416] text-[#9FA3A3] border border-[#252B2F] hover:text-[#F2EFE9]'
              }`}
            >
              All Topics ({topics.length})
            </button>
            <button
              onClick={() => setActiveTab('mechanics')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'mechanics' 
                  ? 'bg-[#E15D44] text-[#090B0C]' 
                  : 'bg-[#111416] text-[#9FA3A3] border border-[#252B2F] hover:text-[#F2EFE9]'
              }`}
            >
              Ledger & Mechanics (4)
            </button>
            <button
              onClick={() => setActiveTab('attribution')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'attribution' 
                  ? 'bg-[#E15D44] text-[#090B0C]' 
                  : 'bg-[#111416] text-[#9FA3A3] border border-[#252B2F] hover:text-[#F2EFE9]'
              }`}
            >
              Identity & Exchanges (2)
            </button>
            <button
              onClick={() => setActiveTab('boundaries')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'boundaries' 
                  ? 'bg-[#E15D44] text-[#090B0C]' 
                  : 'bg-[#111416] text-[#9FA3A3] border border-[#252B2F] hover:text-[#F2EFE9]'
              }`}
            >
              Limits & Evidence (2)
            </button>
          </div>
        </div>
      </section>

      {/* Main Topic Deep-Dives */}
      <section className="py-20 md:py-24 bg-[#090B0C]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-12">
          {filteredTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <article
                key={topic.id}
                id={topic.id}
                className="p-8 md:p-10 rounded-2xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44]/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#191D20] border border-[#252B2F] flex items-center justify-center text-[#E15D44] group-hover:bg-[#E15D44] group-hover:text-[#090B0C] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9FA3A3]">
                      {topic.tag}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#E15D44] bg-[#191D20] px-3 py-1 rounded-full border border-[#252B2F]">
                    <CheckCircle2 className="w-3 h-3" /> Verifiable on-chain
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[#F2EFE9] mb-3 group-hover:text-[#F0836D] transition-colors">
                  {topic.title}
                </h2>

                <p className="text-sm md:text-base text-[#F2EFE9]/90 font-medium mb-6 bg-[#191D20]/70 p-4 rounded-xl border border-[#252B2F]">
                  💡 <span className="italic">{topic.plainEnglish}</span>
                </p>

                <div className="space-y-3 mb-6">
                  {topic.deepDive.map((para, pIdx) => (
                    <p key={pIdx} className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Technical Sample Box */}
                <div className="p-3.5 rounded-lg bg-[#090B0C] border border-[#252B2F] font-mono text-[11px] text-[#9FA3A3] flex items-center gap-2 overflow-x-auto">
                  <span className="text-[#E15D44] font-bold select-none">DATA:</span>
                  <span className="text-[#F2EFE9]">{topic.sample}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Conversion Banner: Case Review */}
      <section className="py-20 bg-[#111416] border-t border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191D20] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
            <Lock className="w-3.5 h-3.5" />
            Confidential Case Review
          </div>

          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Have a transaction you need examined?
          </h2>

          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed max-w-xl mx-auto mb-8">
            Tell us what happened. Our investigators review the available information, follow relevant fund movements, and explain what the evidence shows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsIntakeOpen(true)}
              className="bg-[#E15D44] text-[#090B0C] hover:bg-[#F0836D] font-bold text-xs uppercase tracking-widest px-8 h-12 rounded-lg shadow-lg shadow-[#E15D44]/20 transition-all"
            >
              Tell Us What Happened
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Link
              href="/"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#9FA3A3] hover:text-[#F2EFE9] transition-colors py-3 px-6 rounded-lg bg-[#191D20] border border-[#252B2F]"
            >
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer onOpenIntake={() => setIsIntakeOpen(true)} />

      <CaseIntakeModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
      />
    </main>
  );
}
