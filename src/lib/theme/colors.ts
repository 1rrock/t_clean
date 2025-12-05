// 전체 웹사이트에서 사용하는 색상 팔레트 중앙 관리

export const colors = {
  // 브랜드 컬러 - 고급진 슬레이트 블루 (로고의 검은색에 어울리는 색)
  primary: {
    main: '#4A7BA7',      // 고급진 슬레이트 블루
    light: '#6B9BC4',     // 밝은 슬레이트 블루
    dark: '#35588C',      // 어두운 슬레이트 블루
  },

  // 배경 색상 (고급진 블랙 톤)
  background: {
    dark: '#0f0f0f',        // 더 깊고 세련된 검은색
    darker: 'rgba(15, 15, 15, 0.95)',
    darkest: 'rgba(15, 15, 15, 0.9)',  // 매우 어두운 배경
    card: 'rgba(25, 25, 25, 0.85)',    // 더 고급진 카드 배경
    cardLight: 'rgba(30, 30, 30, 0.7)',
    overlay: 'rgba(15, 15, 15, 0.5)',
    overlayLight: 'rgba(30, 30, 30, 0.1)',  // 매우 밝은 오버레이
    overlayMedium: 'rgba(15, 15, 15, 0.65)',
    overlayHeavy: 'rgba(25, 25, 25, 0.55)',
  },

  // 텍스트 색상
  text: {
    primary: '#ffffff',
    secondary: '#e0e0e0',
    tertiary: '#b0b0b0',
    muted: '#9e9e9e',
    dark: '#1a1a1a', // 밝은 배경용 어두운 텍스트
  },

  // 그라데이션
  gradient: {
    blueRadial: `
      radial-gradient(circle at 20% 50%, rgba(74, 123, 167, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(74, 123, 167, 0.1) 0%, transparent 50%)
    `,
    blueRadialStrong: `
      radial-gradient(circle at 20% 50%, rgba(74, 123, 167, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(74, 123, 167, 0.15) 0%, transparent 50%)
    `,
    whiteAccent: `
      radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)
    `,
  },

  // 테두리
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: '#4A7BA7',
    blue: 'rgba(74, 123, 167, 0.2)',
    blueStrong: 'rgba(74, 123, 167, 0.3)',
  },

  // 그림자
  shadow: {
    default: '0 4px 20px rgba(0, 0, 0, 0.6)',
    hover: '0 8px 30px rgba(74, 123, 167, 0.3)',
    blue: '0 4px 15px rgba(74, 123, 167, 0.4)',
    blueHover: '0 6px 24px rgba(74, 123, 167, 0.5)',
  },

  // 상태 색상 (경고, 성공 등)
  status: {
    success: '#4caf50',
    warning: '#ffc107',
    error: '#d32f2f',
    info: '#2196f3',
  },
} as const;

// 자주 사용하는 스타일 조합
export const commonStyles = {
  // Hero 섹션 기본 스타일
  heroSection: {
    color: colors.text.primary,
    py: { xs: 8, md: 12 },
    position: 'relative' as const,
    '&::before': {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.background.dark,
      backgroundImage: colors.gradient.blueRadial,
      pointerEvents: 'none' as const,
    },
  },

  // 섹션 제목 스타일
  sectionTitle: {
    textAlign: 'center' as const,
    mb: 8,
    fontSize: { xs: '1.8rem', md: '2.5rem' },
    fontWeight: 600,
    color: colors.primary.main,
  },

  // 카드 기본 스타일
  card: {
    backgroundColor: colors.background.card,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${colors.border.default}`,
    borderRadius: 1,
    boxShadow: colors.shadow.default,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: colors.shadow.hover,
      borderColor: colors.border.hover,
    },
  },

  // 아이콘 배경 원형
  iconCircle: {
    borderRadius: '50%',
    backgroundColor: colors.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: colors.shadow.blue,
  },

  // 버튼 스타일
  button: {
    backgroundColor: colors.primary.main,
    color: colors.text.primary,
    boxShadow: colors.shadow.blue,
    '&:hover': {
      backgroundColor: colors.primary.dark,
      boxShadow: colors.shadow.blueHover,
    },
  },
} as const;

