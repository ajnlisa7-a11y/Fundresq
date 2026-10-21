'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

/**
 * Generates the live public URL for a Supabase storage asset with cache-busting timestamp
 */
export function getAssetPublicUrl(fileName: string): string {
  try {
    const { data } = supabase.storage.from('assets').getPublicUrl(fileName);
    if (!data?.publicUrl) return `/${fileName}`;
    
    if (typeof window !== 'undefined') {
      const timestamp = localStorage.getItem(`fundoraid_asset_${fileName}`) 
        || localStorage.getItem('fundoraid_assets_updated')
        || localStorage.getItem(`fundresq_asset_${fileName}`) 
        || localStorage.getItem('fundresq_assets_updated');
      return timestamp ? `${data.publicUrl}?t=${timestamp}` : data.publicUrl;
    }
    return data.publicUrl;
  } catch {
    return `/${fileName}`;
  }
}

/**
 * Dispatches a global event and updates localStorage so all components across the app update immediately
 */
export function notifyAssetUpdated(fileName?: string) {
  if (typeof window === 'undefined') return;
  const now = Date.now().toString();
  localStorage.setItem('fundoraid_assets_updated', now);
  localStorage.setItem('fundresq_assets_updated', now);
  if (fileName) {
    localStorage.setItem(`fundoraid_asset_${fileName}`, now);
    localStorage.setItem(`fundresq_asset_${fileName}`, now);
  }
  window.dispatchEvent(new Event('branding-updated'));
}

/**
 * React hook to keep any media or branding asset synchronized in real time
 */
export function useSyncedAsset(fileName: string, fallbackLocalUrl?: string) {
  const [url, setUrl] = useState<string | null>(fallbackLocalUrl || `/${fileName}`);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const sync = () => {
      try {
        const publicUrl = getAssetPublicUrl(fileName);
        setUrl(publicUrl);
        setHasError(false);
      } catch {
        if (fallbackLocalUrl) setUrl(fallbackLocalUrl);
      }
    };

    sync();

    const handleUpdate = () => {
      sync();
    };

    window.addEventListener('branding-updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('branding-updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [fileName, fallbackLocalUrl]);

  return {
    url: hasError && fallbackLocalUrl ? fallbackLocalUrl : url,
    onError: () => setHasError(true),
  };
}
