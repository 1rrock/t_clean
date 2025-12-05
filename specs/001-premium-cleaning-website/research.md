# Phase 0: Research & Clarifications

**Date**: 2025-12-04  
**Status**: Complete  
**Output**: All NEEDS CLARIFICATION resolved

---

## 1. Framer Motion 성능 최적화 (큰 리스트 애니메이션)

### Decision
**Container Queries + willChange 최적화**를 통해 대량 요소 애니메이션 시에도 60fps 유지

### Rationale
- Framer Motion의 `staggerChildren` 기본 구현으로는 50개 이상 요소 애니메이션 시 jank 발생
- `will-change: transform; will-change: opacity` CSS 프로퍼티 추가로 GPU 가속화
- `useReducedMotion` Hook으로 모션 민감도 낮은 사용자 배려
- React 19의 자동 배치(Automatic Batching) 활용

### Implementation Pattern

```typescript
// lib/animation/variants.ts
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,      // 80ms 간격
      delayChildren: 0.2,
    },
  },
};

export const listItemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// components/sections/CaseStudySection/CaseStudySection.tsx
<motion.div className="will-change-transform will-change-opacity" variants={staggerContainer}>
  {cases.map((c) => (
    <motion.div key={c.id} variants={listItemVariant} />
  ))}
</motion.div>
```

### Alternatives Considered
- ❌ react-spring: 더 복잡한 API, 초기 러닝커브
- ✅ **Framer Motion**: 직관적, 성능 최적화 충분

---

## 2. Tailwind CSS v4 커스텀 컬러 토큰

### Decision
**CSS 변수 + Tailwind @theme 지시자** 통합, `tokens.ts`에서 JavaScript 호출 가능

### Rationale
- Tailwind v4의 새로운 기능: `@theme` 키워드로 동적 토큰 정의
- 마블 텍스처, 블루 포인트 색상을 변수화 → 유지보수 용이
- 라이트/다크 모드 전환 가능 (향후 확장)
- 설계자/개발자 간 컬러 네이밍 통일

### Implementation

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-black-primary: #000000;
  --color-black-secondary: #1a1a1a;
  --color-blue-primary: #4a90e2;
  --color-blue-secondary: #2c5aa0;
  --color-marble-light: #f5f5f5;
  --color-marble-dark: #e8e8e8;
  
  --spacing-safe: max(1rem, env(safe-area-inset-bottom));
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}

/* Custom utilities */
@layer components {
  .bg-marble {
    @apply bg-gradient-to-br from-marble-light to-marble-dark;
  }
  
  .text-elegant {
    @apply text-black-primary font-light tracking-wide;
  }
}
```

```typescript
// lib/styles/tokens.ts
export const colors = {
  black: {
    primary: 'var(--color-black-primary)',
    secondary: 'var(--color-black-secondary)',
  },
  blue: {
    primary: 'var(--color-blue-primary)',
    secondary: 'var(--color-blue-secondary)',
  },
  marble: {
    light: 'var(--color-marble-light)',
    dark: 'var(--color-marble-dark)',
  },
} as const;

export const spacing = {
  safe: 'var(--spacing-safe)',
} as const;
```

### Alternatives Considered
- ❌ Tailwind config 파일만 사용: JavaScript에서 런타임 값 불가
- ✅ **CSS 변수 + @theme**: 런타임 접근 + 타입 안전

---

## 3. SEO 최적화 (Next.js Static Generation)

### Decision
**SSG (Static Site Generation) + ISR (Incremental Static Regeneration)**

### Rationale
- 정보 사이트 특성상 콘텐츠 변경 빈도 낮음 → SSG 최적
- 빌드 타임에 정적 페이지 생성 → 초고속 응답
- ISR로 콘텐츠 업데이트 시에만 재생성 (예: 사례/후기 추가)
- Next.js `generateMetadata` + `generateStaticParams` 활용

### Implementation

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: '믿고 맡기는 청소 | 프리미엄 공실 청소 서비스',
  description: '하루 한 집, 깊이를 청소합니다. 입주·이사·인테리어 후 공실 청소',
  keywords: '공실청소, 입주청소, 이사청소, 인테리어청소',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://tclean.example.com',
    siteName: '믿고 맡기는 청소',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: '믿고 맡기는 청소',
      },
    ],
  },
};

// app/case-study/page.tsx
export const revalidate = 3600; // 1시간마다 재생성

export async function generateStaticParams() {
  // 향후: DB에서 사례 목록 조회
  return [
    { id: 'case-001' },
    { id: 'case-002' },
  ];
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const caseStudy = await fetchCaseStudy(params.id);
  return {
    title: `${caseStudy.title} | 믿고 맡기는 청소`,
    description: caseStudy.description,
  };
}
```

