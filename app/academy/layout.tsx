import { Metadata } from 'next';
import { academyMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = academyMetadata;

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

