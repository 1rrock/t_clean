'use client';

import { Box, Container, Divider, Typography } from '@mui/material';
import { Instagram, Youtube, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { colors } from "@/lib/theme/colors";

const footerMenus = [
    {
        title: '회사소개',
        links: [
            { label: '소개', href: '/about' },
            { label: '작업 방식', href: '/how-we-work' },
            { label: '장비 & 시스템', href: '/equipment' },
        ],
    },
    {
        title: '서비스',
        links: [
            { label: '서비스', href: '/service' },
            { label: '시공 사례', href: '/case-study' },
            { label: '후기', href: '/review' },
        ],
    },
    {
        title: '고객지원',
        links: [
            { label: '이용 안내', href: '/notice' },
            { label: '아카데미', href: '/academy' },
            { label: '견적 / 예약', href: '/reservation' },
        ],
    },
];

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
                        <Typography variant="body2" sx={{
                            mb: 3,
                            opacity: 0.85,
                            lineHeight: 1.6,
                            fontSize: '0.85rem',
                            color: colors.text.secondary
                        }}>
                            고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록,
                            <br />
                            정성과 책임을 담아 공간을 케어하는 프리미엄 공실 청소 서비스입니다.
                        </Typography>

                        {/* 연락처 정보 */}
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
                                <Box component="a" target='_blank' rel='noopener noreferrer' href="https://map.naver.com/v5/search/경기%20시흥시%20시흥대로%20500" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <MapPin size={16} color={colors.primary.main} style={{ flexShrink: 0 }} />
                                    <Typography variant="body2" sx={{ color: colors.text.tertiary }}>
                                        경기 시흥시 시흥대로 500 시티프론트 큐브앤칼리오 501~3호
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

                    {/* 메뉴 컬럼들 */}
                    {footerMenus.map((menu, idx) => (
                        <Box key={idx}>
                            <Typography variant="h6"
                                sx={{ mb: 2.5, fontWeight: 600, fontSize: '1rem', color: colors.text.primary }}>
                                {menu.title}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {menu.links.map((link, linkIdx) => (
                                    <Link key={linkIdx} href={link.href} style={{ textDecoration: 'none' }}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: colors.text.tertiary,
                                                fontSize: '0.9rem',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    color: colors.primary.main,
                                                    paddingLeft: '4px',
                                                },
                                            }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    ))}
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

