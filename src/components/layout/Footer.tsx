'use client';

import { Box, Container, Divider, Typography } from '@mui/material';
import { Instagram, Youtube, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from "@/lib/theme/colors";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: colors.background.dark,
                color: 'white',
                py: { xs: 6, md: 8 },
                borderTop: `1px solid ${colors.border.default}`,
            }}
        >
            <Container maxWidth="xl">
                {/* 상단 메뉴 섹션 */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                        gap: { xs: 3, md: 4 },
                        mb: 5,
                    }}
                >
                    {/* 로고 & 소개 */}
                    <Box>
                        <Box sx={{ mb: 3, position: 'relative', width: 64, height: 44 }}>
                            <Image
                                src="/logo.svg"
                                alt="믿고 맡기는 청소"
                                fill
                                sizes="64px"
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>

                        {/* 연락처 정보 */}
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
                                <Box component="a" target='_blank' rel='noopener noreferrer' href="https://map.naver.com/v5/search/경기%20시흥시%20시흥대로%20500" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <MapPin size={16} color={colors.primary.main} style={{ flexShrink: 0 }} />
                                    <Typography variant="body2" sx={{ color: colors.text.tertiary }}>
                                        경기 시흥시 시흥대로 500 시티프론트 큐브앤칼리오 501,502,503호
                                    </Typography>
                                </Box>
                            </Box>

                            {/* 소셜 미디어 */}
                            <Box sx={{ display: 'flex', alignItems: 'end', gap: 2 }}>
                                <Link
                                    href="https://www.youtube.com/@%EB%AF%BF%EA%B3%A0%EB%A7%A1%EA%B8%B0%EB%8A%94%EC%B2%AD%EC%86%8C-f8n"
                                    target="_blank" rel="noopener noreferrer">
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
                                                backgroundColor: colors.primary.main,
                                                color: colors.text.primary,
                                                transform: 'translateY(-3px)',
                                            },
                                        }}
                                    >
                                        <Youtube size={20} />
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
                                                backgroundColor: colors.primary.main,
                                                color: colors.text.primary,
                                                transform: 'translateY(-3px)',
                                            },
                                        }}
                                    >
                                        <Instagram size={20} />
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{ my: 4, borderColor: colors.border.default }} />

                {/* 하단 - 소셜 미디어 & 저작권 */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center',
                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                        gap: 2,
                    }}
                >

                    {/* 저작권 */}
                    <Typography variant="body2" sx={{
                        textAlign: { xs: 'left', md: 'right' },
                        opacity: 0.8,
                        color: colors.text.tertiary,
                        fontSize: '0.85rem'
                    }}>
                        © 2026 믿고 맡기는 청소. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

