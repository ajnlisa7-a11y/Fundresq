'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FundresqLogo } from '@/components/ui/fundresq-logo';

interface NavbarProps {
  onOpenIntake?: () => void;
}

export function Navbar({ onOpenIntake }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScamsDropdownOpen, setIsScamsDropdownOpen] = useState(false);
  const [isMobileScamsOpen, setIsMobileScamsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scamTypes = [
    { label: 'Investment Scams', href: '/#what-happened' },
    { label: 'Romance Scams', href: '/#what-happened' },
    { label: 'Crypto Scams', href: '/#what-happened' },
    { label: 'Stolen Cryptocurrency', href: '/#what-happened' },
    { label: 'Wallet Hacks', href: '/#what-happened' },
    { label: 'Fake Trading Platforms', href: '/#what-happened' },
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsScamsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090B0C]/90 backdrop-blur-md border-b border-[#252B2F]">
      <div className="container mx-auto px-4 md:px-6 h-18 md:h-20 flex items-center justify-between">
        
        {/* Brand Monogram & Wordmark */}
        <Link href="/" className="group shrink-0">
          <FundresqLogo size="md" />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-7 text-[12px] font-mono font-bold uppercase tracking-wider text-[#9FA3A3]">
          
          {/* 1. Scams (Dropdown) */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsScamsDropdownOpen(true)}
            onMouseLeave={() => setIsScamsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsScamsDropdownOpen(!isScamsDropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#E15D44] transition-colors py-2 focus:outline-none"
              aria-expanded={isScamsDropdownOpen}
            >
              <span>Scams</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#E15D44] transition-transform duration-200 ${isScamsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isScamsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="p-2 rounded-xl bg-[#111416] border border-[#252B2F] shadow-2xl space-y-1">
                  <div className="px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-[#E15D44] border-b border-[#252B2F]">
                    Scam Types
                  </div>
                  {scamTypes.map((scam) => (
                    <Link
                      key={scam.label}
                      href={scam.href}
                      onClick={() => setIsScamsDropdownOpen(false)}
                      className="block px-3 py-2 text-xs rounded-lg text-[#F2EFE9] hover:text-[#E15D44] hover:bg-[#191D20] transition-colors"
                    >
                      {scam.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. How We Help */}
          <Link
            href="/#how-we-help"
            className="hover:text-[#E15D44] transition-colors py-2"
          >
            How We Help
          </Link>

          {/* 3. How It Works */}
          <Link
            href="/#how-it-works"
            className="hover:text-[#E15D44] transition-colors py-2"
          >
            How It Works
          </Link>

          {/* 4. About */}
          <Link
            href="/how-tracing-works"
            className="hover:text-[#E15D44] transition-colors py-2"
          >
            About
          </Link>

          {/* 5. Guides */}
          <Link
            href="/#faq"
            className="hover:text-[#E15D44] transition-colors py-2"
          >
            Guides
          </Link>
        </div>

        {/* Right Action: Start a Case */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            onClick={onOpenIntake}
            className="bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] hover:text-[#090B0C] font-bold text-xs uppercase tracking-widest px-6 h-11 shadow-lg shadow-[#E15D44]/20 rounded-lg group transition-all"
          >
            Start a Case
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
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
          <div className="flex flex-col space-y-2 font-mono text-xs uppercase tracking-wider">
            
            {/* Mobile Scams Accordion */}
            <div>
              <button
                onClick={() => setIsMobileScamsOpen(!isMobileScamsOpen)}
                className="w-full flex items-center justify-between py-2 text-[#9FA3A3] hover:text-[#E15D44] transition-colors border-b border-[#252B2F]"
              >
                <span>Scams</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E15D44] transition-transform ${isMobileScamsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileScamsOpen && (
                <div className="pl-4 py-2 space-y-2 border-b border-[#252B2F]/60">
                  {scamTypes.map((scam) => (
                    <Link
                      key={scam.label}
                      href={scam.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-[#9FA3A3] hover:text-[#E15D44]"
                    >
                      {scam.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#how-we-help"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-[#9FA3A3] hover:text-[#E15D44] transition-colors border-b border-[#252B2F]"
            >
              How We Help
            </Link>

            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-[#9FA3A3] hover:text-[#E15D44] transition-colors border-b border-[#252B2F]"
            >
              How It Works
            </Link>

            <Link
              href="/how-tracing-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-[#9FA3A3] hover:text-[#E15D44] transition-colors border-b border-[#252B2F]"
            >
              About
            </Link>

            <Link
              href="/#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-[#9FA3A3] hover:text-[#E15D44] transition-colors border-b border-[#252B2F]"
            >
              Guides
            </Link>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenIntake && onOpenIntake();
              }}
              className="w-full bg-[#E15D44] text-[#F2EFE9] hover:bg-[#F0836D] font-bold text-xs uppercase tracking-widest py-3"
            >
              Start a Case
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
