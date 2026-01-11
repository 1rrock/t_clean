# Quickstart Guide

**Status**: Complete  
**Target Audience**: 개발자 온보딩, 신규 컴포넌트 개발  
**Prerequisites**: research.md ✅, data-model.md ✅

---

## 1. 개발 환경 설정

### 1.1 필수 패키지 설치 (이미 설치됨)

```bash
cd /Users/1rrock/project/tclean

# 패키지 확인
npm list
# next@16.0.7
# react@19.2.0
# tailwindcss@4
# framer-motion@11 (추가 필요)
# @tanstack/react-query@5 (추가 필요)
# zustand@4 (추가 필요)
# zod@3 (추가 필요)
# lucide-react (추가 필요)
```

### 1.2 필요한 의존성 추가

```bash
npm install framer-motion @tanstack/react-query zustand zod lucide-react
npm install --save-dev @types/node @types/react @types/react-dom vitest @testing-library/react @testing-library/jest-dom
```

### 1.3 TypeScript 설정 확인

```bash
# tsconfig.json 이미 존재, 경로 별칭 확인
cat tsconfig.json
# {
#   "compilerOptions": {
#     "baseUrl": ".",
#     "paths": {
#       "@/*": ["src/*"],
#       "@components/*": ["src/components/*"],
#       "@lib/*": ["src/lib/*"],
#       "@hooks/*": ["src/hooks/*"],
#       "@store/*": ["src/store/*"],
#       "@types/*": ["src/types/*"],
#       "@utils/*": ["src/utils/*"],
#       "@assets/*": ["src/assets/*"]
#     }
#   }
# }
```

---

## 2. 프로젝트 구조 생성

### 2.1 기본 폴더 구조 스캐폴딩

```bash
# src 디렉터리 생성
mkdir -p src/{components,features,store,hooks,lib,styles,assets,types,utils}

# components 하위 구조
mkdir -p src/components/{common,layout,ui,sections}

# features 하위 구조
mkdir -p src/features/{home,service,reservation,common}/{hooks,components,queries}

# lib 하위 구조
mkdir -p src/lib/{api/services,animation}

# assets 하위 구조
mkdir -p src/assets/{images,textures,icons}
```

### 2.2 주요 파일 생성 목록

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   ├── Typography.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── ui/
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Tabs.tsx
│   │   ├── Timeline.tsx
│   │   └── Accordion.tsx
│   └── sections/
│       ├── HeroSection/
│       │   ├── HeroSection.tsx
│       │   └── HeroSection.styles.ts
│       ├── PhilosophySection/PhilosophySection.tsx
│       └── ... (8개 섹션 총)
├── features/
│   ├── home/
│   │   ├── hooks/useHeroAnimation.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   ├── service/
│   │   ├── components/ServiceDetailModal.tsx
│   │   ├── hooks/useServiceFilter.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   ├── reservation/
│   │   ├── hooks/useReservationForm.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   └── common/
│       ├── hooks/useScrollAnimation.ts
│       └── queries.ts
├── store/
│   ├── menuStore.ts
│   ├── modalStore.ts
│   ├── uiStore.ts
│   └── index.ts
├── hooks/
│   ├── useScrollReveal.ts
│   ├── useMedia.ts
│   ├── useForm.ts
│   ├── useIntersectionObserver.ts
│   └── useBreakpoint.ts
├── lib/
│   ├── api/
│   │   ├── client.ts
│   │   └── services/
│   │       ├── reservation.ts
│   │       └── content.ts
│   ├── animation/
│   │   └── variants.ts
│   ├── constants.ts
│   ├── validators.ts
│   └── classNames.ts
├── styles/
│   ├── tailwind.css
│   └── tokens.ts
├── assets/
│   ├── images/
│   ├── textures/
│   └── icons/
├── types/
│   └── index.d.ts
└── utils/
    ├── format.ts
    ├── classNames.ts
    └── scroll.ts
```

---

## 3. 핵심 파일 작성 샘플

### 3.1 Tailwind CSS 설정 (`src/styles/tailwind.css`)

```css
@import "tailwindcss";

