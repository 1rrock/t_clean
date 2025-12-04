# 프리미엄 공실 청소 서비스 웹사이트 - 프론트엔드 아키텍처 가이드

**Date**: 2025-12-04  
**Status**: Complete (Phase 0, Phase 1 완료)  
**Framework**: Next.js 16.0.7 + React 19.2.0 + TypeScript 5.x  
**Branch**: `001-premium-cleaning-website`

---

## 1. 권장 폴더 구조

```
/Users/1rrock/project/mclean/

app/                          # Next.js App Router (route definitions)
├── layout.tsx                # 전역 레이아웃, meta, providers
├── globals.css               # Tailwind 글로벌 스타일
├── providers.tsx             # React Query + Zustand provider
├── page.tsx                  # 홈 페이지 (route: /)
├── about/
│   └── page.tsx              # 소개 페이지 (route: /about)
├── service/
│   └── page.tsx              # 서비스 페이지 (route: /service)
├── how-we-work/
│   └── page.tsx              # 작업 방식 페이지 (route: /how-we-work)
├── equipment/
│   └── page.tsx              # 장비 & 시스템 페이지 (route: /equipment)
├── case-study/
│   └── page.tsx              # 시공 사례 페이지 (route: /case-study)
├── review/
│   └── page.tsx              # 후기 페이지 (route: /review)
├── notice/
│   └── page.tsx              # 이용 안내 페이지 (route: /notice)
└── reservation/
    └── page.tsx              # 견적/예약 페이지 (route: /reservation)

src/
├── components/               # UI 컴포넌트 계층
│   ├── common/               # Primitive 컴포넌트 (atomic)
│   │   ├── Button.tsx           # 범용 버튼 (primary/outline/ghost)
│   │   ├── Icon.tsx             # Lucide 아이콘 래퍼
│   │   ├── Typography.tsx       # Heading, Paragraph, Label, Badge
│   │   └── Badge.tsx            # 배지 컴포넌트
│   │
│   ├── layout/               # 전역 레이아웃 컴포넌트
│   │   ├── Header.tsx           # 헤더 (로고 + 메뉴 + CTA)
│   │   ├── Footer.tsx           # 푸터
│   │   └── MobileMenu.tsx       # 햄버거 메뉴 (모바일)
│   │
│   ├── ui/                   # Composite 컴포넌트 (molecules)
│   │   ├── Card.tsx             # 범용 카드 (서비스/사례/후기)
│   │   ├── Modal.tsx            # 모달 컴포넌트 (Framer Motion)
│   │   ├── Tabs.tsx             # 탭 컴포넌트
│   │   ├── Accordion.tsx        # 아코디언 (Notice)
│   │   └── Timeline.tsx         # 타임라인 (How We Work)
│   │
│   └── sections/             # 페이지 섹션 컴포넌트 (organism)
│       ├── HeroSection/
│       │   ├── HeroSection.tsx
│       │   └── HeroSection.styles.ts    # 스타일 상수
│       ├── PhilosophySection/
│       │   ├── PhilosophySection.tsx
│       │   └── PhilosophyList.tsx
│       ├── ServiceCardsSection/
│       │   ├── ServiceCardsSection.tsx
│       │   └── ServiceCard.tsx
│       ├── ProcessSection/
│       │   └── ProcessSection.tsx
│       ├── EquipmentSection/
│       │   └── EquipmentSection.tsx
│       ├── CaseStudySection/
│       │   ├── CaseStudySection.tsx
│       │   └── CaseStudyCard.tsx
│       ├── ReviewSection/
│       │   ├── ReviewSection.tsx
│       │   └── ReviewCard.tsx
│       └── CTASection/
│           └── CTASection.tsx
│
├── features/                 # 도메인/기능별 비즈니스 로직
│   ├── home/
│   │   ├── hooks/
│   │   │   └── useHeroAnimation.ts
│   │   ├── queries.ts               # React Query
│   │   └── types.ts
│   │
│   ├── service/
│   │   ├── components/
│   │   │   └── ServiceDetailModal.tsx
│   │   ├── hooks/
│   │   │   └── useServiceFilter.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   │
│   ├── reservation/
│   │   ├── hooks/
│   │   │   └── useReservationForm.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   │
│   └── common/
│       ├── hooks/
│       │   └── useScrollAnimation.ts
│       └── queries.ts
│
├── store/                    # Zustand 전역 상태 관리
│   ├── menuStore.ts
│   ├── modalStore.ts
│   ├── uiStore.ts
│   └── index.ts
│
├── hooks/                    # 횡단 관심사 커스텀 훅
│   ├── useScrollReveal.ts
│   ├── useMedia.ts
│   ├── useForm.ts
│   ├── useIntersectionObserver.ts
│   └── useBreakpoint.ts
│
├── lib/                      # 유틸리티 & 설정
│   ├── api/
│   │   ├── client.ts         # fetch 기본 설정
│   │   └── services/
│   │       ├── reservation.ts
│   │       └── content.ts
│   │
│   ├── animation/
│   │   └── variants.ts       # Framer Motion variants
│   │
│   ├── constants.ts          # 상수 (경로, 링크, 설정)
│   ├── validators.ts         # Zod 스키마
│   ├── classNames.ts         # clsx 유틸
│   └── styles/
│       └── tokens.ts         # 색상, 간격, 타이포그래피 토큰
│
├── styles/
│   └── tailwind.css          # Tailwind @theme, @layer
│
├── assets/
│   ├── images/               # 정적 이미지 (next/image 최적화)
│   │   ├── hero-bg.jpg
│   │   ├── marble-texture.jpg
│   │   └── case-studies/
│   ├── textures/             # 배경 텍스처
│   └── icons/                # 커스텀 SVG 아이콘
│
├── types/
│   └── index.d.ts            # 전역 타입 정의
│
└── utils/
    ├── format.ts             # 포맷팅 유틸
    ├── classNames.ts
    └── scroll.ts

public/
├── images/                   # Next.js static 이미지
└── fonts/                    # 커스텀 폰트

specs/001-premium-cleaning-website/  # 스펙 문서
├── spec.md
├── plan.md
├── research.md               # Phase 0 완료
├── data-model.md             # Phase 1 완료
├── quickstart.md             # Phase 1 완료
└── contracts/
    └── api.openapi.yaml      # OpenAPI 스펙

tests/                        # 향후 추가
├── unit/
├── integration/
└── e2e/
```

