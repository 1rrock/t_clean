// SEO 및 분석 관련 설정

export const SITE_CONFIG = {
  baseUrl: 'https://t-clean.vercel.app',
  siteName: '믿고 맡기는 청소',
  description: '프리미엄 공실 청소 서비스',
  businessPhone: '010-8827-9937',
  businessLocation: '시흥사무실',

  // 검색 엔진 설정 (적용 전 검증 코드 발급받아야 함)
  googleSiteVerification: 'YOUR_GOOGLE_VERIFICATION_CODE',
  naverSiteVerification: 'YOUR_NAVER_VERIFICATION_CODE',

  // Google Analytics (적용 시 ID 입력)
  googleAnalyticsId: 'YOUR_GOOGLE_ANALYTICS_ID',

  // Social Media
  socialMedia: {
    instagram: 'https://www.instagram.com/t_cleaning_',
  },

  // Service Areas
  serviceAreas: ['Seoul', 'Gyeonggi'],

  // Business Hours
  businessHours: {
    monday: '09:00-18:00',
    tuesday: '09:00-18:00',
    wednesday: '09:00-18:00',
    thursday: '09:00-18:00',
    friday: '09:00-18:00',
    saturday: '09:00-13:00',
    sunday: 'closed',
  },
};

// OG 이미지 설정
export const OG_IMAGE_CONFIG = {
  width: 1200,
  height: 630,
  url: 'https://t-clean.vercel.app/og-image.png',
  alt: '믿고 맡기는 청소 - 프리미엄 공실 청소 서비스',
};

