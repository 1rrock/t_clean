import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import ServiceCards from '@/components/sections/ServiceCards';
import WorkPrinciples from '@/components/sections/WorkPrinciples';

export const metadata: Metadata = {
  title: '믿고 맡기는 청소 | 서울 경기 프리미엄 공실 청소 서비스',
  description:
    '입주청소, 이사청소, 인테리어청소 전문. 프리미엄 공실 청소로 새로운 시작을 완벽하게 준비하세요. 전문 장비와 친환경 약품으로 안전하고 깨끗한 청소를 제공합니다.',
  keywords: [
    '청소',
    '입주청소',
    '이사청소',
    '인테리어청소',
    '공실청소',
    '프리미엄청소',
    '청소서비스',
    '서울청소',
    '경기청소',
  ],
  openGraph: {
    title: '믿고 맡기는 청소 | 프리미엄 공실 청소',
    description: '입주·이사·인테리어 후 공실 청소 전문가',
    type: 'website',
    images: [
      {
        url: 'https://t-clean.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: '믿고 맡기는 청소',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServiceCards />
      <WorkPrinciples />
    </>
  );
}
