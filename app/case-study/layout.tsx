import { Metadata } from 'next';
import { caseStudyMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = caseStudyMetadata;

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

