'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      q: 'Can cryptocurrency really be traced?',
      a: 'Yes. Contrary to common belief, cryptocurrency is not anonymous cash. Major blockchains like Bitcoin, Ethereum, Tron, and Solana are permanent public records. Every transfer is logged forever. Our job is to follow the money from your wallet through any splits or swaps, right to the exchange accounts where the recipient deposited the funds.',
    },
    {
      q: 'Can you guarantee that my stolen crypto will be recovered?',
      a: 'No, and please be very cautious of anyone who says they can. No legitimate company can guarantee crypto recovery. Anyone claiming they can "hack back" your coins or offering a 100% guarantee is running an advance-fee recovery scam. What Fundresq provides is verified proof: we trace where your money went, pinpoint destination accounts, and provide a clear written report that police and lawyers need to request an account freeze.',
    },
    {
      q: 'What information do I need to get started?',
      a: 'The most important information is your wallet address, the transaction ID (also called a TxID or transaction hash), and the approximate date and time of the incident. If you were communicating with an investment platform or scammer, saving emails, website links, or chat messages is also very helpful.',
    },
    {
      q: 'How quickly should I start an investigation?',
      a: 'As soon as you can. While the blockchain record is permanent and will never be deleted, the person who took your funds may try to cash out through an exchange. Identifying the destination account early gives you the best opportunity to provide evidence to law enforcement before the funds are withdrawn.',
    },
    {
      q: 'Can police and lawyers actually use your reports?',
      a: 'Yes. Our reports are written specifically for non-technical readers. Instead of overwhelming police officers or solicitors with raw blockchain code, we provide clear summaries, verified timelines, and exact exchange accounts ready for formal reporting or subpoena requests.',
    },
    {
      q: 'Will my information be kept confidential?',
      a: 'Yes, completely. Your identity, wallet addresses, and case details are treated with strict confidentiality under non-disclosure obligations. We never share or sell your information to any third party.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#111416] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-4">
            Answers you can trust.
          </h2>
          <p className="text-sm md:text-base text-[#9FA3A3] leading-relaxed max-w-2xl mx-auto">
            Honest, straightforward information about how blockchain tracing works, what is realistically possible, and how to protect yourself.
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
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#090B0C]/40 transition-colors"
                >
                  <span className="text-sm font-bold text-[#F2EFE9] pr-2">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#E15D44] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#9FA3A3] leading-relaxed border-t border-[#252B2F] bg-[#090B0C]/30">
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
