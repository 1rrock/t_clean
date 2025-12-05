import { Metadata } from 'next';
import { reservationMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = reservationMetadata;

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

