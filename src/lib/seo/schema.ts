/**
 * 구조화된 데이터 (JSON-LD) 생성 함수
 */

export interface Organization {
  name: string;
  url: string;
  telephone: string;
  address: {
    streetAddress?: string;
    addressCountry: string;
  };
  sameAs?: string[];
  areaServed?: string[];
  serviceType?: string[];
  description?: string;
}

export interface Service {
  name: string;
  description: string;
  provider: {
    name: string;
  };
  areaServed?: string[];
  serviceType?: string[];
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

/**
 * Organization JSON-LD 생성
 */
export function createOrganizationSchema(): Organization {
  return {
    name: '믿고 맡기는 청소',
    url: 'https://t-clean.vercel.app',
    telephone: '010-8827-9937',
    address: {
      streetAddress: '시흥사무실',
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
    description: '프리미엄 공실 청소 서비스 전문가',
  };
}

/**
 * Service JSON-LD 생성
 */
export function createServiceSchema(): Service {
  return {
    name: '프리미엄 공실 청소',
    description: '전문 장비와 친환경 약품을 사용한 공실 청소 서비스',
    provider: {
      name: '믿고 맡기는 청소',
    },
    areaServed: ['Seoul', 'Gyeonggi'],
    serviceType: ['주거용', '상업용'],
  };
}

/**
 * Breadcrumb 생성 (페이지 경로)
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * AggregateRating 생성 (별점)
 */
export function createAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  ratingCount: number = reviewCount
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    ratingCount: ratingCount.toString(),
  };
}

/**
 * 모든 스키마를 배열로 반환
 */
export function getAllSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      ...createOrganizationSchema(),
    },
    {
      '@context': 'https://schema.org',
      ...createServiceSchema(),
    },
  ];
}