/* Tailwind v4 @theme 설정 */
@theme {
  --color-black-primary: #000000;
  --color-black-secondary: #1a1a1a;
  --color-black-tertiary: #2d2d2d;
  --color-blue-primary: #4a90e2;
  --color-blue-secondary: #2c5aa0;
  --color-blue-light: #e8f0f8;
  --color-marble-light: #f5f5f5;
  --color-marble-dark: #e8e8e8;
  --color-marble-texture: #efefef;
  
  --spacing-safe: max(1rem, env(safe-area-inset-bottom));
  
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  
  --font-elegant: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
}

/* 커스텀 컴포넌트 클래스 */
@layer components {
  .bg-marble {
    @apply bg-gradient-to-br from-marble-light to-marble-dark;
  }
  
  .text-elegant {
    @apply text-black-primary font-light tracking-wide;
  }
  
  .btn {
    @apply px-6 py-3 font-semibold rounded-md transition-colors;
    @apply bg-blue-primary text-white hover:bg-blue-secondary;
    @apply focus-visible:outline-blue-primary focus-visible:outline-offset-2;
  }
  
  .btn-outline {
    @apply px-6 py-3 font-semibold border border-blue-primary text-blue-primary rounded-md;
    @apply hover:bg-blue-light transition-colors;
  }
  
  .btn-ghost {
    @apply px-6 py-3 text-black-primary hover:bg-black-secondary hover:bg-opacity-5 rounded-md;
  }
  
  .container {
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
  }
  
  .section {
    @apply py-16 sm:py-20 lg:py-24;
  }
  
  .heading-h1 {
    @apply text-h1 font-elegant font-light tracking-tight;
  }
  
  .heading-h2 {
    @apply text-h2 font-elegant font-light tracking-tight;
  }
  
  .heading-h3 {
    @apply text-h3 font-elegant font-light;
  }
}

/* 글로벌 스타일 */
body {
  @apply bg-black-primary text-white-primary font-elegant antialiased;
  @apply scroll-smooth;
}

/* 포커스 스타일 (접근성) */
:focus-visible {
  @apply outline-2 outline-offset-2 outline-blue-primary;
}

/* Reduced motion (모션 민감도 낮은 사용자) */
@media (prefers-reduced-motion: reduce) {
  * {
    @apply !animate-none !transition-none;
  }
}

/* 스크롤 바 커스터마이징 (WebKit) */
::-webkit-scrollbar {
  @apply w-2 h-2;
}

::-webkit-scrollbar-track {
  @apply bg-black-secondary;
}

::-webkit-scrollbar-thumb {
  @apply bg-blue-primary rounded-full hover:bg-blue-secondary;
}
```

### 3.2 컬러 토큰 (`src/lib/styles/tokens.ts`)

```typescript
// lib/styles/tokens.ts
export const colors = {
  black: {
    primary: 'var(--color-black-primary)',      // #000000
    secondary: 'var(--color-black-secondary)',  // #1a1a1a
    tertiary: 'var(--color-black-tertiary)',    // #2d2d2d
  },
  blue: {
    primary: 'var(--color-blue-primary)',       // #4a90e2
    secondary: 'var(--color-blue-secondary)',   // #2c5aa0
    light: 'var(--color-blue-light)',           // #e8f0f8
  },
  marble: {
    light: 'var(--color-marble-light)',         // #f5f5f5
    dark: 'var(--color-marble-dark)',           // #e8e8e8
    texture: 'var(--color-marble-texture)',     // #efefef
  },
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

export const spacing = {
  safe: 'var(--spacing-safe)',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '4rem',
} as const;

export const radius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  full: '9999px',
} as const;

export const typography = {
  h1: {
    fontSize: 'var(--font-size-h1)',
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: 'var(--font-size-h2)',
    fontWeight: 300,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 'var(--font-size-h3)',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  body: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  small: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
} as const;

export const transitions = {
  fast: '150ms ease-in-out',
  default: '250ms ease-in-out',
  slow: '350ms ease-in-out',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
```

### 3.3 Zustand Store 예시 (`src/store/menuStore.ts`)

```typescript
// store/menuStore.ts
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
      partialize: (state) => ({
        isOpen: state.isOpen,
      }),
    }
  )
);
```

### 3.4 Framer Motion Variants (`src/lib/animation/variants.ts`)

```typescript
// lib/animation/variants.ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

