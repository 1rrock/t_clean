# Phase 1: Data Model & Entities

**Date**: 2025-12-04  
**Status**: Complete  
**Prerequisites**: research.md ✅

---

## Overview

프리미엄 공실 청소 서비스 웹사이트의 핵심 데이터 엔티티, 필드, 관계, 검증 규칙을 정의합니다.

---

## 1. Service (서비스 정보)

### Description
웹사이트에서 제공하는 3가지 핵심 서비스의 상세 정보

### Fields

```typescript
type Service = {
  id: string;                    // 'residential' | 'moving' | 'interior'
  name: string;                  // '입주청소' | '이사청소' | '인테리어 후 청소'
  slug: string;                  // 'residential-cleaning' | 'moving-cleaning' | 'interior-cleaning'
  description: string;           // 서비스 한 줄 설명 (50자)
  fullDescription: string;       // 상세 설명 (300자 이상)
  icon: string;                  // 아이콘 이름 (lucide-react)
  image?: string;                // 서비스 이미지 경로
  cleaningAreas: string[];       // 기본 청소 범위 (7개 항목)
  restrictions: string[];        // 제한 사항
  optionalServices: string[];    // 옵션 서비스
  necessityScenarios: string[];  // 필요 상황 설명
  isActive: boolean;             // 노출 여부
};

// 예시
const residentialCleaning: Service = {
  id: 'residential',
  name: '입주청소',
  slug: 'residential-cleaning',
  description: '신축 시공 과정에서 남은 분진과 잔여 요소를 정리합니다.',
  fullDescription: '신축 시공 과정에서 남은 분진과 잔여 요소를 정리하며, 입주 전 편안하게 머물 수 있는 상태로 공간을 준비합니다.',
  icon: 'home',
  image: '/images/service-residential.jpg',
  cleaningAreas: [
    '현관',
    '방·거실·복도',
    '창문/창틀/샷시(내창)',
    '주방',
    '욕실/화장실',
    '베란다/실외기실',
    '수납공간',
  ],
  restrictions: [
    '부분 청소 요청 불가',
    '시간 제한 청소 불가',
    '외창 청소 불가',
    '도배풀 미건조 상태 작업 불가',
  ],
  optionalServices: [
    '가전 내부 청소',
    '에어컨 필터 교체',
    '곰팡이 제거',
    '니코틴/타르 세정',
  ],
  necessityScenarios: [
    '신축 입주 예정인 고객',
    '시공 후 입주 준비 필요',
    '공실 상태 확보 필요',
  ],
  isActive: true,
};
```

### Validation Rules

```typescript
// Zod Schema
import { z } from 'zod';

export const ServiceSchema = z.object({
  id: z.enum(['residential', 'moving', 'interior']),
  name: z.string().min(2).max(30),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(100),
  fullDescription: z.string().min(50).max(500),
  icon: z.string().min(1),
  image: z.string().url().optional(),
  cleaningAreas: z.array(z.string()).min(7).max(10),
  restrictions: z.array(z.string()).min(0),
  optionalServices: z.array(z.string()).min(0),
  necessityScenarios: z.array(z.string()).min(1),
  isActive: z.boolean(),
});
```

---

## 2. CaseStudy (시공 사례)

### Description
실제 작업 사례, 문제 해결, 장비 사용, 고객 피드백을 포함하는 사례 연구

### Fields

