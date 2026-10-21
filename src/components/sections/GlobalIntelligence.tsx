'use client';

import { MapPin } from 'lucide-react';

export function GlobalIntelligence() {
  const hubs = [
    { region: 'United Kingdom', focus: 'Reports prepared for Action Fraud, police cybercrime teams, and High Court orders.', status: 'Supported' },
    { region: 'North America', focus: 'Evidence formatted for local police departments, FBI reporting, and US civil proceedings.', status: 'Supported' },
    { region: 'European Union', focus: 'Documentation aligned with national cyber police units and EU-licensed exchanges.', status: 'Supported' },
    { region: 'International & Offshore', focus: 'Tracing funds into major global and offshore cryptocurrency exchange accounts.', status: 'Supported' },
  ];

  return (
    <section id="global" className="py-24 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Global Scope
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Cryptocurrency moves globally. <br />
            <span className="text-[#E15D44] italic">So do transaction trails.</span>
          </h2>
          <p className="text-base md:text-lg text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto font-normal">
            Funds can move between wallets, platforms, blockchains and countries quickly. Fundoraid investigates the available transaction trail wherever it leads, subject to the scope of the case and available data.
          </p>
        </div>

        {/* Global Schematic Representation */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#191D20] border border-[#252B2F] p-6 md:p-10 shadow-2xl relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* SVG Global Network Arc Matrix */}
            <div className="relative aspect-video rounded-xl bg-[#090B0C] border border-[#252B2F] p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 500 300" className="w-full h-full opacity-80">
                <defs>
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E15D44" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#6DA7B5" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Subtle world grid lines */}
                <circle cx="250" cy="150" r="110" fill="none" stroke="rgba(159, 163, 163,0.12)" strokeDasharray="3 3" />
                <circle cx="250" cy="150" r="70" fill="none" stroke="rgba(159, 163, 163,0.12)" strokeDasharray="3 3" />
                <line x1="50" y1="150" x2="450" y2="150" stroke="rgba(159, 163, 163,0.12)" />
                <line x1="250" y1="30" x2="250" y2="270" stroke="rgba(159, 163, 163,0.12)" />

                {/* Nodes */}
                <circle cx="140" cy="110" r="4" fill="#E15D44" /> {/* US East */}
                <circle cx="260" cy="100" r="4" fill="#E15D44" /> {/* London */}
                <circle cx="290" cy="115" r="4" fill="#E15D44" /> {/* Zurich */}
                <circle cx="390" cy="160" r="4" fill="#6DA7B5" /> {/* Singapore */}
                <circle cx="350" cy="140" r="4" fill="#6DA7B5" /> {/* Dubai */}

                {/* Connecting Forensic Arcs */}
                <path d="M 140 110 Q 200 60 260 100" fill="none" stroke="url(#arcGrad)" strokeWidth="1.5" />
                <path d="M 260 100 Q 300 80 350 140" fill="none" stroke="url(#arcGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
                <path d="M 350 140 Q 370 150 390 160" fill="none" stroke="#6DA7B5" strokeWidth="1.5" />

                {/* Telemetry Labels */}
                <text x="140" y="98" fill="#F2EFE9" fontSize="8" fontFamily="monospace" textAnchor="middle">NYC / DE</text>
                <text x="260" y="88" fill="#F2EFE9" fontSize="8" fontFamily="monospace" textAnchor="middle">LDN</text>
                <text x="350" y="128" fill="#F2EFE9" fontSize="8" fontFamily="monospace" textAnchor="middle">DXB</text>
                <text x="390" y="180" fill="#6DA7B5" fontSize="8" fontFamily="monospace" textAnchor="middle">SGP</text>
              </svg>

              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[9px] font-mono text-[#9FA3A3] bg-[#111416]/90 px-2.5 py-1 rounded border border-[#252B2F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61B58A] animate-ping" />
                Cross-Border Protocol Corroboration
              </div>
            </div>

            {/* Jurisdiction Hub Highlights */}
            <div className="space-y-3.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E15D44] font-bold block mb-1">
                Supported Legal Contexts:
              </span>
              {hubs.map((hub, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-[#090B0C] border border-[#252B2F] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F2EFE9] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E15D44]" />
                      {hub.region}
                    </span>
                    <span className="text-[9px] font-mono text-[#61B58A]">
                      {hub.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#9FA3A3] leading-snug pl-5">
                    {hub.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#9FA3A3]/80 max-w-xl mx-auto">
          Please note: Fundoraid focuses on tracing diverted cryptocurrency transactions and executing direct scam fund recovery actions.
        </div>
      </div>
    </section>
  );
}
