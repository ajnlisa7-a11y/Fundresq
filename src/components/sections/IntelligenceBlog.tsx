'use client';

import { ArrowRight, Clock } from 'lucide-react';

export function IntelligenceBlog() {
  const articles = [
    {
      title: 'What happens when stolen crypto moves to another blockchain?',
      category: 'Cross-Chain Tracing',
      readTime: '4 min read',
      excerpt: 'How token swaps and bridge transfers work, and why transactions leave an unbroken trail between different blockchains.',
      slug: '#',
    },
    {
      title: 'Can you find out who owns a crypto wallet?',
      category: 'Wallet Analysis',
      readTime: '5 min read',
      excerpt: 'Why crypto wallets are pseudonymous until funds interact with exchanges, merchant services or real-world deposit accounts.',
      slug: '#',
    },
    {
      title: 'What to save after your crypto is stolen',
      category: 'Evidence Guide',
      readTime: '4 min read',
      excerpt: 'The essential transaction IDs, wallet addresses and timestamps to preserve before contacting investigators or authorities.',
      slug: '#',
    },
    {
      title: 'Why "guaranteed crypto recovery" is almost always a scam',
      category: 'Scam Alert',
      readTime: '5 min read',
      excerpt: 'How secondary recovery scammers target recent victims, and the telltale signs that reveal they cannot do what they claim.',
      slug: '#',
    },
  ];

  return (
    <section id="insights" className="py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 max-w-6xl mx-auto">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
              Guides & Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#F2EFE9] tracking-tight">
              Fundresq Intelligence
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#9FA3A3] max-w-md leading-relaxed">
            Simple guides to cryptocurrency investigations, scams, transaction tracing and digital asset security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-7 rounded-xl bg-[#111416] border border-[#252B2F] hover:border-[#E15D44]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-4 text-[#9FA3A3]">
                  <span className="text-[#E15D44] font-bold uppercase tracking-wider">{art.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                </div>

                <h3 className="text-sm font-bold text-[#F2EFE9] mb-3 group-hover:text-[#F0836D] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#9FA3A3] leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#252B2F] flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#E15D44] group-hover:text-[#F0836D] group-hover:translate-x-1 transition-all">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
