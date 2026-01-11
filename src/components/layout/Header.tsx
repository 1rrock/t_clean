'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    useScrollTrigger,
    Collapse,
} from '@mui/material';
import { Menu as MenuIcon, X, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMenuStore } from '@/store/useMenuStore';
import { colors } from "@/lib/theme/colors";
import { useHideOnScroll } from '@/hooks/useHideOnScroll';

// 메가 메뉴 그룹 구조
const menuGroups = [
    {
        label: '회사소개',
        items: [
            { label: '소개', href: '/about' },
            { label: '작업 방식', href: '/how-we-work' },
            { label: '장비 & 시스템', href: '/equipment' },
        ],
    },
    {
        label: '서비스',
        items: [
            { label: '서비스', href: '/service' },
            { label: '후기', href: '/review' },
        ],
    },
    {
        label: '고객지원',
        items: [
            { label: '이용 안내', href: '/notice' },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();
    const { isOpen, toggle, close } = useMenuStore();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
    const headerVisible = useHideOnScroll();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    // 현재 경로가 그룹에 속하는지 확인
    const isGroupActive = (group: typeof menuGroups[0]) => {
        return group.items.some(item => pathname === item.href);
    };

    return (
        <>
            <AppBar
                position="fixed"
                color="default"
                sx={{
                    backgroundColor: '#000',
                    backdropFilter: 'blur(10px)',
                    boxShadow: trigger ? `0 2px 20px ${colors.shadow.hover}` : `0 2px 10px ${colors.shadow.default}`,
                    transition: 'all 0.3s ease',
                    borderBottom: `1px solid ${colors.border.default}`,
                    transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)',
                    transitionDuration: '0.4s',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        minHeight: { xs: '56px', md: '72px' },
                    }}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center h-18">
                            <Box className="relative h-full w-20">
                                <Image
                                    src="/logo.svg"
                                    alt="믿고 맡기는 청소"
                                    fill
                                    priority
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        </Link>

                        {/* Desktop Mega Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                            {/* 메인 링크 */}
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        color: pathname === '/' ? colors.primary.main : colors.text.primary,
                                        fontWeight: pathname === '/' ? 600 : 400,
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'color 0.2s ease',
                                        '&:hover': { color: colors.primary.main },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: pathname === '/' ? '80%' : '0%',
                                            height: '2px',
                                            backgroundColor: colors.primary.main,
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': { width: '80%' },
                                    }}
                                >
                                    메인
                                </Box>
                            </Link>

                            {/* 메가 메뉴 그룹들 */}
                            {menuGroups.map((group) => (
                                <Box
                                    key={group.label}
                                    sx={{ position: 'relative' }}
                                    onMouseEnter={() => setActiveMenu(group.label)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <Box
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            color: isGroupActive(group) || activeMenu === group.label ? colors.primary.main : colors.text.primary,
                                            fontWeight: isGroupActive(group) ? 600 : 400,
                                            fontSize: '0.95rem',
                                            cursor: 'pointer',
                                            transition: 'color 0.2s ease',
                                            '&:hover': { color: colors.primary.main },
                                        }}
                                    >
                                        {group.label}
                                        <ChevronDown
                                            size={16}
                                            style={{
                                                transition: 'transform 0.2s ease',
                                                transform: activeMenu === group.label ? 'rotate(180deg)' : 'rotate(0deg)',
                                            }}
                                        />
                                    </Box>

                                    {/* 드롭다운 메뉴 */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '50%',
                                            pt: 2,
                                            opacity: activeMenu === group.label ? 1 : 0,
                                            visibility: activeMenu === group.label ? 'visible' : 'hidden',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: activeMenu === group.label
                                                ? 'translateX(-50%) translateY(0)'
                                                : 'translateX(-50%) translateY(-10px)',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: '220px',
                                                background: `linear-gradient(145deg, ${colors.background.darker} 0%, rgba(20, 20, 20, 0.98) 100%)`,
                                                backdropFilter: 'blur(20px)',
                                                border: `1px solid ${colors.border.blue}`,
                                                borderRadius: 2,
                                                boxShadow: `
                          0 20px 40px rgba(0, 0, 0, 0.4),
                          0 0 1px rgba(91, 124, 153, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.05)
                        `,
                                                overflow: 'hidden',
                                                position: 'relative',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '40px',
                                                    height: '2px',
                                                    background: `linear-gradient(90deg, transparent, ${colors.primary.main}, transparent)`,
                                                    borderRadius: '0 0 2px 2px',
                                                },
                                            }}
                                        >
                                            <Box sx={{ py: 1.5 }}>
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                px: 3,
                                                                py: 1.5,
                                                                mx: 1.5,
                                                                my: 0.5,
                                                                borderRadius: 1,
                                                                color: pathname === item.href ? colors.primary.main : colors.text.primary,
                                                                fontWeight: pathname === item.href ? 600 : 400,
                                                                fontSize: '0.9rem',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 1.5,
                                                                position: 'relative',
                                                                transition: 'all 0.2s ease',
                                                                backgroundColor: pathname === item.href
                                                                    ? `${colors.primary.main}15`
                                                                    : 'transparent',
                                                                '&:hover': {
                                                                    backgroundColor: `${colors.primary.main}12`,
                                                                    color: colors.primary.main,
                                                                    transform: 'translateX(4px)',
                                                                },
                                                                '&::before': {
                                                                    content: '""',
                                                                    width: '4px',
                                                                    height: '4px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: pathname === item.href
                                                                        ? colors.primary.main
                                                                        : colors.text.tertiary,
                                                                    transition: 'all 0.2s ease',
                                                                    opacity: pathname === item.href ? 1 : 0.5,
                                                                },
                                                                '&:hover::before': {
                                                                    backgroundColor: colors.primary.main,
                                                                    opacity: 1,
                                                                    transform: 'scale(1.3)',
                                                                },
                                                            }}
                                                        >
                                                            {item.label}
                                                        </Box>
                                                    </Link>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}

                            <Link href="/academy" style={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        color: pathname === '/academy' ? colors.primary.main : colors.text.primary,
                                        fontWeight: pathname === '/academy' ? 600 : 400,
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'color 0.2s ease',
                                        '&:hover': { color: colors.primary.main },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: pathname === '/academy' ? '80%' : '0%',
                                            height: '2px',
                                            backgroundColor: colors.primary.main,
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': { width: '80%' },
                                    }}
                                >
                                    아카데미
                                </Box>
                            </Link>

                            {/* 견적/예약 버튼 (강조) */}
                            <Link href="/reservation" style={{ textDecoration: 'none', marginLeft: 8 }}>
                                <Box
                                    sx={{
                                        px: 3,
                                        py: 1,
                                        backgroundColor: pathname === '/reservation' ? colors.primary.main : 'transparent',
                                        color: pathname === '/reservation' ? colors.text.primary : colors.primary.main,
                                        border: `1px solid ${colors.primary.main}`,
                                        borderRadius: 1,
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: colors.primary.main,
                                            color: colors.text.primary,
                                        },
                                    }}
                                >
                                    견적 / 예약
                                </Box>
                            </Link>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            sx={{ display: { xs: 'flex', md: 'none' }, color: colors.primary.main }}
                            onClick={toggle}
                            aria-label="메뉴"
                        >
                            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={close}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '280px',
                        backgroundColor: colors.background.darker,
                        color: colors.text.primary,
                        borderLeft: `1px solid ${colors.border.default}`,
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                {/* Drawer Header - 로고와 X버튼 (고정) */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: 2,
                        py: 2,
                        borderBottom: `1px solid ${colors.border.default}`,
                        flexShrink: 0,
                    }}
                >
                    <IconButton
                        onClick={close}
                        sx={{
                            color: colors.primary.main,
                            '&:hover': {
                                backgroundColor: `${colors.primary.main}20`,
                            },
                        }}
                        aria-label="닫기"
                    >
                        <X size={24} />
                    </IconButton>
                </Box>

                {/* Menu List (스크롤 가능) */}
                <List
                    sx={{
                        px: 1,
                        overflow: 'auto',
                        flex: 1,
                    }}
                >
                    {/* 메인 링크 */}
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            href="/"
                            onClick={close}
                            selected={pathname === '/'}
                            sx={{
                                py: 2,
                                px: 2,
                                my: 0.5,
                                borderRadius: 1,
                                color: colors.text.primary,
                                backgroundColor: pathname === '/' ? `${colors.primary.main}15` : 'transparent',
                                borderLeft: pathname === '/' ? `3px solid ${colors.primary.main}` : '3px solid transparent',
                                transition: 'all 0.2s ease',
                                '&.Mui-selected': {
                                    backgroundColor: `${colors.primary.main}15`,
                                    color: colors.primary.main,
                                },
                                '&:hover': {
                                    backgroundColor: `${colors.primary.main}10`,
                                    color: colors.primary.main,
                                },
                            }}
                        >
                            <ListItemText
                                primary="메인"
                                slotProps={{
                                    primary: {
                                        fontWeight: pathname === '/' ? 600 : 500,
                                        fontSize: '0.95rem',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>

                    {/* 아코디언 그룹 메뉴 */}
                    {menuGroups.map((group) => (
                        <Box key={group.label}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => setMobileExpandedGroup(
                                        mobileExpandedGroup === group.label ? null : group.label
                                    )}
                                    sx={{
                                        py: 2,
                                        px: 2,
                                        my: 0.5,
                                        borderRadius: 1,
                                        color: isGroupActive(group) ? colors.primary.main : colors.text.primary,
                                        backgroundColor: isGroupActive(group) ? `${colors.primary.main}15` : 'transparent',
                                        borderLeft: isGroupActive(group) ? `3px solid ${colors.primary.main}` : '3px solid transparent',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: `${colors.primary.main}10`,
                                            color: colors.primary.main,
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={group.label}
                                        slotProps={{
                                            primary: {
                                                fontWeight: isGroupActive(group) ? 600 : 500,
                                                fontSize: '0.95rem',
                                            },
                                        }}
                                    />
                                    {mobileExpandedGroup === group.label ? (
                                        <ChevronUp size={18} />
                                    ) : (
                                        <ChevronDown size={18} />
                                    )}
                                </ListItemButton>
                            </ListItem>

                            {/* 서브메뉴 */}
                            <Collapse in={mobileExpandedGroup === group.label} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={{ pl: 2 }}>
                                    {group.items.map((item) => (
                                        <ListItem key={item.href} disablePadding>
                                            <ListItemButton
                                                component={Link}
                                                href={item.href}
                                                onClick={close}
                                                selected={pathname === item.href}
                                                sx={{
                                                    py: 1.5,
                                                    px: 2,
                                                    my: 0.25,
                                                    borderRadius: 1,
                                                    color: pathname === item.href ? colors.primary.main : colors.text.secondary,
                                                    backgroundColor: pathname === item.href ? `${colors.primary.main}10` : 'transparent',
                                                    transition: 'all 0.2s ease',
                                                    '&.Mui-selected': {
                                                        backgroundColor: `${colors.primary.main}10`,
                                                        color: colors.primary.main,
                                                    },
                                                    '&:hover': {
                                                        backgroundColor: `${colors.primary.main}08`,
                                                        color: colors.primary.main,
                                                    },
                                                }}
                                            >
                                                <ListItemText
                                                    primary={item.label}
                                                    slotProps={{
                                                        primary: {
                                                            fontWeight: pathname === item.href ? 600 : 400,
                                                            fontSize: '0.9rem',
                                                        },
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </Box>
                    ))}


                    {/* 메인 링크 */}
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            href="/academy"
                            onClick={close}
                            selected={pathname === '/academy'}
                            sx={{
                                py: 2,
                                px: 2,
                                my: 0.5,
                                borderRadius: 1,
                                color: colors.text.primary,
                                backgroundColor: pathname === '/academy' ? `${colors.primary.main}15` : 'transparent',
                                borderLeft: pathname === '/academy' ? `3px solid ${colors.primary.main}` : '3px solid transparent',
                                transition: 'all 0.2s ease',
                                '&.Mui-selected': {
                                    backgroundColor: `${colors.primary.main}15`,
                                    color: colors.primary.main,
                                },
                                '&:hover': {
                                    backgroundColor: `${colors.primary.main}10`,
                                    color: colors.primary.main,
                                },
                            }}
                        >
                            <ListItemText
                                primary="아카데미"
                                slotProps={{
                                    primary: {
                                        fontWeight: pathname === '/academy' ? 600 : 500,
                                        fontSize: '0.95rem',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>

                    {/* 견적/예약 버튼 (강조) */}
                    <ListItem disablePadding sx={{ mt: 2, px: 1 }}>
                        <ListItemButton
                            component={Link}
                            href="/reservation"
                            onClick={close}
                            sx={{
                                py: 2,
                                px: 2,
                                borderRadius: 1,
                                backgroundColor: pathname === '/reservation' ? colors.primary.main : 'transparent',
                                color: pathname === '/reservation' ? colors.text.primary : colors.primary.main,
                                border: `1px solid ${colors.primary.main}`,
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    backgroundColor: colors.primary.main,
                                    color: colors.text.primary,
                                },
                            }}
                        >
                            <ListItemText
                                primary="견적 / 예약"
                                slotProps={{
                                    primary: {
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        textAlign: 'center',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

