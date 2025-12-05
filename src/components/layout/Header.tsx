'use client';

import React from 'react';
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
} from '@mui/material';
import { Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMenuStore } from '@/store/useMenuStore';
import {colors} from "@/lib/theme/colors";

const menuItems = [
  { label: '메인', href: '/' },
  { label: '소개', href: '/about' },
  { label: '서비스', href: '/service' },
  { label: '작업 방식', href: '/how-we-work' },
  { label: '장비 & 시스템', href: '/equipment' },
  { label: '시공 사례', href: '/case-study' },
  { label: '후기', href: '/review' },
  { label: '이용 안내', href: '/notice' },
  { label: '견적 / 예약', href: '/reservation' },
];

export default function Header() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useMenuStore();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          boxShadow: trigger ? `0 2px 20px ${colors.shadow.hover}` : `0 2px 10px ${colors.shadow.default}`,
          transition: 'all 0.3s ease',
          borderBottom: `1px solid ${colors.border.default}`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: trigger ? colors.background.darker : colors.background.dark,
            transition: 'background-color 0.3s ease',
            zIndex: -1,
          },
        }}
      >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', minHeight: { xs: '56px', md: '72px' }, px: { xs: 1, sm: 2 } }}>
              {/* Logo */}
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Box sx={{ position: 'relative', width: { xs: 50, md: 70 }, height: { xs: 36, md: 50 } }}>
                  <Image
                    src="/logo.png"
                    alt="믿고 맡기는 청소"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Link>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                        color: pathname === item.href ? colors.primary.main : colors.text.primary,
                        fontWeight: pathname === item.href ? 600 : 400,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: colors.primary.main,
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: pathname === item.href ? '80%' : '0%',
                          height: '2px',
                          backgroundColor: colors.primary.main,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '80%',
                        },
                      }}
                    >
                      {item.label}
                    </Box>
                  </Link>
                ))}
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
          {menuItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={close}
                selected={pathname === item.href}
                sx={{
                  py: 2.5,
                  px: 2,
                  my: 0.5,
                  borderRadius: 1,
                  color: colors.text.primary,
                  backgroundColor: pathname === item.href ? `${colors.primary.main}15` : 'transparent',
                  borderLeft: pathname === item.href ? `3px solid ${colors.primary.main}` : '3px solid transparent',
                  pl: pathname === item.href ? 'calc(1rem - 3px)' : '1rem',
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
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontWeight: pathname === item.href ? 600 : 500,
                      fontSize: '0.95rem',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

