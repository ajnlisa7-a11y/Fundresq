export interface WebsiteMediaItem {
  id: string;
  name: string;
  fileName: string;
  section: string;
  description: string;
  defaultUrl: string;
  aspectRatio: string;
}

export const MANAGED_WEBSITE_MEDIA: WebsiteMediaItem[] = [
  {
    id: 'hero-investigation',
    name: 'Hero Investigation Environment',
    fileName: 'hero-investigation.jpg',
    section: 'Homepage Hero',
    description: 'Moody architectural forensic operations workspace with analytical monitors.',
    defaultUrl: '/images/hero-investigation.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'investigator-analysing-data',
    name: 'Forensic Investigator Analyzing Data',
    fileName: 'investigator-analysing-data.jpg',
    section: 'How We Help (Homepage)',
    description: 'Senior forensic specialist inspecting transaction ledger flows and mixer activity across dual displays.',
    defaultUrl: '/images/investigator-analysing-data.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'team-reviewing-findings',
    name: 'Legal & Investigation Team Review',
    fileName: 'team-reviewing-findings.jpg',
    section: 'Case Studies / Reports Section',
    description: 'Elite investigation team and legal counsel in boardroom reviewing case evidence binders.',
    defaultUrl: '/images/team-reviewing-findings.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'investment-scam-victim',
    name: 'Investment Scam Situation',
    fileName: 'investment-scam-victim.jpg',
    section: 'Investment Scam Landing Page',
    description: 'Real-world person reviewing suspicious trading platform alerts and locked withdrawal notifications.',
    defaultUrl: '/images/investment-scam-victim.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'logo',
    name: 'Platform Logo & Monogram',
    fileName: 'logo.png',
    section: 'Navigation & Branding',
    description: 'Primary Fundoraid brand logo and monogram mark.',
    defaultUrl: '/brand-logo.png',
    aspectRatio: 'Square / Vector',
  },
];