export const tapScale = {
  whileTap: { scale: 0.98 },
  transition: { duration: 0.1 },
};
```

### 3.5 컴포넌트 예시: Button (`src/components/common/Button.tsx`)

```typescript
// components/common/Button.tsx
import React from 'react';
import { clsx } from 'clsx';
import { colors } from '@lib/styles/tokens';

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
      fullWidth && 'w-full',
    );

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }[size];

    const variantStyles = {
      primary: clsx(
        'bg-blue-primary text-white',
        'hover:bg-blue-secondary focus-visible:outline-blue-primary',
        'disabled:bg-gray-400',
      ),
      outline: clsx(
        'border-2 border-blue-primary text-blue-primary',
        'hover:bg-blue-light focus-visible:outline-blue-primary',
        'disabled:border-gray-400 disabled:text-gray-400',
      ),
      ghost: clsx(
        'text-black-primary hover:bg-black-secondary hover:bg-opacity-5',
        'focus-visible:outline-black-primary',
      ),
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

### 3.6 섹션 컴포넌트 예시: HeroSection (`src/components/sections/HeroSection/HeroSection.tsx`)

```typescript
// components/sections/HeroSection/HeroSection.tsx
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
      {/* 배경 이미지 */}
      <Image
        src="/images/hero-marble-bg.jpg"
        alt="Marble texture background"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
        quality={85}
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-transparent to-black-primary opacity-60" />

      {/* 컨텐츠 */}
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
          className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl mb-12"
        >
          고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록,
          정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스입니다.
        </motion.p>

        {/* CTA 버튼 */}
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            asChild
          >
            <a href={EXTERNAL_LINKS.RESERVATION_FORM} target="_blank" rel="noopener noreferrer">
              간편견적문의
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href={EXTERNAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
              유튜브
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href={EXTERNAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
              인스타그램
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
```

### 3.7 React Query 훅 예시 (`src/features/home/queries.ts`)

```typescript
// features/home/queries.ts
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@lib/api/client';
import type { CaseStudy, Review } from '@types';

export const useCaseStudies = (featured?: boolean) => {
  return useQuery({
    queryKey: ['case-studies', { featured }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (featured !== undefined) params.append('featured', String(featured));
      
      const data = await fetcher(`/api/case-studies?${params.toString()}`);
      return data as { data: CaseStudy[]; total: number };
    },
    staleTime: 1000 * 60 * 60, // 1시간
    gcTime: 1000 * 60 * 60 * 24, // 24시간 (기존 cacheTime)
  });
};

export const useReviews = (limit?: number) => {
  return useQuery({
    queryKey: ['reviews', { limit }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (limit) params.append('limit', String(limit));
      params.append('verified', 'true');

      const data = await fetcher(`/api/reviews?${params.toString()}`);
      return data as { data: Review[]; total: number };
    },
    staleTime: 1000 * 60 * 30, // 30분
  });
};
```

### 3.8 API Client 설정 (`src/lib/api/client.ts`)

```typescript
// lib/api/client.ts
export const fetcher = async (
  url: string | URL,
  init?: RequestInit
): Promise<any> => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  });

  if (!res.ok) {
    const error = new Error(`API Error: ${res.status}`);
    throw error;
  }

  return res.json();
};

// 재시도 로직이 필요한 경우
export const fetcherWithRetry = async (
  url: string | URL,
  init?: RequestInit,
  retries: number = 3
): Promise<any> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetcher(url, init);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};
```

### 3.9 상수 정의 (`src/lib/constants.ts`)

```typescript
// lib/constants.ts
export const EXTERNAL_LINKS = {
  RESERVATION_FORM: 'https://forms.gle/YOUR_FORM_ID',
  YOUTUBE: 'https://youtube.com/@tclean',
  INSTAGRAM: 'https://www.instagram.com/t_cleaning_',
} as const;

export const SITE_CONFIG = {
  name: '믿고 맡기는 청소',
  description: '프리미엄 공실 청소 서비스',
  url: 'https://www.trustmygroup.co.kr/',
  ogImage: 'https://www.trustmygroup.co.kr/logo.png',
  socialLinks: EXTERNAL_LINKS,
} as const;

export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: '소개', href: '/about' },
  { label: '서비스', href: '/service' },
  { label: '작업 방식', href: '/how-we-work' },
  { label: '장비 & 시스템', href: '/equipment' },
  { label: '시공 사례', href: '/case-study' },
  { label: '후기', href: '/review' },
  { label: '이용 안내', href: '/notice' },
  { label: '견적 / 예약', href: EXTERNAL_LINKS.RESERVATION_FORM },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATION_DURATION = {
  FAST: 0.15,
  DEFAULT: 0.25,
  SLOW: 0.35,
} as const;
```

---

## 4. 디렉터리 초기화 명령어

```bash
# 모든 필수 폴더 한 번에 생성
mkdir -p \
  src/{components/{common,layout,ui,sections},features/{home,service,reservation,common}/{hooks,components,queries},store,hooks,lib/{api/services,animation},styles,assets/{images,textures,icons},types,utils}

# 각 섹션별 컴포넌트 폴더
mkdir -p \
  src/components/sections/{HeroSection,PhilosophySection,ServiceCardsSection,ProcessSection,EquipmentSection,CaseStudySection,ReviewSection,CTASection}
```

---

## 5. 컴포넌트 생성 체크리스트

### 5.1 Common 컴포넌트 (Primitive)

- [ ] `Button.tsx` — 기본 버튼, variant (primary/outline/ghost)
- [ ] `Icon.tsx` — Lucide 아이콘 래퍼
- [ ] `Typography.tsx` — Heading, Paragraph, Label
- [ ] `Badge.tsx` — 배지 컴포넌트

### 5.2 Layout 컴포넌트

- [ ] `Header.tsx` — 로고, 메뉴, CTA 버튼
- [ ] `Footer.tsx` — 회사 정보, 소셜 링크
- [ ] `MobileMenu.tsx` — 햄버거 메뉴 (Zustand + Framer Motion)

### 5.3 UI 컴포넌트 (Composite)

- [ ] `Card.tsx` — 범용 카드 컴포넌트
- [ ] `Modal.tsx` — 모달 컴포넌트 (Framer Motion)
- [ ] `Tabs.tsx` — 탭 컴포넌트 (React 상태)
- [ ] `Timeline.tsx` — 타임라인 (How We Work)
- [ ] `Accordion.tsx` — 아코디언 (Notice)

### 5.4 Section 컴포넌트 (8개)

- [ ] `HeroSection/HeroSection.tsx`
- [ ] `PhilosophySection/PhilosophySection.tsx`
- [ ] `ServiceCardsSection/ServiceCardsSection.tsx`
- [ ] `ProcessSection/ProcessSection.tsx`
- [ ] `EquipmentSection/EquipmentSection.tsx`
- [ ] `CaseStudySection/CaseStudySection.tsx`
- [ ] `ReviewSection/ReviewSection.tsx`
- [ ] `CTASection/CTASection.tsx`

---

## 6. 페이지 구성 예시

### 홈 페이지 (`app/page.tsx`)

```typescript
// app/page.tsx
import { HeroSection } from '@components/sections/HeroSection/HeroSection';
import { PhilosophySection } from '@components/sections/PhilosophySection/PhilosophySection';
import { ServiceCardsSection } from '@components/sections/ServiceCardsSection/ServiceCardsSection';
import { CTASection } from '@components/sections/CTASection/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServiceCardsSection />
      <CTASection />
    </>
  );
}
```

---

## 7. 다음 단계

1. ✅ **Phase 0**: research.md 완성
2. ✅ **Phase 1**: data-model.md, contracts/api.openapi.yaml 완성
3. ✅ **Phase 1**: quickstart.md 완성 (현재 파일)
4. **Phase 2**: 실제 컴포넌트 구현 시작
   - 기본 컴포넌트부터 구현
   - 섹션 컴포넌트 조합
   - 페이지별 통합

---

## 8. 참고 자료

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Hooks](https://react.dev/reference/react/hooks)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://zod.dev)
- [Lucide Icons](https://lucide.dev)

