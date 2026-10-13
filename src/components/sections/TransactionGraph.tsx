'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  ShieldCheck, 
  AlertOctagon, 
  Building2, 
  Layers, 
  CheckCircle2, 
  Clock,
  Sparkles
} from 'lucide-react';

interface TrailNode {
  id: string;
  name: string;
  role: 'origin' | 'risk' | 'background' | 'verified_hop' | 'destination';
  semanticColor: 'iris' | 'red' | 'grey' | 'positive' | 'blue';
  address: string;
  network: string;
  volume: string;
  timestamp: string;
  findings: string;
  cx: number;
  cy: number;
}

const TRAIL_NODES: TrailNode[] = [
  {
    id: 'n1',
    name: 'Your Wallet',
    role: 'origin',
    semanticColor: 'iris',
    address: '0x71C9...8E42',
    network: 'Ethereum Mainnet',
    volume: '142.50 ETH ($484,500)',
    timestamp: '14 May 2026 03:14:22 UTC',
    findings: 'Where your funds were originally held before the unauthorized transfer occurred.',
    cx: 80,
    cy: 70,
  },
  {
    id: 'n2',
    name: 'Thief’s Address',
    role: 'risk',
    semanticColor: 'red',
    address: '0x32A1...9F0D',
    network: 'Ethereum Mainnet',
    volume: '142.50 ETH',
    timestamp: '14 May 2026 03:19:04 UTC',
    findings: 'The first address that received your funds. Flagged in security registries as connected to unauthorized wallet drains.',
    cx: 280,
    cy: 70,
  },
  {
    id: 'n3',
    name: 'Unrelated Noise',
    role: 'background',
    semanticColor: 'grey',
    address: '0x09F2...77C1',
    network: 'Ethereum Mainnet',
    volume: '4.20 ETH',
    timestamp: '14 May 2026 03:22:11 UTC',
    findings: 'Unrelated network traffic. Our tracing filters this out so the real trail remains clear.',
    cx: 480,
    cy: 70,
  },
  {
    id: 'n4_peel',
    name: 'Splitting Wallet',
    role: 'background',
    semanticColor: 'grey',
    address: '0x44D0...BB89',
    network: 'Arbitrum One',
    volume: '18.50 ETH equivalent',
    timestamp: '14 May 2026 03:38:50 UTC',
    findings: 'The thief split off a smaller portion of funds here to confuse tracking, but both branches remain fully visible.',
    cx: 380,
    cy: 160,
  },
  {
    id: 'n5_bridge',
    name: 'Network Swap',
    role: 'verified_hop',
    semanticColor: 'iris',
    address: '0x88B4...C012',
    network: 'Arbitrum One L2',
    volume: '85.20 ETH swapped to USDC',
    timestamp: '14 May 2026 03:45:15 UTC',
    findings: 'Funds were swapped across blockchains to disguise the trail. The transfer still connects directly to the same thief.',
    cx: 280,
    cy: 250,
  },
  {
    id: 'n6_dest',
    name: 'Exchange Account',
    role: 'destination',
    semanticColor: 'positive',
    address: '0x12F8...77EA',
    network: 'Major Crypto Exchange (ID Required)',
    volume: '84.80 ETH ($288,320)',
    timestamp: '14 May 2026 05:08:44 UTC',
    findings: 'Where the funds landed: A verified deposit account on a regulated exchange where the account holder had to provide real identity documents.',
    cx: 560,
    cy: 250,
  },
];

