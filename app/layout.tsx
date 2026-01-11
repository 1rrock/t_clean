import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/common/PageTransition';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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
    '공실정리',
  ],
  authors: [{ name: '믿고 맡기는 청소' }],
  metadataBase: new URL('https://www.trustmygroup.co.kr'),
  alternates: {
    canonical: 'https://www.trustmygroup.co.kr',
  },
  openGraph: {
    title: '믿고 맡기는 청소 | 프리미엄 공실 청소 서비스',
    description: '입주·이사·인테리어 후 공실 청소 전문가. 전문 장비와 친환경 약품으로 완벽한 청소를 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '믿고 맡기는 청소',
    url: 'https://www.trustmygroup.co.kr',
    images: [
      {
        url: 'https://www.trustmygroup.co.kr/og-image.png',
        width: 1200,
        height: 630,
        alt: '믿고 맡기는 청소 - 프리미엄 공실 청소 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '믿고 맡기는 청소',
    description: '프리미엄 공실 청소 서비스',
    images: ['https://www.trustmygroup.co.kr/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    naver: '14b36d04685e0a63c64c883d4f08d948fd5ec49b',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <main className="pt-14 md:pt-18 min-h-dvh">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>

        {/* JSON-LD 구조화된 데이터 - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: '믿고 맡기는 청소',
              description: '프리미엄 공실 청소 서비스 전문가',
              url: 'https://www.trustmygroup.co.kr',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '시흥',
                addressCountry: 'KR',
              },
              sameAs: [
                'https://www.instagram.com/t_cleaning_',
              ],
              areaServed: ['Seoul', 'Gyeonggi'],
              serviceType: [
                '입주청소',
                '이사청소',
                '인테리어청소',
                '공실청소',
              ],
            }),
          }}
        />

        {/* JSON-LD - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: '프리미엄 공실 청소',
              description: '전문 장비와 친환경 약품을 사용한 공실 청소 서비스',
              provider: {
                '@type': 'LocalBusiness',
                name: '믿고 맡기는 청소',
              },
              areaServed: ['Seoul', 'Gyeonggi'],
              serviceType: ['주거용', '상업용'],
            }),
          }}
        />
      </body>
    </html>
  );
}