---

## 2. 디렉터리별 단문 설명

| 디렉터리 | 용도 | 책임 |
|---------|------|------|
| `app/` | Next.js 라우트 엔트리 | 페이지 정의, 레이아웃 래퍼, SEO meta |
| `components/common/` | Atomic UI 컴포넌트 | 버튼, 텍스트, 아이콘 (prop-based 스타일) |
| `components/layout/` | 전역 레이아웃 | 헤더, 푸터, 모바일 메뉴 |
| `components/ui/` | Composite UI | 카드, 모달, 탭, 타임라인 |
| `components/sections/` | 페이지 섹션 | 히어로, 철학, 서비스, 프로세스 등 |
| `features/` | 도메인 기능 모듈 | 비즈니스 로직, React Query, 타입 |
| `store/` | 전역 상태 (Zustand) | UI 상태 (메뉴, 모달), 비영속 |
| `hooks/` | 커스텀 훅 | 스크롤, 미디어 쿼리, 폼 로직 |
| `lib/api/` | API 통신 | fetch 설정, 엔드포인트 함수 |
| `lib/animation/` | 애니메이션 정의 | Framer Motion variants |
| `lib/styles/` | 디자인 토큰 | 색상, 간격, 타이포그래피 |
| `types/` | 타입 정의 | 전역 & 도메인 타입 |
| `assets/` | 정적 리소스 | 이미지, 텍스처, 아이콘 |

---

## 3. 네이밍 컨벤션 & 원칙

### 파일명 규칙

```
✅ 컴포넌트 파일        → PascalCase
   Button.tsx, HeroSection.tsx, ServiceCard.tsx

✅ 훅 파일              → camelCase, use prefix
   useScrollReveal.ts, useMenuStore.ts, useForm.ts

✅ 유틸/상수 파일      → camelCase
   constants.ts, validators.ts, format.ts

✅ 정적 에셋            → kebab-case
   hero-bg.jpg, marble-texture.jpg, case-001-before.jpg

✅ 폴더명              → camelCase (기능별) 또는 kebab-case (섹션별)
   src/features/home/
   src/components/sections/HeroSection/
```

