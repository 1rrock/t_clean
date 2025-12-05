# Implementation Plan: Premium Cleaning Service Website - Frontend Architecture & Component System

**Branch**: `001-premium-cleaning-website` | **Date**: 2025-12-04 | **Spec**: `/specs/001-premium-cleaning-website/spec.md`
**Input**: Feature specification from `/specs/001-premium-cleaning-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

프리미엄 공실 청소 서비스 웹사이트의 **프론트엔드 아키텍처, 컴포넌트 설계, 상태관리, 애니메이션 가이드**를 정의합니다. 
고급·단정·모던한 톤앤무드(블랙 베이스 + 블루 포인트, 마블 질감)를 구현하며, 정보 제공 중심 사이트로 SSR 불필요, 
빠른 페이지 로드와 부드러운 UI/UX 애니메이션을 중심으로 설계합니다.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19.x (Functional Components with Hooks)  
**Framework**: Next.js 16.0.7 (with App Router) — 정적 생성(SSG) + ISR 최적화  
**Primary Dependencies**: 
- React Query (TanStack Query v5) — 서버 캐싱 & 비동기 데이터
- Zustand — UI 상태(메뉴, 모달, 토글)
- Framer Motion v11 — 페이지 전환/스크롤 애니메이션  
- Tailwind CSS v4 — Utility-first 스타일링
- Lucide Icons — 아이콘 라이브러리
- Zod — 폼 validation  

**Storage**: N/A (정보 사이트 — 클라이언트 폼은 Google Forms 외부 처리)  
**Testing**: Vitest (unit), Playwright (e2e) — 향후 추가  
**Target Platform**: Web (Desktop/Tablet/Mobile responsive)  
**Project Type**: Web — Single SPA/Frontend (API별도 없음, Google Forms 외부 연동)  
**Performance Goals**: 
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices)
- FCP < 1.5s, LCP < 2.5s
- 부드러운 애니메이션 (60fps, no jank)
- 모바일 우선 반응형 설계

**Constraints**: 
- 레이아웃 쉬프트 최소화 (CLS < 0.1)
- 접근성 준수 (WCAG 2.1 AA)
- 다크모드 기본 (검은 배경 중심)
- 마블/고급 질감 이미지 최적화 필요

**Scale/Scope**: 
- 9개 메인 페이지 + 홈
- 약 50-60개 React 컴포넌트 예상
- 10개 이상 섹션 컴포넌트
- 모바일 우선, 반응형 중단점 3개 (sm: 640px, md: 768px, lg: 1024px)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

⚠️ **Constitution 파일이 템플릿 상태이므로 기본 소프트웨어 개발 원칙 적용**:
- ✅ 명확한 목적 (정보 제공 + 견적 유도 웹사이트)
- ✅ 독립적 컴포넌트 설계 (재사용 가능한 UI 컴포넌트)
- ✅ 타입 안전성 (TypeScript 전수)
- ✅ 테스트 가능한 구조 (계층 분리)
- ✅ 문서화 (아키텍처 가이드, 컴포넌트 가이드)
- ✅ 성능 최적화 (동적 import, 이미지 최적화, 애니메이션 효율)

**Gate Status**: ✅ PASS — 기본 원칙 모두 준수, 특수 제약 없음

## Project Structure

### Documentation (this feature)

```text
specs/001-premium-cleaning-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
/Users/1rrock/project/tclean/ (Next.js 16 App Router)

app/
├── layout.tsx               # 전역 레이아웃, 메타 설정, Provider 설정
├── page.tsx                 # 홈 페이지 (route: /)
├── about/
│   └── page.tsx             # 소개 페이지 (route: /about)
├── service/
│   └── page.tsx             # 서비스 페이지 (route: /service)
├── how-we-work/
│   └── page.tsx             # 작업 방식 페이지 (route: /how-we-work)
├── equipment/
│   └── page.tsx             # 장비 & 시스템 페이지 (route: /equipment)
├── case-study/
│   └── page.tsx             # 시공 사례 페이지 (route: /case-study)
├── review/
│   └── page.tsx             # 후기 페이지 (route: /review)
├── notice/
│   └── page.tsx             # 이용 안내 페이지 (route: /notice)
├── reservation/
│   └── page.tsx             # 견적/예약 페이지 (route: /reservation)
├── globals.css              # 전역 스타일 + Tailwind base 임포트
└── providers.tsx            # React Query + Zustand provider wrapper

