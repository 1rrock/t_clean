import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/common/PageTransition';

export const metadata: Metadata = {
  title: '믿고 맡기는 청소 | 프리미엄 공실 청소 서비스',
  description:
    '고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록, 정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스입니다.',
  keywords: ['청소', '입주청소', '이사청소', '인테리어청소', '공실청소', '프리미엄청소'],
  openGraph: {
    title: '믿고 맡기는 청소',
    description: '프리미엄 공실 청소 서비스',
    type: 'website',
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
          <main className="pt-14 md:pt-18  min-h-dvh">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
