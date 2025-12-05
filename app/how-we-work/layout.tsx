import { Metadata } from 'next';
import { howWeWorkMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = howWeWorkMetadata;

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