export function TransactionGraph() {
  const [selectedNode, setSelectedNode] = useState<TrailNode>(TRAIL_NODES[0]);
  const [illuminatedStep, setIlluminatedStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
      
      if (progress < 0.25) {
        setIlluminatedStep(1);
      } else if (progress < 0.45) {
        setIlluminatedStep(2);
      } else if (progress < 0.65) {
        setIlluminatedStep(3);
      } else if (progress < 0.85) {
        setIlluminatedStep(4);
      } else {
        setIlluminatedStep(5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="capabilities" 
      className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111416] border border-[#252B2F] text-[#E15D44] text-[10px] font-mono font-bold tracking-[0.25em] uppercase mb-6">
            <Cpu className="w-3.5 h-3.5" />
            Transaction Trail Visual
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            When digital assets move, <br className="hidden sm:inline" />
            <span className="text-[#E15D44] italic">the trail doesn't disappear.</span>
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto">
            Cryptocurrency transactions leave a public record on the blockchain. We follow the transaction trail to understand where funds moved.
          </p>
        </div>

        {/* Semantic Visual Legend */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-[#111416] border border-[#252B2F] flex flex-wrap items-center justify-around gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E15D44] shadow-[0_0_10px_#E15D44]" />
            <span className="text-[#F2EFE9] font-bold">Vermilion:</span>
            <span className="text-[#9FA3A3]">The Trail of Your Stolen Funds</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#61B58A] shadow-[0_0_10px_#61B58A]" />
            <span className="text-[#F2EFE9] font-bold">Green:</span>
            <span className="text-[#9FA3A3]">Where the Funds Landed</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#252B2F]" />
            <span className="text-[#F2EFE9] font-bold">Grey:</span>
            <span className="text-[#9FA3A3]">Unrelated Traffic Filtered Out</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E24A4A] shadow-[0_0_10px_#E24A4A]" />
            <span className="text-[#F2EFE9] font-bold">Red:</span>
            <span className="text-[#9FA3A3]">The Incident Wallet</span>
          </div>
        </div>

        {/* The Signature Interactive Canvas */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#111416] border border-[#252B2F] p-6 md:p-10 shadow-2xl relative">
          
          {/* Top Status & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-[#252B2F] gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E15D44] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F2EFE9]">
                Interactive Trace: Step {illuminatedStep} of 5
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#9FA3A3]">
              <span>Scroll down to see the trail advance</span>
              <span>•</span>
              <span>Click any circle to see details</span>
            </div>
          </div>

          {/* SVG Transaction Trail Schematic */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl bg-[#090B0C] border border-[#252B2F] p-4 overflow-hidden mb-8">
            <svg viewBox="0 0 640 320" className="w-full h-full select-none">
              <defs>
                {/* Iris Glow Filter */}
                <filter id="irisGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="positiveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background ambient grid nodes */}
              <circle cx="180" cy="160" r="1.5" fill="rgba(159, 163, 163,0.12)" />
              <circle cx="460" cy="160" r="1.5" fill="rgba(159, 163, 163,0.12)" />
              <circle cx="180" cy="250" r="1.5" fill="rgba(159, 163, 163,0.12)" />

              {/* Trail Path 1: Origin to Exploit Contract (Horizontal Iris) */}
              <line 
                x1="80" y1="70" x2="280" y2="70" 
                stroke={illuminatedStep >= 1 ? '#E15D44' : '#1D2335'} 
                strokeWidth={illuminatedStep >= 1 ? '3' : '1.5'} 
                strokeLinecap="round"
                filter={illuminatedStep >= 1 ? 'url(#irisGlow)' : undefined}
                className="transition-colors duration-500"
              />

              {/* Trail Path 2: Exploit Contract to Background Dust (Horizontal right Grey) */}
              <line 
                x1="280" y1="70" x2="480" y2="70" 
                stroke="#252B2F" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
                strokeLinecap="round"
              />

              {/* Vertical Branch Down from Exploit Node: ●───│ (Iris) */}
              <line 
                x1="280" y1="70" x2="280" y2="250" 
                stroke={illuminatedStep >= 2 ? '#E15D44' : '#1D2335'} 
                strokeWidth={illuminatedStep >= 2 ? '3' : '1.5'} 
                strokeLinecap="round"
                filter={illuminatedStep >= 2 ? 'url(#irisGlow)' : undefined}
                className="transition-colors duration-500"
              />

              {/* Branch ├────● into Intermediary Peel (Grey) */}
              <line 
                x1="280" y1="160" x2="380" y2="160" 
                stroke="#252B2F" 
                strokeWidth="1.5" 
                strokeDasharray="3 3"
                strokeLinecap="round"
              />

              {/* Trail Path 3: Bridge Node to Positive Endpoint ●────────────◎ */}
              <line 
                x1="280" y1="250" x2="560" y2="250" 
                stroke={illuminatedStep >= 4 ? '#61B58A' : '#1D2335'} 
                strokeWidth={illuminatedStep >= 4 ? '3' : '1.5'} 
                strokeLinecap="round"
                filter={illuminatedStep >= 4 ? 'url(#positiveGlow)' : undefined}
                className="transition-colors duration-500"
              />

              {/* Render The Nodes */}
              {TRAIL_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                
                let fill = '#252B2F';
                let stroke = '#191D20';
                let filterId: string | undefined = undefined;

                if (node.semanticColor === 'iris') {
                  fill = '#E15D44';
                  stroke = '#F0836D';
                  filterId = 'url(#irisGlow)';
                } else if (node.semanticColor === 'positive') {
                  fill = '#61B58A';
                  stroke = '#80E0BC';
                  filterId = 'url(#positiveGlow)';
                } else if (node.semanticColor === 'red') {
                  fill = '#E24A4A';
                  stroke = '#FF7D7D';
                  filterId = 'url(#redGlow)';
                }

                return (
                  <g 
                    key={node.id} 
                    onClick={() => setSelectedNode(node)} 
                    className="cursor-pointer group"
                  >
                    {isSelected && (
                      <circle 
                        cx={node.cx} 
                        cy={node.cy} 
                        r="18" 
                        fill="none" 
                        stroke={stroke} 
                        strokeWidth="1.5" 
                        strokeDasharray="2 2"
                        className="animate-spin"
                        style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                      />
                    )}

                    {node.role === 'destination' ? (
                      <>
                        <circle 
                          cx={node.cx} 
                          cy={node.cy} 
                          r="14" 
                          fill="none" 
                          stroke="#61B58A" 
                          strokeWidth="2.5" 
                          filter="url(#positiveGlow)"
                        />
                        <circle 
                          cx={node.cx} 
                          cy={node.cy} 
                          r="6" 
                          fill="#61B58A" 
                        />
                      </>
                    ) : (
                      <circle 
                        cx={node.cx} 
                        cy={node.cy} 
                        r={node.role === 'risk' ? 10 : 8} 
                        fill={fill} 
                        stroke={stroke} 
                        strokeWidth="2"
                        filter={filterId}
                        className="transition-transform group-hover:scale-125"
                      />
                    )}

                    <text 
                      x={node.cx} 
                      y={node.cy - 16} 
                      textAnchor="middle" 
                      fill={isSelected ? '#F2EFE9' : '#9FA3A3'} 
                      fontSize="9" 
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {node.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Node Dossier Inspector */}
          <div className="bg-[#090B0C] border border-[#252B2F] rounded-xl p-5 md:p-6 text-xs font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#252B2F] gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#E15D44] font-bold">
                  Selected Step:
                </span>
                <span className="text-sm font-bold text-[#F2EFE9]">
                  {selectedNode.name}
                </span>
                <span className={`px-2 py-0.5 rounded text-[9px] uppercase font-bold border ${
                  selectedNode.semanticColor === 'iris' ? 'bg-[#E15D44]/10 text-[#F0836D] border-[#E15D44]/30' :
                  selectedNode.semanticColor === 'positive' ? 'bg-[#61B58A]/10 text-[#61B58A] border-[#61B58A]/30' :
                  selectedNode.semanticColor === 'red' ? 'bg-[#E24A4A]/10 text-[#FF7D7D] border-[#E24A4A]/30' :
                  'bg-white/5 text-[#9FA3A3] border-[#252B2F]'
                }`}>
                  {selectedNode.role === 'origin' ? 'STARTING POINT' :
                   selectedNode.role === 'risk' ? 'INCIDENT ADDRESS' :
                   selectedNode.role === 'destination' ? 'IDENTIFIED ENDPOINT' :
                   selectedNode.role === 'verified_hop' ? 'CROSS-CHAIN SWAP' : 'SPLIT TRANSFER'}
                </span>
              </div>

              <div className="text-[10px] text-[#9FA3A3]">
                {selectedNode.timestamp}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="p-3 rounded bg-[#111416] border border-[#252B2F]">
                <span className="text-[9px] text-[#9FA3A3] block mb-1 uppercase">Wallet Address</span>
                <span className="text-[#F2EFE9] font-bold truncate block">{selectedNode.address}</span>
              </div>

              <div className="p-3 rounded bg-[#111416] border border-[#252B2F]">
                <span className="text-[9px] text-[#9FA3A3] block mb-1 uppercase">Network / Location</span>
                <span className="text-[#F2EFE9] truncate block">{selectedNode.network}</span>
              </div>

              <div className="p-3 rounded bg-[#111416] border border-[#252B2F]">
                <span className="text-[9px] text-[#9FA3A3] block mb-1 uppercase">Amount Moved</span>
                <span className="text-[#61B58A] font-bold truncate block">{selectedNode.volume}</span>
              </div>
            </div>

            <p className="text-[#9FA3A3] leading-relaxed text-xs">
              <strong className="text-[#F2EFE9] font-bold">What this means: </strong>
              {selectedNode.findings}
            </p>
          </div>

          {/* Progressive Disclosure Link */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-[#111416] border border-[#252B2F] max-w-5xl mx-auto">
            <div className="text-left">
              <span className="text-xs font-bold text-[#F2EFE9] block mb-0.5">
                Want to understand the technical mechanics?
              </span>
              <span className="text-xs text-[#9FA3A3]">
                Learn how transaction hashes, address clustering, cross-chain bridges, and exchange attribution operate.
              </span>
            </div>
            <a
              href="/how-tracing-works"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#E15D44] hover:text-[#F0836D] transition-colors py-2 px-4 rounded-lg bg-[#191D20] border border-[#252B2F] hover:border-[#E15D44]/50 shrink-0"
            >
              How transaction tracing works <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
