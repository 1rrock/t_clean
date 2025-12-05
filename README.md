# 믿고 맡기는 청소 - 프리미엄 공실 청소 서비스

고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록, 정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스 웹사이트입니다.

## 🎨 디자인 컨셉

- **컬러**: 네이비 블루 (#1a3a6e) 베이스 + 블루 포인트
- **톤앤무드**: 고급 / 단정 / 모던 / 절제
- **폰트**: Pretendard

## 🛠 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **UI 라이브러리**: MUI (Material-UI) v7
- **스타일링**: Tailwind CSS v4 + Emotion
- **애니메이션**: Framer Motion
- **상태 관리**: Zustand
- **데이터 페칭**: TanStack React Query
- **아이콘**: Lucide React

## 📁 프로젝트 구조

```
mclean/
├── app/                          # Next.js App Router
│   ├── about/                   # 소개 페이지
│   ├── service/                 # 서비스 페이지
│   ├── how-we-work/            # 작업 방식 페이지
│   ├── equipment/              # 장비 & 시스템 페이지
│   ├── case-study/             # 시공 사례 페이지
│   ├── review/                 # 후기 페이지
│   ├── notice/                 # 이용 안내/필독사항 페이지
│   ├── reservation/            # 견적/예약 페이지
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 홈 페이지
│   ├── providers.tsx           # 전역 프로바이더
│   └── globals.css             # 전역 스타일
├── src/
│   ├── components/
│   │   ├── common/            # 공통 컴포넌트 (Button 등)
│   │   ├── layout/            # 레이아웃 컴포넌트 (Header, Footer)
│   │   └── sections/          # 섹션 컴포넌트 (Hero, Philosophy 등)
│   ├── lib/
│   │   ├── animation/         # Framer Motion variants
│   │   └── theme/             # MUI 테마 설정
│   ├── store/                 # Zustand 스토어
│   ├── hooks/                 # 커스텀 훅
│   └── types/                 # TypeScript 타입 정의
└── public/                    # 정적 파일 (이미지, 로고 등)
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 📄 페이지 구성

1. **Home** - 메인 페이지
   - 히어로 섹션
   - 브랜드 철학
   - 핵심 서비스 카드
   - 작업 원칙

2. **소개 (About)** - 회사 소개 및 브랜드 철학

3. **서비스 (Service)** - 서비스 상세 및 청소 범위

4. **작업 방식 (How We Work)** - 작업 프로세스

5. **장비 & 시스템 (Equipment)** - 사용 장비 소개

6. **시공 사례 (Case Study)** - 작업 사례 (준비 중)

7. **후기 (Review)** - 고객 후기

8. **이용 안내 (Notice)** - 필독사항 및 정책

9. **견적/예약 (Reservation)** - 견적 문의 페이지

## 🎯 주요 기능

- ✅ 서버 컴포넌트 기반 SSR (웹 접근성, SEO 최적화)
- ✅ 반응형 디자인 (Mobile → Tablet → Desktop)
- ✅ 부드러운 애니메이션 (Framer Motion)
- ✅ 모던한 UI/UX (MUI v7)
- ✅ 타입 안정성 (TypeScript)
- ✅ Pretendard 폰트 적용

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: #1a3a6e (네이비 블루)
- **Secondary**: #3d7dd8 (브라이트 블루)
- **Background**: #ffffff
- **Text**: #1a1a1a

### 타이포그래피

- **폰트 패밀리**: Pretendard
- **H1**: 3rem (48px) / 700
- **H2**: 2.5rem (40px) / 600
- **Body**: 1rem (16px) / 400

## 📱 반응형 브레이크포인트

- **Mobile**: 0px - 599px
- **Tablet**: 600px - 899px
- **Desktop**: 900px+

## 🔧 개발 가이드

### 컴포넌트 작성 규칙

1. 서버 컴포넌트를 기본으로 사용
2. 클라이언트 상호작용이 필요한 경우에만 `'use client'` 지시어 사용
3. MUI 컴포넌트 사용
4. Framer Motion으로 애니메이션 추가

### 상태 관리

- **Zustand**: UI 상태 (메뉴 열림/닫힘 등)
- **React Query**: 서버 데이터 (향후 API 연동 시)
- **Local State**: 개별 컴포넌트 내부 상태

## 📝 라이선스

Private License - All rights reserved

## 👥 문의

프로젝트 관련 문의사항이 있으시면 연락 주세요.
