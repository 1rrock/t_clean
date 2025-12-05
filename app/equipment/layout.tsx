import { Metadata } from 'next';
import { equipmentMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = equipmentMetadata;

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

