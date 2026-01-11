import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const baseUrl = 'https://www.trustmygroup.co.kr';
  const now = new Date();

  // 정적 사이트라 최신 글/공지처럼 업데이트되는 리소스가 없으므로,
  // 주요 페이지들을 RSS 아이템으로 제공합니다(서치어드바이저 RSS 제출용).
  const items: Array<{ title: string; url: string; description: string; pubDate: Date }> = [
    {
      title: '믿고 맡기는 청소',
      url: `${baseUrl}/`,
      description:
        '입주청소, 이사청소, 인테리어청소 전문. 프리미엄 공실 청소로 새로운 시작을 완벽하게 준비하세요.',
      pubDate: now,
    },
    {
      title: '서비스 | 믿고 맡기는 청소',
      url: `${baseUrl}/service`,
      description: '프리미엄 공실 청소 서비스 안내',
      pubDate: now,
    },
    {
      title: '작업 방식 | 믿고 맡기는 청소',
      url: `${baseUrl}/how-we-work`,
      description: '하루 한 집 전담제, 전문 장비 및 친환경 약품, 기록 공유 프로세스',
      pubDate: now,
    },
    {
      title: '장비 | 믿고 맡기는 청소',
      url: `${baseUrl}/equipment`,
      description: '전문 장비 기반 청소 품질 기준',
      pubDate: now,
    },
    {
      title: '아카데미 | 믿고 맡기는 청소',
      url: `${baseUrl}/academy`,
      description: '하루 한 집 프리미엄 청소의 기준을 배우는 곳',
      pubDate: now,
    },
    {
      title: '리뷰 | 믿고 맡기는 청소',
      url: `${baseUrl}/review`,
      description: '고객 후기',
      pubDate: now,
    },
    {
      title: '공지 | 믿고 맡기는 청소',
      url: `${baseUrl}/notice`,
      description: '공지사항',
      pubDate: now,
    },
    {
      title: '예약/문의 | 믿고 맡기는 청소',
      url: `${baseUrl}/reservation`,
      description: '예약 및 상담 문의',
      pubDate: now,
    },
    {
      title: '소개 | 믿고 맡기는 청소',
      url: `${baseUrl}/about`,
      description: '브랜드 소개',
      pubDate: now,
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml('믿고 맡기는 청소')}</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>${escapeXml(
      '입주청소, 이사청소, 인테리어청소 전문. 프리미엄 공실 청소 서비스',
    )}</description>
    <language>ko-KR</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(`${baseUrl}/rss.xml`)}" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
    </item>`,
  )
  .join('\n')}
  </channel>
</rss>
`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

