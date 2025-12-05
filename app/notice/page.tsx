'use client';

import {Box, Container, Typography, Card, CardContent, Divider, Chip} from '@mui/material';
import {AlertCircle, DollarSign, CheckCircle, Shield, XCircle} from 'lucide-react';
import {motion} from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import {fadeInUp, staggerContainer} from '@/lib/animation/variants';
import {colors, commonStyles} from '@/lib/theme/colors';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const restrictions = [
    '부분 청소 요청',
    '시간 제한 청소',
    '외창(바깥 유리) 탈거 및 청소',
    '도배풀 미건조 상태 (최소 2일, 권장 7일 이후 진행)',
    '실리콘 절개 및 재시공 작업',
    '공사 하자, 스크래치, 유막 제거 요청 (청소 범위 외 항목)',
    '전기 또는 수도 사용 불가 시 (장비 운용이 어려운 경우)',
];

const additionalCosts = [
    '심한 곰팡이',
    '니코틴 타르 변색',
    '스티커/끈끈이 대량 제거',
    '인테리어 후 준공청소 미진행 상태',
    '실제 평수·구성 차이',
    '엘리베이터 미설치/주차 불가 등',
];

const preparations = [
    {title: '전기 사용 가능', description: '장비 작동을 위해 필수'},
    {title: '수도 사용 가능', description: '청소 작업을 위해 필수'},
    {title: '입주 가능한 상태', description: '공실 상태 확인'},
    {title: '주차 가능 공간 확보', description: '장비 운반을 위해 필요'},
    {title: '출입증 필요 시 고객 준비', description: '현장 출입을 위해 필요'},
];

const cancellationPolicy = [
    {period: '작업 7일 전까지', fee: '예약금 전액 환불'},
    {period: '작업 6~4일 전', fee: '청소 금액의 20%'},
    {period: '작업 3~2일 전', fee: '청소 금액의 30%'},
    {period: '작업 전날~당일', fee: '청소 금액의 50%'},
];

const impossibleConditions = [
    '폐기물·자재 등이 정리되지 않아 작업 환경 확보가 불가한 경우',
    '전기 또는 수도 미개통으로 장비 사용 불가',
    '도배, 페인트, 공사 등 타 공정이 완료되지 않은 상태',
    '현장 진입이 불가능한 경우',
];

