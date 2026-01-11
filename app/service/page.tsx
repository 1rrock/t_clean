'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Home, Truck, Wrench, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { colors, commonStyles } from '@/lib/theme/colors';
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const services = [
    {
        icon: Home,
        title: '입주청소',
        description:
            '신축 시공 과정에서 남은 분진과 잔여 요소를 정리하며, 입주 전 편안하게 머물 수 있는 상태로 공간을 준비합니다.',
        situations: [
            '새롭게 사용될 집이며, 이전 생활 흔적이 없는 상태',
            '신축 시공 직후 남은 분진, 타일가루, 실리콘·도배풀 자국이 있는 경우',
            '입주 전 공간을 전체적으로 정돈하고 싶은 경우',
            '준공 청소가 미흡해 잔여 분진이 남아있는 경우',
        ],
    },
    {
        icon: Truck,
        title: '이사청소',
        description:
            '이전에 생활이 있었던 공간을 비워낸 뒤 정리하고, 공실 상태에서 다음 사용자가 편안하게 시작할 수 있도록 준비합니다.',
        situations: [
            '이전 사용자가 거주했던 공실 공간',
            '퇴거 직후 생활 흔적 정리가 필요한 경우',
            '다음 사용자를 위한 준비 청소가 필요한 경우',
        ],
        note: '가구나 물건이 있는 상태, 거주 중 청소는 진행하지 않습니다.',
    },
    {
        icon: Wrench,
        title: '인테리어 후 청소',
        description:
            '시공 과정에서 남은 흔적을 정돈하고, 입주 가능한 컨디션으로 편안히 사용할 수 있도록 준비합니다.',
        situations: [
            '도장·타일·마루 등 시공 완료 이후',
            '석고 가루, 실리콘, 접착 흔적이 남아 있는 경우',
            '공사 흔적 정리 후 바로 사용 가능한 상태로 만들고 싶은 경우',
        ],
    },
];

const cleaningAreas = [
    { name: '현관', description: '수납, 문틀, 바닥 정돈 및 마감' },
    { name: '방·거실·복도', description: '상부 구조, 스위치, 몰딩, 바닥 정돈' },
    { name: '창문/창틀/샷시(내창)', description: '프레임, 방충망, 잔여 흔적 정리' },
    { name: '주방', description: '수납장 구조 정돈, 후드 케어, 싱크 및 배수부 정리' },
    { name: '욕실/화장실', description: '설비 케어, 타일 정돈, 배수부 정리' },
    { name: '베란다/실외기실', description: '바닥 및 구조 정리' },
    { name: '수납 공간', description: '붙박이장, 신발장 등 내부 정돈' },
];

export default function ServicePage() {
    return (
        <Box key="service-page">
            {/* Hero Section */}
            <PageHero
                title="서비스"
                subtitle={
                    <>
                        믿고 맡기는 청소는 입주 전 공실 공간을 중심으로
                        <br />
                        입주·이사·인테리어 후 상황에 맞는 청소 서비스를 제공합니다.
                    </>
                }
                isDark={false}
            />

            {/* Services Section */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(26, 26, 26, 0.5)',
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <MotionCard
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: index * 0.2, duration: 0.6 },
                                        },
                                    }}
                                    sx={{
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                                        backgroundColor: 'rgba(10, 10, 10, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        '&:hover': {
                                            boxShadow: '0 8px 30px rgba(91, 124, 153, 0.3)',
                                            borderColor: colors.primary.main,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '50%',
                                                    backgroundColor: colors.primary.main,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mr: 2,
                                                    boxShadow: '0 4px 15px rgba(91, 124, 153, 0.4)',
                                                }}
                                            >
                                                <Icon size={30} color="white" />
                                            </Box>
                                            <Typography variant="h4" sx={{ fontWeight: 600, color: colors.primary.main }}>
                                                {service.title}
                                            </Typography>
                                        </Box>

                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, color: '#e0e0e0' }}
                                        >
                                            {service.description}
                                        </Typography>

                                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#ffffff' }}>
                                            이런 경우, {service.title}가 필요합니다
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                            {service.situations.map((situation, idx) => (
                                                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <CheckCircle
                                                        size={20}
                                                        style={{ marginRight: '12px', marginTop: '2px', flexShrink: 0 }}
                                                        color={colors.primary.main}
                                                    />
                                                    <Typography variant="body2"
                                                        sx={{ lineHeight: 1.6, color: colors.text.secondary }}>
                                                        {situation}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                        {service.note && (
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    mb: 3,
                                                    mt: 2,
                                                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                                                    borderLeft: '4px solid #ffc107',
                                                    borderRadius: 1,
                                                }}
                                            >
                                                <Typography variant="body2" sx={{ fontWeight: 500, color: '#ffecb3' }}>
                                                    ※ {service.note}
                                                </Typography>
                                            </Box>
                                        )}
                                    </CardContent>
                                </MotionCard>
                            );
                        })}
                    </Box>
                </Container>
            </Box>

            {/* Cleaning Areas Section - 중간 톤 */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
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
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        variant="h3"
                        sx={commonStyles.sectionTitle}
                    >
                        기본 청소 범위
                    </MotionTypography>

                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: '1.1rem',
                            color: colors.text.dark,
                        }}
                    >
                        공간별로 필요한 구역을 확인하고, 편안한 입주를 위한 정돈 작업이 아래 기준에 따라 진행됩니다.
                    </MotionTypography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                            gap: 3,
                        }}
                    >
                        {cleaningAreas.map((area, index) => (
                            <MotionBox
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: { delay: index * 0.1, duration: 0.4 },
                                    },
                                }}
                                sx={{
                                    ...commonStyles.card,
                                    p: 3,
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: colors.primary.main }}>
                                    {area.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: colors.text.secondary, lineHeight: 1.6 }}>
                                    {area.description}
                                </Typography>
                            </MotionBox>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            mt: 6,
                            p: 3,
                            backgroundColor: colors.background.card,
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.border.blue}`,
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="body2" sx={{ color: colors.text.tertiary, textAlign: 'center' }}>
                            ※ 외창(바깥 유리)은 제외됩니다.
                            <br />※ 가전 내부 및 특수 작업은 옵션 안내 기준으로 진행됩니다.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

