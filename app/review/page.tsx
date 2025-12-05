'use client';

import {Box, Container, Typography, Card, CardContent, Rating} from '@mui/material';
import {Quote, Star} from 'lucide-react';
import {motion} from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import {fadeInUp, staggerContainer} from '@/lib/animation/variants';
import {colors, commonStyles} from '@/lib/theme/colors';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const highlights = [
    '작업 전/후 차이가 확실했다',
    '장비 수준이 높고 체계적이다',
    '구조와 마감 상태를 이해하고 작업한다',
    '값어치가 있었다',
    '작업 과정을 촬영해줘서 신뢰가 높았다',
    '다른 업체와 비교해 완성도가 높다',
];

// 실제 후기 데이터 (예시)
const reviews = [
    {
        name: '김○○',
        type: '입주청소',
        평수: '32평',
        rating: 5,
        date: '2024.11.15',
        content:
            '신축 아파트 입주 전 청소를 맡겼는데, 정말 꼼꼼하게 해주셨어요. 특히 창틀이랑 몰딩 부분이 완전히 달라졌습니다. 작업 과정도 사진으로 다 보내주셔서 믿음이 갔어요. 강력 추천합니다!',
    },
    {
        name: '이○○',
        type: '인테리어 후 청소',
        평수: '24평',
        rating: 5,
        date: '2024.11.08',
        content:
            '인테리어 후 석고가루와 실리콘 자국이 너무 많았는데, 전문 장비로 깔끔하게 제거해주셨습니다. 하루 한 집만 한다는 게 확실히 느껴지는 퀄리티였어요. 가격 대비 정말 만족스러웠습니다.',
    },
    {
        name: '박○○',
        type: '이사청소',
        평수: '28평',
        rating: 5,
        date: '2024.10.25',
        content:
            '전 세입자가 나간 후 상태가 좋지 않아 걱정했는데, 완전히 새집처럼 만들어주셨어요. 특히 주방 후드와 욕실 타일이 정말 깨끗해졌습니다. 작업 시간도 충분히 가져가셔서 믿음직스러웠어요.',
    },
    {
        name: '정○○',
        type: '입주청소',
        평수: '40평',
        rating: 5,
        date: '2024.10.18',
        content:
            '넓은 평수라 걱정했는데, 두 분이 오셔서 하루 종일 정성껏 작업해주셨습니다. 바닥 폴리싱까지 해주셔서 반짝반짝해요. 친환경 약품 사용하신다고 하셔서 아이 키우는 집으로 안심됐습니다.',
    },
    {
        name: '최○○',
        type: '인테리어 후 청소',
        평수: '18평',
        rating: 5,
        date: '2024.10.10',
        content:
            '작은 평수지만 꼼꼼하게 작업해주셨어요. 다른 곳은 큰 평수 아니면 받지 않는다고 해서 난감했는데, 여기는 흔쾌히 받아주시고 퀄리티도 최고였습니다. 감사합니다!',
    },
    {
        name: '강○○',
        type: '입주청소',
        평수: '35평',
        rating: 5,
        date: '2024.09.28',
        content:
            '준공청소가 제대로 안 돼서 먼지가 정말 많았는데, 전문 흡입기로 깔끔하게 정리해주셨어요. 작업 영상도 보내주셔서 부재중에도 안심하고 맡길 수 있었습니다. 다음에도 꼭 부탁드리고 싶어요.',
    },
];

export default function ReviewPage() {
    return (
        <Box key="review-page">
            {/* Hero Section */}
            <PageHero
                title="고객 후기"
                subtitle={
                    <>
                        고객님들의 소중한 후기가
                        <br/>
                        저희의 가장 큰 자산입니다
                    </>
                }
                isDark={false}
            />

            {/* Highlights Section - 밝게 */}
            <Box
                sx={{
                    py: {xs: 8, md: 12},
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: colors.background.overlayLight,
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 1}}>
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: {xs: '1.8rem', md: '2.5rem'},
                            fontWeight: 600,
                            color: colors.primary.main,
                        }}
                    >
                        고객님들이 말씀하시는 믿고 맡기는 청소
                    </MotionTypography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'},
                            gap: 3,
                        }}
                    >
                        {highlights.map((highlight, index) => (
                            <MotionBox
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                variants={{
                                    hidden: {opacity: 0, scale: 0.9},
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {delay: index * 0.1, duration: 0.5},
                                    },
                                }}
                                sx={{
                                    ...commonStyles.card,
                                    p: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        ...commonStyles.iconCircle,
                                        width: 40,
                                        height: 40,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Star size={20} color="white" fill="white"/>
                                </Box>
                                <Typography variant="body1" sx={{fontWeight: 500, lineHeight: 1.4, color: colors.text.secondary}}>
                                    {highlight}
                                </Typography>
                            </MotionBox>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Reviews Section - 중간 톤 */}
            <Box
                sx={{
                    py: {xs: 8, md: 12},
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 1}}>
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: {xs: '1.8rem', md: '2.5rem'},
                            fontWeight: 600,
                            color: colors.primary.main,
                        }}
                    >
                        실제 고객 후기
                    </MotionTypography>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                        {reviews.map((review, index) => (
                            <MotionCard
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                variants={{
                                    hidden: {opacity: 0, y: 30},
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {delay: index * 0.1, duration: 0.6},
                                    },
                                }}
                                sx={{
                                    ...commonStyles.card,
                                }}
                            >
                                <CardContent sx={{p: {xs: 3, md: 4}}}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        mb: 2,
                                        flexWrap: 'wrap',
                                        gap: 2
                                    }}>
                                        <Box>
                                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, mb: 1}}>
                                                <Typography variant="h6" sx={{fontWeight: 600, color: colors.text.primary}}>
                                                    {review.name}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        px: 1.5,
                                                        py: 0.5,
                                                        backgroundColor: colors.primary.main,
                                                        color: colors.text.primary,
                                                        borderRadius: 1,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {review.type}
                                                </Typography>
                                                <Typography variant="body2" sx={{color: colors.text.tertiary}}>
                                                    {review.평수}
                                                </Typography>
                                            </Box>
                                            <Rating value={review.rating} readOnly size="small"/>
                                        </Box>
                                        <Typography variant="caption" sx={{color: colors.text.tertiary}}>
                                            {review.date}
                                        </Typography>
                                    </Box>

                                    <Box sx={{position: 'relative', pl: 3}}>
                                        <Quote
                                            size={24}
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                color: colors.primary.main,
                                                opacity: 0.2,
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: 1.8,
                                                color: colors.text.secondary,
                                                fontStyle: 'italic',
                                            }}
                                        >
                                            {review.content}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </MotionCard>
                        ))}
                    </Box>

                    {/* Bottom CTA */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{
                            mt: 8,
                            p: 4,
                            backgroundColor: `${colors.primary.main}20`,
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.border.blueStrong}`,
                            borderRadius: 3,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={{mb: 2, fontWeight: 600, color: colors.primary.main}}>
                            당신의 공간도 새롭게 시작하세요
                        </Typography>
                        <Typography variant="body1" sx={{color: colors.text.secondary}}>
                            믿고 맡기는 청소와 함께라면 안심입니다
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}
