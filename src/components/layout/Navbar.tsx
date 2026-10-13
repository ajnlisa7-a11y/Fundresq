'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FundresqLogo } from '@/components/ui/fundresq-logo';

interface NavbarProps {
  onOpenIntake?: () => void;
}

export function Navbar({ onOpenIntake }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#incident-triage', label: 'What Happened' },
    { href: '/how-tracing-works', label: 'How Tracing Works' },
    { href: '/#services', label: 'Investigations' },
    { href: '/#insights', label: 'Intelligence' },
    { href: '/#why-fundresq', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090B0C]/90 backdrop-blur-md border-b border-[#252B2F]">
      <div className="container mx-auto px-4 md:px-6 h-18 md:h-20 flex items-center justify-between">
        {/* Brand Monogram & Wordmark */}
        <Link href="/" className="group">
          <FundresqLogo size="md" />
        </Link>

        {/* Desktop Nav Items - Exactly 5 Essential Links */}
        <div className="hidden lg:flex items-center gap-8 text-[12px] font-mono font-bold uppercase tracking-wider text-[#9FA3A3]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#E15D44] transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={onOpenIntake}
            className="text-[11px] font-mono uppercase tracking-widest text-[#9FA3A3] hover:text-[#F2EFE9] transition-colors flex items-center gap-1.5"
          >
            <Lock className="w-3 h-3 text-[#E15D44]" /> Client Portal
          </button>
          
          <Button
            onClick={onOpenIntake}
            className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest px-5 h-10 shadow-lg shadow-[#E15D44]/20 rounded-lg transition-all"
          >
            Start a Case
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <Button
            onClick={onOpenIntake}
            size="sm"
            className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] font-bold text-[10px] uppercase tracking-wider px-3 h-8"
          >
            Start Case
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#9FA3A3] hover:text-[#F2EFE9]"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111416] border-b border-[#252B2F] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-[#9FA3A3] hover:text-[#E15D44] transition-colors border-b border-[#252B2F]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenIntake && onOpenIntake();
              }}
              className="w-full bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] font-bold text-xs uppercase tracking-widest py-3"
            >
              Start a Confidential Case Review
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