src/
├── components/
│   ├── common/              # Primitive UI 컴포넌트
│   │   ├── Button.tsx           # 범용 버튼 (variant: primary/outline/ghost)
│   │   ├── Icon.tsx             # 아이콘 래퍼
│   │   ├── Typography.tsx       # 텍스트 기반 컴포넌트 (Heading, Paragraph, Label)
│   │   └── Badge.tsx            # 배지 컴포넌트
│   │
│   ├── layout/              # 전역 레이아웃 컴포넌트
│   │   ├── Header.tsx           # 헤더 (로고 + 메뉴 + CTA 버튼)
│   │   ├── Footer.tsx           # 푸터
│   │   └── MobileMenu.tsx       # 햄버거 메뉴 (모바일)
│   │
│   ├── ui/                  # Composite UI 컴포넌트
│   │   ├── Card.tsx             # 서비스/사례/후기 카드
│   │   ├── Modal.tsx            # 모달 컴포넌트
│   │   ├── Tabs.tsx             # 탭 컴포넌트 (Notice 섹션용)
│   │   ├── Timeline.tsx         # 타임라인 (How We Work용)
│   │   └── Accordion.tsx        # 아코디언 (Notice용)
│   │
│   └── sections/            # 페이지 섹션 컴포넌트 (재사용 가능)
│       ├── HeroSection/
│       │   ├── HeroSection.tsx
│       │   └── HeroSection.styles.ts    # 스타일 상수 (Tailwind variables)
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
├── features/                # 도메인/기능 단위 묶음 (비즈니스 로직)
│   ├── home/
│   │   ├── hooks/
│   │   │   └── useHeroAnimation.ts    # 홈 페이지 애니메이션 로직
│   │   ├── queries.ts                 # React Query 쿼리 (향후: 사례/후기 데이터)
│   │   └── types.ts                   # 도메인 타입
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
│   │   ├── queries.ts                 # 향후: 예약 데이터 처리
│   │   └── types.ts
│   │
│   └── common/
│       ├── hooks/
│       │   └── useScrollAnimation.ts   # 스크롤 기반 애니메이션
│       └── queries.ts                 # 공통 쿼리 (향후: 전역 설정)
│
├── store/                   # Zustand 전역 상태
│   ├── menuStore.ts             # 모바일 메뉴 열기/닫기
│   ├── modalStore.ts            # 모달 상태 관리
│   ├── uiStore.ts               # UI 토글 상태 (탭, 필터 등)
│   └── index.ts                 # 스토어 내보내기
│
├── hooks/                   # 커스텀 훅 (횡단 관심사)
│   ├── useScrollReveal.ts       # 스크롤 시 요소 나타나기
│   ├── useMedia.ts              # 미디어 쿼리 훅 (반응형)
│   ├── useForm.ts               # 폼 핸들링 (Zod validation)
│   ├── useIntersectionObserver.ts
│   └── useBreakpoint.ts
│
├── lib/
│   ├── api/
│   │   ├── client.ts            # fetch/axios 기본 설정 (React Query fetcher)
│   │   └── services/
│   │       ├── reservation.ts       # 예약 API 호출 함수
│   │       └── content.ts           # 콘텐츠 API 호출 (향후)
│   │
│   ├── animation/
│   │   └── variants.ts          # Framer Motion variants 중앙 관리
│   │
│   ├── constants.ts             # 상수 (경로, 외부 링크, 설정값)
│   ├── validators.ts            # Zod 스키마 (폼 검증)
│   └── classNames.ts            # clsx/classnames 유틸
│
├── styles/
│   ├── tailwind.css             # Tailwind 설정 + 커스텀 CSS 변수
│   └── tokens.ts                # 색상·간격·타이포그래피 토큰
│
├── assets/
│   ├── images/                  # 정적 이미지
│   │   ├── hero-bg.jpg
│   │   ├── marble-texture.jpg   # 마블 질감 배경
│   │   ├── case-studies/        # 시공 사례 이미지
│   │   └── ...
│   ├── textures/                # 배경 텍스처
│   └── icons/                   # 커스텀 아이콘 (SVG)
│
├── types/
│   └── index.d.ts               # 전역 타입 정의
│       # Service, CaseStudy, Review, Process 타입
│
└── utils/
    ├── format.ts                # 텍스트 포맷팅 (숫자, 날짜, 전화번호)
    ├── classNames.ts            # 클래스명 병합 유틸
    └── scroll.ts                # 스크롤 유틸 (smooth scroll, scroll top 등)