export default function NoticePage() {
    return (
        <Box key="notice-page">
            {/* Hero Section */}
            <PageHero
                title="이용 안내 · 필독사항"
                subtitle="원활한 작업 진행을 위해 꼭 확인해 주세요"
                isDark={false}
            />

            {/* Restrictions Section */}
            <Box sx={{py: {xs: 8, md: 12}}}>
                <Container maxWidth="lg">
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
                        작업 제한 및 안내
                    </MotionTypography>

                    <MotionCard
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{boxShadow: 3}}
                    >
                        <CardContent sx={{p: {xs: 3, md: 5}}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                {restrictions.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            p: 2,
                                            backgroundColor: 'grey.50',
                                            borderRadius: 1,
                                            borderLeft: '4px solid',
                                            borderColor: 'error.main',
                                        }}
                                    >
                                        <XCircle
                                            size={20}
                                            style={{marginRight: '12px', marginTop: '2px', flexShrink: 0}}
                                            color="#d32f2f"
                                        />
                                        <Typography variant="body1" sx={{lineHeight: 1.6, color: colors.text.dark}}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </MotionCard>
                </Container>
            </Box>

            {/* Additional Costs Section */}
            <Box sx={{
                py: {
                    xs: 8, md: 12,
                    backgroundColor: colors.background.overlayLight,
                    backgroundImage: colors.gradient.blueRadialStrong,
                }
            }}>
                <Container maxWidth="lg">
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
                        추가 비용 발생 기준
                    </MotionTypography>

                    <MotionCard
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{boxShadow: 3}}
                    >
                        <CardContent sx={{p: {xs: 3, md: 5}}}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'},
                                    gap: 2,
                                }}
                            >
                                {additionalCosts.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            p: 2,
                                            backgroundColor: 'warning.light',
                                            borderRadius: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                        }}
                                    >
                                        <DollarSign size={20} color="#ed6c02"/>
                                        <Typography variant="body2" sx={{fontWeight: 500}}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </MotionCard>
                </Container>
            </Box>

            {/* Preparations Section */}
            <Box sx={{py: {xs: 8, md: 12}}}>
                <Container maxWidth="lg">
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
                        기본 준비 사항
                    </MotionTypography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {xs: '1fr', md: 'repeat(2, 1fr)'},
                            gap: 3,
                        }}
                    >
                        {preparations.map((item, index) => (
                            <MotionCard
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                variants={{
                                    hidden: {opacity: 0, x: index % 2 === 0 ? -20 : 20},
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {delay: index * 0.1, duration: 0.5},
                                    },
                                }}
                                sx={{boxShadow: 2}}
                            >
                                <CardContent sx={{p: 3}}>
                                    <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
                                        <CheckCircle
                                            size={24}
                                            style={{marginRight: '12px', marginTop: '2px', flexShrink: 0}}
                                            color={colors.status.success}
                                        />
                                        <Box>
                                            <Typography variant="h6"
                                                        sx={{mb: 1, fontWeight: 600, color: colors.text.primary}}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{color: colors.text.secondary}}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </MotionCard>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* A/S Policy Section - 중간 톤 */}
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
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        variant="h3"
                        sx={commonStyles.sectionTitle}
                    >
                        A/S 정책
                    </MotionTypography>

                    <MotionCard
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{...commonStyles.card}}
                    >
                        <CardContent sx={{p: {xs: 3, md: 5}}}>
                            <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                                <Shield size={32} color={colors.primary.main} style={{marginRight: '16px'}}/>
                                <Typography variant="h5" sx={{fontWeight: 600, color: colors.text.primary}}>
                                    믿고 맡기는 청소는 작업 결과에 끝까지 책임을 갖습니다.
                                </Typography>
                            </Box>

                            <Divider sx={{my: 3}}/>

                            <Typography variant="body1" sx={{mb: 2, lineHeight: 1.8, color: colors.text.secondary}}>
                                작업 후 발견된 미흡 사항은 현장 확인 후 조치합니다
                            </Typography>

                            <Typography variant="body1" sx={{mb: 3, fontWeight: 600, color: colors.primary.main}}>
                                권장 A/S 접수 기한: 작업일 포함 3일 이내
                            </Typography>

                            <Box
                                sx={{
                                    p: 3,
                                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                                    borderRadius: 2,
                                    borderLeft: `4px solid ${colors.status.info}`,
                                }}
                            >
                                <Typography variant="body2" sx={{lineHeight: 1.8, color: colors.text.secondary}}>
                                    ※ 청소는 사람이 직접 수행하는 작업 특성상 미세한 누락이 있을 수 있습니다.
                                    <br/>
                                    이 경우 빠른 검토 후 보완 작업을 진행합니다.
                                    <br/>
                                    (비용 청구 없이 A/S 제공)
                                </Typography>
                            </Box>
                        </CardContent>
                    </MotionCard>
                </Container>
            </Box>

            {/* Cancellation Policy Section - 밝게 */}
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
                        sx={commonStyles.sectionTitle}
                    >
                        취소 및 위약금 안내
                    </MotionTypography>

                    <MotionCard
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{...commonStyles.card, mb: 4}}
                    >
                        <CardContent sx={{p: {xs: 3, md: 5}}}>
                            <Typography variant="body1" sx={{mb: 4, lineHeight: 1.8, color: colors.text.secondary}}>
                                믿고 맡기는 청소는 팀별 1일 1현장 전담제로 운영됩니다.
                                <br/>
                                예약 확정 시 동일 날짜에 다른 예약이 불가능해 취소 기준을 아래와 같이 적용합니다.
                            </Typography>

                            <Typography variant="h6" sx={{mb: 3, fontWeight: 600, color: colors.primary.main}}>
                                취소 시 위약금 기준
                            </Typography>

                            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                {cancellationPolicy.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            p: 2,
                                            backgroundColor: index === 0 ? 'rgba(76, 175, 80, 0.15)' : 'rgba(255, 193, 7, 0.15)',
                                            borderRadius: 1,
                                            flexDirection: {xs: 'column', sm: 'row'},
                                            gap: 1,
                                        }}
                                    >
                                        <Typography variant="body1"
                                                    sx={{fontWeight: 600, color: colors.text.secondary}}>
                                            {item.period}
                                        </Typography>
                                        <Chip
                                            label={item.fee}
                                            color={index === 0 ? 'success' : 'warning'}
                                            sx={{fontWeight: 600}}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </MotionCard>

                    {/* Impossible Conditions */}
                    <MotionCard
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{...commonStyles.card}}
                    >
                        <CardContent sx={{p: {xs: 3, md: 5}}}>
                            <Typography variant="h6" sx={{mb: 3, fontWeight: 600, color: colors.status.error}}>
                                현장 상태로 작업 불가 시 (철수 기준)
                            </Typography>

                            <Typography variant="body1" sx={{mb: 3, lineHeight: 1.8, color: colors.text.secondary}}>
                                아래 항목에 해당할 경우 작업이 불가능하며 당일 위약금이 적용됩니다
                                <br/>
                                <strong>(총 금액의 50%)</strong>
                            </Typography>

                            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                {impossibleConditions.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            p: 2,
                                            backgroundColor: 'rgba(211, 47, 47, 0.1)',
                                            borderRadius: 1,
                                            borderLeft: `4px solid ${colors.status.error}`,
                                        }}
                                    >
                                        <AlertCircle
                                            size={20}
                                            style={{marginRight: '12px', marginTop: '2px', flexShrink: 0}}
                                            color={colors.status.error}
                                        />
                                        <Typography variant="body2"
                                                    sx={{lineHeight: 1.6, color: colors.text.secondary}}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    mt: 4,
                                    p: 3,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: 2,
                                }}
                            >
                                <Typography variant="body2" sx={{lineHeight: 1.8, color: colors.text.tertiary}}>
                                    ※ 철수 이후 재예약 시 일정 재조율은 가능하나 당일 위약금은 별도 정산됩니다.
                                    <br/>※ 예약금 입금 시, 아래 기준에 동의한 것으로 간주합니다.
                                </Typography>
                            </Box>
                        </CardContent>
                    </MotionCard>
                </Container>
            </Box>
        </Box>
    );
}