```typescript
type CaseStudy = {
  id: string;                    // 'case-001', 'case-002', ...
  title: string;                 // 사례 제목
  slug: string;                  // URL-friendly slug
  serviceType: 'residential' | 'moving' | 'interior';
  squareFeet: number;            // 면적 (평수, 예: 84)
  squareMeters: number;          // 평방미터로 환산
  location?: string;             // 지역 (선택)
  problems: string[];            // 현장 문제점 (3-5개)
  equipment: string[];           // 사용 장비 (3-4개)
  workProcess: string;           // 실제 작업 방식 (200자)
  results: {
    before: string[];            // 작업 전 상태
    after: string[];             // 작업 후 상태
    keyImprovements: string[];   // 주요 개선사항
  };
  images: {
    thumbnail: string;           // 썸네일
    before: string[];            // 작업 전 사진 (2-3장)
    after: string[];             // 작업 후 사진 (2-3장)
  };
  customerFeedback: {
    name: string;                // 고객 이름 (익명화: 'ㅇ고객')
    quote: string;               // 한 줄 평가
    rating: 1 | 2 | 3 | 4 | 5;  // 만족도 (1-5)
    details?: string;            // 상세 피드백 (선택)
  };
  workingDays: number;           // 소요 일수
  publishedAt: string;           // ISO 8601 날짜
  updatedAt?: string;            // 마지막 수정 날짜
  featured: boolean;             // 홈페이지 노출 여부
};

// 예시
const caseStudy001: CaseStudy = {
  id: 'case-001',
  title: '신축 84평 아파트 입주청소 - 시공 분진 완벽 제거',
  slug: 'case-001-84-apartment-residential',
  serviceType: 'residential',
  squareFeet: 84,
  squareMeters: 277,
  location: '서울 강남구',
  problems: [
    '시공 분진이 모든 표면에 적립',
    '마루 면에 건설 자재 흔적',
    '욕실 타일 줄눈에 시멘트 분진',
    '창틀 내부 분진 두꺼운 층',
  ],
  equipment: [
    '전문 흡입 시스템',
    '고온 스팀 시스템',
    '바닥 폴리싱 시스템',
  ],
  workProcess: '전담 팀이 현장을 구간별로 분석한 후, 상단 전자제품→가구 설치 영역→바닥→세부 구간 순으로 작업. 각 구간마다 스팀과 흡입을 교대로 시행하여 분진 제거 효율화.',
  results: {
    before: [
      '백색 분진이 현저히 보임',
      '공조기실 먼지 적층',
      '수압이 약한 상태',
    ],
    after: [
      '표면 분진 완전 제거',
      '공조기 냉각 효율 회복',
      '수압 정상화',
    ],
    keyImprovements: [
      '공기 질 개선',
      '입주 준비 완료',
      '가전 제품 먼지 제거',
    ],
  },
  images: {
    thumbnail: '/case-studies/case-001-thumb.jpg',
    before: [
      '/case-studies/case-001-before-1.jpg',
      '/case-studies/case-001-before-2.jpg',
    ],
    after: [
      '/case-studies/case-001-after-1.jpg',
      '/case-studies/case-001-after-2.jpg',
    ],
  },
  customerFeedback: {
    name: 'ㅇ고객',
    quote: '입주 전 불안감이 있었는데, 깔끔하게 정리되어 마음 놓고 입주할 수 있었습니다.',
    rating: 5,
  },
  workingDays: 1,
  publishedAt: '2025-11-15',
  featured: true,
};
```

### Validation Rules

```typescript
export const CaseStudySchema = z.object({
  id: z.string().regex(/^case-\d{3}$/),
  title: z.string().min(10).max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  serviceType: z.enum(['residential', 'moving', 'interior']),
  squareFeet: z.number().min(10).max(500),
  squareMeters: z.number().min(30).max(1500),
  location: z.string().optional(),
  problems: z.array(z.string()).min(2).max(6),
  equipment: z.array(z.string()).min(2).max(5),
  workProcess: z.string().min(50).max(300),
  results: z.object({
    before: z.array(z.string()).min(2),
    after: z.array(z.string()).min(2),
    keyImprovements: z.array(z.string()).min(2),
  }),
  images: z.object({
    thumbnail: z.string().url(),
    before: z.array(z.string().url()).min(1).max(3),
    after: z.array(z.string().url()).min(1).max(3),
  }),
  customerFeedback: z.object({
    name: z.string().min(1).max(20),
    quote: z.string().min(10).max(100),
    rating: z.enum(['1', '2', '3', '4', '5']).transform(Number),
    details: z.string().max(500).optional(),
  }),
  workingDays: z.number().min(1).max(7),
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime().optional(),
  featured: z.boolean(),
});
```

---

## 3. Review (고객 후기)

### Description
고객의 짧은 후기 및 강조 메시지

### Fields

