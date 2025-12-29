'use client';

import { Box, Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import {
  GraduationCap,
  Target,
  Wrench,
  Users,
  Video,
  Award,
  Briefcase,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Quote,
  Clock,
  BookOpen,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { colors, commonStyles } from '@/lib/theme/colors';
import Link from 'next/link';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// 아카데미 소개 항목
const aboutItems = [
  { icon: Target, text: '하루 한 집 시스템 기반 교육' },
  { icon: Wrench, text: '장비 운용부터 현장 동선·작업 순서까지 전수' },
  { icon: Video, text: '영상 리뷰와 결과 중심 훈련' },
  { icon: Award, text: '수료 후 파트너 및 팀장 진출 가능(선발형)' },
];

// 1주차 커리큘럼
const week1Curriculum = [
  '공간 구성 요소 분석',
  '오염 유형 이해',
  '현장 안전/장비 세팅 방법',
  '작업 동선 설계',
  '컬비 흡입 장비 운용',
  '스팀 장비·고온 처리 기준',
  '바닥 폴리셔 장비 실습',
  '친환경 약품 사용 기준·조합',
];

// 2주차 커리큘럼
const week2Curriculum = [
  '욕실 구조별 작업 케이스',
  '주방(후드·상판·배수부)',
  '창틀·샷시(내창) 세부 청소',
  '바닥 마감 실전 실습',
  '실제 고객 현장 참여',
  '전/후 결과 분석',
  '영상 리뷰 기반 피드백',
  '최종 테스트',
];

// 교육 특징
const programFeatures = [
  {
    icon: Target,
    title: '하루 한 집 기준 교육',
    description: '공간을 "끝까지 완성하는 방식"을 가르칩니다.',
  },
  {
    icon: Wrench,
    title: '장비 100% 실습 중심',
    description: '컬비·스팀·폴리셔 장비 직접 운용.',
  },
  {
    icon: Users,
    title: '현장 동행 실습 필수',
    description: '실제 고객 현장에서 작업 참여 → 즉시 피드백.',
  },
  {
    icon: Video,
    title: '영상 리뷰 시스템',
    description: '본인의 작업 과정·결과를 촬영하고 분석하며 완성도의 차이를 스스로 확인하는 방식.',
  },
  {
    icon: BookOpen,
    title: '브랜드 시스템 전수',
    description: '작업 기준, 현장 응대, 결과 전달 방식까지 일원화 교육.',
  },
  {
    icon: Award,
    title: '수료 후 파트너 기회',
    description: '우수 수료자는 믿맡청 외주·파트너 팀장으로 선발될 수 있음 (검증·평가 과정 포함)',
  },
];

// 수료 후 진로
const careerPaths = [
  { icon: Briefcase, text: '프리미엄 청소 브랜드 창업' },
  { icon: Users, text: '믿맡청 파트너' },
  { icon: Wrench, text: '전문 장비 기반 프리랜서 청소' },
  { icon: Target, text: '인테리어/입주 전문 하청 시공자' },
];

// 수강생 후기
const reviews = [
  { text: '"청소 기준이 이렇게 깊은 건지 처음 알았다."' },
  { text: '"장비 사용하는 법만 배워도 수강료 값어치가 난다."' },
  { text: '"현장 동행 실습이 제일 도움 됐다."' },
  { text: '"작업 순서가 잡히니까 청소 속도부터 완성도까지 다 달라졌다."' },
];

export default function AcademyPage() {
  return (
    <Box key="academy-page">
      {/* 섹션 1: Hero Section */}
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="marble-bg flex items-center"
        sx={{
          color: colors.text.primary,
          minHeight: { xs: 'calc(100dvh - 56px)', md: 'calc(100dvh - 72px)' },
          py: { xs: 8, md: 12 },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.darkest,
            backgroundImage: colors.gradient.blueRadialStrong,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: colors.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: colors.shadow.blue,
                }}
              >
                <GraduationCap size={40} color="white" />
              </Box>
            </Box>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                mb: 2,
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontWeight: 700,
                color: colors.text.primary,
              }}
            >
              믿맡청 아카데미
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                fontWeight: 500,
                color: colors.primary.light,
              }}
            >
              하루 한 집 프리미엄 청소의 기준을 배우는 곳
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              sx={{
                textAlign: 'center',
                maxWidth: '700px',
                mx: 'auto',
                mb: 5,
                lineHeight: 2,
                fontSize: { xs: '0.95rem', md: '1.15rem' },
                color: colors.text.secondary,
              }}
            >
              현장에서 바로 통하는 실무 중심 교육.
              <br />
              단순 '청소 방법'이 아니라
              <br />
              '기준·장비·작업 순서·품질 완성법'을 가르칩니다.
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                component={Link}
                href="#application"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: colors.primary.main,
                  color: colors.text.primary,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: colors.shadow.blue,
                  '&:hover': {
                    backgroundColor: colors.primary.dark,
                    boxShadow: colors.shadow.blueHover,
                  },
                }}
              >
                모집 안내 보기
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: colors.primary.main,
                  color: colors.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: `${colors.primary.main}15`,
                    borderColor: colors.primary.light,
                  },
                }}
                onClick={() => {
                  window.open('https://forms.gle/eEZg55bKsdxjAhBw9', '_blank')
                }}
              >
                지원서 작성
              </Button>
            </Box>
          </motion.div>
        </Container>
      </MotionBox>

      {/* 섹션 2: 아카데미 소개 */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.overlayMedium,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.text.primary,
                mb: 3,
              }}
            >
              프리미엄 청소는 기술입니다.
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                maxWidth: '700px',
                mx: 'auto',
                mb: 6,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: colors.text.secondary,
              }}
            >
              믿맡청 아카데미는 실제 고객 현장을 기준으로 한 2주 실무형 교육 과정입니다.
              <br />
              단순 이론이 아닌 '현장에서 바로 통하는 기준'을 배웁니다.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {aboutItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionBox
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1, duration: 0.5 },
                    },
                  }}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor: colors.background.card,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.border.blue}`,
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: colors.primary.main,
                      boxShadow: colors.shadow.hover,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      backgroundColor: colors.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} color="white" />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: colors.text.primary,
                    }}
                  >
                    {item.text}
                  </Typography>
                </MotionBox>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 섹션 3: 교육 과정 (Curriculum) */}
      <Box
        className="marble-bg"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.darkest,
            backgroundImage: colors.gradient.blueRadial,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.primary.main,
                mb: 2,
              }}
            >
              교육 과정
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                mb: 6,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 500,
                color: colors.text.primary,
              }}
            >
              2주 실무 교육 프로그램
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* 1주차 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                sx={{
                  height: '100%',
                  backgroundColor: colors.background.card,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border.blue}`,
                  '&:hover': {
                    borderColor: colors.primary.main,
                    boxShadow: colors.shadow.hover,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: colors.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Clock size={24} color="white" />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: colors.primary.main }}
                    >
                      1주차
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      mb: 3,
                      fontSize: '1.1rem',
                      color: colors.text.secondary,
                    }}
                  >
                    입주·이사청소 기본 구조 이해
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {week1Curriculum.map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle
                          size={18}
                          style={{ marginRight: '10px', flexShrink: 0 }}
                          color={colors.primary.main}
                        />
                        <Typography sx={{ color: colors.text.secondary, fontSize: '0.95rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>

            {/* 2주차 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                sx={{
                  height: '100%',
                  backgroundColor: colors.background.card,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border.blue}`,
                  '&:hover': {
                    borderColor: colors.primary.main,
                    boxShadow: colors.shadow.hover,
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: colors.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <Wrench size={24} color="white" />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: colors.primary.main }}
                    >
                      2주차
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      mb: 3,
                      fontSize: '1.1rem',
                      color: colors.text.secondary,
                    }}
                  >
                    구역별 실무 청소
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {week2Curriculum.map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle
                          size={18}
                          style={{ marginRight: '10px', flexShrink: 0 }}
                          color={colors.primary.main}
                        />
                        <Typography sx={{ color: colors.text.secondary, fontSize: '0.95rem' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 섹션 4: 교육 특징 */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.overlayHeavy,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.text.primary,
              }}
            >
              믿맡청 아카데미는 다릅니다
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {programFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      },
                    }}
                    sx={{
                      p: 3,
                      height: '100%',
                      backgroundColor: colors.background.card,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${colors.border.blue}`,
                      borderRadius: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: colors.primary.main,
                        boxShadow: colors.shadow.hover,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 45,
                          height: 45,
                          borderRadius: '50%',
                          backgroundColor: colors.primary.main,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} color="white" />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: '1rem',
                          color: colors.text.primary,
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        color: colors.text.secondary,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </MotionBox>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 섹션 5: 모집 요강 */}
      <Box
        id="application"
        className="marble-bg"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.darkest,
            backgroundImage: colors.gradient.blueRadialStrong,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.primary.main,
              }}
            >
              모집 요강
            </Typography>
          </motion.div>

          <MotionCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            sx={{
              backgroundColor: colors.background.card,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border.blueStrong}`,
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              {/* 한기수당 인원 */}
              <Box
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  pb: 4,
                  borderBottom: `1px solid ${colors.border.default}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    color: colors.text.tertiary,
                    mb: 1,
                  }}
                >
                  한기수당
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: colors.primary.main,
                  }}
                >
                  5명 소수 정예
                </Typography>
              </Box>

              {/* 상세 정보 */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Calendar size={24} color={colors.primary.main} />
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: colors.text.primary }}>
                      프로그램 기간
                    </Typography>
                    <Typography sx={{ color: colors.text.secondary }}>2주</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <BookOpen size={24} color={colors.primary.main} />
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: colors.text.primary }}>
                      교육 형태
                    </Typography>
                    <Typography sx={{ color: colors.text.secondary }}>
                      이론 + 장비 실습 + 현장 동행
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <MapPin size={24} color={colors.primary.main} />
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: colors.text.primary }}>
                      교육 장소
                    </Typography>
                    <Typography sx={{ color: colors.text.secondary }}>시흥사무실</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Users size={24} color={colors.primary.main} style={{ marginTop: 4 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: colors.text.primary, mb: 1 }}>
                      지원 자격
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Typography sx={{ color: colors.text.secondary, fontSize: '0.95rem' }}>
                        • 청소업 진입 희망자
                      </Typography>
                      <Typography sx={{ color: colors.text.secondary, fontSize: '0.95rem' }}>
                        • 프리미엄 청소 기준을 배우고 싶은 분
                      </Typography>
                      <Typography sx={{ color: colors.text.secondary, fontSize: '0.95rem' }}>
                        • 장비/실무 중심 교육을 원하는 분
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* 수강료 */}
              <Box
                sx={{
                  p: 3,
                  backgroundColor: `${colors.primary.main}15`,
                  borderRadius: 1,
                  border: `1px solid ${colors.border.blue}`,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: colors.primary.main,
                    mb: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  수강료
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                  <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <Typography sx={{ color: colors.text.tertiary, fontSize: '0.85rem', mb: 0.5 }}>
                      얼리버드
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: '1.5rem', color: colors.primary.main }}
                    >
                      550만원
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <Typography sx={{ color: colors.text.tertiary, fontSize: '0.85rem', mb: 0.5 }}>
                      정가
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: '1.5rem', color: colors.text.primary }}
                    >
                      880만원
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    textAlign: 'center',
                    mt: 2,
                    fontSize: '0.85rem',
                    color: colors.text.tertiary,
                  }}
                >
                  (기본 장비 제공·현장 실습 포함)
                </Typography>
              </Box>
            </CardContent>
          </MotionCard>
        </Container>
      </Box>

      {/* 섹션 6: 수료 후 진로 */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.overlayMedium,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.text.primary,
              }}
            >
              수료 후 가능한 진로
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {careerPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <MotionBox
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      },
                    }}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      backgroundColor: colors.background.card,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${colors.border.blue}`,
                      borderRadius: 1,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: colors.primary.main,
                        boxShadow: colors.shadow.hover,
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: colors.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <Icon size={28} color="white" />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: colors.text.primary,
                        fontSize: '1rem',
                      }}
                    >
                      {path.text}
                    </Typography>
                  </MotionBox>
                </Grid>
              );
            })}
          </Grid>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              sx={{
                textAlign: 'center',
                mt: 6,
                fontSize: '1.1rem',
                color: colors.text.secondary,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              강의가 아니라 진짜 '현장 기준'을 배웠다는 것이
              <br />
              경쟁력이 됩니다.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 섹션 7: 아카데미 후기 */}
      <Box
        className="marble-bg"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.darkest,
            backgroundImage: colors.gradient.blueRadial,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.primary.main,
              }}
            >
              실제 수강생 후기
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {reviews.map((review, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <MotionCard
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1, duration: 0.5 },
                    },
                  }}
                  sx={{
                    backgroundColor: colors.background.card,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${colors.border.blue}`,
                    height: '100%',
                    '&:hover': {
                      borderColor: colors.primary.main,
                      boxShadow: colors.shadow.hover,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Quote
                        size={24}
                        color={colors.primary.main}
                        style={{ flexShrink: 0, opacity: 0.7 }}
                      />
                      <Typography
                        sx={{
                          fontStyle: 'italic',
                          fontSize: '1.05rem',
                          lineHeight: 1.8,
                          color: colors.text.secondary,
                        }}
                      >
                        {review.text}
                      </Typography>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 섹션 8: 지원/문의 */}
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background.overlayHeavy,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h3"
              sx={{
                ...commonStyles.sectionTitle,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              지원 및 문의
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.primary.main,
                color: colors.text.primary,
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 4,
                boxShadow: colors.shadow.blue,
                '&:hover': {
                  backgroundColor: colors.primary.dark,
                  boxShadow: colors.shadow.blueHover,
                },
              }}
              onClick={() => {
                window.open('https://forms.gle/eEZg55bKsdxjAhBw9', '_blank')
              }}
            >
              지원서 작성하기
            </Button>

            <Typography
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: colors.text.secondary,
                maxWidth: '400px',
                mx: 'auto',
              }}
            >
              "한 공간을 완성하는 기술을 배우고 싶다면,
              <br />
              지금 시작하세요."
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