### 컴포넌트 분류

```
Primitive (components/common/)
├─ 독립적인 스타일 통제
├─ 테마 토큰만 사용
├─ 매우 높은 재사용성
└─ 예: Button, Icon, Typography

Composite (components/ui/)
├─ Primitive 여러 개 조합
├─ 특정 패턴 제공 (Card, Modal, Accordion)
├─ 중간 정도의 재사용성
└─ 예: Card, Modal, Tabs

Organism (components/sections/)
├─ 전체 섹션 구성
├─ 페이지별 차별화
├─ 낮은 재사용성 (한두 페이지)
└─ 예: HeroSection, ServiceCardsSection
```

### Props 네이밍

```typescript
// ✅ 좋은 예시
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
}

// ❌ 피할 것
type BtnProps = { btnType: 'primary' | 'danger'; disabled: boolean };
```

---

## 4. 상태 관리 경계 명확화

### Zustand (UI 상태 + 클라이언트 상태)

**용도**: 모바일 메뉴, 모달, 탭 선택, 폼 단계 등 임시 UI 상태

```typescript
// ✅ Zustand 사용 예시
store/menuStore.ts       → 모바일 메뉴 열기/닫기
store/modalStore.ts      → 모달 노출 여부
store/uiStore.ts         → 탭 인덱스, 필터 선택
```

**특징**:
- 경량 번들 크기 (2.5KB)
- 간단한 API: `create()`, `set()`
- localStorage 영속성 옵션
- DevTools 통합 가능

### React Query (서버 상태 + 캐싱)

**용도**: 사례, 후기, 장비 정보 등 서버 데이터

```typescript
// ✅ React Query 사용 예시
features/home/queries.ts    → useCaseStudies(), useReviews()
lib/api/services/           → API 함수들

export function useCaseStudies(featured?: boolean) {
  return useQuery({
    queryKey: ['case-studies', { featured }],
    queryFn: async () => fetcher(`/api/case-studies?featured=${featured}`),
    staleTime: 1000 * 60 * 60,  // 1시간
  });
}
```

**특징**:
- 자동 캐싱 & 동기화
- 비동기 오류 처리
- staleTime, gcTime 최적화
- Background refetch

### Component State (로컬 상태)

**용도**: 개별 컴포넌트 내부 UI 상태

```typescript
// ✅ Component state 사용 예시
export function ServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      {isExpanded && <p>{service.description}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        자세히 보기
      </button>
    </div>
  );
}
```

**특징**:
- 격리된 렌더링 (자식에게 영향 없음)
- 간단한 로직에 최적
- DevTools 추적 불필요

### 상태 선택 플로우차트

```
이 데이터가 여러 페이지/컴포넌트에서 필요한가?
├─ NO  → Component State (useState)
└─ YES → 서버에서 자주 변경되는가?
         ├─ YES  → React Query
         └─ NO   → 사용자가 즉시 변경하는가?
                  ├─ YES  → Zustand (UI state)
                  └─ NO   → React Query
```

---

## 5. Framer Motion 사용 지침

### Variants 중앙 관리

```typescript
// ✅ lib/animation/variants.ts
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,      // 각 자식 80ms 간격
      delayChildren: 0.1,          // 처음 100ms 지연
    },
  },
};
```

### 컴포넌트에서 사용

```typescript
// ✅ components/sections/HeroSection/HeroSection.tsx
<motion.div
  className="will-change-transform will-change-opacity"
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={fadeInUp}>제목</motion.h1>
  <motion.p variants={fadeInUp} transition={{ delay: 0.1 }}>
    서브 텍스트
  </motion.p>
</motion.div>
```

### 성능 최적화 팁

```typescript
// ✅ will-change CSS로 GPU 가속화
className="will-change-transform will-change-opacity"

// ✅ 큰 리스트는 staggerChildren으로 점진적 렌더
<motion.div variants={staggerContainer}>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem} />
  ))}
</motion.div>

// ✅ useReducedMotion로 사용자 설정 존중
const shouldReduceMotion = useReducedMotion();
const duration = shouldReduceMotion ? 0.01 : 0.5;
```

### 애니메이션 기본 규칙