### Alternatives Considered
- ❌ CSR Only: SEO 취약, 초기 로딩 느림
- ❌ SSR: 모든 요청마다 렌더링 → 서버 부하
- ✅ **SSG + ISR**: 최적 성능 + 동적 콘텐츠 지원

---

## 4. 이미지 최적화 (Next.js Image)

### Decision
**Next.js `<Image>` 컴포넌트 + WebP 자동 변환 + Lazy Loading**

### Rationale
- `next/image`는 자동 최적화: 크기 조정, 포맷 변환(WebP), lazy loading
- `placeholder="blur"` + `blurDataURL`로 로딩 시 부드러운 UX
- 마블 텍스처 이미지도 WebP로 압축 → 50-70% 용량 감소
- Core Web Vitals (LCP, CLS) 개선

### Implementation

```typescript
// components/sections/HeroSection/HeroSection.tsx
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen bg-black">
      <Image
        src="/images/hero-bg.jpg"
        alt="Marble texture background"
        fill
        priority // 히어로 섹션이므로 preload
        className="object-cover"
        sizes="100vw"
      />
      {/* Content overlay */}
    </section>
  );
}

// components/sections/CaseStudySection/CaseStudyCard.tsx
<Image
  src={caseStudy.imageUrl}
  alt={caseStudy.title}
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // 생성됨
  className="rounded-lg"
/>
```

### Alternatives Considered
- ❌ HTML `<img>`: 최적화 없음, 성능 저하
- ✅ **Next.js Image**: 자동 최적화, 성능 우수

---

## 5. 접근성 (A11y) - WCAG 2.1 AA

### Decision
**Semantic HTML + ARIA Labels + 컨트라스트 검증 + 다크모드 기본값**