```typescript
type Review = {
  id: string;                    // 'review-001', ...
  type: 'quote' | 'screenshot';  // 텍스트 인용 또는 스크린샷
  content: {
    text?: string;               // 인용 텍스트 (100자)
    screenshotUrl?: string;      // 스크린샷 이미지 URL
    source?: string;             // 출처 (카카오톡, 인스타그램 등)
  };
  customer: {
    name: string;                // 고객명 (익명화: ㅇ고객)
    platform?: string;           // SNS 플랫폼
  };
  service: 'residential' | 'moving' | 'interior' | 'general';
  theme: string;                 // 분류 (예: '완성도', '투명성', '전문성' 등)
  rating: 1 | 2 | 3 | 4 | 5;
  publishedAt: string;           // ISO 8601
  verified: boolean;             // 검증됨 여부
};

// 예시
const reviews: Review[] = [
  {
    id: 'review-001',
    type: 'quote',
    content: {
      text: '다른 업체와 비교할 수 없을 정도로 완성도가 높았습니다.',
      source: 'Direct message',
    },
    customer: {
      name: 'ㅇ고객',
      platform: undefined,
    },
    service: 'residential',
    theme: '완성도',
    rating: 5,
    publishedAt: '2025-10-20',
    verified: true,
  },
  {
    id: 'review-002',
    type: 'quote',
    content: {
      text: '작업 과정을 실시간으로 촬영해주셔서 신뢰가 높았습니다.',
      source: 'Kakao Talk',
    },
    customer: {
      name: 'ㅇ고객',
    },
    service: 'moving',
    theme: '투명성',
    rating: 5,
    publishedAt: '2025-10-15',
    verified: true,
  },
];
```

### Validation Rules

```typescript
export const ReviewSchema = z.object({
  id: z.string().regex(/^review-\d{3}$/),
  type: z.enum(['quote', 'screenshot']),
  content: z.object({
    text: z.string().min(10).max(150).optional(),
    screenshotUrl: z.string().url().optional(),
    source: z.string().optional(),
  }),
  customer: z.object({
    name: z.string().min(1).max(20),
    platform: z.string().optional(),
  }),
  service: z.enum(['residential', 'moving', 'interior', 'general']),
  theme: z.string().min(2).max(20),
  rating: z.enum(['1', '2', '3', '4', '5']).transform(Number),
  publishedAt: z.string().datetime(),
  verified: z.boolean(),
});
```

---

## 4. Process (작업 프로세스)

### Description
9단계 작업 프로세스 정의

### Fields

```typescript
type Process = {
  id: string;                    // '1', '2', ..., '9'
  step: number;                  // 순서 (1-9)
  title: string;                 // 단계명
  description: string;           // 상세 설명 (100자)
  duration?: string;             // 소요 시간 (예: '15분')
  icon: string;                  // 아이콘 이름 (lucide-react)
  details?: string[];            // 세부 항목 (선택)
};

const processes: Process[] = [
  {
    id: '1',
    step: 1,
    title: '상담 및 요구사항 확인',
    description: '고객과의 초기 상담을 통해 공간의 현 상태, 특수 요청 사항, 예상 완성도를 논의합니다.',
    duration: '15분',
    icon: 'phone',
    details: [
      '공간 상태 진단',
      '고객 기대치 파악',
      '특수 요청 확인',
    ],
  },
  {
    id: '2',
    step: 2,
    title: '일정 확정',
    description: '작업 가능한 날짜를 확정하고 최종 예약을 진행합니다.',
    duration: '5분',
    icon: 'calendar',
  },
  // ... 3-9단계 생략
];
```

---

## 5. Equipment (장비)

### Description
4가지 전문 장비 정보

### Fields

```typescript
type Equipment = {
  id: string;                    // 'suction', 'steam', 'polishing', 'ecofriendly'
  name: string;                  // 장비명
  description: string;           // 기술 설명 (100자)
  benefits: string[];            // 효과 (2-3개)
  useCases: string[];            // 사용 사례
  ecoRating?: 'high' | 'medium' | 'low'; // 친환경 등급
  icon: string;                  // 아이콘 이름
  image?: string;                // 장비 이미지
};

const equipments: Equipment[] = [
  {
    id: 'suction',
    name: '전문 흡입 시스템',
    description: '산업용 진공 청소기로 분진, 먼지를 깊숙이 제거합니다.',
    benefits: [
      '분진 99.9% 제거',
      '공기 질 개선',
      '알레르기 감소',
    ],
    useCases: [
      '시공 분진 제거',
      '바닥 먼지 흡입',
      '수납공간 청소',
    ],
    ecoRating: 'high',
    icon: 'wind',
    image: '/images/equipment-suction.jpg',
  },
  {
    id: 'steam',
    name: '고온 스팀 시스템',
    description: '100℃ 고온 스팀으로 세균 제거 및 화학 약품 최소화합니다.',
    benefits: [
      '99.9% 세균 제거',
      '화학 약품 최소화',
      '냄새 제거',
    ],
    useCases: [
      '욕실 타일 세정',
      '주방 기름때 제거',
      '카펫 세정',
    ],
    ecoRating: 'high',
    icon: 'cloud-rain',
  },
  // ... 나머지 장비 생략
];
```

