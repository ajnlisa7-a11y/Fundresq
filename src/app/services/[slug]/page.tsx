import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES_DATA } from '@/data/services';
import { ServicePageClient } from './ServicePageClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: 'Investigation Service | Fundoraid',
      description: 'Blockchain transaction tracing and forensic reports.',
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://fundoraid.com/services/${slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://fundoraid.com/services/${slug}`,
      siteName: 'Fundoraid Forensic Intelligence',
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
