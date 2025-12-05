import { Metadata } from 'next';
import { reviewMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = reviewMetadata;

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

