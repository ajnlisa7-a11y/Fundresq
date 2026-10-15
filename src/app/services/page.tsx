import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Cryptocurrency Tracing & Fund Recovery Services | Fundresq',
  description:
    'Explore Fundresq services: blockchain transaction tracing, wallet security investigations, and direct crypto fund recovery coordination.',
  alternates: {
    canonical: 'https://fundresq.com/services',
  },
};

export default function ServicesIndexPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <main className="min-h-screen bg-[#090B0C] text-[#F2EFE9] selection:bg-[#E15D44] selection:text-[#F2EFE9]">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-24 md:pt-28 bg-[#090B0C] border-b border-[#252B2F]/60">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9FA3A3]">
            <Link href="/" className="hover:text-[#F2EFE9] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#252B2F]" />
            <span className="text-[#E15D44] font-bold">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-[#090B0C] border-b border-[#252B2F] relative overflow-hidden text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#E15D44] block mb-3">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold text-[#F2EFE9] tracking-tight mb-6">
            Tracing & recovery services
          </h1>
          <p className="text-base sm:text-lg text-[#9FA3A3] max-w-2xl mx-auto leading-relaxed">
            Professional blockchain tracing, wallet examination, and direct fund recovery coordination.
          </p>
        </div>
      </section>

      {/* All 3 Services Grid */}
      <section className="py-20 bg-[#111416] border-b border-[#252B2F]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.slug}
                className="p-8 rounded-2xl bg-[#090B0C] border border-[#252B2F] hover:border-[#E15D44] transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#E15D44] bg-[#111416] px-3 py-1 rounded-full border border-[#252B2F]">
                      Service {service.number}
                    </span>
                  </div>

                  <h2 className="text-2xl font-headline font-bold text-[#F2EFE9] mb-3 group-hover:text-[#E15D44] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs md:text-sm text-[#E15D44] font-mono font-semibold mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-xs md:text-sm text-[#9FA3A3] leading-relaxed mb-6">
                    {service.problemSolved}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#252B2F]">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F2EFE9]/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#61B58A] shrink-0 mt-0.5" />
                        <span>{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#252B2F]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between text-xs font-mono font-bold text-[#E15D44] hover:text-[#F0836D] transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