### Rationale
- 검은 배경(#000) + 흰 텍스트(#fff) = 21:1 컨트라스트 → WCAG AAA
- 모든 인터랙티브 요소에 `aria-label` 또는 텍스트 레이블
- 포커스 스타일 명확히 (`:focus-visible`)
- 스크린 리더 사용자 지원

### Implementation

```typescript
// components/common/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  ariaLabel?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  ariaLabel,
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-6 py-3 font-semibold rounded-lg',
        'focus-visible:outline-blue-primary focus-visible:outline-offset-2',
        variant === 'primary' && 'bg-blue-primary text-white hover:bg-blue-secondary',
        variant === 'outline' && 'border border-blue-primary text-blue-primary',
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

// 사용 예시
<Button variant="primary" ariaLabel="간편 견적 문의 페이지로 이동">
  간편견적문의
</Button>
```

### Alternatives Considered
- ❌ 접근성 무시: 사용자 범위 제한, 법적 위험
- ✅ **WCAG 2.1 AA 준수**: 포용적 설계

---

## 6. 모바일 반응형 테스트 & 디버깅

### Decision
**Chrome DevTools Responsive + 실기기 테스트(iOS/Android) + Lighthouse**

### Rationale
- Responsive Mode로 초기 개발 → 빠른 피드백
- 실기기 테스트로 터치 상호작용, 렌더링 차이 검증
- Lighthouse로 성능/접근성 스코어 지속 확인
- Breakpoint: `sm: 640px`, `md: 768px`, `lg: 1024px`

### Testing Checklist

```markdown
### Mobile (< 640px)
- [ ] 햄버거 메뉴 정상 작동
- [ ] 터치 타겟 최소 44x44px
- [ ] 텍스트 가독성 (최소 16px)
- [ ] 이미지 로딩 (lazy loading 확인)
- [ ] 폼 입력 (자동줌 없음)

### Tablet (640px - 1024px)
- [ ] 탭 네비게이션 표시
- [ ] 2단 그리드 레이아웃
- [ ] 터치 인터랙션 최적화

### Desktop (≥ 1024px)
- [ ] 가로 네비게이션 메뉴
- [ ] 3단 이상 그리드
- [ ] 호버 상태 (마우스 전용)
```

### Alternatives Considered
- ❌ DevTools만 사용: 실기기 차이 무시
- ✅ **DevTools + 실기기 + 자동화**: 포괄적 검증

---

## 7. Google Forms 통합 & 데이터 추적

### Decision
**Google Forms 외부 링크 + GA4 이벤트 추적 + 선택적 iframe**

### Rationale
- Google Forms URL 직접 연동 → 관리 편의성
- GA4 이벤트 로깅으로 CTA 클릭 추적
- iframe 임베딩은 보조 옵션 (SEO 영향 없음)
- 예약 폼 변경 시 상수 파일만 수정

### Implementation

```typescript
// lib/constants.ts
export const EXTERNAL_LINKS = {
  RESERVATION_FORM: 'https://forms.gle/XXXXX', // Google Form ID
  YOUTUBE: 'https://youtube.com/@tclean',
  INSTAGRAM: 'https://instagram.com/tclean',
} as const;

// lib/api/analytics.ts
import { useEffect } from 'react';

export function useTrackEvent(eventName: string, eventData?: Record<string, any>) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        ...eventData,
      });
    }
  }, [eventName, eventData]);
}

// components/common/Button.tsx (with GA tracking)
export function ReservationButton() {
  const handleClick = () => {
    useTrackEvent('reservation_click', {
      section: 'hero',
      button_text: '간편견적문의',
    });
    window.open(EXTERNAL_LINKS.RESERVATION_FORM, '_blank');
  };

  return (
    <button onClick={handleClick} aria-label="간편 견적 문의">
      간편견적문의
    </button>
  );
}
```

### Alternatives Considered
- ❌ iframe 임베딩만: SEO 취약, 보안 고려사항
- ✅ **외부 링크 + GA4 추적**: 최적 성능 + 분석

---

## 8. 상태 관리 경계 명확화

### Decision
**Zustand (UI/Local State) + React Query (Server State) + Component State (로컬)**

### Rationale

| 상태 유형 | 라이브러리 | 예시 | 이유 |
|---------|----------|------|------|
| 서버 데이터 | React Query | 사례/후기 목록, 예약 데이터 | 캐싱, 동기화, 오류 처리 |
| UI 상태 | Zustand | 모바일 메뉴, 모달, 탭 선택 | 경량, 빠른 업데이트, 영속성 가능 |
| 로컬 폼 | Component State | input value, validation errors | 단순성, 렌더링 격리 |

```typescript
// store/menuStore.ts (Zustand)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type MenuStore = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
};

export const useMenuStore = create<MenuStore>(
  persist(
    (set) => ({
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      close: () => set({ isOpen: false }),
      open: () => set({ isOpen: true }),
    }),
    {
      name: 'menu-store',
      storage: typeof window !== 'undefined' ? localStorage : undefined,
    }
  )
);

// hooks/useServiceCases.ts (React Query)
import { useQuery } from '@tanstack/react-query';

export function useServiceCases() {
  return useQuery({
    queryKey: ['cases'],
    queryFn: async () => {
      const res = await fetch('/api/cases'); // 향후: 실제 API
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1시간
  });
}

// components/sections/CaseStudyCard.tsx (Component State)
export function CaseStudyCard({ caseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h3>{caseStudy.title}</h3>
      {isExpanded && <p>{caseStudy.description}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '닫기' : '자세히 보기'}
      </button>
    </div>
  );
}
```

### Alternatives Considered
- ❌ Redux: 보일러플레이트 많음, 초기 규모에 과도
- ✅ **Zustand + React Query**: 최소한의 복잡성 + 명확한 책임

---

## Summary of Decisions

| # | Topic | Decision | Key Benefit |
|---|-------|----------|------------|
| 1 | Animation 성능 | Framer Motion + willChange | 60fps 유지 |
| 2 | 컬러 토큰 | Tailwind v4 @theme + CSS vars | 유지보수성 ↑ |
| 3 | SEO | SSG + ISR | 초고속 + 동적 콘텐츠 |
| 4 | 이미지 | Next.js Image | Core Web Vitals 개선 |
| 5 | 접근성 | WCAG 2.1 AA + ARIA | 포용적 설계 |
| 6 | 테스트 | DevTools + 실기기 + Lighthouse | 포괄적 검증 |
| 7 | 예약 폼 | Google Forms URL + GA4 | 관리 편의성 + 분석 |
| 8 | 상태 관리 | Zustand + React Query + local | 명확한 경계 |

---

## 다음 단계

✅ **Phase 0 완료** — 모든 리서치 항목 해결

→ **Phase 1로 진행**: data-model.md, contracts/, quickstart.md 생성

