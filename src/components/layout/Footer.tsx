'use client';

import {Box, Container, Divider, Typography} from '@mui/material';
import {Instagram, Youtube} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {colors} from "@/lib/theme/colors";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'transparent',
                color: 'white',
                py: 6,
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: colors.background.dark,
                    pointerEvents: 'none',
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth="xl" sx={{position: 'relative', zIndex: 1}}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr', md: 'repeat(3, 1fr)'},
                        gap: 4,
                    }}
                >
                    <Box>
                        <Box sx={{mb: 2}}>
                            <Image
                                src="/logo.png"
                                alt="믿고 맡기는 청소"
                                width={160}
                                height={44}
                                style={{objectFit: 'contain'}}
                            />
                        </Box>
                        <Typography variant="body2" sx={{mb: 2, opacity: 0.9}}>
                            고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록,
                            <br/>
                            정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스입니다.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                            빠른 링크
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Link href="/about" style={{color: colors.text.primary, textDecoration: 'none', opacity: 0.9}}>
                                <Typography variant="body2" sx={{'&:hover': {opacity: 1, color: colors.primary.main}}}>
                                    소개
                                </Typography>
                            </Link>
                            <Link href="/service" style={{color: colors.text.primary, textDecoration: 'none', opacity: 0.9}}>
                                <Typography variant="body2" sx={{'&:hover': {opacity: 1, color: colors.primary.main}}}>
                                    서비스
                                </Typography>
                            </Link>
                            <Link href="/notice" style={{color: colors.text.primary, textDecoration: 'none', opacity: 0.9}}>
                                <Typography variant="body2" sx={{'&:hover': {opacity: 1, color: colors.primary.main}}}>
                                    이용 안내
                                </Typography>
                            </Link>
                            <Link href="/reservation" style={{color: colors.text.primary, textDecoration: 'none', opacity: 0.9}}>
                                <Typography variant="body2" sx={{'&:hover': {opacity: 1, color: colors.primary.main}}}>
                                    견적 / 예약
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{mb: 2, fontWeight: 600}}>
                            소셜 미디어
                        </Typography>
                        <Box sx={{display: 'flex', gap: 2, mb: 3}}>
                            <Link href="https://www.youtube.com/@%EB%AF%BF%EA%B3%A0%EB%A7%A1%EA%B8%B0%EB%8A%94%EC%B2%AD%EC%86%8C-f8n" target="_blank" rel="noopener noreferrer">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: `${colors.primary.main}20`,
                                        color: colors.primary.main,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: `${colors.primary.main}40`,
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    <Youtube size={20}/>
                                </Box>
                            </Link>
                            <Link href="https://www.instagram.com/t_cleaning_/" target="_blank" rel="noopener noreferrer">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: `${colors.primary.main}20`,
                                        color: colors.primary.main,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: `${colors.primary.main}40`,
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    <Instagram size={20}/>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{my: 3, borderColor: colors.border.default}}/>

                <Typography variant="body2" sx={{textAlign: 'center', opacity: 0.8, color: colors.text.tertiary}}>
                    © {new Date().getFullYear()} 믿고 맡기는 청소. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

