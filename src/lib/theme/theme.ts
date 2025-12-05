'use client';

import { createTheme } from '@mui/material/styles';

// 고급스러운 블랙 베이스 + 블루 포인트 테마
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1a1a', // 블랙
      light: '#2d2d2d',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5B7C99', // 슬레이트 블루 - 마블과 조화
      light: '#7B9BB8',
      dark: '#4A6B85',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0a0a', // 다크 블랙
      paper: '#1a1a1a', // 블랙
    },
    text: {
      primary: '#ffffff', // 화이트 텍스트
      secondary: '#b0b0b0', // 그레이 텍스트
    },
    grey: {
      50: '#f5f5f5',
      100: '#e0e0e0',
      200: '#bdbdbd',
      300: '#9e9e9e',
      400: '#757575',
      500: '#616161',
      600: '#424242',
      700: '#303030',
      800: '#1a1a1a',
      900: '#0a0a0a',
    },
  },
  typography: {
    fontFamily: [
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 2, // 절제된 느낌의 작은 라운드
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(0, 0, 0, 0.4)',
    '0px 4px 12px rgba(0, 0, 0, 0.4)',
    '0px 6px 16px rgba(0, 0, 0, 0.4)',
    '0px 8px 20px rgba(0, 0, 0, 0.5)',
    '0px 10px 24px rgba(0, 0, 0, 0.5)',
    '0px 12px 28px rgba(0, 0, 0, 0.5)',
    '0px 14px 32px rgba(0, 0, 0, 0.6)',
    '0px 16px 36px rgba(0, 0, 0, 0.6)',
    '0px 18px 36px rgba(26, 58, 110, 0.14)',
    '0px 20px 40px rgba(26, 58, 110, 0.14)',
    '0px 22px 44px rgba(26, 58, 110, 0.16)',
    '0px 24px 48px rgba(26, 58, 110, 0.16)',
    '0px 26px 52px rgba(26, 58, 110, 0.18)',
    '0px 28px 56px rgba(26, 58, 110, 0.18)',
    '0px 30px 60px rgba(26, 58, 110, 0.2)',
    '0px 32px 64px rgba(26, 58, 110, 0.2)',
    '0px 34px 68px rgba(26, 58, 110, 0.22)',
    '0px 36px 72px rgba(26, 58, 110, 0.22)',
    '0px 38px 76px rgba(26, 58, 110, 0.24)',
    '0px 40px 80px rgba(26, 58, 110, 0.24)',
    '0px 42px 84px rgba(26, 58, 110, 0.26)',
    '0px 44px 88px rgba(26, 58, 110, 0.26)',
    '0px 46px 92px rgba(26, 58, 110, 0.28)',
    '0px 48px 96px rgba(26, 58, 110, 0.28)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(26, 58, 110, 0.16)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(26, 58, 110, 0.08)',
        },
      },
    },
  },
});

export default theme;

