'use client';

import {Box, Container, Typography} from '@mui/material';
import {motion} from 'framer-motion';
import {fadeInUp, staggerContainer} from '@/lib/animation/variants';
import {colors} from '@/lib/theme/colors';
import React from "react";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

interface PageHeroProps {
    title: string;
    subtitle: React.ReactNode;
    isDark?: boolean;
}

export default function PageHero({title, subtitle, isDark = true}: PageHeroProps) {
    const backgroundColor = isDark ? colors.background.darkest : colors.background.overlayLight;
    const backgroundImage = isDark ? 'none' : colors.gradient.blueRadialStrong;

    return (
        <MotionBox
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="marble-bg flex items-center"
            sx={{
                color: colors.text.primary,
                height: {
                    xs: "calc(100dvh - 56px)",
                    md: "calc(100dvh - 72px)"
                },
                py: {xs: 8, md: 12},
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage,
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg" sx={{position: 'relative', zIndex: 1}}>
                <MotionTypography
                    variant="h2"
                    variants={fadeInUp}
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontSize: {xs: '2rem', md: '3rem'},
                        fontWeight: 600,
                        color: colors.text.dark,
                    }}
                >
                    {title}
                </MotionTypography>
                <MotionTypography
                    variant="h5"
                    variants={fadeInUp}
                    sx={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.8,
                        fontSize: {xs: '0.85rem', md: '1.3rem'},
                        fontWeight: 400,
                        color: isDark ? colors.text.secondary : colors.primary.main,
                    }}
                >
                    {subtitle}
                </MotionTypography>
            </Container>
        </MotionBox>
    );
}

