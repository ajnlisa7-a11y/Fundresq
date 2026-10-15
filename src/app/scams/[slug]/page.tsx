import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SCAMS_DATA } from '@/data/scams';
import { ScamPageClient } from './ScamPageClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(SCAMS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const scam = SCAMS_DATA[slug];

  if (!scam) {
    return {
      title: 'Scam Investigation | Fundresq',
      description: 'Blockchain transaction tracing and scam investigations.',
    };
  }

  return {
    title: scam.seoTitle,
    description: scam.seoDescription,
    alternates: {
      canonical: `https://fundresq.com/scams/${slug}`,
    },
    openGraph: {
      title: scam.seoTitle,
      description: scam.seoDescription,
      url: `https://fundresq.com/scams/${slug}`,
      siteName: 'Fundresq Forensic Intelligence',
      type: 'website',
    },
  };
}

export default async function ScamPage({ params }: Props) {
  const { slug } = await params;
  const scam = SCAMS_DATA[slug];

  if (!scam) {
    notFound();
  }

  return <ScamPageClient scam={scam} />;
}
