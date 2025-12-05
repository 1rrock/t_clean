'use client';

import { useEffect } from 'react';

/**
 * SEO 최적화 가이드 문서
 * 카카오톡 복붙 시 Preview 최적화
 */

export function useHeadMetaTags() {
  useEffect(() => {
    // 페이지 로드 시 메타 데이터 검증
    const validateMetaTags = () => {
      const metaTags = {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
        ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
        ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content'),
        ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
      };

      console.log('Meta Tags Validation:', metaTags);
      return metaTags;
    };

    validateMetaTags();
  }, []);
}

/**
 * SEO 체크리스트
 *
 * ✅ 완료된 항목:
 * - 메인 메타 태그 설정 (title, description, keywords)
 * - OG 메타 태그 (카카오톡 미리보기용)
 * - Twitter Card 메타 태그
 * - 구조화된 데이터 (JSON-LD) - Organization, Service
 * - robots.txt 생성
 * - sitemap.xml 생성
 * - 각 페이지별 고유 메타 태그
 * - Canonical 태그
 * - 뷰포트 메타 태그
 *
 * 📝 다음 단계:
 * 1. Google Search Console 등록
 *    - /src/lib/seo/config.ts의 googleSiteVerification 업데이트
 *
 * 2. Naver Search Advisor 등록
 *    - /src/lib/seo/config.ts의 naverSiteVerification 업데이트
 *
 * 3. Google Analytics 설정
 *    - /src/lib/seo/config.ts의 googleAnalyticsId 업데이트
 *
 * 4. OG 이미지 생성
 *    - /public/logo.png 추가 (1200x630px)
 *
 * 5. 로컬 테스트
 *    - Open Graph 검증: https://ogp.me/
 *    - 카카오톡 미리보기: https://www.kakaocorp.com/page/service/service/KakaoStory?lang=KO
 *
 * 6. 추가 SEO 최적화
 *    - 페이지 속도 최적화 (Core Web Vitals)
 *    - Mobile Responsiveness 테스트
 *    - 이미지 최적화 (WebP 변환)
 *    - 내부 링크 최적화
 */

export const SEO_CHECKLIST = {
  metaTags: {
    title: '메타 제목 (60자 이내)',
    description: '메타 설명 (160자 이내)',
    keywords: '관련 키워드 (쉼표로 구분)',
    canonical: '정규 URL',
  },
  openGraph: {
    ogTitle: 'OG 제목',
    ogDescription: 'OG 설명',
    ogImage: '1200x630px 이미지',
    ogType: 'website',
  },
  structuredData: {
    organization: 'LocalBusiness 구조',
    service: 'Service 구조',
    breadcrumb: 'BreadcrumbList (선택사항)',
  },
  searchEngines: {
    googleSearchConsole: 'https://search.google.com/search-console',
    naverSearchAdvisor: 'https://searchadvisor.naver.com',
  },
};

