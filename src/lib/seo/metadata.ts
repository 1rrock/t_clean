import {Metadata} from 'next';

const ogImageUrl = 'https://t-clean.vercel.app/logo.png';

export const aboutMetadata: Metadata = {
    title: '소개 | 믿고 맡기는 청소 - 브랜드 철학 및 가치',
    description:
        '하루 한 집, 한 공간에 집중하는 믿고 맡기는 청소의 브랜드 철학. 마음과 책임, 전문 장비, 숙련 인력으로 프리미엄 청소를 완성합니다.',
    keywords: ['브랜드소개', '청소철학', '프리미엄청소', '청소기준'],
    openGraph: {
        title: '소개 | 믿고 맡기는 청소',
        description: '브랜드 철학과 가치',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 브랜드 철학',
            },
        ],
    },
};

export const serviceMetadata: Metadata = {
    title: '서비스 | 믿고 맡기는 청소 - 입주·이사·인테리어 청소',
    description:
        '입주청소, 이사청소, 인테리어청소 전문. 각 상황에 맞는 맞춤형 청소 서비스로 공실을 완벽하게 정리합니다.',
    keywords: ['입주청소', '이사청소', '인테리어청소', '공실청소', '청소서비스'],
    openGraph: {
        title: '서비스 | 믿고 맡기는 청소',
        description: '입주·이사·인테리어 청소 전문',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 서비스',
            },
        ],
    },
};

export const howWeWorkMetadata: Metadata = {
    title: '작업 방식 | 믿고 맡기는 청소 - 투명한 청소 프로세스',
    description:
        '믿고 맡기는 청소의 투명한 작업 프로세스. 현장 확인부터 최종 검수까지 모든 과정을 공개하고 공유합니다.',
    keywords: ['작업프로세스', '청소방식', '투명성', '청소기준'],
    openGraph: {
        title: '작업 방식 | 믿고 맡기는 청소',
        description: '투명한 청소 프로세스',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 작업 방식',
            },
        ],
    },
};

export const equipmentMetadata: Metadata = {
    title: '장비 & 시스템 | 믿고 맡기는 청소 - 전문 장비와 친환경 약품',
    description:
        '전문 청소 장비(컬비, 스팀, 폴리셔)와 친환경 약품으로 안전하고 효과적인 청소를 진행합니다.',
    keywords: ['청소장비', '친환경약품', '전문장비', '청소용품'],
    openGraph: {
        title: '장비 & 시스템 | 믿고 맡기는 청소',
        description: '전문 장비와 친환경 약품',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 장비 & 시스템',
            },
        ],
    },
};

export const caseStudyMetadata: Metadata = {
    title: '시공 사례 | 믿고 맡기는 청소 - 실제 청소 사례',
    description:
        '믿고 맡기는 청소의 입주·이사·인테리어 청소 실제 시공 사례. before & after로 확인하는 청소 결과.',
    keywords: ['청소사례', '시공사례', '청소결과', '비포애프터'],
    openGraph: {
        title: '시공 사례 | 믿고 맡기는 청소',
        description: '실제 청소 시공 사례',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 시공 사례',
            },
        ],
    },
};

export const reviewMetadata: Metadata = {
    title: '후기 | 믿고 맡기는 청소 - 고객 만족도 후기',
    description:
        '믿고 맡기는 청소를 이용한 고객들의 실제 후기. 청소 결과와 서비스에 대한 솔직한 평가.',
    keywords: ['고객후기', '청소후기', '만족도', '리뷰'],
    openGraph: {
        title: '후기 | 믿고 맡기는 청소',
        description: '고객 만족도 후기',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 고객 후기',
            },
        ],
    },
};

export const noticeMetadata: Metadata = {
    title: '이용 안내 | 믿고 맡기는 청소 - 서비스 안내 및 FAQ',
    description:
        '믿고 맡기는 청소 이용 안내, 가격 정보, 예약 방법, 자주 묻는 질문을 확인하세요.',
    keywords: ['이용안내', 'FAQ', '가격안내', '예약방법'],
    openGraph: {
        title: '이용 안내 | 믿고 맡기는 청소',
        description: '서비스 안내 및 자주 묻는 질문',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 이용 안내',
            },
        ],
    },
};

export const academyMetadata: Metadata = {
    title: '아카데미 | 믿고 맡기는 청소 - 프리미엄 청소 교육',
    description:
        '믿고 맡기는 아카데미는 실제 고객 현장을 기준으로 한 2주 실무형 교육 과정. 프리미엄 청소의 기준을 배웁니다.',
    keywords: ['청소교육', '청소아카데미', '실무교육', '청소기술'],
    openGraph: {
        title: '아카데미 | 믿고 맡기는 청소',
        description: '프리미엄 청소 교육과정',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 아카데미',
            },
        ],
    },
};

export const reservationMetadata: Metadata = {
    title: '견적 / 예약 | 믿고 맡기는 청소 - 서비스 신청하기',
    description:
        '믿고 맡기는 청소 서비스를 신청하세요. 간단한 정보 입력으로 빠른 견적과 예약이 가능합니다.',
    keywords: ['견적신청', '예약', '청소신청', '상담'],
    openGraph: {
        title: '견적 / 예약 | 믿고 맡기는 청소',
        description: '서비스 신청하기',
        type: 'website',
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: '믿고 맡기는 청소 - 견적 / 예약',
            },
        ],
    },
};

