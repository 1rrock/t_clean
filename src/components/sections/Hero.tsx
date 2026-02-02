'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';
import Button from '@/components/common/Button';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { commonStyles, colors } from "@/lib/theme/colors";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);

export default function Hero() {
    return (
        <Box
            className="marble-bg"
            sx={{
                position: 'relative',
                height: {
                    xs: 'calc(100dvh - 56px)',
                    md: 'calc(100dvh - 72px)',
                },
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 0 },
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(10, 10, 10, 0.4)',
                    backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(91, 124, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(91, 124, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)
          `,
                    opacity: 1,
                    pointerEvents: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    opacity: 0.3,
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg">
                <MotionBox
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    sx={{ position: 'relative', zIndex: 1 }}
                >
                    <MotionTypography
                        variant="h1"
                        variants={fadeInUp}
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 700,
                            mb: 0,
                            color: colors.text.dark,
                        }}
                    >
                        하루 한 집,
                    </MotionTypography>
                    <MotionTypography
                        variant="h1"
                        variants={fadeInUp}
                        sx={{
                            fontSize: { xs: '2.5rem', md: '4rem' },
                            fontWeight: 700,
                        }}
                    >
                        깊이를 청소합니다
                    </MotionTypography>

                    <MotionTypography
                        variant="h5"
                        variants={fadeInUp}
                        color='rgba(255,255,255,0.6)'
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.4rem' },
                            fontWeight: 400,
                            mb: 2,
                            maxWidth: '800px',
                            lineHeight: 1.8,
                            opacity: 0.95,
                        }}
                    >
                        고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록,
                        <br />
                        정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스입니다.
                    </MotionTypography>

                    <MotionTypography
                        variant="body1"
                        variants={fadeInUp}
                        sx={{
                            color: '#fff',
                            fontWeight: 500,
                            mb: 3,
                            fontSize: { xs: '0.95rem', md: '1.05rem' },
                            letterSpacing: '-0.01em',
                        }}
                    >
                        작업가능지역: 서울, 경기, 인천, 충청권일부, 경상권일부
                    </MotionTypography>

                    <MotionStack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        variants={fadeInUp}
                        sx={{
                            alignItems: { xs: 'stretch', sm: 'center' },
                            flexWrap: 'wrap',
                            gap: 2
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                py: { xs: 1.5, md: 2 },
                                px: { xs: 3, md: 4 },
                                fontSize: { xs: '0.95rem', md: '1.1rem' },
                                fontWeight: 600,
                                ...commonStyles.button,
                            }}
                            onClick={() => {
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSdTG4qtl2a2mRKGNo8y7ib3oL2lgNrRQySFUeyNTq39skc0DQ/viewform', '_blank');
                            }}
                        >
                            간편견적문의
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => {
                                window.open("https://www.youtube.com/@%EB%AF%BF%EA%B3%A0%EB%A7%A1%EA%B8%B0%EB%8A%94%EC%B2%AD%EC%86%8C-f8n", "_blank");
                            }}
                            sx={{
                                py: { xs: 1.2, md: 2 },
                                px: { xs: 2.5, md: 4 },
                                fontSize: { xs: '0.95rem', md: '1.1rem' },
                                borderColor: colors.text.primary,
                                color: colors.text.primary,
                                display: 'flex',
                                gap: 1,
                                '&:hover': {
                                    borderColor: colors.text.primary,
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            <Youtube size={20} />
                            유튜브
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => {
                                window.open("https://www.instagram.com/t_cleaning_/", "_blank");
                            }}
                            sx={{
                                py: { xs: 1.2, md: 2 },
                                px: { xs: 2.5, md: 4 },
                                fontSize: { xs: '0.95rem', md: '1.1rem' },
                                borderColor: 'white',
                                color: 'white',
                                display: 'flex',
                                gap: 1,
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            <Instagram size={20} />
                            인스타그램
                        </Button>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                                window.location.href = '/reservation';
                            }}
                            sx={{
                                py: { xs: 1.5, md: 2 },
                                px: { xs: 3, md: 4 },
                                fontSize: { xs: '0.95rem', md: '1.1rem' },
                                fontWeight: 600,
                                backgroundColor: '#1a1a1a',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#000000',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            교육문의
                        </Button>
                    </MotionStack>
                </MotionBox>
            </Container>
        </Box>
    );
}