public/
├── images/                      # Next.js 최적화 이미지
└── fonts/                       # 커스텀 폰트 (선택)

tests/                           # 향후 추가
├── unit/
├── integration/
└── e2e/
```

**Structure Decision**: ✅ **Next.js App Router + Feature-Driven Architecture**

선택 이유:
1. **Next.js 16 App Router** — 기존 프로젝트 환경 준수, SSG 최적화, 빌트인 성능 기능
2. **Feature-driven (도메인별)** — 페이지별 비즈니스 로직 분리, 확장성 우수
3. **Primitive + Composite 분리** — 컴포넌트 재사용성 극대화
4. **Sections 컴포넌트** — 페이지 구성 단위로 관리 용이
5. **중앙 집중식 애니메이션/상태** — 일관성 있는 UX

## Complexity Tracking

> **Constitution Check passed — No violations requiring justification**

| Consideration | Decision | Rationale |
|---------------|----------|-----------|
| Monolithic vs Micro | Monolithic Next.js SPA | 정보 제공 사이트, 초기 규모가 작고, 확장 가능한 구조 설계 |
| State Management Lib | Zustand + React Query | 경량, 타입 안전, 반복 보일러플레이트 최소화 |
| Animation Library | Framer Motion | 성능 최적화, 선언형 API, GPU 가속 |
| Form Library | Zod + React Hook Form (향후) | 런타임 검증, 타입 세이프, 경량 |
| Testing Framework | Vitest (향후) | Next.js 호환, Vite 기반, 빠른 피드백 |

---

## Phase 0: Outline & Research

**Status**: 진행 예정

### Research Tasks (NEEDS CLARIFICATION 해결)

1. **Framer Motion 성능 최적화** — 큰 리스트 애니메이션 시 60fps 유지 방법
2. **Tailwind CSS v4 설정** — 커스텀 컬러 토큰(마블 텍스처, 블루 포인트) 통합
3. **SEO 최적화** — Next.js static generation, meta tags, Open Graph
4. **이미지 최적화** — Next.js Image, WebP 포맷, lazy loading
5. **접근성 (A11y)** — WCAG 2.1 AA, 다크모드, 캡션, 스크린 리더
6. **모바일 반응형 테스트** — 실기기 테스트 기준, 디버깅 도구
7. **Google Forms 통합** — iframe vs 외부 링크, 데이터 추적 (GA4)

### Research Output (향후 생성)

`research.md` — 각 주제별 결정사항, 대안 검토, 참고 자료

---

## Phase 1: Design & Contracts (향후 작성)

**Prerequisites**: research.md 완성

### 1.1 Data Model (`data-model.md`)

주요 엔티티:
- **Service**: 입주청소, 이사청소, 인테리어 후 청소
- **CaseStudy**: 시공 사례 (타입, 평수, 설명, 이미지)
- **Review**: 고객 후기 (스크린샷, 텍스트)
- **Process**: 작업 프로세스 (9단계)
- **Equipment**: 장비 정보 (4개 항목)

### 1.2 API Contracts (`contracts/`)

- `services.openapi.json` — 서비스 데이터 스키마
- `case-studies.openapi.json` — 사례 데이터 스키마
- `reviews.openapi.json` — 후기 데이터 스키마

### 1.3 Quickstart (`quickstart.md`)

개발 초기 설정, 컴포넌트 생성 예시, 스토어 사용법

### 1.4 Agent Context Update

`.specify/scripts/bash/update-agent-context.sh copilot` 실행 예정

---

## Timeline & Next Steps

1. **Phase 0 (Research)** → `research.md` 생성 (AI 에이전트)
2. **Phase 1 (Design)** → `data-model.md`, `contracts/`, `quickstart.md` 생성
3. **Phase 2 (Tasks)** → `/speckit.tasks` 로 task.md 자동 생성
4. **Implementation** → 실제 코드 작성 시작
