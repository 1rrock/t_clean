import { Metadata } from 'next';
import { noticeMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = noticeMetadata;

export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

