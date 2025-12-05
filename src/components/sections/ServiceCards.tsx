'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Home, Truck, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const services = [
  {
    icon: Home,
    title: '입주청소',
    description:
      '신축 시공 과정에서 남은 분진과 잔여 요소를 정리하며, 입주 전 편안하게 머물 수 있는 상태로 공간을 준비합니다.',
    color: '#1a3a6e',
  },
  {
    icon: Truck,
    title: '이사청소 (공실 기준)',
    description:
      '이전에 생활이 있었던 공간을 비워낸 뒤 정리하고, 공실 상태에서 다음 사용자가 편안하게 시작할 수 있도록 준비합니다.',
    color: '#2d5a9c',
  },
  {
    icon: Wrench,
    title: '인테리어 후 청소',
    description:
      '시공 과정에서 남은 흔적을 정돈하고, 입주 가능한 컨디션으로 편안히 사용할 수 있도록 준비합니다.',
    color: '#3d7dd8',
  },
];

export default function ServiceCards() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                color: '#3d7dd8',
              }}
            >
              Service
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                mb: 8,
                color: '#b0b0b0',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              공간의 용도와 상태에 맞는 전문 청소 서비스
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionCard
                  key={index}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#5B7C99',
                        boxShadow: '0 8px 30px rgba(91, 124, 153, 0.3)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        backgroundColor: service.color,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1, position: 'relative' }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: 1,
                          backgroundColor: `${service.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          border: `1px solid ${service.color}40`,
                        }}
                      >
                        <Icon size={36} color={service.color} />
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: '#ffffff',
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: '#b0b0b0',
                          lineHeight: 1.8,
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Link href="/service" style={{ textDecoration: 'none' }}>
                        <Button
                          variant="text"
                          sx={{
                            color: service.color,
                            fontWeight: 600,
                            p: 0,
                            display: 'flex',
                            gap: 0.5,
                            '&:hover': {
                              backgroundColor: 'transparent',
                              '& svg': {
                                transform: 'translateX(4px)',
                              },
                            },
                            '& svg': {
                              transition: 'transform 0.3s ease',
                            },
                          }}
                        >
                          자세히 보기
                          <ArrowRight size={20} />
                        </Button>
                      </Link>
                    </CardContent>
                  </MotionCard>
              );
            })}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}