```
기본 duration:  0.4-0.6초
Stagger 간격:   0.08-0.12초
Easing:         easeOut (들어올 때), easeInOut (왕복)
최대 응답성:    250ms 이하로 유지
```

---

## 6. 공통 컴포넌트 리스트

### Primitive (components/common/)

| 컴포넌트 | Props 주요 항목 | 사용처 |
|----------|----------------|-------|
| `Button` | variant, size, isLoading, ariaLabel | 모든 CTA, 폼 제출 |
| `Icon` | name, size, color, className | 아이콘 래퍼 (Lucide) |
| `Typography` | as (h1-h6, p, span), className | 텍스트 컨텐츠 |
| `Badge` | variant, size, children | 라벨, 상태 표시 |

### Composite (components/ui/)

| 컴포넌트 | 구성 | 사용처 |
|----------|------|-------|
| `Card` | Header, Body, Footer 섹션 | 서비스/사례/후기 카드 |
| `Modal` | Header, Body, Footer + Framer Motion | 상세 정보 팝업 |
| `Tabs` | TabList, TabPanel + 로컬 state | 이용 안내 섹션 분류 |
| `Accordion` | AccordionItem (제목 + 내용) | 이용 안내 상세 항목 |
| `Timeline` | TimelineItem (단계 + 설명) | 작업 프로세스 시각화 |

### Sections (components/sections/)

| 섹션 | 역할 | 주요 컴포넌트 |
|------|------|--------------|
| `HeroSection` | 첫 인상, 메인 CTA | Hero image, 텍스트, 버튼 |
| `PhilosophySection` | 브랜드 철학 6개 항목 | Icon list |
| `ServiceCardsSection` | 3개 서비스 소개 | ServiceCard × 3 |
| `ProcessSection` | 9단계 작업 프로세스 | Timeline, 단계별 설명 |
| `EquipmentSection` | 4개 장비 소개 | Equipment card × 4 |
| `CaseStudySection` | 사례 그리드 | CaseStudyCard × N (React Query) |
| `ReviewSection` | 고객 후기 | ReviewCard × N (React Query) |
| `CTASection` | 최종 행동 유도 | Call-to-action 버튼 |

---

## 7. 실제 예시 코드

### 7.1 컴포넌트 예시 1: Button 컴포넌트

```typescript
// src/components/common/Button.tsx
import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      ariaLabel,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = clsx(
      'font-semibold rounded-md transition-all duration-250',
      'focus-visible:outline-2 focus-visible:outline-offset-2',
      'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
      fullWidth && 'w-full'
    );

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }[size];

    const variantStyles = {
      primary: 'bg-blue-primary text-white hover:bg-blue-secondary',
      outline: 'border-2 border-blue-primary text-blue-primary hover:bg-blue-light',
      ghost: 'text-black-primary hover:bg-black-secondary hover:bg-opacity-5',
    }[variant];

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, sizeStyles, variantStyles, className)}
        disabled={disabled || isLoading}
        aria-label={ariaLabel}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### 7.2 컴포넌트 예시 2: HeroSection

```typescript
// src/components/sections/HeroSection/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@components/common/Button';
import {
  fadeInUp,
  staggerContainer,
} from '@lib/animation/variants';
import { EXTERNAL_LINKS } from '@lib/constants';

export const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative h-screen bg-black-primary overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* 배경 마블 텍스처 */}
      <Image
        src="/images/hero-marble-bg.jpg"
        alt="Marble texture background"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
        quality={85}
      />

      {/* 오버레이 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-transparent to-black-primary opacity-60" />

      {/* 콘텐츠 */}
      <div className="relative h-full flex flex-col items-center justify-center container mx-auto px-4">
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-elegant font-light tracking-tight text-center text-white mb-6"
        >
          하루 한 집, 깊이를 청소합니다
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl mb-12 leading-relaxed"
        >
          고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록,
          <br className="hidden sm:inline" />
          정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스입니다.
        </motion.p>

        {/* CTA 버튼 그룹 */}
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(EXTERNAL_LINKS.RESERVATION_FORM, '_blank')}
          >
            간편견적문의
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(EXTERNAL_LINKS.YOUTUBE, '_blank')}
          >
            유튜브
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(EXTERNAL_LINKS.INSTAGRAM, '_blank')}
          >
            인스타그램
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
```

### 7.3 Zustand Store 예시

```typescript
// src/store/menuStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type MenuStore = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
  setOpen: (open: boolean) => void;
};

