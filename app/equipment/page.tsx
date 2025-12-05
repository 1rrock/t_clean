'use client';

import {Box, Container, Typography, Card, CardContent} from '@mui/material';
import {Wind, Droplets, Disc, Leaf} from 'lucide-react';
import {motion} from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import {fadeInUp, staggerContainer} from '@/lib/animation/variants';
import {colors, commonStyles} from '@/lib/theme/colors';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const equipment = [
    {
        icon: Wind,
        title: '전문 흡입 시스템',
        description:
            '미세한 분진과 벽지 결 사이 오염까지 안정적으로 흡입해 시공 후 잔여물과 숨은 먼지를 정리합니다.',
        color: colors.status.info,
    },
    {
        icon: Droplets,
        title: '고온 스팀 시스템',
        description:
            '고온 스팀으로 눈에 보이지 않는 깊은 오염을 제거 및 살균하며 위생 컨디션을 개선합니다.',
        color: colors.status.error,
    },
    {
        icon: Disc,
        title: '바닥 폴리싱 시스템',
        description:
            '바닥 보호제와 시공 잔여 요소 및 오염을 제거해 바닥 본연의 질감을 살리고 마감을 정돈합니다.',
        color: colors.status.warning,
    },
    {
        icon: Leaf,
        title: '친환경 약품 기준',
        description:
            '공간 사용자의 안심을 위해 친환경 약품만 사용하며 잔여 성분을 최소화하는 것을 원칙으로 합니다.',
        color: colors.status.success,
    },
];

export default function EquipmentPage() {
    return (
        <Box key="equipment-page">
            {/* Hero Section */}
            <PageHero
                title="장비 & 시스템"
                subtitle={
                    <>
                        믿고 맡기는 청소는 결과의 깊이를 위해
                        <br/>
                        전용 장비와 검증된 시스템을 사용합니다.
                        <br/>
                        <br/>
                        표면을 닦는 수준이 아닌,
                        <br/>
                        공간이 가진 구조와 마감 특성에 맞춘 정돈을 지향합니다.
                    </>
                }
                isDark={false}
            />

            {/* Equipment Cards */}
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
                        backgroundImage: colors.gradient.blueRadial,
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{position: 'relative', zIndex: 1}}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', md: 'repeat(2, 1fr)'},
                            gap: 4,
                        }}
                    >
                        {equipment.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <MotionCard
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                    variants={{
                                        hidden: {opacity: 0, scale: 0.9},
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: {delay: index * 0.15, duration: 0.5},
                                        },
                                    }}
                                    sx={{
                                        ...commonStyles.card,
                                        height: '100%',
                                    }}
                                >
                                    <CardContent sx={{p: 4, height: '100%', display: 'flex', flexDirection: 'column'}}>
                                        <Box
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                borderRadius: '50%',
                                                backgroundColor: item.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 3,
                                                mx: 'auto',
                                                boxShadow: colors.shadow.blue,
                                            }}
                                        >
                                            <Icon size={48} color="white"/>
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                textAlign: 'center',
                                                mb: 3,
                                                fontWeight: 600,
                                                color: colors.primary.main,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                textAlign: 'center',
                                                lineHeight: 1.8,
                                                color: colors.text.secondary,
                                                fontSize: '1.05rem',
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </MotionCard>
                            );
                        })}
                    </Box>
                </Container>
            </Box>

            {/* Result Focus Section */}
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
                        backgroundImage: colors.gradient.blueRadial,
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="md" sx={{position: 'relative', zIndex: 1}}>
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{
                            p: {xs: 4, md: 6},
                            backgroundColor: colors.primary.main,
                            color: colors.text.primary,
                            borderRadius: 3,
                            textAlign: 'center',
                            boxShadow: colors.shadow.blue,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 3,
                                fontWeight: 600,
                                fontSize: {xs: '1.5rem', md: '2rem'},
                            }}
                        >
                            결과 관점의 청소
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                lineHeight: 2,
                                fontWeight: 400,
                                fontSize: {xs: '1.05rem', md: '1.2rem'},
                            }}
                        >
                            표면이 아닌 구조를 고려한 청소를 지향하며,
                            <br/>
                            분진 제거, 냄새 완화, 위생 개선까지
                            <br/>
                            입주에 필요한 기본 컨디션을 준비합니다.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>

            {/* Additional Info */}
            <Box
                sx={{
                    py: {xs: 6, md: 8},
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
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', md: 'repeat(3, 1fr)'},
                            gap: 3,
                        }}
                    >
                        {[
                            {
                                title: '전문성',
                                description: '숙련된 전문 인력의 체계적인 작업',
                            },
                            {
                                title: '투명성',
                                description: '전 과정 사진·영상 기록 및 공유',
                            },
                            {
                                title: '안전성',
                                description: '친환경 약품과 검증된 장비 사용',
                            },
                        ].map((item, index) => (
                            <MotionBox
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                variants={{
                                    hidden: {opacity: 0, y: 20},
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {delay: index * 0.1, duration: 0.5},
                                    },
                                }}
                                sx={{
                                    ...commonStyles.card,
                                    p: 4,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 600,
                                        color: colors.primary.main,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: colors.text.secondary,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </MotionBox>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

