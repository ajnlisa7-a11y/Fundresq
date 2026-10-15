'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can cryptocurrency really be traced?',
      a: 'Yes. Major blockchains like Bitcoin, Ethereum, Tron, and Solana are permanent public ledgers. Every transaction is recorded forever. We follow the movement of funds from your wallet through any intermediate hops, token swaps, and bridges directly to the exchange deposit accounts where the recipient deposited them.',
    },
    {
      q: 'Can you guarantee that my stolen crypto will be recovered?',
      a: 'No, and please be extremely wary of anyone who promises they can. No legitimate company can guarantee crypto recovery or "hack back" a wallet. What Fundresq provides is verified proof: we trace where your money went, identify destination accounts, and deliver a formal report that law enforcement, solicitors, or exchange fraud desks need to request account freezes.',
    },
    {
      q: 'What information do I need to get started?',
      a: 'The most useful details are your wallet address, the transaction ID (TxID or transaction hash), and the approximate date and time. If you have emails, website links, or communications with the platform or scammer, saving those is also very helpful.',
    },
    {
      q: 'How quickly should I start an investigation?',
      a: 'As soon as possible. While the blockchain record is permanent and will never disappear, scammers often attempt to cash out through exchanges quickly. Tracing funds early gives you the best opportunity to provide evidence to law enforcement before assets are withdrawn.',
    },
    {
      q: 'Can police and lawyers actually use your reports?',
      a: 'Yes. Our reports are written specifically for non-technical readers. Instead of overwhelming police officers or lawyers with raw code, we provide clear chronological summaries, verified timelines, and exact exchange accounts ready for formal reporting or subpoena requests.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Answering your questions
          </h2>
          <p className="text-base sm:text-lg text-[#9FA3A3] font-normal max-w-xl mx-auto leading-relaxed">
            Straightforward answers about blockchain tracing, evidence reports, and what is realistically possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#191D20] border border-[#252B2F] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#090B0C]/40 transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-[#F2EFE9] pr-2">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#E15D44] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 pt-2 text-xs md:text-sm text-[#9FA3A3] leading-relaxed border-t border-[#252B2F] bg-[#090B0C]/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