export const useMenuStore = create<MenuStore>(
  persist(
    (set) => ({
      isOpen: false,
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      close: () => set({ isOpen: false }),
      open: () => set({ isOpen: true }),
      setOpen: (open: boolean) => set({ isOpen: open }),
    }),
    {
      name: 'menu-store',
      storage:
        typeof window !== 'undefined'
          ? localStorage
          : undefined,
    }
  )
);

// 사용 예시: src/components/layout/MobileMenu.tsx
import { useMenuStore } from '@store/menuStore';

export function MobileMenu() {
  const { isOpen, close } = useMenuStore();
  
  return isOpen ? <nav onClick={close}>...</nav> : null;
}
```

### 7.4 React Query 예시

```typescript
// src/features/home/queries.ts
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@lib/api/client';
import type { CaseStudy } from '@types';

export const useCaseStudies = (featured?: boolean) => {
  return useQuery({
    queryKey: ['case-studies', { featured }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (featured) params.append('featured', String(featured));
      
      const res = await fetcher(`/api/case-studies?${params}`);
      return res as { data: CaseStudy[]; total: number };
    },
    staleTime: 1000 * 60 * 60,     // 1시간 신선 상태 유지
    gcTime: 1000 * 60 * 60 * 24,   // 24시간 캐시 보관
  });
};

// 사용 예시: src/components/sections/CaseStudySection/CaseStudySection.tsx
export function CaseStudySection() {
  const { data, isLoading } = useCaseStudies(true);
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.data.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
      ))}
    </div>
  );
}
```

### 7.5 Animation Variants 예시

```typescript
// src/lib/animation/variants.ts
import { Variants } from 'framer-motion';

// 간단한 페이드인 업
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// 컨테이너 (자식들을 엇갈려 애니메이션)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,      // 각 자식 80ms 간격
      delayChildren: 0.1,          // 처음 100ms 지연
    },
  },
};

// 스케일인 (축소 상태에서 확대)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// 호버 효과
export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
};
```

---

## 8. 유지보수 & 확장 팁

### 1. 컴포넌트 분리 원칙

**Rule**: 컴포넌트는 **하나의 책임**만 가져야 합니다.

```typescript
// ❌ 너무 큼 (책임 3개)
export function ServiceSection() {
  const [filter, setFilter] = useState('all');
  const services = useServices(filter);
  
  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
      </select>
      {services.map(s => (...))}
    </div>
  );
}

// ✅ 분리됨 (각각 책임 1개)
export function ServiceFilter({ value, onChange }) {
  return <select onChange={onChange}><option>All</option></select>;
}

export function ServiceList({ services }) {
  return services.map(s => <ServiceCard key={s.id} {...s} />);
}

export function ServiceSection() {
  const [filter, setFilter] = useState('all');
  const services = useServices(filter);
  
  return (
    <div>
      <ServiceFilter value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ServiceList services={services} />
    </div>
  );
}
```

### 2. 타입 안전성 극대화

```typescript
// ✅ 타입으로 계약 정의
interface Service {
  id: string;
  name: string;
  slug: string;
  icon: 'home' | 'moving-van' | 'paint-brush'; // 제한된 값
}

// ✅ Zod로 런타임 검증
import { z } from 'zod';

const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.enum(['home', 'moving-van', 'paint-brush']),
});

const data = ServiceSchema.parse(apiResponse);  // 타입 가드
```

### 3. API 요청 중앙 관리

```typescript
// ✅ lib/api/client.ts에 모든 fetcher 통합
export const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
};

// ✅ 모든 쿼리에서 이 fetcher 사용
export const useCaseStudies = () =>
  useQuery({
    queryKey: ['case-studies'],
    queryFn: () => fetcher('/api/case-studies'),
  });
```

### 4. 애니메이션 라이브러리 일관성

```typescript
// ✅ lib/animation/variants.ts에 모든 variants 정의
export const fadeInUp = { ... };
export const slideInLeft = { ... };
export const staggerContainer = { ... };

