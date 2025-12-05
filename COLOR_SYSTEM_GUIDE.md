# 🎨 통합 색상 관리 시스템 사용 가이드

## 개요

모든 페이지에서 일관된 색상과 스타일을 사용하기 위한 중앙 관리 시스템입니다.
`/src/lib/theme/colors.ts`에서 모든 색상과 공통 스타일을 관리합니다.

## 사용 방법

### 1. Import

```typescript
import { colors, commonStyles } from '@/lib/theme/colors';
```

### 2. 색상 사용

#### 브랜드 컬러 (슬레이트 블루)
```typescript
colors.primary.main    // #5B7C99 - 메인 브랜드 컬러
colors.primary.light   // #7B9BB8 - 밝은 버전
colors.primary.dark    // #4A6B85 - 어두운 버전 (호버 등)
```

#### 배경 색상
```typescript
colors.background.dark           // #0a0a0a - 기본 다크
colors.background.card           // rgba(26, 26, 26, 0.8) - 카드 배경
colors.background.overlay        // rgba(10, 10, 10, 0.4) - 투명 오버레이
colors.background.overlayHeavy   // rgba(26, 26, 26, 0.5) - 진한 오버레이
```

#### 텍스트 색상
```typescript
colors.text.primary    // #ffffff - 주요 텍스트
colors.text.secondary  // #e0e0e0 - 보조 텍스트
colors.text.tertiary   // #b0b0b0 - 3차 텍스트
colors.text.muted      // #9e9e9e - 희미한 텍스트
```

#### 그라데이션
```typescript
colors.gradient.blueRadial       // 블루 radial 그라데이션
colors.gradient.blueRadialStrong // 강한 블루 radial 그라데이션
colors.gradient.whiteAccent      // 흰색 악센트 그라데이션
```

#### 테두리
```typescript
colors.border.default     // 기본 테두리
colors.border.hover       // 호버 시 테두리
colors.border.blue        // 블루 테두리
```

#### 그림자
```typescript
colors.shadow.default   // 기본 그림자
colors.shadow.hover     // 호버 시 그림자
colors.shadow.blue      // 블루 그림자
```

### 3. 공통 스타일 사용

#### Hero 섹션
```typescript
<Box sx={{ ...commonStyles.heroSection }}>
  {/* 자동으로 적용됨:
    - 텍스트 색상
    - padding
    - position, 오버레이 등
  */}
</Box>
```

**커스터마이징:**
```typescript
<Box
  sx={{
    ...commonStyles.heroSection,
    minHeight: '100vh',
    '&::before': {
      ...commonStyles.heroSection['&::before'],
      backgroundImage: `
        ${colors.gradient.blueRadial},
        ${colors.gradient.whiteAccent}
      `,
    },
  }}
>
```

#### 섹션 제목
```typescript
<Typography sx={commonStyles.sectionTitle}>
  섹션 제목
</Typography>
```

#### 카드
```typescript
<Box
  sx={{
    ...commonStyles.card,
    // 추가 스타일
    p: 4,
  }}
>
  카드 내용
</Box>
```

#### 아이콘 원형 배경
```typescript
<Box
  sx={{
    ...commonStyles.iconCircle,
    width: 80,
    height: 80,
  }}
>
  <Icon size={36} color="white" />
</Box>
```

#### 버튼
```typescript
<Button sx={commonStyles.button}>
  버튼
</Button>
```

## 실제 사용 예시

### Hero 섹션 전체 예시
```typescript
export default function MyPage() {
  return (
    <Box
      className="marble-bg"
      sx={{
        ...commonStyles.heroSection,
        minHeight: '100vh',
        '&::before': {
          ...commonStyles.heroSection['&::before'],
          backgroundImage: `
            ${colors.gradient.blueRadial},
            ${colors.gradient.whiteAccent}
          `,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          sx={{
            color: colors.primary.main,
            mb: 4,
          }}
        >
          페이지 제목
        </Typography>
        
        <Typography
          variant="body1"
          sx={{ color: colors.text.secondary }}
        >
          설명 텍스트
        </Typography>
      </Container>
    </Box>
  );
}
```

### 카드 그리드 예시
```typescript
<Box sx={{ py: 8 }}>
  <Container>
    <Typography sx={commonStyles.sectionTitle}>
      섹션 제목
    </Typography>
    
    <Box sx={{ display: 'grid', gap: 4 }}>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            ...commonStyles.card,
            p: 4,
            // 호버 효과는 자동 적용됨
          }}
        >
          <Box sx={{ ...commonStyles.iconCircle, width: 60, height: 60 }}>
            <Icon size={30} color="white" />
          </Box>
          
          <Typography sx={{ color: colors.text.primary }}>
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
</Box>
```

## 장점

### ✅ 중앙 관리
- 한 곳에서 모든 색상 관리
- 색상 변경 시 전체 사이트에 즉시 반영
- 일관성 유지

### ✅ 타입 안정성
- TypeScript로 자동완성 지원
- 오타 방지
- 존재하지 않는 색상 사용 방지

### ✅ 유지보수 용이
- 중복 코드 제거
- 스타일 변경이 간단
- 새로운 페이지 추가 시 빠른 개발

### ✅ 일관된 디자인
- 모든 페이지에서 동일한 느낌
- 브랜드 아이덴티티 강화

## 색상 변경이 필요한 경우

1. `/src/lib/theme/colors.ts` 파일 열기
2. 원하는 색상 값 수정
3. 저장하면 전체 사이트에 자동 반영

예시:
```typescript
export const colors = {
  primary: {
    main: '#새로운색상', // 여기만 변경
    // ...
  },
  // ...
}
```

## 현재 적용된 페이지

- ✅ Hero (메인 페이지)
- ✅ About (소개 페이지)
- 🔄 Service (진행 중)
- 🔄 나머지 페이지들 (순차 적용 예정)

## 다음 단계

다른 페이지들도 점진적으로 이 시스템으로 마이그레이션하여
전체 웹사이트의 통일성을 완성할 예정입니다.

---

**작성일:** 2024.12.05
**위치:** `/src/lib/theme/colors.ts`

