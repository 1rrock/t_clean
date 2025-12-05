import { Metadata } from 'next';
import { serviceMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = serviceMetadata;

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