---

## 6. Notice Item (이용 안내 항목)

### Description
약관, 제한 사항, 추가 비용, A/S 정책 등 공지사항

### Fields

```typescript
type NoticeCategory = 'restrictions' | 'additionalCosts' | 'preparation' | 'as' | 'cancellation';

type NoticeItem = {
  id: string;                    // 'notice-001', ...
  category: NoticeCategory;
  title: string;                 // 항목 제목
  content: string;               // 항목 내용 (마크다운)
  priority: 'high' | 'medium' | 'low';
  publishedAt: string;           // ISO 8601
};

const notices: NoticeItem[] = [
  {
    id: 'notice-001',
    category: 'restrictions',
    title: '부분 청소 요청 불가',
    content: '저희 서비스는 공실 전체 청소를 기본 원칙으로 합니다. 부분 청소 요청은 불가합니다.',
    priority: 'high',
    publishedAt: '2025-01-01',
  },
  // ... 더 많은 항목
];
```

---

## 7. Relationships (관계도)

```
Service (1) ←→ (many) CaseStudy
           ←→ (many) Review

CaseStudy (1) ←→ (1) CustomerFeedback (Review의 부분 구성)

Process (1 to many) — 독립적, 순서 정렬
Equipment (1 to many) — 독립적, 분류 가능

NoticeItem (1 to many) — category로 그룹화
```

---

## 8. State Transitions (상태 변화)

### Service 상태
```
[ Active ] → (숨김) → [ Hidden ]
[ Hidden ] → (노출) → [ Active ]
```

### CaseStudy 상태
```
[ Draft ] → (발행) → [ Published ] → (숨김) → [ Archived ]
[ Published ] → (수정) → [ Published ]
```

### Review 상태
```
[ Pending ] → (검증) → [ Verified ] → (숨김) → [ Hidden ]
[ Verified ] → (수정) → [ Verified ]
```

---

## 9. API 응답 예시

### GET /api/services
```json
{
  "data": [
    {
      "id": "residential",
      "name": "입주청소",
      "slug": "residential-cleaning",
      "description": "신축 시공 과정에서 남은 분진과 잔여 요소를 정리합니다.",
      "icon": "home",
      "isActive": true
    }
  ],
  "total": 3
}
```

### GET /api/case-studies?serviceType=residential
```json
{
  "data": [
    {
      "id": "case-001",
      "title": "신축 84평 아파트 입주청소",
      "slug": "case-001-84-apartment-residential",
      "serviceType": "residential",
      "squareFeet": 84,
      "images": {
        "thumbnail": "/case-studies/case-001-thumb.jpg"
      },
      "featured": true
    }
  ],
  "total": 12
}
```

### GET /api/reviews?theme=완성도
```json
{
  "data": [
    {
      "id": "review-001",
      "type": "quote",
      "content": {
        "text": "다른 업체와 비교할 수 없을 정도로 완성도가 높았습니다."
      },
      "theme": "완성도",
      "rating": 5
    }
  ],
  "total": 6
}
```

---

## 10. 마이그레이션 계획 (향후)

### Phase 1: 정적 콘텐츠 (현재)
- 모든 데이터를 TypeScript `const` 객체로 정의
- `components/sections/`에서 직접 import하여 사용

### Phase 2: CMS 연동 (향후)
- Contentful, Notion, Supabase 등의 CMS에서 데이터 관리
- React Query로 동적 로드

### Phase 3: 관리자 패널 (미정)
- Admin 페이지에서 콘텐츠 CRUD 기능

---

## Summary

**총 엔티티**: 6개 (Service, CaseStudy, Review, Process, Equipment, NoticeItem)  
**총 필드**: 60+ 필드  
**검증 방식**: Zod 스키마 (런타임 타입 안전성)  
**상태 관리**: 초기 단계는 정적 데이터, 향후 React Query로 확장 예상  
**API 준비도**: OpenAPI 스펙 작성 완료 (contracts/ 참조)

