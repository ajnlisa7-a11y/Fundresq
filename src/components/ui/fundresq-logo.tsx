'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface FundresqLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export function FundresqLogo({ className = '', size = 'md', showSubtitle = true }: FundresqLogoProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>('/logo.png');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const syncLogo = () => {
      try {
        const { data } = supabase.storage
          .from('assets')
          .getPublicUrl('logo.png');
        
        if (data?.publicUrl) {
          const timestamp = typeof window !== 'undefined' ? localStorage.getItem('fundresq_logo_updated') : null;
          setLogoUrl(timestamp ? `${data.publicUrl}?t=${timestamp}` : data.publicUrl);
          setImgError(false);
        }
      } catch (err) {
        // Keep local /logo.png
      }
    };

    syncLogo();

    const handleBrandingUpdate = () => {
      syncLogo();
    };

    window.addEventListener('branding-updated', handleBrandingUpdate);
    window.addEventListener('storage', handleBrandingUpdate);

    return () => {
      window.removeEventListener('branding-updated', handleBrandingUpdate);
      window.removeEventListener('storage', handleBrandingUpdate);
    };
  }, []);

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 md:w-10 md:h-10',
    lg: 'w-12 h-12 md:w-14 md:h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogram F/R brand logo mark */}
      <div className={`relative ${iconSizes[size]} rounded-lg bg-[#191D20] border border-[#252B2F] flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(225,93,68,0.2)] group-hover:border-[#E15D44] transition-all duration-300`}>
        {logoUrl && !imgError ? (
          <img
            src={logoUrl}
            alt="Fundresq Logo"
            className="w-full h-full object-contain p-0.5"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-[#E15D44] p-1.5"
          >
            {/* Subtle grid background */}
            <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.25" />
            <circle cx="36" cy="12" r="2" fill="currentColor" fillOpacity="0.25" />
            <circle cx="12" cy="36" r="2" fill="currentColor" fillOpacity="0.25" />
            <circle cx="36" cy="36" r="2" fill="currentColor" fillOpacity="0.25" />

            {/* Fragmented trail that reconnects through central node */}
            <path
              d="M10 14H34M10 14V34M10 24H26"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Connected dynamic diagnostic trail */}
            <path
              d="M24 24L36 36"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 3"
              className="animate-pulse"
            />

            {/* Reconnecting Node in Primary Light & Positive Teal */}
            <circle cx="24" cy="24" r="3.5" fill="#F0836D" />
            <circle cx="36" cy="36" r="2.5" fill="#61B58A" />
            <circle cx="10" cy="14" r="2.5" fill="#F0836D" />
          </svg>
        )}
      </div>

      <div className="flex flex-col">
        <span className={`font-headline font-extrabold tracking-tight text-[#F2EFE9] leading-none ${textSizes[size]}`}>
          FUND<span className="text-[#E15D44] font-bold">RESQ</span>
        </span>
        {showSubtitle && (
          <span className="text-[7.5px] md:text-[8.5px] font-bold uppercase tracking-[0.28em] text-[#9FA3A3] mt-1">
            Forensic Intelligence
          </span>
        )}
      </div>
    </div>
  );
}
