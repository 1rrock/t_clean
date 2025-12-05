'use client';

import {Box, Container, Typography, Button as MuiButton} from '@mui/material';
import {ClipboardList, ExternalLink} from 'lucide-react';
import {motion} from 'framer-motion';
import {fadeInUp, staggerContainer} from '@/lib/animation/variants';
import {colors} from "@/lib/theme/colors";
import PageHero from "@/components/sections/PageHero";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function ReservationPage() {
    const handleReservationClick = () => {
        // TODO: 실제 구글폼 링크로 교체
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdTG4qtl2a2mRKGNo8y7ib3oL2lgNrRQySFUeyNTq39skc0DQ/viewform', '_blank');
    };

    return (
        <Box sx={{minHeight: 'calc(100vh - 80px)'}} key="reservation-page">
            {/* Hero Section */}
            <PageHero
                title="견적 / 예약"
                subtitle={
                    <>
                        정확한 안내를 위해
                        <br/>
                        현재 예약은 온라인 폼으로만 받고 있습니다.
                    </>
                }
                isDark={false}
            />

            {/* Main Content */}
            <Box sx={{py: {xs: 8, md: 12}, position: 'relative'}}>
                <Container maxWidth="md">
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={fadeInUp}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 4,
                            p: {xs: 4, md: 6},
                            backgroundColor: 'rgba(26, 26, 26, 0.8)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 2,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                width: 120,
                                height: 120,
                                borderRadius: '50%',
                                backgroundColor: '#5B7C99',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(91, 124, 153, 0.4)',
                            }}
                        >
                            <ClipboardList size={60} color="white"/>
                        </Box>

                        {/* Description */}
                        <Box sx={{textAlign: 'center'}}>
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 3,
                                    fontWeight: 600,
                                    color: '#5B7C99',
                                    fontSize: {xs: '1.5rem', md: '2rem'},
                                }}
                            >
                                견적 / 예약 요청하기
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem',
                                    color: '#e0e0e0',
                                }}
                            >
                                아래 버튼을 클릭하시면 견적 및 예약 요청 폼으로 이동합니다.
                                <br/>
                                상세한 정보를 입력해 주시면 빠르고 정확한 안내가 가능합니다.
                            </Typography>
                        </Box>

                        {/* CTA Button */}
                        <MuiButton
                            variant="contained"
                            size="large"
                            onClick={handleReservationClick}
                            endIcon={<ExternalLink size={20}/>}
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                borderRadius: 3,
                                backgroundColor: '#5B7C99',
                                color: 'white',
                                boxShadow: '0 4px 20px rgba(91, 124, 153, 0.4)',
                                '&:hover': {
                                    backgroundColor: '#4A6B85',
                                    boxShadow: '0 6px 24px rgba(91, 124, 153, 0.5)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            견적 / 예약 요청하기
                        </MuiButton>

                        {/* Additional Info */}
                        <Box
                            sx={{
                                mt: 6,
                                p: 4,
                                backgroundColor: 'rgba(91, 124, 153, 0.1)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(91, 124, 153, 0.2)',
                                borderRadius: 2,
                                width: '100%',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    color: '#5B7C99',
                                    textAlign: 'center',
                                }}
                            >
                                견적 요청 시 필요한 정보
                            </Typography>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)'},
                                    gap: 2,
                                    mt: 3,
                                }}
                            >
                                {[
                                    '청소 유형 (입주/이사/인테리어 후)',
                                    '평수',
                                    '주소',
                                    '희망 일정',
                                    '연락처',
                                    '특이사항',
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            p: 2,
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: 1,
                                            border: '1px solid rgba(91, 124, 153, 0.3)',
                                        }}
                                    >
                                        <Typography variant="body2" sx={{fontWeight: 500, color: '#e0e0e0'}}>
                                            • {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Notice */}
                        <Box
                            sx={{
                                p: 3,
                                backgroundColor: 'info.light',
                                borderRadius: 2,
                                borderLeft: '4px solid',
                                borderColor: 'info.main',
                                width: '100%',
                            }}
                        >
                            <Typography variant="body2" sx={{lineHeight: 1.8}}>
                                <strong>※ 안내</strong>
                                <br/>
                                • 요청하신 내용을 확인 후 1~2일 이내에 연락드립니다.
                                <br/>
                                • 정확한 견적을 위해 현장 사진이 필요할 수 있습니다.
                                <br/>• 작업 가능 일정은 예약 상황에 따라 조율됩니다.
                            </Typography>
                        </Box>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}