// ❌ 컴포넌트마다 variants 정의 금지
// Bad: const fadeIn = { ... } in HeroSection.tsx
```

### 5. 상태 관리 명확한 경계

```typescript
// ✅ 무엇을 어디에 저장할지 명확
const [filter, setFilter] = useState('all');           // 로컬 state
const { isOpen } = useMenuStore();                     // Zustand (UI)
const { data: cases } = useCaseStudies();              // React Query (서버)

// ❌ 혼용 금지
// const [isOpen, setIsOpen] = useMenuStore();  // 혼동
```

### 6. 반응형 설계 우선

```typescript
// ✅ Mobile-first Tailwind
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
  {/* 모바일: 100%, 태블릿: 50%, 데스크톱: 25% */}
</div>

// ✅ useBreakpoint 훅 사용
const isMobile = useBreakpoint('md');
if (isMobile) return <MobileMenu />;
return <DesktopNav />;
```

### 7. 이미지 최적화 필수

```typescript
// ✅ Next.js Image 사용 (자동 최적화)
<Image
  src="/images/case-001.jpg"
  alt="Case study photo"
  width={600}
  height={400}
  placeholder="blur"      // 로딩 시 블러 효과
  blurDataURL="..."       // 작은 placeholder 이미지
  priority={isFold}       // 스크롤 폴드 위면 preload
/>

// ❌ HTML img 금지
// <img src="/images/case-001.jpg" />
```

### 8. 접근성(a11y) 필수 항목

```typescript
// ✅ 접근성 체크리스트
<button aria-label="메뉴 열기">🍔</button>                    // aria-label
<h1 className="heading-h1">제목</h1>                          // 시맨틱 HTML
<input disabled={true} className="disabled:opacity-50" />    // 시각적 피드백
:focus-visible { outline: 2px solid blue; }                  // 포커스 스타일

// ❌ 접근성 위반
<div onClick={openMenu}>🍔</div>                             // 키보드 불가
<span className="text-3xl font-bold">제목</span>             // h1 부재
```

---

## 9. 최종 체크리스트

### 개발 전 준비

- [ ] 모든 의존성 설치 (`npm install framer-motion zustand @tanstack/react-query zod lucide-react`)
- [ ] TypeScript 경로 별칭 설정 (tsconfig.json `paths`)
- [ ] Tailwind CSS v4 @theme 설정 확인
- [ ] Zustand, React Query provider를 `app/layout.tsx`에 통합

### 컴포넌트 개발 체크

- [ ] 컴포넌트 분류 (Primitive/Composite/Organism)
- [ ] Props 인터페이스 정의 (TypeScript)
- [ ] Tailwind 클래스 사용 (인라인 CSS 금지)
- [ ] 접근성 고려 (aria-label, focus-visible, semantic HTML)
- [ ] 반응형 테스트 (sm/md/lg 중단점)
- [ ] Framer Motion 애니메이션 (해당할 때)

### 성능 최적화 확인

- [ ] 이미지 최적화 (`next/image`, WebP)
- [ ] Dynamic import 사용 (대형 컴포넌트)
- [ ] React Query staleTime, gcTime 설정
- [ ] will-change CSS로 애니메이션 최적화
- [ ] Code splitting 자동 적용 (Next.js)

### 배포 전 체크

- [ ] Lighthouse 점수 90+ (Performance, Accessibility, Best Practices)
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] SEO: meta tags, Open Graph, sitemap
- [ ] 모바일 테스트 (iOS Safari, Android Chrome)
- [ ] 폼 검증 (Zod)
- [ ] 오류 핸들링 (React Query error states)

---

## 10. 참고 문서

**내부 문서**:
- 📘 `specs/001-premium-cleaning-website/spec.md` — 기능 명세
- 🔬 `specs/001-premium-cleaning-website/research.md` — 기술 리서치 (Phase 0)
- 📊 `specs/001-premium-cleaning-website/data-model.md` — 데이터 모델 (Phase 1)
- 📋 `specs/001-premium-cleaning-website/quickstart.md` — 개발 시작 가이드
- 🔧 `specs/001-premium-cleaning-website/contracts/api.openapi.yaml` — API 명세

**외부 문서**:
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Hooks Reference](https://react.dev/reference/react/hooks)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://zod.dev)

---

**아키텍처 완성**: 2025-12-04 ✅  
**다음 단계**: Phase 2 - 실제 컴포넌트 구현 시작

