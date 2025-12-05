'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import {
  ClipboardCheck,
  Calendar,
  MapPin,
  Wrench,
  Sparkles,
  Target,
  Camera,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { colors, commonStyles } from '@/lib/theme/colors';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const summarySteps = [
    {icon: MapPin, title: '현장 상태 확인'},
    {icon: Wrench, title: '장비·약품 선정'},
    {icon: Sparkles, title: '구조 구간 우선 작업'},
    {icon: Camera, title: '과정 촬영 기록'},
    {icon: CheckCircle2, title: '결과 확인 및 공유'},
];

const detailedProcess = [
    {
        step: 1,
        title: '상담 및 요구사항 확인',
        icon: MessageCircle,
        description: '고객님의 상황과 필요사항을 자세히 파악합니다.',
    },
    {
        step: 2,
        title: '일정 확정 및 사전 안내',
        icon: Calendar,
        description: '작업 일정을 조율하고 준비사항을 안내드립니다.',
    },
    {
        step: 3,
        title: '현장 상태 점검',
        icon: MapPin,
        description: '현장 도착 후 공간 상태와 문제 구간을 정밀 확인합니다.',
    },
    {
        step: 4,
        title: '전문 장비 셋업',
        icon: Wrench,
        description: '현장 특성에 맞는 장비와 약품을 준비합니다.',
    },
    {
        step: 5,
        title: '영역별 청소 진행',
        icon: Sparkles,
        description: '각 공간의 특성을 고려하여 체계적으로 작업합니다.',
    },
    {
        step: 6,
        title: '문제 영역 집중 처리',
        icon: Target,
        description: '특별히 집중이 필요한 구간을 꼼꼼히 처리합니다.',
    },
    {
        step: 7,
        title: '실시간 촬영 및 결과 공유',
        icon: Camera,
        description: '작업 과정과 결과를 사진과 영상으로 기록합니다.',
    },
    {
        step: 8,
        title: '마무리 검수',
        icon: CheckCircle2,
        description: '전체 공간을 재점검하며 누락 여부를 확인합니다.',
    },
    {
        step: 9,
        title: '결과 안내 및 확인',
        icon: ClipboardCheck,
        description: '고객님께 최종 결과를 안내하고 확인받습니다.',
    },
];

export default function HowWeWorkPage() {
    return (
        <Box key="how-we-work-page">
            {/* Hero Section */}
            <PageHero
                title="작업 방식"
                subtitle={
                    <>
                        체계적인 프로세스와 투명한 소통으로
                        <br/>
                        신뢰할 수 있는 청소 서비스를 제공합니다.
                    </>
                }
                isDark={false}
            />

            {/* Summary Steps */}
            <Box
                sx={{
                    py: {
                        xs: 8,
                        md: 12
                    },
                    backgroundColor: colors.background.overlay,
                }}
            >
                <Container maxWidth="lg">
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 8,
                            fontSize: {xs: '1.8rem', md: '2.5rem'},
                            fontWeight: 600,
                            color: 'primary.main',
                        }}
                    >
                        작업 프로세스 요약
                    </MotionTypography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(5, 1fr)',
                            },
                            gap: 3,
                        }}
                    >
                        {summarySteps.map((item, index) => {
                            const Icon = item.icon;
                            return (
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
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: '50%',
                                            backgroundColor: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 2,
                                            boxShadow: 3,
                                        }}
                                    >
                                        <Icon size={36} color="white"/>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: 600,
                                            color: 'primary.dark',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </MotionBox>
                            );
                        })}
                    </Box>
                </Container>
            </Box>

            {/* Detailed Process */}
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
                <Container maxWidth="lg">
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 8,
                            fontSize: {xs: '1.8rem', md: '2.5rem'},
                            fontWeight: 600,
                            color: 'primary.main',
                        }}
                    >
                        청소 프로세스 상세
                    </MotionTypography>

                    <Box sx={{position: 'relative'}}>
                        {/* Timeline Line */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: {xs: '20px', md: '50%'},
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                backgroundColor: 'primary.light',
                                display: {xs: 'block', md: 'block'},
                            }}
                        />

                        {/* Process Steps */}
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {detailedProcess.map((item, index) => {
                                const Icon = item.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <MotionBox
                                        key={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{once: true}}
                                        variants={{
                                            hidden: {opacity: 0, x: isEven ? -30 : 30},
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                transition: {delay: index * 0.1, duration: 0.6},
                                            },
                                        }}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: {xs: 'row', md: isEven ? 'row' : 'row-reverse'},
                                            alignItems: 'center',
                                            gap: 2,
                                        }}
                                    >
                                        {/* Content Card */}
                                        <Box
                                            sx={{
                                                flex: 1,
                                                display: 'flex',
                                                justifyContent: {
                                                    xs: 'flex-start',
                                                    md: isEven ? 'flex-end' : 'flex-start'
                                                },
                                                pl: {xs: 7, md: 0},
                                            }}
                                        >
                                            <Card
                                                sx={{
                                                    maxWidth: {xs: '100%', md: '400px'},
                                                    boxShadow: 3,
                                                    '&:hover': {
                                                        boxShadow: 6,
                                                    },
                                                }}
                                            >
                                                <CardContent sx={{p: 3}}>
                                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                                        <Box
                                                            sx={{
                                                                width: 50,
                                                                height: 50,
                                                                borderRadius: '50%',
                                                                backgroundColor: 'primary.main',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                mr: 2,
                                                            }}
                                                        >
                                                            <Icon size={24} color="white"/>
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{color: 'primary.main', fontWeight: 600}}
                                                            >
                                                                STEP {item.step}
                                                            </Typography>
                                                            <Typography variant="h6" sx={{fontWeight: 600}}>
                                                                {item.title}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="body2"
                                                                sx={{color: 'text.secondary', lineHeight: 1.6}}>
                                                        {item.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>

                                        {/* Timeline Dot */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: {xs: '11px', md: 'calc(50% - 9px)'},
                                                width: 20,
                                                height: 20,
                                                borderRadius: '50%',
                                                backgroundColor: 'primary.main',
                                                border: '3px solid white',
                                                boxShadow: 2,
                                                zIndex: 1,
                                            }}
                                        />
                                    </MotionBox>
                                );
                            })}
                        </Box>
                    </Box>

                    {/* Bottom Note */}
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
                            borderRadius: 2,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" sx={{mb: 2, fontWeight: 600, color: colors.primary.main}}>
                            투명한 작업 공유
                        </Typography>
                        <Typography variant="body1" sx={{lineHeight: 1.8, color: colors.text.dark}}>
                            고객 부재 시에도 촬영 결과 공유를 통해
                            <br/>
                            전 과정을 투명하게 확인하실 수 있습니다.
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}
