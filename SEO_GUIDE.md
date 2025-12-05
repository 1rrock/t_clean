# SEO 최적화 가이드

## 📋 목차
1. [메타 태그 최적화](#메타-태그-최적화)
2. [카카오톡 미리보기 최적화](#카카오톡-미리보기-최적화)
3. [검색 엔진 등록](#검색-엔진-등록)
4. [구조화된 데이터](#구조화된-데이터)
5. [성능 최적화](#성능-최적화)

---

## 메타 태그 최적화

### 이미 적용된 항목

#### 1. 기본 메타 태그
```html
<title>믿고 맡기는 청소 | 서울 경기 프리미엄 공실 청소 서비스</title>
<meta name="description" content="입주청소, 이사청소, 인테리어청소 전문..." />
<meta name="keywords" content="청소, 입주청소, 이사청소, ..." />
```

#### 2. OG 메타 태그 (카카오톡, 페이스북, 링크 공유)
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://mclean.kr/og-image.png" />
<meta property="og:url" content="https://mclean.kr" />
<meta property="og:type" content="website" />
```

#### 3. Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://mclean.kr/og-image.png" />
```

#### 4. Canonical 태그
```html
<link rel="canonical" href="https://mclean.kr" />
```

#### 5. Robots 설정
```html
<meta name="robots" content="index, follow" />
```

---

## 카카오톡 미리보기 최적화

### 현재 상태
✅ OG 메타 태그 설정 완료

### 추가 필요 작업

#### 1. OG 이미지 생성
- **경로**: `/public/og-image.png`
- **크기**: 1200x630px
- **형식**: PNG 또는 JPG
- **권장사항**:
  - 로고 포함
  - 텍스트는 명확하게
  - 고대비 색상 사용
  - 파일 크기 < 1MB

#### 2. 각 페이지별 OG 메타 태그
```typescript
// app/about/layout.tsx
export const metadata: Metadata = {
  openGraph: {
    title: '소개 | 믿고 맡기는 청소',
    description: '브랜드 철학과 가치',
    images: [{
      url: 'https://mclean.kr/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
};
```

#### 3. 테스트 방법
```
1. 카카오톡 디버거 (없음 - 수동 테스트)
2. Facebook 공유 디버거:
   https://developers.facebook.com/tools/debug/sharing/?locale=ko_KR
3. Open Graph 검증:
   https://ogp.me/
```

---

## 검색 엔진 등록

### Google Search Console

1. **등록 방법**:
   - https://search.google.com/search-console 방문
   - "속성 추가" 선택
   - `https://mclean.kr` 입력
   - 소유권 확인 (메타 태그 방식 권장)

2. **확인 코드 추가**:
   ```typescript
   // app/layout.tsx
   <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
   ```

3. **sitemap.xml 제출**:
   - Search Console에서 "Sitemaps" 메뉴
   - `https://mclean.kr/sitemap.xml` 제출

### Naver Search Advisor

1. **등록 방법**:
   - https://searchadvisor.naver.com 방문
   - "사이트 등록" 선택
   - `https://mclean.kr` 입력
   - HTML 메타 태그로 소유권 확인

2. **확인 코드 추가**:
   ```typescript
   // app/layout.tsx
   <meta name="naver-site-verification" content="YOUR_NAVER_VERIFICATION_CODE" />
   ```

3. **robots.txt 확인**:
   - `/public/robots.txt` 이미 생성됨
   - Naver Search Advisor에서 자동 인식

---

## 구조화된 데이터

### 이미 적용된 JSON-LD

#### 1. Organization (조직 정보)
```json
{
  "@type": "LocalBusiness",
  "name": "믿고 맡기는 청소",
  "url": "https://mclean.kr",
  "telephone": "010-8827-9937",
  "address": { ... },
  "serviceType": ["입주청소", "이사청소", ...]
}
```

#### 2. Service (서비스 정보)
```json
{
  "@type": "Service",
  "name": "프리미엄 공실 청소",
  "provider": { ... },
  "areaServed": ["Seoul", "Gyeonggi"]
}
```

### 추가 권장 구조화된 데이터

#### 1. BreadcrumbList (선택사항)
```typescript
// 페이지별 breadcrumb 구현 시 추가
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mclean.kr" },
    { "@type": "ListItem", "position": 2, "name": "서비스", "item": "https://mclean.kr/service" },
  ]
}
```

#### 2. Review/AggregateRating
```typescript
// 고객 후기 페이지에 추가 권장
{
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "100"
}
```

---

## 성능 최적화

### Core Web Vitals (핵심 웹 지표)

#### 1. LCP (Largest Contentful Paint) - 로딩 성능
- **목표**: < 2.5초
- **최적화**:
  - 이미지 최적화 (WebP 변환)
  - 폰트 최적화
  - CSS 최소화

#### 2. FID (First Input Delay) - 상호작용 성능
- **목표**: < 100ms
- **최적화**:
  - JavaScript 최소화
  - 무거운 작업 분산

#### 3. CLS (Cumulative Layout Shift) - 시각적 안정성
- **목표**: < 0.1
- **최적화**:
  - 이미지 크기 지정
  - 폰트 로딩 최적화

### 측정 도구
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse: Chrome DevTools > Lighthouse

---

## 체크리스트

### 필수 항목 (이미 완료)
- [x] 기본 메타 태그 설정
- [x] OG 메타 태그 설정
- [x] robots.txt 생성
- [x] sitemap.xml 생성
- [x] JSON-LD 구조화된 데이터
- [x] Canonical 태그
- [x] 각 페이지별 메타 데이터

### 추가 작업 필요
- [ ] OG 이미지 생성 (`/public/og-image.png`)
- [ ] Google Search Console 등록
- [ ] Naver Search Advisor 등록
- [ ] Google Analytics 설정
- [ ] Core Web Vitals 최적화
- [ ] 모바일 반응형 테스트
- [ ] 이미지 최적화 (WebP)
- [ ] 내부 링크 최적화

---

## 유용한 도구 및 리소스

### SEO 검증 도구
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/)
- [Open Graph Checker](https://www.opengraphcheck.com/)
- [SEO Meta Tags Preview](https://www.seomofo.com/meta-tag-preview-tool.html)

### 카카오톡 미리보기 테스트
1. 카카오톡 채팅에 URL 입력
2. 미리보기 로드 확인
3. 제목, 설명, 이미지 확인

### 검색 엔진 도구
- [Google Search Console](https://search.google.com/search-console)
- [Naver Search Advisor](https://searchadvisor.naver.com)

---

## 자주 묻는 질문

**Q: OG 이미지가 업로드 안 될 때?**
A: 이미지 크기(1200x630px), 파일 형식(PNG/JPG), 파일 크기(< 1MB) 확인

**Q: 검색 엔진에 등록했는데 안 나올 때?**
A: 최대 2-3주 소요, Search Console에서 색인 상태 확인

**Q: 카카오톡 미리보기가 이상할 때?**
A: 카카오 캐시 초기화 필요, 다른 기기에서 테스트

---

**마지막 업데이트**: 2025-12-05

